import OpenAI from "openai";

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
const allowedDecisions = new Set(["share", "pause", "dismiss"]);
const allowedSignals = new Set([
  "vague-authority",
  "precise-number",
  "urgency",
  "green",
]);
const allowedSources = new Set(["repost", "sponsor", "study", "guide"]);
const allowedActions = new Set(["repeat", "context", "hold", "report"]);

const globalForAura = globalThis as typeof globalThis & {
  auraCoachRateBuckets?: Map<string, RateBucket>;
};

const rateBuckets =
  globalForAura.auraCoachRateBuckets ?? new Map<string, RateBucket>();
globalForAura.auraCoachRateBuckets = rateBuckets;

const labels = {
  decision: {
    share: "would share the post",
    pause: "would pause to investigate",
    dismiss: "would dismiss the post",
  },
  signal: {
    "vague-authority": "noticed an unnamed study",
    "precise-number": "noticed the unexplained 40% figure",
    urgency: "noticed pressure to share before exams",
    green: "noticed the green visual design",
  },
  source: {
    repost: "opened a viral repost with no study link",
    sponsor: "opened the sponsor's commercial release",
    study: "opened the original study abstract",
    guide: "opened independent university guidance",
  },
  action: {
    repeat: "would repeat the claim as written",
    context: "would share only with context and limitations",
    hold: "would not share and would explain the uncertainty",
    report: "would automatically report the account",
  },
} as const;

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
  const locale = body.locale;
  const stage = body.stage;
  const decision = body.decision;
  const action = body.action;

  if (
    (locale !== "es" && locale !== "en") ||
    typeof stage !== "string" ||
    !allowedStages.has(stage as CoachStage) ||
    (decision !== "" &&
      (typeof decision !== "string" || !allowedDecisions.has(decision))) ||
    (action !== "" &&
      (typeof action !== "string" || !allowedActions.has(action))) ||
    !validSelection(body.signals, allowedSignals, 4) ||
    !validSelection(body.sources, allowedSources, 2)
  ) {
    return noStoreJson({ error: "invalid_payload" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return noStoreJson({ error: "ai_not_configured" }, { status: 503 });
  }

  const typedLocale = locale as Locale;
  const typedStage = stage as CoachStage;
  const observations = [
    typeof decision === "string" && decision
      ? labels.decision[decision as keyof typeof labels.decision]
      : null,
    ...(body.signals as string[]).map(
      (item) => labels.signal[item as keyof typeof labels.signal],
    ),
    ...(body.sources as string[]).map(
      (item) => labels.source[item as keyof typeof labels.source],
    ),
    typeof action === "string" && action
      ? labels.action[action as keyof typeof labels.action]
      : null,
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
    "Educational case: a simulated viral post claims that energy drinks improve memory by 40% and urges students to share it before exams.",
    "Known case evidence: the original study had 24 participants, measured short-term alertness rather than memory, and had commercial sponsorship. An independent university guide distinguishes alertness, memory, and risk.",
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
