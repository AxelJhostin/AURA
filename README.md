# AURA Opportunity Circles

> **Analiza · Ubica · Rastrea · Actúa**  
> Jóvenes entrenando a jóvenes para investigar oportunidades antes de entregar
> datos, dinero o confianza.

AURA es un método y laboratorio bilingüe de Alfabetización Mediática e
Informacional (AMI/MIL). **Opportunity Circles** es su primera implementación
comunitaria: sesiones breves dirigidas por jóvenes para comprobar becas,
empleos, intercambios y programas juveniles antes de entregar documentos,
dinero o confianza. AURA no entrega un veredicto automático; entrena a la
persona para investigar, justificar una decisión y transferir la habilidad a
una oportunidad nueva sin depender de la IA.

Este repositorio reúne cuatro entregables que deben evolucionar juntos:

1. Un **prototipo web funcional** con cuatro Opportunity Circles y transferencia.
2. La **guía maestra del proyecto** para estrategia, candidatura, piloto,
   producto, IA responsable, riesgos, pitch y ejecución.
3. Una **guía operativa de facilitación** para ejecutar Circles con salvaguardas.
4. Un **dossier operativo de postulación** que convierte los criterios
   oficiales en evidencia, responsables, fechas y controles de envío.

## Estado actual

- **Versión:** Opportunity Circles `1.0.0`, **producto listo para pilotos**
- **Objetivo:** UNESCO Youth Hackathon 2026
- **Equipo final confirmado:** Hernández Axel + Nicole Madelyne Pincay
  Soledispa + José Luis Cañarte Plúa
- **Modo:** Next.js estándar, publicado en GitHub y preparado para Vercel
- **Calidad:** 52 comprobaciones automatizadas aprobadas localmente: 14
  unitarias, 7 de integración, 19 de contrato/build y 12 aserciones pgTAP,
  además de lint, TypeScript, build y cobertura sobre umbrales
- **Casos incluidos:** beca que suplanta una institución, empleo con pago
  anticipado, intercambio con evidencia insuficiente y programa legítimo
  difundido mediante información desactualizada y respaldo sintético no
  autorizado, más un reto nuevo de transferencia sobre pasantías
- **Intervención:** sesión replicable de 25 minutos para 6–20 participantes,
  con guía, salvaguardas, código anónimo y reporte agregado

La demo ya permite:

- Cambiar la interfaz entre español e inglés.
- Elegir entre cuatro misiones mediante un catálogo reutilizable y validado en
  cada build.
- Registrar una reacción inicial sin señalarla como correcta o incorrecta.
- Identificar señales que justifican una pausa sin revelar la respuesta antes
  de elegir.
- Examinar fuentes candidatas y construir un mapa de evidencia.
- Auditar la procedencia de cada pieza simulada y abrir referencias reales
  separadas del expediente educativo.
- Decidir una acción proporcional a la evidencia.
- Construir y copiar una Tarjeta de evidencia con hallazgo, límite y acción
  elegidos por la persona.
- Resolver un reto final no guiado sobre una oportunidad desconocida.
- Obtener una puntuación de transferencia `0–6` basada en seis conductas
  observables: afirmación, origen, procedencia, corroboración, incertidumbre y
  acción.
- Registrar métricas anónimas con consentimiento explícito.
- Comparar un pulso opcional de confianza pre/post mediante opciones `1–5`.
- Generar un código de piloto y un enlace compartible sin crear cuentas.
- Consultar un panel de facilitación con totales y promedios agregados.
- Descargar un resumen agregado CSV que no contiene identificadores de sesión.
- Descargar el reporte codificado de una sesión en CSV.
- Solicitar una pregunta socrática adaptada mediante OpenAI en cada etapa.
- Continuar con preguntas de respaldo cuando la IA no esté disponible.
- Reiniciar la misión y recorrerla de nuevo.
- Consultar narrativa, método, diferenciación, piloto, equipo y hoja de ruta.
- Facilitar un Opportunity Circle con agenda exacta, reglas de seguridad y
  guía descargable.

