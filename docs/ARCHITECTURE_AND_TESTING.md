# Arquitectura y estrategia de pruebas de AURA

**Versión de referencia:** AURA Opportunity Circles 1.0.0
**Objetivo:** permitir cambios grandes sin mezclar pedagogía, interfaz,
persistencia y medición; detectar regresiones antes de publicar.
**Estado verificado:** 29 de julio de 2026, commit
[`b6b7943`](https://github.com/AxelJhostin/AURA/commit/b6b7943fc6b0dfa778ab269d56d3ba6a77d02ca5).

## Respuesta corta y honesta

AURA tiene una base escalable, pero no era completamente modular antes de esta
revisión.

Ya estaban bien separados:

- el catálogo bilingüe de casos;
- la validación editorial;
- el reto de transferencia;
- las rutas de servidor;
- la persistencia anónima mediante migraciones;
- la experiencia principal respecto a OpenAI y Supabase.

Los riesgos principales eran:

1. validación de eventos mezclada con transporte HTTP y escritura en Supabase;
2. agregación de pilotos mezclada con la ruta HTTP;
3. cálculo de transferencia dentro de un componente React;
4. pruebas que comprobaban texto en archivos, pero no ejecutaban suficientes
   reglas del dominio;
5. ausencia de una base local reproducible y pruebas de restricciones SQL;
6. `AuraExperience.tsx` continúa siendo un componente grande y es la deuda
   técnica principal para una expansión futura.

Esta revisión extrae las tres reglas de mayor riesgo a módulos puros y añade
pruebas en cuatro capas. No se realizó una división visual masiva del componente
principal porque hacerlo al mismo tiempo que se introducía la suite habría
aumentado innecesariamente el riesgo del MVP ya desplegado.

Resultado actual: la base es suficientemente modular para el MVP, los pilotos
y cambios acotados. No es todavía la arquitectura final para cuentas, roles,
autoría dinámica de casos o varios recorridos simultáneos.

### Límite estratégico de la arquitectura

La arquitectura habilita crecimiento, pero no lo autoriza automáticamente. La
prioridad actual es aprender de Opportunity Circles reales, no preparar de
antemano todas las expansiones posibles.

Después del piloto podrían justificarse paquetes regionales de casos, formación
de facilitadores, modo de bajo consumo, PWA/offline, autoría revisada o paneles
institucionales. Antes de construirlos debe existir una necesidad observada, una
persona responsable, un criterio de éxito y pruebas proporcionales al riesgo.
La modularidad sirve para reducir el costo del cambio cuando exista evidencia,
no para ampliar alcance sin ella.

## Límites de arquitectura

```text
app/data/
    contenido tipado y contratos editoriales
        ↓
app/domain/
    reglas puras de negocio y medición
        ↓
app/api/                 app/components/
    adaptadores HTTP         experiencia React
        ↓                         ↓
Supabase / OpenAI        navegador y almacenamiento local
```

La dirección de dependencias debe mantenerse de arriba hacia abajo:

- `domain` puede leer contratos de `data`;
- las rutas y componentes pueden usar `domain`;
- `domain` no debe importar rutas, React, `window`, OpenAI ni clientes de red;
- Supabase y OpenAI deben permanecer detrás de rutas del servidor;
- una regla que pueda probarse sin HTTP o React debe vivir en `domain`.

### Módulos de dominio actuales

| Módulo | Responsabilidad |
|---|---|
| `app/domain/analytics-event.ts` | Validar eventos codificados y convertirlos a filas de persistencia |
| `app/domain/pilot-report.ts` | Construir agregados anónimos sin devolver sesiones individuales |
| `app/domain/transfer-scoring.ts` | Comprobar respuestas, puntuar seis conductas y elegir retroalimentación |
| `app/data/case-validation.ts` | Impedir casos incompletos, duplicados o sin paridad bilingüe |
| `app/data/opportunity-cases.ts` | Definir el catálogo activo de Opportunity Circles sin acoplarlo a React |
| `app/components/OpportunityCircleGuide.tsx` | Presentar el protocolo comunitario sin mezclarlo con el motor de misión |

## Pirámide de pruebas

### 1. Unitarias

```bash
npm run test:unit
```

Cubren puntuación de transferencia, opciones y etapas válidas, conversión
anónima a filas, agregados de pilotos y validación editorial bilingüe. No usan
red, navegador ni base de datos. Estado actual: **14 pruebas**.

### 2. Integración

```bash
npm run test:integration
```

Ejecutan las rutas de Next.js con `Request` y `Response` reales, pero sustituyen
el límite externo de Supabase. Cubren modo local, inserción REST, deduplicación,
seguridad de origen, agregados privados y errores del proveedor. Nunca usan
claves ni datos de producción. Estado actual: **7 pruebas**.

### 3. Contrato y build

```bash
npm run test:contract
```

Construye Next.js como producción y comprueba HTML, metadatos, catálogo,
privacidad, migraciones, documentación y entrega de analítica.
Estado actual: **19 comprobaciones**.

### 4. Base de datos

Requiere Docker:

```bash
npm run db:start
npm run test:db
npm run db:stop
```

pgTAP reconstruye el esquema desde las migraciones y verifica tabla, índice,
RLS, privilegios y rechazo de puntuaciones, códigos y pulsos inválidos. Cada
archivo se ejecuta en una transacción y se revierte. Estado actual:
**12 aserciones pgTAP**.

### Cobertura y verificación completa

```bash
npm run test:coverage
npm run check
```

`npm run check` ejecuta lint, TypeScript, unitarias, integración y contrato de
producción. La base se mantiene separada porque requiere Docker.

Último resultado local verificado:

| Capa instrumentada | Resultado | Umbral |
|---|---:|---:|
| Líneas | 95,54 % | 90 % |
| Ramas | 77,36 % | 70 % |
| Funciones | 79,52 % | 75 % |

En total existen **52 comprobaciones automatizadas distintas**: 14 unitarias,
7 de integración, 19 de contrato/build y 12 de base de datos. La cobertura
instrumentada corresponde a unitarias e integración; no debe presentarse como
cobertura integral del navegador o del impacto educativo.

## Integración continua

`.github/workflows/quality.yml` ejecuta en cada pull request y cambio de `main`:

1. instalación reproducible con `npm ci`;
2. lint, TypeScript, build y pruebas de aplicación;
3. Supabase local y pgTAP en un trabajo aislado.

No necesita secretos del proyecto.

La ejecución de referencia
[`30505243112`](https://github.com/AxelJhostin/AURA/actions/runs/30505243112)
terminó correctamente en sus dos trabajos: **Application checks** y
**Supabase pgTAP**. La aplicación pública también fue comprobada después de ese
commit en <https://aura-opal-beta.vercel.app/>.

## Cómo hacer cambios grandes

1. Identificar qué regla cambia.
2. Escribir o actualizar primero la prueba unitaria.
3. Modificar el módulo de dominio.
4. Actualizar el adaptador HTTP o el componente.
5. Añadir integración si cambia un límite externo.
6. Añadir una migración y pgTAP si cambia el contrato SQL.
7. Ejecutar `npm run check`.
8. Recorrer ES/EN y móvil cuando cambie la interfaz.

Por ejemplo, una séptima conducta de transferencia debe cambiar el contrato de
datos, la puntuación, la validación del evento, una migración nueva, pgTAP, el
reporte y la documentación. No debe resolverse colocando un número nuevo
directamente en el componente.

## Deuda técnica controlada

`AuraExperience.tsx` contiene todavía el controlador de la misión y varias
secciones visuales. No impide el MVP ni los pilotos, pero no debe seguir
creciendo indefinidamente.

Antes de introducir cuentas, roles, creación dinámica de casos o múltiples
recorridos pedagógicos, conviene:

1. mover el estado de misión a `useAuraMission` o a un reducer;
2. separar cada etapa en componentes presentacionales;
3. extraer encabezado y secciones institucionales;
4. introducir interfaces de repositorio para analítica;
5. agregar pruebas de navegador para teclado, idioma y recorrido completo.

Cualquier cambio que agregue más de un estado nuevo o más de una rama
pedagógica al componente principal debe comenzar por esa extracción.

La suite actual no automatiza un navegador real y no realiza una llamada real a
OpenAI. Esos dos límites son deliberados: los contratos externos se simulan en
integración y la experiencia se verifica hoy con contrato de HTML más recorrido
manual. Añadir E2E de navegador es la siguiente mejora técnica útil, no un
bloqueo para iniciar pilotos.
