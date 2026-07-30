"use client";

import type { Locale } from "../data/cases";
import {
  PILOT_EVALUATION_CASE_ID,
  type AnalyticsEvent,
  type AnalyticsEventInput,
} from "../lib/analytics";

type Props = {
  locale: Locale;
  phase: "baseline" | "exit";
  sessionId: string;
  events: AnalyticsEvent[];
  trackEvent: (input: AnalyticsEventInput) => void;
};

export function PilotConfidence({
  locale,
  phase,
  sessionId,
  events,
  trackEvent,
}: Props) {
  const eventName =
    phase === "baseline" ? "pilot_baseline_recorded" : "pilot_exit_recorded";
  const recorded = events.find(
    (event) =>
      event.sessionId === sessionId && event.eventName === eventName,
  );
  const selectedScore = Number(recorded?.optionId?.split("-").at(-1) ?? 0);

  const copy =
    locale === "es"
      ? {
          eyebrow: phase === "baseline" ? "PULSO INICIAL · OPCIONAL" : "PULSO FINAL · OPCIONAL",
          title:
            phase === "baseline"
              ? "Antes de investigar"
              : "Después de aplicar el método",
          question:
            "¿Qué tan capaz te sientes de comprobar una oportunidad antes de entregar datos o dinero?",
          low: "Nada capaz",
          high: "Muy capaz",
          saved: "Respuesta anónima guardada",
          privacy:
            "Solo se registra una opción de 1 a 5; no se pide nombre ni texto libre.",
        }
      : {
          eyebrow:
            phase === "baseline"
              ? "BASELINE PULSE · OPTIONAL"
              : "EXIT PULSE · OPTIONAL",
          title:
            phase === "baseline"
              ? "Before investigating"
              : "After applying the method",
          question:
            "How capable do you feel of checking an opportunity before giving away data or money?",
          low: "Not capable",
          high: "Very capable",
          saved: "Anonymous response saved",
          privacy:
            "Only one coded option from 1 to 5 is recorded; no name or free text is requested.",
        };

  function selectScore(score: number) {
    if (recorded || !sessionId) return;
    trackEvent({
      eventName,
      locale,
      caseId: PILOT_EVALUATION_CASE_ID,
      stage: "survey",
      optionId: `confidence-${score}`,
    });
  }

  return (
    <section
      className={`pilot-confidence pilot-confidence-${phase}`}
      aria-labelledby={`pilot-confidence-${phase}-title`}
    >
      <div className="pilot-confidence-copy">
        <span>{copy.eyebrow}</span>
        <h3 id={`pilot-confidence-${phase}-title`}>{copy.title}</h3>
        <p>{copy.question}</p>
        <small id={`pilot-confidence-${phase}-privacy`}>{copy.privacy}</small>
      </div>
      <div
        className="confidence-scale"
        role="group"
        aria-describedby={`pilot-confidence-${phase}-privacy`}
        aria-label={copy.question}
      >
        <span>{copy.low}</span>
        <div>
          {[1, 2, 3, 4, 5].map((score) => (
            <button
              key={score}
              type="button"
              aria-label={`${score} / 5`}
              aria-pressed={selectedScore === score}
              disabled={Boolean(recorded)}
              onClick={() => selectScore(score)}
            >
              {score}
            </button>
          ))}
        </div>
        <span>{copy.high}</span>
      </div>
      {recorded && (
        <p className="confidence-saved" role="status">
          <span aria-hidden="true">✓</span> {copy.saved} · {selectedScore}/5
        </p>
      )}
    </section>
  );
}
