import type { AuraCase, LocalizedText } from "./cases";

const REQUIRED_EVIDENCE_STATES = new Set<AuraCase["editorial"]["evidenceState"]>([
  "supported-with-limits",
  "misleading",
  "insufficient",
]);

function hasLocalizedParity(value: LocalizedText) {
  return (
    typeof value?.es === "string" &&
    value.es.trim().length > 0 &&
    typeof value?.en === "string" &&
    value.en.trim().length > 0
  );
}

function duplicateValues(values: string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }

  return [...duplicates];
}

export function validateAuraCases(cases: AuraCase[]) {
  const issues: string[] = [];
  const caseIds = cases.map((item) => item.id);
  const caseNumbers = cases.map((item) => item.number);
  const documentIds: string[] = [];
  const referenceIds: string[] = [];

  if (cases.length < 3) {
    issues.push("catalog: at least three published cases are required");
  }

  for (const duplicate of duplicateValues(caseIds)) {
    issues.push(`catalog: duplicate case id "${duplicate}"`);
  }
  for (const duplicate of duplicateValues(caseNumbers)) {
    issues.push(`catalog: duplicate case number "${duplicate}"`);
  }

  for (const item of cases) {
    const prefix = `case ${item.id}`;
    const localizedFields: Array<[string, LocalizedText]> = [
      ["catalog.tag", item.catalog.tag],
      ["catalog.title", item.catalog.title],
      ["catalog.summary", item.catalog.summary],
      ["mission.eyebrow", item.mission.eyebrow],
      ["mission.title", item.mission.title],
      ["mission.body", item.mission.body],
      ["artifact.context", item.artifact.context],
      ["artifact.claim", item.artifact.claim],
      ["artifact.evidence", item.artifact.evidence],
      ["artifact.action", item.artifact.action],
      ["post.account", item.post.account],
      ["post.meta", item.post.meta],
      ["post.body", item.post.body],
      ["post.note", item.post.note],
      ["result.conclusion", item.result.conclusion],
      ["result.habit", item.result.habit],
      ["editorial.reviewerRole", item.editorial.reviewerRole],
      ["editorial.learningObjective", item.editorial.learningObjective],
      ["editorial.nextGate", item.editorial.nextGate],
    ];

    for (const [path, value] of localizedFields) {
      if (!hasLocalizedParity(value)) {
        issues.push(`${prefix}: ${path} must contain non-empty ES and EN text`);
      }
    }

    if (!/^\d{2}$/.test(item.number)) {
      issues.push(`${prefix}: number must use two digits`);
    }
    if (item.status !== "published") {
      issues.push(`${prefix}: only published cases may enter the catalog`);
    }
    if (
      item.editorial.reviewStatus !== "internal-review-complete" ||
      Number.isNaN(Date.parse(item.editorial.reviewedAt))
    ) {
      issues.push(`${prefix}: editorial review metadata is incomplete`);
    }
    if (item.initialChoices.length < 3) {
      issues.push(`${prefix}: at least three initial choices are required`);
    }
    if (item.signals.length < 4) {
      issues.push(`${prefix}: at least four investigation signals are required`);
    }
    if (
      item.sourceLimit < 1 ||
      item.sources.length < item.sourceLimit ||
      item.sources.length < 4
    ) {
      issues.push(`${prefix}: source limit and source catalog are inconsistent`);
    }
    if (item.actions.length < 3) {
      issues.push(`${prefix}: at least three proportional actions are required`);
    }
    if (item.references.length < 2) {
      issues.push(`${prefix}: at least two real references are required`);
    }

    const collections = [
      ["initialChoices", item.initialChoices],
      ["signals", item.signals],
      ["sources", item.sources],
      ["actions", item.actions],
    ] as const;

    for (const [name, choices] of collections) {
      for (const duplicate of duplicateValues(choices.map((choice) => choice.id))) {
        issues.push(`${prefix}: duplicate ${name} id "${duplicate}"`);
      }
      choices.forEach((choice, index) => {
        if (
          !hasLocalizedParity(choice.title) ||
          !hasLocalizedParity(choice.detail) ||
          !choice.coachLabel.trim()
        ) {
          issues.push(`${prefix}: ${name}[${index}] lacks bilingual or coach copy`);
        }
      });
    }

    item.sources.forEach((source, index) => {
      documentIds.push(source.provenance.documentId);
      if (
        source.provenance.status !== "simulated" ||
        !source.provenance.documentId.startsWith(`AURA-${item.number}-S`) ||
        !hasLocalizedParity(source.provenance.publisher) ||
        !hasLocalizedParity(source.provenance.disclosure) ||
        Number.isNaN(Date.parse(source.provenance.publishedAt))
      ) {
        issues.push(`${prefix}: sources[${index}] has invalid provenance`);
      }
    });

    item.references.forEach((reference, index) => {
      referenceIds.push(reference.id);
      let isHttps = false;
      try {
        isHttps = new URL(reference.url).protocol === "https:";
      } catch {
        isHttps = false;
      }
      if (
        !isHttps ||
        !reference.publisher.trim() ||
        !reference.author.trim() ||
        !reference.publishedAt.trim() ||
        Number.isNaN(Date.parse(reference.accessedAt)) ||
        !hasLocalizedParity(reference.title) ||
        !hasLocalizedParity(reference.relevance)
      ) {
        issues.push(`${prefix}: references[${index}] is not fully auditable`);
      }
    });
  }

  for (const duplicate of duplicateValues(documentIds)) {
    issues.push(`catalog: duplicate simulated document id "${duplicate}"`);
  }
  for (const duplicate of duplicateValues(referenceIds)) {
    issues.push(`catalog: duplicate real reference id "${duplicate}"`);
  }

  const representedStates = new Set(
    cases.map((item) => item.editorial.evidenceState),
  );
  for (const state of REQUIRED_EVIDENCE_STATES) {
    if (!representedStates.has(state)) {
      issues.push(`catalog: missing pedagogical evidence state "${state}"`);
    }
  }

  return issues;
}
