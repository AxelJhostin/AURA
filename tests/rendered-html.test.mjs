import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("builds the AURA page as standard Next.js output", async () => {
  const html = await readFile(
    new URL(".next/server/app/index.html", root),
    "utf8",
  );

  assert.match(html, /<title>AURA — Investiga antes de compartir<\/title>/i);
  assert.match(html, /Antes de compartirlo/);
  assert.match(html, /becas, consejos de salud, videos de emergencia/);
  assert.match(html, /Analiza/);
  assert.match(html, /Ubica/);
  assert.match(html, /Rastrea/);
  assert.match(html, /Actúa/);
  assert.match(html, /Hernández Axel/);
  assert.match(html, /Nicole/);
  assert.match(html, /José Luis Cañarte Plúa/);
  assert.match(html, /MVP técnico al 100%/);
  assert.match(html, /data-ai-coach="analyze"/);
  assert.match(html, /role="progressbar"/);
  assert.match(html, /Contenido simulado para aprendizaje/);
  assert.match(html, /La promesa del 40%/);
  assert.match(html, /La inundación de “ahora”/);
  assert.match(html, /La caminata “milagrosa”/);
  assert.match(html, /El modo foco “definitivo”/);
  assert.match(html, /data-case-id="energy-memory"/);
  assert.match(html, /data-case-id="recycled-storm-video"/);
  assert.match(html, /data-case-id="miracle-walk"/);
  assert.match(html, /data-case-id="grayscale-grades"/);
  assert.match(html, /Medición anónima del aprendizaje/);
  assert.match(html, /Saltar a la misión/);
  assert.match(
    html,
    /\/docs\/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026\.md/,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps the OpenAI key server-only and provides a fallback", async () => {
  const [route, component, cases, gitignore] = await Promise.all([
    readFile(new URL("app/api/aura/coach/route.ts", root), "utf8"),
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
    readFile(new URL("app/data/cases.ts", root), "utf8"),
    readFile(new URL(".gitignore", root), "utf8"),
  ]);

  assert.match(route, /process\.env\.OPENAI_API_KEY/);
  assert.match(route, /client\.responses\.create/);
  assert.match(route, /store:\s*false/);
  assert.match(route, /RATE_LIMIT/);
  assert.match(route, /getAuraCase/);
  assert.match(route, /activeCase\.ai\.scenario/);
  assert.doesNotMatch(route, /NEXT_PUBLIC_OPENAI/);
  assert.doesNotMatch(route, /OPENAI_API_KEY\s*=/);
  assert.match(component, /caseId,/);
  assert.match(component, /Pregunta de respaldo/);
  assert.match(component, /fallback question/i);
  assert.match(cases, /coachLabel/);
  assert.match(gitignore, /^\.env\*/m);
});

test("renders published bilingual cases through the reusable case engine", async () => {
  const [cases, balancedCases, component] = await Promise.all([
    readFile(new URL("app/data/cases.ts", root), "utf8"),
    readFile(new URL("app/data/balanced-cases.ts", root), "utf8"),
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
  ]);

  assert.match(cases, /id: "energy-memory"/);
  assert.match(cases, /id: "recycled-storm-video"/);
  assert.match(balancedCases, /id: "miracle-walk"/);
  assert.match(balancedCases, /id: "grayscale-grades"/);
  assert.match(balancedCases, /evidenceState: "supported-with-limits"/);
  assert.match(balancedCases, /evidenceState: "insufficient"/);
  assert.match(cases, /status: "published"/);
  assert.match(cases, /sourceLimit: 2/);
  assert.match(component, /auraCases\.map/);
  assert.match(component, /activeCase\.sources/);
  assert.match(component, /activeCase\.result\.conclusion/);
  assert.doesNotMatch(component, /const initialChoices|const sourceChoices/);
});

test("separates simulated case evidence from auditable real references", async () => {
  const [cases, component] = await Promise.all([
    readFile(new URL("app/data/cases.ts", root), "utf8"),
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
  ]);

  assert.match(cases, /status: "simulated"/);
  assert.match(cases, /documentId: "AURA-01-S3"/);
  assert.match(cases, /documentId: "AURA-02-S3"/);
  assert.match(cases, /Fictional study abstract/);
  assert.match(cases, /https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/33800853\//);
  assert.match(cases, /https:\/\/www\.unesco\.org\/en\/articles\/journalism-fake-news-disinformation/);
  assert.match(cases, /accessedAt: "2026-07-28"/);
  assert.match(component, /source\.provenance\.documentId/);
  assert.match(component, /source\.provenance\.disclosure/);
  assert.match(component, /className="reference-dossier"/);
  assert.match(component, /target="_blank"/);
  assert.match(component, /rel="noreferrer"/);
});

test("implements structured reasoning and a six-behavior transfer challenge", async () => {
  const [
    component,
    transferComponent,
    transfer,
    analytics,
    route,
    baseMigration,
    v2Migration,
  ] = await Promise.all([
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
    readFile(
      new URL("app/components/TransferChallenge.tsx", root),
      "utf8",
    ),
    readFile(new URL("app/data/transfer.ts", root), "utf8"),
    readFile(new URL("app/lib/analytics.ts", root), "utf8"),
    readFile(new URL("app/api/aura/events/route.ts", root), "utf8"),
    readFile(
      new URL(
        "supabase/migrations/20260728033416_aura_learning_events.sql",
        root,
      ),
      "utf8",
    ),
    readFile(
      new URL(
        "supabase/migrations/20260729113000_aura_reasoning_and_transfer_v2.sql",
        root,
      ),
      "utf8",
    ),
  ]);

  assert.match(component, /<TransferChallenge/);
  assert.match(component, /analyticsConsent/);
  assert.match(component, /evidence_card_generated/);
  assert.match(component, /reasoning_finding_selected/);
  assert.match(component, /reasoning_limit_selected/);
  assert.match(component, /selectedFinding/);
  assert.match(component, /selectedLimit/);
  assert.match(component, /className="case-review"/);
  assert.match(component, /detailMode="selected"/);
  assert.match(transfer, /id: "scholarship-link-v2"/);
  assert.match(transfer, /RETO DE TRANSFERENCIA · SIN PISTAS/);
  assert.match(transfer, /maxScore: 6/);
  assert.match(transfer, /id: "claim"/);
  assert.match(transfer, /id: "origin"/);
  assert.match(transfer, /id: "provenance"/);
  assert.match(transfer, /id: "corroboration"/);
  assert.match(transfer, /id: "uncertainty"/);
  assert.match(transfer, /id: "action"/);
  assert.match(transfer, /score: 1/);
  assert.doesNotMatch(transfer, /textarea|freeText/);
  assert.doesNotMatch(transferComponent, /option\.detail/);
  assert.match(transferComponent, /transfer_choice_selected/);
  assert.match(transferComponent, /\{score\}\/\{challenge\.maxScore\}/);
  assert.match(analytics, /PRODUCT_VERSION = "0.9.0"/);
  assert.match(analytics, /analyticsEventsToCsv/);
  assert.match(analytics, /cryptoApi\.getRandomValues/);
  assert.match(route, /process\.env\.SUPABASE_SECRET_KEY/);
  assert.match(route, /origin_not_allowed/);
  assert.match(route, /request\.text\(\)/);
  assert.match(route, /TextEncoder/);
  assert.match(route, /validOption/);
  assert.match(route, /transferOptionIds/);
  assert.match(route, /transferChallenge\.maxScore/);
  assert.match(route, /apikey: supabaseSecretKey/);
  assert.doesNotMatch(route, /Authorization: `Bearer \$\{supabaseSecretKey\}`/);
  assert.doesNotMatch(route, /NEXT_PUBLIC_SUPABASE/);
  assert.match(baseMigration, /enable row level security/i);
  assert.match(
    baseMigration,
    /revoke all on table public\.aura_learning_events from anon, authenticated/i,
  );
  assert.match(
    baseMigration,
    /grant insert on table public\.aura_learning_events to service_role/i,
  );
  assert.doesNotMatch(
    baseMigration,
    /\b(email|full_name|user_agent|ip_address)\b/i,
  );
  assert.match(v2Migration, /reasoning_finding_selected/);
  assert.match(v2Migration, /transfer_choice_selected/);
  assert.match(v2Migration, /transfer_score between 0 and 6/);
});

test("uses the Vercel-compatible Next.js build contract", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("package.json", root), "utf8"),
  );

  assert.equal(packageJson.version, "0.9.0");
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(packageJson.engines.node, "22.x");
  assert.equal(packageJson.dependencies.openai.startsWith("^6."), true);
  assert.equal("vinext" in packageJson.devDependencies, false);
  assert.equal("wrangler" in packageJson.devDependencies, false);
});

