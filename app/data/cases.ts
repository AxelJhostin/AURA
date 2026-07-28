export type Locale = "es" | "en";
export type LocalizedText = Record<Locale, string>;

export type CaseChoice = {
  id: string;
  title: LocalizedText;
  detail: LocalizedText;
  coachLabel: string;
};

export type CaseSource = CaseChoice & {
  code: string;
  kind: LocalizedText;
  clue: LocalizedText;
};

type StageCopy = {
  title: LocalizedText;
  body: LocalizedText;
  coach: LocalizedText;
};

export type AuraCase = {
  id: string;
  number: string;
  status: "published";
  theme: "energy" | "context";
  catalog: {
    tag: LocalizedText;
    title: LocalizedText;
    summary: LocalizedText;
  };
  mission: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
  };
  artifact: {
    context: LocalizedText;
    claim: LocalizedText;
    evidence: LocalizedText;
    action: LocalizedText;
  };
  post: {
    avatar: string;
    account: LocalizedText;
    meta: LocalizedText;
    body: LocalizedText;
    mediaKicker: LocalizedText;
    mediaValue: string;
    mediaCaption: LocalizedText;
    mediaMark: string;
    views: LocalizedText;
    reposts: LocalizedText;
    note: LocalizedText;
  };
  stages: {
    analyze: StageCopy & { feedback: LocalizedText };
    uncover: StageCopy;
    research: StageCopy;
    act: StageCopy;
  };
  initialChoices: CaseChoice[];
  signals: CaseChoice[];
  sources: CaseSource[];
  sourceLimit: number;
  actions: CaseChoice[];
  evidenceMap: {
    claim: LocalizedText;
    finding: LocalizedText;
    gap: LocalizedText;
  };
  result: {
    cardSubtitle: LocalizedText;
    conclusion: LocalizedText;
    habit: LocalizedText;
  };
  ai: {
    scenario: string;
    knownEvidence: string;
  };
};

