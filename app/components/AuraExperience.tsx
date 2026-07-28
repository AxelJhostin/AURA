"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "es" | "en";
type MissionStep = 0 | 1 | 2 | 3;

type Choice = {
  id: string;
  title: Record<Locale, string>;
  detail: Record<Locale, string>;
};

const initialChoices: Choice[] = [
  {
    id: "share",
    title: { es: "Lo compartiría", en: "I would share it" },
    detail: {
      es: "Parece útil y tiene una cifra concreta.",
      en: "It looks useful and includes a concrete number.",
    },
  },
  {
    id: "pause",
    title: { es: "Pausaría para investigar", en: "I would pause and investigate" },
    detail: {
      es: "La afirmación es verificable, pero aún no veo la fuente.",
      en: "The claim is verifiable, but I cannot see the source yet.",
    },
  },
  {
    id: "dismiss",
    title: { es: "Lo descartaría", en: "I would dismiss it" },
    detail: {
      es: "Suena demasiado bueno para ser verdad.",
      en: "It sounds too good to be true.",
    },
  },
];

const signalChoices: Choice[] = [
  {
    id: "vague-authority",
    title: { es: "“Un estudio confirma”", en: "“A study confirms”" },
    detail: {
      es: "Invoca autoridad sin nombrar el estudio.",
      en: "It invokes authority without naming the study.",
    },
  },
  {
    id: "precise-number",
    title: { es: "La cifra “40%”", en: "The “40%” figure" },
    detail: {
      es: "Parece precisa, pero no explica qué se midió.",
      en: "It looks precise, but does not explain what was measured.",
    },
  },
  {
    id: "urgency",
    title: { es: "“Compártelo antes de los exámenes”", en: "“Share before exams”" },
    detail: {
      es: "La urgencia empuja a reaccionar antes de verificar.",
      en: "Urgency pushes people to react before checking.",
    },
  },
  {
    id: "green",
    title: { es: "El diseño usa color verde", en: "The design uses green" },
    detail: {
      es: "Es un rasgo visual, no evidencia sobre la afirmación.",
      en: "It is a visual trait, not evidence about the claim.",
    },
  },
];

const sourceChoices = [
  {
    id: "repost",
    code: "S1",
    kind: { es: "Publicación derivada", en: "Derivative post" },
    title: {
      es: "Video viral con 128 mil vistas",
      en: "Viral video with 128K views",
    },
    detail: {
      es: "Repite la cifra, pero no enlaza el estudio ni identifica autores.",
      en: "Repeats the figure, but does not link the study or name its authors.",
    },
    clue: { es: "Popularidad ≠ evidencia", en: "Popularity ≠ evidence" },
  },
  {
    id: "sponsor",
    code: "S2",
    kind: { es: "Comunicado comercial", en: "Commercial release" },
    title: {
      es: "Marca que financió la investigación",
      en: "Brand that funded the research",
    },
    detail: {
      es: "Habla de “rendimiento mental”, sin publicar metodología completa.",
      en: "Mentions “mental performance” without publishing the full method.",
    },
    clue: { es: "Conflicto de interés", en: "Conflict of interest" },
  },
  {
    id: "study",
    code: "S3",
    kind: { es: "Fuente primaria", en: "Primary source" },
    title: {
      es: "Resumen del estudio original",
      en: "Original study abstract",
    },
    detail: {
      es: "24 participantes; midió alerta durante 30 minutos, no memoria.",
      en: "24 participants; measured alertness for 30 minutes, not memory.",
    },
    clue: { es: "Qué se midió realmente", en: "What was actually measured" },
  },
  {
    id: "guide",
    code: "S4",
    kind: { es: "Contexto independiente", en: "Independent context" },
    title: {
      es: "Guía universitaria sobre cafeína",
      en: "University guide on caffeine",
    },
    detail: {
      es: "Distingue alerta, memoria y riesgos; cita revisiones sistemáticas.",
      en: "Distinguishes alertness, memory and risks; cites systematic reviews.",
    },
    clue: { es: "Lectura lateral", en: "Lateral reading" },
  },
];

