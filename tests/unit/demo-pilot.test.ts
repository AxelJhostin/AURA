import assert from "node:assert/strict";
import test from "node:test";
import {
  TECHNICAL_DEMO_PILOT_CODE,
  technicalDemoReportFor,
} from "../../app/data/demo-pilot";
import { normalizePilotCode } from "../../app/lib/analytics";

test("keeps the technical demo distinct from participant analytics", () => {
  assert.equal(
    normalizePilotCode(TECHNICAL_DEMO_PILOT_CODE),
    TECHNICAL_DEMO_PILOT_CODE,
  );

  const report = technicalDemoReportFor(TECHNICAL_DEMO_PILOT_CODE);
  assert.ok(report);
  assert.equal(report.code, TECHNICAL_DEMO_PILOT_CODE);
  assert.equal(report.participants, 6);
  assert.equal(report.averageTransferScore, 3.8);
  assert.equal(technicalDemoReportFor("AURA-ABCDEFGHJKLM"), null);
});
