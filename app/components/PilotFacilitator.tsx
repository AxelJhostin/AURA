"use client";

import { useState } from "react";
import type { Locale } from "../data/cases";
import { createPilotCode, normalizePilotCode } from "../lib/analytics";

type Props = {
  locale: Locale;
  activePilotCode: string;
  onActivateCode: (code: string) => void;
};

export type PilotReport = {
  code: string;
  participants: number;
  missionStarts: number;
  evidenceCards: number;
  completedParticipants: number;
  completionRate: number;
  transferCompletions: number;
  averageTransferScore: number | null;
  baselineResponses: number;
  exitResponses: number;
  matchedConfidenceResponses: number;
  averageBaselineConfidence: number | null;
  averageExitConfidence: number | null;
  averageConfidenceDelta: number | null;
  averageMissionDurationSeconds: number | null;
  latestActivity: string | null;
  truncated: boolean;
};

function csvCell(value: string | number | boolean | null) {
  const text = value === null ? "" : String(value);
  const safeText = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replaceAll('"', '""')}"`;
}

export function pilotReportToCsv(report: PilotReport) {
  const rows: Array<[string, string | number | boolean | null]> = [
    ["report_timestamp", new Date().toISOString()],
    ["pilot_code", report.code],
    ["participants", report.participants],
    ["mission_starts", report.missionStarts],
    ["evidence_cards", report.evidenceCards],
    ["completed_participants", report.completedParticipants],
    ["completion_rate_percent", report.completionRate],
    ["transfer_completions", report.transferCompletions],
    ["average_transfer_score_out_of_2", report.averageTransferScore],
    ["baseline_responses", report.baselineResponses],
    ["exit_responses", report.exitResponses],
    ["matched_confidence_responses", report.matchedConfidenceResponses],
    ["average_baseline_confidence_out_of_5", report.averageBaselineConfidence],
    ["average_exit_confidence_out_of_5", report.averageExitConfidence],
    ["average_confidence_delta", report.averageConfidenceDelta],
    [
      "average_mission_duration_seconds",
      report.averageMissionDurationSeconds,
    ],
    ["latest_activity", report.latestActivity],
    ["report_truncated", report.truncated],
  ];

  return [
    "metric,value",
    ...rows.map(([metric, value]) =>
      [csvCell(metric), csvCell(value)].join(","),
    ),
  ].join("\n");
}

