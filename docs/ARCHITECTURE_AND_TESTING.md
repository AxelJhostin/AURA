# Arquitectura y estrategia de pruebas de AURA

**Versión de referencia:** AURA 0.9.0
**Objetivo:** permitir cambios grandes sin mezclar pedagogía, interfaz,
persistencia y medición; detectar regresiones antes de publicar.

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

## Pirámide de pruebas

### 1. Unitarias

```bash
npm run test:unit
```

Cubren puntuación de transferencia, opciones y etapas válidas, conversión
anónima a filas, agregados de pilotos y validación editorial bilingüe. No usan
red, navegador ni base de datos.

### 2. Integración

```bash
npm run test:integration
```

Ejecutan las rutas de Next.js con `Request` y `Response` reales, pero sustituyen
el límite externo de Supabase. Cubren modo local, inserción REST, deduplicación,
seguridad de origen, agregados privados y errores del proveedor. Nunca usan
claves ni datos de producción.

### 3. Contrato y build

```bash
npm run test:contract
```

Construye Next.js como producción y comprueba HTML, metadatos, catálogo,
privacidad, migraciones, documentación y entrega de analítica.

### 4. Base de datos

Requiere Docker:

```bash
npm run db:start
npm run test:db
npm run db:stop
```

pgTAP reconstruye el esquema desde las migraciones y verifica tabla, índice,
RLS, privilegios y rechazo de puntuaciones, códigos y pulsos inválidos. Cada
archivo se ejecuta en una transacción y se revierte.

### Cobertura y verificación completa

```bash
npm run test:coverage
npm run check
```

`npm run check` ejecuta lint, TypeScript, unitarias, integración y contrato de
producción. La base se mantiene separada porque requiere Docker.

## Integración continua

`.github/workflows/quality.yml` ejecuta en cada pull request y cambio de `main`:

1. instalación reproducible con `npm ci`;
2. lint, TypeScript, build y pruebas de aplicación;
3. Supabase local y pgTAP en un trabajo aislado.

No necesita secretos del proyecto.

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
