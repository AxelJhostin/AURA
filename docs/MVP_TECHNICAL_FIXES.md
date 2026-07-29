# AURA 0.8.0 — Correcciones técnicas del MVP

> **Documento histórico cerrado.** FIX-01 a FIX-05 fueron implementados y
> verificados. No contiene trabajo pendiente ni debe usarse como backlog
> vigente. El estado técnico actual de AURA 0.9.0 está en
> [`ARCHITECTURE_AND_TESTING.md`](./ARCHITECTURE_AND_TESTING.md): 50
> comprobaciones automatizadas, CI verde y MVP técnico completo al 29 de julio
> de 2026. Las referencias de líneas que siguen son aproximaciones históricas.

**Audiencia:** agente o persona de implementación (OpenAI / Codex / Cursor).
**Origen:** revisión externa del código (28 jul 2026).
**Alcance:** solo defectos técnicos del MVP ya implementado.
**Fuera de alcance:** pilotos, PDF de postulación, video pitch, nuevas features, rediseño.

Antes de tocar código, leer:

- [`README.md`](../README.md)
- [`docs/DEVELOPMENT_ROADMAP.md`](./DEVELOPMENT_ROADMAP.md)
- [`CONTRIBUTING.md`](../CONTRIBUTING.md)

## Reglas de trabajo

1. Corregir únicamente los ítems listados abajo.
2. No añadir casos, chat, export PDF de la Tarjeta, gamificación ni cambios de alcance.
3. Mantener ES/EN, privacidad anónima y el contrato de eventos.
4. Tras cada fix (o al cerrar el lote): `npm run lint` y `npm test`.
5. Commits estilo Conventional Commits, un objetivo verificable por rama si se abre PR.

---

## FIX-01 — CSV del piloto escribe `undefined` en `report_timestamp`

**Severidad:** alta (rompe evidencia exportable del panel de facilitación).
**Estado:** cerrado.

### Problema

`pilotReportToCsv` incluye la métrica `report_timestamp` leyendo `report.timestamp`, pero el tipo `PilotReport` y la respuesta de `GET /api/aura/pilots` **no definen** ese campo. El CSV termina con el literal `"undefined"`.

### Archivos

- `app/components/PilotFacilitator.tsx` — tipo `PilotReport`, función `pilotReportToCsv` (aprox. líneas 13–69)
- `app/api/aura/pilots/route.ts` — payload JSON del reporte agregado

### Comportamiento esperado

Una de estas dos soluciones (preferir la más simple y consistente):

**Opción A (recomendada):** generar el timestamp en el cliente al exportar:

```ts
["report_timestamp", new Date().toISOString()],
```

y eliminar la referencia a `report.timestamp`.

**Opción B:** añadir `timestamp: string` a `PilotReport`, devolverlo desde la API (p. ej. `new Date().toISOString()` al armar el JSON) y tiparlo en el cliente.

### Criterio de aceptación

- [x] El CSV descargado no contiene la cadena `undefined`.
- [x] `report_timestamp` es un ISO-8601 válido o se elimina la fila si se decide no exportarla.
- [x] TypeScript no referencia propiedades inexistentes en `PilotReport`.
- [x] `npm run lint` y `npm test` pasan.

---

## FIX-02 — `/api/aura/coach` no valida Origin (asimetría de defensa)

**Severidad:** media (events y pilots sí lo hacen; coach queda expuesto a llamadas cross-origin).
**Estado:** cerrado.

### Problema

`POST /api/aura/events` y `GET /api/aura/pilots` rechazan `Origin` distinto al del request con `403` + `origin_not_allowed`.
`POST /api/aura/coach` solo aplica rate limit por IP y validación de payload; **no** comprueba Origin.

### Archivos

- `app/api/aura/coach/route.ts`
- Referencia de patrón: `app/api/aura/events/route.ts` (aprox. líneas 195–198) y `app/api/aura/pilots/route.ts` (aprox. líneas 80–82)

### Comportamiento esperado

Replicar el mismo patrón same-origin:

```ts
const requestOrigin = request.headers.get("origin");
if (requestOrigin && requestOrigin !== new URL(request.url).origin) {
  return noStoreJson({ error: "origin_not_allowed" }, { status: 403 });
}
```

Colocarlo **después** del rate limit y **antes** de parsear el body, igual que en events.

### Criterio de aceptación

- [x] Coach responde `403` + `origin_not_allowed` cuando `Origin` existe y no coincide.
- [x] Llamadas same-origin desde la UI siguen funcionando.
- [x] Rate limit, validación de caso/opciones y fallback sin `OPENAI_API_KEY` no se rompen.
- [x] Si hay test de smoke que lee `origin_not_allowed` en events, considerar aserción equivalente sobre `coach/route.ts` (opcional pero deseable).
- [x] `npm run lint` y `npm test` pasan.

---

## FIX-03 — Consentimiento `granted` no reenvía eventos locales previos

**Severidad:** media (sesiones de piloto pueden perder métricas si la persona acepta tarde).
**Estado:** cerrado.

### Problema

`trackEvent` en `AuraExperience.tsx` siempre guarda en `localStorage`, pero solo llama `sendAnalyticsEvent` si `analyticsConsent === "granted"` **en ese momento**.

