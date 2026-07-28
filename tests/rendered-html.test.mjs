import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("builds the AURA page as standard Next.js output", async () => {
  const html = await readFile(
    new URL(".next/server/app/index.html", root),
    "utf8",
  );

  assert.match(html, /<title>AURA — De la reacción a la evidencia<\/title>/i);
  assert.match(html, /De la reacción/);
  assert.match(html, /AURA no decide qué creer/);
  assert.match(html, /Analiza/);
  assert.match(html, /Ubica/);
  assert.match(html, /Rastrea/);
  assert.match(html, /Actúa/);
  assert.match(html, /Hernández Axel/);
  assert.match(html, /Nicole/);
  assert.match(html, /data-ai-coach="analyze"/);
  assert.match(html, /role="progressbar"/);
  assert.match(html, /Contenido simulado para aprendizaje/);
  assert.match(html, /La promesa del 40%/);
  assert.match(html, /La inundación de “ahora”/);
  assert.match(html, /data-case-id="energy-memory"/);
  assert.match(html, /data-case-id="recycled-storm-video"/);
  assert.match(html, /Medición anónima del aprendizaje/);
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
  const [cases, component] = await Promise.all([
    readFile(new URL("app/data/cases.ts", root), "utf8"),
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
  ]);

  assert.match(cases, /id: "energy-memory"/);
  assert.match(cases, /id: "recycled-storm-video"/);
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

test("implements an unguided transfer challenge with anonymous coded analytics", async () => {
  const [component, transfer, analytics, route, migration] = await Promise.all([
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
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
  ]);

  assert.match(component, /<TransferChallenge/);
  assert.match(component, /analyticsConsent/);
  assert.match(component, /evidence_card_generated/);
  assert.match(transfer, /id: "scholarship-link"/);
  assert.match(transfer, /RETO DE TRANSFERENCIA · SIN GUÍA/);
  assert.match(transfer, /score: 1/);
  assert.doesNotMatch(transfer, /textarea|freeText/);
  assert.match(analytics, /PRODUCT_VERSION = "0.7.0"/);
  assert.match(analytics, /analyticsEventsToCsv/);
  assert.match(analytics, /cryptoApi\.getRandomValues/);
  assert.match(route, /process\.env\.SUPABASE_SECRET_KEY/);
  assert.match(route, /origin_not_allowed/);
  assert.match(route, /request\.text\(\)/);
  assert.match(route, /TextEncoder/);
  assert.match(route, /validOption/);
  assert.match(route, /apikey: supabaseSecretKey/);
  assert.doesNotMatch(route, /Authorization: `Bearer \$\{supabaseSecretKey\}`/);
  assert.doesNotMatch(route, /NEXT_PUBLIC_SUPABASE/);
  assert.match(migration, /enable row level security/i);
  assert.match(
    migration,
    /revoke all on table public\.aura_learning_events from anon, authenticated/i,
  );
  assert.match(
    migration,
    /grant insert on table public\.aura_learning_events to service_role/i,
  );
  assert.doesNotMatch(migration, /\b(email|full_name|user_agent|ip_address)\b/i);
});

test("uses the Vercel-compatible Next.js build contract", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("package.json", root), "utf8"),
  );

  assert.equal(packageJson.version, "0.7.0");
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(packageJson.engines.node, "22.x");
  assert.equal(packageJson.dependencies.openai.startsWith("^6."), true);
  assert.equal("vinext" in packageJson.devDependencies, false);
  assert.equal("wrangler" in packageJson.devDependencies, false);
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

  assert.match(guide, /Briefing de incorporación para Nicole/);
  assert.match(guide, /Versión funcional de referencia:\*\* AURA 0\.7\.0/);
  assert.match(guide, /Estado real del producto — AURA 0\.7\.0/);
  assert.match(guide, /Ruta crítica hasta el 16 de agosto/);
  assert.match(guide, /Persistencia central \| Activa y verificada/);
  assert.match(guide, /https:\/\/aura-opal-beta\.vercel\.app\//);
  assert.doesNotMatch(guide, /sk-proj-|sb_secret_|SUPABASE_SECRET_KEY=/);
});