export const auraCases: AuraCase[] = [
  {
    id: "energy-memory",
    number: "01",
    status: "published",
    theme: "energy",
    catalog: {
      tag: { es: "SALUD · CIFRAS", en: "HEALTH · NUMBERS" },
      title: {
        es: "La promesa del 40%",
        en: "The 40% promise",
      },
      summary: {
        es: "Una cifra precisa, un estudio sin enlazar y presión por compartir.",
        en: "A precise figure, an unlinked study and pressure to share.",
      },
    },
    mission: {
      eyebrow: {
        es: "LABORATORIO DE EVIDENCIA · CASO 01",
        en: "EVIDENCE LAB · CASE 01",
      },
      title: {
        es: "Investiga antes de decidir",
        en: "Investigate before deciding",
      },
      body: {
        es: "No busques adivinar la respuesta de AURA. Deja que cada paso cambie —o confirme— tu decisión inicial.",
        en: "Do not try to guess AURA’s preferred answer. Let each step change—or confirm—your initial decision.",
      },
    },
    artifact: {
      context: {
        es: "bebidas energéticas · campus",
        en: "energy drinks · campus",
      },
      claim: {
        es: "“Mejora la memoria 40%”",
        en: "“Improves memory by 40%”",
      },
      evidence: {
        es: "Fuente primaria + contexto",
        en: "Primary source + context",
      },
      action: {
        es: "Pausar y explicar límites",
        en: "Pause and explain limits",
      },
    },
    post: {
      avatar: "C",
      account: { es: "Campus al Día", en: "Campus Today" },
      meta: {
        es: "@campusaldia · hace 18 min",
        en: "@campustoday · 18 min ago",
      },
      body: {
        es: "Un estudio confirma que las bebidas energéticas mejoran la memoria un 40%. Compártelo con estudiantes antes de sus exámenes.",
        en: "A study confirms that energy drinks improve memory by 40%. Share this with students before their exams.",
      },
      mediaKicker: { es: "FOCUS+ ESTUDIO", en: "FOCUS+ STUDY" },
      mediaValue: "+40%",
      mediaCaption: { es: "¿MEJOR MEMORIA?", en: "MEMORY BOOST?" },
      mediaMark: "F+",
      views: { es: "128 mil visualizaciones", en: "128K views" },
      reposts: { es: "3,4 mil compartidos", en: "3.4K shares" },
      note: {
        es: "Caso ficticio diseñado para demostrar el método sin amplificar desinformación real.",
        en: "Fictional case designed to demonstrate the method without amplifying real misinformation.",
      },
    },
    stages: {
      analyze: {
        title: {
          es: "¿Qué harías en este momento?",
          en: "What would you do right now?",
        },
        body: {
          es: "Registra tu reacción antes de investigar. No hay castigo por cambiar de opinión.",
          en: "Record your reaction before researching. There is no penalty for changing your mind.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué información necesitarías para sentir que tu decisión es responsable?",
          en: "AURA asks: what information would you need to feel that your decision is responsible?",
        },
        feedback: {
          es: "Decisión inicial guardada. AURA todavía no te dice si la publicación es verdadera o falsa.",
          en: "Initial decision saved. AURA still has not told you whether the post is true or false.",
        },
      },
      uncover: {
        title: {
          es: "¿Qué justifica una pausa?",
          en: "What justifies a pause?",
        },
        body: {
          es: "Selecciona las señales que deberían convertirse en preguntas de investigación.",
          en: "Select the signals that should become research questions.",
        },
        coach: {
          es: "Pregunta AURA: una cifra precisa puede parecer rigurosa. ¿Sabes qué variable representa?",
          en: "AURA asks: a precise figure may look rigorous. Do you know which variable it represents?",
        },
      },
      research: {
        title: {
          es: "Construye un mapa de evidencia",
          en: "Build an evidence map",
        },
        body: {
          es: "Elige dos fuentes para abrir. Prioriza cercanía a la evidencia y contexto independiente.",
          en: "Choose two sources to open. Prioritize proximity to evidence and independent context.",
        },
        coach: {
          es: "Pregunta AURA: ¿quién hizo la afirmación original, qué midió y quién más puede contextualizarla?",
          en: "AURA asks: who made the original claim, what did they measure and who else can contextualize it?",
        },
      },
      act: {
        title: {
          es: "Actúa de forma proporcional",
          en: "Act proportionally",
        },
        body: {
          es: "Tu acción debe corresponder a la fuerza y a los límites de la evidencia disponible.",
          en: "Your action should match the strength and limits of the available evidence.",
        },
        coach: {
          es: "Pregunta AURA: si la evidencia no demuestra la frase, ¿cómo puedes evitar amplificarla sin convertir incertidumbre en censura?",
          en: "AURA asks: if the evidence does not demonstrate the claim, how can you avoid amplifying it without turning uncertainty into censorship?",
        },
      },
    },
    initialChoices: [
      {
        id: "share",
        title: { es: "Lo compartiría", en: "I would share it" },
        detail: {
          es: "Parece útil y tiene una cifra concreta.",
          en: "It looks useful and includes a concrete number.",
        },
        coachLabel: "would share the post",
      },
      {
        id: "pause",
        title: {
          es: "Pausaría para investigar",
          en: "I would pause and investigate",
        },
        detail: {
          es: "La afirmación es verificable, pero aún no veo la fuente.",
          en: "The claim is verifiable, but I cannot see the source yet.",
        },
        coachLabel: "would pause to investigate",
      },
      {
        id: "dismiss",
        title: { es: "Lo descartaría", en: "I would dismiss it" },
        detail: {
          es: "Suena demasiado bueno para ser verdad.",
          en: "It sounds too good to be true.",
        },
        coachLabel: "would dismiss the post",
      },
    ],
    signals: [
      {
        id: "vague-authority",
        title: { es: "“Un estudio confirma”", en: "“A study confirms”" },
        detail: {
          es: "Invoca autoridad sin nombrar el estudio.",
          en: "It invokes authority without naming the study.",
        },
        coachLabel: "noticed an unnamed study",
      },
      {
        id: "precise-number",
        title: { es: "La cifra “40%”", en: "The “40%” figure" },
        detail: {
          es: "Parece precisa, pero no explica qué se midió.",
          en: "It looks precise, but does not explain what was measured.",
        },
        coachLabel: "noticed the unexplained 40% figure",
      },
      {
        id: "urgency",
        title: {
          es: "“Compártelo antes de los exámenes”",
          en: "“Share before exams”",
        },
        detail: {
          es: "La urgencia empuja a reaccionar antes de verificar.",
          en: "Urgency pushes people to react before checking.",
        },
        coachLabel: "noticed pressure to share before exams",
      },
      {
        id: "green",
        title: {
          es: "El diseño usa color verde",
          en: "The design uses green",
        },
        detail: {
          es: "Es un rasgo visual, no evidencia sobre la afirmación.",
          en: "It is a visual trait, not evidence about the claim.",
        },
        coachLabel: "noticed the green visual design",
      },
    ],
    sources: [
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
        clue: {
          es: "Popularidad ≠ evidencia",
          en: "Popularity ≠ evidence",
        },
        coachLabel: "opened a viral repost with no study link",
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
        clue: {
          es: "Conflicto de interés",
          en: "Conflict of interest",
        },
        coachLabel: "opened the sponsor's commercial release",
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
        clue: {
          es: "Qué se midió realmente",
          en: "What was actually measured",
        },
        coachLabel: "opened the original study abstract",
      },
      {
        id: "guide",
        code: "S4",
        kind: {
          es: "Contexto independiente",
          en: "Independent context",
        },
        title: {
          es: "Guía universitaria sobre cafeína",
          en: "University guide on caffeine",
        },
        detail: {
          es: "Distingue alerta, memoria y riesgos; cita revisiones sistemáticas.",
          en: "Distinguishes alertness, memory and risks; cites systematic reviews.",
        },
        clue: { es: "Lectura lateral", en: "Lateral reading" },
        coachLabel: "opened independent university guidance",
      },
    ],
    sourceLimit: 2,
    actions: [
      {
        id: "repeat",
        title: {
          es: "Compartir la afirmación tal como está",
          en: "Share the claim as written",
        },
        detail: {
          es: "Mantener el 40% y la referencia a memoria.",
          en: "Keep the 40% figure and the reference to memory.",
        },
        coachLabel: "would repeat the claim as written",
      },
      {
        id: "context",
        title: {
          es: "Compartir solo con contexto",
          en: "Share only with context",
        },
        detail: {
          es: "Aclarar muestra, medición, patrocinio y límites.",
          en: "Clarify sample, measurement, sponsorship and limits.",
        },
        coachLabel: "would share only with context and limitations",
      },
      {
        id: "hold",
        title: {
          es: "No compartir y explicar la incertidumbre",
          en: "Do not share; explain uncertainty",
        },
        detail: {
          es: "La evidencia disponible no sostiene la frase original.",
          en: "Available evidence does not support the original wording.",
        },
        coachLabel: "would not share and would explain the uncertainty",
      },
      {
        id: "report",
        title: {
          es: "Denunciar automáticamente la cuenta",
          en: "Automatically report the account",
        },
        detail: {
          es: "Tratar una afirmación dudosa como una infracción confirmada.",
          en: "Treat a questionable claim as a confirmed violation.",
        },
        coachLabel: "would automatically report the account",
      },
    ],
    evidenceMap: {
      claim: {
        es: "La memoria mejora 40%",
        en: "Memory improves by 40%",
      },
      finding: {
        es: "El estudio midió alerta a corto plazo",
        en: "The study measured short-term alertness",
      },
      gap: {
        es: "No demuestra memoria ni generalización",
        en: "It does not demonstrate memory or generalization",
      },
    },
    result: {
      cardSubtitle: {
        es: "Caso 01 · emitida por la persona, no por la IA",
        en: "Case 01 · issued by the person, not the AI",
      },
      conclusion: {
        es: "La evidencia revisada no respalda que la memoria mejore 40%. El estudio disponible es pequeño, mide alerta y tiene patrocinio comercial.",
        en: "Reviewed evidence does not support a 40% memory improvement. The available study is small, measures alertness and has commercial sponsorship.",
      },
      habit: {
        es: "Antes de compartir una cifra, comprobar qué se midió, con cuántas personas y quién financió la fuente.",
        en: "Before sharing a number, check what was measured, with how many people and who funded the source.",
      },
    },
    ai: {
      scenario:
        "A simulated viral post claims that energy drinks improve memory by 40% and urges students to share it before exams.",
      knownEvidence:
        "The original study had 24 participants, measured short-term alertness rather than memory, and had commercial sponsorship. An independent university guide distinguishes alertness, memory, and risk.",
    },
  },
  {
    id: "recycled-storm-video",
    number: "02",
    status: "published",
    theme: "context",
    catalog: {
      tag: { es: "VIDEO · CONTEXTO", en: "VIDEO · CONTEXT" },
      title: {
        es: "La inundación de “ahora”",
        en: "The flood happening “now”",
      },
      summary: {
        es: "Un video real, una ubicación dudosa y una fecha que cambia todo.",
        en: "A real video, a doubtful location and a date that changes everything.",
      },
    },
    mission: {
      eyebrow: {
        es: "LABORATORIO DE EVIDENCIA · CASO 02",
        en: "EVIDENCE LAB · CASE 02",
      },
      title: {
        es: "Verifica antes de alertar",
        en: "Verify before raising the alarm",
      },
      body: {
        es: "Un contenido puede ser auténtico y aun así engañar por su fecha, ubicación o contexto. Rastrea antes de amplificar.",
        en: "Content can be authentic and still mislead through its date, location or context. Trace it before amplifying it.",
      },
    },
    artifact: {
      context: {
        es: "video viral · contexto local",
        en: "viral video · local context",
      },
      claim: {
        es: "“El malecón está inundado ahora”",
        en: "“The waterfront is flooded now”",
      },
      evidence: {
        es: "Origen temprano + fuente local",
        en: "Earliest source + local source",
      },
      action: {
        es: "Corregir sin amplificar",
        en: "Correct without amplifying",
      },
    },
    post: {
      avatar: "A",
      account: { es: "Alerta Costa EC", en: "Coast Alert EC" },
      meta: {
        es: "@alertacostaec · hace 7 min",
        en: "@coastalertec · 7 min ago",
      },
      body: {
        es: "URGENTE: este video muestra el malecón de Puerto Azul inundado ahora mismo. Evita la zona y compártelo para alertar a todos.",
        en: "URGENT: this video shows Puerto Azul’s waterfront flooded right now. Avoid the area and share it to warn everyone.",
      },
      mediaKicker: { es: "ALERTA LOCAL", en: "LOCAL ALERT" },
      mediaValue: "AHORA",
      mediaCaption: { es: "¿PUERTO AZUL?", en: "PUERTO AZUL?" },
      mediaMark: "23",
      views: { es: "64 mil visualizaciones", en: "64K views" },
      reposts: { es: "8,1 mil compartidos", en: "8.1K shares" },
      note: {
        es: "Puerto Azul y todas las fuentes de este caso son ficticias. El video descrito no corresponde a un desastre real.",
        en: "Puerto Azul and every source in this case are fictional. The described video does not depict a real disaster.",
      },
    },
    stages: {
      analyze: {
        title: {
          es: "¿Qué harías ante una alerta urgente?",
          en: "What would you do with an urgent alert?",
        },
        body: {
          es: "Registra tu reacción inicial antes de saber cuándo y dónde se grabó el video.",
          en: "Record your first reaction before knowing when and where the video was recorded.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué daño podría causar compartir demasiado pronto y qué daño podría causar ignorar una alerta real?",
          en: "AURA asks: what harm could sharing too soon cause, and what harm could ignoring a real alert cause?",
        },
        feedback: {
          es: "Decisión inicial guardada. La urgencia no reemplaza la verificación, pero tampoco debe conducir a ignorar riesgos.",
          en: "Initial decision saved. Urgency does not replace verification, but it should not lead to ignoring risk either.",
        },
      },
      uncover: {
        title: {
          es: "¿Qué contexto falta?",
          en: "Which context is missing?",
        },
        body: {
          es: "Convierte las ausencias del video en preguntas verificables sobre origen, fecha y ubicación.",
          en: "Turn what is missing from the video into verifiable questions about origin, date and location.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué detalle observable conectaría realmente estas imágenes con Puerto Azul y con el día de hoy?",
          en: "AURA asks: which observable detail would truly connect these images to Puerto Azul and to today?",
        },
      },
      research: {
        title: {
          es: "Rastrea el video y el lugar",
          en: "Trace the video and the location",
        },
        body: {
          es: "Elige dos fuentes. Busca primero la aparición más antigua y luego contexto local independiente.",
          en: "Choose two sources. Look first for the earliest appearance and then for independent local context.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué combinación de origen temprano y evidencia local reduciría mejor la incertidumbre?",
          en: "AURA asks: which combination of early provenance and local evidence would best reduce uncertainty?",
        },
      },
      act: {
        title: {
          es: "Responde sin aumentar el daño",
          en: "Respond without increasing harm",
        },
        body: {
          es: "Tu acción debe corregir el contexto y conservar una vía para alertas oficiales verificadas.",
          en: "Your action should correct the context while preserving a path for verified official alerts.",
        },
        coach: {
          es: "Pregunta AURA: ¿cómo corregirías la publicación sin volver a difundir el video como si fuera actual?",
          en: "AURA asks: how would you correct the post without redistributing the video as if it were current?",
        },
      },
    },
    initialChoices: [
      {
        id: "share-alert",
        title: { es: "Lo compartiría por precaución", en: "I would share it as a precaution" },
        detail: {
          es: "Si fuera real, otras personas deberían saberlo cuanto antes.",
          en: "If it were real, other people should know as soon as possible.",
        },
        coachLabel: "would share the urgent alert as a precaution",
      },
      {
        id: "verify-first",
        title: { es: "Verificaría fecha y lugar", en: "I would verify the date and place" },
        detail: {
          es: "El video no muestra por sí solo cuándo ni dónde fue grabado.",
          en: "The video alone does not show when or where it was recorded.",
        },
        coachLabel: "would verify the date and location first",
      },
      {
        id: "ignore-alert",
        title: { es: "Lo ignoraría", en: "I would ignore it" },
        detail: {
          es: "Las publicaciones urgentes suelen exagerar.",
          en: "Urgent posts often exaggerate.",
        },
        coachLabel: "would ignore the alert",
      },
    ],
    signals: [
      {
        id: "no-origin",
        title: { es: "No aparece el video original", en: "The original video is missing" },
        detail: {
          es: "La cuenta publica una copia sin autor ni enlace de origen.",
          en: "The account posts a copy without an author or origin link.",
        },
        coachLabel: "noticed that the original upload is missing",
      },
      {
        id: "no-location",
        title: { es: "No hay referencias del lugar", en: "There are no location markers" },
        detail: {
          es: "No se distinguen letreros, edificios ni elementos verificables.",
          en: "No signs, buildings or verifiable landmarks are visible.",
        },
        coachLabel: "noticed that the location is not visually established",
      },
      {
        id: "urgent-language",
        title: { es: "“URGENTE” y “compártelo”", en: "“URGENT” and “share it”" },
        detail: {
          es: "La presión emocional llega antes que la evidencia.",
          en: "Emotional pressure arrives before evidence.",
        },
        coachLabel: "noticed pressure to share the alert immediately",
      },
      {
        id: "dark-water",
        title: { es: "El agua se ve oscura", en: "The water looks dark" },
        detail: {
          es: "El color no permite establecer fecha, lugar ni actualidad.",
          en: "Color cannot establish the date, place or whether it is current.",
        },
        coachLabel: "noticed the water's dark appearance",
      },
    ],
    sources: [
      {
        id: "viral-copy",
        code: "S1",
        kind: { es: "Copia viral", en: "Viral copy" },
        title: {
          es: "Publicación que repite la alerta",
          en: "Post repeating the alert",
        },
        detail: {
          es: "Acumula vistas, pero no añade origen, fecha ni ubicación comprobable.",
          en: "It gains views but adds no origin, date or verifiable location.",
        },
        clue: { es: "Repetición ≠ confirmación", en: "Repetition ≠ confirmation" },
        coachLabel: "opened another viral copy with no provenance",
      },
      {
        id: "account-history",
        code: "S2",
        kind: { es: "Historial de cuenta", en: "Account history" },
        title: {
          es: "Perfil que publicó la alerta",
          en: "Profile that posted the alert",
        },
        detail: {
          es: "Publica contenido de varios países y no identifica responsables.",
          en: "It posts content from several countries and identifies no responsible editors.",
        },
        clue: { es: "Credibilidad limitada", en: "Limited accountability" },
        coachLabel: "reviewed the alert account's mixed-country history",
      },
      {
        id: "earliest-upload",
        code: "S3",
        kind: { es: "Origen temprano", en: "Earliest source" },
        title: {
          es: "Primera aparición rastreable",
          en: "Earliest traceable appearance",
        },
        detail: {
          es: "El mismo video apareció en 2023 y fue grabado en otro país.",
          en: "The same video appeared in 2023 and was filmed in another country.",
        },
        clue: { es: "Fecha y procedencia", en: "Date and provenance" },
        coachLabel: "found the earliest upload from 2023 in another country",
      },
      {
        id: "local-context",
        code: "S4",
        kind: { es: "Contexto local", en: "Local context" },
        title: {
          es: "Reporte local independiente",
          en: "Independent local report",
        },
        detail: {
          es: "No registra inundación en Puerto Azul y publica imágenes actuales del malecón.",
          en: "It reports no flood in Puerto Azul and publishes current waterfront images.",
        },
        clue: { es: "Verificación del lugar", en: "Location verification" },
        coachLabel: "opened independent current reporting from Puerto Azul",
      },
    ],
    sourceLimit: 2,
    actions: [
      {
        id: "repeat-alert",
        title: { es: "Repetir la alerta completa", en: "Repeat the full alert" },
        detail: {
          es: "Compartir el video como si mostrara una inundación actual.",
          en: "Share the video as if it showed a current flood.",
        },
        coachLabel: "would repeat the alert as current",
      },
      {
        id: "correct-context",
        title: {
          es: "Corregir con origen y contexto",
          en: "Correct it with provenance and context",
        },
        detail: {
          es: "Explicar que el video es antiguo y enlazar información local actual.",
          en: "Explain that the video is old and link current local information.",
        },
        coachLabel: "would correct the post with provenance and current local context",
      },
      {
        id: "hold-video",
        title: {
          es: "No amplificar y consultar alertas verificadas",
          en: "Do not amplify; check verified alerts",
        },
        detail: {
          es: "Evitar republicar el video y dirigir a fuentes locales comprobables.",
          en: "Avoid reposting the video and direct people to verifiable local sources.",
        },
        coachLabel: "would avoid amplifying the video and point to verified alerts",
      },
      {
        id: "report-account",
        title: {
          es: "Denunciar automáticamente la cuenta",
          en: "Automatically report the account",
        },
        detail: {
          es: "Tratar el error de contexto como una infracción ya confirmada.",
          en: "Treat the context error as an already confirmed violation.",
        },
        coachLabel: "would automatically report the account",
      },
    ],
    evidenceMap: {
      claim: {
        es: "El video muestra Puerto Azul hoy",
        en: "The video shows Puerto Azul today",
      },
      finding: {
        es: "La primera copia rastreable es de 2023 y de otro país",
        en: "The earliest traceable copy is from 2023 and another country",
      },
      gap: {
        es: "El video es real, pero su fecha y ubicación fueron sustituidas",
        en: "The video is real, but its date and location were replaced",
      },
    },
    result: {
      cardSubtitle: {
        es: "Caso 02 · emitida por la persona, no por la IA",
        en: "Case 02 · issued by the person, not the AI",
      },
      conclusion: {
        es: "La evidencia revisada muestra que el video existía desde 2023 y corresponde a otro país. No respalda la afirmación de una inundación actual en Puerto Azul.",
        en: "Reviewed evidence shows that the video existed in 2023 and comes from another country. It does not support the claim of a current flood in Puerto Azul.",
      },
      habit: {
        es: "Antes de compartir un video urgente, rastrear su primera aparición y contrastar fecha y lugar con una fuente local independiente.",
        en: "Before sharing an urgent video, trace its earliest appearance and compare its date and place with an independent local source.",
      },
    },
    ai: {
      scenario:
        "A simulated viral post claims that an old flood video shows Puerto Azul's waterfront flooded right now and urges people to share it.",
      knownEvidence:
        "The earliest traceable upload is from 2023 in another country. Independent current local reporting shows no flood in Puerto Azul. The video itself is authentic, but its date and location were replaced.",
    },
  },
];

export function getAuraCase(id: string) {
  return auraCases.find((item) => item.id === id);
}