const actionChoices: Choice[] = [
  {
    id: "repeat",
    title: { es: "Compartir la afirmación tal como está", en: "Share the claim as written" },
    detail: {
      es: "Mantener el 40% y la referencia a memoria.",
      en: "Keep the 40% figure and the reference to memory.",
    },
  },
  {
    id: "context",
    title: { es: "Compartir solo con contexto", en: "Share only with context" },
    detail: {
      es: "Aclarar muestra, medición, patrocinio y límites.",
      en: "Clarify sample, measurement, sponsorship and limits.",
    },
  },
  {
    id: "hold",
    title: { es: "No compartir y explicar la incertidumbre", en: "Do not share; explain uncertainty" },
    detail: {
      es: "La evidencia disponible no sostiene la frase original.",
      en: "Available evidence does not support the original wording.",
    },
  },
  {
    id: "report",
    title: { es: "Denunciar automáticamente la cuenta", en: "Automatically report the account" },
    detail: {
      es: "Tratar una afirmación dudosa como una infracción confirmada.",
      en: "Treat a questionable claim as a confirmed violation.",
    },
  },
];

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
      ["Ahora", "Flujo A-U-R-A navegable, caso simulado y tarjeta de evidencia."],
      ["Siguiente", "Modelo de casos, panel de facilitación y analítica mínima."],
      ["Antes de aplicar", "Piloto, métricas reales, demo bilingüe y video."],
    ],
    guideTitle: "La estrategia completa vive junto al código.",
    guideBody:
      "La guía maestra documenta candidatura, producto, IA responsable, piloto, riesgos, pitch y control del proyecto.",
    guideCta: "Descargar guía maestra (.md)",
    footerTagline: "From reaction to evidence.",
    footerNote: "Prototipo de trabajo · Ecuador · 2026",
  },
  en: {
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
      ["Now", "Navigable A-U-R-A flow, simulated case and evidence card."],
      ["Next", "Case model, facilitator panel and minimum analytics."],
      ["Before submission", "Pilot, real metrics, bilingual demo and video."],
    ],
    guideTitle: "The full strategy lives beside the code.",
    guideBody:
      "The master guide documents the submission, product, responsible AI, pilot, risks, pitch and project controls.",
    guideCta: "Download master guide (.md)",
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

