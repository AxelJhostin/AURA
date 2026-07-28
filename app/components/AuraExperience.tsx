"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { auraCases, type Locale } from "../data/cases";
import {
  createAnalyticsEvent,
  getOrCreateSessionId,
  normalizePilotCode,
  readAnalyticsConsent,
  saveLocalAnalyticsEvent,
  sendAnalyticsEvent,
  sessionEvents,
  writeAnalyticsConsent,
  type AnalyticsConsent,
  type AnalyticsEvent,
  type AnalyticsEventInput,
} from "../lib/analytics";
import { TransferChallenge } from "./TransferChallenge";
import { PilotFacilitator } from "./PilotFacilitator";
import { PilotConfidence } from "./PilotConfidence";

type MissionStep = 0 | 1 | 2 | 3;
type CoachStage = "analyze" | "uncover" | "research" | "act";

const evidenceStateCopy = {
  es: {
    label: "ESTADO DE LA EVIDENCIA",
    "supported-with-limits": "Respaldada con límites",
    misleading: "Engañosa",
    insufficient: "Evidencia insuficiente",
  },
  en: {
    label: "EVIDENCE STATE",
    "supported-with-limits": "Supported with limits",
    misleading: "Misleading",
    insufficient: "Insufficient evidence",
  },
} as const;

const methodCards = [
  {
    letter: "A",
    color: "teal",
    title: { es: "Analiza", en: "Assess" },
    text: {
      es: "Reconoce tu reacción inicial y separa la afirmación de la emoción.",
      en: "Notice your first reaction and separate the claim from the emotion.",
    },
    output: { es: "Hipótesis verificable", en: "Checkable hypothesis" },
  },
  {
    letter: "U",
    color: "gold",
    title: { es: "Ubica", en: "Uncover" },
    text: {
      es: "Detecta señales, ausencias, contexto y posibles incentivos.",
      en: "Detect signals, missing context and possible incentives.",
    },
    output: { es: "Preguntas de investigación", en: "Research questions" },
  },
  {
    letter: "R",
    color: "violet",
    title: { es: "Rastrea", en: "Research" },
    text: {
      es: "Lee lateralmente y compara la fuente primaria con contexto independiente.",
      en: "Read laterally and compare the primary source with independent context.",
    },
    output: { es: "Mapa de evidencia", en: "Evidence map" },
  },
  {
    letter: "A",
    color: "coral",
    title: { es: "Actúa", en: "Act" },
    text: {
      es: "Decide de forma proporcional y deja una conclusión trazable.",
      en: "Make a proportionate decision and leave a traceable conclusion.",
    },
    output: { es: "Tarjeta de evidencia", en: "Evidence card" },
  },
];

