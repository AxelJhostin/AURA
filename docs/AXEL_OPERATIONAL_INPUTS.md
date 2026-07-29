# AURA — Insumos operativos de Axel (candidatura)

**Propósito:** respuestas del liderazgo técnico para completar viabilidad,
presupuesto y datos del equipo en el PDF / dossier.
**No es backlog de código.** Los defectos del MVP están en
[`MVP_TECHNICAL_FIXES.md`](./MVP_TECHNICAL_FIXES.md).
**Fecha de captura:** 28 de julio de 2026.
**Fuente:** Hernández Menéndez Axel.

Regla de lenguaje (igual que el dossier):

- lo marcado **DECIDIDO** puede afirmarse en la propuesta;
- lo marcado **PENDIENTE** no debe inventarse ni presentarse como hecho;
- no afirmar alianzas, impacto medido ni dominio propio sin evidencia.

---

## 1. Equipo y liderazgo

| Campo | Valor | Estado |
|---|---|---|
| Líder del equipo (postulación) | Hernández Menéndez Axel | **DECIDIDO** |
| Nombre a usar en formularios | Hernández Menéndez Axel | **DECIDIDO** |
| Equipo confirmado | Axel + Nicole | Sin cambio |
| Licencia del repositorio | Aún no se publica licencia | **DECIDIDO (por ahora)** |

**Nota para redacción:** hasta elegir licencia, no afirmar redistribución abierta
ni “open source con licencia X”. Sí se puede decir que el prototipo es público
en GitHub y que la licencia se definirá con el equipo.

---

## 2. Infraestructura actual

| Servicio | Situación | Estado |
|---|---|---|
| Hosting | Vercel, plan **free** | **DECIDIDO** |
| Base de datos / analítica | Supabase, plan **free** | **DECIDIDO** |
| Dominio | Solo `*.vercel.app` (sin dominio propio) | **DECIDIDO** |
| URL de demo hoy | `https://aura-opal-beta.vercel.app/` (existente en docs) | Operativa hoy |
| URL canónica final para PDF/video | Por definir | **PENDIENTE** |

**Nota para redacción:** usar la URL pública actual para capturas y demo. No
prometer dominio propio hasta decidirlo. Si más adelante hay dominio, actualizar
este archivo y el dossier.

---

## 3. IA (OpenAI)

| Campo | Valor | Estado |
|---|---|---|
| Modelo en uso | GPT-5.6 (referencia interna “luna” / Sol según config del proyecto) | **DECIDIDO** |
| Variable de entorno | `OPENAI_MODEL` (default documentado: `gpt-5.6`) | Sin cambio |
| ¿Se mantiene en el piloto? | Sí — funciona bien | **DECIDIDO** |
| Tope de gasto formal | No hay tope contractual rígido | **DECIDIDO** |
| Techo práctico orientativo | Máximo ~**USD 30** en la API para la fase de piloto | **DECIDIDO (estimado)** |
| Fallback sin IA | Preguntas de respaldo en el producto (ya implementado) | Verificado en código |

**Nota para redacción:** presentar el techo de ~USD 30 como presupuesto
orientativo del piloto, no como gasto ya consumido. La misión sigue operable si
la IA no está disponible.

---

## 4. Escala y costos proyectados

| Escenario | Usuarios / alcance | Costo estimado | Estado |
|---|---|---|---|
| Piloto | 30–50 personas | Bajo (free tiers + IA bajo techo ~USD 30) | **DECIDIDO (orden de magnitud)** |
| 100 usuarios/mes | — | Sin cifras exactas; asumir bajo mientras quepa en free + techo IA | **PENDIENTE (detalle)** |
| 1.000 usuarios/mes | — | Sin cifras exactas | **PENDIENTE** |
| 10.000 usuarios/mes | — | Sin cifras exactas | **PENDIENTE** |

**Lo que sí se puede afirmar ahora:**

