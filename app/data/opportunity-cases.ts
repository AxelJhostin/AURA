import type {
  AuraCase,
  CaseReference,
  LocalizedText,
} from "./cases";

type OpportunitySeed = {
  id: string;
  number: string;
  theme: AuraCase["theme"];
  evidenceState: AuraCase["editorial"]["evidenceState"];
  tag: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  learningObjective: LocalizedText;
  nextGate: LocalizedText;
  missionTitle: LocalizedText;
  missionBody: LocalizedText;
  context: LocalizedText;
  claim: LocalizedText;
  evidence: LocalizedText;
  action: LocalizedText;
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
  };
  signals: AuraCase["signals"];
  sources: AuraCase["sources"];
  references: CaseReference[];
  finding: LocalizedText;
  gap: LocalizedText;
  conclusion: LocalizedText;
  habit: LocalizedText;
  aiScenario: string;
  aiKnownEvidence: string;
};

const reviewedAt = "2026-07-29";
const accessedAt = "2026-07-29";

function localize(es: string, en: string): LocalizedText {
  return { es, en };
}

function choice(
  id: string,
  esTitle: string,
  enTitle: string,
  esDetail: string,
  enDetail: string,
  coachLabel: string,
) {
  return {
    id,
    title: localize(esTitle, enTitle),
    detail: localize(esDetail, enDetail),
    coachLabel,
  };
}

function simulatedSource(
  caseNumber: string,
  sourceNumber: number,
  id: string,
  code: string,
  kind: LocalizedText,
  title: LocalizedText,
  detail: LocalizedText,
  clue: LocalizedText,
  publisher: LocalizedText,
  disclosure: LocalizedText,
  coachLabel: string,
) {
  return {
    id,
    code,
    kind,
    title,
    detail,
    clue,
    coachLabel,
    provenance: {
      status: "simulated" as const,
      documentId: `AURA-${caseNumber}-S${sourceNumber}`,
      publisher,
      publishedAt: reviewedAt,
      disclosure,
    },
  };
}

function createOpportunityCase(seed: OpportunitySeed): AuraCase {
  return {
    id: seed.id,
    number: seed.number,
    status: "published",
    theme: seed.theme,
    editorial: {
      evidenceState: seed.evidenceState,
      reviewStatus: "internal-review-complete",
      reviewedAt,
      reviewerRole: localize(
        "Revisión editorial interna AURA Opportunity Circles",
        "AURA Opportunity Circles internal editorial review",
      ),
      learningObjective: seed.learningObjective,
      nextGate: seed.nextGate,
    },
    catalog: {
      tag: seed.tag,
      title: seed.title,
      summary: seed.summary,
    },
    mission: {
      eyebrow: localize(
        `OPPORTUNITY CIRCLE · CASO ${seed.number}`,
        `OPPORTUNITY CIRCLE · CASE ${seed.number}`,
      ),
      title: seed.missionTitle,
      body: seed.missionBody,
    },
    artifact: {
      context: seed.context,
      claim: seed.claim,
      evidence: seed.evidence,
      action: seed.action,
    },
    post: {
      ...seed.post,
      note: localize(
        "Caso y organizaciones ficticias. Las referencias reales aparecen después de investigar y respaldan el método, no la existencia del mensaje simulado.",
        "Fictional case and organizations. Real references appear after research and support the method, not the existence of the simulated message.",
      ),
    },
    stages: {
      analyze: {
        title: localize(
          "¿Qué harías antes de entregar algo?",
          "What would you do before giving anything away?",
        ),
        body: localize(
          "Registra tu reacción inicial. La meta no es desconfiar de todo, sino decidir qué merece una pausa.",
          "Record your initial reaction. The goal is not to distrust everything, but to decide what deserves a pause.",
        ),
        coach: localize(
          "Pregunta AURA: ¿qué podrías perder si actúas ahora y qué podrías comprobar sin usar el enlace recibido?",
          "AURA asks: what could you lose by acting now, and what could you verify without using the received link?",
        ),
        feedback: localize(
          "Decisión inicial guardada. Todavía no hay un veredicto: ahora separa la oportunidad prometida de la presión para actuar.",
          "Initial decision saved. There is no verdict yet: now separate the promised opportunity from the pressure to act.",
        ),
      },
      uncover: {
        title: localize(
          "Convierte señales en preguntas",
          "Turn signals into questions",
        ),
        body: localize(
          "Selecciona las pistas que exigen investigar identidad, canal, condiciones o urgencia.",
          "Select the clues that require checking identity, channel, conditions or urgency.",
        ),
        coach: localize(
          "Pregunta AURA: ¿qué señal solo provoca sospecha y cuál puede conectarse con una comprobación concreta?",
          "AURA asks: which clue merely creates suspicion, and which can be connected to a concrete check?",
        ),
      },
      research: {
        title: localize(
          "Rastrea la oportunidad fuera del mensaje",
          "Trace the opportunity beyond the message",
        ),
        body: localize(
          "Abre dos expedientes por su procedencia. Busca la convocatoria original y un segundo canal independiente.",
          "Open two dossiers based on provenance. Find the original call and a second independent channel.",
        ),
        coach: localize(
          "Pregunta AURA: ¿qué pieza conecta la oferta con una institución responsable y cuál solo repite su apariencia?",
          "AURA asks: which item connects the offer to an accountable institution, and which merely repeats its appearance?",
        ),
      },
      act: {
        title: localize(
          "Protege la oportunidad y a la persona",
          "Protect both the opportunity and the person",
        ),
        body: localize(
          "Decide de forma proporcional: avanzar por un canal oficial, pedir confirmación, pausar o advertir con evidencia.",
          "Make a proportionate decision: proceed through an official channel, request confirmation, pause or warn with evidence.",
        ),
        coach: localize(
          "Pregunta AURA: ¿qué acción reduce el riesgo sin afirmar más de lo que la evidencia permite?",
          "AURA asks: which action reduces risk without claiming more than the evidence allows?",
        ),
      },
    },
    initialChoices: [
      choice(
        `${seed.id}-act-now`,
        "Actuaría desde el mensaje",
        "I would act through the message",
        "La oportunidad parece urgente y podría desaparecer.",
        "The opportunity seems urgent and might disappear.",
        "would act through the forwarded message because the opportunity seems urgent",
      ),
      choice(
        `${seed.id}-reject-now`,
        "La descartaría inmediatamente",
        "I would dismiss it immediately",
        "Cualquier señal extraña basta para asumir que es falsa.",
        "Any unusual clue is enough to assume it is fake.",
        "would dismiss the opportunity immediately based on suspicion alone",
      ),
      choice(
        `${seed.id}-pause-trace`,
        "Pausaría y rastrearía el origen",
        "I would pause and trace the origin",
        "Buscaría la convocatoria y el contacto oficial sin usar el enlace recibido.",
        "I would find the original call and official contact without using the received link.",
        "would pause and trace the opportunity through an independent official channel",
      ),
    ],
    signals: seed.signals,
    sources: seed.sources,
    references: seed.references,
    sourceLimit: 2,
    actions: [
      choice(
        `${seed.id}-continue-forwarded`,
        "Continuar desde el enlace recibido",
        "Continue through the received link",
        "Completar el proceso porque la presentación parece profesional.",
        "Complete the process because the presentation looks professional.",
        "would continue through the received link based on its professional appearance",
      ),
      choice(
        `${seed.id}-official-proportional`,
        "Usar el canal oficial y explicar lo comprobado",
        "Use the official channel and explain what was verified",
        "Actuar únicamente desde la fuente rastreada y conservar los límites encontrados.",
        "Act only through the traced source and preserve the limits that were found.",
        "would use a traced official channel and communicate only what the evidence supports",
      ),
      choice(
        `${seed.id}-warn-absolute`,
        "Publicar que todo es una estafa",
        "Post that everything is a scam",
        "Advertir al grupo de forma absoluta aunque todavía existan vacíos.",
        "Warn the group in absolute terms even if evidence gaps remain.",
        "would make an absolute fraud accusation despite remaining evidence gaps",
      ),
    ],
    evidenceMap: {
      claim: seed.claim,
      finding: seed.finding,
      gap: seed.gap,
    },
    result: {
      cardSubtitle: localize(
        `Caso ${seed.number} · decisión construida por la persona`,
        `Case ${seed.number} · learner-built decision`,
      ),
      conclusion: seed.conclusion,
      habit: seed.habit,
    },
    ai: {
      scenario: seed.aiScenario,
      knownEvidence: seed.aiKnownEvidence,
    },
  };
}

