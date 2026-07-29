import type { LocalizedText } from "./cases";

export type TransferChoice = {
  id: string;
  title: LocalizedText;
  score: 0 | 1;
};

export type TransferQuestion = {
  id:
    | "claim"
    | "origin"
    | "provenance"
    | "corroboration"
    | "uncertainty"
    | "action";
  prompt: LocalizedText;
  criterion: LocalizedText;
  feedback: LocalizedText;
  options: TransferChoice[];
};

export const transferChallenge = {
  id: "scholarship-link-v2",
  maxScore: 6,
  eyebrow: {
    es: "RETO DE TRANSFERENCIA · SIN PISTAS",
    en: "TRANSFER CHALLENGE · NO CLUES",
  },
  title: {
    es: "Ahora demuestra el método sin ayuda",
    en: "Now demonstrate the method without help",
  },
  intro: {
    es: "Este caso cambia de tema. Las opciones no explican cuál es correcta y AURA no muestra retroalimentación hasta que termines.",
    en: "This case changes topic. Options do not explain which one is correct, and AURA shows no feedback until you finish.",
  },
  privacy: {
    es: "Solo se registran identificadores de opciones, tiempo y puntuación 0–6. Nunca se guarda texto libre ni identidad.",
    en: "Only option identifiers, time and a 0–6 score are recorded. Free text and identity are never stored.",
  },
  scenarioLabel: {
    es: "Mensaje reenviado en un grupo estudiantil",
    en: "Message forwarded in a student group",
  },
  scenario: {
    es: "“La Universidad Global abrió 500 becas internacionales. El registro cierra esta noche. Completa tus datos en becas-global.info y comparte.”",
    en: "“Global University opened 500 international scholarships. Registration closes tonight. Submit your details at global-scholarships.info and share.”",
  },
  questions: [
    {
      id: "claim",
      prompt: {
        es: "¿Qué afirmación concreta necesita comprobación?",
        en: "Which concrete claim needs verification?",
      },
      criterion: {
        es: "Afirmación verificable",
        en: "Checkable claim",
      },
      feedback: {
        es: "La afirmación verificable es que existe una convocatoria de 500 becas, con una fecha y un canal de registro determinados.",
        en: "The checkable claim is that a 500-scholarship call exists with a stated deadline and registration channel.",
      },
      options: [
        {
          id: "claim-scholarship-call",
          title: {
            es: "Existe una convocatoria de 500 becas que cierra esta noche.",
            en: "A 500-scholarship call exists and closes tonight.",
          },
          score: 1,
        },
        {
          id: "claim-university-generous",
          title: {
            es: "La universidad es generosa con sus estudiantes.",
            en: "The university is generous with its students.",
          },
          score: 0,
        },
        {
          id: "claim-message-urgent",
          title: {
            es: "El mensaje utiliza un tono urgente.",
            en: "The message uses an urgent tone.",
          },
          score: 0,
        },
        {
          id: "claim-friends-interested",
          title: {
            es: "A muchas amistades podría interesarles una beca.",
            en: "Many friends might be interested in a scholarship.",
          },
          score: 0,
        },
      ],
    },
    {
      id: "origin",
      prompt: {
        es: "¿Dónde buscarías primero la convocatoria original?",
        en: "Where would you first look for the original call?",
      },
      criterion: {
        es: "Rastreo de origen",
        en: "Origin tracing",
      },
      feedback: {
        es: "El primer movimiento seguro es salir del enlace reenviado y buscar la convocatoria en el sitio oficial de la institución.",
        en: "The safest first move is to leave the forwarded link and search for the call on the institution’s official website.",
      },
      options: [
        {
          id: "origin-official-website",
          title: {
            es: "En la sección de becas del sitio oficial de la universidad.",
            en: "In the scholarship section of the university’s official site.",
          },
          score: 1,
        },
        {
          id: "origin-forwarder-profile",
          title: {
            es: "En el perfil de la persona que reenvió el mensaje.",
            en: "On the profile of the person who forwarded the message.",
          },
          score: 0,
        },
        {
          id: "origin-open-form",
          title: {
            es: "Dentro del formulario del enlace recibido.",
            en: "Inside the form from the received link.",
          },
          score: 0,
        },
        {
          id: "origin-search-ad",
          title: {
            es: "En el primer anuncio que aparezca en el buscador.",
            en: "In the first advertisement shown by a search engine.",
          },
          score: 0,
        },
      ],
    },
    {
      id: "provenance",
      prompt: {
        es: "¿Qué comprobación conecta mejor el enlace con su responsable?",
        en: "Which check best connects the link to its responsible owner?",
      },
      criterion: {
        es: "Procedencia",
        en: "Provenance",
      },
      feedback: {
        es: "Dominio, bases oficiales, datos de contacto y responsable institucional permiten comprobar procedencia.",
        en: "The domain, official terms, contact details and institutional owner establish provenance.",
      },
      options: [
        {
          id: "provenance-domain-owner",
          title: {
            es: "Comparar dominio, bases y contacto con los canales institucionales.",
            en: "Compare the domain, terms and contact details with institutional channels.",
          },
          score: 1,
        },
        {
          id: "provenance-logo",
          title: {
            es: "Comprobar si el logotipo parece profesional.",
            en: "Check whether the logo looks professional.",
          },
          score: 0,
        },
        {
          id: "provenance-followers",
          title: {
            es: "Contar cuántas personas siguen la cuenta que lo compartió.",
            en: "Count how many people follow the account that shared it.",
          },
          score: 0,
        },
        {
          id: "provenance-spelling",
          title: {
            es: "Ver si el mensaje está escrito sin errores.",
            en: "See whether the message contains no spelling errors.",
          },
          score: 0,
        },
      ],
    },
    {
      id: "corroboration",
      prompt: {
        es: "¿Qué segundo movimiento aporta corroboración independiente?",
        en: "Which second move provides independent corroboration?",
      },
      criterion: {
        es: "Corroboración",
        en: "Corroboration",
      },
      feedback: {
        es: "Confirmar mediante otro canal institucional o una entidad reconocida evita depender del mismo enlace.",
        en: "Confirmation through another institutional channel or recognized body avoids relying on the same link.",
      },
      options: [
        {
          id: "corroboration-second-channel",
          title: {
            es: "Confirmar con la oficina de becas o un segundo canal institucional.",
            en: "Confirm with the scholarship office or a second institutional channel.",
          },
          score: 1,
        },
        {
          id: "corroboration-group-repetition",
          title: {
            es: "Verificar si el mismo texto circula en más grupos.",
            en: "Check whether the same text circulates in more groups.",
          },
          score: 0,
        },
        {
          id: "corroboration-influencer",
          title: {
            es: "Buscar si una persona influyente también lo publicó.",
            en: "Look for an influencer who also posted it.",
          },
          score: 0,
        },
        {
          id: "corroboration-search-rank",
          title: {
            es: "Confiar en que el enlace aparece entre los primeros resultados.",
            en: "Trust that the link appears among the first search results.",
          },
          score: 0,
        },
      ],
    },
    {
      id: "uncertainty",
      prompt: {
        es: "Antes de confirmar, ¿qué incertidumbre debe permanecer visible?",
        en: "Before confirmation, which uncertainty must remain visible?",
      },
      criterion: {
        es: "Incertidumbre calibrada",
        en: "Calibrated uncertainty",
      },
      feedback: {
        es: "Hasta encontrar confirmación institucional no sabemos si la convocatoria, el plazo o el formulario son auténticos.",
        en: "Until institutional confirmation is found, we do not know whether the call, deadline or form is authentic.",
      },
      options: [
        {
          id: "uncertainty-unconfirmed",
          title: {
            es: "La convocatoria, el plazo y el formulario siguen sin confirmar.",
            en: "The call, deadline and form remain unconfirmed.",
          },
          score: 1,
        },
        {
          id: "uncertainty-definitely-false",
          title: {
            es: "La urgencia demuestra que toda la convocatoria es falsa.",
            en: "Urgency proves that the entire call is false.",
          },
          score: 0,
        },
        {
          id: "uncertainty-definitely-true",
          title: {
            es: "El número exacto de becas demuestra que es auténtica.",
            en: "The exact scholarship number proves it is authentic.",
          },
          score: 0,
        },
        {
          id: "uncertainty-none",
          title: {
            es: "No queda incertidumbre porque el mensaje incluye una fecha.",
            en: "No uncertainty remains because the message includes a date.",
          },
          score: 0,
        },
      ],
    },
    {
      id: "action",
      prompt: {
        es: "¿Qué acción es proporcional a la evidencia disponible?",
        en: "Which action is proportionate to the available evidence?",
      },
      criterion: {
        es: "Acción responsable",
        en: "Responsible action",
      },
      feedback: {
        es: "Pausar protege los datos y evita amplificar el enlace; si se confirma, conviene compartir la convocatoria oficial.",
        en: "Pausing protects personal data and avoids amplification; if confirmed, share the official call instead.",
      },
      options: [
        {
          id: "action-pause-confirm",
          title: {
            es: "No ingresar datos ni reenviar; confirmar y compartir solo el enlace oficial.",
            en: "Do not submit data or forward; confirm and share only the official link.",
          },
          score: 1,
        },
        {
          id: "action-submit-fast",
          title: {
            es: "Ingresar los datos rápido para no perder el plazo.",
            en: "Submit the data quickly to avoid missing the deadline.",
          },
          score: 0,
        },
        {
          id: "action-forward-question",
          title: {
            es: "Reenviar el enlace preguntando si alguien sabe algo.",
            en: "Forward the link and ask whether anyone knows more.",
          },
          score: 0,
        },
        {
          id: "action-report-student",
          title: {
            es: "Denunciar automáticamente a la persona que lo compartió.",
            en: "Automatically report the person who shared it.",
          },
          score: 0,
        },
      ],
    },
  ] satisfies TransferQuestion[],
  start: { es: "Iniciar reto sin pistas", en: "Start challenge without clues" },
  submit: { es: "Evaluar mis decisiones", en: "Evaluate my decisions" },
  reset: { es: "Repetir reto", en: "Retry challenge" },
  resultTitle: {
    es: "Resultado de transferencia",
    en: "Transfer result",
  },
  reviewTitle: {
    es: "Revisión por conducta",
    en: "Behavior review",
  },
  feedback: {
    strong: {
      title: {
        es: "Transferencia sólida",
        en: "Strong transfer",
      },
      body: {
        es: "Aplicaste las seis conductas sin pistas: afirmación, origen, procedencia, corroboración, incertidumbre y acción.",
        en: "You applied all six behaviors without clues: claim, origin, provenance, corroboration, uncertainty and action.",
      },
    },
    solid: {
      title: {
        es: "Transferencia consistente",
        en: "Consistent transfer",
      },
      body: {
        es: "La mayor parte de tu estrategia protege la investigación. Revisa las conductas marcadas para fortalecer el proceso completo.",
        en: "Most of your strategy supports investigation. Review the marked behaviors to strengthen the complete process.",
      },
    },
    emerging: {
      title: {
        es: "Transferencia en desarrollo",
        en: "Developing transfer",
      },
      body: {
        es: "Algunas decisiones siguen dependiendo de señales débiles. Usa la revisión para reconstruir el recorrido desde el origen.",
        en: "Some decisions still rely on weak signals. Use the review to rebuild the process from the origin.",
      },
    },
    needsPractice: {
      title: {
        es: "Conviene repetir la práctica",
        en: "More practice recommended",
      },
      body: {
        es: "Urgencia, apariencia y repetición no establecen autenticidad. Empieza por la afirmación y la fuente institucional.",
        en: "Urgency, appearance and repetition do not establish authenticity. Start with the claim and institutional source.",
      },
    },
  },
} as const;

export const transferOptionIds = new Set(
  transferChallenge.questions.flatMap((question) =>
    question.options.map((option) => option.id),
  ),
);
