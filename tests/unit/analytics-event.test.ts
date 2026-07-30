import assert from "node:assert/strict";
import test from "node:test";
import {
  analyticsEventToRow,
  validateAnalyticsEvent,
} from "../../app/domain/analytics-event";
import { PRODUCT_VERSION } from "../../app/lib/analytics";

const now = Date.parse("2026-07-29T12:00:00.000Z");

function event(overrides: Record<string, unknown> = {}) {
  return {
    eventId: "00000000-0000-4000-8000-000000000001",
    sessionId: "00000000-0000-4000-8000-000000000002",
    eventName: "mission_started",
    occurredAt: new Date(now).toISOString(),
    locale: "es",
    caseId: "scholarship-data-trap",
    stage: "analyze",
    productVersion: PRODUCT_VERSION,
    ...overrides,
  };
}

test("accepts a valid coded mission event and maps it to a database row", () => {
  const result = validateAnalyticsEvent(event(), now);
  assert.equal(result.ok, true);
  if (!result.ok) return;

  assert.deepEqual(analyticsEventToRow(result.event), {
    event_id: "00000000-0000-4000-8000-000000000001",
    anonymous_session_id: "00000000-0000-4000-8000-000000000002",
    pilot_code: null,
    event_name: "mission_started",
    occurred_at: "2026-07-29T12:00:00.000Z",
    locale: "es",
    case_id: "scholarship-data-trap",
    stage: "analyze",
    option_id: null,
    duration_ms: null,
    transfer_score: null,
    product_version: PRODUCT_VERSION,
  });
});

test("accepts the six-point transfer completion contract", () => {
  const result = validateAnalyticsEvent(
    event({
      eventName: "transfer_completed",
      caseId: "internship-partner-transfer-v1",
      stage: "transfer",
      durationMs: 15_000,
      transferScore: 6,
    }),
    now,
  );

  assert.equal(result.ok, true);
});

test("rejects unknown choices before they reach Supabase", () => {
  const result = validateAnalyticsEvent(
    event({
      eventName: "initial_decision_recorded",
      optionId: "invented-choice",
    }),
    now,
  );

  assert.deepEqual(result, { ok: false, error: "invalid_payload" });
});

test("rejects a valid event name in the wrong stage", () => {
  const result = validateAnalyticsEvent(
    event({
      eventName: "mission_abandoned",
      stage: "survey",
      durationMs: 2_000,
    }),
    now,
  );

  assert.deepEqual(result, {
    ok: false,
    error: "invalid_event_context",
  });
});

test("rejects stale timestamps and product-version mixing", () => {
  assert.equal(
    validateAnalyticsEvent(
      event({ occurredAt: "2026-07-20T12:00:00.000Z" }),
      now,
    ).ok,
    false,
  );
  assert.equal(
    validateAnalyticsEvent(event({ productVersion: "0.8.0" }), now).ok,
    false,
  );
});
