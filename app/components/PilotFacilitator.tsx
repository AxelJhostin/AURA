"use client";

import { useState } from "react";
import type { Locale } from "../data/cases";
import { createPilotCode, normalizePilotCode } from "../lib/analytics";

type Props = {
  locale: Locale;
  activePilotCode: string;
  onActivateCode: (code: string) => void;
};

type PilotReport = {
  code: string;
  participants: number;
  missionStarts: number;
  evidenceCards: number;
  completedParticipants: number;
  completionRate: number;
  transferCompletions: number;
  averageTransferScore: number | null;
  averageMissionDurationSeconds: number | null;
  latestActivity: string | null;
  truncated: boolean;
};

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
          {report.participants === 0 && <p>{copy.empty}</p>}
        </div>
      )}

      <small className="facilitator-privacy">{copy.privacy}</small>
    </div>
  );
}
