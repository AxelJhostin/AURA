import assert from "node:assert/strict";
import test from "node:test";
import { validateAuraCases } from "../../app/data/case-validation";
import { auraCases, type AuraCase } from "../../app/data/cases";

function copyCases() {
  return structuredClone(auraCases) as AuraCase[];
}

test("accepts the published bilingual catalog", () => {
  assert.deepEqual(validateAuraCases(copyCases()), []);
});

test("publishes the four Opportunity Circle cases with balanced evidence states", () => {
  assert.deepEqual(
    auraCases.map((item) => item.id),
    [
      "scholarship-data-trap",
      "remote-job-equipment-fee",
      "exchange-program-uncertain",
      "ambassador-outdated-endorsement",
    ],
  );
  assert.deepEqual(
    new Set(auraCases.map((item) => item.editorial.evidenceState)),
    new Set(["misleading", "insufficient", "supported-with-limits"]),
  );
  assert.equal(
    auraCases.every(
      (item) =>
        item.references.length >= 2 &&
        item.sources.length >= 4 &&
        item.sourceLimit === 2,
    ),
    true,
  );
});

test("detects duplicate identifiers and missing bilingual copy", () => {
  const cases = copyCases();
  cases[1].id = cases[0].id;
  cases[1].catalog.title.en = "";

  const issues = validateAuraCases(cases);
  assert.equal(
    issues.some((issue) => issue.includes("duplicate case id")),
    true,
  );
  assert.equal(
    issues.some((issue) => issue.includes("catalog.title")),
    true,
  );
});

test("detects duplicate simulated provenance across cases", () => {
  const cases = copyCases();
  cases[1].sources[0].provenance.documentId =
    cases[0].sources[0].provenance.documentId;

  const issues = validateAuraCases(cases);
  assert.equal(
    issues.some((issue) => issue.includes("duplicate simulated document id")),
    true,
  );
});