const scholarshipCase = createOpportunityCase({
  id: "scholarship-data-trap",
  number: "01",
  theme: "scholarship",
  evidenceState: "misleading",
  tag: localize("BECA · DATOS", "SCHOLARSHIP · DATA"),
  title: localize("La beca que vence hoy", "The scholarship that expires today"),
  summary: localize(
    "Una convocatoria irresistible, un dominio imitador y una solicitud temprana de documentos.",
    "An irresistible call, an imitation domain and an early request for documents.",
  ),
  learningObjective: localize(
    "Rastrear una beca hasta su convocatoria original antes de entregar documentos, credenciales o dinero.",
    "Trace a scholarship to its original call before providing documents, credentials or money.",
  ),
  nextGate: localize(
    "Validar lenguaje y realismo con una oficina universitaria de becas antes del piloto formal.",
    "Validate language and realism with a university scholarship office before the formal pilot.",
  ),
  missionTitle: localize(
    "Protege tus datos sin perder una oportunidad real",
    "Protect your data without missing a real opportunity",
  ),
  missionBody: localize(
    "Un mensaje promete 500 becas y exige completar el registro esta noche. Comprueba si la convocatoria, el dominio y la solicitud de datos pertenecen a la misma institución.",
    "A message promises 500 scholarships and demands registration tonight. Check whether the call, domain and data request belong to the same institution.",
  ),
  context: localize("beca internacional · formulario", "international scholarship · form"),
  claim: localize(
    "“500 becas; registro hasta hoy”",
    "“500 scholarships; register today”",
  ),
  evidence: localize("Convocatoria + dominio + contacto", "Call + domain + contact"),
  action: localize("No entregar datos; alertar con evidencia", "Do not submit data; warn with evidence"),
  post: {
    avatar: "G",
    account: localize("Global Horizons Becas", "Global Horizons Scholarships"),
    meta: localize("@globalhorizons_ec · hace 9 min", "@globalhorizons_ec · 9 min ago"),
    body: localize(
      "¡Fuiste preseleccionado! La Fundación Global Horizons abrió 500 becas completas. El registro cierra hoy. Sube tu cédula y confirma tu cuenta en becas-global.info.",
      "You were preselected! Global Horizons Foundation opened 500 full scholarships. Registration closes today. Upload your ID and confirm your account at global-scholarships.info.",
    ),
    mediaKicker: localize("CONVOCATORIA 2026", "2026 CALL"),
    mediaValue: "500",
    mediaCaption: localize("BECAS COMPLETAS", "FULL SCHOLARSHIPS"),
    mediaMark: "GH",
    views: localize("84 mil visualizaciones", "84K views"),
    reposts: localize("7,1 mil compartidos", "7.1K shares"),
  },
  signals: [
    choice(
      "scholarship-unsolicited-selection",
      "“Fuiste preseleccionado” sin aplicar",
      "“You were preselected” without applying",
      "La selección no identifica solicitud previa, criterios ni responsable.",
      "The selection identifies no prior application, criteria or accountable person.",
      "noticed an unsolicited preselection claim",
    ),
    choice(
      "scholarship-deadline-pressure",
      "Cierre el mismo día",
      "Same-day deadline",
      "La urgencia reduce el tiempo para comprobar condiciones y procedencia.",
      "The urgency reduces time to verify conditions and provenance.",
      "noticed same-day pressure that discourages verification",
    ),
    choice(
      "scholarship-lookalike-domain",
      "Dominio distinto al nombre institucional",
      "Domain differs from the institution name",
      "El enlace usa palabras de becas, pero no demuestra pertenecer a la fundación.",
      "The link uses scholarship terms but does not prove it belongs to the foundation.",
      "noticed a lookalike domain with no demonstrated institutional ownership",
    ),
    choice(
      "scholarship-sensitive-data",
      "Cédula y cuenta antes de verificar elegibilidad",
      "ID and account before eligibility is verified",
      "Solicita datos sensibles antes de mostrar bases, contacto y tratamiento de información.",
      "It requests sensitive data before showing terms, contact details and data handling.",
      "noticed an early request for sensitive identity and account data",
    ),
  ],
  sources: [
    simulatedSource(
      "01",
      1,
      "scholarship-forwarded-card",
      "S1",
      localize("Mensaje reenviado", "Forwarded message"),
      localize("Tarjeta “500 becas completas”", "“500 full scholarships” card"),
      localize(
        "Repite la cifra, el cierre y el enlace, pero no contiene bases ni responsable.",
        "It repeats the number, deadline and link but contains no terms or accountable owner.",
      ),
      localize("Promesa sin bases", "Promise without terms"),
      localize("Artefacto AURA · grupo estudiantil simulado", "AURA artifact · simulated student group"),
      localize("Mensaje ficticio creado para entrenamiento; no es una convocatoria real.", "Fictional training message; it is not a real call."),
      "opened the forwarded promotional card",
    ),
    simulatedSource(
      "01",
      2,
      "scholarship-form-snapshot",
      "S2",
      localize("Formulario", "Form"),
      localize("Registro en becas-global.info", "Registration at global-scholarships.info"),
      localize(
        "Solicita cédula, contraseña de correo y fotografía; no muestra política de datos ni dirección verificable.",
        "Requests an ID, email password and photo; shows no data policy or verifiable address.",
      ),
      localize("Datos antes de identidad", "Data before identity"),
      localize("Sitio simulado becas-global.info · artefacto AURA", "Simulated global-scholarships.info site · AURA artifact"),
      localize("Captura ficticia; el dominio no está enlazado ni existe como servicio de AURA.", "Fictional screenshot; the domain is neither linked nor operated by AURA."),
      "opened the simulated application form and reviewed its data request",
    ),
    simulatedSource(
      "01",
      3,
      "scholarship-official-notice",
      "S3",
      localize("Canal institucional", "Institutional channel"),
      localize("Aviso de suplantación de Global Horizons", "Global Horizons impersonation notice"),
      localize(
        "El sitio institucional declara que no existe una convocatoria de 500 becas y que nunca solicita contraseñas.",
        "The institutional site states that no 500-scholarship call exists and that it never requests passwords.",
      ),
      localize("Desmentido de origen", "Source-level denial"),
      localize("Fundación Global Horizons simulada · centro de seguridad", "Simulated Global Horizons Foundation · security center"),
      localize("Aviso institucional ficticio utilizado para practicar rastreo lateral.", "Fictional institutional notice used to practise lateral tracing."),
      "opened the simulated foundation security notice",
    ),
    simulatedSource(
      "01",
      4,
      "scholarship-domain-record",
      "S4",
      localize("Registro técnico", "Technical record"),
      localize("Ficha de procedencia del dominio", "Domain provenance record"),
      localize(
        "El dominio fue registrado hace tres días y no comparte organización, contacto ni infraestructura con la fundación.",
        "The domain was registered three days ago and shares no organization, contact or infrastructure with the foundation.",
      ),
      localize("Propietario no conectado", "Unconnected owner"),
      localize("Informe técnico simulado · artefacto AURA", "Simulated technical report · AURA artifact"),
      localize("Registro ficticio; enseña qué comprobar sin revelar datos de un dominio real.", "Fictional record; it teaches what to check without exposing a real domain."),
      "opened the simulated domain provenance record",
    ),
  ],
  references: [
    {
      id: "oc-scholarship-ftc",
      title: localize("Cómo evitar estafas de becas y ayuda financiera", "How to avoid scholarship and financial aid scams"),
      publisher: "Federal Trade Commission",
      author: "Federal Trade Commission",
      publishedAt: "2024",
      accessedAt,
      url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams",
      relevance: localize(
        "Documenta presión, pagos anticipados y solicitudes de información como patrones frecuentes de fraude.",
        "Documents pressure, upfront payments and information requests as common fraud patterns.",
      ),
    },
    {
      id: "oc-scholarship-arcotel",
      title: localize("Mensajes promocionales fraudulentos en redes sociales", "Fraudulent promotional messages on social networks"),
      publisher: "ARCOTEL",
      author: "Agencia de Regulación y Control de las Telecomunicaciones",
      publishedAt: "2020",
      accessedAt,
      url: "https://www.arcotel.gob.ec/circulan-en-redes-sociales-mensajes-promocionales-fraudulentos/",
      relevance: localize(
        "Aporta contexto ecuatoriano sobre phishing y entrega engañosa de información personal.",
        "Provides Ecuadorian context on phishing and deceptive collection of personal information.",
      ),
    },
  ],
  finding: localize(
    "La institución niega la convocatoria y el dominio no está conectado con ella",
    "The institution denies the call and the domain is not connected to it",
  ),
  gap: localize(
    "El mensaje imita una oportunidad, pero no demuestra origen ni tratamiento legítimo de datos",
    "The message imitates an opportunity but proves neither origin nor legitimate data handling",
  ),
  conclusion: localize(
    "La convocatoria reenviada no pertenece a la institución simulada: el canal oficial la niega, el dominio no está conectado y el formulario solicita credenciales impropias. No se deben entregar datos ni usar el enlace.",
    "The forwarded call does not belong to the simulated institution: the official channel denies it, the domain is unconnected and the form requests improper credentials. No data should be submitted and the link should not be used.",
  ),
  habit: localize(
    "Buscar la beca desde el sitio oficial, leer las bases y comprobar el dominio antes de entregar documentos o credenciales.",
    "Find the scholarship through the official site, read its terms and verify the domain before providing documents or credentials.",
  ),
  aiScenario:
    "A simulated scholarship message claims the learner was preselected for 500 full scholarships and pressures them to upload identity documents and email credentials through a lookalike domain.",
  aiKnownEvidence:
    "The simulated institution explicitly denies the call, the domain record is not connected to it, and the form requests an email password with no privacy notice. The proportionate action is to avoid the link, protect data and warn with traceable evidence.",
});