test("validates the balanced editorial catalog during every build", async () => {
  const [cases, balancedCases, validation] = await Promise.all([
    readFile(new URL("app/data/cases.ts", root), "utf8"),
    readFile(new URL("app/data/balanced-cases.ts", root), "utf8"),
    readFile(new URL("app/data/case-validation.ts", root), "utf8"),
  ]);

  assert.match(cases, /validateAuraCases\(auraCases\)/);
  assert.match(cases, /case catalog validation failed/i);
  assert.match(validation, /REQUIRED_EVIDENCE_STATES/);
  assert.match(validation, /at least three published cases are required/);
  assert.match(validation, /duplicate simulated document id/);
  assert.match(validation, /must contain non-empty ES and EN text/);
  assert.match(balancedCases, /https:\/\/www\.who\.int\/news-room\/fact-sheets\/detail\/physical-activity/);
  assert.match(balancedCases, /https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/38355154\//);
  assert.match(balancedCases, /https:\/\/www\.nih\.gov\/about-nih\/science-health-public-trust\/tools\/understanding-clinical-studies/);
  assert.match(balancedCases, /https:\/\/www\.nccih\.nih\.gov\/health\/know-science/);
});

test("measures anonymous pre/post confidence and exports aggregates only", async () => {
  const [pulse, analytics, eventRoute, pilotRoute, facilitator, migration] =
    await Promise.all([
      readFile(new URL("app/components/PilotConfidence.tsx", root), "utf8"),
      readFile(new URL("app/lib/analytics.ts", root), "utf8"),
      readFile(new URL("app/api/aura/events/route.ts", root), "utf8"),
      readFile(new URL("app/api/aura/pilots/route.ts", root), "utf8"),
      readFile(
        new URL("app/components/PilotFacilitator.tsx", root),
        "utf8",
      ),
      readFile(
        new URL(
          "supabase/migrations/20260728164500_add_anonymous_pilot_pulse.sql",
          root,
        ),
        "utf8",
      ),
    ]);

  assert.match(pulse, /pilot_baseline_recorded/);
  assert.match(pulse, /pilot_exit_recorded/);
  assert.match(pulse, /confidence-\$\{score\}/);
  assert.doesNotMatch(pulse, /<textarea|type="email"|\sname="/i);
  assert.match(analytics, /PILOT_EVALUATION_CASE_ID = "pilot-evaluation"/);
  assert.match(eventRoute, /\/\^confidence-\[1-5\]\$\//);
  assert.match(pilotRoute, /averageConfidenceDelta/);
  assert.match(pilotRoute, /matchedConfidenceResponses/);
  assert.match(facilitator, /pilotReportToCsv/);
  assert.match(facilitator, /Download aggregate CSV/);
  assert.doesNotMatch(facilitator, /anonymous_session_id/);
  assert.match(migration, /pilot_baseline_recorded/);
  assert.match(migration, /stage = 'survey'/);
  assert.match(migration, /revoke all.*anon, authenticated/i);
});

test("includes keyboard, reduced-motion and 320px accessibility safeguards", async () => {
  const [component, css] = await Promise.all([
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(component, /className="skip-link"/);
  assert.match(component, /href="#mision"/);
  assert.match(css, /@media \(max-width: 360px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /input:focus-visible/);
  assert.match(css, /min-width: 44px/);
});

test("groups anonymous sessions into private aggregate pilot reports", async () => {
  const [component, facilitator, analytics, route, migration] =
    await Promise.all([
      readFile(
        new URL("app/components/AuraExperience.tsx", root),
        "utf8",
      ),
      readFile(
        new URL("app/components/PilotFacilitator.tsx", root),
        "utf8",
      ),
      readFile(new URL("app/lib/analytics.ts", root), "utf8"),
      readFile(new URL("app/api/aura/pilots/route.ts", root), "utf8"),
      readFile(
        new URL(
          "supabase/migrations/20260728141033_add_anonymous_pilot_code.sql",
          root,
        ),
        "utf8",
      ),
    ]);

  assert.match(component, /<PilotFacilitator/);
  assert.match(component, /pilotCode: pilotCode \|\| undefined/);
  assert.match(facilitator, /createPilotCode/);
  assert.match(facilitator, /Copiar enlace/);
  assert.match(facilitator, /resultados agregados/);
  assert.match(analytics, /PILOT_CODE_PATTERN/);
  assert.match(analytics, /cryptoApi\.getRandomValues\(bytes\)/);
  assert.match(route, /MAX_ROWS = 5_000/);
  assert.match(route, /process\.env\.SUPABASE_SECRET_KEY/);
  assert.match(route, /completionRate/);
  assert.match(route, /averageTransferScore/);
  assert.doesNotMatch(route, /NEXT_PUBLIC_SUPABASE/);
  assert.match(migration, /add column if not exists pilot_code text/i);
  assert.match(migration, /grant select, insert.*service_role/i);
  assert.match(migration, /where pilot_code is not null/i);
  assert.doesNotMatch(
    migration,
    /\b(email|full_name|user_agent|ip_address)\b/i,
  );
});

test("keeps a current, self-contained master handoff for the team", async () => {
  const guide = await readFile(
    new URL(
      "public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md",
      root,
    ),
    "utf8",
  );

  assert.match(guide, /Briefing de incorporación para Axel, Nicole y José/);
  assert.match(guide, /Versión funcional de referencia:\*\* AURA 0\.9\.0/);
  assert.match(
    guide,
    /Estado real del producto — AURA 0\.9\.0, MVP técnico al 100 %/,
  );
  assert.match(guide, /Ruta crítica hasta el 16 de agosto/);
  assert.match(guide, /Persistencia central \| Activa y verificada/);
  assert.match(guide, /17 pruebas automatizadas aprobadas/);
  assert.match(guide, /José Luis Cañarte Plúa/);
  assert.match(guide, /https:\/\/aura-opal-beta\.vercel\.app\//);
  assert.doesNotMatch(
    guide,
    /sk-proj-|sb_secret_|SUPABASE_SECRET_KEY=|axelhernan69@gmail\.com|pincaynicole9@gmail\.com|jocanart@espol\.edu\.ec/,
  );
});

test("maps the official UNESCO criteria to evidence and submission gates", async () => {
  const dossier = await readFile(
    new URL(
      "public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md",
      root,
    ),
    "utf8",
  );

  assert.match(
    dossier,
    /Documento operativo para Hernández Axel, Nicole y José Luis/,
  );
  assert.match(dossier, /16 de agosto de 2026, 23:59, hora de París/);
  assert.match(dossier, /Cada proyecto será revisado por tres expertos/i);
  assert.match(dossier, /Campos confirmados del formulario Tally/);
  assert.match(dossier, /17 pruebas automatizadas/);
  assert.match(dossier, /Consistency with the Theme and MIL Principles/);
  assert.match(dossier, /Clarity of Presentation/);
  assert.match(dossier, /Innovation and Creativity/);
  assert.match(dossier, /Feasibility and Sustainability/);
  assert.match(dossier, /Impact and Inclusion/);
  assert.match(dossier, /No existe evidencia pública de/);
  assert.match(dossier, /PDF con texto nativo y seleccionable/);
  assert.match(dossier, /15 de agosto de 2026, 18:00, hora de Ecuador/);
  assert.doesNotMatch(
    dossier,
    /sk-proj-|sb_secret_|SUPABASE_SECRET_KEY=|axelhernan69@gmail\.com|pincaynicole9@gmail\.com|jocanart@espol\.edu\.ec/,
  );
});

test("closes the five scoped MVP technical fixes", async () => {
  const [facilitator, coachRoute, component] = await Promise.all([
    readFile(
      new URL("app/components/PilotFacilitator.tsx", root),
      "utf8",
    ),
    readFile(new URL("app/api/aura/coach/route.ts", root), "utf8"),
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
  ]);

  assert.match(
    facilitator,
    /\["report_timestamp", new Date\(\)\.toISOString\(\)\]/,
  );
  assert.doesNotMatch(facilitator, /report\.timestamp/);

  assert.match(coachRoute, /requestOrigin/);
  assert.match(coachRoute, /origin_not_allowed/);
  assert.match(coachRoute, /requestOrigin !== new URL\(request\.url\)\.origin/);

  assert.match(component, /value === "granted"/);
  assert.match(component, /analyticsConsent !== "granted"/);
  assert.match(component, /sessionEvents\(sessionId\)\.forEach/);
  assert.match(component, /void sendAnalyticsEvent\(event\)/);

  assert.match(
    component,
    /previewStages: \["ANALIZA", "UBICA", "RASTREA", "ACTÚA"\]/,
  );
  assert.match(
    component,
    /previewStages: \["ASSESS", "UNCOVER", "RESEARCH", "ACT"\]/,
  );
  assert.match(component, /commonModelLabel: "MODELO COMÚN"/);
  assert.match(component, /commonModelLabel: "COMMON MODEL"/);
  assert.match(component, /auraModelLabel: "MODELO AURA"/);
  assert.match(component, /auraModelLabel: "AURA MODEL"/);
  assert.doesNotMatch(component, /<p>MODELO COMÚN<\/p>/);
  assert.doesNotMatch(component, /<p>AURA MODEL<\/p>/);
});

test("keeps aggregate pilot metrics internally consistent", async () => {
  const route = await readFile(
    new URL("app/api/aura/pilots/route.ts", root),
    "utf8",
  );

  assert.match(route, /const recordedMissionStarts = rows\.filter/);
  assert.match(
    route,
    /const missionStarts = Math\.max\(recordedMissionStarts, evidenceCards\)/,
  );
});
