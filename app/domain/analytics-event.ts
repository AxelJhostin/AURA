import { auraCases } from "../data/cases";
import { transferChallenge, transferOptionIds } from "../data/transfer";
import {
  PILOT_CODE_PATTERN,
  PILOT_EVALUATION_CASE_ID,
  PRODUCT_VERSION,
  type AnalyticsEventName,
  type AnalyticsStage,
} from "../lib/analytics";

const MAX_DURATION_MS = 60 * 60 * 1_000;
const MAX_CLOCK_DRIFT_MS = 24 * 60 * 60 * 1_000;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const allowedEventNames = new Set<AnalyticsEventName>([
  "mission_started",
  "initial_decision_recorded",
  "signal_selected",
  "source_opened",
  "action_selected",
  "reasoning_finding_selected",
  "reasoning_limit_selected",
  "evidence_card_generated",
  "mission_abandoned",
  "transfer_started",
  "transfer_choice_selected",
  "transfer_completed",
  "pilot_baseline_recorded",
  "pilot_exit_recorded",
]);

const allowedStages = new Set<AnalyticsStage>([
  "analyze",
  "uncover",
  "research",
  "act",
  "transfer",
  "survey",
]);

export type ValidatedAnalyticsEvent = {
  eventId: string;
  eventName: AnalyticsEventName;
  sessionId: string;
  pilotCode?: string;
  occurredAt: string;
  locale: "es" | "en";
  caseId?: string;
  stage?: AnalyticsStage;
  optionId?: string;
  durationMs?: number;
  transferScore?: number;
  productVersion: typeof PRODUCT_VERSION;
};

export type AnalyticsValidationResult =
  | { ok: true; event: ValidatedAnalyticsEvent }
  | { ok: false; error: "invalid_payload" | "invalid_event_context" };

function validOptionalString(value: unknown, maximum: number) {
  return (
    value === undefined ||
    (typeof value === "string" && value.length > 0 && value.length <= maximum)
  );
}

function validOption(
  eventName: AnalyticsEventName,
  caseId: string | undefined,
  optionId: string | undefined,
) {
  const noOptionEvents = new Set<AnalyticsEventName>([
    "mission_started",
    "evidence_card_generated",
    "mission_abandoned",
    "transfer_started",
    "transfer_completed",
  ]);

  if (noOptionEvents.has(eventName)) return optionId === undefined;

  if (
    eventName === "pilot_baseline_recorded" ||
    eventName === "pilot_exit_recorded"
  ) {
    return (
      caseId === PILOT_EVALUATION_CASE_ID &&
      typeof optionId === "string" &&
      /^confidence-[1-5]$/.test(optionId)
    );
  }

  if (eventName === "transfer_choice_selected") {
    return (
      caseId === transferChallenge.id &&
      typeof optionId === "string" &&
      transferOptionIds.has(optionId)
    );
  }

  const activeCase = auraCases.find((item) => item.id === caseId);
  if (!activeCase || typeof optionId !== "string") return false;

  if (
    eventName === "reasoning_finding_selected" ||
    eventName === "reasoning_limit_selected"
  ) {
    const allowedReasoningIds =
      eventName === "reasoning_finding_selected"
        ? new Set(["traced-finding", "viral-claim", "popularity-proof"])
        : new Set(["evidence-gap", "no-limit", "uncertainty-means-false"]);
    return allowedReasoningIds.has(optionId);
  }

  const list =
    eventName === "initial_decision_recorded"
      ? activeCase.initialChoices
      : eventName === "signal_selected"
        ? activeCase.signals
        : eventName === "source_opened"
          ? activeCase.sources
          : activeCase.actions;
  return list.some((item) => item.id === optionId);
}

function validEventShape(
  eventName: AnalyticsEventName,
  stage: AnalyticsStage | undefined,
  durationMs: number | undefined,
  transferScore: number | undefined,
) {
  const expectedStage: Partial<Record<AnalyticsEventName, AnalyticsStage>> = {
    mission_started: "analyze",
    initial_decision_recorded: "analyze",
    signal_selected: "uncover",
    source_opened: "research",
    action_selected: "act",
    reasoning_finding_selected: "act",
    reasoning_limit_selected: "act",
    evidence_card_generated: "act",
    transfer_started: "transfer",
    transfer_choice_selected: "transfer",
    transfer_completed: "transfer",
    pilot_baseline_recorded: "survey",
    pilot_exit_recorded: "survey",
  };
  const timedEvents = new Set<AnalyticsEventName>([
    "evidence_card_generated",
    "mission_abandoned",
    "transfer_completed",
  ]);

  if (
    eventName === "mission_abandoned"
      ? stage === undefined || stage === "transfer" || stage === "survey"
      : stage !== expectedStage[eventName]
  ) {
    return false;
  }

  if (timedEvents.has(eventName) !== (durationMs !== undefined)) {
    return false;
  }

  return eventName === "transfer_completed"
    ? transferScore !== undefined
    : transferScore === undefined;
}