> Todas las oportunidades, organizaciones y personas de los casos son
> ficticias. Las referencias oficiales respaldan los patrones y el método, no
> la existencia de los mensajes simulados. El proyecto no inventa resultados.

## Por qué esta versión importa

La demostración hace visible la diferencia central de AURA:

| Alerta o detector convencional | AURA Opportunity Circles |
|---|---|
| Resuelve un mensaje | Entrena una habilidad reutilizable |
| La herramienta entrega un veredicto | La persona construye una conclusión |
| El resultado principal es una respuesta | El resultado es un artefacto trazable |
| Éxito = acertar o evitar el enlace | Éxito = investigar, proteger, justificar y transferir |

La IA está limitada a formular una pregunta socrática breve según las acciones
observadas. No determina si la publicación es verdadera o falsa, no elige por la
persona y no puede inventar nuevas fuentes. El recorrido completo sigue
funcionando sin IA mediante preguntas de respaldo.

## Inicio rápido

### Requisitos

- Node.js `22.x`
- npm

### Ejecutar en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Completar `OPENAI_API_KEY` dentro de `.env.local`. Ese archivo está ignorado por
Git y nunca debe subirse a GitHub. La variable no debe llevar el prefijo
`NEXT_PUBLIC_`, porque solamente la ruta del servidor puede leerla.

La terminal mostrará la URL local, normalmente
`http://localhost:3000/`.

### Verificaciones

```bash
npm run check
npm run test:coverage
```

`npm run check` ejecuta lint, TypeScript, pruebas unitarias, integración de
rutas, build de producción y pruebas de contrato. `npm run test:coverage`
verifica umbrales mínimos de 90 % en líneas, 70 % en ramas y 75 % en funciones
para los módulos instrumentados. Para reconstruir Supabase local y ejecutar
pgTAP:

```bash
npm run db:start
npm run test:db
npm run db:stop
```

La arquitectura, límites de módulos, pirámide de pruebas y procedimiento para
cambios grandes están documentados en
[`docs/ARCHITECTURE_AND_TESTING.md`](docs/ARCHITECTURE_AND_TESTING.md).

La verificación de AURA Opportunity Circles 1.0.0 obtuvo 95,54 % de
cobertura de líneas, 77,36 % de ramas y 79,52 % de funciones en las pruebas
unitarias y de integración. Estas cifras prueban reglas y adaptadores
instrumentados; no sustituyen las pruebas con personas ni una suite E2E de
navegador, que sigue siendo una mejora posterior al MVP.

## Estructura del repositorio

