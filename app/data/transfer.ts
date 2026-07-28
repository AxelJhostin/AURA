import type { LocalizedText } from "./cases";

export type TransferChoice = {
  id: string;
  title: LocalizedText;
  detail: LocalizedText;
  score: 0 | 1;
};

export const transferChallenge = {
  id: "scholarship-link",
  eyebrow: {
    es: "RETO DE TRANSFERENCIA · SIN GUÍA",
    en: "TRANSFER CHALLENGE · UNGUIDED",
  },
  title: {
    es: "Ahora investiga sin las pistas de AURA",
    en: "Now investigate without AURA’s clues",
  },
  intro: {
    es: "Este caso cambia de tema y no muestra fuentes ni preguntas socráticas. Tu primer movimiento permite observar si transfieres la habilidad.",
    en: "This case changes topic and provides no sources or Socratic prompts. Your first move shows whether you transfer the skill.",
  },
  privacy: {
    es: "Solo se registran identificadores de opciones, tiempo y puntuación. Nunca se guarda texto libre ni identidad.",
    en: "Only option identifiers, time and score are recorded. Free text and identity are never stored.",
  },
  scenarioLabel: {
    es: "Mensaje reenviado en un grupo estudiantil",
    en: "Message forwarded in a student group",
  },
  scenario: {
    es: "“La Universidad Global abrió 500 becas internacionales. El registro cierra esta noche. Completa tus datos en becas-global.info y comparte.”",
    en: "“Global University opened 500 international scholarships. Registration closes tonight. Submit your details at global-scholarships.info and share.”",
  },
  questionOne: {
    es: "¿Cuál sería tu primer movimiento de investigación?",
    en: "What would be your first research move?",
  },
  questionTwo: {
    es: "¿Qué razón sostiene mejor ese movimiento?",
    en: "Which reason best supports that move?",
  },
  firstMoves: [
    {
      id: "open-form",
      title: {
        es: "Abrir el formulario y revisar qué pide",
        en: "Open the form and inspect what it asks for",
      },
      detail: {
        es: "Entrar al enlace antes de verificar quién lo controla.",
        en: "Visit the link before verifying who controls it.",
      },
      score: 0,
    },
    {
      id: "official-source",
      title: {
        es: "Buscar la beca en los canales oficiales",
        en: "Search for the scholarship in official channels",
      },
      detail: {
        es: "Comprobar sitio institucional, dominio y convocatoria original.",
        en: "Check the institutional site, domain and original call.",
      },
      score: 1,
    },
    {
      id: "forward-question",
      title: {
        es: "Reenviarlo preguntando si alguien sabe",
        en: "Forward it and ask whether anyone knows",
      },
      detail: {
        es: "Usar al grupo como primera fuente de confirmación.",
        en: "Use the group as the first source of confirmation.",
      },
      score: 0,
    },
    {
      id: "judge-design",
      title: {
        es: "Evaluar si el diseño parece profesional",
        en: "Judge whether the design looks professional",
      },
      detail: {
        es: "Tomar la apariencia como señal principal de autenticidad.",
        en: "Use appearance as the main signal of authenticity.",
      },
      score: 0,
    },
  ] satisfies TransferChoice[],
  reasons: [
    {
      id: "provenance",
      title: {
        es: "La procedencia conecta el mensaje con la institución responsable",
        en: "Provenance connects the message to the responsible institution",
      },
      detail: {
        es: "Permite contrastar dominio, bases, fecha y responsables.",
        en: "It enables checks of the domain, terms, date and responsible people.",
      },
      score: 1,
    },
    {
      id: "popularity",
      title: {
        es: "Si circula en varios grupos, probablemente es real",
        en: "If it circulates in several groups, it is probably real",
      },
      detail: {
        es: "La repetición funciona como prueba suficiente.",
        en: "Repetition works as sufficient proof.",
      },
      score: 0,
    },
    {
      id: "urgency-value",
      title: {
        es: "La urgencia justifica actuar antes de verificar",
        en: "Urgency justifies acting before verifying",
      },
      detail: {
        es: "Es preferible arriesgar los datos que perder la oportunidad.",
        en: "Risking data is preferable to missing the opportunity.",
      },
      score: 0,
    },
    {
      id: "visual-quality",
      title: {
        es: "Un logotipo convincente reduce la necesidad de rastrear",
        en: "A convincing logo reduces the need to trace",
      },
      detail: {
        es: "La calidad visual reemplaza la confirmación institucional.",
        en: "Visual quality replaces institutional confirmation.",
      },
      score: 0,
    },
  ] satisfies TransferChoice[],
  start: { es: "Iniciar reto sin guía", en: "Start unguided challenge" },
  submit: { es: "Evaluar transferencia", en: "Evaluate transfer" },
  reset: { es: "Repetir reto", en: "Retry challenge" },
  resultTitle: {
    es: "Resultado de transferencia",
    en: "Transfer result",
  },
  feedback: {
    strong: {
      title: {
        es: "Transferencia sólida",
        en: "Strong transfer",
      },
      body: {
        es: "Elegiste una fuente primaria institucional y justificaste por qué la procedencia importa. Aplicaste el método sin recibir pistas.",
        en: "You chose an institutional primary source and justified why provenance matters. You applied the method without prompts.",
      },
    },
    emerging: {
      title: {
        es: "Transferencia en desarrollo",
        en: "Developing transfer",
      },
      body: {
        es: "Una parte de tu estrategia protege la investigación, pero la otra depende de una señal débil. Revisa qué evidencia conecta el mensaje con su responsable.",
        en: "One part of your strategy supports investigation, but the other relies on a weak signal. Reconsider what evidence connects the message to its owner.",
      },
    },
    needsPractice: {
      title: {
        es: "Conviene practicar la procedencia",
        en: "Provenance needs more practice",
      },
      body: {
        es: "La popularidad, urgencia o apariencia no establecen quién controla una convocatoria. El siguiente movimiento más seguro es buscar la fuente institucional original.",
        en: "Popularity, urgency or appearance do not establish who controls a call. The safer next move is to find the original institutional source.",
      },
    },
  },
} as const;

export const transferOptionIds = new Set([
  ...transferChallenge.firstMoves.map((item) => item.id),
  ...transferChallenge.reasons.map((item) => item.id),
]);
