import {
  PILOT_CODE_PATTERN,
  PRODUCT_VERSION,
} from "../../../lib/analytics";
import { transferChallenge } from "../../../data/transfer";
import {
  buildPilotReport,
  type PilotEventRow,
} from "../../../domain/pilot-report";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RateBucket = { count: number; resetAt: number };
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
      "anonymous_session_id,event_name,option_id,transfer_score,duration_ms,occurred_at,product_version",
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

    const allRows = (await response.json()) as PilotEventRow[];
    return noStoreJson(
      buildPilotReport({
        code,
        allRows,
        productVersion: PRODUCT_VERSION,
        transferMaxScore: transferChallenge.maxScore,
        maximumRows: MAX_ROWS,
      }),
    );
  } catch {
    return noStoreJson({ error: "reporting_unavailable" }, { status: 503 });
  }
}
