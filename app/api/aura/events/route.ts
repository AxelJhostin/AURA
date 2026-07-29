import {
  analyticsEventToRow,
  validateAnalyticsEvent,
} from "../../../domain/analytics-event";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RateBucket = { count: number; resetAt: number };

const RATE_LIMIT = 120;
const RATE_WINDOW_MS = 60_000;
const MAX_BODY_BYTES = 2_000;

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

  const validation = validateAnalyticsEvent(payload);
  if (!validation.ok) {
    return noStoreJson(
      { error: validation.error },
      { status: 400 },
    );
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
        body: JSON.stringify(analyticsEventToRow(validation.event)),
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
