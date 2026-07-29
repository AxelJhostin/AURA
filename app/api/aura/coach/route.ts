import OpenAI from "openai";
import { getAuraCase } from "../../../data/cases";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Locale = "es" | "en";
type CoachStage = "analyze" | "uncover" | "research" | "act";
type RateBucket = { count: number; resetAt: number };

const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 60_000;
const MAX_BODY_BYTES = 2_500;

const allowedStages = new Set<CoachStage>([
  "analyze",
  "uncover",
  "research",
  "act",
]);

const globalForAura = globalThis as typeof globalThis & {
  auraCoachRateBuckets?: Map<string, RateBucket>;
};

const rateBuckets =
  globalForAura.auraCoachRateBuckets ?? new Map<string, RateBucket>();
globalForAura.auraCoachRateBuckets = rateBuckets;

function noStoreJson(body: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

function clientId(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

function isRateLimited(id: string) {
  const now = Date.now();
  const current = rateBuckets.get(id);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(id, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT;
}

function validSelection(
  value: unknown,
  allowed: Set<string>,
  maximum: number,
): value is string[] {
  return (
    Array.isArray(value) &&
    value.length <= maximum &&
    value.every((item) => typeof item === "string" && allowed.has(item))
  );
}

function cleanQuestion(value: string) {
  const compact = value
    .replace(/\s+/g, " ")
    .replace(/^(Pregunta AURA|AURA asks)\s*:\s*/i, "")
    .replace(/^["“]|["”]$/g, "")
    .trim();

  if (!compact) return "";
  const firstQuestion = compact.indexOf("?");
  const singleQuestion =
    firstQuestion >= 0 ? compact.slice(0, firstQuestion + 1) : `${compact}?`;
  return singleQuestion.slice(0, 280);
}

export async function POST(request: Request) {
  if (isRateLimited(clientId(request))) {
    return noStoreJson(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && requestOrigin !== new URL(request.url).origin) {
    return noStoreJson({ error: "origin_not_allowed" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return noStoreJson({ error: "payload_too_large" }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return noStoreJson({ error: "invalid_json" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return noStoreJson({ error: "invalid_payload" }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const caseId = body.caseId;
  const locale = body.locale;
  const stage = body.stage;
  const decision = body.decision;
  const action = body.action;
  const activeCase =
    typeof caseId === "string" ? getAuraCase(caseId) : undefined;

  if (!activeCase) {
    return noStoreJson({ error: "invalid_case" }, { status: 400 });
  }

  const allowedDecisions = new Set(
    activeCase.initialChoices.map((item) => item.id),
  );
  const allowedSignals = new Set(activeCase.signals.map((item) => item.id));
  const allowedSources = new Set(activeCase.sources.map((item) => item.id));
  const allowedActions = new Set(activeCase.actions.map((item) => item.id));

  if (
    (locale !== "es" && locale !== "en") ||
    typeof stage !== "string" ||
    !allowedStages.has(stage as CoachStage) ||
    (decision !== "" &&
      (typeof decision !== "string" || !allowedDecisions.has(decision))) ||
    (action !== "" &&
      (typeof action !== "string" || !allowedActions.has(action))) ||
    !validSelection(body.signals, allowedSignals, activeCase.signals.length) ||
    !validSelection(body.sources, allowedSources, activeCase.sourceLimit)
  ) {
    return noStoreJson({ error: "invalid_payload" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return noStoreJson({ error: "ai_not_configured" }, { status: 503 });
  }

  const typedLocale = locale as Locale;
  const typedStage = stage as CoachStage;
  const decisionChoice = activeCase.initialChoices.find(
    (item) => item.id === decision,
  );
  const actionChoice = activeCase.actions.find((item) => item.id === action);
  const observations = [
    decisionChoice?.coachLabel,
    ...(body.signals as string[]).map(
      (id) =>
        activeCase.signals.find((item) => item.id === id)?.coachLabel ?? "",
    ),
    ...(body.sources as string[]).map(
      (id) =>
        activeCase.sources.find((item) => item.id === id)?.coachLabel ?? "",
    ),
    actionChoice?.coachLabel,
  ].filter(Boolean);

  const language = typedLocale === "es" ? "Spanish" : "English";
  const instructions = [
    "You are AURA, a Socratic media-and-information-literacy coach.",
    `Write in ${language}.`,
    "Ask exactly one concise question, with no introduction and no answer.",
    "The question must help the learner inspect evidence or justify an action.",
    "Never declare the claim true or false.",
    "Never invent sources, facts, studies, statistics, or user behavior.",
    "Do not reveal the final conclusion or tell the learner which option to choose.",
    "Do not mention that you are an AI.",
    "Use at most 28 words.",
  ].join(" ");

  const input = [
    `Case ID: ${activeCase.id}.`,
    `Educational case: ${activeCase.ai.scenario}`,
    `Known case evidence: ${activeCase.ai.knownEvidence}`,
    `Current A-U-R-A stage: ${typedStage}.`,
    `Observed learner actions: ${observations.join("; ") || "none yet"}.`,
    "Ask the single best next Socratic question for this exact stage and observed action.",
  ].join("\n");

  try {
    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL ?? "gpt-5.6",
      instructions,
      input,
      max_output_tokens: 120,
      reasoning: { effort: "low" },
      text: { verbosity: "low" },
      store: false,
    });

    const question = cleanQuestion(response.output_text);
    if (!question) {
      return noStoreJson({ error: "empty_model_response" }, { status: 502 });
    }

    return noStoreJson({ question });
  } catch (error) {
    console.error(
      "AURA coach request failed:",
      error instanceof Error ? error.message : "unknown_error",
    );
    return noStoreJson({ error: "model_request_failed" }, { status: 502 });
  }
}
