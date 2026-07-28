import { auraCases } from "../../../data/cases";
import { transferChallenge } from "../../../data/transfer";
import {
  PILOT_CODE_PATTERN,
  PRODUCT_VERSION,
  type AnalyticsEventName,
  type AnalyticsStage,
} from "../../../lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RateBucket = { count: number; resetAt: number };

const RATE_LIMIT = 120;
const RATE_WINDOW_MS = 60_000;
const MAX_BODY_BYTES = 2_000;
const MAX_DURATION_MS = 60 * 60 * 1_000;
const MAX_CLOCK_DRIFT_MS = 24 * 60 * 60 * 1_000;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const allowedEventNames = new Set<AnalyticsEventName>([
  "mission_started",
  "initial_decision_recorded",
  "signal_selected",
  "source_opened",
  "action_selected",
  "evidence_card_generated",
  "mission_abandoned",
  "transfer_started",
  "transfer_first_move_selected",
  "transfer_reason_selected",
  "transfer_completed",
]);
const allowedStages = new Set<AnalyticsStage>([
  "analyze",
  "uncover",
  "research",
  "act",
  "transfer",
]);

const globalForAuraEvents = globalThis as typeof globalThis & {
  auraEventRateBuckets?: Map<string, RateBucket>;
};
const rateBuckets =
  globalForAuraEvents.auraEventRateBuckets ?? new Map<string, RateBucket>();
globalForAuraEvents.auraEventRateBuckets = rateBuckets;

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

function validOptionalString(value: unknown, maximum: number) {
  return (
    value === undefined ||
    (typeof value === "string" && value.length > 0 && value.length <= maximum)
  );
}

function validOption(
  eventName: AnalyticsEventName,
  caseId: string | undefined,
  optionId: string | undefined,
) {
  const noOptionEvents = new Set<AnalyticsEventName>([
    "mission_started",
    "evidence_card_generated",
    "mission_abandoned",
    "transfer_started",
    "transfer_completed",
  ]);

  if (noOptionEvents.has(eventName)) return optionId === undefined;

  if (
    eventName === "transfer_first_move_selected" ||
    eventName === "transfer_reason_selected"
  ) {
    const list =
      eventName === "transfer_first_move_selected"
        ? transferChallenge.firstMoves
        : transferChallenge.reasons;
    return (
      caseId === transferChallenge.id &&
      typeof optionId === "string" &&
      list.some((item) => item.id === optionId)
    );
  }

  const activeCase = auraCases.find((item) => item.id === caseId);
  if (!activeCase || typeof optionId !== "string") return false;

  const list =
    eventName === "initial_decision_recorded"
      ? activeCase.initialChoices
      : eventName === "signal_selected"
        ? activeCase.signals
        : eventName === "source_opened"
          ? activeCase.sources
          : activeCase.actions;
  return list.some((item) => item.id === optionId);
}

function validEventShape(
  eventName: AnalyticsEventName,
  stage: AnalyticsStage | undefined,
  durationMs: number | undefined,
  transferScore: number | undefined,
) {
  const expectedStage: Partial<Record<AnalyticsEventName, AnalyticsStage>> = {
    mission_started: "analyze",
    initial_decision_recorded: "analyze",
    signal_selected: "uncover",
    source_opened: "research",
    action_selected: "act",
    evidence_card_generated: "act",
    transfer_started: "transfer",
    transfer_first_move_selected: "transfer",
    transfer_reason_selected: "transfer",
    transfer_completed: "transfer",
  };
  const timedEvents = new Set<AnalyticsEventName>([
    "evidence_card_generated",
    "mission_abandoned",
    "transfer_completed",
  ]);

  if (
    eventName === "mission_abandoned"
      ? stage === undefined || stage === "transfer"
      : stage !== expectedStage[eventName]
  ) {
    return false;
  }

  if (timedEvents.has(eventName) !== (durationMs !== undefined)) {
    return false;
  }

  return eventName === "transfer_completed"
    ? transferScore !== undefined
    : transferScore === undefined;
}

