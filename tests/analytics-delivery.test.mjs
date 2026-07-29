import assert from "node:assert/strict";
import test from "node:test";

const { sendAnalyticsEvent } = await import("../app/lib/analytics.ts");

function event(suffix) {
  return {
    eventId: `00000000-0000-4000-8000-${suffix.padStart(12, "0")}`,
    sessionId: "00000000-0000-4000-8000-000000000001",
    pilotCode: "AURA-ABCDEFGHJKLM",
    eventName: "mission_started",
    occurredAt: "2026-07-29T00:00:00.000Z",
    locale: "es",
    caseId: "energy-memory",
    stage: "analyze",
    productVersion: "0.9.0",
  };
}

test("retries transient analytics POST failures", async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return new Response(null, { status: calls < 3 ? 503 : 201 });
  };

  assert.equal(await sendAnalyticsEvent(event("2")), true);
  assert.equal(calls, 3);
});

test("does not retry a rejected analytics payload", async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return new Response(null, { status: 400 });
  };

  assert.equal(await sendAnalyticsEvent(event("3")), false);
  assert.equal(calls, 1);
});

test("serializes analytics POST requests", async () => {
  let active = 0;
  let maximumActive = 0;
  globalThis.fetch = async () => {
    active += 1;
    maximumActive = Math.max(maximumActive, active);
    await new Promise((resolve) => setTimeout(resolve, 20));
    active -= 1;
    return new Response(null, { status: 201 });
  };

  const results = await Promise.all([
    sendAnalyticsEvent(event("4")),
    sendAnalyticsEvent(event("5")),
  ]);

  assert.deepEqual(results, [true, true]);
  assert.equal(maximumActive, 1);
});