const text = {
  es: {
    homeLabel: "AURA, inicio",
    navLabel: "Navegación principal",
    languageLabel: "Idioma",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    featuresLabel: "Características principales",
    moreOptions: "Más opciones",
    navMethod: "Método",
    navWhy: "Diferencia",
    navPilot: "Piloto",
    navTeam: "Equipo",
    navCta: "Probar misión",
    hackathon: "UNESCO Youth Hackathon 2026 · Prototipo funcional",
    heroTitleA: "De la reacción",
    heroTitleB: "a la evidencia.",
    heroBody:
      "AURA no decide qué creer. Entrena a jóvenes para investigar contenido viral, hacer visible su razonamiento y actuar con evidencia.",
    start: "Iniciar misión",
    explore: "Conocer el método",
    heroNote: "Caso educativo simulado · Sin registro · 3 minutos",
    artifact: "Artefacto de aprendizaje",
    cardStatus: "Conclusión trazable",
    claim: "Afirmación",
    claimShort: "“Mejora la memoria 40%”",
    evidence: "Evidencia",
    evidenceShort: "Fuente primaria + contexto",
    action: "Acción",
    actionShort: "Pausar y explicar límites",
    proofOne: "4 acciones memorables",
    proofTwo: "Evidencia siempre visible",
    proofThree: "Habilidad transferible",
    caseLibraryEyebrow: "BIBLIOTECA DE MISIONES",
    caseLibraryTitle: "Elige un caso para investigar",
    caseActive: "Caso activo",
    analyticsTitle: "Medición anónima del aprendizaje",
    analyticsBody:
      "AURA puede enviar eventos codificados —opciones, tiempo, puntuación y un pulso pre/post de 1 a 5— para evaluar el piloto. No incluye nombres, correos, texto libre, IP ni historial.",
    analyticsAllow: "Permitir métricas anónimas",
    analyticsLocal: "Mantener solo en este dispositivo",
    analyticsAllowed: "Envío anónimo permitido",
    analyticsLocalOnly: "Modo local activado",
    missionEyebrow: "LABORATORIO DE EVIDENCIA · CASO 01",
    missionTitle: "Investiga antes de decidir",
    missionBody:
      "No busques adivinar la respuesta de AURA. Deja que cada paso cambie —o confirme— tu decisión inicial.",
    simulated: "Contenido simulado para aprendizaje",
    postAccount: "Campus al Día",
    postMeta: "@campusaldia · hace 18 min",
    post:
      "Un estudio confirma que las bebidas energéticas mejoran la memoria un 40%. Compártelo con estudiantes antes de sus exámenes.",
    views: "128 mil visualizaciones",
    reposts: "3,4 mil compartidos",
    step: "Paso",
    stepNames: ["Analiza", "Ubica", "Rastrea", "Actúa"],
    back: "Atrás",
    continue: "Continuar",
    reset: "Reiniciar misión",
    stage0Title: "¿Qué harías en este momento?",
    stage0Body:
      "Registra tu reacción antes de investigar. No hay castigo por cambiar de opinión.",
    stage0Coach:
      "Pregunta AURA: ¿qué información necesitarías para sentir que tu decisión es responsable?",
    stage0Feedback:
      "Decisión inicial guardada. AURA todavía no te dice si la publicación es verdadera o falsa.",
    stage1Title: "¿Qué justifica una pausa?",
    stage1Body:
      "Selecciona las señales que deberían convertirse en preguntas de investigación.",
    stage1Coach:
      "Pregunta AURA: una cifra precisa puede parecer rigurosa. ¿Sabes qué variable representa?",
    selected: "seleccionadas",
    stage2Title: "Construye un mapa de evidencia",
    stage2Body:
      "Elige dos fuentes para abrir. Prioriza cercanía a la evidencia y contexto independiente.",
    stage2Coach:
      "Pregunta AURA: ¿quién hizo la afirmación original, qué midió y quién más puede contextualizarla?",
    sourcesSelected: "fuentes abiertas",
    simulatedSource: "Fuente simulada",
    sourceFile: "Expediente",
    sourcePublisher: "Procedencia",
    sourceDate: "Fecha",
    realReferences: "REFERENCIAS REALES",
    realReferencesTitle: "Contexto auditable del caso",
    realReferencesBody:
      "Estas referencias externas respaldan el contexto científico o el método de verificación. No sustituyen las piezas simuladas del caso.",
    published: "Publicado",
    accessed: "Consultado",
    openReference: "Abrir referencia original",
    mapClaim: "Afirmación viral",
    mapEvidence: "Hallazgo rastreado",
    mapGap: "Brecha",
    mapClaimText: "La memoria mejora 40%",
    mapEvidenceText: "El estudio midió alerta a corto plazo",
    mapGapText: "No demuestra memoria ni generalización",
    stage3Title: "Actúa de forma proporcional",
    stage3Body:
      "Tu acción debe corresponder a la fuerza y a los límites de la evidencia disponible.",
    stage3Coach:
      "Pregunta AURA: si la evidencia no demuestra la frase, ¿cómo puedes evitar amplificarla sin convertir incertidumbre en censura?",
    generate: "Generar tarjeta de evidencia",
    cardTitle: "Tarjeta de evidencia",
    cardSubtitle: "Caso 01 · emitida por la persona, no por la IA",
    original: "Afirmación original",
    consulted: "Fuentes consultadas",
    conclusion: "Conclusión provisional",
    conclusionText:
      "La evidencia revisada no respalda que la memoria mejore 40%. El estudio disponible es pequeño, mide alerta y tiene patrocinio comercial.",
    decision: "Decisión tomada",
    habit: "Habilidad transferible",
    habitText:
      "Antes de compartir una cifra, comprobar qué se midió, con cuántas personas y quién financió la fuente.",
    copied: "Tarjeta copiada",
    copy: "Copiar resumen",
    newCase: "Probar de nuevo",
    notVerdict: "AURA no emitió un veredicto. Tú construiste una conclusión rastreable.",
    methodEyebrow: "UNA ACCIÓN, NO SOLO UN NOMBRE",
    methodTitle: "El método A-U-R-A",
    methodBody:
      "Cada etapa exige una conducta observable. El aprendizaje queda en artefactos, no en obedecer al asistente.",
    output: "Produce",
    differenceEyebrow: "DIFERENCIA ESTRATÉGICA",
    differenceTitle: "No es otro detector de noticias falsas.",
    differenceBody:
      "Los verificadores resuelven una pieza. AURA entrena la habilidad necesaria para investigar la siguiente.",
    versusA: "Un veredicto automático",
    versusAText: "La herramienta decide y el usuario consume la respuesta.",
    versusB: "Un laboratorio de evidencia",
    versusBText: "La persona compara fuentes, justifica una acción y prueba transferencia.",
    principles: [
      "La IA pregunta antes de explicar.",
      "Las fuentes permanecen visibles.",
      "La incertidumbre es una salida válida.",
      "El progreso mide acciones, no creencias.",
    ],
    pilotEyebrow: "PRIMERA PRUEBA EN ECUADOR",
    pilotTitle: "Del prototipo a evidencia de aprendizaje",
    pilotBody:
      "El MVP se validará con jóvenes universitarios de 18 a 24 años. Estas son metas de prueba, no resultados inventados.",
    pilotStats: [
      ["30–50", "participantes objetivo"],
      ["ES / EN", "experiencia bilingüe"],
      ["3 min", "misión demostrable"],
      ["0", "datos sensibles requeridos"],
    ],
    pilotSteps: [
      ["01", "Probar", "Completar una misión y registrar decisiones."],
      ["02", "Medir", "Comparar búsqueda, fuentes y justificación."],
      ["03", "Transferir", "Aplicar la habilidad a un caso nuevo."],
      ["04", "Multiplicar", "Facilitar AURA Circles con casos locales."],
    ],
    teamEyebrow: "EQUIPO NÚCLEO CONFIRMADO",
    teamTitle: "Producto y estrategia desde el primer día",
    teamBody:
      "AURA empieza con dos perfiles complementarios y mantiene abiertas dos plazas solo si fortalecen pedagogía, investigación o implementación.",
    axelRole: "Liderazgo técnico",
    axelText:
      "Ingeniero de software. Arquitectura, desarrollo del MVP, integración responsable de IA, analítica y demo.",
    nicolRole: "Estrategia e impacto",
    nicolText:
      "Estudiante de Negocios Internacionales. Público, piloto, alianzas, sostenibilidad, narrativa y pitch.",
    openRole: "Perfil complementario",
    openName: "Próxima incorporación",
    openText:
      "Prioridad: AMI, educación, periodismo, investigación o diseño de experiencias de aprendizaje.",
    teamNote: "2 personas confirmadas · hasta 2 incorporaciones en evaluación",
    roadmapEyebrow: "ESTADO DEL MVP",
    roadmapTitle: "Ya no es solo una idea.",
    roadmapItems: [
      ["Ahora", "Cuatro casos equilibrados, transferencia, pre/post y facilitación."],
      ["Validación", "Accesibilidad 320 px, catálogo auditado y datos anónimos."],
      ["Antes de aplicar", "Piloto con personas reales, demo bilingüe y video."],
    ],
    guideTitle: "La estrategia completa vive junto al código.",
    guideBody:
      "La guía maestra reúne el contexto para el equipo, estado real del producto, candidatura, piloto, IA responsable, riesgos y pitch.",
    guideCta: "Descargar guía maestra (.md)",
    dossierCta: "Abrir plan de postulación (.md)",
    footerTagline: "From reaction to evidence.",
    footerNote: "Prototipo de trabajo · Ecuador · 2026",
  },
  en: {
    homeLabel: "AURA, home",
    navLabel: "Primary navigation",
    languageLabel: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    featuresLabel: "Main features",
    moreOptions: "More options",
    navMethod: "Method",
    navWhy: "Difference",
    navPilot: "Pilot",
    navTeam: "Team",
    navCta: "Try mission",
    hackathon: "UNESCO Youth Hackathon 2026 · Functional prototype",
    heroTitleA: "From reaction",
    heroTitleB: "to evidence.",
    heroBody:
      "AURA does not decide what to believe. It trains young people to investigate viral content, make their reasoning visible and act on evidence.",
    start: "Start mission",
    explore: "Explore the method",
    heroNote: "Simulated learning case · No sign-up · 3 minutes",
    artifact: "Learning artifact",
    cardStatus: "Traceable conclusion",
    claim: "Claim",
    claimShort: "“Improves memory by 40%”",
    evidence: "Evidence",
    evidenceShort: "Primary source + context",
    action: "Action",
    actionShort: "Pause and explain limits",
    proofOne: "4 memorable actions",
    proofTwo: "Evidence always visible",
    proofThree: "Transferable skill",
    caseLibraryEyebrow: "MISSION LIBRARY",
    caseLibraryTitle: "Choose a case to investigate",
    caseActive: "Active case",
    analyticsTitle: "Anonymous learning measurement",
    analyticsBody:
      "AURA can send coded events—options, time, score and a 1–5 pre/post pulse—to evaluate the pilot. It includes no names, emails, free text, IP addresses or browsing history.",
    analyticsAllow: "Allow anonymous metrics",
    analyticsLocal: "Keep only on this device",
    analyticsAllowed: "Anonymous delivery allowed",
    analyticsLocalOnly: "Local mode enabled",
    missionEyebrow: "EVIDENCE LAB · CASE 01",
    missionTitle: "Investigate before deciding",
    missionBody:
      "Do not try to guess AURA’s preferred answer. Let each step change—or confirm—your initial decision.",
    simulated: "Simulated content for learning",
    postAccount: "Campus Today",
    postMeta: "@campustoday · 18 min ago",
    post:
      "A study confirms that energy drinks improve memory by 40%. Share this with students before their exams.",
    views: "128K views",
    reposts: "3.4K shares",
    step: "Step",
    stepNames: ["Assess", "Uncover", "Research", "Act"],
    back: "Back",
    continue: "Continue",
    reset: "Reset mission",
    stage0Title: "What would you do right now?",
    stage0Body:
      "Record your reaction before researching. There is no penalty for changing your mind.",
    stage0Coach:
      "AURA asks: what information would you need to feel that your decision is responsible?",
    stage0Feedback:
      "Initial decision saved. AURA still has not told you whether the post is true or false.",
    stage1Title: "What justifies a pause?",
    stage1Body:
      "Select the signals that should become research questions.",
    stage1Coach:
      "AURA asks: a precise figure may look rigorous. Do you know which variable it represents?",
    selected: "selected",
    stage2Title: "Build an evidence map",
    stage2Body:
      "Choose two sources to open. Prioritize proximity to evidence and independent context.",
    stage2Coach:
      "AURA asks: who made the original claim, what did they measure and who else can contextualize it?",
    sourcesSelected: "sources opened",
    simulatedSource: "Simulated source",
    sourceFile: "Dossier",
    sourcePublisher: "Provenance",
    sourceDate: "Date",
    realReferences: "REAL REFERENCES",
    realReferencesTitle: "Auditable case context",
    realReferencesBody:
      "These external references support the scientific context or verification method. They do not replace the simulated case materials.",
    published: "Published",
    accessed: "Accessed",
    openReference: "Open original reference",
    mapClaim: "Viral claim",
    mapEvidence: "Traced finding",
    mapGap: "Gap",
    mapClaimText: "Memory improves by 40%",
    mapEvidenceText: "The study measured short-term alertness",
    mapGapText: "It does not demonstrate memory or generalization",
    stage3Title: "Act proportionally",
    stage3Body:
      "Your action should match the strength and limits of the available evidence.",
    stage3Coach:
      "AURA asks: if the evidence does not demonstrate the claim, how can you avoid amplifying it without turning uncertainty into censorship?",
    generate: "Generate evidence card",
    cardTitle: "Evidence card",
    cardSubtitle: "Case 01 · issued by the person, not the AI",
    original: "Original claim",
    consulted: "Sources consulted",
    conclusion: "Provisional conclusion",
    conclusionText:
      "Reviewed evidence does not support a 40% memory improvement. The available study is small, measures alertness and has commercial sponsorship.",
    decision: "Decision taken",
    habit: "Transferable skill",
    habitText:
      "Before sharing a number, check what was measured, with how many people and who funded the source.",
    copied: "Card copied",
    copy: "Copy summary",
    newCase: "Try again",
    notVerdict: "AURA did not issue a verdict. You built a traceable conclusion.",
    methodEyebrow: "AN ACTION, NOT ONLY A NAME",
    methodTitle: "The A-U-R-A method",
    methodBody:
      "Each stage requires an observable behavior. Learning lives in artifacts, not in obeying the assistant.",
    output: "Produces",
    differenceEyebrow: "STRATEGIC DIFFERENCE",
    differenceTitle: "Not another fake-news detector.",
    differenceBody:
      "Fact-checkers resolve one piece. AURA trains the skill needed to investigate the next one.",
    versusA: "An automated verdict",
    versusAText: "The tool decides and the user consumes the answer.",
    versusB: "An evidence lab",
    versusBText: "The person compares sources, justifies an action and tests transfer.",
    principles: [
      "AI asks before explaining.",
      "Sources remain visible.",
      "Uncertainty is a valid output.",
      "Progress measures actions, not beliefs.",
    ],
    pilotEyebrow: "FIRST TEST IN ECUADOR",
    pilotTitle: "From prototype to learning evidence",
    pilotBody:
      "The MVP will be tested with university-age youth from 18 to 24. These are testing targets, not invented results.",
    pilotStats: [
      ["30–50", "target participants"],
      ["ES / EN", "bilingual experience"],
      ["3 min", "demonstrable mission"],
      ["0", "sensitive data required"],
    ],
    pilotSteps: [
      ["01", "Test", "Complete a mission and record decisions."],
      ["02", "Measure", "Compare search, sources and justification."],
      ["03", "Transfer", "Apply the skill to a new case."],
      ["04", "Multiply", "Facilitate AURA Circles with local cases."],
    ],
    teamEyebrow: "CONFIRMED CORE TEAM",
    teamTitle: "Product and strategy from day one",
    teamBody:
      "AURA starts with two complementary profiles and keeps two places open only if they strengthen pedagogy, research or implementation.",
    axelRole: "Technical lead",
    axelText:
      "Software engineer. Architecture, MVP development, responsible AI integration, analytics and demo.",
    nicolRole: "Strategy and impact",
    nicolText:
      "International Business student. Audience, pilot, partnerships, sustainability, narrative and pitch.",
    openRole: "Complementary profile",
    openName: "Next contributor",
    openText:
      "Priority: MIL, education, journalism, research or learning-experience design.",
    teamNote: "2 people confirmed · up to 2 additions under consideration",
    roadmapEyebrow: "MVP STATUS",
    roadmapTitle: "It is no longer only an idea.",
    roadmapItems: [
      ["Now", "Four balanced cases, transfer, pre/post and facilitation."],
      ["Validation", "320 px accessibility, audited catalog and anonymous data."],
      ["Before submission", "Pilot with real people, bilingual demo and video."],
    ],
    guideTitle: "The full strategy lives beside the code.",
    guideBody:
      "The master guide brings together team context, verified product status, submission, pilot, responsible AI, risks and pitch.",
    guideCta: "Download master guide (.md)",
    dossierCta: "Open submission plan (.md)",
    footerTagline: "De la reacción a la evidencia.",
    footerNote: "Working prototype · Ecuador · 2026",
  },
} as const;