export async function POST(request: Request) {
  if (isRateLimited(clientId(request))) {
    return noStoreJson(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && requestOrigin !== new URL(request.url).origin) {
    return noStoreJson({ error: "origin_not_allowed" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return noStoreJson({ error: "payload_too_large" }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return noStoreJson({ error: "invalid_json" }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return noStoreJson({ error: "payload_too_large" }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return noStoreJson({ error: "invalid_json" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return noStoreJson({ error: "invalid_payload" }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const eventId = body.eventId;
  const eventName = body.eventName;
  const sessionId = body.sessionId;
  const pilotCode = body.pilotCode;
  const occurredAt = body.occurredAt;
  const locale = body.locale;
  const caseId = body.caseId;
  const stage = body.stage;
  const optionId = body.optionId;
  const durationMs = body.durationMs;
  const transferScore = body.transferScore;
  const productVersion = body.productVersion;
  const occurredTimestamp =
    typeof occurredAt === "string" ? Date.parse(occurredAt) : Number.NaN;

  if (
    typeof eventId !== "string" ||
    !UUID_PATTERN.test(eventId) ||
    typeof eventName !== "string" ||
    !allowedEventNames.has(eventName as AnalyticsEventName) ||
    typeof sessionId !== "string" ||
    !UUID_PATTERN.test(sessionId) ||
    (pilotCode !== undefined &&
      (typeof pilotCode !== "string" ||
        !PILOT_CODE_PATTERN.test(pilotCode))) ||
    typeof occurredAt !== "string" ||
    !Number.isFinite(occurredTimestamp) ||
    Math.abs(Date.now() - occurredTimestamp) > MAX_CLOCK_DRIFT_MS ||
    (locale !== "es" && locale !== "en") ||
    !validOptionalString(caseId, 80) ||
    !validOptionalString(stage, 20) ||
    (stage !== undefined &&
      !allowedStages.has(stage as AnalyticsStage)) ||
    !validOptionalString(optionId, 80) ||
    (durationMs !== undefined &&
      (!Number.isInteger(durationMs) ||
        (durationMs as number) < 0 ||
        (durationMs as number) > MAX_DURATION_MS)) ||
    (transferScore !== undefined &&
      (!Number.isInteger(transferScore) ||
        (transferScore as number) < 0 ||
        (transferScore as number) > 2)) ||
    productVersion !== PRODUCT_VERSION ||
    !validOption(
      eventName as AnalyticsEventName,
      caseId as string | undefined,
      optionId as string | undefined,
    )
  ) {
    return noStoreJson({ error: "invalid_payload" }, { status: 400 });
  }

  const isTransferEvent = eventName.startsWith("transfer_");
  if (
    (isTransferEvent && caseId !== transferChallenge.id) ||
    (!isTransferEvent &&
      !auraCases.some((item) => item.id === caseId)) ||
    !validEventShape(
      eventName as AnalyticsEventName,
      stage as AnalyticsStage | undefined,
      durationMs as number | undefined,
      transferScore as number | undefined,
    )
  ) {
    return noStoreJson({ error: "invalid_event_context" }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !supabaseSecretKey) {
    return noStoreJson(
      { stored: false, mode: "local_only" },
      { status: 202 },
    );
  }

  try {
    const response = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/rest/v1/aura_learning_events`,
      {
        method: "POST",
        headers: {
          apikey: supabaseSecretKey,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          event_id: eventId,
          anonymous_session_id: sessionId,
          pilot_code: pilotCode ?? null,
          event_name: eventName,
          occurred_at: occurredAt,
          locale,
          case_id: caseId ?? null,
          stage: stage ?? null,
          option_id: optionId ?? null,
          duration_ms: durationMs ?? null,
          transfer_score: transferScore ?? null,
          product_version: productVersion,
        }),
        cache: "no-store",
      },
    );

    if (response.status === 409) {
      return noStoreJson(
        { stored: true, deduplicated: true },
        { status: 200 },
      );
    }

    if (!response.ok) {
      console.error("AURA analytics insert failed:", response.status);
      return noStoreJson({ error: "storage_unavailable" }, { status: 503 });
    }

    return noStoreJson({ stored: true }, { status: 201 });
  } catch {
    return noStoreJson({ error: "storage_unavailable" }, { status: 503 });
  }
}