function downloadPilotReportCsv(report: PilotReport) {
  const blob = new Blob([pilotReportToCsv(report)], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `aura-pilot-${report.code}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function PilotFacilitator({
  locale,
  activePilotCode,
  onActivateCode,
}: Props) {
  const [codeInput, setCodeInput] = useState<string | null>(null);
  const [report, setReport] = useState<PilotReport | null>(null);
  const [status, setStatus] = useState<
    "idle" | "copied" | "loading" | "error"
  >("idle");

  const copy =
    locale === "es"
      ? {
          eyebrow: "MODO FACILITADOR · SIN CUENTAS",
          title: "Opera un piloto real con un enlace anónimo",
          body: "Genera un código, comparte el enlace y consulta resultados agregados. AURA no pide nombres, correos ni texto libre.",
          generate: "Generar nuevo piloto",
          codeLabel: "Código del piloto",
          activate: "Activar código",
          copyLink: "Copiar enlace",
          copied: "Enlace copiado",
          active: "Piloto activo",
          noActive: "Aún no hay un piloto activo en este dispositivo.",
          load: "Ver resultados agregados",
          loading: "Calculando…",
          error: "No se pudo cargar el reporte. Verifica el código o inténtalo de nuevo.",
          participants: "participantes",
          completion: "completaron misión",
          transfer: "transferencias",
          score: "promedio / 2",
          starts: "misiones iniciadas",
          cards: "tarjetas creadas",
          time: "tiempo promedio",
          seconds: "s",
          baseline: "confianza inicial / 5",
          exit: "confianza final / 5",
          delta: "cambio pre/post",
          paired: "respuestas pareadas",
          export: "Descargar resumen CSV",
          empty: "El reporte comenzará a llenarse cuando las personas usen el enlace y permitan métricas anónimas.",
          privacy: "El código funciona como acceso al agregado: compártelo solo con el equipo facilitador y participantes del piloto.",
        }
      : {
          eyebrow: "FACILITATOR MODE · NO ACCOUNTS",
          title: "Run a real pilot through an anonymous link",
          body: "Generate a code, share the link and inspect aggregate outcomes. AURA asks for no names, emails or free text.",
          generate: "Generate new pilot",
          codeLabel: "Pilot code",
          activate: "Activate code",
          copyLink: "Copy link",
          copied: "Link copied",
          active: "Active pilot",
          noActive: "There is no active pilot on this device yet.",
          load: "View aggregate results",
          loading: "Calculating…",
          error: "The report could not be loaded. Check the code or try again.",
          participants: "participants",
          completion: "completed mission",
          transfer: "transfers",
          score: "average / 2",
          starts: "missions started",
          cards: "cards created",
          time: "average time",
          seconds: "s",
          baseline: "baseline confidence / 5",
          exit: "exit confidence / 5",
          delta: "pre/post change",
          paired: "paired responses",
          export: "Download aggregate CSV",
          empty: "The report will populate once people use the link and allow anonymous metrics.",
          privacy: "The code grants access to the aggregate: share it only with the facilitation team and pilot participants.",
        };

  function generateCode() {
    const code = createPilotCode();
    setCodeInput(code);
    setReport(null);
    setStatus("idle");
    onActivateCode(code);
  }

  function activateCode() {
    const code = normalizePilotCode(codeInput ?? activePilotCode);
    if (!code) {
      setStatus("error");
      return;
    }
    setCodeInput(code);
    setReport(null);
    setStatus("idle");
    onActivateCode(code);
  }

  async function copyPilotLink() {
    const code = normalizePilotCode(codeInput ?? activePilotCode);
    if (!code) {
      setStatus("error");
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.set("pilot", code);
    url.hash = "mision";
    try {
      await navigator.clipboard.writeText(url.toString());
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
    }
  }

  async function loadReport() {
    const code = normalizePilotCode(codeInput ?? activePilotCode);
    if (!code) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(
        `/api/aura/pilots?code=${encodeURIComponent(code)}`,
        { cache: "no-store" },
      );
      if (!response.ok) throw new Error("report_failed");
      const nextReport = (await response.json()) as PilotReport;
      setCodeInput(code);
      setReport(nextReport);
      setStatus("idle");
    } catch {
      setReport(null);
      setStatus("error");
    }
  }

  return (
    <div className="facilitator-panel">
      <div className="facilitator-heading">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h3>{copy.title}</h3>
        </div>
        <p>{copy.body}</p>
      </div>

      <div className="facilitator-controls">
        <button
          className="button button-primary"
          type="button"
          onClick={generateCode}
        >
          {copy.generate} <span aria-hidden="true">＋</span>
        </button>
        <label>
          <span>{copy.codeLabel}</span>
          <input
            value={codeInput ?? activePilotCode}
            placeholder="AURA-XXXXXXXXXXXX"
            maxLength={17}
            spellCheck={false}
            autoComplete="off"
            onChange={(event) => setCodeInput(event.target.value.toUpperCase())}
          />
        </label>
        <button className="button button-ghost" type="button" onClick={activateCode}>
          {copy.activate}
        </button>
        <button className="button button-ghost" type="button" onClick={copyPilotLink}>
          {status === "copied" ? `✓ ${copy.copied}` : copy.copyLink}
        </button>
        <button
          className="button button-primary"
          type="button"
          disabled={status === "loading"}
          onClick={loadReport}
        >
          {status === "loading" ? copy.loading : copy.load}
        </button>
      </div>

      <div className="facilitator-status" aria-live="polite">
        <strong>{copy.active}</strong>
        <span>{activePilotCode || copy.noActive}</span>
      </div>

      {status === "error" && <p className="facilitator-error">{copy.error}</p>}

      {report && (
        <div className="pilot-report">
          <div>
            <strong>{report.participants}</strong>
            <span>{copy.participants}</span>
          </div>
          <div>
            <strong>{report.completionRate}%</strong>
            <span>{copy.completion}</span>
          </div>
          <div>
            <strong>{report.transferCompletions}</strong>
            <span>{copy.transfer}</span>
          </div>
          <div>
            <strong>
              {report.averageTransferScore === null
                ? "—"
                : `${report.averageTransferScore}/2`}
            </strong>
            <span>{copy.score}</span>
          </div>
          <div>
            <strong>{report.missionStarts}</strong>
            <span>{copy.starts}</span>
          </div>
          <div>
            <strong>{report.evidenceCards}</strong>
            <span>{copy.cards}</span>
          </div>
          <div>
            <strong>
              {report.averageMissionDurationSeconds === null
                ? "—"
                : `${report.averageMissionDurationSeconds}${copy.seconds}`}
            </strong>
            <span>{copy.time}</span>
          </div>
          <div>
            <strong>
              {report.averageBaselineConfidence === null
                ? "—"
                : `${report.averageBaselineConfidence}/5`}
            </strong>
            <span>{copy.baseline}</span>
          </div>
          <div>
            <strong>
              {report.averageExitConfidence === null
                ? "—"
                : `${report.averageExitConfidence}/5`}
            </strong>
            <span>{copy.exit}</span>
          </div>
          <div>
            <strong>
              {report.averageConfidenceDelta === null
                ? "—"
                : `${report.averageConfidenceDelta > 0 ? "+" : ""}${report.averageConfidenceDelta}`}
            </strong>
            <span>{copy.delta}</span>
          </div>
          <div>
            <strong>{report.matchedConfidenceResponses}</strong>
            <span>{copy.paired}</span>
          </div>
          {report.participants === 0 && <p>{copy.empty}</p>}
        </div>
      )}

      {report && (
        <button
          className="button button-ghost facilitator-export"
          type="button"
          onClick={() => downloadPilotReportCsv(report)}
        >
          {copy.export} <span aria-hidden="true">↓</span>
        </button>
      )}

      <small className="facilitator-privacy">{copy.privacy}</small>
    </div>
  );
}
