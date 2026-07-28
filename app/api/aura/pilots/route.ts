import { PILOT_CODE_PATTERN } from "../../../lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RateBucket = { count: number; resetAt: number };
type PilotEventRow = {
  anonymous_session_id: string;
  event_name: string;
  option_id: string | null;
  transfer_score: number | null;
  duration_ms: number | null;
  occurred_at: string;
};

const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60_000;
const MAX_ROWS = 5_000;

const globalForPilotReports = globalThis as typeof globalThis & {
  auraPilotReportRateBuckets?: Map<string, RateBucket>;
};
const rateBuckets =
  globalForPilotReports.auraPilotReportRateBuckets ??
  new Map<string, RateBucket>();
globalForPilotReports.auraPilotReportRateBuckets = rateBuckets;

function noStoreJson(body: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

function clientId(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

function isRateLimited(id: string) {
  const now = Date.now();
  const current = rateBuckets.get(id);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(id, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT;
}

function roundedAverage(values: number[], digits = 1) {
  if (values.length === 0) return null;
  const multiplier = 10 ** digits;
  return (
    Math.round(
      (values.reduce((total, value) => total + value, 0) / values.length) *
        multiplier,
    ) / multiplier
  );
}

function confidenceScore(optionId: string | null) {
  const match = optionId?.match(/^confidence-([1-5])$/);
  return match ? Number(match[1]) : null;
}

export async function GET(request: Request) {
  if (isRateLimited(clientId(request))) {
    return noStoreJson(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  const requestUrl = new URL(request.url);
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && requestOrigin !== requestUrl.origin) {
    return noStoreJson({ error: "origin_not_allowed" }, { status: 403 });
  }

  const code = requestUrl.searchParams.get("code")?.trim().toUpperCase() ?? "";
  if (!PILOT_CODE_PATTERN.test(code)) {
    return noStoreJson({ error: "invalid_pilot_code" }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !supabaseSecretKey) {
    return noStoreJson({ error: "reporting_unavailable" }, { status: 503 });
  }

  const query = new URLSearchParams({
    select:
      "anonymous_session_id,event_name,option_id,transfer_score,duration_ms,occurred_at",
    pilot_code: `eq.${code}`,
    order: "occurred_at.desc",
    limit: String(MAX_ROWS),
  });

  try {
    const response = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/rest/v1/aura_learning_events?${query}`,
      {
        headers: { apikey: supabaseSecretKey },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("AURA pilot report failed:", response.status);
      return noStoreJson({ error: "reporting_unavailable" }, { status: 503 });
    }

    const rows = (await response.json()) as PilotEventRow[];
    const participants = new Set(
      rows.map((row) => row.anonymous_session_id),
    );
    const completedSessions = new Set(
      rows
        .filter((row) => row.event_name === "evidence_card_generated")
        .map((row) => row.anonymous_session_id),
    );
    const transferRows = rows.filter(
      (row) =>
        row.event_name === "transfer_completed" &&
        typeof row.transfer_score === "number",
    );
    const missionDurationRows = rows.filter(
      (row) =>
        row.event_name === "evidence_card_generated" &&
        typeof row.duration_ms === "number",
    );
    const missionStarts = rows.filter(
      (row) => row.event_name === "mission_started",
    ).length;
    const evidenceCards = rows.filter(
      (row) => row.event_name === "evidence_card_generated",
    ).length;
    const baselineBySession = new Map<string, number>();
    const exitBySession = new Map<string, number>();

    for (const row of rows) {
      const score = confidenceScore(row.option_id);
      if (score === null) continue;
      if (
        row.event_name === "pilot_baseline_recorded" &&
        !baselineBySession.has(row.anonymous_session_id)
      ) {
        baselineBySession.set(row.anonymous_session_id, score);
      }
      if (
        row.event_name === "pilot_exit_recorded" &&
        !exitBySession.has(row.anonymous_session_id)
      ) {
        exitBySession.set(row.anonymous_session_id, score);
      }
    }

    const confidenceDeltas = [...baselineBySession.entries()]
      .filter(([sessionId]) => exitBySession.has(sessionId))
      .map(
        ([sessionId, baseline]) =>
          (exitBySession.get(sessionId) as number) - baseline,
      );

    return noStoreJson({
      code,
      participants: participants.size,
      missionStarts,
      evidenceCards,
      completedParticipants: completedSessions.size,
      completionRate:
        participants.size === 0
          ? 0
          : Math.round((completedSessions.size / participants.size) * 100),
      transferCompletions: transferRows.length,
      averageTransferScore: roundedAverage(
        transferRows.map((row) => row.transfer_score as number),
      ),
      baselineResponses: baselineBySession.size,
      exitResponses: exitBySession.size,
      matchedConfidenceResponses: confidenceDeltas.length,
      averageBaselineConfidence: roundedAverage([
        ...baselineBySession.values(),
      ]),
      averageExitConfidence: roundedAverage([...exitBySession.values()]),
      averageConfidenceDelta: roundedAverage(confidenceDeltas),
      averageMissionDurationSeconds: (() => {
        const average = roundedAverage(
          missionDurationRows.map((row) => row.duration_ms as number),
          0,
        );
        return average === null ? null : Math.round(average / 1_000);
      })(),
      latestActivity: rows[0]?.occurred_at ?? null,
      truncated: rows.length === MAX_ROWS,
    });
  } catch {
    return noStoreJson({ error: "reporting_unavailable" }, { status: 503 });
  }
}