const employmentCase = createOpportunityCase({
  id: "remote-job-equipment-fee",
  number: "02",
  theme: "employment",
  evidenceState: "misleading",
  tag: localize("EMPLEO · PAGO", "JOB · PAYMENT"),
  title: localize("Contratado sin entrevista", "Hired without an interview"),
  summary: localize(
    "Un salario atractivo, una cuenta personal y una compra obligatoria para empezar.",
    "An attractive salary, a personal account and a required purchase before starting.",
  ),
  learningObjective: localize(
    "Comprobar identidad del reclutador y condiciones de contratación antes de pagar o entregar información financiera.",
    "Verify recruiter identity and hiring conditions before paying or providing financial information.",
  ),
  nextGate: localize(
    "Revisar el flujo con orientación laboral universitaria y adaptar vocabulario al contexto local.",
    "Review the flow with university career services and adapt vocabulary to the local context.",
  ),
  missionTitle: localize("Investiga antes de pagar por trabajar", "Investigate before paying to work"),
  missionBody: localize(
    "Una empresa conocida ofrece empleo remoto sin entrevista y pide comprar un equipo a un proveedor específico. Rastrea al reclutador y la vacante antes de transferir dinero.",
    "A known company offers remote work without an interview and asks you to buy equipment from a specific supplier. Trace the recruiter and vacancy before transferring money.",
  ),
  context: localize("empleo remoto · reclutamiento", "remote job · recruitment"),
  claim: localize("“Estás contratado; paga el equipo”", "“You are hired; pay for equipment”"),
  evidence: localize("Vacante + reclutador + proceso", "Vacancy + recruiter + process"),
  action: localize("No pagar; contactar a la empresa", "Do not pay; contact the company"),
  post: {
    avatar: "N",
    account: localize("Nexa Talent", "Nexa Talent"),
    meta: localize("reclutamiento.nexa@gmail.com · hoy", "nexa.recruitment@gmail.com · today"),
    body: localize(
      "Tu perfil fue aprobado para Asistente Digital Remoto. Salario: USD 1.800. No necesitas entrevista. Para iniciar mañana, compra el equipo certificado por USD 140; recibirás reembolso.",
      "Your profile was approved for Remote Digital Assistant. Salary: USD 1,800. No interview required. To start tomorrow, buy the certified equipment for USD 140; you will be reimbursed.",
    ),
    mediaKicker: localize("OFERTA INMEDIATA", "IMMEDIATE OFFER"),
    mediaValue: "$1.800",
    mediaCaption: localize("TRABAJO REMOTO", "REMOTE JOB"),
    mediaMark: "NX",
    views: localize("mensaje directo", "direct message"),
    reposts: localize("reenviado 23 veces", "forwarded 23 times"),
  },
  signals: [
    choice(
      "job-personal-email",
      "Correo personal para una empresa conocida",
      "Personal email for a known company",
      "La dirección no utiliza el dominio corporativo que aparece en el sitio oficial.",
      "The address does not use the corporate domain shown on the official site.",
      "noticed recruitment from a personal rather than corporate email domain",
    ),
    choice(
      "job-no-interview",
      "Contratación sin entrevista",
      "Hiring without an interview",
      "No existe conversación sobre experiencia, funciones ni condiciones verificables.",
      "There is no conversation about experience, duties or verifiable conditions.",
      "noticed an employment offer made without an interview",
    ),
    choice(
      "job-upfront-equipment",
      "Pago anticipado por equipo",
      "Upfront equipment payment",
      "El supuesto empleador condiciona el trabajo a una compra inmediata.",
      "The supposed employer makes the job conditional on an immediate purchase.",
      "noticed an upfront equipment payment demanded by the recruiter",
    ),
    choice(
      "job-high-salary-pressure",
      "Salario alto y comienzo mañana",
      "High salary and start tomorrow",
      "La combinación de recompensa y urgencia reduce el tiempo de comprobación.",
      "The combination of reward and urgency reduces verification time.",
      "noticed a high reward paired with immediate-start pressure",
    ),
  ],
  sources: [
    simulatedSource(
      "02",
      1,
      "job-offer-letter",
      "S1",
      localize("Carta de oferta", "Offer letter"),
      localize("Contrato “Nexa Remote 2026”", "“Nexa Remote 2026” contract"),
      localize(
        "Incluye logotipo y salario, pero no razón social, firma verificable ni dirección laboral.",
        "Includes a logo and salary but no legal entity, verifiable signature or workplace address.",
      ),
      localize("Apariencia sin responsable", "Appearance without accountability"),
      localize("Documento adjunto simulado · artefacto AURA", "Simulated attachment · AURA artifact"),
      localize("Carta ficticia; no representa a una empresa ni vacante real.", "Fictional letter; it represents no real company or vacancy."),
      "opened the simulated job offer letter",
    ),
    simulatedSource(
      "02",
      2,
      "job-vendor-invoice",
      "S2",
      localize("Factura", "Invoice"),
      localize("Proveedor de equipo certificado", "Certified equipment supplier"),
      localize(
        "Solicita transferencia a una cuenta personal y promete reembolso después del primer día.",
        "Requests a transfer to a personal account and promises reimbursement after the first day.",
      ),
      localize("Dinero a cuenta personal", "Money to a personal account"),
      localize("Proveedor simulado · artefacto AURA", "Simulated supplier · AURA artifact"),
      localize("Factura ficticia creada para reconocer solicitudes de pago anticipado.", "Fictional invoice created to recognize upfront payment requests."),
      "opened the simulated equipment invoice",
    ),
    simulatedSource(
      "02",
      3,
      "job-careers-page",
      "S3",
      localize("Portal corporativo", "Corporate portal"),
      localize("Vacantes oficiales de Nexa", "Official Nexa vacancies"),
      localize(
        "No aparece el cargo; la empresa usa @nexa.example y declara que nunca cobra a candidatos.",
        "The role is absent; the company uses @nexa.example and states it never charges candidates.",
      ),
      localize("Proceso oficial incompatible", "Incompatible official process"),
      localize("Nexa simulada · portal de carreras", "Simulated Nexa · careers portal"),
      localize("Portal ficticio utilizado para practicar comprobación por canal independiente.", "Fictional portal used to practise independent-channel verification."),
      "opened the simulated official careers page",
    ),
    simulatedSource(
      "02",
      4,
      "job-hr-confirmation",
      "S4",
      localize("Confirmación independiente", "Independent confirmation"),
      localize("Respuesta del equipo de talento", "Talent team response"),
      localize(
        "Recursos Humanos confirma que la dirección personal no pertenece a su equipo y solicita reportarla.",
        "Human Resources confirms that the personal address does not belong to its team and asks that it be reported.",
      ),
      localize("Identidad negada por la empresa", "Identity denied by the company"),
      localize("Nexa simulada · respuesta institucional", "Simulated Nexa · institutional response"),
      localize("Respuesta ficticia; demuestra una corroboración separada del contacto recibido.", "Fictional response; demonstrates corroboration separate from the received contact."),
      "opened the simulated HR confirmation",
    ),
  ],
  references: [
    {
      id: "oc-job-ftc",
      title: localize("Cómo reconocer las estafas laborales más recientes", "How to spot the latest job scams"),
      publisher: "Federal Trade Commission",
      author: "Federal Trade Commission",
      publishedAt: "2023-12-18",
      accessedAt,
      url: "https://consumer.ftc.gov/consumer-alerts/2023/12/how-spot-latest-job-scams",
      relevance: localize(
        "Describe correos personales, pagos por equipo y solicitudes tempranas de información como señales comprobables.",
        "Describes personal email, equipment payments and early information requests as checkable warning signs.",
      ),
    },
    {
      id: "oc-job-seps",
      title: localize("Cómo fui víctima de una falsa oferta de empleo", "How I became a victim of a false job offer"),
      publisher: "Superintendencia de Economía Popular y Solidaria",
      author: "SEPS Ecuador",
      publishedAt: "2025",
      accessedAt,
      url: "https://www.seps.gob.ec/wp-content/uploads/FALSA-OFERTA-DE-EMPLEO.pdf",
      relevance: localize(
        "Aporta un caso educativo ecuatoriano sobre ofertas laborales utilizadas para obtener datos personales.",
        "Provides an Ecuadorian educational case about job offers used to obtain personal information.",
      ),
    },
  ],
  finding: localize(
    "La vacante no existe y la empresa niega al reclutador y cualquier cobro",
    "The vacancy does not exist, and the company denies both the recruiter and any fee",
  ),
  gap: localize(
    "Logotipo y carta no conectan el mensaje con el empleador real",
    "A logo and letter do not connect the message to the real employer",
  ),
  conclusion: localize(
    "La oferta no pertenece a la empresa simulada: utiliza una cuenta personal, exige dinero y contradice el portal y el equipo oficial de talento. No se debe pagar ni entregar información financiera.",
    "The offer does not belong to the simulated company: it uses a personal account, demands money and contradicts the official careers portal and talent team. No payment or financial information should be provided.",
  ),
  habit: localize(
    "Confirmar vacante, dominio del reclutador y proceso de contratación mediante un contacto obtenido independientemente.",
    "Confirm the vacancy, recruiter domain and hiring process through independently obtained contact details.",
  ),
  aiScenario:
    "A simulated recruiter offers a high-paying remote job without an interview and asks the learner to pay a personal account for mandatory equipment.",
  aiKnownEvidence:
    "The simulated official careers page contains no vacancy, the company says it never charges candidates, and its HR team denies the recruiter. The evidence supports stopping payment and contacting the company through an independent channel.",
});

