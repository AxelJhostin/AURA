export type PilotEventRow = {
  anonymous_session_id: string;
  event_name: string;
  option_id: string | null;
  transfer_score: number | null;
  duration_ms: number | null;
  occurred_at: string;
  product_version: string;
};

function roundedAverage(values: number[], digits = 1) {
  if (values.length === 0) return null;
  const multiplier = 10 ** digits;
  return (
    Math.round(
      (values.reduce((total, value) => total + value, 0) / values.length) *
        multiplier,
    ) / multiplier
  );
}

function confidenceScore(optionId: string | null) {
  const match = optionId?.match(/^confidence-([1-5])$/);
  return match ? Number(match[1]) : null;
}

function firstRowBySession(rows: PilotEventRow[]) {
  const firstBySession = new Map<string, PilotEventRow>();

  for (const row of rows) {
    const current = firstBySession.get(row.anonymous_session_id);
    if (
      !current ||
      Date.parse(row.occurred_at) < Date.parse(current.occurred_at)
    ) {
      firstBySession.set(row.anonymous_session_id, row);
    }
  }

  return [...firstBySession.values()];
}

export function buildPilotReport({
  code,
  allRows,
  productVersion,
  transferMaxScore,
  maximumRows,
}: {
  code: string;
  allRows: PilotEventRow[];
  productVersion: string;
  transferMaxScore: number;
  maximumRows: number;
}) {
  const rows = allRows.filter(
    (row) => row.product_version === productVersion,
  );
  const participants = new Set(
    rows.map((row) => row.anonymous_session_id),
  );
  const completedSessions = new Set(
    rows
      .filter((row) => row.event_name === "evidence_card_generated")
      .map((row) => row.anonymous_session_id),
  );
  const transferRows = firstRowBySession(
    rows.filter(
      (row) =>
        row.event_name === "transfer_completed" &&
        typeof row.transfer_score === "number",
    ),
  );
  const missionDurationRows = rows.filter(
    (row) =>
      row.event_name === "evidence_card_generated" &&
      typeof row.duration_ms === "number",
  );
  const recordedMissionStarts = rows.filter(
    (row) => row.event_name === "mission_started",
  ).length;
  const evidenceCards = rows.filter(
    (row) => row.event_name === "evidence_card_generated",
  ).length;
  const missionStarts = Math.max(recordedMissionStarts, evidenceCards);
  const baselineBySession = new Map<string, number>();
  const exitBySession = new Map<string, number>();

  for (const row of rows) {
    const score = confidenceScore(row.option_id);
    if (score === null) continue;
    if (
      row.event_name === "pilot_baseline_recorded" &&
      !baselineBySession.has(row.anonymous_session_id)
    ) {
      baselineBySession.set(row.anonymous_session_id, score);
    }
    if (
      row.event_name === "pilot_exit_recorded" &&
      !exitBySession.has(row.anonymous_session_id)
    ) {
      exitBySession.set(row.anonymous_session_id, score);
    }
  }

  const confidenceDeltas = [...baselineBySession.entries()]
    .filter(([sessionId]) => exitBySession.has(sessionId))
    .map(
      ([sessionId, baseline]) =>
        (exitBySession.get(sessionId) as number) - baseline,
    );
  const averageMissionDuration = roundedAverage(
    missionDurationRows.map((row) => row.duration_ms as number),
    0,
  );

  return {
    code,
    productVersion,
    transferMaxScore,
    participants: participants.size,
    missionStarts,
    evidenceCards,
    completedParticipants: completedSessions.size,
    completionRate:
      participants.size === 0
        ? 0
        : Math.round((completedSessions.size / participants.size) * 100),
    transferCompletions: transferRows.length,
    averageTransferScore: roundedAverage(
      transferRows.map((row) => row.transfer_score as number),
    ),
    baselineResponses: baselineBySession.size,
    exitResponses: exitBySession.size,
    matchedConfidenceResponses: confidenceDeltas.length,
    averageBaselineConfidence: roundedAverage([
      ...baselineBySession.values(),
    ]),
    averageExitConfidence: roundedAverage([...exitBySession.values()]),
    averageConfidenceDelta: roundedAverage(confidenceDeltas),
    averageMissionDurationSeconds:
      averageMissionDuration === null
        ? null
        : Math.round(averageMissionDuration / 1_000),
    latestActivity: rows[0]?.occurred_at ?? null,
    truncated: allRows.length === maximumRows,
  };
}
