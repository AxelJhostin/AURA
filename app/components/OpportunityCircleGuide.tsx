import type { Locale } from "../data/cases";

type Props = {
  locale: Locale;
};

const copy = {
  es: {
    eyebrow: "GUÍA DE FACILITACIÓN · 25 MINUTOS",
    title: "Convierte la misión en un Opportunity Circle",
    body: "Una persona joven puede facilitar la sesión sin cuentas, diapositivas ni datos personales. El enlace de piloto conecta práctica, conversación y transferencia.",
    facts: [
      ["1", "facilitador joven"],
      ["6–20", "participantes"],
      ["1", "dispositivo por persona o pareja"],
      ["0", "documentos reales"],
    ],
    steps: [
      ["03 min", "Abrir", "Explicar privacidad, activar el código y responder el pulso inicial."],
      ["08 min", "Practicar", "Completar una misión guiada sin buscar la respuesta de AURA."],
      ["06 min", "Conversar", "Comparar qué señal provocó la pausa y qué fuente cambió la decisión."],
      ["06 min", "Transferir", "Resolver individualmente el reto nuevo sin pistas."],
      ["02 min", "Cerrar", "Responder el pulso final y nombrar una acción que se usará fuera del Circle."],
    ],
    safeguardTitle: "Reglas de seguridad",
    safeguards: [
      "No abrir enlaces reales enviados por participantes.",
      "No solicitar nombres, correos, cédulas, capturas ni relatos personales.",
      "No convertir una señal aislada en acusación de fraude.",
      "Compartir resultados agregados, nunca decisiones individuales.",
    ],
    cta: "Abrir guía completa de facilitación",
  },
  en: {
    eyebrow: "FACILITATION GUIDE · 25 MINUTES",
    title: "Turn the mission into an Opportunity Circle",
    body: "A young facilitator can run the session without accounts, slides or personal data. The pilot link connects practice, conversation and transfer.",
    facts: [
      ["1", "youth facilitator"],
      ["6–20", "participants"],
      ["1", "device per person or pair"],
      ["0", "real documents"],
    ],
    steps: [
      ["03 min", "Open", "Explain privacy, activate the code and answer the baseline pulse."],
      ["08 min", "Practise", "Complete a guided mission without guessing AURA’s preferred answer."],
      ["06 min", "Discuss", "Compare which clue created a pause and which source changed the decision."],
      ["06 min", "Transfer", "Individually solve the unfamiliar no-clue challenge."],
      ["02 min", "Close", "Answer the exit pulse and name one action to use beyond the Circle."],
    ],
    safeguardTitle: "Safety rules",
    safeguards: [
      "Do not open real links submitted by participants.",
      "Do not request names, emails, IDs, screenshots or personal stories.",
      "Do not turn a single warning sign into a fraud accusation.",
      "Share aggregate outcomes, never individual decisions.",
    ],
    cta: "Open the full facilitation guide",
  },
} as const;

export function OpportunityCircleGuide({ locale }: Props) {
  const text = copy[locale];

  return (
    <section className="circle-guide" aria-labelledby="circle-guide-title">
      <div className="circle-guide-heading">
        <div>
          <p className="eyebrow">{text.eyebrow}</p>
          <h3 id="circle-guide-title">{text.title}</h3>
        </div>
        <p>{text.body}</p>
      </div>

      <div className="circle-facts">
        {text.facts.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="circle-guide-grid">
        <ol className="circle-timeline">
          {text.steps.map(([time, title, detail]) => (
            <li key={`${time}-${title}`}>
              <span>{time}</span>
              <div>
                <strong>{title}</strong>
                <p>{detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="circle-safeguards">
          <span aria-hidden="true">◎</span>
          <h4>{text.safeguardTitle}</h4>
          <ul>
            {text.safeguards.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <a href="/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md">
            {text.cta} <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