- arquitectura pequeña (Vercel + Supabase free + OpenAI acotado);
- sin cuentas de usuario ni infra pesada;
- piloto dimensionado a 30–50 participantes;
- costos actuales bajos / contenidos.

**Lo que no se debe afirmar aún:** tablas de costo unitario precisas para 1k/10k
usuarios, ni presupuestos mensuales inventados.

---

## 5. Producto / modelo de acceso

| Campo | Valor | Estado |
|---|---|---|
| Contenido base / misiones | Gratuitas | **DECIDIDO** |
| Login / cuentas | No requeridos | **DECIDIDO** |
| Justificación | Herramienta educativa | **DECIDIDO** |

Alineado con el principio del producto: datos sensibles no son requisito para
aprender.

---

## 6. Aún pendiente (no inventar)

| Tema | Responsable sugerido | Notas |
|---|---|---|
| Plan técnico a 6 meses (bullets de Axel) | Axel | Resolver después; Nicole aporta adopción/alianzas |
| Mantenimiento editorial de casos (quién + frecuencia) | Axel + Nicole | Sin decisión aún |
| Dos riesgos técnicos principales + mitigación (texto final) | Axel | Pendiente de redacción; el dossier ya tiene borradores de riesgos |
| URL canónica definitiva | Axel | Después; mientras tanto usar demo Vercel |
| Desglose de costos 100 / 1.000 / 10.000 | Axel | Solo cuando haya estimaciones honestas |
| Licencia pública concreta (MIT, etc.) | Axel + Nicole | Cuando decidan publicarla |

---

## 7. Texto usable en la propuesta (borrador, solo hechos)

> AURA is led by Hernández Menéndez Axel (technical lead) with Nicole
> (strategy and impact). The public MVP runs on Vercel’s free tier and optional
> Supabase free-tier analytics, currently served at a `*.vercel.app` URL. The
> Socratic coach uses OpenAI (GPT-5.6 family), which will be retained for the
> pilot with a practical API budget ceiling of about USD 30; the full mission
> still works with deterministic fallback prompts if the model is unavailable.
> Base educational missions remain free and require no login. A repository
> license has not been published yet. Detailed six-month technical roadmap,
> editorial maintenance cadence, and precise cost tables for 1,000+ users will
> be completed with honest estimates rather than invented figures.

Versión ES (misma restricción de hechos):

> AURA está liderada por Hernández Menéndez Axel (liderazgo técnico) con Nicole
> (estrategia e impacto). El MVP público corre en el plan gratuito de Vercel y
> analítica opcional en Supabase free, hoy en una URL `*.vercel.app`. El coach
> socrático usa OpenAI (familia GPT-5.6), que se mantiene para el piloto con un
> techo práctico de gasto en API de unos USD 30; la misión completa sigue
> funcionando con preguntas de respaldo si el modelo no está disponible. Las
> misiones educativas base permanecen gratuitas y sin login. La licencia del
> repositorio aún no se publica. El plan técnico a seis meses, la cadencia
> editorial de casos y tablas de costo para 1.000+ usuarios se completarán con
> estimaciones honestas, no con cifras inventadas.

---

## 8. Instrucciones para otra IA / redacción

1. Usar este archivo para rellenar secciones de **Feasibility and Sustainability**
   y datos del líder en el PDF o dossier.
2. No completar los campos **PENDIENTE** con inventos.
3. No mezclar este documento con [`MVP_TECHNICAL_FIXES.md`](./MVP_TECHNICAL_FIXES.md).
4. Si Axel actualiza costos, URL o licencia, editar primero esta tabla y luego
   sincronizar guía/dossier.
5. Nicole sigue siendo dueña de alianzas, reclutamiento del piloto e impacto
   cualitativo.

---

**Próxima actualización esperada de Axel:** plan 6 meses, riesgos técnicos
cerrados, cadencia editorial, y (si aplica) URL canónica + licencia.