```text
AURA-UNESCO-2026/
├── app/
│   ├── api/aura/coach/
│   │   └── route.ts             # entrenador socrático del servidor
│   ├── api/aura/events/
│   │   └── route.ts             # recepción y validación de métricas anónimas
│   ├── api/aura/pilots/
│   │   └── route.ts             # resumen agregado de un piloto
│   ├── components/
│   │   ├── AuraExperience.tsx   # experiencia e interacciones
│   │   ├── OpportunityCircleGuide.tsx # sesión comunitaria y salvaguardas
│   │   ├── PilotFacilitator.tsx # enlaces y panel agregado del piloto
│   │   ├── PilotConfidence.tsx  # pulso pre/post anónimo y opcional
│   │   └── TransferChallenge.tsx # reto no guiado y reporte de sesión
│   ├── data/
│   │   ├── cases.ts             # contrato y núcleo del catálogo bilingüe
│   │   ├── balanced-cases.ts    # casos respaldado-con-límites e insuficiente
│   │   ├── opportunity-cases.ts # cuatro casos de Opportunity Circles
│   │   ├── case-validation.ts   # compuerta editorial del build
│   │   └── transfer.ts          # reto y rúbrica de transferencia
│   ├── domain/
│   │   ├── analytics-event.ts   # contrato puro de eventos codificados
│   │   ├── pilot-report.ts      # agregados privados del piloto
│   │   └── transfer-scoring.ts  # puntuación observable de transferencia
│   ├── lib/
│   │   └── analytics.ts         # eventos locales, consentimiento y CSV
│   ├── globals.css              # sistema visual y diseño responsivo
│   ├── layout.tsx               # metadatos, idioma base y viewport
│   └── page.tsx                 # entrada principal
├── public/
│   ├── docs/
│   │   ├── AURA_Opportunity_Circles_Guia_Facilitacion.md
│   │   ├── AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md
│   │   ├── AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md
│   │   └── AURA_Estructura_Definitiva_PDF_UNESCO_2026.md
│   └── og.png                    # portada social del proyecto
├── docs/
│   ├── ARCHITECTURE_AND_TESTING.md # modularidad y estrategia de pruebas
│   ├── AXEL_OPERATIONAL_INPUTS.md  # hechos técnicos para la candidatura
│   ├── DEVELOPMENT_ROADMAP.md      # plan técnico y criterios de aceptación
│   └── MVP_TECHNICAL_FIXES.md      # lote 0.8 cerrado; referencia histórica
├── tests/
│   ├── unit/                    # reglas puras, rápidas y aisladas
│   ├── integration/             # rutas Next.js con límites simulados
│   └── *.test.mjs               # contrato del build y HTML renderizado
├── supabase/migrations/
│   ├── *_aura_learning_events.sql # tabla y RLS de analítica anónima
│   ├── *_anonymous_pilot_code.sql # agrupación e índice del piloto
│   ├── *_anonymous_pilot_pulse.sql # instrumento pre/post codificado
│   └── *_reasoning_and_transfer_v2.sql # eventos de conclusión y escala 0–6
├── supabase/tests/database/     # restricciones y RLS mediante pgTAP
├── .env.example                 # nombres de variables, nunca secretos
├── CONTRIBUTING.md
├── package.json
└── README.md
```

La fuente estratégica principal es:

[`public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md`](public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md)

La agenda exacta, salvaguardas, métricas, registro y formación de
facilitadores de Opportunity Circles están en:

[`public/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md`](public/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md)

El plan operativo del equipo, la matriz de los cinco criterios oficiales y la
compuerta de elegibilidad están en:

[`public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md`](public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md)

La especificación página por página para redactar, diseñar, sustentar y revisar
el PDF final de la candidatura está en:

[`public/docs/AURA_Estructura_Definitiva_PDF_UNESCO_2026.md`](public/docs/AURA_Estructura_Definitiva_PDF_UNESCO_2026.md)

Para una URL de producción, configurar `NEXT_PUBLIC_SITE_URL` con el origen
canónico antes de compilar; así la portada social usa una URL absoluta correcta.

El backlog técnico y las decisiones de evolución están en:

