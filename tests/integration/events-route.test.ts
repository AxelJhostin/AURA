import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { POST } from "../../app/api/aura/events/route";
import { PRODUCT_VERSION } from "../../app/lib/analytics";

const originalFetch = globalThis.fetch;
const originalUrl = process.env.SUPABASE_URL;
const originalSecret = process.env.SUPABASE_SECRET_KEY;

function payload(overrides: Record<string, unknown> = {}) {
  return {
    eventId: "00000000-0000-4000-8000-000000000011",
    sessionId: "00000000-0000-4000-8000-000000000012",
    pilotCode: "AURA-ABCDEFGHJKLM",
    eventName: "mission_started",
    occurredAt: new Date().toISOString(),
    locale: "es",
    caseId: "energy-memory",
    stage: "analyze",
    productVersion: PRODUCT_VERSION,
    ...overrides,
  };
}

function request(
  body: string,
  headers: Record<string, string> = {},
) {
  return new Request("https://aura.example/api/aura/events", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": `198.51.100.${Math.floor(Math.random() * 200) + 1}`,
      ...headers,
    },
    body,
  });
}

beforeEach(() => {
  delete process.env.SUPABASE_URL;
  delete process.env.SUPABASE_SECRET_KEY;
  globalThis.fetch = originalFetch;
});

afterEach(() => {
  if (originalUrl === undefined) delete process.env.SUPABASE_URL;
  else process.env.SUPABASE_URL = originalUrl;
  if (originalSecret === undefined) delete process.env.SUPABASE_SECRET_KEY;
  else process.env.SUPABASE_SECRET_KEY = originalSecret;
  globalThis.fetch = originalFetch;
});

test("keeps valid analytics local when Supabase is not configured", async () => {
  const response = await POST(request(JSON.stringify(payload())));

  assert.equal(response.status, 202);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(await response.json(), {
    stored: false,
    mode: "local_only",
  });
});

test("validates and inserts a coded event through the Supabase REST boundary", async () => {
  process.env.SUPABASE_URL = "https://project.supabase.co/";
  process.env.SUPABASE_SECRET_KEY = "server-secret";
  let capturedUrl = "";
  let capturedInit: RequestInit | undefined;
  globalThis.fetch = async (input, init) => {
    capturedUrl = String(input);
    capturedInit = init;
    return new Response(null, { status: 201 });
  };

  const response = await POST(request(JSON.stringify(payload())));

  assert.equal(response.status, 201);
  assert.equal(
    capturedUrl,
    "https://project.supabase.co/rest/v1/aura_learning_events",
  );
  const headers = new Headers(capturedInit?.headers);
  assert.equal(headers.get("apikey"), "server-secret");
  assert.equal(headers.has("authorization"), false);
  const row = JSON.parse(String(capturedInit?.body));
  assert.equal(row.event_name, "mission_started");
  assert.equal(row.anonymous_session_id, payload().sessionId);
  assert.equal("email" in row, false);
});

test("treats an event-id conflict as successful deduplication", async () => {
  process.env.SUPABASE_URL = "https://project.supabase.co";
  process.env.SUPABASE_SECRET_KEY = "server-secret";
  globalThis.fetch = async () => new Response(null, { status: 409 });

  const response = await POST(request(JSON.stringify(payload())));

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    stored: true,
    deduplicated: true,
  });
});

test("rejects cross-origin and malformed requests before storage", async () => {
  const crossOrigin = await POST(
    request(JSON.stringify(payload()), {
      origin: "https://attacker.example",
    }),
  );
  const malformed = await POST(request("{broken-json"));

  assert.equal(crossOrigin.status, 403);
  assert.equal(malformed.status, 400);
});
