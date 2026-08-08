import type { PilotReport } from "../domain/pilot-report";

/**
 * Deterministic, client-only sample used to demonstrate the aggregate-report
 * interface. It is never sent to Supabase and must not be presented as pilot
 * evidence or participant data.
 */
export const TECHNICAL_DEMO_PILOT_CODE = "AURA-DEMSAMPLEXYZ";

export const technicalDemoPilotReport: PilotReport = {
  code: TECHNICAL_DEMO_PILOT_CODE,
  productVersion: "1.0.0",
  transferMaxScore: 6,
  participants: 6,
  missionStarts: 6,
  evidenceCards: 5,
  completedParticipants: 5,
  completionRate: 83,
  transferCompletions: 5,
  averageTransferScore: 3.8,
  baselineResponses: 6,
  exitResponses: 5,
  matchedConfidenceResponses: 5,
  averageBaselineConfidence: 2.8,
  averageExitConfidence: 3.4,
  averageConfidenceDelta: 0.8,
  averageMissionDurationSeconds: 318,
  latestActivity: "2026-08-07T00:00:00.000Z",
  truncated: false,
};

export function technicalDemoReportFor(code: string): PilotReport | null {
  return code === TECHNICAL_DEMO_PILOT_CODE ? technicalDemoPilotReport : null;
}
