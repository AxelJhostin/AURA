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
  id: "internship-partner-transfer-v1",
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
    es: "Este caso presenta una oportunidad nueva. Las opciones no dan pistas y AURA no muestra retroalimentación hasta que termines.",
    en: "This case presents a new opportunity. Options provide no clues, and AURA shows no feedback until you finish.",
  },
  privacy: {
    es: "Solo se registran identificadores de opciones, tiempo y puntuación 0–6. Nunca se guarda texto libre ni identidad.",
    en: "Only option identifiers, time and a 0–6 score are recorded. Free text and identity are never stored.",
  },
  scenarioLabel: {
    es: "Historia compartida por una cuenta estudiantil",
    en: "Story shared by a student account",
  },
  scenario: {
    es: "“TalentBridge LATAM y GreenWave abrieron 40 pasantías internacionales pagadas. Postula antes de las 18:00 subiendo tu cédula y un video a talentbridge-careers.net. Cupos garantizados para estudiantes.”",
    en: "“TalentBridge LATAM and GreenWave opened 40 paid international internships. Apply before 6 p.m. by uploading your ID and a video to talentbridge-careers.net. Places guaranteed for students.”",
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
        es: "La afirmación verificable es que ambas organizaciones ofrecen 40 pasantías pagadas, con un plazo y un canal de postulación determinados.",
        en: "The checkable claim is that both organizations offer 40 paid internships through a stated deadline and application channel.",
      },
      options: [
        {
          id: "claim-internship-call",
          title: {
            es: "Existe una convocatoria conjunta de 40 pasantías pagadas que cierra a las 18:00.",
            en: "A joint call for 40 paid internships exists and closes at 6 p.m.",
          },
          score: 1,
        },
        {
          id: "claim-company-generous",
          title: {
            es: "GreenWave es una empresa generosa con estudiantes.",
            en: "GreenWave is a generous company toward students.",
          },
          score: 0,
        },
        {
          id: "claim-story-urgent",
          title: {
            es: "El mensaje utiliza un tono urgente.",
            en: "The message uses an urgent tone.",
          },
          score: 0,
        },
        {
          id: "claim-students-interested",
          title: {
            es: "A muchas personas estudiantes podrían interesarles pasantías.",
            en: "Many students might be interested in internships.",
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
        es: "El primer movimiento seguro es salir de la historia y buscar la vacante en los portales oficiales de las organizaciones mencionadas.",
        en: "The safest first move is to leave the story and search for the vacancy on the named organizations’ official portals.",
      },
      options: [
        {
          id: "origin-official-careers",
          title: {
            es: "En las secciones de empleo o programas del sitio oficial de ambas organizaciones.",
            en: "In the careers or programmes sections of both organizations’ official sites.",
          },
          score: 1,
        },
        {
          id: "origin-student-profile",
          title: {
            es: "En las historias anteriores de la cuenta estudiantil.",
            en: "In the student account’s previous stories.",
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
        es: "El dominio, las bases, la entidad responsable y la conexión declarada por ambas organizaciones permiten comprobar procedencia.",
        en: "The domain, terms, accountable entity and connection declared by both organizations establish provenance.",
      },
      options: [
        {
          id: "provenance-domain-owner",
          title: {
            es: "Comparar dominio, bases, responsables y alianza con los canales oficiales de ambas organizaciones.",
            en: "Compare the domain, terms, owners and partnership with both organizations’ official channels.",
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
        es: "Confirmar con la empresa asociada o con orientación laboral universitaria evita depender de TalentBridge y de la cuenta que compartió la historia.",
        en: "Confirmation with the partner company or university career services avoids relying on TalentBridge and the account that shared the story.",
      },
      options: [
        {
          id: "corroboration-partner-careers",
          title: {
            es: "Confirmar con GreenWave o con orientación laboral por un contacto obtenido independientemente.",
            en: "Confirm with GreenWave or career services through independently obtained contact details.",
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
        es: "Hasta encontrar confirmación independiente no sabemos si la alianza, los 40 cupos, el plazo o el formulario son auténticos.",
        en: "Until independent confirmation is found, we do not know whether the partnership, 40 places, deadline or form are authentic.",
      },
      options: [
        {
          id: "uncertainty-unconfirmed",
          title: {
            es: "La alianza, los cupos, el plazo y el formulario siguen sin confirmar.",
            en: "The partnership, places, deadline and form remain unconfirmed.",
          },
          score: 1,
        },
        {
          id: "uncertainty-definitely-false",
          title: {
            es: "La urgencia demuestra que toda la oferta es falsa.",
            en: "Urgency proves that the entire offer is false.",
          },
          score: 0,
        },
        {
          id: "uncertainty-definitely-true",
          title: {
            es: "El número exacto de pasantías demuestra que es auténtica.",
            en: "The exact internship number proves it is authentic.",
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
        es: "Pausar protege la cédula y la imagen personal; si se confirma la alianza, conviene postular y compartir únicamente desde el canal oficial.",
        en: "Pausing protects identity documents and personal imagery; if the partnership is confirmed, apply and share only through the official channel.",
      },
      options: [
        {
          id: "action-pause-confirm",
          title: {
            es: "No subir cédula ni video; confirmar y usar únicamente la convocatoria oficial.",
            en: "Do not upload an ID or video; confirm and use only the official call.",
          },
          score: 1,
        },
        {
          id: "action-submit-fast",
          title: {
            es: "Subir los archivos rápido para no perder el plazo.",
            en: "Upload the files quickly to avoid missing the deadline.",
          },
          score: 0,
        },
        {
          id: "action-forward-question",
          title: {
            es: "Compartir la historia preguntando si alguien sabe algo.",
            en: "Share the story and ask whether anyone knows more.",
          },
          score: 0,
        },
        {
          id: "action-report-student",
          title: {
            es: "Denunciar automáticamente a la cuenta estudiantil.",
            en: "Automatically report the student account.",
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
