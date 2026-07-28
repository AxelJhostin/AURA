# AURA — Evidence Lab

> **Analiza · Ubica · Rastrea · Actúa**  
> De la reacción a la evidencia.

AURA es un laboratorio bilingüe de Alfabetización Mediática e Informacional
(AMI/MIL) para jóvenes. No entrega un veredicto automático sobre qué creer:
entrena a la persona para investigar una afirmación, comparar evidencia,
justificar una decisión y transferir la habilidad a un caso nuevo.

Este repositorio reúne dos entregables que deben evolucionar juntos:

1. Un **prototipo web funcional** para demostrar el método A-U-R-A.
2. La **guía maestra del proyecto** para estrategia, candidatura, piloto,
   producto, IA responsable, riesgos, pitch y ejecución.

## Estado actual

- **Versión:** MVP demostrable `0.6.0`
- **Objetivo:** UNESCO Youth Hackathon 2026
- **Equipo confirmado:** Axel + Nicol
- **Modo:** Next.js estándar, publicado en GitHub y preparado para Vercel
- **Casos incluidos:** dos misiones educativas simuladas sobre una afirmación
  de salud y un video viral reutilizado fuera de contexto, más un reto de
  transferencia sobre un enlace urgente de becas

La demo ya permite:

- Cambiar la interfaz entre español e inglés.
- Elegir entre dos misiones mediante un catálogo reutilizable.
- Registrar una reacción inicial sin señalarla como correcta o incorrecta.
- Identificar señales que justifican una pausa.
- Elegir fuentes y construir un mapa de evidencia.
- Auditar la procedencia de cada pieza simulada y abrir referencias reales
  separadas del expediente educativo.
- Decidir una acción proporcional a la evidencia.
- Generar y copiar una Tarjeta de evidencia.
- Resolver un reto final no guiado sobre un tema diferente.
- Obtener una puntuación de transferencia `0–2` basada en acciones observables.
- Registrar métricas anónimas con consentimiento explícito.
- Descargar el reporte codificado de una sesión en CSV.
- Solicitar una pregunta socrática adaptada mediante OpenAI en cada etapa.
- Continuar con preguntas de respaldo cuando la IA no esté disponible.
- Reiniciar la misión y recorrerla de nuevo.
- Consultar narrativa, método, diferenciación, piloto, equipo y hoja de ruta.

> El contenido viral del prototipo es ficticio. Está diseñado para demostrar la
> experiencia sin amplificar desinformación real ni inventar resultados del
> proyecto.

## Por qué esta versión importa

La demostración hace visible la diferencia central de AURA:

| Verificador convencional | AURA |
|---|---|
| Resuelve una pieza de contenido | Entrena una habilidad reutilizable |
| La herramienta entrega un veredicto | La persona construye una conclusión |
| El resultado principal es una respuesta | El resultado es un artefacto trazable |
| Éxito = acertar | Éxito = investigar, justificar y transferir |

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
npm run lint
npm test
```

`npm test` construye la aplicación y comprueba el HTML renderizado del MVP.

## Estructura del repositorio

```text
AURA-UNESCO-2026/
├── app/
│   ├── api/aura/coach/
│   │   └── route.ts             # entrenador socrático del servidor
│   ├── api/aura/events/
│   │   └── route.ts             # recepción y validación de métricas anónimas
│   ├── components/
│   │   ├── AuraExperience.tsx   # experiencia e interacciones
│   │   └── TransferChallenge.tsx # reto no guiado y reporte de sesión
│   ├── data/
│   │   ├── cases.ts             # catálogo bilingüe y contenido de misiones
│   │   └── transfer.ts          # reto y rúbrica de transferencia
│   ├── lib/
│   │   └── analytics.ts         # eventos locales, consentimiento y CSV
│   ├── globals.css              # sistema visual y diseño responsivo
│   ├── layout.tsx               # metadatos, idioma base y viewport
│   └── page.tsx                 # entrada principal
├── public/
│   ├── docs/
│   │   └── AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md
│   └── og.png                    # portada social del proyecto
├── docs/
│   └── DEVELOPMENT_ROADMAP.md   # plan técnico y criterios de aceptación
├── tests/
│   └── rendered-html.test.mjs   # smoke tests del render del servidor
├── supabase/migrations/
│   └── *_aura_learning_events.sql # persistencia opcional del piloto
├── .env.example                 # nombres de variables, nunca secretos
├── CONTRIBUTING.md
├── package.json
└── README.md
```

La fuente estratégica principal es:

[`public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md`](public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md)

Para una URL de producción, configurar `NEXT_PUBLIC_SITE_URL` con el origen
canónico antes de compilar; así la portada social usa una URL absoluta correcta.

El backlog técnico y las decisiones de evolución están en:

[`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md)