const exchangeCase = createOpportunityCase({
  id: "exchange-program-uncertain",
  number: "03",
  theme: "exchange",
  evidenceState: "insufficient",
  tag: localize("INTERCAMBIO · VACÍOS", "EXCHANGE · GAPS"),
  title: localize("La organización que aún no se puede comprobar", "The organization that cannot yet be verified"),
  summary: localize(
    "Una convocatoria posible, buenas fotografías y vacíos sobre responsables, aliados y datos.",
    "A plausible call, convincing photos and gaps about owners, partners and data.",
  ),
  learningObjective: localize(
    "Distinguir evidencia insuficiente de fraude confirmado y formular una acción segura mientras se obtiene corroboración.",
    "Distinguish insufficient evidence from confirmed fraud and choose a safe action while seeking corroboration.",
  ),
  nextGate: localize(
    "Validar que el caso no castigue iniciativas juveniles nuevas por tener una huella digital pequeña.",
    "Validate that the case does not penalize new youth initiatives merely for having a small digital footprint.",
  ),
  missionTitle: localize("Aprende a decir “todavía no lo sé”", "Learn to say “I do not know yet”"),
  missionBody: localize(
    "Un programa juvenil reciente ofrece un intercambio y solicita pasaporte para evaluar candidaturas. No hay prueba suficiente para llamarlo fraude, pero tampoco para confiar. Decide qué falta.",
    "A new youth program offers an exchange and requests a passport to assess applications. There is not enough evidence to call it fraud, but not enough to trust it either. Decide what is missing.",
  ),
  context: localize("intercambio juvenil · pasaporte", "youth exchange · passport"),
  claim: localize("“Intercambio regional con 80 cupos”", "“Regional exchange with 80 places”"),
  evidence: localize("Entidad + aliados + política de datos", "Entity + partners + data policy"),
  action: localize("Pedir confirmación antes de postular", "Request confirmation before applying"),
  post: {
    avatar: "P",
    account: localize("Puentes Jóvenes", "Youth Bridges"),
    meta: localize("@puentesjovenes · hace 2 días", "@youthbridges · 2 days ago"),
    body: localize(
      "Convocatoria abierta: 80 jóvenes viajarán al Encuentro Regional de Liderazgo. Postula con una fotografía de tu pasaporte. Organizaciones aliadas pronto serán anunciadas.",
      "Open call: 80 young people will travel to the Regional Leadership Gathering. Apply with a passport photo. Partner organizations will be announced soon.",
    ),
    mediaKicker: localize("LIDERAZGO REGIONAL", "REGIONAL LEADERSHIP"),
    mediaValue: "80",
    mediaCaption: localize("CUPOS JUVENILES", "YOUTH PLACES"),
    mediaMark: "PJ",
    views: localize("12 mil visualizaciones", "12K views"),
    reposts: localize("640 compartidos", "640 shares"),
  },
  signals: [
    choice(
      "exchange-new-organization",
      "Organización con huella digital reciente",
      "Organization with a recent digital footprint",
      "Ser nueva no demuestra fraude, pero exige encontrar responsables comprobables.",
      "Being new does not prove fraud, but it requires finding accountable owners.",
      "noticed a recent digital footprint without treating newness as proof of fraud",
    ),
    choice(
      "exchange-unconfirmed-partners",
      "Aliados todavía no identificados",
      "Partners not yet identified",
      "El mensaje usa respaldo futuro que aún no puede corroborarse.",
      "The message invokes future support that cannot yet be corroborated.",
      "noticed partners are promised but not currently identifiable",
    ),
    choice(
      "exchange-passport-request",
      "Pasaporte durante la primera postulación",
      "Passport requested in the first application",
      "No explica necesidad, conservación, acceso ni eliminación del documento.",
      "It does not explain the document’s necessity, retention, access or deletion.",
      "noticed a sensitive document request without a data-handling explanation",
    ),
    choice(
      "exchange-no-legal-terms",
      "Sin bases ni entidad responsable",
      "No terms or accountable entity",
      "Faltan criterios, costos, cancelación, contacto legal y responsabilidades.",
      "Criteria, costs, cancellation, legal contact and responsibilities are missing.",
      "noticed missing terms and accountable legal details",
    ),
  ],
  sources: [
    simulatedSource(
      "03",
      1,
      "exchange-social-gallery",
      "S1",
      localize("Galería social", "Social gallery"),
      localize("Fotografías del encuentro anterior", "Photos from the previous gathering"),
      localize(
        "Las imágenes muestran jóvenes en un evento, pero no identifican lugar, fecha ni relación con la organización.",
        "The images show young people at an event but identify no place, date or link to the organization.",
      ),
      localize("Imágenes sin procedencia", "Images without provenance"),
      localize("Puentes Jóvenes simulado · red social", "Simulated Youth Bridges · social network"),
      localize("Galería ficticia con imágenes descritas, no fotografías de personas reales.", "Fictional gallery with described images, not photos of real people."),
      "opened the simulated social gallery",
    ),
    simulatedSource(
      "03",
      2,
      "exchange-application-form",
      "S2",
      localize("Formulario", "Form"),
      localize("Postulación al encuentro", "Gathering application"),
      localize(
        "Solicita pasaporte y dirección, pero no contiene aviso de privacidad ni alternativa para la primera etapa.",
        "Requests passport and address but contains no privacy notice or first-stage alternative.",
      ),
      localize("Datos sin reglas", "Data without rules"),
      localize("Formulario simulado · artefacto AURA", "Simulated form · AURA artifact"),
      localize("Formulario ficticio; no acepta envíos ni recopila datos.", "Fictional form; it accepts no submissions and collects no data."),
      "opened the simulated exchange application form",
    ),
    simulatedSource(
      "03",
      3,
      "exchange-registry-search",
      "S3",
      localize("Búsqueda institucional", "Institutional search"),
      localize("Consulta de entidad responsable", "Accountable entity search"),
      localize(
        "No se encuentra una entidad con el mismo nombre; el resultado por sí solo no demuestra inexistencia.",
        "No entity with the same name is found; that result alone does not prove non-existence.",
      ),
      localize("Sin coincidencia concluyente", "No conclusive match"),
      localize("Consulta simulada de registro · artefacto AURA", "Simulated registry search · AURA artifact"),
      localize("Resultado ficticio diseñado para enseñar límites de una búsqueda negativa.", "Fictional result designed to teach the limits of a negative search."),
      "opened the simulated organization registry search",
    ),
    simulatedSource(
      "03",
      4,
      "exchange-partner-reply",
      "S4",
      localize("Corroboración", "Corroboration"),
      localize("Respuesta de una entidad mencionada", "Reply from a named organization"),
      localize(
        "La entidad conoce conversaciones preliminares, pero confirma que aún no existe convenio ni convocatoria conjunta.",
        "The entity knows of preliminary conversations but confirms there is no agreement or joint call yet.",
      ),
      localize("Relación todavía no formalizada", "Relationship not yet formalized"),
      localize("Entidad aliada simulada · respuesta institucional", "Simulated partner entity · institutional response"),
      localize("Respuesta ficticia que conserva incertidumbre en lugar de declarar fraude.", "Fictional response that preserves uncertainty rather than declaring fraud."),
      "opened the simulated partner reply",
    ),
  ],
  references: [
    {
      id: "oc-exchange-cisa",
      title: localize("Evite las estafas de phishing", "Avoid phishing scams"),
      publisher: "Cybersecurity and Infrastructure Security Agency",
      author: "CISA",
      publishedAt: "2024",
      accessedAt,
      url: "https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Phishing-Tip-Sheet.pdf",
      relevance: localize(
        "Recomienda reconocer presión, comprobar canales y evitar entregar información mediante mensajes dudosos.",
        "Recommends recognizing pressure, checking channels and avoiding information disclosure through suspicious messages.",
      ),
    },
    {
      id: "oc-exchange-unesco",
      title: localize("Periodismo, noticias falsas y desinformación", "Journalism, fake news and disinformation"),
      publisher: "UNESCO",
      author: "Cherilyn Ireton and Julie Posetti",
      publishedAt: "2018",
      accessedAt,
      url: "https://www.unesco.org/en/articles/journalism-fake-news-disinformation",
      relevance: localize(
        "Respalda la verificación basada en fuentes y la comunicación responsable de incertidumbre.",
        "Supports source-based verification and responsible communication of uncertainty.",
      ),
    },
  ],
  finding: localize(
    "Existe actividad preliminar, pero no una convocatoria verificable ni reglas suficientes para tratar datos",
    "Preliminary activity exists, but there is no verifiable call or sufficient rules for handling data",
  ),
  gap: localize(
    "La evidencia actual no permite confirmar legitimidad ni afirmar fraude",
    "Current evidence supports neither legitimacy nor a fraud accusation",
  ),
  conclusion: localize(
    "La organización podría estar preparando una iniciativa, pero la convocatoria no tiene responsables, aliados confirmados ni política de datos suficiente. La decisión responsable es pedir bases y confirmación antes de enviar el pasaporte, sin acusar fraude todavía.",
    "The organization may be preparing an initiative, but the call lacks accountable owners, confirmed partners and an adequate data policy. The responsible decision is to request terms and confirmation before sending a passport, without accusing it of fraud yet.",
  ),
  habit: localize(
    "Cuando la evidencia es insuficiente, pausar la entrega de datos, formular preguntas verificables y evitar acusaciones absolutas.",
    "When evidence is insufficient, pause data disclosure, ask checkable questions and avoid absolute accusations.",
  ),
  aiScenario:
    "A simulated new youth organization advertises 80 exchange places, requests a passport photo and says partners will be announced later.",
  aiKnownEvidence:
    "A registry search is inconclusive, a potential partner confirms only preliminary talks, and the form lacks data-handling terms. Evidence is insufficient: the safe action is to request terms and confirmation before sharing a passport, without declaring fraud.",
});