[`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md)

Mapa de lectura:

| Documento | Uso actual |
|---|---|
| `README.md` | estado, ejecución y entrada al repositorio |
| `public/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md` | operación de una sesión de 25 minutos, seguridad y medición |
| `public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md` | plan diario, responsables y matriz de los cinco criterios |
| `public/docs/AURA_Estructura_Definitiva_PDF_UNESCO_2026.md` | plano página por página del entregable final |
| `public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md` | fuente completa de producto, estrategia, piloto, pitch y controles |
| `docs/ARCHITECTURE_AND_TESTING.md` | límites técnicos, calidad y cambios grandes |
| `docs/DEVELOPMENT_ROADMAP.md` | alcance congelado, backlog y releases |
| `docs/AXEL_OPERATIONAL_INPUTS.md` | hechos técnicos aprobados y campos no resueltos |
| `docs/MVP_TECHNICAL_FIXES.md` | archivo histórico del lote FIX-01 a FIX-05, ya cerrado |

## Equipo

### Hernández Axel — liderazgo técnico

Ingeniero de software. Responsable de arquitectura, experiencia de producto,
desarrollo del MVP, integración responsable de IA, analítica, seguridad,
despliegue y demo técnica.

### Nicole Madelyne Pincay Soledispa — estrategia e impacto

Estudiante de Negocios Internacionales. Responsable de investigación del
público, operación del piloto, alianzas, sostenibilidad, documentación,
narrativa, pitch y presentación.

### José Luis Cañarte Plúa — investigación y edición

Responsable de investigación, estructura de informes, comprobación de
evidencia, referencias y revisión editorial en inglés para la candidatura.

El equipo se cierra con estas tres personas. Los correos y demás datos
personales requeridos por la postulación se mantienen fuera del repositorio
público.

## Principios no negociables

- AURA no se presenta como autoridad final.
- La IA pregunta antes de explicar.
- Las fuentes y sus límites permanecen visibles.
- La incertidumbre es una salida válida.
- No se inventan usuarios, métricas, aliados ni resultados.
- El aprendizaje se mide mediante acciones y transferencia, no por cambiar la
  opinión de una persona.
- El producto no debe enseñar desconfianza generalizada.
- El caso, la interfaz y la evaluación deben funcionar en móvil.
- Los datos sensibles no son requisito para aprender.

## Arquitectura actual

El prototipo usa:

- React 19.
- Next.js 16 con salida estándar `.next`, compatible con Vercel.
- SDK oficial de OpenAI y Responses API en una ruta exclusiva del servidor.
- CSS propio para identidad visual, diseño responsivo y accesibilidad.
- Estado local de React para la misión.
- Catálogo tipado de casos separado de la interfaz.
- Reglas de eventos, agregación de pilotos y transferencia extraídas a módulos
  de dominio puros.
- Analítica local con envío server-side opcional a Supabase.
- CI de GitHub Actions con compuertas separadas para aplicación y pgTAP.

La ruta de IA acepta solamente el identificador de un caso publicado y opciones
predefinidas dentro de ese caso. Limita el tamaño y la frecuencia de las
solicitudes, no almacena las respuestas en OpenAI y nunca envía la clave al
navegador. La misión principal no requiere base de datos ni recopila datos
personales.

La analítica utiliza un identificador UUID aleatorio de sesión, un código
aleatorio de piloto opcional y un conjunto cerrado de eventos. Registra
únicamente idioma, caso, etapa, opción codificada, duración, versión y
puntuación de transferencia. No admite nombre, correo,
ubicación, texto libre, IP, agente de navegador ni historial. Sin Supabase
configurado, los eventos permanecen en el dispositivo y pueden descargarse en
CSV. Con Supabase configurado, solo se envían cuando la persona selecciona
**Permitir métricas anónimas**.

El código `AURA-XXXXXXXXXXXX` funciona como una capacidad compartida: agrupa
sesiones de un Circle y permite abrir un resumen, pero la API nunca devuelve
identificadores de sesión ni filas individuales. Debe compartirse solo con el
equipo de facilitación y las personas participantes.

## Desplegar en Vercel

La aplicación debe usar la configuración normal de Next.js:

1. **Framework Preset:** `Next.js`.
2. **Build Command:** `npm run build` o el valor automático.
3. **Output Directory:** dejarlo vacío; no usar `dist`, `.vinext` ni una carpeta
   personalizada.
4. **Install Command:** dejar el valor automático.
5. **Node.js:** versión 22.

En **Settings → Environment Variables**, agregar:

```text
OPENAI_API_KEY=<clave del proyecto>
OPENAI_MODEL=gpt-5.6
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_SECRET_KEY=<clave-secreta-del-servidor>
```

Aplicar `OPENAI_API_KEY` a Production, Preview y Development según sea
necesario. Después de guardarla hay que iniciar un nuevo deployment: Vercel no
aplica variables nuevas a despliegues anteriores.

Las variables de Supabase son opcionales. Deben permanecer exclusivamente en
el servidor y nunca usar el prefijo `NEXT_PUBLIC_`. Antes de activarlas, aplicar
las migraciones de `supabase/migrations/` en orden. La tabla tiene
RLS activado, no concede acceso a `anon` ni `authenticated`, y admite inserción
y lectura agregada solo desde el rol secreto del servidor.

`NEXT_PUBLIC_SITE_URL` es opcional. En Vercel, el proyecto usa
`VERCEL_PROJECT_PRODUCTION_URL` automáticamente para los metadatos sociales.

El error anterior de `.next not found` ocurría porque el script ejecutaba
`vinext build`. La versión actual ejecuta `next build` y genera la carpeta que
Vercel espera.

## Flujo funcional

```text
Oportunidad simulada
        ↓
Analiza — reacción inicial
        ↓
Ubica — señales y preguntas
        ↓
Rastrea — fuentes + mapa de evidencia
        ↓
Actúa — decisión proporcional
        ↓
Tarjeta de evidencia
        ↓
Estado de evidencia: respaldada / engañosa / insuficiente
        ↓
Reto de transferencia sin guía
        ↓
Puntuación + pulso final opcional
        ↓
Conversación entre pares
        ↓
Panel y CSV agregados del Opportunity Circle
```

## Siguiente etapa recomendada

Opportunity Circles `1.0.0` convierte el laboratorio general en una
intervención concreta sin romper el motor, la transferencia ni la analítica.
La prioridad ya no es aumentar el número de casos, sino demostrar que el
formato produce aprendizaje y puede ser facilitado por jóvenes:

1. Ejecutar una prueba de comprensión con cinco personas.
2. Realizar un Circle interno y corregir únicamente problemas observados.
3. Ejecutar al menos dos Circles y reunir 25–40 participantes agregados.
4. Revisar los cuatro casos con una persona externa de AMI, becas u orientación
   laboral.
5. Documentar una iteración causada por evidencia del piloto.
6. Integrar resultados honestos, demo bilingüe y video final.

La única deuda técnica estructural relevante es el tamaño de
`AuraExperience.tsx`. No bloquea el piloto. Antes de incorporar cuentas, roles,
creación dinámica de casos o nuevos recorridos, debe dividirse el estado de la
misión y añadirse una suite E2E de navegador.

Cada elemento tiene criterios de aceptación en
[`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md).