export function validateAnalyticsEvent(
  payload: unknown,
  now = Date.now(),
): AnalyticsValidationResult {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, error: "invalid_payload" };
  }

  const body = payload as Record<string, unknown>;
  const eventId = body.eventId;
  const eventName = body.eventName;
  const sessionId = body.sessionId;
  const pilotCode = body.pilotCode;
  const occurredAt = body.occurredAt;
  const locale = body.locale;
  const caseId = body.caseId;
  const stage = body.stage;
  const optionId = body.optionId;
  const durationMs = body.durationMs;
  const transferScore = body.transferScore;
  const productVersion = body.productVersion;
  const occurredTimestamp =
    typeof occurredAt === "string" ? Date.parse(occurredAt) : Number.NaN;

  if (
    typeof eventId !== "string" ||
    !UUID_PATTERN.test(eventId) ||
    typeof eventName !== "string" ||
    !allowedEventNames.has(eventName as AnalyticsEventName) ||
    typeof sessionId !== "string" ||
    !UUID_PATTERN.test(sessionId) ||
    (pilotCode !== undefined &&
      (typeof pilotCode !== "string" ||
        !PILOT_CODE_PATTERN.test(pilotCode))) ||
    typeof occurredAt !== "string" ||
    !Number.isFinite(occurredTimestamp) ||
    Math.abs(now - occurredTimestamp) > MAX_CLOCK_DRIFT_MS ||
    (locale !== "es" && locale !== "en") ||
    !validOptionalString(caseId, 80) ||
    !validOptionalString(stage, 20) ||
    (stage !== undefined &&
      !allowedStages.has(stage as AnalyticsStage)) ||
    !validOptionalString(optionId, 80) ||
    (durationMs !== undefined &&
      (!Number.isInteger(durationMs) ||
        (durationMs as number) < 0 ||
        (durationMs as number) > MAX_DURATION_MS)) ||
    (transferScore !== undefined &&
      (!Number.isInteger(transferScore) ||
        (transferScore as number) < 0 ||
        (transferScore as number) > transferChallenge.maxScore)) ||
    productVersion !== PRODUCT_VERSION ||
    !validOption(
      eventName as AnalyticsEventName,
      caseId as string | undefined,
      optionId as string | undefined,
    )
  ) {
    return { ok: false, error: "invalid_payload" };
  }

  const typedEventName = eventName as AnalyticsEventName;
  const typedCaseId = caseId as string | undefined;
  const typedStage = stage as AnalyticsStage | undefined;
  const typedDuration = durationMs as number | undefined;
  const typedScore = transferScore as number | undefined;
  const isTransferEvent = typedEventName.startsWith("transfer_");
  const isSurveyEvent =
    typedEventName === "pilot_baseline_recorded" ||
    typedEventName === "pilot_exit_recorded";

  if (
    (isTransferEvent && typedCaseId !== transferChallenge.id) ||
    (isSurveyEvent && typedCaseId !== PILOT_EVALUATION_CASE_ID) ||
    (!isTransferEvent &&
      !isSurveyEvent &&
      !auraCases.some((item) => item.id === typedCaseId)) ||
    !validEventShape(
      typedEventName,
      typedStage,
      typedDuration,
      typedScore,
    )
  ) {
    return { ok: false, error: "invalid_event_context" };
  }

  return {
    ok: true,
    event: {
      eventId,
      eventName: typedEventName,
      sessionId,
      pilotCode: pilotCode as string | undefined,
      occurredAt,
      locale,
      caseId: typedCaseId,
      stage: typedStage,
      optionId: optionId as string | undefined,
      durationMs: typedDuration,
      transferScore: typedScore,
      productVersion,
    },
  };
}

export function analyticsEventToRow(event: ValidatedAnalyticsEvent) {
  return {
    event_id: event.eventId,
    anonymous_session_id: event.sessionId,
    pilot_code: event.pilotCode ?? null,
    event_name: event.eventName,
    occurred_at: event.occurredAt,
    locale: event.locale,
    case_id: event.caseId ?? null,
    stage: event.stage ?? null,
    option_id: event.optionId ?? null,
    duration_ms: event.durationMs ?? null,
    transfer_score: event.transferScore ?? null,
    product_version: event.productVersion,
  };
}
