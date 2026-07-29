import type { AuraCase } from "./cases";

export const balancedAuraCases: AuraCase[] = [
  {
    id: "miracle-walk",
    number: "03",
    status: "published",
    theme: "wellbeing",
    editorial: {
      evidenceState: "supported-with-limits",
      reviewStatus: "internal-review-complete",
      reviewedAt: "2026-07-28",
      reviewerRole: {
        es: "Revisión editorial interna AURA",
        en: "AURA internal editorial review",
      },
      learningObjective: {
        es: "Conservar una afirmación respaldada mientras se eliminan promesas absolutas, causalidad instantánea y consejos de sustitución.",
        en: "Preserve a supported claim while removing absolute promises, instant causality and replacement advice.",
      },
      nextGate: {
        es: "Revisión AMI y de lenguaje de salud antes del piloto formal.",
        en: "External MIL and health-language review before the formal pilot.",
      },
    },
    catalog: {
      tag: { es: "SALUD · MATICES", en: "HEALTH · NUANCE" },
      title: {
        es: "La caminata “milagrosa”",
        en: "The “miracle” walk",
      },
      summary: {
        es: "Una base científica real envuelta en una promesa instantánea y absoluta.",
        en: "A real scientific basis wrapped in an instant, absolute promise.",
      },
    },
    mission: {
      eyebrow: {
        es: "LABORATORIO DE EVIDENCIA · CASO 03",
        en: "EVIDENCE LAB · CASE 03",
      },
      title: {
        es: "Conserva lo cierto, corrige el exceso",
        en: "Preserve what is true; correct the excess",
      },
      body: {
        es: "No toda publicación exagerada tiene un núcleo falso. Investiga qué parte está respaldada, qué límites importan y cómo comunicar ambos.",
        en: "Not every exaggerated post has a false core. Investigate what is supported, which limits matter and how to communicate both.",
      },
    },
    artifact: {
      context: {
        es: "actividad física · salud mental",
        en: "physical activity · mental health",
      },
      claim: {
        es: "“Caminar 20 minutos cura la depresión hoy”",
        en: "“A 20-minute walk cures depression today”",
      },
      evidence: {
        es: "Beneficio respaldado + límites",
        en: "Supported benefit + limits",
      },
      action: {
        es: "Contextualizar sin negar el beneficio",
        en: "Add context without denying the benefit",
      },
    },
    post: {
      avatar: "V",
      account: { es: "Vida en 20", en: "Life in 20" },
      meta: {
        es: "@vidaen20 · hace 12 min",
        en: "@lifein20 · 12 min ago",
      },
      body: {
        es: "La ciencia ya lo confirmó: caminar 20 minutos cura la depresión desde hoy. Olvida cualquier otro apoyo y comparte esta solución gratis.",
        en: "Science has confirmed it: a 20-minute walk cures depression today. Forget every other form of support and share this free solution.",
      },
      mediaKicker: { es: "CIENCIA SIMPLE", en: "SCIENCE MADE SIMPLE" },
      mediaValue: "20 MIN",
      mediaCaption: { es: "¿CURA INMEDIATA?", en: "INSTANT CURE?" },
      mediaMark: "✓",
      views: { es: "91 mil visualizaciones", en: "91K views" },
      reposts: { es: "5,7 mil compartidos", en: "5.7K shares" },
      note: {
        es: "Publicación, cuenta y expedientes ficticios. El caso usa referencias reales únicamente para enseñar a conservar matices en comunicación de salud.",
        en: "Fictional post, account and dossiers. The case uses real references only to teach nuanced health communication.",
      },
    },
    stages: {
      analyze: {
        title: {
          es: "¿Aceptarías o rechazarías el mensaje?",
          en: "Would you accept or reject the message?",
        },
        body: {
          es: "Registra tu reacción sin asumir que solo existen las opciones “todo cierto” y “todo falso”.",
          en: "Record your reaction without assuming the only options are “all true” and “all false.”",
        },
        coach: {
          es: "Pregunta AURA: ¿qué palabras describen un beneficio posible y cuáles prometen certeza, velocidad o sustitución?",
          en: "AURA asks: which words describe a possible benefit, and which promise certainty, speed or replacement?",
        },
        feedback: {
          es: "Decisión inicial guardada. Ahora separa el beneficio general de la dosis, el plazo y la promesa de cura.",
          en: "Initial decision saved. Now separate the general benefit from the dose, timeline and cure promise.",
        },
      },
      uncover: {
        title: {
          es: "¿Dónde está el salto de evidencia?",
          en: "Where is the evidence leap?",
        },
        body: {
          es: "Convierte cada absoluto en una pregunta sobre población, duración, resultado y calidad de evidencia.",
          en: "Turn each absolute into a question about population, duration, outcome and evidence quality.",
        },
        coach: {
          es: "Pregunta AURA: ¿“reduce síntomas” significa lo mismo que “cura hoy” para todas las personas?",
          en: "AURA asks: does “reduces symptoms” mean the same as “cures today” for everyone?",
        },
      },
      research: {
        title: {
          es: "Compara beneficio y límites",
          en: "Compare benefit and limits",
        },
        body: {
          es: "Elige dos fuentes. Busca una síntesis amplia y una lectura de calidad, no solo una frase favorable.",
          en: "Choose two sources. Look for a broad synthesis and a quality assessment, not only a favorable sentence.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué resultado se observó, durante cuánto tiempo y con qué nivel de confianza?",
          en: "AURA asks: which outcome was observed, over what period and with what level of confidence?",
        },
      },
      act: {
        title: {
          es: "Corrige sin producir cinismo",
          en: "Correct without producing cynicism",
        },
        body: {
          es: "La respuesta responsable conserva el beneficio respaldado y retira la promesa absoluta o el consejo riesgoso.",
          en: "A responsible response preserves the supported benefit and removes the absolute promise or risky advice.",
        },
        coach: {
          es: "Pregunta AURA: ¿cómo dirías “la actividad física puede ayudar” sin convertirlo en una cura universal ni en un reemplazo automático?",
          en: "AURA asks: how would you say “physical activity can help” without turning it into a universal cure or automatic replacement?",
        },
      },
    },
    initialChoices: [
      {
        id: "share-whole-claim",
        title: {
          es: "Lo compartiría completo",
          en: "I would share the full claim",
        },
        detail: {
          es: "Caminar es saludable, así que el mensaje parece seguro.",
          en: "Walking is healthy, so the message seems safe.",
        },
        coachLabel: "would share the full claim because walking is healthy",
      },
      {
        id: "reject-whole-claim",
        title: {
          es: "Lo descartaría por exagerado",
          en: "I would dismiss it as exaggerated",
        },
        detail: {
          es: "Si contiene una promesa falsa, nada del mensaje merece conservarse.",
          en: "If it contains a false promise, nothing in the message is worth preserving.",
        },
        coachLabel: "would reject the entire message because it is exaggerated",
      },
      {
        id: "separate-core-limits",
        title: {
          es: "Separaría beneficio y promesa",
          en: "I would separate benefit and promise",
        },
        detail: {
          es: "Comprobaría el beneficio general y luego la dosis, el plazo y la palabra “cura”.",
          en: "I would check the general benefit and then the dose, timeline and word “cure.”",
        },
        coachLabel: "would separate the supported core from the absolute promise",
      },
    ],
    signals: [
      {
        id: "science-confirmed",
        title: {
          es: "“La ciencia ya lo confirmó”",
          en: "“Science has confirmed it”",
        },
        detail: {
          es: "No identifica estudio, población ni grado de certeza.",
          en: "It identifies no study, population or degree of certainty.",
        },
        coachLabel: "noticed a vague appeal to scientific authority",
      },
      {
        id: "fixed-dose",
        title: { es: "Dosis exacta: 20 minutos", en: "Exact dose: 20 minutes" },
        detail: {
          es: "Una cifra precisa requiere saber de dónde salió y para quién aplica.",
          en: "A precise number requires knowing where it came from and to whom it applies.",
        },
        coachLabel: "noticed an exact dose without traceable support",
      },
      {
        id: "instant-cure",
        title: { es: "“Cura desde hoy”", en: "“Cures today”" },
        detail: {
          es: "Transforma un posible efecto promedio en resultado inmediato y universal.",
          en: "It turns a possible average effect into an immediate universal result.",
        },
        coachLabel: "noticed the instant universal cure promise",
      },
      {
        id: "replace-support",
        title: {
          es: "“Olvida cualquier otro apoyo”",
          en: "“Forget every other form of support”",
        },
        detail: {
          es: "Añade un consejo de sustitución que la afirmación general no demuestra.",
          en: "It adds replacement advice that the general claim does not establish.",
        },
        coachLabel: "noticed unsupported advice to replace all other support",
      },
    ],
    sources: [
      {
        id: "viral-wellness-card",
        code: "S1",
        kind: { es: "Tarjeta viral", en: "Viral card" },
        title: {
          es: "Resumen “20 minutos = cura”",
          en: "“20 minutes = cure” summary",
        },
        detail: {
          es: "Repite la promesa sin enlazar datos ni definir qué significa “cura”.",
          en: "It repeats the promise without linking data or defining “cure.”",
        },
        clue: { es: "Afirmación sin método", en: "Claim without method" },
        provenance: {
          status: "simulated",
          documentId: "AURA-03-S1",
          publisher: {
            es: "Vida en 20 · artefacto AURA",
            en: "Life in 20 · AURA artifact",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Tarjeta viral ficticia; no representa una cuenta, estudio ni recomendación clínica real.",
            en: "Fictional viral card; it represents no real account, study or clinical recommendation.",
          },
        },
        coachLabel: "opened the viral summary with no method or definition",
      },
      {
        id: "public-health-summary",
        code: "S2",
        kind: { es: "Síntesis de salud pública", en: "Public-health summary" },
        title: {
          es: "Actividad física y bienestar",
          en: "Physical activity and well-being",
        },
        detail: {
          es: "La actividad regular se asocia con beneficios de salud mental y puede reducir síntomas de depresión y ansiedad.",
          en: "Regular activity is associated with mental-health benefits and may reduce symptoms of depression and anxiety.",
        },
        clue: { es: "Núcleo respaldado", en: "Supported core" },
        provenance: {
          status: "simulated",
          documentId: "AURA-03-S2",
          publisher: {
            es: "Ficha de lectura AURA",
            en: "AURA reading brief",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Síntesis educativa ficticia basada en la referencia real de la OMS enlazada en el expediente.",
            en: "Fictional learning summary based on the real WHO reference linked in the dossier.",
          },
        },
        coachLabel: "opened a public-health summary supporting a general benefit",
      },
      {
        id: "review-quality-note",
        code: "S3",
        kind: { es: "Revisión de ensayos", en: "Trial review" },
        title: {
          es: "Ejercicio y síntomas depresivos",
          en: "Exercise and depressive symptoms",
        },
        detail: {
          es: "Una revisión amplia encuentra beneficios promedio, pero la confianza varía y no establece una cura universal en una sesión.",
          en: "A broad review finds average benefits, but confidence varies and it does not establish a universal cure in one session.",
        },
        clue: { es: "Efecto ≠ promesa absoluta", en: "Effect ≠ absolute promise" },
        provenance: {
          status: "simulated",
          documentId: "AURA-03-S3",
          publisher: {
            es: "Matriz de evidencia AURA",
            en: "AURA evidence matrix",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Matriz educativa ficticia basada en la revisión sistemática real enlazada en el expediente.",
            en: "Fictional learning matrix based on the real systematic review linked in the dossier.",
          },
        },
        coachLabel: "reviewed average benefits and variable confidence across trials",
      },
      {
        id: "claim-language-audit",
        code: "S4",
        kind: { es: "Auditoría de lenguaje", en: "Language audit" },
        title: {
          es: "De “puede ayudar” a “cura hoy”",
          en: "From “may help” to “cures today”",
        },
        detail: {
          es: "Marca tres saltos: beneficio a cura, promedio a universal y acompañamiento a sustitución.",
          en: "It marks three leaps: benefit to cure, average to universal and support to replacement.",
        },
        clue: { es: "Localizar el exceso", en: "Locate the overclaim" },
        provenance: {
          status: "simulated",
          documentId: "AURA-03-S4",
          publisher: {
            es: "Mesa editorial AURA",
            en: "AURA editorial desk",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Auditoría editorial ficticia creada para practicar lenguaje proporcional a la evidencia.",
            en: "Fictional editorial audit created to practise evidence-proportionate language.",
          },
        },
        coachLabel: "mapped the three language leaps in the viral post",
      },
    ],
    references: [
      {
        id: "who-physical-activity",
        title: {
          es: "Actividad física",
          en: "Physical activity",
        },
        publisher: "World Health Organization",
        author: "World Health Organization",
        publishedAt: "2024-06-26",
        accessedAt: "2026-07-28",
        url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
        relevance: {
          es: "Resume beneficios físicos y mentales de la actividad regular, incluida la reducción de síntomas, sin presentar una dosis única como cura instantánea.",
          en: "Summarises physical and mental benefits of regular activity, including symptom reduction, without presenting one dose as an instant cure.",
        },
      },
      {
        id: "bmj-exercise-depression-review",
        title: {
          es: "Efecto del ejercicio para la depresión: revisión sistemática y metaanálisis en red",
          en: "Effect of exercise for depression: systematic review and network meta-analysis",
        },
        publisher: "BMJ / PubMed",
        author: "Michael Noetel et al.",
        publishedAt: "2024-02-14",
        accessedAt: "2026-07-28",
        url: "https://pubmed.ncbi.nlm.nih.gov/38355154/",
        relevance: {
          es: "Sintetiza ensayos aleatorizados, reporta beneficios promedio y también límites de confianza y riesgo de sesgo relevantes para evitar promesas universales.",
          en: "Synthesises randomised trials, reporting average benefits as well as confidence and risk-of-bias limits relevant to avoiding universal promises.",
        },
      },
    ],
    sourceLimit: 2,
    actions: [
      {
        id: "amplify-cure",
        title: { es: "Compartir la promesa completa", en: "Share the full promise" },
        detail: {
          es: "Repetir que 20 minutos curan y sustituyen cualquier otro apoyo.",
          en: "Repeat that 20 minutes cures and replaces every other form of support.",
        },
        coachLabel: "would amplify the instant cure and replacement claim",
      },
      {
        id: "deny-benefit",
        title: {
          es: "Negar cualquier beneficio",
          en: "Deny any benefit",
        },
        detail: {
          es: "Responder que la actividad física no tiene relación con la salud mental.",
          en: "Reply that physical activity has no relationship with mental health.",
        },
        coachLabel: "would deny the supported mental-health benefit",
      },
      {
        id: "contextualize-benefit",
        title: {
          es: "Conservar el beneficio y corregir límites",
          en: "Preserve the benefit and correct the limits",
        },
        detail: {
          es: "Explicar que la actividad regular puede ayudar, pero el post no demuestra una cura inmediata, universal ni sustitutiva.",
          en: "Explain that regular activity may help, but the post does not establish an immediate, universal or replacement cure.",
        },
        coachLabel: "would preserve the benefit while correcting the unsupported limits",
      },
      {
        id: "share-source-only",
        title: {
          es: "Enlazar evidencia sin explicar",
          en: "Link evidence without explanation",
        },
        detail: {
          es: "Publicar la referencia real sin señalar qué parte del mensaje exagera.",
          en: "Post the real reference without identifying which part of the message overreaches.",
        },
        coachLabel: "would link a source without explaining the claim's overreach",
      },
    ],
    evidenceMap: {
      claim: {
        es: "20 minutos curan la depresión hoy",
        en: "Twenty minutes cures depression today",
      },
      finding: {
        es: "La actividad regular puede reducir síntomas en promedio",
        en: "Regular activity may reduce symptoms on average",
      },
      gap: {
        es: "No demuestra dosis única, efecto inmediato, universalidad ni sustitución",
        en: "It does not establish one dose, instant effect, universality or replacement",
      },
    },
    result: {
      cardSubtitle: {
        es: "Caso 03 · construida con las decisiones de la persona",
        en: "Case 03 · built from the learner’s decisions",
      },
      conclusion: {
        es: "Existe evidencia de que la actividad física regular puede beneficiar la salud mental y reducir síntomas de depresión. Las fuentes no respaldan que una caminata de 20 minutos cure de inmediato a todas las personas ni que sustituya automáticamente otros apoyos.",
        en: "Evidence indicates that regular physical activity may benefit mental health and reduce depressive symptoms. The sources do not support a 20-minute walk instantly curing everyone or automatically replacing other forms of support.",
      },
      habit: {
        es: "Cuando una publicación mezcla verdad y exageración, conservar el núcleo respaldado y corregir dosis, plazo, población y grado de certeza.",
        en: "When a post mixes truth and exaggeration, preserve the supported core and correct the dose, timeline, population and degree of certainty.",
      },
    },
    ai: {
      scenario:
        "A simulated wellness post says a 20-minute walk instantly cures depression for everyone and should replace all other support.",
      knownEvidence:
        "Regular physical activity can benefit mental health and reduce depressive symptoms on average. The available sources do not establish a universal cure after one 20-minute session or automatic replacement of other support.",
    },
  },
  {
    id: "grayscale-grades",
    number: "04",
    status: "published",
    theme: "uncertainty",
    editorial: {
      evidenceState: "insufficient",
      reviewStatus: "internal-review-complete",
      reviewedAt: "2026-07-28",
      reviewerRole: {
        es: "Revisión editorial interna AURA",
        en: "AURA internal editorial review",
      },
      learningObjective: {
        es: "Reconocer cuándo un resultado preliminar permite formular una hipótesis, pero no una afirmación causal o generalizable.",
        en: "Recognise when a preliminary result supports a hypothesis but not a causal or generalisable claim.",
      },
      nextGate: {
        es: "Revisión AMI y metodológica externa antes del piloto formal.",
        en: "External MIL and methods review before the formal pilot.",
      },
    },
    catalog: {
      tag: { es: "ESTUDIO · INCERTIDUMBRE", en: "STUDY · UNCERTAINTY" },
      title: {
        es: "El modo foco “definitivo”",
        en: "The “ultimate” focus mode",
      },
      summary: {
        es: "Un resultado preliminar pequeño convertido en una regla para todo el campus.",
        en: "A small preliminary result turned into a rule for the whole campus.",
      },
    },
    mission: {
      eyebrow: {
        es: "LABORATORIO DE EVIDENCIA · CASO 04",
        en: "EVIDENCE LAB · CASE 04",
      },
      title: {
        es: "Deja que la incertidumbre sea una respuesta",
        en: "Let uncertainty be an answer",
      },
      body: {
        es: "No siempre hay evidencia suficiente para confirmar o refutar. Decide qué puede decirse hoy y qué estudio faltaría.",
        en: "Evidence is not always sufficient to confirm or refute. Decide what can be said today and which study is still needed.",
      },
    },
    artifact: {
      context: {
        es: "hábitos digitales · rendimiento académico",
        en: "digital habits · academic performance",
      },
      claim: {
        es: "“La escala de grises sube las notas 27%”",
        en: "“Grayscale raises grades by 27%”",
      },
      evidence: {
        es: "Piloto pequeño + método",
        en: "Small pilot + methods",
      },
      action: {
        es: "No generalizar; pedir mejor evidencia",
        en: "Do not generalise; ask for better evidence",
      },
    },
    post: {
      avatar: "F",
      account: { es: "Focus Campus Lab", en: "Focus Campus Lab" },
      meta: {
        es: "@focuscampuslab · hace 31 min",
        en: "@focuscampuslab · 31 min ago",
      },
      body: {
        es: "NUEVO ESTUDIO: poner el celular en escala de grises mejora las calificaciones 27%. El campus debería activarlo por defecto para todos.",
        en: "NEW STUDY: setting your phone to grayscale improves grades by 27%. The campus should enable it by default for everyone.",
      },
      mediaKicker: { es: "PILOTO UNIVERSITARIO", en: "CAMPUS PILOT" },
      mediaValue: "+27%",
      mediaCaption: { es: "MÁS NOTAS", en: "HIGHER GRADES" },
      mediaMark: "G",
      views: { es: "47 mil visualizaciones", en: "47K views" },
      reposts: { es: "2,2 mil compartidos", en: "2.2K shares" },
      note: {
        es: "Estudio, campus, cuenta y resultados completamente ficticios. Ninguna institución real está implicada.",
        en: "Completely fictional study, campus, account and results. No real institution is involved.",
      },
    },
    stages: {
      analyze: {
        title: {
          es: "¿Qué permitiría afirmar ese 27%?",
          en: "What would justify that 27% claim?",
        },
        body: {
          es: "Registra tu reacción antes de conocer la muestra, el comparador y el resultado medido.",
          en: "Record your reaction before learning the sample, comparator and measured outcome.",
        },
        coach: {
          es: "Pregunta AURA: ¿una cifra precisa te dice por sí sola cuán confiable y generalizable es el estudio?",
          en: "AURA asks: does a precise number alone tell you how reliable and generalisable the study is?",
        },
        feedback: {
          es: "Decisión inicial guardada. Ahora comprueba si el diseño permite atribuir el cambio a la escala de grises.",
          en: "Initial decision saved. Now check whether the design allows the change to be attributed to grayscale.",
        },
      },
      uncover: {
        title: {
          es: "¿Qué parte del método falta?",
          en: "Which part of the method is missing?",
        },
        body: {
          es: "Busca tamaño de muestra, selección, comparación, variable medida y replicación.",
          en: "Look for sample size, selection, comparison, measured variable and replication.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué otra explicación podría producir el mismo cambio si las personas eligieron participar?",
          en: "AURA asks: which other explanation could produce the same change if participants volunteered?",
        },
      },
      research: {
        title: {
          es: "Evalúa cuánto puede sostener el piloto",
          en: "Assess what the pilot can support",
        },
        body: {
          es: "Elige dos fuentes. Prioriza el método y los datos antes que el comunicado viral.",
          en: "Choose two sources. Prioritise methods and data over the viral announcement.",
        },
        coach: {
          es: "Pregunta AURA: ¿el estudio mide calificaciones reales, una prueba breve o solo percepción de concentración?",
          en: "AURA asks: does the study measure real grades, a short quiz or only perceived focus?",
        },
      },
      act: {
        title: {
          es: "Decide sin fabricar certeza",
          en: "Decide without manufacturing certainty",
        },
        body: {
          es: "Una buena acción puede reconocer una señal interesante y, al mismo tiempo, negarse a generalizarla.",
          en: "A good action may recognise an interesting signal while refusing to generalise it.",
        },
        coach: {
          es: "Pregunta AURA: ¿qué experimento permitiría distinguir un efecto real de selección, práctica o azar?",
          en: "AURA asks: which experiment would distinguish a real effect from selection, practice or chance?",
        },
      },
    },
    initialChoices: [
      {
        id: "adopt-campus-wide",
        title: {
          es: "Lo aplicaría en todo el campus",
          en: "I would apply it campus-wide",
        },
        detail: {
          es: "El 27% parece un efecto suficientemente grande para actuar.",
          en: "Twenty-seven percent seems large enough to act.",
        },
        coachLabel: "would apply the setting campus-wide based on the reported effect",
      },
      {
        id: "reject-gimmick",
        title: {
          es: "Lo descartaría como truco",
          en: "I would dismiss it as a gimmick",
        },
        detail: {
          es: "Cambiar colores no puede tener ningún efecto útil.",
          en: "Changing colours cannot have any useful effect.",
        },
        coachLabel: "would reject any possible effect as a gimmick",
      },
      {
        id: "inspect-study-design",
        title: {
          es: "Revisaría el diseño",
          en: "I would inspect the design",
        },
        detail: {
          es: "La cifra no basta para saber si el efecto es causal o generalizable.",
          en: "The number is not enough to know whether the effect is causal or generalisable.",
        },
        coachLabel: "would inspect the study design before drawing a conclusion",
      },
    ],
    signals: [
      {
        id: "new-study-no-link",
        title: { es: "“Nuevo estudio” sin enlace", en: "“New study” with no link" },
        detail: {
          es: "No permite revisar autores, método, datos ni estado de publicación.",
          en: "It does not allow authors, methods, data or publication status to be checked.",
        },
        coachLabel: "noticed that the new study is not linked",
      },
      {
        id: "precise-27",
        title: { es: "Un 27% sin denominador", en: "Twenty-seven percent with no denominator" },
        detail: {
          es: "No indica 27% de qué medida, respecto de qué base ni con qué incertidumbre.",
          en: "It does not say 27% of which measure, from which baseline or with what uncertainty.",
        },
        coachLabel: "noticed that the precise percentage has no denominator or uncertainty",
      },
      {
        id: "causal-language",
        title: { es: "“Mejora las calificaciones”", en: "“Improves grades”" },
        detail: {
          es: "Afirma causalidad antes de conocer comparación o asignación.",
          en: "It claims causality before the comparison or assignment is known.",
        },
        coachLabel: "noticed causal language without a known comparison design",
      },
      {
        id: "policy-leap",
        title: {
          es: "De piloto a política universal",
          en: "From pilot to universal policy",
        },
        detail: {
          es: "Generaliza el resultado a personas que no participaron.",
          en: "It generalises the result to people who did not participate.",
        },
        coachLabel: "noticed the leap from a pilot to a universal policy",
      },
    ],
    sources: [
      {
        id: "viral-campus-release",
        code: "S1",
        kind: { es: "Comunicado viral", en: "Viral release" },
        title: {
          es: "“El modo que sube notas”",
          en: "“The mode that raises grades”",
        },
        detail: {
          es: "Presenta el 27% como resultado causal y omite método, incertidumbre y acceso a datos.",
          en: "It presents 27% as causal and omits methods, uncertainty and data access.",
        },
        clue: { es: "Promoción ≠ evaluación", en: "Promotion ≠ evaluation" },
        provenance: {
          status: "simulated",
          documentId: "AURA-04-S1",
          publisher: {
            es: "Focus Campus Lab · artefacto AURA",
            en: "Focus Campus Lab · AURA artifact",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Comunicado ficticio; no corresponde a un estudio ni a una universidad real.",
            en: "Fictional release; it corresponds to no real study or university.",
          },
        },
        coachLabel: "opened the promotional release with no methods or uncertainty",
      },
      {
        id: "pilot-methods-note",
        code: "S2",
        kind: { es: "Nota de métodos", en: "Methods note" },
        title: {
          es: "Piloto voluntario con 18 estudiantes",
          en: "Volunteer pilot with 18 students",
        },
        detail: {
          es: "No tuvo grupo de comparación ni asignación aleatoria; las personas eligieron participar.",
          en: "It had no comparison group or random assignment; participants volunteered.",
        },
        clue: { es: "Diseño preliminar", en: "Preliminary design" },
        provenance: {
          status: "simulated",
          documentId: "AURA-04-S2",
          publisher: {
            es: "Archivo metodológico AURA",
            en: "AURA methods archive",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Nota metodológica ficticia creada exclusivamente para el caso educativo.",
            en: "Fictional methods note created exclusively for the learning case.",
          },
        },
        coachLabel: "opened the volunteer pilot methods with no comparison group",
      },
      {
        id: "pilot-data-appendix",
        code: "S3",
        kind: { es: "Anexo de resultados", en: "Results appendix" },
        title: {
          es: "Prueba corta, no calificaciones finales",
          en: "Short quiz, not final grades",
        },
        detail: {
          es: "El 27% proviene de un cuestionario de práctica repetido; faltan dos resultados y no se reporta intervalo de confianza.",
          en: "The 27% comes from a repeated practice quiz; two results are missing and no confidence interval is reported.",
        },
        clue: { es: "Lo medido cambia la conclusión", en: "The measure changes the conclusion" },
        provenance: {
          status: "simulated",
          documentId: "AURA-04-S3",
          publisher: {
            es: "Repositorio de datos AURA",
            en: "AURA data repository",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Anexo y cifras ficticias; no deben citarse como evidencia sobre una intervención real.",
            en: "Fictional appendix and figures; they must not be cited as evidence about a real intervention.",
          },
        },
        coachLabel: "found that the outcome was a repeated practice quiz rather than final grades",
      },
      {
        id: "replication-record",
        code: "S4",
        kind: { es: "Estado de evidencia", en: "Evidence status" },
        title: {
          es: "Sin preregistro ni réplica independiente",
          en: "No preregistration or independent replication",
        },
        detail: {
          es: "El piloto se describe como exploratorio y todavía no existe un estudio confirmatorio.",
          en: "The pilot is described as exploratory and no confirmatory study yet exists.",
        },
        clue: { es: "Hipótesis abierta", en: "Open hypothesis" },
        provenance: {
          status: "simulated",
          documentId: "AURA-04-S4",
          publisher: {
            es: "Registro de investigación AURA",
            en: "AURA research registry",
          },
          publishedAt: "2026-07-28",
          disclosure: {
            es: "Registro ficticio creado para enseñar la diferencia entre exploración y confirmación.",
            en: "Fictional registry created to teach the difference between exploration and confirmation.",
          },
        },
        coachLabel: "confirmed that the exploratory pilot has no preregistration or replication",
      },
    ],
    references: [
      {
        id: "nih-understanding-clinical-studies",
        title: {
          es: "Cómo comprender los estudios clínicos",
          en: "Understanding Clinical Studies",
        },
        publisher: "National Institutes of Health",
        author: "National Institutes of Health",
        publishedAt: "2025-06-26",
        accessedAt: "2026-07-28",
        url: "https://www.nih.gov/about-nih/science-health-public-trust/tools/understanding-clinical-studies",
        relevance: {
          es: "Explica fortalezas y límites de diseños observacionales y aleatorizados, y por qué una asociación no establece por sí sola causa y efecto.",
          en: "Explains strengths and limits of observational and randomised designs and why an association alone does not establish cause and effect.",
        },
      },
      {
        id: "nccih-study-size",
        title: {
          es: "Cómo interpretar un artículo científico: tamaño del estudio",
          en: "How To Make Sense of a Scientific Journal Article: Size of the Study",
        },
        publisher: "NCCIH / National Institutes of Health",
        author: "National Center for Complementary and Integrative Health",
        publishedAt: "2026-07-25",
        accessedAt: "2026-07-28",
        url: "https://www.nccih.nih.gov/health/know-science/how-to-make-sense-of-a-scientific-journal-article/methods/size-of-the-study",
        relevance: {
          es: "Describe por qué las muestras pequeñas pueden producir resultados inconclusos o debidos al azar y por qué el tamaño afecta la generalización.",
          en: "Describes why small samples may produce inconclusive or chance results and why size affects generalisation.",
        },
      },
    ],
    sourceLimit: 2,
    actions: [
      {
        id: "mandate-setting",
        title: {
          es: "Recomendarlo para todo el campus",
          en: "Recommend it campus-wide",
        },
        detail: {
          es: "Usar el 27% como prueba suficiente para una política general.",
          en: "Use 27% as sufficient proof for a general policy.",
        },
        coachLabel: "would recommend a campus-wide mandate based on the pilot",
      },
      {
        id: "declare-no-effect",
        title: {
          es: "Declarar que no funciona",
          en: "Declare that it does not work",
        },
        detail: {
          es: "Convertir las limitaciones del estudio en prueba de efecto nulo.",
          en: "Turn the study limitations into proof of no effect.",
        },
        coachLabel: "would turn insufficient evidence into proof of no effect",
      },
      {
        id: "label-preliminary",
        title: {
          es: "Etiquetar como señal preliminar",
          en: "Label it as a preliminary signal",
        },
        detail: {
          es: "Explicar que el piloto genera una hipótesis, no una conclusión causal ni generalizable.",
          en: "Explain that the pilot generates a hypothesis, not a causal or generalisable conclusion.",
        },
        coachLabel: "would label the result as a preliminary hypothesis",
      },
      {
        id: "propose-confirmation",
        title: {
          es: "Proponer una prueba confirmatoria",
          en: "Propose a confirmatory test",
        },
        detail: {
          es: "Pedir una muestra planificada, comparación, resultado definido y análisis transparente.",
          en: "Ask for a planned sample, comparison, defined outcome and transparent analysis.",
        },
        coachLabel: "would propose a controlled confirmatory study",
      },
    ],
    evidenceMap: {
      claim: {
        es: "La escala de grises sube las notas 27%",
        en: "Grayscale raises grades by 27%",
      },
      finding: {
        es: "18 voluntarios mejoraron una prueba práctica repetida",
        en: "Eighteen volunteers improved on a repeated practice quiz",
      },
      gap: {
        es: "Sin comparación, aleatorización, notas finales, precisión ni réplica",
        en: "No comparison, randomisation, final grades, precision or replication",
      },
    },
    result: {
      cardSubtitle: {
        es: "Caso 04 · construida con las decisiones de la persona",
        en: "Case 04 · built from the learner’s decisions",
      },
      conclusion: {
        es: "El piloto ficticio produce una señal interesante, pero su muestra pequeña y voluntaria, la ausencia de comparación y el resultado medido no permiten afirmar que la escala de grises cause una mejora de 27% en calificaciones. Tampoco prueban que no tenga ningún efecto.",
        en: "The fictional pilot produces an interesting signal, but its small volunteer sample, lack of comparison and measured outcome do not support claiming that grayscale causes a 27% improvement in grades. They also do not prove it has no effect.",
      },
      habit: {
        es: "Cuando la evidencia es insuficiente, nombrar la incertidumbre, limitar la conclusión y especificar qué diseño permitiría aprender más.",
        en: "When evidence is insufficient, name the uncertainty, limit the conclusion and specify which design would allow more to be learned.",
      },
    },
    ai: {
      scenario:
        "A simulated campus post claims that enabling grayscale on phones raises grades by 27% and should become the default for every student.",
      knownEvidence:
        "The fictional exploratory pilot had 18 volunteers, no comparison group or random assignment, and measured a repeated practice quiz rather than final grades. It has no preregistration, confidence interval or independent replication.",
    },
  },
];