## GitHub

El repositorio remoto es
[`AxelJhostin/AURA`](https://github.com/AxelJhostin/AURA). Antes de cada push:

```bash
git status
git diff --check
npm run check
```

Si cambian migraciones, restricciones, privilegios o RLS, ejecutar además
`npm run test:db` contra Supabase local.

Confirmar especialmente que `.env.local` no aparezca en `git status`. No se
incluye una licencia de código porque esa decisión todavía pertenece al equipo.

## Convenciones

- Interfaz y contenido principal: español e inglés.
- Componentes React: `PascalCase`.
- Variables y funciones: inglés.
- Commits: mensajes breves tipo Conventional Commits.
- Una rama por objetivo verificable.
- Ninguna métrica se presenta como resultado hasta tener evidencia.

## Documentación de referencia

La guía maestra y la guía de Opportunity Circles contienen:

- briefing y responsabilidades del equipo final de tres personas;
- estado verificable de AURA Opportunity Circles 1.0.0 y capacidades pendientes;
- lectura completa de la convocatoria;
- propuesta de valor y diferenciación;
- especificación del producto;
- IA responsable y límites;
- modelo de casos;
- piloto y medición;
- sostenibilidad y escalabilidad;
- estructura del equipo;
- riesgos y mitigaciones;
- candidatura, video, pitch y preguntas del jurado;
- cronograma y controles finales.

---

**AURA Opportunity Circles — From urgent opportunities to informed decisions.**
