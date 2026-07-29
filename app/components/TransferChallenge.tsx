"use client";

import { useRef, useState } from "react";
import type { Locale } from "../data/cases";
import { transferChallenge } from "../data/transfer";
import {
  downloadAnalyticsCsv,
  type AnalyticsConsent,
  type AnalyticsEvent,
  type AnalyticsEventInput,
} from "../lib/analytics";
import { PilotConfidence } from "./PilotConfidence";

type Props = {
  locale: Locale;
  guidedCaseId: string;
  sessionId: string;
  events: AnalyticsEvent[];
  consent: AnalyticsConsent;
  trackEvent: (input: AnalyticsEventInput) => void;
};

function nowMs() {
  return Date.now();
}

export function TransferChallenge({
  locale,
  guidedCaseId,
  sessionId,
  events,
  consent,
  trackEvent,
}: Props) {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const startedAt = useRef(0);
  const challenge = transferChallenge;

  const copy =
    locale === "es"
      ? {
          score: "Puntuación de transferencia",
          events: "eventos codificados",
          guidedTime: "tiempo de misión guiada",
          seconds: "s",
          session: "sesión anónima",
          download: "Descargar reporte CSV",
          report: "Reporte de esta sesión",
          local: "Datos conservados solo en este dispositivo",
          granted: "Envío anónimo autorizado; existe respaldo local",
          pending: "Sin decisión de envío; existe respaldo local",
          selected: "Tu elección",
          achieved: "Conducta demostrada",
          review: "Revisar esta conducta",
        }
      : {
          score: "Transfer score",
          events: "coded events",
          guidedTime: "guided mission time",
          seconds: "s",
          session: "anonymous session",
          download: "Download CSV report",
          report: "This session’s report",
          local: "Data kept only on this device",
          granted: "Anonymous delivery allowed; local backup available",
          pending: "Delivery undecided; local backup available",
          selected: "Your choice",
          achieved: "Behavior demonstrated",
          review: "Review this behavior",
        };

  const sessionEventCount = events.filter(
    (event) => event.sessionId === sessionId,
  ).length;
  const guidedCompletion = [...events]
    .reverse()
    .find(
      (event) =>
        event.sessionId === sessionId &&
        event.caseId === guidedCaseId &&
        event.eventName === "evidence_card_generated",
    );
  const guidedSeconds = guidedCompletion?.durationMs
    ? Math.round(guidedCompletion.durationMs / 1_000)
    : 0;
  const allAnswered = challenge.questions.every(
    (question) => answers[question.id],
  );

  function startChallenge() {
    setStarted(true);
    setAnswers({});
    setCompleted(false);
    setScore(0);
    startedAt.current = nowMs();
    trackEvent({
      eventName: "transfer_started",
      locale,
      caseId: challenge.id,
      stage: "transfer",
    });
  }

  function chooseAnswer(questionId: string, optionId: string) {
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
    trackEvent({
      eventName: "transfer_choice_selected",
      locale,
      caseId: challenge.id,
      stage: "transfer",
      optionId,
    });
  }

  function finishChallenge() {
    if (!allAnswered) return;

    const finalScore = challenge.questions.reduce((total, question) => {
      const selected = question.options.find(
        (option) => option.id === answers[question.id],
      );
      return total + (selected?.score ?? 0);
    }, 0);

    setScore(finalScore);
    setCompleted(true);
    trackEvent({
      eventName: "transfer_completed",
      locale,
      caseId: challenge.id,
      stage: "transfer",
      durationMs: Math.max(0, nowMs() - startedAt.current),
      transferScore: finalScore,
    });
  }

  const feedback =
    score === challenge.maxScore
      ? challenge.feedback.strong
      : score >= 4
        ? challenge.feedback.solid
        : score >= 2
          ? challenge.feedback.emerging
          : challenge.feedback.needsPractice;

  return (
    <section className="transfer-challenge" aria-labelledby="transfer-title">
      <div className="transfer-intro">
        <div>
          <p className="eyebrow">{challenge.eyebrow[locale]}</p>
          <h3 id="transfer-title">{challenge.title[locale]}</h3>
        </div>
        <div>
          <p>{challenge.intro[locale]}</p>
          <small>{challenge.privacy[locale]}</small>
        </div>
      </div>

      {!started && (
        <button
          className="button button-primary transfer-start"
          type="button"
          onClick={startChallenge}
        >
          {challenge.start[locale]} <span aria-hidden="true">→</span>
        </button>
      )}

      {started && (
        <div className="transfer-workspace">
          <article className="transfer-scenario">
            <span>{challenge.scenarioLabel[locale]}</span>
            <p>{challenge.scenario[locale]}</p>
          </article>

          {!completed && (
            <>
              {challenge.questions.map((question, index) => (
                <fieldset className="transfer-question" key={question.id}>
                  <legend>
                    {index + 1}. {question.prompt[locale]}
                  </legend>
                  <div className="transfer-options">
                    {question.options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={
                          answers[question.id] === option.id
                            ? "transfer-option is-active"
                            : "transfer-option"
                        }
                        aria-pressed={answers[question.id] === option.id}
                        onClick={() =>
                          chooseAnswer(question.id, option.id)
                        }
                      >
                        <strong>{option.title[locale]}</strong>
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}

              <button
                className="button button-primary"
                type="button"
                disabled={!allAnswered}
                onClick={finishChallenge}
              >
                {challenge.submit[locale]} <span aria-hidden="true">→</span>
              </button>
            </>
          )}

          {completed && (
            <>
              <div className="transfer-result" aria-live="polite">
                <div className="transfer-score">
                  <span>{copy.score}</span>
                  <strong>
                    {score}/{challenge.maxScore}
                  </strong>
                </div>
                <div>
                  <span>{challenge.resultTitle[locale]}</span>
                  <h4>{feedback.title[locale]}</h4>
                  <p>{feedback.body[locale]}</p>
                </div>
                <button
                  className="button button-ghost"
                  type="button"
                  onClick={startChallenge}
                >
                  {challenge.reset[locale]}
                </button>
              </div>

              <div className="transfer-review">
                <div className="transfer-review-heading">
                  <span>{challenge.reviewTitle[locale]}</span>
                  <strong>
                    {score}/{challenge.maxScore}
                  </strong>
                </div>
                {challenge.questions.map((question) => {
                  const selected = question.options.find(
                    (option) => option.id === answers[question.id],
                  );
                  const achieved = selected?.score === 1;

                  return (
                    <article
                      className={achieved ? "is-achieved" : "needs-review"}
                      key={question.id}
                    >
                      <div>
                        <span>{question.criterion[locale]}</span>
                        <strong>
                          {achieved ? `✓ ${copy.achieved}` : `↗ ${copy.review}`}
                        </strong>
                      </div>
                      <p>
                        <b>{copy.selected}:</b> {selected?.title[locale] ?? "—"}
                      </p>
                      <small>{question.feedback[locale]}</small>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {completed && (
            <PilotConfidence
              locale={locale}
              phase="exit"
              sessionId={sessionId}
              events={events}
              trackEvent={trackEvent}
            />
          )}

          {completed && (
            <div className="session-report">
              <div className="session-report-heading">
                <div>
                  <span>{copy.report}</span>
                  <strong>
                    {copy.session} · {sessionId.slice(0, 8)}
                  </strong>
                </div>
                <small>
                  {consent === "granted"
                    ? copy.granted
                    : consent === "local-only"
                      ? copy.local
                      : copy.pending}
                </small>
              </div>
              <div className="session-metrics">
                <div>
                  <strong>{sessionEventCount}</strong>
                  <span>{copy.events}</span>
                </div>
                <div>
                  <strong>
                    {guidedSeconds}
                    {copy.seconds}
                  </strong>
                  <span>{copy.guidedTime}</span>
                </div>
                <div>
                  <strong>
                    {score}/{challenge.maxScore}
                  </strong>
                  <span>{copy.score}</span>
                </div>
              </div>
              <button
                className="button button-primary"
                type="button"
                disabled={events.length === 0}
                onClick={() =>
                  downloadAnalyticsCsv(
                    events.filter((event) => event.sessionId === sessionId),
                  )
                }
              >
                {copy.download} <span aria-hidden="true">↓</span>
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