const ambassadorCase = createOpportunityCase({
  id: "ambassador-outdated-endorsement",
  number: "04",
  theme: "ambassador",
  evidenceState: "supported-with-limits",
  tag: localize("PROGRAMA · CONTEXTO", "PROGRAMME · CONTEXT"),
  title: localize("La oportunidad real con un video equivocado", "The real opportunity with the wrong video"),
  summary: localize(
    "Un programa legítimo, una edición anterior y un testimonio sintético no autorizado.",
    "A legitimate programme, a previous edition and an unauthorized synthetic testimonial.",
  ),
  learningObjective: localize(
    "Conservar una oportunidad legítima mientras se corrigen fecha, canal y respaldo audiovisual engañoso.",
    "Preserve a legitimate opportunity while correcting its date, channel and misleading audiovisual endorsement.",
  ),
  nextGate: localize(
    "Revisión externa sobre lenguaje de contenido sintético y consentimiento antes del piloto.",
    "External review of synthetic-media and consent language before the pilot.",
  ),
  missionTitle: localize("Corrige el mensaje sin destruir la oportunidad", "Correct the message without destroying the opportunity"),
  missionBody: localize(
    "El programa existe, pero el video viral mezcla la convocatoria anterior con un testimonio generado sin autorización. Determina qué puede compartirse y desde dónde.",
    "The programme exists, but the viral video mixes a previous call with an unauthorized generated testimonial. Decide what can be shared and from where.",
  ),
  context: localize("embajadores juveniles · video IA", "youth ambassadors · AI video"),
  claim: localize("“Inscripciones abiertas hasta el viernes”", "“Applications open until Friday”"),
  evidence: localize("Edición vigente + procedencia del video", "Current edition + video provenance"),
  action: localize("Compartir solo la convocatoria oficial", "Share only the official call"),
  post: {
    avatar: "F",
    account: localize("Futuro Joven Comunidad", "Youth Future Community"),
    meta: localize("@futurojoven_com · hace 4 h", "@youthfuture_com · 4 h ago"),
    body: localize(
      "La reconocida activista Maya Torres confirma que Futuro Joven abrió inscripciones hasta este viernes. El programa cubre mentoría y encuentros regionales. Aplica desde el enlace del video.",
      "Well-known activist Maya Torres confirms that Youth Future is accepting applications until this Friday. The programme covers mentoring and regional gatherings. Apply through the video link.",
    ),
    mediaKicker: localize("MENSAJE EXCLUSIVO", "EXCLUSIVE MESSAGE"),
    mediaValue: "2026",
    mediaCaption: localize("SÉ EMBAJADOR", "BECOME AN AMBASSADOR"),
    mediaMark: "AI",
    views: localize("210 mil visualizaciones", "210K views"),
    reposts: localize("11 mil compartidos", "11K shares"),
  },
  signals: [
    choice(
      "ambassador-real-program",
      "El programa tiene sitio institucional",
      "The programme has an institutional site",
      "La existencia del programa es comprobable, pero no valida automáticamente el video.",
      "The programme’s existence is checkable, but it does not automatically validate the video.",
      "noticed that a real programme does not automatically validate every promotional post",
    ),
    choice(
      "ambassador-old-deadline",
      "La fecha coincide con una edición anterior",
      "The date matches a previous edition",
      "Una publicación antigua puede reciclarse aunque la organización siga existiendo.",
      "An old post can be recycled even when the organization still exists.",
      "noticed the deadline may come from a previous edition",
    ),
    choice(
      "ambassador-ai-disclosure",
      "Video sin etiqueta de contenido sintético",
      "Video without synthetic-content disclosure",
      "La apariencia de una persona real no demuestra consentimiento ni autoría.",
      "A real person’s appearance does not prove consent or authorship.",
      "noticed an apparent synthetic endorsement without disclosure or consent",
    ),
    choice(
      "ambassador-link-in-video",
      "Enlace distinto al canal institucional",
      "Link differs from the institutional channel",
      "La oportunidad puede existir mientras el canal compartido sigue siendo incorrecto.",
      "The opportunity can exist while the shared channel remains incorrect.",
      "noticed the shared application link differs from the institutional channel",
    ),
  ],
  sources: [
    simulatedSource(
      "04",
      1,
      "ambassador-viral-video",
      "S1",
      localize("Video viral", "Viral video"),
      localize("Testimonio de Maya Torres", "Maya Torres endorsement"),
      localize(
        "El archivo no identifica autor, herramienta, consentimiento ni fuente del enlace.",
        "The file identifies no author, tool, consent or source for the link.",
      ),
      localize("Respaldo sin procedencia", "Endorsement without provenance"),
      localize("Publicación simulada · artefacto AURA", "Simulated post · AURA artifact"),
      localize("Descripción de video ficticio; AURA no replica voz ni imagen de una persona real.", "Description of a fictional video; AURA reproduces no real person’s voice or image."),
      "opened the simulated viral endorsement video dossier",
    ),
    simulatedSource(
      "04",
      2,
      "ambassador-old-call",
      "S2",
      localize("Archivo web", "Web archive"),
      localize("Convocatoria Futuro Joven 2025", "Youth Future 2025 call"),
      localize(
        "La frase y el viernes de cierre coinciden palabra por palabra con la edición anterior.",
        "The wording and Friday deadline match the previous edition word for word.",
      ),
      localize("Fecha reciclada", "Recycled date"),
      localize("Archivo institucional simulado · edición 2025", "Simulated institutional archive · 2025 edition"),
      localize("Convocatoria ficticia usada para practicar comparación temporal.", "Fictional call used to practise temporal comparison."),
      "opened the simulated archived 2025 call",
    ),
    simulatedSource(
      "04",
      3,
      "ambassador-current-call",
      "S3",
      localize("Fuente primaria", "Primary source"),
      localize("Convocatoria oficial Futuro Joven 2026", "Official Youth Future 2026 call"),
      localize(
        "El programa está abierto, pero cierra en tres semanas y utiliza un formulario institucional diferente.",
        "The programme is open, but closes in three weeks and uses a different institutional form.",
      ),
      localize("Oportunidad real, datos corregidos", "Real opportunity, corrected details"),
      localize("Futuro Joven simulado · sitio institucional", "Simulated Youth Future · institutional site"),
      localize("Convocatoria ficticia; demuestra cómo conservar información respaldada.", "Fictional call; demonstrates how to preserve supported information."),
      "opened the simulated current official programme call",
    ),
    simulatedSource(
      "04",
      4,
      "ambassador-consent-statement",
      "S4",
      localize("Declaración", "Statement"),
      localize("Respuesta de la activista y del programa", "Reply from the activist and programme"),
      localize(
        "Ambas partes niegan haber producido o autorizado el video y enlazan la convocatoria vigente.",
        "Both parties deny producing or authorizing the video and link to the current call.",
      ),
      localize("Respaldo sintético no autorizado", "Unauthorized synthetic endorsement"),
      localize("Declaración conjunta simulada · artefacto AURA", "Simulated joint statement · AURA artifact"),
      localize("Declaración ficticia; ninguna identidad real fue utilizada.", "Fictional statement; no real identity was used."),
      "opened the simulated consent and provenance statement",
    ),
  ],
  references: [
    {
      id: "oc-ambassador-unesco-ai",
      title: localize("Orientación para la IA generativa en educación e investigación", "Guidance for generative AI in education and research"),
      publisher: "UNESCO",
      author: "UNESCO",
      publishedAt: "2023",
      accessedAt,
      url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693",
      relevance: localize(
        "Sitúa transparencia, protección de datos y agencia humana como condiciones de uso responsable de IA.",
        "Frames transparency, data protection and human agency as conditions for responsible AI use.",
      ),
    },
    {
      id: "oc-ambassador-cisa",
      title: localize("Evite las estafas de phishing con canales independientes", "Avoid phishing scams through independent channels"),
      publisher: "Cybersecurity and Infrastructure Security Agency",
      author: "CISA",
      publishedAt: "2024",
      accessedAt,
      url: "https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Phishing-Tip-Sheet.pdf",
      relevance: localize(
        "Respalda salir del enlace recibido y comprobar la organización por un canal conocido.",
        "Supports leaving the received link and checking the organization through a known channel.",
      ),
    },
  ],
  finding: localize(
    "El programa 2026 existe, pero usa otra fecha y otro formulario; el video no fue autorizado",
    "The 2026 programme exists but uses another date and form; the video was not authorized",
  ),
  gap: localize(
    "Una oportunidad legítima no vuelve legítimo todo contenido que utiliza su nombre",
    "A legitimate opportunity does not legitimize every piece of content using its name",
  ),
  conclusion: localize(
    "Futuro Joven tiene una convocatoria vigente, pero el video mezcla información de 2025, dirige a un canal incorrecto y usa un respaldo sintético no autorizado. Puede compartirse la convocatoria oficial corregida, no el video.",
    "Youth Future has a current call, but the video mixes 2025 information, points to the wrong channel and uses an unauthorized synthetic endorsement. The corrected official call may be shared; the video should not be.",
  ),
  habit: localize(
    "Separar la existencia de una oportunidad de la autenticidad, vigencia y consentimiento de cada pieza promocional.",
    "Separate the existence of an opportunity from the authenticity, currency and consent behind each promotional item.",
  ),
  aiScenario:
    "A simulated viral AI-generated endorsement promotes a real youth ambassador programme using an outdated deadline and a non-official application link.",
  aiKnownEvidence:
    "The simulated programme has a current official call with a later deadline and different form. Both the programme and fictional activist deny authorizing the synthetic video. Preserve the real opportunity while rejecting the misleading video.",
});

export const opportunityCircleCases: AuraCase[] = [
  scholarshipCase,
  employmentCase,
  exchangeCase,
  ambassadorCase,
];
