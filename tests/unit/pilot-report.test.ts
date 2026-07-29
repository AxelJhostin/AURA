import assert from "node:assert/strict";
import test from "node:test";
import {
  buildPilotReport,
  type PilotEventRow,
} from "../../app/domain/pilot-report";

function row(
  session: string,
  event: string,
  overrides: Partial<PilotEventRow> = {},
): PilotEventRow {
  return {
    anonymous_session_id: session,
    event_name: event,
    option_id: null,
    transfer_score: null,
    duration_ms: null,
    occurred_at: "2026-07-29T12:00:00.000Z",
    product_version: "0.9.0",
    ...overrides,
  };
}

test("builds anonymous aggregates and excludes previous product versions", () => {
  const rows = [
    row("session-a", "pilot_exit_recorded", {
      option_id: "confidence-5",
      occurred_at: "2026-07-29T12:06:00.000Z",
    }),
    row("session-a", "transfer_completed", {
      transfer_score: 6,
      duration_ms: 20_000,
    }),
    row("session-a", "evidence_card_generated", {
      duration_ms: 360_000,
    }),
    row("session-a", "mission_started"),
    row("session-a", "pilot_baseline_recorded", {
      option_id: "confidence-3",
    }),
    row("session-b", "evidence_card_generated", {
      duration_ms: 240_000,
    }),
    row("session-b", "mission_started"),
    row("legacy-session", "evidence_card_generated", {
      duration_ms: 1,
      product_version: "0.8.0",
    }),
  ];

  const report = buildPilotReport({
    code: "AURA-ABCDEFGHJKLM",
    allRows: rows,
    productVersion: "0.9.0",
    transferMaxScore: 6,
    maximumRows: 5_000,
  });

  assert.equal(report.participants, 2);
  assert.equal(report.missionStarts, 2);
  assert.equal(report.evidenceCards, 2);
  assert.equal(report.completionRate, 100);
  assert.equal(report.averageTransferScore, 6);
  assert.equal(report.averageMissionDurationSeconds, 300);
  assert.equal(report.averageConfidenceDelta, 2);
  assert.equal(report.latestActivity, "2026-07-29T12:06:00.000Z");
  assert.equal("anonymous_session_id" in report, false);
});

test("returns stable empty aggregates", () => {
  const report = buildPilotReport({
    code: "AURA-ABCDEFGHJKLM",
    allRows: [],
    productVersion: "0.9.0",
    transferMaxScore: 6,
    maximumRows: 5_000,
  });

  assert.equal(report.participants, 0);
  assert.equal(report.completionRate, 0);
  assert.equal(report.averageTransferScore, null);
  assert.equal(report.latestActivity, null);
});
