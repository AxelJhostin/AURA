import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { GET } from "../../app/api/aura/pilots/route";

const originalFetch = globalThis.fetch;
const originalUrl = process.env.SUPABASE_URL;
const originalSecret = process.env.SUPABASE_SECRET_KEY;
const pilotCode = "AURA-ABCDEFGHJKLM";

function request(code = pilotCode) {
  return new Request(
    `https://aura.example/api/aura/pilots?code=${encodeURIComponent(code)}`,
    {
      headers: {
        "x-forwarded-for": `203.0.113.${Math.floor(Math.random() * 200) + 1}`,
      },
    },
  );
}

beforeEach(() => {
  process.env.SUPABASE_URL = "https://project.supabase.co";
  process.env.SUPABASE_SECRET_KEY = "server-secret";
  globalThis.fetch = originalFetch;
});

afterEach(() => {
  if (originalUrl === undefined) delete process.env.SUPABASE_URL;
  else process.env.SUPABASE_URL = originalUrl;
  if (originalSecret === undefined) delete process.env.SUPABASE_SECRET_KEY;
  else process.env.SUPABASE_SECRET_KEY = originalSecret;
  globalThis.fetch = originalFetch;
});

test("returns only aggregate pilot metrics from Supabase rows", async () => {
  let capturedUrl = "";
  globalThis.fetch = async (input) => {
    capturedUrl = String(input);
    return Response.json([
      {
        anonymous_session_id: "session-a",
        event_name: "evidence_card_generated",
        option_id: null,
        transfer_score: null,
        duration_ms: 300_000,
        occurred_at: "2026-07-29T12:00:00.000Z",
        product_version: "1.0.0",
      },
      {
        anonymous_session_id: "session-a",
        event_name: "transfer_completed",
        option_id: null,
        transfer_score: 5,
        duration_ms: 30_000,
        occurred_at: "2026-07-29T11:59:00.000Z",
        product_version: "1.0.0",
      },
    ]);
  };

  const response = await GET(request());
  const report = await response.json();

  assert.equal(response.status, 200);
  assert.match(capturedUrl, /aura_learning_events/);
  assert.match(capturedUrl, /pilot_code=eq\.AURA-ABCDEFGHJKLM/);
  assert.equal(report.participants, 1);
  assert.equal(report.averageTransferScore, 5);
  assert.equal(report.averageMissionDurationSeconds, 300);
  assert.equal(JSON.stringify(report).includes("session-a"), false);
});

test("rejects invalid capability codes before querying Supabase", async () => {
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json([]);
  };

  const response = await GET(request("AURA-INVALID"));

  assert.equal(response.status, 400);
  assert.equal(called, false);
});

test("converts an upstream failure into a stable unavailable response", async () => {
  const originalConsoleError = console.error;
  console.error = () => undefined;
  globalThis.fetch = async () =>
    Response.json({ message: "failure" }, { status: 500 });

  try {
    const response = await GET(request());

    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), {
      error: "reporting_unavailable",
    });
  } finally {
    console.error = originalConsoleError;
  }
});
