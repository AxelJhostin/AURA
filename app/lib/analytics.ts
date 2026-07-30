import type { Locale } from "../data/cases";

export const PRODUCT_VERSION = "1.0.0";
export const PILOT_EVALUATION_CASE_ID = "pilot-evaluation";
export const PILOT_CODE_PATTERN =
  /^AURA-[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{12}$/;

export type AnalyticsConsent = "pending" | "granted" | "local-only";
export type AnalyticsEventName =
  | "mission_started"
  | "initial_decision_recorded"
  | "signal_selected"
  | "source_opened"
  | "action_selected"
  | "reasoning_finding_selected"
  | "reasoning_limit_selected"
  | "evidence_card_generated"
  | "mission_abandoned"
  | "transfer_started"
  | "transfer_choice_selected"
  | "transfer_completed"
  | "pilot_baseline_recorded"
  | "pilot_exit_recorded";

export type AnalyticsStage =
  | "analyze"
  | "uncover"
  | "research"
  | "act"
  | "transfer"
  | "survey";

export type AnalyticsEvent = {
  eventId: string;
  sessionId: string;
  pilotCode?: string;
  eventName: AnalyticsEventName;
  occurredAt: string;
  locale: Locale;
  caseId?: string;
  stage?: AnalyticsStage;
  optionId?: string;
  durationMs?: number;
  transferScore?: number;
  productVersion: typeof PRODUCT_VERSION;
};

export type AnalyticsEventInput = Omit<
  AnalyticsEvent,
  "eventId" | "sessionId" | "occurredAt" | "productVersion"
>;

const SESSION_KEY = "aura_anonymous_session_v1";
const EVENTS_KEY = "aura_anonymous_events_v1";
const CONSENT_KEY = "aura_analytics_consent_v1";
const MAX_LOCAL_EVENTS = 300;
const PILOT_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ANALYTICS_MAX_ATTEMPTS = 3;
const ANALYTICS_RETRY_BASE_MS = 250;
let analyticsSendQueue: Promise<void> = Promise.resolve();

function randomId() {
  const cryptoApi =
    typeof globalThis.crypto === "undefined"
      ? undefined
      : (globalThis.crypto as Partial<Crypto>);

  if (typeof cryptoApi?.randomUUID === "function") {
    return cryptoApi.randomUUID();
  }

  const bytes = new Uint8Array(16);
  if (typeof cryptoApi?.getRandomValues === "function") {
    cryptoApi.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
  return [
    hex.slice(0, 4).join(""),
    hex.slice(4, 6).join(""),
    hex.slice(6, 8).join(""),
    hex.slice(8, 10).join(""),
    hex.slice(10, 16).join(""),
  ].join("-");
}

export function getOrCreateSessionId() {
  if (typeof window === "undefined") return randomId();

  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;

    const created = randomId();
    window.sessionStorage.setItem(SESSION_KEY, created);
    return created;
  } catch {
    return randomId();
  }
}

export function normalizePilotCode(value: string | null | undefined) {
  const normalized = value?.trim().toUpperCase() ?? "";
  return PILOT_CODE_PATTERN.test(normalized) ? normalized : "";
}

export function createPilotCode() {
  const cryptoApi =
    typeof globalThis.crypto === "undefined"
      ? undefined
      : (globalThis.crypto as Partial<Crypto>);
  const bytes = new Uint8Array(12);

  if (typeof cryptoApi?.getRandomValues !== "function") {
    throw new Error("secure_random_unavailable");
  }

  cryptoApi.getRandomValues(bytes);
  const suffix = Array.from(
    bytes,
    (byte) => PILOT_ALPHABET[byte % PILOT_ALPHABET.length],
  ).join("");
  return `AURA-${suffix}`;
}

export function readAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return "pending";

  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "local-only" ? value : "pending";
  } catch {
    return "pending";
  }
}

export function writeAnalyticsConsent(value: Exclude<AnalyticsConsent, "pending">) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Consent remains valid for the current in-memory session.
  }
}

export function readLocalAnalyticsEvents() {
  if (typeof window === "undefined") return [] as AnalyticsEvent[];

  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(EVENTS_KEY) ?? "[]",
    ) as unknown;
    return Array.isArray(parsed) ? (parsed as AnalyticsEvent[]) : [];
  } catch {
    return [];
  }
}

export function createAnalyticsEvent(
  input: AnalyticsEventInput,
): AnalyticsEvent {
  return {
    ...input,
    eventId: randomId(),
    sessionId: getOrCreateSessionId(),
    occurredAt: new Date().toISOString(),
    productVersion: PRODUCT_VERSION,
  };
}

export function saveLocalAnalyticsEvent(event: AnalyticsEvent) {
  try {
    const events = readLocalAnalyticsEvents();
    events.push(event);
    window.localStorage.setItem(
      EVENTS_KEY,
      JSON.stringify(events.slice(-MAX_LOCAL_EVENTS)),
    );
  } catch {
    // The product remains usable when browser storage is unavailable.
  }
}

function wait(milliseconds: number) {
  return new Promise((resolve) => globalThis.setTimeout(resolve, milliseconds));
}

async function postAnalyticsEvent(event: AnalyticsEvent) {
  for (let attempt = 1; attempt <= ANALYTICS_MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch("/api/aura/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
        keepalive: true,
      });

      if (response.ok) return true;
      if (response.status < 500) return false;
    } catch {
      // A transient network failure can be retried with the same event ID.
    }

    if (attempt < ANALYTICS_MAX_ATTEMPTS) {
      await wait(ANALYTICS_RETRY_BASE_MS * 2 ** (attempt - 1));
    }
  }

  return false;
}

export function sendAnalyticsEvent(event: AnalyticsEvent) {
  const request = analyticsSendQueue.then(() => postAnalyticsEvent(event));
  analyticsSendQueue = request.then(
    () => undefined,
    () => undefined,
  );
  return request;
}

export function sessionEvents(sessionId: string) {
  return readLocalAnalyticsEvents().filter(
    (event) => event.sessionId === sessionId,
  );
}

function csvCell(value: string | number | undefined) {
  const text = value === undefined ? "" : String(value);
  const safeText = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replaceAll('"', '""')}"`;
}

export function analyticsEventsToCsv(events: AnalyticsEvent[]) {
  const headers = [
    "anonymous_session_id",
    "pilot_code",
    "event_name",
    "occurred_at",
    "locale",
    "case_id",
    "stage",
    "option_id",
    "duration_ms",
    "transfer_score",
    "product_version",
  ];
  const rows = events.map((event) =>
    [
      event.sessionId,
      event.pilotCode,
      event.eventName,
      event.occurredAt,
      event.locale,
      event.caseId,
      event.stage,
      event.optionId,
      event.durationMs,
      event.transferScore,
      event.productVersion,
    ]
      .map(csvCell)
      .join(","),
  );

  return [headers.join(","), ...rows].join("\n");
}

export function downloadAnalyticsCsv(events: AnalyticsEvent[]) {
  const blob = new Blob([analyticsEventsToCsv(events)], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `aura-session-${events[0]?.sessionId.slice(0, 8) ?? "anonymous"}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}