function scrollToMission() {
  document.getElementById("mision")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function nowMs() {
  return Date.now();
}

export function AuraExperience() {
  const [locale, setLocale] = useState<Locale>("es");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeCaseId, setActiveCaseId] = useState(auraCases[0].id);
  const [step, setStep] = useState<MissionStep>(0);
  const [initialDecision, setInitialDecision] = useState("");
  const [signals, setSignals] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [action, setAction] = useState("");
  const [cardReady, setCardReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] =
    useState<AnalyticsConsent>("pending");
  const [analyticsSessionId, setAnalyticsSessionId] = useState("");
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>([]);
  const [pilotCode, setPilotCode] = useState("");
  const missionStartedAt = useRef(0);
  const t = text[locale];
  const activeCase =
    auraCases.find((item) => item.id === activeCaseId) ?? auraCases[0];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const sessionId = getOrCreateSessionId();
      setAnalyticsSessionId(sessionId);
      setAnalyticsConsent(readAnalyticsConsent());
      setAnalyticsEvents(sessionEvents(sessionId));
      setPilotCode(
        normalizePilotCode(new URL(window.location.href).searchParams.get("pilot")),
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const trackEvent = useCallback(
    (input: AnalyticsEventInput) => {
      const event = createAnalyticsEvent({
        ...input,
        pilotCode: pilotCode || undefined,
      });
      saveLocalAnalyticsEvent(event);
      setAnalyticsSessionId(event.sessionId);
      setAnalyticsEvents((current) => [...current, event].slice(-300));

      if (analyticsConsent === "granted") {
        void sendAnalyticsEvent(event);
      }
    },
    [analyticsConsent, pilotCode],
  );

  const selectedSourceNames = useMemo(
    () =>
      activeCase.sources
        .filter((source) => sources.includes(source.id))
        .map(
          (source) =>
            `${source.provenance.documentId} · ${source.title[locale]}`,
        ),
    [activeCase, sources, locale],
  );

  const selectedAction =
    activeCase.actions.find((choice) => choice.id === action)?.title[locale] ??
    "—";

  const canContinue =
    (step === 0 && Boolean(initialDecision)) ||
    (step === 1 && signals.length > 0) ||
    (step === 2 && sources.length === activeCase.sourceLimit) ||
    (step === 3 && Boolean(action));

  function toggleSignal(id: string) {
    setSignals((current) => {
      if (current.includes(id)) {
        return current.filter((signal) => signal !== id);
      }

      trackEvent({
        eventName: "signal_selected",
        locale,
        caseId: activeCase.id,
        stage: "uncover",
        optionId: id,
      });
      return [...current, id];
    });
  }

  function toggleSource(id: string) {
    setSources((current) => {
      if (current.includes(id)) {
        return current.filter((source) => source !== id);
      }
      if (current.length === activeCase.sourceLimit) return current;
      trackEvent({
        eventName: "source_opened",
        locale,
        caseId: activeCase.id,
        stage: "research",
        optionId: id,
      });
      return [...current, id];
    });
  }

  function chooseInitialDecision(id: string) {
    if (!missionStartedAt.current) {
      missionStartedAt.current = nowMs();
      trackEvent({
        eventName: "mission_started",
        locale,
        caseId: activeCase.id,
        stage: "analyze",
      });
    }

    setInitialDecision(id);
    trackEvent({
      eventName: "initial_decision_recorded",
      locale,
      caseId: activeCase.id,
      stage: "analyze",
      optionId: id,
    });
  }

  function chooseAction(id: string) {
    setAction(id);
    trackEvent({
      eventName: "action_selected",
      locale,
      caseId: activeCase.id,
      stage: "act",
      optionId: id,
    });
  }

  function advance() {
    if (!canContinue) return;
    if (step < 3) {
      setStep((current) => (current + 1) as MissionStep);
      return;
    }

    trackEvent({
      eventName: "evidence_card_generated",
      locale,
      caseId: activeCase.id,
      stage: "act",
      durationMs: missionStartedAt.current
        ? nowMs() - missionStartedAt.current
        : 0,
    });
    setCardReady(true);
  }

  function resetMission() {
    if (missionStartedAt.current && !cardReady) {
      trackEvent({
        eventName: "mission_abandoned",
        locale,
        caseId: activeCase.id,
        stage:
          step === 0
            ? "analyze"
            : step === 1
              ? "uncover"
              : step === 2
                ? "research"
                : "act",
        durationMs: nowMs() - missionStartedAt.current,
      });
    }

    setStep(0);
    setInitialDecision("");
    setSignals([]);
    setSources([]);
    setAction("");
    setCardReady(false);
    setCopied(false);
    missionStartedAt.current = 0;
  }

  function selectCase(caseId: string) {
    if (caseId === activeCaseId) return;
    setActiveCaseId(caseId);
    resetMission();
  }

  function chooseAnalyticsConsent(
    value: Exclude<AnalyticsConsent, "pending">,
  ) {
    setAnalyticsConsent(value);
    writeAnalyticsConsent(value);
  }

  function activatePilotCode(code: string) {
    const normalized = normalizePilotCode(code);
    if (!normalized) return;

    setPilotCode(normalized);
    const url = new URL(window.location.href);
    url.searchParams.set("pilot", normalized);
    window.history.replaceState(null, "", url);
  }

  async function copyEvidenceCard() {
    const summary = [
      `AURA — ${t.cardTitle}`,
      `${t.original}: ${activeCase.artifact.claim[locale]}`,
      `${t.consulted}: ${selectedSourceNames.join(", ")}`,
      `${t.conclusion}: ${activeCase.result.conclusion[locale]}`,
      `${t.decision}: ${selectedAction}`,
      `${t.habit}: ${activeCase.result.habit[locale]}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main>
      <a className="skip-link" href="#mision">
        {locale === "es" ? "Saltar a la misión" : "Skip to mission"}
      </a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={t.homeLabel}>
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span>
            <strong>AURA</strong>
            <small>{locale === "es" ? "laboratorio de evidencia" : "evidence lab"}</small>
          </span>
        </a>

        <nav
          className={mobileNavOpen ? "main-nav is-open" : "main-nav"}
          aria-label={t.navLabel}
        >
          <a href="#metodo" onClick={() => setMobileNavOpen(false)}>{t.navMethod}</a>
          <a href="#diferencia" onClick={() => setMobileNavOpen(false)}>{t.navWhy}</a>
          <a href="#piloto" onClick={() => setMobileNavOpen(false)}>{t.navPilot}</a>
          <a href="#equipo" onClick={() => setMobileNavOpen(false)}>{t.navTeam}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label={t.languageLabel}>
            <button
              type="button"
              aria-pressed={locale === "es"}
              onClick={() => setLocale("es")}
            >
              ES
            </button>
            <button
              type="button"
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <button className="button button-small header-cta" type="button" onClick={scrollToMission}>
            {t.navCta}
            <span aria-hidden="true">↘</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={mobileNavOpen ? t.menuClose : t.menuOpen}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            {t.hackathon}
          </div>
          <h1>
            {t.heroTitleA}
            <span>{t.heroTitleB}</span>
          </h1>
          <p className="hero-lede">{t.heroBody}</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={scrollToMission}>
              {t.start}
              <span aria-hidden="true">→</span>
            </button>
            <a className="text-link" href="#metodo">
              {t.explore}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="micro-note">
            <span aria-hidden="true">●</span>
            {t.heroNote}
          </p>
        </div>

        <div className="hero-visual" aria-label={t.artifact}>
          <div className="aura-orbit orbit-one" />
          <div className="aura-orbit orbit-two" />
          <div className="evidence-card-preview">
            <div className="preview-topline">
              <span>{t.artifact}</span>
              <span className="status-pill">{t.cardStatus}</span>
            </div>
            <div className="preview-title">
              <span className="preview-logo">A</span>
              <div>
                <strong>AURA / {activeCase.number}</strong>
                <small>{activeCase.artifact.context[locale]}</small>
              </div>
            </div>
            <div className="preview-row">
              <span>{t.claim}</span>
              <strong>{activeCase.artifact.claim[locale]}</strong>
            </div>
            <div className="preview-row">
              <span>{t.evidence}</span>
              <strong>{activeCase.artifact.evidence[locale]}</strong>
            </div>
            <div className="preview-row">
              <span>{t.action}</span>
              <strong>{activeCase.artifact.action[locale]}</strong>
            </div>
            <div className="preview-track">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="preview-footer">
              <span>ANALIZA</span>
              <span>UBICA</span>
              <span>RASTREA</span>
              <span>ACTÚA</span>
            </div>
          </div>
        </div>

        <div className="proof-strip" aria-label={t.featuresLabel}>
          <span><b>01</b>{t.proofOne}</span>
          <span><b>02</b>{t.proofTwo}</span>
          <span><b>03</b>{t.proofThree}</span>
        </div>
      </section>

      <section className="mission-section" id="mision">
        <div className="section-shell">
          <div className="mission-heading section-heading">
            <div>
              <p className="eyebrow">{activeCase.mission.eyebrow[locale]}</p>
              <h2>{activeCase.mission.title[locale]}</h2>
            </div>
            <p>{activeCase.mission.body[locale]}</p>
          </div>

          <div className="case-library" aria-label={t.caseLibraryTitle}>
            <div className="case-library-intro">
              <span>{t.caseLibraryEyebrow}</span>
              <strong>{t.caseLibraryTitle}</strong>
            </div>
            <div className="case-tabs">
              {auraCases.map((item) => {
                const active = item.id === activeCase.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={active ? "case-tab is-active" : "case-tab"}
                    aria-pressed={active}
                    data-case-id={item.id}
                    onClick={() => selectCase(item.id)}
                  >
                    <span className="case-tab-number">{item.number}</span>
                    <span className="case-tab-copy">
                      <small>{item.catalog.tag[locale]}</small>
                      <strong>{item.catalog.title[locale]}</strong>
                      <span>{item.catalog.summary[locale]}</span>
                    </span>
                    {active && <b>{t.caseActive}</b>}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`analytics-consent analytics-consent-${analyticsConsent}`}
            aria-label={t.analyticsTitle}
          >
            <span className="analytics-consent-mark" aria-hidden="true">
              ◌
            </span>
            <div>
              <strong>{t.analyticsTitle}</strong>
              <p>{t.analyticsBody}</p>
              {pilotCode && (
                <small className="active-pilot-code">
                  {locale === "es" ? "Piloto activo" : "Active pilot"} ·{" "}
                  {pilotCode}
                </small>
              )}
            </div>
            <div className="analytics-consent-actions">
              <button
                type="button"
                className={
                  analyticsConsent === "granted" ? "is-selected" : undefined
                }
                aria-pressed={analyticsConsent === "granted"}
                onClick={() => chooseAnalyticsConsent("granted")}
              >
                {analyticsConsent === "granted"
                  ? `✓ ${t.analyticsAllowed}`
                  : t.analyticsAllow}
              </button>
              <button
                type="button"
                className={
                  analyticsConsent === "local-only" ? "is-selected" : undefined
                }
                aria-pressed={analyticsConsent === "local-only"}
                onClick={() => chooseAnalyticsConsent("local-only")}
              >
                {analyticsConsent === "local-only"
                  ? `✓ ${t.analyticsLocalOnly}`
                  : t.analyticsLocal}
              </button>
            </div>
          </div>

          {analyticsConsent !== "pending" && analyticsSessionId && (
            <PilotConfidence
              locale={locale}
              phase="baseline"
              sessionId={analyticsSessionId}
              events={analyticsEvents}
              trackEvent={trackEvent}
            />
          )}

          <div className="mission-workspace">
            <aside className="post-panel">
              <div className="simulation-label">
                <span aria-hidden="true">◎</span>
                {t.simulated}
              </div>
              <article className="viral-post">
                <div className="post-author">
                  <span className="post-avatar" aria-hidden="true">
                    {activeCase.post.avatar}
                  </span>
                  <div>
                    <strong>{activeCase.post.account[locale]}</strong>
                    <span>{activeCase.post.meta[locale]}</span>
                  </div>
                  <button
                    type="button"
                    aria-label={t.moreOptions}
                    tabIndex={-1}
                  >
                    •••
                  </button>
                </div>
                <p>{activeCase.post.body[locale]}</p>
                <div
                  className={`post-media post-media-${activeCase.theme}`}
                  aria-hidden="true"
                >
                  <span className="media-kicker">
                    {activeCase.post.mediaKicker[locale]}
                  </span>
                  <strong>{activeCase.post.mediaValue}</strong>
                  <span>{activeCase.post.mediaCaption[locale]}</span>
                  <div className="can-shape">
                    {activeCase.post.mediaMark}
                  </div>
                </div>
                <div className="post-metrics">
                  <span>◉ {activeCase.post.views[locale]}</span>
                  <span>↗ {activeCase.post.reposts[locale]}</span>
                </div>
              </article>
              <p className="case-note">{activeCase.post.note[locale]}</p>
            </aside>

            <div className="lab-panel">
              <div className="stepper" aria-label={`${t.step} ${step + 1} / 4`}>
                <div
                  className="stepper-line"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={4}
                  aria-valuenow={step + 1}
                >
                  <span style={{ width: `${((step + 1) / 4) * 100}%` }} />
                </div>
                <div className="step-labels">
                  {t.stepNames.map((name, index) => (
                    <button
                      key={name}
                      type="button"
                      className={index === step ? "is-current" : index < step ? "is-done" : ""}
                      disabled={index > step}
                      onClick={() => {
                        if (index < step) {
                          setStep(index as MissionStep);
                          setCardReady(false);
                        }
                      }}
                    >
                      <span>{index < step ? "✓" : index + 1}</span>
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              {!cardReady && (
                <div className="stage" key={step}>
                  {step === 0 && (
                    <>
                      <StageHeading
                        title={activeCase.stages.analyze.title[locale]}
                        body={activeCase.stages.analyze.body[locale]}
                      />
                      <div className="choice-grid">
                        {activeCase.initialChoices.map((choice) => (
                          <ChoiceButton
                            key={choice.id}
                            active={initialDecision === choice.id}
                            title={choice.title[locale]}
                            detail={choice.detail[locale]}
                            onClick={() => chooseInitialDecision(choice.id)}
                          />
                        ))}
                      </div>
                      {initialDecision && (
                        <div className="neutral-feedback">
                          <span aria-hidden="true">✓</span>
                          {activeCase.stages.analyze.feedback[locale]}
                        </div>
                      )}
                      <CoachPrompt
                        key={`${activeCase.id}-analyze-${locale}-${initialDecision}`}
                        caseId={activeCase.id}
                        text={activeCase.stages.analyze.coach[locale]}
                        locale={locale}
                        stage="analyze"
                        decision={initialDecision}
                        signals={signals}
                        sources={sources}
                        action={action}
                        enabled={Boolean(initialDecision)}
                      />
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <StageHeading
                        title={activeCase.stages.uncover.title[locale]}
                        body={activeCase.stages.uncover.body[locale]}
                      />
                      <div className="signal-grid">
                        {activeCase.signals.map((choice) => (
                          <ChoiceButton
                            key={choice.id}
                            active={signals.includes(choice.id)}
                            title={choice.title[locale]}
                            detail={choice.detail[locale]}
                            onClick={() => toggleSignal(choice.id)}
                            compact
                          />
                        ))}
                      </div>
                      <p className="selection-count">
                        {signals.length} / {activeCase.signals.length}{" "}
                        {t.selected}
                      </p>
                      <CoachPrompt
                        key={`${activeCase.id}-uncover-${locale}-${signals.join("-")}`}
                        caseId={activeCase.id}
                        text={activeCase.stages.uncover.coach[locale]}
                        locale={locale}
                        stage="uncover"
                        decision={initialDecision}
                        signals={signals}
                        sources={sources}
                        action={action}
                        enabled={signals.length > 0}
                      />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <StageHeading
                        title={activeCase.stages.research.title[locale]}
                        body={activeCase.stages.research.body[locale]}
                      />
                      <div className="source-grid">
                        {activeCase.sources.map((source) => {
                          const active = sources.includes(source.id);
                          const blocked =
                            sources.length === activeCase.sourceLimit && !active;
                          return (
                            <article
                              className={
                                active
                                  ? "source-card is-active"
                                  : blocked
                                    ? "source-card is-blocked"
                                    : "source-card"
                              }
                              key={source.id}
                            >
                              <button
                                className="source-select"
                                type="button"
                                aria-pressed={active}
                                disabled={blocked}
                                onClick={() => toggleSource(source.id)}
                              >
                                <span className="source-code">{source.code}</span>
                                <span className="source-kind">
                                  {source.kind[locale]}
                                </span>
                                <strong>{source.title[locale]}</strong>
                                <span className="source-detail">
                                  {source.detail[locale]}
                                </span>
                                <span className="source-clue">
                                  {active ? "✓ " : "+ "}
                                  {source.clue[locale]}
                                </span>
                              </button>
                              <div className="source-provenance">
                                <span className="source-status">
                                  {t.simulatedSource}
                                </span>
                                <dl>
                                  <div>
                                    <dt>{t.sourceFile}</dt>
                                    <dd>{source.provenance.documentId}</dd>
                                  </div>
                                  <div>
                                    <dt>{t.sourcePublisher}</dt>
                                    <dd>
                                      {source.provenance.publisher[locale]}
                                    </dd>
                                  </div>
                                  <div>
                                    <dt>{t.sourceDate}</dt>
                                    <dd>{source.provenance.publishedAt}</dd>
                                  </div>
                                </dl>
                                <p>{source.provenance.disclosure[locale]}</p>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                      <p className="selection-count">
                        {sources.length} / {activeCase.sourceLimit}{" "}
                        {t.sourcesSelected}
                      </p>
                      <aside
                        className="reference-dossier"
                        aria-labelledby={`reference-title-${activeCase.id}`}
                      >
                        <div className="reference-intro">
                          <span>{t.realReferences}</span>
                          <h4 id={`reference-title-${activeCase.id}`}>
                            {t.realReferencesTitle}
                          </h4>
                          <p>{t.realReferencesBody}</p>
                        </div>
                        <div className="reference-list">
                          {activeCase.references.map((reference) => (
                            <article key={reference.id}>
                              <div>
                                <span>{reference.publisher}</span>
                                <strong>{reference.title[locale]}</strong>
                                <small>{reference.author}</small>
                              </div>
                              <p>{reference.relevance[locale]}</p>
                              <div className="reference-meta">
                                <span>
                                  {t.published}: {reference.publishedAt}
                                </span>
                                <span>
                                  {t.accessed}: {reference.accessedAt}
                                </span>
                              </div>
                              <a
                                href={reference.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {t.openReference}
                                <span aria-hidden="true">↗</span>
                              </a>
                            </article>
                          ))}
                        </div>
                      </aside>
                      {sources.length === activeCase.sourceLimit && (
                        <div className="evidence-map">
                          <div>
                            <span>{t.mapClaim}</span>
                            <strong>{activeCase.evidenceMap.claim[locale]}</strong>
                          </div>
                          <i aria-hidden="true">→</i>
                          <div>
                            <span>{t.mapEvidence}</span>
                            <strong>
                              {activeCase.evidenceMap.finding[locale]}
                            </strong>
                          </div>
                          <i aria-hidden="true">→</i>
                          <div>
                            <span>{t.mapGap}</span>
                            <strong>{activeCase.evidenceMap.gap[locale]}</strong>
                          </div>
                        </div>
                      )}
                      <CoachPrompt
                        key={`${activeCase.id}-research-${locale}-${sources.join("-")}`}
                        caseId={activeCase.id}
                        text={activeCase.stages.research.coach[locale]}
                        locale={locale}
                        stage="research"
                        decision={initialDecision}
                        signals={signals}
                        sources={sources}
                        action={action}
                        enabled={sources.length > 0}
                      />
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <StageHeading
                        title={activeCase.stages.act.title[locale]}
                        body={activeCase.stages.act.body[locale]}
                      />
                      <div className="choice-grid action-grid">
                        {activeCase.actions.map((choice) => (
                          <ChoiceButton
                            key={choice.id}
                            active={action === choice.id}
                            title={choice.title[locale]}
                            detail={choice.detail[locale]}
                            onClick={() => chooseAction(choice.id)}
                            compact
                          />
                        ))}
                      </div>
                      <CoachPrompt
                        key={`${activeCase.id}-act-${locale}-${action}`}
                        caseId={activeCase.id}
                        text={activeCase.stages.act.coach[locale]}
                        locale={locale}
                        stage="act"
                        decision={initialDecision}
                        signals={signals}
                        sources={sources}
                        action={action}
                        enabled={Boolean(action)}
                      />
                    </>
                  )}

                  <div className="stage-actions">
                    <button
                      className="button button-ghost"
                      type="button"
                      disabled={step === 0}
                      onClick={() => {
                        if (step > 0) setStep((step - 1) as MissionStep);
                      }}
                    >
                      ← {t.back}
                    </button>
                    <button
                      className="button button-primary"
                      type="button"
                      disabled={!canContinue}
                      onClick={advance}
                    >
                      {step === 3 ? t.generate : t.continue}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              )}

              {cardReady && (
                <div className="evidence-result" aria-live="polite">
                  <div className="result-header">
                    <div>
                      <span className="result-kicker">AURA / EVIDENCE LAB</span>
                      <h3>{t.cardTitle}</h3>
                      <p>{activeCase.result.cardSubtitle[locale]}</p>
                    </div>
                    <span className="result-seal" aria-hidden="true">A</span>
                  </div>

                  <div
                    className={`evidence-state evidence-state-${activeCase.editorial.evidenceState}`}
                  >
                    <span>{evidenceStateCopy[locale].label}</span>
                    <strong>
                      {
                        evidenceStateCopy[locale][
                          activeCase.editorial.evidenceState
                        ]
                      }
                    </strong>
                    <p>{activeCase.editorial.learningObjective[locale]}</p>
                  </div>

                  <div className="result-grid">
                    <ResultItem
                      label={t.original}
                      text={activeCase.artifact.claim[locale]}
                    />
                    <ResultItem
                      label={t.consulted}
                      text={selectedSourceNames.length ? selectedSourceNames.join(" · ") : "—"}
                    />
                    <ResultItem
                      label={t.conclusion}
                      text={activeCase.result.conclusion[locale]}
                      wide
                    />
                    <ResultItem label={t.decision} text={selectedAction} />
                    <ResultItem
                      label={t.habit}
                      text={activeCase.result.habit[locale]}
                    />
                  </div>

                  <div className="result-note">
                    <span aria-hidden="true">↗</span>
                    {t.notVerdict}
                  </div>
                  <div className="result-actions">
                    <button className="button button-primary" type="button" onClick={copyEvidenceCard}>
                      {copied ? t.copied : t.copy}
                      <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
                    </button>
                    <button className="button button-ghost" type="button" onClick={resetMission}>
                      {t.newCase}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {cardReady && analyticsSessionId && (
            <TransferChallenge
              key={`${activeCase.id}-${analyticsSessionId}`}
              locale={locale}
              guidedCaseId={activeCase.id}
              sessionId={analyticsSessionId}
              events={analyticsEvents}
              consent={analyticsConsent}
              trackEvent={trackEvent}
            />
          )}
        </div>
      </section>

      <section className="method-section section-shell" id="metodo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.methodEyebrow}</p>
            <h2>{t.methodTitle}</h2>
          </div>
          <p>{t.methodBody}</p>
        </div>
        <div className="method-grid">
          {methodCards.map((card, index) => (
            <article className={`method-card ${card.color}`} key={`${card.letter}-${index}`}>
              <div className="method-top">
                <span className="method-letter">{card.letter}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{card.title[locale]}</h3>
              <p>{card.text[locale]}</p>
              <div className="method-output">
                <span>{t.output}</span>
                <strong>{card.output[locale]}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="difference-section" id="diferencia">
        <div className="section-shell difference-grid">
          <div className="difference-copy">
            <p className="eyebrow">{t.differenceEyebrow}</p>
            <h2>{t.differenceTitle}</h2>
            <p>{t.differenceBody}</p>
            <div className="principle-list">
              {t.principles.map((principle, index) => (
                <div key={principle}>
                  <span>0{index + 1}</span>
                  <p>{principle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="comparison">
            <article className="comparison-card muted">
              <span className="comparison-symbol" aria-hidden="true">＝</span>
              <p>MODELO COMÚN</p>
              <h3>{t.versusA}</h3>
              <p>{t.versusAText}</p>
              <div className="comparison-flow">
                <span>{locale === "es" ? "Contenido" : "Content"}</span>
                <i>→</i>
                <span>{locale === "es" ? "IA decide" : "AI decides"}</span>
                <i>→</i>
                <span>{locale === "es" ? "Veredicto" : "Verdict"}</span>
              </div>
            </article>
            <article className="comparison-card aura">
              <span className="comparison-symbol" aria-hidden="true">↗</span>
              <p>AURA MODEL</p>
              <h3>{t.versusB}</h3>
              <p>{t.versusBText}</p>
              <div className="comparison-flow">
                <span>{locale === "es" ? "Pregunta" : "Question"}</span>
                <i>→</i>
                <span>{locale === "es" ? "Evidencia" : "Evidence"}</span>
                <i>→</i>
                <span>{locale === "es" ? "Acción" : "Action"}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pilot-section section-shell" id="piloto">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.pilotEyebrow}</p>
            <h2>{t.pilotTitle}</h2>
          </div>
          <p>{t.pilotBody}</p>
        </div>
        <div className="pilot-stats">
          {t.pilotStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="pilot-flow">
          {t.pilotSteps.map(([number, title, detail]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
        <PilotFacilitator
          locale={locale}
          activePilotCode={pilotCode}
          onActivateCode={activatePilotCode}
        />
      </section>

      <section className="team-section" id="equipo">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.teamEyebrow}</p>
              <h2>{t.teamTitle}</h2>
            </div>
            <p>{t.teamBody}</p>
          </div>
          <div className="team-grid">
            <article className="person-card axel">
              <div className="person-monogram" aria-hidden="true">HA</div>
              <span className="person-role">{t.axelRole}</span>
              <h3>Hernández Axel</h3>
              <p>{t.axelText}</p>
              <div className="person-tags">
                <span>Product</span><span>Engineering</span><span>AI</span>
              </div>
            </article>
            <article className="person-card nicol">
              <div className="person-monogram" aria-hidden="true">NO</div>
              <span className="person-role">{t.nicolRole}</span>
              <h3>Nicole</h3>
              <p>{t.nicolText}</p>
              <div className="person-tags">
                <span>Strategy</span><span>Impact</span><span>Pitch</span>
              </div>
            </article>
            <article className="person-card open">
              <div className="person-monogram" aria-hidden="true">+</div>
              <span className="person-role">{t.openRole}</span>
              <h3>{t.openName}</h3>
              <p>{t.openText}</p>
              <div className="person-tags">
                <span>MIL</span><span>Education</span><span>Research</span>
              </div>
            </article>
          </div>
          <p className="team-note"><span aria-hidden="true">●</span>{t.teamNote}</p>
        </div>
      </section>

      <section className="roadmap-section section-shell">
        <div className="roadmap-card">
          <div className="roadmap-intro">
            <p className="eyebrow">{t.roadmapEyebrow}</p>
            <h2>{t.roadmapTitle}</h2>
          </div>
          <div className="roadmap-list">
            {t.roadmapItems.map(([when, detail], index) => (
              <div key={when}>
                <span>{index + 1}</span>
                <p><strong>{when}</strong>{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="guide-callout">
          <span className="guide-mark" aria-hidden="true">A</span>
          <div>
            <h3>{t.guideTitle}</h3>
            <p>{t.guideBody}</p>
          </div>
          <div className="guide-actions">
            <a
              href="/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md"
            >
              {t.dossierCta} <span aria-hidden="true">→</span>
            </a>
            <a
              href="/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md"
              download
            >
              {t.guideCta} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span><strong>AURA</strong><small>{t.footerTagline}</small></span>
          </a>
          <p>{t.footerNote}</p>
          <div>
            <a href="#metodo">{t.navMethod}</a>
            <a href="#piloto">{t.navPilot}</a>
            <a href="#equipo">{t.navTeam}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StageHeading({ title, body }: { title: string; body: string }) {
  return (
    <div className="stage-heading">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function ChoiceButton({
  active,
  title,
  detail,
  onClick,
  compact = false,
}: {
  active: boolean;
  title: string;
  detail: string;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      className={`${active ? "choice-card is-active" : "choice-card"}${compact ? " compact" : ""}`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      <span className="choice-radio" aria-hidden="true">{active ? "✓" : ""}</span>
      <span>
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
    </button>
  );
}

function CoachPrompt({
  caseId,
  text,
  locale,
  stage,
  decision,
  signals,
  sources,
  action,
  enabled,
}: {
  caseId: string;
  text: string;
  locale: Locale;
  stage: CoachStage;
  decision: string;
  signals: string[];
  sources: string[];
  action: string;
  enabled: boolean;
}) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function requestQuestion() {
    setLoading(true);
    setFailed(false);

    try {
      const response = await fetch("/api/aura/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId,
          locale,
          stage,
          decision,
          signals,
          sources,
          action,
        }),
      });
      const data = (await response.json()) as {
        question?: string;
        error?: string;
      };

      if (!response.ok || !data.question) {
        throw new Error(data.error ?? "coach_unavailable");
      }

      setQuestion(data.question);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  const labels =
    locale === "es"
      ? {
          source: question ? "Pregunta adaptada con IA" : "Pregunta de respaldo",
          loading: "AURA está formulando una pregunta…",
          action: question ? "Nueva pregunta" : "Profundizar con IA",
          unavailable:
            "La IA no respondió. La pregunta de respaldo sigue disponible.",
        }
      : {
          source: question ? "AI-adapted question" : "Fallback question",
          loading: "AURA is shaping a question…",
          action: question ? "New question" : "Go deeper with AI",
          unavailable:
            "AI did not respond. The fallback question remains available.",
        };

  return (
    <div
      className={question ? "coach-prompt is-ai" : "coach-prompt"}
      data-ai-coach={stage}
    >
      <span className="coach-mark" aria-hidden="true">A</span>
      <div className="coach-copy">
        <span>{labels.source}</span>
        <p aria-live="polite">{loading ? labels.loading : question || text}</p>
        {failed && <small role="status">{labels.unavailable}</small>}
      </div>
      <button
        className="coach-ai-button"
        type="button"
        disabled={!enabled || loading}
        onClick={requestQuestion}
      >
        {loading ? <span className="coach-loader" aria-hidden="true" /> : "✦"}
        {labels.action}
      </button>
    </div>
  );
}

function ResultItem({
  label,
  text,
  wide = false,
}: {
  label: string;
  text: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "result-item is-wide" : "result-item"}>
      <span>{label}</span>
      <p>{text}</p>
    </div>
  );
}