## Equipo

### Axel — liderazgo técnico

Ingeniero de software. Responsable de arquitectura, experiencia de producto,
desarrollo del MVP, integración responsable de IA, analítica, seguridad,
despliegue y demo técnica.

### Nicol — estrategia e impacto

Estudiante de Negocios Internacionales. Responsable de investigación del
público, operación del piloto, alianzas, sostenibilidad, documentación,
narrativa, pitch y presentación.

### Incorporaciones en evaluación

Hasta dos personas adicionales. La prioridad no es llenar plazas, sino sumar
capacidades complementarias:

- AMI/MIL, educación o periodismo.
- Investigación y evaluación.
- Diseño UX educativo.
- Facilitación comunitaria y producción audiovisual.

Los nombres y responsabilidades solo se agregan cuando estén confirmados.

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
- Analítica local con envío server-side opcional a Supabase.

La ruta de IA acepta solamente el identificador de un caso publicado y opciones
predefinidas dentro de ese caso. Limita el tamaño y la frecuencia de las
solicitudes, no almacena las respuestas en OpenAI y nunca envía la clave al
navegador. La misión principal no requiere base de datos ni recopila datos
personales.

La analítica utiliza un identificador UUID aleatorio de sesión y un conjunto
cerrado de eventos. Registra únicamente idioma, caso, etapa, opción codificada,
duración, versión y puntuación de transferencia. No admite nombre, correo,
ubicación, texto libre, IP, agente de navegador ni historial. Sin Supabase
configurado, los eventos permanecen en el dispositivo y pueden descargarse en
CSV. Con Supabase configurado, solo se envían cuando la persona selecciona
**Permitir métricas anónimas**.

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
la migración `supabase/migrations/*_aura_learning_events.sql`. La tabla tiene
RLS activado, no concede acceso a `anon` ni `authenticated`, y admite inserción
solo desde el rol secreto del servidor.

`NEXT_PUBLIC_SITE_URL` es opcional. En Vercel, el proyecto usa
`VERCEL_PROJECT_PRODUCTION_URL` automáticamente para los metadatos sociales.

El error anterior de `.next not found` ocurría porque el script ejecutaba
`vinext build`. La versión actual ejecuta `next build` y genera la carpeta que
Vercel espera.

## Flujo funcional

```text
Publicación simulada
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
Reto de transferencia sin guía
        ↓
Puntuación + reporte anónimo CSV
```

## Próxima versión recomendada

La siguiente meta no es añadir un chatbot general. Es completar el ciclo de
aprendizaje:

1. Conectar un proyecto Supabase exclusivo de AURA y aplicar la migración.
2. Crear un caso verdadero y otro con evidencia insuficiente.
3. Añadir validación editorial formal al esquema de casos.
4. Crear modo de facilitación con agregados, sin datos individuales.
5. Evaluar las preguntas generadas por IA con una rúbrica.
6. Ejecutar pruebas con usuarios antes de ampliar funciones.

Cada elemento tiene criterios de aceptación en
[`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md).

## GitHub

El repositorio remoto es
[`AxelJhostin/AURA`](https://github.com/AxelJhostin/AURA). Antes de cada push:

```bash
git status
git diff --check
npm run lint
npm test
```

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

La guía maestra contiene:

- briefing de incorporación y responsabilidades para Nicol;
- estado verificable de AURA 0.6.0 y capacidades pendientes;
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

**AURA — From reaction to evidence.**
