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
  assert.match(html, /Axel/);
  assert.match(html, /Nicol/);
  assert.match(html, /data-ai-coach="analyze"/);
  assert.match(html, /role="progressbar"/);
  assert.match(html, /Contenido simulado para aprendizaje/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps the OpenAI key server-only and provides a fallback", async () => {
  const [route, component, gitignore] = await Promise.all([
    readFile(new URL("app/api/aura/coach/route.ts", root), "utf8"),
    readFile(
      new URL("app/components/AuraExperience.tsx", root),
      "utf8",
    ),
    readFile(new URL(".gitignore", root), "utf8"),
  ]);

  assert.match(route, /process\.env\.OPENAI_API_KEY/);
  assert.match(route, /client\.responses\.create/);
  assert.match(route, /store:\s*false/);
  assert.match(route, /RATE_LIMIT/);
  assert.doesNotMatch(route, /NEXT_PUBLIC_OPENAI/);
  assert.doesNotMatch(route, /OPENAI_API_KEY\s*=/);
  assert.match(component, /Pregunta de respaldo/);
  assert.match(component, /fallback question/i);
  assert.match(gitignore, /^\.env\*/m);
});

test("uses the Vercel-compatible Next.js build contract", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("package.json", root), "utf8"),
  );

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(packageJson.engines.node, "22.x");
  assert.equal(packageJson.dependencies.openai.startsWith("^6."), true);
  assert.equal("vinext" in packageJson.devDependencies, false);
  assert.equal("wrangler" in packageJson.devDependencies, false);
});