export function AuraExperience() {
  const [locale, setLocale] = useState<Locale>("es");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [step, setStep] = useState<MissionStep>(0);
  const [initialDecision, setInitialDecision] = useState("");
  const [signals, setSignals] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [action, setAction] = useState("");
  const [cardReady, setCardReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = text[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const selectedSourceNames = useMemo(
    () =>
      sourceChoices
        .filter((source) => sources.includes(source.id))
        .map((source) => source.title[locale]),
    [sources, locale],
  );

  const selectedAction =
    actionChoices.find((choice) => choice.id === action)?.title[locale] ?? "—";

  const canContinue =
    (step === 0 && Boolean(initialDecision)) ||
    (step === 1 && signals.length > 0) ||
    (step === 2 && sources.length === 2) ||
    (step === 3 && Boolean(action));

  function toggleSignal(id: string) {
    setSignals((current) =>
      current.includes(id)
        ? current.filter((signal) => signal !== id)
        : [...current, id],
    );
  }

  function toggleSource(id: string) {
    setSources((current) => {
      if (current.includes(id)) {
        return current.filter((source) => source !== id);
      }
      if (current.length === 2) return current;
      return [...current, id];
    });
  }

  function advance() {
    if (!canContinue) return;
    if (step < 3) {
      setStep((current) => (current + 1) as MissionStep);
      return;
    }
    setCardReady(true);
  }

  function resetMission() {
    setStep(0);
    setInitialDecision("");
    setSignals([]);
    setSources([]);
    setAction("");
    setCardReady(false);
    setCopied(false);
  }

  async function copyEvidenceCard() {
    const summary = [
      `AURA — ${t.cardTitle}`,
      `${t.original}: ${t.claimShort}`,
      `${t.consulted}: ${selectedSourceNames.join(", ")}`,
      `${t.conclusion}: ${t.conclusionText}`,
      `${t.decision}: ${selectedAction}`,
      `${t.habit}: ${t.habitText}`,
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
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="AURA, inicio">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span>
            <strong>AURA</strong>
            <small>{locale === "es" ? "laboratorio de evidencia" : "evidence lab"}</small>
          </span>
        </a>

        <nav className={mobileNavOpen ? "main-nav is-open" : "main-nav"} aria-label="Principal">
          <a href="#metodo" onClick={() => setMobileNavOpen(false)}>{t.navMethod}</a>
          <a href="#diferencia" onClick={() => setMobileNavOpen(false)}>{t.navWhy}</a>
          <a href="#piloto" onClick={() => setMobileNavOpen(false)}>{t.navPilot}</a>
          <a href="#equipo" onClick={() => setMobileNavOpen(false)}>{t.navTeam}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
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
            aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
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
                <strong>AURA / 01</strong>
                <small>energy drinks · campus</small>
              </div>
            </div>
            <div className="preview-row">
              <span>{t.claim}</span>
              <strong>{t.claimShort}</strong>
            </div>
            <div className="preview-row">
              <span>{t.evidence}</span>
              <strong>{t.evidenceShort}</strong>
            </div>
            <div className="preview-row">
              <span>{t.action}</span>
              <strong>{t.actionShort}</strong>
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

        <div className="proof-strip" aria-label="Características principales">
          <span><b>01</b>{t.proofOne}</span>
          <span><b>02</b>{t.proofTwo}</span>
          <span><b>03</b>{t.proofThree}</span>
        </div>
      </section>

      <section className="mission-section" id="mision">
        <div className="section-shell">
          <div className="mission-heading section-heading">
            <div>
              <p className="eyebrow">{t.missionEyebrow}</p>
              <h2>{t.missionTitle}</h2>
            </div>
            <p>{t.missionBody}</p>
          </div>

          <div className="mission-workspace">
            <aside className="post-panel">
              <div className="simulation-label">
                <span aria-hidden="true">◎</span>
                {t.simulated}
              </div>
              <article className="viral-post">
                <div className="post-author">
                  <span className="post-avatar" aria-hidden="true">C</span>
                  <div>
                    <strong>{t.postAccount}</strong>
                    <span>{t.postMeta}</span>
                  </div>
                  <button type="button" aria-label="Más opciones" tabIndex={-1}>•••</button>
                </div>
                <p>{t.post}</p>
                <div className="post-media" aria-hidden="true">
                  <span className="media-kicker">FOCUS+ STUDY</span>
                  <strong>+40%</strong>
                  <span>MEMORY BOOST?</span>
                  <div className="can-shape">F+</div>
                </div>
                <div className="post-metrics">
                  <span>◉ {t.views}</span>
                  <span>↗ {t.reposts}</span>
                </div>
              </article>
              <p className="case-note">
                {locale === "es"
                  ? "Este caso es ficticio y fue diseñado para demostrar el método sin amplificar desinformación real."
                  : "This case is fictional and designed to demonstrate the method without amplifying real misinformation."}
              </p>
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
                      <StageHeading title={t.stage0Title} body={t.stage0Body} />
                      <div className="choice-grid">
                        {initialChoices.map((choice) => (
                          <ChoiceButton
                            key={choice.id}
                            active={initialDecision === choice.id}
                            title={choice.title[locale]}
                            detail={choice.detail[locale]}
                            onClick={() => setInitialDecision(choice.id)}
                          />
                        ))}
                      </div>
                      {initialDecision && (
                        <div className="neutral-feedback">
                          <span aria-hidden="true">✓</span>
                          {t.stage0Feedback}
                        </div>
                      )}
                      <CoachPrompt text={t.stage0Coach} />
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <StageHeading title={t.stage1Title} body={t.stage1Body} />
                      <div className="signal-grid">
                        {signalChoices.map((choice) => (
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
                        {signals.length} / {signalChoices.length} {t.selected}
                      </p>
                      <CoachPrompt text={t.stage1Coach} />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <StageHeading title={t.stage2Title} body={t.stage2Body} />
                      <div className="source-grid">
                        {sourceChoices.map((source) => {
                          const active = sources.includes(source.id);
                          const blocked = sources.length === 2 && !active;
                          return (
                            <button
                              className={active ? "source-card is-active" : "source-card"}
                              type="button"
                              aria-pressed={active}
                              key={source.id}
                              disabled={blocked}
                              onClick={() => toggleSource(source.id)}
                            >
                              <span className="source-code">{source.code}</span>
                              <span className="source-kind">{source.kind[locale]}</span>
                              <strong>{source.title[locale]}</strong>
                              <span className="source-detail">{source.detail[locale]}</span>
                              <span className="source-clue">{active ? "✓ " : "+ "}{source.clue[locale]}</span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="selection-count">{sources.length} / 2 {t.sourcesSelected}</p>
                      {sources.length === 2 && (
                        <div className="evidence-map">
                          <div>
                            <span>{t.mapClaim}</span>
                            <strong>{t.mapClaimText}</strong>
                          </div>
                          <i aria-hidden="true">→</i>
                          <div>
                            <span>{t.mapEvidence}</span>
                            <strong>{t.mapEvidenceText}</strong>
                          </div>
                          <i aria-hidden="true">→</i>
                          <div>
                            <span>{t.mapGap}</span>
                            <strong>{t.mapGapText}</strong>
                          </div>
                        </div>
                      )}
                      <CoachPrompt text={t.stage2Coach} />
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <StageHeading title={t.stage3Title} body={t.stage3Body} />
                      <div className="choice-grid action-grid">
                        {actionChoices.map((choice) => (
                          <ChoiceButton
                            key={choice.id}
                            active={action === choice.id}
                            title={choice.title[locale]}
                            detail={choice.detail[locale]}
                            onClick={() => setAction(choice.id)}
                            compact
                          />
                        ))}
                      </div>
                      <CoachPrompt text={t.stage3Coach} />
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
                      <p>{t.cardSubtitle}</p>
                    </div>
                    <span className="result-seal" aria-hidden="true">A</span>
                  </div>

                  <div className="result-grid">
                    <ResultItem label={t.original} text={t.claimShort} />
                    <ResultItem
                      label={t.consulted}
                      text={selectedSourceNames.length ? selectedSourceNames.join(" · ") : "—"}
                    />
                    <ResultItem label={t.conclusion} text={t.conclusionText} wide />
                    <ResultItem label={t.decision} text={selectedAction} />
                    <ResultItem label={t.habit} text={t.habitText} />
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
              <div className="person-monogram" aria-hidden="true">AX</div>
              <span className="person-role">{t.axelRole}</span>
              <h3>Axel</h3>
              <p>{t.axelText}</p>
              <div className="person-tags">
                <span>Product</span><span>Engineering</span><span>AI</span>
              </div>
            </article>
            <article className="person-card nicol">
              <div className="person-monogram" aria-hidden="true">NI</div>
              <span className="person-role">{t.nicolRole}</span>
              <h3>Nicol</h3>
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
          <a
            href="/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md"
            download
          >
            {t.guideCta} <span aria-hidden="true">→</span>
          </a>
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

function CoachPrompt({ text }: { text: string }) {
  return (
    <div className="coach-prompt">
      <span className="coach-mark" aria-hidden="true">A</span>
      <p>{text}</p>
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