`chooseAnalyticsConsent("granted")` actualiza estado y `localStorage`, pero **no** hace flush de los eventos ya acumulados en la sesión.

### Archivos

- `app/components/AuraExperience.tsx` — `trackEvent`, `chooseAnalyticsConsent` (aprox. líneas 496–508 y 653–658)
- `app/lib/analytics.ts` — `sendAnalyticsEvent`, `sessionEvents` / `readLocalAnalyticsEvents`

### Comportamiento esperado

Cuando el consentimiento pasa a `granted`:

1. Persistir el consentimiento como hoy (`writeAnalyticsConsent`).
2. Tomar los eventos de la sesión actual (o los locales pendientes).
3. Reenviar cada uno con `sendAnalyticsEvent` (fire-and-forget / `keepalive` como el path actual).
4. No duplicar lógica de creación: reenviar los objetos ya creados, no inventar eventos nuevos.
5. Idempotencia: la API de events ya deduplica por `eventId` (respuesta 200 `deduplicated`); el flush puede reintentar sin miedo a doble conteo si el servidor está bien.

No hace falta backfill si el usuario elige `local-only`.

### Criterio de aceptación

- [x] Tras cambiar de `pending` o `local-only` → `granted`, los eventos locales previos de la sesión se intentan enviar a `/api/aura/events`.
- [x] Eventos futuros siguen enviándose en caliente cuando consent es `granted`.
- [x] `local-only` no dispara POST remoto.
- [x] Sin Supabase configurado, el producto sigue usable (API puede responder `202 local_only`).
- [x] `npm run lint` y `npm test` pasan.

---

## FIX-04 — Hero preview: etapas A-U-R-A fijas en español

**Severidad:** baja (rompe paridad bilingüe visible en el primer viewport).
**Estado:** cerrado.

### Problema

En el preview del hero, las etiquetas están hardcodeadas:

```tsx
<span>ANALIZA</span>
<span>UBICA</span>
<span>RASTREA</span>
<span>ACTÚA</span>
```

aunque `locale` puede ser `"en"`.

### Archivo

- `app/components/AuraExperience.tsx` — bloque `preview-footer` (aprox. líneas 809–814)

### Comportamiento esperado

Usar las etiquetas canónicas según idioma:

| ES | EN |
|---|---|
| ANALIZA | ASSESS |
| UBICA | UNCOVER |
| RASTREA | RESEARCH |
| ACTÚA | ACT |

Preferible: claves en el objeto `text` ES/EN del componente, no ternarios sueltos.

### Criterio de aceptación

- [x] Con locale `en`, el footer del preview muestra ASSESS / UNCOVER / RESEARCH / ACT.
- [x] Con locale `es`, mantiene ANALIZA / UBICA / RASTREA / ACTÚA.
- [x] `npm run lint` y `npm test` pasan.

---

## FIX-05 — Comparación “MODELO COMÚN” / “AURA MODEL” sin localizar

**Severidad:** baja (sección `#diferencia` mezcla idiomas).
**Estado:** cerrado.

### Problema

Etiquetas fijas:

- `MODELO COMÚN` (español) aunque el UI esté en inglés
- `AURA MODEL` (inglés) aunque el UI esté en español

El resto del bloque comparison ya usa `locale === "es" ? …` o `t.*`.

### Archivo

- `app/components/AuraExperience.tsx` — sección comparison (aprox. líneas 1397–1414)

### Comportamiento esperado

| Locale | Columna común | Columna AURA |
|---|---|---|
| `es` | MODELO COMÚN | MODELO AURA |
| `en` | COMMON MODEL | AURA MODEL |

Añadir strings al diccionario `text` del componente y consumirlos con `t.*`.

### Criterio de aceptación

- [x] Ambas etiquetas siguen el locale activo.
- [x] No quedan literales hardcodeados en ese encabezado.
- [x] `npm run lint` y `npm test` pasan.

---

## Orden sugerido de implementación

1. **FIX-01** — export CSV usable
2. **FIX-02** — alinear seguridad del coach
3. **FIX-03** — no perder métricas al otorgar consentimiento
4. **FIX-04** y **FIX-05** — paridad i18n visible

## Verificación final del lote

```bash
npm run lint
npm test
```

Comprobar manualmente (local o preview):

1. Activar código de piloto → ver agregados → descargar CSV → abrir y confirmar `report_timestamp`.
2. Cambiar ES ↔ EN y revisar hero preview + sección comparación.
3. Empezar misión en `local-only` o sin consent, generar 1–2 eventos, luego **Permitir métricas anónimas** y verificar (con Supabase) que llegan / se deduplican.
4. Confirmar que el coach sigue respondiendo pregunta o fallback same-origin.

## No incluir en este lote

- Ensayos / pilotos con personas reales
- PDF o video de candidatura UNESCO
- Export imagen/PDF de la Tarjeta de evidencia (backlog P1.3)
- Rúbrica adversarial de IA
- Nuevos casos o cambios editoriales de contenido
- Licencia del repositorio

Cuando este archivo esté resuelto, marcar cada criterio de aceptación y archivar el lote como cerrado en el mensaje de PR/commit.
