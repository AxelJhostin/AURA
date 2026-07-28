# AURA — Guía maestra para UNESCO Youth Hackathon 2026

## Analiza · Ubica · Rastrea · Actúa

**Nombre recomendado en inglés:** AURA — Assess · Uncover · Research · Act  
**Descriptor:** Bilingual evidence-training lab for Media and Information Literacy  
**Eslogan principal:** De la reacción a la evidencia.  
**Eslogan en inglés:** From reaction to evidence.  
**Promesa del producto:** AURA no decide qué creer. Entrena a las personas para investigar con evidencia.  
**Estado de este documento:** Fuente maestra de estrategia, producto, operación y candidatura — versión 2.1.

**Versión funcional de referencia:** AURA 0.7.0.

**Ubicación en el proyecto:** `public/docs/`, accesible desde el prototipo y versionada junto al código.  
**Fecha de referencia:** 28 de julio de 2026.
**Fecha límite oficial:** 16 de agosto de 2026, 23:59, hora de París. En Ecuador continental equivale aproximadamente a las 16:59. El objetivo interno debe ser enviar como máximo al mediodía de Ecuador del 16 de agosto.

**Prototipo público:** [https://aura-opal-beta.vercel.app/](https://aura-opal-beta.vercel.app/)

**Repositorio:** [https://github.com/AxelJhostin/AURA](https://github.com/AxelJhostin/AURA)

**Rama funcional validada:** `agent/aura-pilot-mode`, PR borrador
[#1](https://github.com/AxelJhostin/AURA/pull/1).

---

## Briefing de incorporación para Nicole

Esta sección permite entender el proyecto, su estado y las decisiones inmediatas
sin tener que leer primero las más de dos mil líneas de la guía. El resto del
documento contiene la justificación, especificaciones, instrumentos, guiones y
controles detallados.

### 1. AURA en noventa segundos

**AURA es un laboratorio bilingüe de evidencia para Alfabetización Mediática e
Informacional.** Entrena a jóvenes para pasar de una reacción rápida ante una
publicación a una decisión justificada con fuentes.

La persona no recibe una etiqueta automática de “verdadero” o “falso”. En una
misión breve debe realizar cuatro acciones:

1. **Analiza / Assess:** registra qué haría antes de recibir ayuda.
2. **Ubica / Uncover:** identifica señales que merecen investigación.
3. **Rastrea / Research:** abre y compara fuentes cercanas a la evidencia.
4. **Actúa / Act:** toma una decisión proporcional y genera una Tarjeta de
   Evidencia.

Después recibe un caso diferente y sin ayuda paso a paso. Esa segunda actividad
comprueba si puede **transferir** el hábito de investigación, en lugar de medir
si simplemente obedeció a la IA.

La frase que debe permanecer consistente es:

> AURA no decide qué creer. Entrena a las personas para investigar con
> evidencia.

En inglés:

> AURA does not tell people what to believe. It trains them to investigate with
> evidence.

### 2. Qué problema resuelve

El problema no es únicamente que circulen contenidos falsos. También es que las
personas deben decidir muy rápido y suelen evaluar por emoción, diseño,
popularidad o familiaridad. Un fact-check puede corregir una publicación, pero
no necesariamente entrena el proceso que se necesita para la siguiente.

AURA aborda esa brecha educativa mediante práctica observable:

- detenerse antes de compartir;
- convertir una publicación en una afirmación verificable;
- identificar origen, incentivos, evidencia y contexto;
- leer lateralmente fuera de la publicación;
- distinguir fuente primaria, contexto independiente y repetición circular;
- expresar incertidumbre cuando la evidencia no permite concluir;
- elegir una acción proporcional;
- repetir el comportamiento en un caso nuevo.

### 3. Por qué encaja con UNESCO Youth Hackathon 2026

El tema oficial es **“Play Your Part: Youth Designing the Future of Media and
Information Literacy”**. AURA se alinea directamente con cuatro áreas:

- AI and MIL;
- MIL Education;
- Community Impact;
- Youth Engagement.

La convocatoria oficial establece:

- equipos de 2 a 6 personas;
- edades de 18 a 30 años para todos los integrantes;
- alineación con paz, diversidad y libertad de expresión;
- inclusión y equilibrio de género altamente recomendados;
- propuesta en PDF o Word, máximo 10 MB;
- pitch en video de máximo tres minutos;
- envío entre el 6 de julio y el 16 de agosto de 2026;
- evaluación por tres expertos entre el 18 de agosto y el 13 de septiembre;
- anuncio de ganadores entre el 13 y el 18 de septiembre;
- presentación de equipos ganadores en Tesalónica, Grecia, del 26 al 28 de
  noviembre de 2026.

Los cinco criterios oficiales son:

1. Consistencia con el tema y los principios AMI.
2. Claridad de la presentación y potencial del equipo.
3. Innovación y creatividad.
4. Viabilidad y sostenibilidad.
5. Impacto e inclusión.

Fuente primaria:
[UNESCO Youth Hackathon 2026](https://www.unesco.org/en/articles/unesco-youth-hackathon-2026).

### 4. Qué diferencia a AURA

AURA no debe venderse como “otro chatbot” ni como “un detector de noticias
falsas”. Su posición defendible es:

> Un laboratorio de evidencia donde la IA cede protagonismo, la persona realiza
> acciones verificables y el aprendizaje se comprueba mediante transferencia.

La combinación diferencial es:

- método A-U-R-A memorable en español e inglés;
- decisiones antes y después de investigar;
- lectura lateral y selección de evidencia;
- fuentes visibles y conclusión trazable;
- IA socrática sin veredicto automático;
- modo degradado cuando la IA falla;
- reto no guiado de transferencia;
- medición de conductas, no de creencias;
- diseño móvil, bilingüe y sin registro;
- extensión comunitaria futura mediante AURA Circles.

No afirmar que AURA es la primera solución socrática con IA. TITAN y otros
proyectos ya trabajan en espacios cercanos. La originalidad está en la
integración concreta de acciones, trazabilidad, transferencia, contexto
latinoamericano y participación juvenil.

### 5. Estado real del producto — AURA 0.7.0

La siguiente tabla es la fuente de verdad. “Implementado” significa que existe
en el repositorio y en la demo pública; no significa que ya fue validado con
usuarios.

| Capacidad | Estado | Evidencia actual |
|---|---|---|
| Landing bilingüe y responsiva | Implementado | Producción pública en Vercel |
| Método A-U-R-A | Implementado | Flujo completo de cuatro etapas |
| Caso 01: bebidas energéticas y memoria | Implementado | Misión guiada bilingüe |
| Caso 02: video de tormenta reciclado | Implementado | Misión guiada bilingüe |
| Motor reutilizable de casos | Implementado | Contenido separado de la interfaz |
| Decisión inicial | Implementado | Opción codificada antes de investigar |
| Señales investigables | Implementado | Selección de señales por caso |
| Mapa de fuentes | Implementado | Dos fuentes seleccionadas por misión |
| Expediente de procedencia | Implementado | Cada pieza simulada muestra ID, origen, fecha y declaración explícita |
| Referencias reales | Implementado | Enlaces auditables separados del material ficticio de cada caso |
| Acción proporcional | Implementado | Selección y justificación mediante el caso |
| Tarjeta de Evidencia | Implementado | Artefacto copiable al finalizar |
| Entrenador socrático con OpenAI | Implementado | Pregunta adaptada por caso y etapa |
| Respaldo sin IA | Implementado | Preguntas curadas si la API falla |
| Reto de transferencia sin guía | Implementado | Caso de enlace de becas |
| Puntuación de transferencia | Implementado | Rúbrica observable de 0 a 2 |
| Consentimiento de métricas | Implementado | Envío anónimo o modo solo local |
| Informe de sesión | Implementado | Eventos, tiempo y puntuación |
| Exportación CSV | Implementado | Descarga desde el dispositivo |
| API de eventos validada | Implementado | Rechaza eventos y opciones inventadas |
| Persistencia central | Activa y verificada | Vercel inserta eventos anónimos server-side en Supabase |
| Código y enlace de piloto | Implementado en 0.7.0 | Código aleatorio de 12 caracteres, sin cuenta ni PII |
| Vista de facilitador | Implementada en 0.7.0 | Totales y promedios; la API no devuelve filas ni identificadores |
| Migración de piloto en producción | Activa y verificada | Columna, restricción, índice, RLS y privilegios comprobados |
| Pilotos con participantes reales | Pendiente | No existen resultados que puedan afirmarse |
| Casos adicionales revisados | Pendiente | Meta: seis casos totales |
| Propuesta final en inglés | Pendiente | Banco de texto disponible en esta guía |
| Pitch grabado | Pendiente | Guion y lista de planos disponibles |

Validaciones técnicas completadas para AURA 0.7.0:

- compilación de producción Next.js correcta;
- TypeScript y lint sin errores;
- siete pruebas automatizadas aprobadas;
- cero vulnerabilidades reportadas en dependencias de producción;
- ruta pública de eventos probada con aceptación, rechazo y persistencia real;
- generación, normalización y propagación del código de piloto verificadas;
- ruta de resumen limitada a resultados agregados y clave server-side;
- secretos fuera del repositorio;
- despliegue de Vercel confirmado.

### 6. Lo que todavía no se puede afirmar

Hasta completar pilotos reales, no decir:

- “AURA mejora el pensamiento crítico en X %”.
- “Los usuarios aprendieron”.
- “Tenemos alianzas con universidades”.
- “Tenemos 30, 50 o 100 participantes”.
- “La puntuación de transferencia aumentó”.
- “UNESCO avala AURA”.
- “La IA detecta desinformación”.
- “AURA verifica cualquier publicación”.
- “La base central ya registra todos los eventos”.

Sí se puede decir:

- existe un prototipo funcional y público;
- el flujo es bilingüe;
- hay dos misiones guiadas y un reto no guiado;
- AURA genera una Tarjeta de Evidencia;
- existe medición anónima local y exportación CSV;
- la persistencia central está diseñada, pero todavía no activada;
- el equipo está preparando un piloto y reportará sus resultados con
  limitaciones.

### 7. Recorrido exacto de una persona usuaria

1. Abre AURA sin crear una cuenta.
2. Selecciona idioma: español o inglés.
3. Elige uno de los casos guiados.
4. Decide si permite métricas anónimas o prefiere mantenerlas en su dispositivo.
5. Observa una publicación simulada.
6. Registra qué haría inicialmente.
7. Selecciona las señales que justifican una pausa.
8. Puede pedir una pregunta adicional a la IA.
9. Abre exactamente dos fuentes y observa el mapa de evidencia.
10. Elige una acción proporcional.
11. Genera una Tarjeta de Evidencia con afirmación, fuentes, conclusión, decisión
    y hábito transferible.
12. Inicia un reto diferente, sin la guía A-U-R-A visible paso a paso.
13. Selecciona su primer movimiento de investigación.
14. Selecciona la razón que mejor lo justifica.
15. Recibe una puntuación `0–2` y feedback formativo.
16. Puede descargar el reporte anónimo de la sesión en CSV.

El reto no pregunta “¿es verdadero o falso?”. Evalúa dos acciones:

- si la persona busca primero una fuente oficial o primaria;
- si justifica esa acción mediante procedencia y evidencia, no mediante
  popularidad, urgencia o apariencia.

### 8. Cómo se mide el aprendizaje

AURA no considera que cambiar de opinión sea aprendizaje por sí solo. Una
persona puede mantener correctamente su decisión inicial después de revisar
evidencia.

El piloto debe observar:

| Dimensión | Conducta observable |
|---|---|
| Pausa | Registra una decisión antes de compartir |
| Formulación | Distingue la afirmación comprobable |
| Fuente | Busca origen o fuente primaria |
| Lectura lateral | Sale de la publicación y compara |
| Corroboración | Usa contexto independiente |
| Calibración | Reconoce límites e incertidumbre |
| Acción | Decide de forma proporcional |
| Transferencia | Repite el comportamiento en un caso nuevo |

Eventos codificados disponibles:

- `mission_started`;
- `initial_decision_recorded`;
- `signal_selected`;
- `source_opened`;
- `action_selected`;
- `evidence_card_generated`;
- `mission_abandoned`;
- `transfer_started`;
- `transfer_first_move_selected`;
- `transfer_reason_selected`;
- `transfer_completed`.

Estos eventos registran únicamente identificadores aleatorios, caso, etapa,
opción codificada, idioma, duración, versión y puntuación. No aceptan nombres,
correos, texto libre, IP, ubicación, agente de navegador ni historial.

### 9. Arquitectura funcional actual

```text
Navegador
  |
  +--> Next.js 16 / React / TypeScript
  |      |
  |      +--> Motor bilingüe de casos curados
  |      +--> Tarjeta de Evidencia
  |      +--> Reto de transferencia
  |      +--> Métricas locales + CSV
  |
  +--> POST /api/aura/coach
  |      |
  |      +--> OpenAI Responses API
  |      +--> store: false
  |      +--> pregunta curada si la IA no responde
  |
  +--> POST /api/aura/events
  |      |
  |      +--> validación de origen, tamaño, frecuencia y esquema
  |      +--> código de piloto opcional
  |      +--> modo local cuando Supabase no está configurado
  |      +--> Supabase solo desde el servidor y con consentimiento
  |
  +--> GET /api/aura/pilots?code=AURA-...
         |
         +--> validación de origen, formato y frecuencia
         +--> agregación server-side
         +--> totales y promedios; nunca filas ni identificadores
```

Infraestructura:

- código y control de versiones: GitHub;
- producción: Vercel;
- IA: OpenAI desde una ruta server-side;
- persistencia central: Supabase PostgreSQL desde la ruta server-side;
- secretos: variables de entorno, nunca código ni `NEXT_PUBLIC_*`;
- datos actuales: almacenamiento local, CSV y eventos anónimos centrales cuando
  existe consentimiento;
- migración base aplicada y versionada:
  `supabase/migrations/20260728033416_aura_learning_events.sql`;
- migración de piloto aplicada, verificada y versionada:
  `supabase/migrations/20260728141033_add_anonymous_pilot_code.sql`.

### 10. Privacidad y límites de IA

Principios no negociables:

- no se necesita cuenta para la experiencia central;
- no se solicita nombre ni correo;
- el usuario elige envío anónimo o modo solo local;
- no se almacena contenido libre enviado por la persona;
- la IA no emite una etiqueta de verdad;
- las fuentes permanecen visibles;
- la IA debe expresar incertidumbre;
- la experiencia funciona con preguntas curadas si la IA falla;
- ninguna clave secreta debe aparecer en GitHub, capturas o video.

La persistencia central está activa en un proyecto de la organización del
equipo. La migración:

- habilita Row Level Security;
- revoca acceso a `anon` y `authenticated`;
- concede inserción únicamente al rol secreto del servidor;
- aplica restricciones a nombres de evento, etapas, tiempos y puntuación;
- no contiene columnas de identidad o texto libre.

Hasta que ese proyecto exista y sus variables estén configuradas en Vercel, el
modo público conserva los eventos únicamente en el dispositivo y permite
descargarlos como CSV.

### 11. Responsabilidades del equipo

#### Hernández Axel — liderazgo técnico y de producto

Responsable principal de:

- arquitectura y desarrollo;
- GitHub, Vercel y dominios;
- integración responsable de OpenAI;
- instrumentación de eventos;
- seguridad y privacidad;
- calidad técnica y pruebas;
- grabación técnica de la demo;
- soporte durante el piloto;
- documentación del funcionamiento real.

Hernández Axel no debe absorber en solitario investigación, alianzas, propuesta, logística
de piloto y edición del video. Esa concentración sería un riesgo de ejecución.

#### Nicole — estrategia, impacto y operación

Responsable principal de:

- definir y defender el público inicial;
- validar el problema con jóvenes;
- diseñar y coordinar el piloto;
- identificar universidades, docentes u organizaciones juveniles accesibles;
- preparar mensajes de contacto y seguimiento;
- redactar impacto, inclusión, viabilidad y sostenibilidad;
- mantener el registro de evidencia y resultados;
- revisar que ninguna afirmación del pitch sea inventada;
- coordinar propuesta, formulario y video;
- cuidar la narrativa en inglés con apoyo de revisión externa.

Primeros entregables recomendados para Nicole:

1. Leer este briefing y las secciones 1–3, 15–16, 19, 21 y 24–28.
2. Preparar una lista de 10 contactos posibles para reclutamiento o validación.
3. Conseguir de 5 a 8 pruebas exploratorias antes del piloto formal.
4. Documentar cada observación sin convertirla todavía en “resultado”.
5. Definir una hipótesis de adopción para universidades y organizaciones
   juveniles.
6. Redactar una página de sostenibilidad con costos reales.
7. Mantener un archivo de afirmaciones permitidas y evidencia asociada.
8. Coordinar la disponibilidad del equipo hasta el 16 de agosto.

#### Integrantes posibles

No añadir personas solo para alcanzar cuatro integrantes. La convocatoria acepta
equipos de dos. Una nueva persona debe aportar al menos una capacidad faltante:

- pedagogía o AMI;
- investigación y evaluación;
- acceso verificable a participantes;
- periodismo o verificación;
- diseño y edición audiovisual;
- implementación comunitaria.

Toda persona confirmada debe tener 18–30 años, aceptar responsabilidades
concretas y poder contribuir antes del cierre.

### 12. Sistema de coordinación Hernández Axel–Nicole

Ritmo mínimo:

- reunión diaria de 15–20 minutos;
- una lista de tareas con responsable y fecha;
- una demo interna cada dos días;
- registro de decisiones en esta guía;
- ninguna función nueva sin explicar qué criterio de UNESCO fortalece;
- cierre diario con bloqueos y evidencia producida.

Agenda de la primera reunión de trabajo:

1. Repetir el one-liner de AURA con palabras propias.
2. Revisar el prototipo completo.
3. Confirmar público inicial: estudiantes y líderes juveniles de 18–24 años en
   Ecuador.
4. Confirmar responsabilidades.
5. Elegir fecha y canal de las primeras pruebas.
6. Definir quién contactará a cada participante.
7. Revisar riesgos de consentimiento y privacidad.
8. Seleccionar los próximos tres casos.
9. Fijar fechas de propuesta y video.
10. Registrar decisiones en la sección 36.

Formato recomendado para cada tarea:

```text
Tarea:
Responsable:
Fecha:
Criterio UNESCO que fortalece:
Evidencia de finalización:
Bloqueo:
```

### 13. Ruta crítica hasta el 16 de agosto

#### 27–29 de julio — congelar narrativa y operación

- Nicole completa la incorporación.
- El equipo prueba AURA 0.5 de extremo a extremo.
- Se congela el público inicial.
- Se decide si entran más integrantes.
- Se consiguen los primeros participantes.
- Se seleccionan tres casos adicionales.
- Se conecta un proyecto Supabase exclusivo de AURA o se confirma el protocolo
  CSV.

#### 30 de julio–2 de agosto — completar instrumento y facilitación

- Crear vista mínima de facilitador o plantilla agregada equivalente.
- Preparar consentimiento e instrucciones.
- Preparar encuesta breve de salida.
- Revisar accesibilidad móvil.
- Construir al menos un caso adicional.
- Ensayar el flujo del piloto.

#### 3–5 de agosto — prueba exploratoria

- Probar con 5–8 personas.
- Medir errores, abandonos, tiempo y comprensión.
- Observar sin dirigir las respuestas.
- Corregir problemas que impidan completar la misión.
- Congelar cambios grandes de arquitectura.

#### 6–10 de agosto — piloto y evidencia

- Ejecutar el piloto posible con 15–30 participantes.
- Exportar y consolidar métricas anónimas.
- Aplicar la rúbrica.
- Recoger feedback cualitativo con autorización.
- Documentar muestra, procedimiento y limitaciones.

Si no se alcanzan 15 participantes, reportar honestamente una prueba de
usabilidad exploratoria. Una muestra pequeña real es mejor que un resultado
inflado.

#### 11–12 de agosto — propuesta

- Congelar cifras.
- Completar propuesta en inglés.
- Incorporar capturas del producto.
- Revisar cada afirmación contra evidencia.
- Exportar PDF menor a 10 MB.

#### 13–14 de agosto — video

- Grabar producto y narración.
- Editar a 2:50–2:57.
- Añadir subtítulos.
- Probar enlace público sin sesión.

#### 15 de agosto — control final

- Revisar formulario, PDF, video, nombres y enlaces.
- Probar QR y demo en incógnito y móvil.
- Guardar copias de respaldo.
- No añadir funciones nuevas.

#### 16 de agosto — envío

- Objetivo interno: enviar antes de las 12:00 de Ecuador.
- Guardar confirmación y copia exacta de lo enviado.
- Verificar previamente la hora final mostrada por el portal.

### 14. Protocolo mínimo de piloto

Objetivo:

> Comprobar si jóvenes pueden completar AURA, comprender el método y aplicar
> una conducta de investigación a un caso nuevo.

Participantes objetivo:

- 18–24 años;
- estudiantes universitarios o líderes juveniles;
- usuarios frecuentes de redes y mensajería;
- español como idioma principal; incluir inglés si existe acceso real.

Secuencia:

1. Explicar que se evalúa el producto, no la inteligencia de la persona.
2. Mostrar consentimiento y política de datos.
3. Asignar un identificador de participante no identificable.
4. Completar una misión sin ayuda del facilitador.
5. Completar el reto de transferencia.
6. Aplicar encuesta de 3–5 preguntas.
7. Registrar errores y observaciones.
8. Exportar CSV.
9. Separar datos de producto y notas cualitativas.

Preguntas de salida recomendadas:

1. ¿Qué intentaba enseñarte AURA?
2. ¿En qué momento supiste qué hacer?
3. ¿Qué parte fue confusa?
4. ¿Usarías este método antes de compartir otra publicación?
5. En una escala de 1 a 5, ¿qué tan fácil fue completar la misión?

Resultados permitidos:

- número real de participantes;
- tasa de finalización;
- mediana de tiempo;
- distribución de puntuación `0–2`;
- errores observados;
- temas de feedback;
- cambios hechos después de la prueba.

No presentar causalidad ni impacto general con una muestra pequeña.

### 15. Narrativa para propuesta y jurado

Estructura de prueba:

| Promesa | Evidencia |
|---|---|
| Es una solución AMI | Método y competencias observables |
| Es clara | Flujo A-U-R-A y demo de menos de 90 segundos |
| Es innovadora | Evidencia trazable + transferencia |
| Es viable | Producto público construido por el equipo |
| Es sostenible | Casos reutilizables, IA opcional y costos controlados |
| Es inclusiva | Bilingüe, móvil, sin cuenta y bajo consumo |
| Puede impactar | Protocolo, rúbrica y AURA Circles |

Pitch de 30 segundos en español:

> Cada fact-check puede corregir una publicación, pero no necesariamente prepara
> a una persona para la siguiente. AURA es un laboratorio bilingüe de evidencia
> que entrena a jóvenes para Analizar, Ubicar, Rastrear y Actuar. La IA formula
> preguntas, pero la persona selecciona fuentes, construye una conclusión
> trazable y demuestra la habilidad en un caso nuevo. No medimos obediencia a
> una respuesta automática: medimos investigación y transferencia.

Pitch de 30 segundos en inglés:

> A fact-check can correct one post, but it does not necessarily prepare a
> learner for the next one. AURA is a bilingual evidence-training lab where
> young people Assess, Uncover, Research and Act. AI asks questions, while the
> learner selects sources, builds a traceable conclusion and applies the skill
> to a new case. We do not measure agreement with an automated verdict; we
> measure investigation and transfer.

### 16. Riesgos inmediatos y respuesta

| Riesgo | Respuesta |
|---|---|
| Construir demasiado | Proteger flujo, transferencia, piloto y video |
| No conseguir participantes | Empezar con pruebas exploratorias y redes cercanas |
| Confundir prototipo con impacto | Separar capacidades, usabilidad y resultados |
| Que la IA falle en la demo | Preguntas curadas y grabación de respaldo |
| Exponer una clave | Variables server-side y rotación antes del piloto |
| Datos dispersos entre dispositivos | Supabase dedicado o protocolo obligatorio de CSV |
| Integrante sin rol real | Aceptar solo perfiles con entregables |
| Propuesta genérica | Usar público, casos y contexto de Ecuador |
| Enseñar cinismo | Incluir contenido correcto, engañoso e incierto |
| Dependencia de Hernández Axel | Nicole lidera piloto, narrativa y operación |

### 17. Inventario de activos

| Activo | Ubicación o estado |
|---|---|
| Demo pública | `https://aura-opal-beta.vercel.app/` |
| Código | `https://github.com/AxelJhostin/AURA` |
| Guía maestra | Este archivo |
| Roadmap técnico | `docs/DEVELOPMENT_ROADMAP.md` |
| Casos guiados | `app/data/cases.ts` |
| Reto de transferencia | `app/data/transfer.ts` |
| Instrumentación | `app/lib/analytics.ts` |
| API de eventos | `app/api/aura/events/route.ts` |
| Migración de métricas | `supabase/migrations/*_aura_learning_events.sql` |
| Propuesta PDF/Word | Pendiente |
| Video pitch | Pendiente |
| Resultados de piloto | Pendiente |
| Proyecto Supabase AURA | Conectado; eventos anónimos verificados |

Nunca colocar en esta guía:

- claves de OpenAI;
- claves de Supabase;
- contraseñas;
- tokens;
- datos personales de participantes;
- correos privados sin autorización.

### 18. Próximas cinco decisiones

1. Confirmar si el equipo final será de dos, tres o cuatro personas.
2. Confirmar los primeros participantes y fecha de prueba.
3. Elegir tres casos adicionales y sus objetivos educativos.
4. Activar Supabase dedicado o congelar un protocolo CSV para el piloto.
5. Confirmar responsables y fechas de propuesta, video y revisión de inglés.

---

## Índice ejecutivo

- [Briefing de incorporación para Nicole](#briefing-de-incorporación-para-nicol)
- [0. Cómo usar esta guía](#0-cómo-usar-esta-guía)
- [Parte I — Decisión estratégica](#parte-i--decisión-estratégica)
- [Parte II — Definición del proyecto](#parte-ii--definición-del-proyecto)
- [Parte III — Producto](#parte-iii--producto)
- [Parte IV — IA, tecnología y seguridad](#parte-iv--ia-tecnología-y-seguridad)
- [Parte V — Evidencia, piloto e impacto](#parte-v--evidencia-piloto-e-impacto)
- [Parte VI — Equipo y operación](#parte-vi--equipo-y-operación)
- [Parte VII — Riesgos](#parte-vii--riesgos)
- [Parte VIII — Propuesta para UNESCO](#parte-viii--propuesta-para-unesco)
- [Parte IX — Video y demostración](#parte-ix--video-y-demostración)
- [Parte X — Preguntas del jurado](#parte-x--preguntas-del-jurado)
- [Parte XI — Controles finales](#parte-xi--controles-finales)
- [Parte XII — Fuentes](#parte-xii--fuentes)
- [Parte XIII — Control del proyecto](#parte-xiii--control-del-proyecto)

---

## 0. Cómo usar esta guía

Este documento sirve como fuente única de verdad para el equipo. No todo su contenido debe copiarse en la candidatura: contiene las decisiones, argumentos, especificaciones, guiones y controles necesarios para producir una propuesta breve y convincente.

Orden recomendado de uso:

1. Leer las secciones 1–5 para acordar qué es AURA y qué problema resuelve.
2. Congelar el MVP con las secciones 6–12.
3. Ejecutar el piloto usando las secciones 13–15.
4. Distribuir responsabilidades con las secciones 16–18.
5. Construir la propuesta y el video con las secciones 21–25.
6. Aplicar los controles finales de las secciones 26–28.

### Reglas no negociables

- No afirmar que AURA es el primer entrenador socrático con IA contra la desinformación.
- No afirmar que AURA verifica la verdad de forma automática.
- No inventar alianzas, usuarios, resultados, testimonios o porcentajes.
- No construir funciones fuera del MVP mientras falte una función central.
- No permitir que la IA se presente como autoridad final.
- No medir aprendizaje únicamente por cambio de opinión.
- No enseñar desconfianza generalizada: AURA debe distinguir contenido verdadero, falso, engañoso e incierto.
- No presentar una arquitectura compleja como sustituto de un prototipo funcional.
- No enviar la candidatura en el último minuto.

---

# Parte I — Decisión estratégica

## 1. Veredicto ejecutivo

AURA tiene una base excelente porque responde directamente a tres áreas de la convocatoria:

- Inteligencia artificial y Alfabetización Mediática e Informacional.
- Educación en AMI.
- Participación juvenil.

Su intuición central también es valiosa: una herramienta que entrega un veredicto puede resolver un contenido particular, pero no necesariamente enseña a investigar el siguiente. AURA debe atacar esa brecha de aprendizaje.

Sin embargo, el concepto original de “entrenador socrático con IA que no da respuestas” ya tiene un competidor muy cercano: [TITAN](https://www.titanthinking.eu/), un proyecto europeo financiado que utiliza diálogo socrático, publicaciones reales o simuladas, microlessons, evaluación del progreso y recursos para educadores.

Por ello, la estrategia ganadora es reposicionar AURA:

> AURA no será principalmente un chatbot. Será un laboratorio de evidencia donde los jóvenes realizan acciones verificables de investigación, producen una conclusión trazable y demuestran si pueden transferir la habilidad a un caso nuevo.

### La fórmula ganadora

**Producto funcional + público concreto + método memorable + evidencia de aprendizaje + comunidad juvenil + IA responsable.**

### Puntuación estratégica estimada

Esta tabla no representa una calificación oficial; es una herramienta interna para detectar debilidades.

| Criterio de UNESCO | Idea original | Objetivo AURA optimizada | Evidencia que debe presentarse |
|---|---:|---:|---|
| Coherencia con tema y AMI | 9/10 | 10/10 | Correspondencia explícita con competencias AMI y “Play Your Part”. |
| Claridad de presentación | 7/10 | 9/10 | Explicación de una frase, recorrido de cuatro pasos y demo de tres minutos. |
| Innovación y creatividad | 5/10 | 9/10 | Laboratorio de evidencia, lectura lateral, transferencia y acción comunitaria. |
| Viabilidad y sostenibilidad | 6/10 | 9/10 | MVP pequeño, funcional, con costos controlados y plan de expansión. |
| Impacto e inclusión | 6/10 | 9/10 | Público concreto, piloto real, accesibilidad y círculos juveniles. |
| Total estimado | 33/50 | 46/50 | La ejecución real determinará la diferencia. |

Nadie puede garantizar el premio. Esta estrategia busca maximizar de manera honesta la probabilidad de competir al nivel de los ganadores.

---

## 2. Lo que realmente busca UNESCO

La [convocatoria oficial de UNESCO Youth Hackathon 2026](https://www.unesco.org/en/articles/unesco-youth-hackathon-2026) señala cinco criterios:

1. Consistencia con el tema y los principios AMI.
2. Claridad de la presentación, capacidades, diversidad y potencial del equipo.
3. Innovación y creatividad.
4. Viabilidad y sostenibilidad.
5. Impacto e inclusión.

La propuesta oficial debe contener:

- Integrantes del equipo.
- Problema.
- Objetivos.
- Público.
- Prototipo o concepto.
- Sostenibilidad.
- Creatividad.
- Viabilidad.

Los entregables son:

- Propuesta en PDF o Word, máximo 10 MB.
- Video pitch público, máximo tres minutos.

La propuesta puede enviarse en inglés. La recomendación estratégica es presentar todo en inglés impecable y mostrar que el producto funciona en inglés y español.

### Lecciones de ganadores anteriores

La edición de 2025 recibió 1.286 propuestas de 138 países. Sus ganadores muestran patrones útiles:

- **CLICKBAIT:** juego de detectives basado en escenarios reales y debate entre pares.
- **MIL Point:** combinación de aplicación, campañas móviles, talleres y comunidad.
- **Youth Council:** participación juvenil institucional y concreta.
- **Mentes Libres:** público desatendido, contexto local y combinación de intervención offline y herramientas digitales.

Fuente: [Ganadores UNESCO Youth Hackathon 2025](https://www.unesco.org/en/articles/global-youth-lead-way-media-and-information-literacy-meet-unesco-hackathon-2025-winners?s=08).

En 2024, MAHW ganó con aproximadamente el 60 % de sus funciones principales desarrollado, lo cual indica que la ejecución demostrable importa. MILBoard ganó con una combinación tangible de juego físico, aplicación y educación entre pares. Fuente: [Ganadores UNESCO Youth Hackathon 2024](https://www.unesco.org/en/articles/winners-unescos-youth-hackathon-2024-shape-future-media-and-information-literacy).

En 2023, el programa YMLAP destacó por convertir a jóvenes en embajadores que educaban a sus pares y comunidades. Fuente: [Proyectos ganadores 2023](https://www.unesco.org/en/articles/youth-hackathon-winners-design-impactful-projects-mil).

### Inferencias para AURA

- Una aplicación genérica no es suficiente.
- Un público específico es más convincente que “todo el mundo”.
- La participación juvenil debe existir en el mecanismo del proyecto, no solo en la edad de los usuarios.
- Un prototipo funcional y un piloto pequeño superan a una lista extensa de funciones futuras.
- El impacto comunitario y la posibilidad de adaptación local son ventajas.
- La propuesta debe mostrar cómo se ejecutará después del hackathon.

---

## 3. Tesis estratégica de AURA

### Problema profundo

La desinformación no es solamente un problema de acceso a verificaciones. Es un problema de hábitos:

- Reaccionar antes de investigar.
- Evaluar por apariencia o popularidad.
- Permanecer dentro de la publicación original.
- Confundir emoción con evidencia.
- Aceptar una referencia vaga a “expertos”.
- Buscar únicamente información que confirme la primera impresión.
- Delegar la decisión a un algoritmo o autoridad externa.

### Brecha

Muchas soluciones corrigen un contenido; pocas permiten observar si la persona aprendió un comportamiento reutilizable.

### Intervención

AURA convierte una publicación en una misión breve en la que el usuario:

1. Se detiene.
2. Formula la afirmación verificable.
3. Identifica fuente y contexto.
4. Sale del contenido para investigar lateralmente.
5. Compara evidencia.
6. Explica qué sabe, qué no sabe y qué acción tomará.
7. Recibe una misión nueva para comprobar transferencia.

### Resultado buscado

El resultado no es “más desconfianza”. Es mejor discernimiento:

- Reconocer contenido engañoso.
- Conservar confianza en contenido bien sustentado.
- Expresar incertidumbre cuando no hay evidencia suficiente.
- Compartir de manera responsable.

### Teoría de cambio

```text
Si una persona:
  se detiene antes de compartir,
  practica lectura lateral con contenido realista,
  recibe preguntas adaptadas,
  debe justificar su decisión con fuentes,
  y repite la habilidad en un caso nuevo,

entonces:
  mejorará la calidad de su razonamiento,
  calibrará mejor su confianza,
  y tendrá mayor capacidad para actuar responsablemente
  ante futuras publicaciones.
```

---

## 4. Posicionamiento y competencia

### Mapa competitivo

| Solución o enfoque | Aporte | Límite frente a AURA |
|---|---|---|
| Fact-checkers | Verifican afirmaciones concretas. | El usuario puede recibir el resultado sin aprender el proceso. |
| Etiquetas verdadero/falso | Respuesta rápida. | Simplifican ambigüedad y pueden aumentar dependencia. |
| TITAN | Entrenamiento socrático, microlessons y evaluación. | AURA debe diferenciarse mediante acciones de investigación, trazabilidad, transferencia y contexto latinoamericano. |
| Bad News / prebunking games | Enseñan tácticas de manipulación. | No necesariamente entrenan la investigación de un contenido elegido por el usuario. |
| Civic Online Reasoning | Enseña lectura lateral con evidencia pedagógica. | AURA lo convierte en una experiencia breve, adaptativa, bilingüe y comunitaria. |
| MAHW | IA, fact-checking y cuestionarios. | AURA evita el veredicto automático y mide el proceso de razonamiento. |
| CLICKBAIT / MILBoard | Aprendizaje social y gamificado. | AURA ofrece práctica individual trazable y continuidad mediante misiones de transferencia. |

### Diferenciación defendible

AURA combina:

1. Pausa de precisión antes de cualquier ayuda.
2. Método bilingüe memorable A-U-R-A.
3. Acciones de lectura lateral, no solo conversación.
4. Mapa de evidencia con fuentes trazables.
5. Separación estricta entre señales de IA y evidencia comprobada.
6. Casos verdaderos, engañosos e inciertos para evitar cinismo.
7. Medición de calidad del razonamiento.
8. Misión de transferencia y refuerzo posterior.
9. Tarjeta de Evidencia creada por el participante.
10. AURA Circles para educación entre pares.
11. Diseño móvil, bilingüe y de bajo consumo de datos.

### Lo que no debe afirmarse

Evitar:

> AURA is the first AI-powered Socratic coach against misinformation.

Usar:

> AURA is a bilingual evidence-training lab that combines Socratic guidance with observable lateral-reading actions, transfer assessment and youth-led community learning.

---

# Parte II — Definición del proyecto

## 5. Identidad del proyecto

### Nombre

**AURA**

### Método en español

- **A — Analiza:** identifica la afirmación y registra tu evaluación inicial.
- **U — Ubica:** descubre quién creó el contenido, con qué propósito y qué contexto falta.
- **R — Rastrea:** sal de la publicación, busca la fuente original y compara evidencia independiente.
- **A — Actúa:** decide responsablemente y explica tu conclusión con evidencia.

### Método en inglés

- **A — Assess:** identify the claim and record your initial judgment.
- **U — Uncover:** examine the creator, purpose, language and missing context.
- **R — Research:** leave the post, trace the original source and corroborate evidence.
- **A — Act:** make and explain a responsible sharing decision.

### One-liner en español

> AURA transforma publicaciones virales en misiones de investigación de tres a cinco minutos donde los jóvenes aprenden a rastrear fuentes, comparar evidencia y decidir responsablemente antes de compartir.

### One-liner en inglés

> AURA turns viral posts into three-to-five-minute evidence missions where young people learn to trace sources, compare evidence and make responsible sharing decisions.

### Mensajes de marca

Principal:

> De la reacción a la evidencia.

Secundarios:

- No tomes prestado un veredicto. Construye criterio.
- Investiga la siguiente publicación, no solo la anterior.
- La IA pregunta; la evidencia decide.
- Pausa. Rastrea. Comprueba. Actúa.

### Personalidad

- Serena, no alarmista.
- Curiosa, no acusatoria.
- No partidista.
- Transparente sobre incertidumbre.
- Respetuosa ante errores.
- Clara y accesible.

---

## 6. Público y contexto

### Público primario

Jóvenes de 18–24 años que cursan sus primeros años universitarios o participan en organizaciones juveniles en Ecuador y que consumen contenido principalmente mediante:

- WhatsApp.
- TikTok.
- Instagram.
- Sitios de noticias.
- Comunidades universitarias.

### Público secundario

- Facilitadores de organizaciones juveniles.
- Docentes universitarios.
- Estudiantes de comunicación, periodismo, negocios y tecnología.
- Bibliotecas y programas de ciudadanía digital.

### Usuario principal

**Perfil:** estudiante universitario de primer o segundo año.  
**Dispositivo:** teléfono Android de gama media.  
**Comportamiento:** recibe titulares, capturas y mensajes reenviados durante el día.  
**Problema:** tiene poco tiempo y no sabe qué pasos concretos seguir para investigar.  
**Motivación:** evitar compartir información engañosa sin tener que convertirse en verificador profesional.  
**Barreras:** costo de datos, fatiga, exceso de texto, desconfianza hacia etiquetas ideológicas y poca experiencia buscando fuentes primarias.

### Usuario facilitador

**Perfil:** joven líder, docente o coordinador de organización.  
**Necesidad:** actividad breve, replicable y medible.  
**Valor:** puede lanzar una misión con código o enlace y observar resultados agregados sin acceder a perfiles políticos.

### Por qué empezar en Ecuador

- Permite ejecutar un piloto real con acceso directo del equipo.
- Ofrece un ecosistema informativo donde WhatsApp y redes sociales son canales importantes.
- La oferta inicial bilingüe facilita expansión regional.
- Un contexto concreto permite diseñar casos culturalmente pertinentes.

No afirmar que Ecuador es “el país más afectado” sin datos sólidos. El argumento debe basarse en acceso, pertinencia y capacidad de implementación.

### Expansión

1. Piloto universitario en Ecuador.
2. Paquetes de casos para organizaciones juveniles de América Latina.
3. Adaptación con facilitadores locales en otros países.
4. Biblioteca internacional bilingüe.
5. Idiomas adicionales mediante alianzas y revisión humana.

---

## 7. Objetivos

### Objetivo general

Fortalecer la capacidad de jóvenes para investigar contenido digital de manera independiente, trazable y responsable mediante misiones breves de Alfabetización Mediática e Informacional apoyadas por IA.

### Objetivos específicos

1. Introducir una pausa de precisión antes de reaccionar o compartir.
2. Enseñar a formular afirmaciones verificables.
3. Entrenar lectura lateral y búsqueda de fuentes originales.
4. Diferenciar evidencia, interpretación, opinión e incertidumbre.
5. Identificar técnicas de manipulación sin confundirlas automáticamente con falsedad.
6. Mejorar la calibración entre confianza y calidad de evidencia.
7. Evaluar transferencia a contenido no visto.
8. Facilitar educación entre pares mediante AURA Circles.
9. Ofrecer una herramienta bilingüe, móvil y accesible.
10. Preservar autonomía, privacidad y libertad de expresión.

### Indicadores

| Objetivo | Indicador |
|---|---|
| Pausar | Porcentaje que completa evaluación inicial antes de ver ayudas. |
| Identificar la afirmación | Puntaje de formulación verificable. |
| Leer lateralmente | Apertura y uso de fuentes externas relevantes. |
| Corroborar | Cantidad y calidad de fuentes independientes utilizadas. |
| Calibrar confianza | Diferencia entre confianza declarada y calidad de la conclusión. |
| Actuar responsablemente | Calidad de justificación de compartir/no compartir/pedir evidencia. |
| Transferir | Rendimiento en un caso nuevo sin ayuda completa. |
| Escalar | Facilitadores, círculos y paquetes implementados. |

---

# Parte III — Producto

## 8. Recorrido central

La experiencia debe completarse en tres a cinco minutos para una misión normal y en seis a ocho minutos para una misión profunda.

### Pantalla 1 — Entrada

Opciones del MVP:

- Elegir una misión preparada.
- Pegar un titular o fragmento de texto.

No incluir inicialmente extracción arbitraria de cualquier URL ni análisis de video.

### Pantalla 2 — A: Analiza

Preguntas:

1. ¿Cuál es la afirmación principal que podría comprobarse?
2. ¿Qué tan confiable parece?
3. ¿La compartirías?
4. ¿Qué evidencia crees que la respalda?

Escala de confianza:

- Muy baja.
- Baja.
- No estoy seguro.
- Alta.
- Muy alta.

El usuario no ve análisis de IA hasta responder.

### Pantalla 3 — U: Ubica

AURA marca posibles señales:

- Autor o fuente no identificada.
- Autoridad vaga.
- Lenguaje emocional.
- Urgencia artificial.
- Afirmación absoluta.
- Falta de fecha.
- Falta de contexto.
- Estadística sin base de comparación.
- Correlación presentada como causalidad.
- Ataque personal.
- Falso dilema.
- Suplantación posible.

Cada señal debe escribirse como hipótesis:

> “Posible autoridad vaga: la publicación menciona ‘expertos’, pero no los identifica.”

Nunca:

> “La publicación es falsa porque menciona expertos.”

Preguntas socráticas:

- ¿Quién está detrás de esta publicación?
- ¿Cuál podría ser su propósito?
- ¿Qué dato falta para evaluar la afirmación?
- ¿El lenguaje emocional reemplaza o acompaña a la evidencia?
- ¿Qué parte es observación y qué parte es interpretación?

### Pantalla 4 — R: Rastrea

Este es el núcleo diferenciador.

El usuario realiza acciones:

1. Abrir información sobre la fuente.
2. Localizar una fuente primaria.
3. Comparar dos fuentes independientes.
4. Revisar fecha y contexto.
5. Seleccionar qué evidencia apoya, contradice o no resuelve la afirmación.

Estados del mapa:

- Encontrado.
- Ausente.
- Contradictorio.
- No concluyente.
- Requiere más verificación.

El Mapa de Evidencia debe contener:

| Dimensión | Pregunta |
|---|---|
| Afirmación | ¿Qué exactamente se está afirmando? |
| Fuente | ¿Quién publicó primero y qué sabemos de esa fuente? |
| Evidencia primaria | ¿Existe documento, estudio, dato o registro original? |
| Contexto | ¿Qué información cambia la interpretación? |
| Corroboración | ¿Qué fuentes independientes coinciden o discrepan? |
| Incertidumbre | ¿Qué todavía no puede concluirse? |

### Pantalla 5 — A: Actúa

Opciones:

- Compartir con confianza.
- Compartir con contexto.
- No compartir todavía.
- Pedir evidencia.
- Corregir respetuosamente.
- Reportar suplantación o contenido manipulado.
- Guardar para investigar después.

Preguntas:

1. ¿Cuál es ahora tu conclusión?
2. ¿Qué evidencia tuvo más peso?
3. ¿Qué sigue siendo incierto?
4. ¿Qué acción tomarás y por qué?

### Pantalla 6 — Tarjeta de Evidencia

Debe mostrar:

- Afirmación.
- Conclusión del usuario.
- Nivel de confianza.
- Fuentes utilizadas.
- Evidencia principal.
- Incertidumbre pendiente.
- Acción.
- Habilidad AMI practicada.

No debe parecer una certificación oficial de veracidad.

### Pantalla 7 — Transferencia

Al final de varias misiones, AURA presenta un caso nuevo con menos ayudas. El usuario debe demostrar que puede aplicar los pasos por sí mismo.

### Pantalla 8 — Refuerzo

Siete días después:

- Misión de 60–90 segundos.
- Técnica practicada anteriormente.
- Nuevo tema y formato.
- Comparación con rendimiento previo.

---

## 9. Taxonomía educativa inicial

### Técnicas de manipulación

- Autoridad vaga.
- Activación emocional.
- Urgencia y escasez.
- Falso dilema.
- Polarización.
- Ataque personal.
- Teoría conspirativa sin evidencia.
- Selección interesada de datos.
- Estadística sin denominador.
- Correlación presentada como causalidad.
- Suplantación de identidad.
- Falsa atribución.
- Titular incongruente.
- Imagen o cita fuera de contexto.
- Falsa equivalencia.

### Problemas de calidad informativa

- Fuente ausente.
- Fecha ausente.
- Evidencia primaria ausente.
- Cobertura circular.
- Referencias que no apoyan la afirmación.
- Mezcla de hechos y opinión.
- Edición que oculta contexto.
- Información desactualizada.
- Incertidumbre presentada como certeza.

### Competencias AMI

- Formular una necesidad de información.
- Acceder y recuperar información.
- Evaluar fuente y evidencia.
- Interpretar contexto.
- Comparar perspectivas.
- Usar y compartir de manera ética.
- Crear contenido responsable.
- Comprender el papel de IA y plataformas.

---

## 10. Diseño de casos

### Principio de balance

La biblioteca debe incluir:

- Contenido verdadero bien sustentado.
- Contenido engañoso.
- Contenido con elementos ciertos y contexto manipulado.
- Contenido cuya conclusión correcta es “no hay evidencia suficiente”.
- Opinión claramente identificada.
- Sátira claramente identificada.

Esto evita que el usuario aprenda que “todo lo emocional es falso” o que “desconfiar siempre” equivale a pensar críticamente.

### MVP recomendado: seis casos

| Caso | Tipo | Habilidad principal | Uso |
|---|---|---|---|
| 1 | Salud, cifra precisa y autoridad vaga | Rastrear qué midió la fuente | Guiado — implementado |
| 2 | Video real con fecha y lugar alterados | Verificar procedencia y contexto | Guiado — implementado |
| 3 | Noticia verdadera con titular emocional | No confundir emoción con falsedad | Guiado — pendiente |
| 4 | Estadística real sin denominador | Contextualizar datos | Guiado — pendiente |
| 5 | Publicación institucional auténtica | Reconocer evidencia suficiente | Transferencia — pendiente |
| 6 | Enlace urgente de becas que pide datos | Priorizar fuente oficial y procedencia | Transferencia — implementado |

### Ficha obligatoria de cada caso

```yaml
case_id:
title:
language:
topic:
learning_objective:
content_shown_to_user:
claim:
ground_truth_category: supported | misleading | unsupported | uncertain
primary_source:
independent_sources:
known_context:
manipulation_signals:
common_user_errors:
socratic_questions:
evidence_map:
expected_actions:
knowledge_card:
reviewer:
review_date:
licenses_and_permissions:
```

### Criterios de calidad

- La afirmación debe ser investigable.
- Las fuentes deben estar disponibles públicamente.
- La fuente primaria debe ser distinguible de comentarios secundarios.
- La respuesta no debe depender de una postura partidista.
- Debe existir una explicación clara de la incertidumbre.
- Las fuentes deben revisarse antes de grabar el video.
- La misión debe poder completarse en móvil.
- Se debe verificar que los enlaces sigan funcionando.

### Caso de demo recomendado

No usar como demostración principal una afirmación caricaturesca como “el café previene todas las enfermedades”. Elegir una manipulación más sutil:

- Una cifra verdadera sin población base.
- Un titular que exagera una conclusión real.
- Una cita auténtica recortada de forma que cambia su sentido.

La demo debe incluir una fuente primaria, una fuente secundaria fiable y una fuente irrelevante o circular que el usuario deba descartar.

---

## 11. Alcance del MVP

Esta sección define el alcance objetivo para la candidatura. El estado real se
encuentra en la tabla del briefing de incorporación. A 27 de julio, AURA tiene
dos casos guiados y un reto de transferencia; las capacidades pendientes no
deben presentarse como terminadas.

### Incluido en el alcance objetivo

- Aplicación web móvil.
- Español e inglés.
- Método A-U-R-A.
- Seis casos curados en total: cuatro misiones guiadas y dos retos de
  transferencia.
- Evaluación inicial.
- Tres preguntas socráticas.
- Anotaciones de señales.
- Mapa de Evidencia.
- Fuentes preparadas para los casos.
- Reflexión y acción.
- Tarjeta de Evidencia.
- Misión de transferencia.
- Registro anónimo de métricas.
- Vista mínima de facilitador.
- Modo demo resistente a fallos.

### No incluido

- Deepfake detection.
- Análisis de video.
- OCR de cualquier captura.
- Verificación automática universal.
- Integración con todas las redes sociales.
- Scraping de sitios arbitrarios.
- Entrada libre para pegar contenido privado o arbitrario.
- Aplicación nativa.
- Extensión de navegador.
- Perfil psicológico o político.
- Ranking público.
- Gamificación compleja.
- Dashboard completo.
- Monitoreo masivo.

### Definition of Done

El MVP está terminado cuando:

1. Un usuario puede completar una misión de extremo a extremo en móvil.
2. Las cuatro etapas se entienden sin explicación oral.
3. Las fuentes se pueden abrir y clasificar.
4. La IA puede fallar sin romper la experiencia.
5. El usuario produce una Tarjeta de Evidencia.
6. Se registra una métrica de transferencia.
7. Existen seis casos revisados en total.
8. Español e inglés funcionan.
9. El equipo puede demostrarlo en menos de 90 segundos.
10. Se ha probado con usuarios reales.

### Función estrella

Si el tiempo escasea, proteger:

> El usuario debe rastrear y seleccionar evidencia; la IA no debe hacerlo todo por él.

---

# Parte IV — IA, tecnología y seguridad

## 12. Función de la IA

### Implementación real en AURA 0.7.0

La IA actual tiene un alcance deliberadamente estrecho: recibe el identificador
del caso, la etapa, el idioma y opciones codificadas ya seleccionadas. Devuelve
una pregunta socrática breve para profundizar el razonamiento. No recibe texto
libre del participante, no busca fuentes, no genera la Tarjeta de Evidencia y no
calcula la puntuación de transferencia.

La ruta funciona exclusivamente en el servidor. La clave no llega al navegador,
las respuestas se solicitan con almacenamiento desactivado y cada caso tiene una
pregunta de respaldo. Este alcance es suficiente para demostrar el uso
responsable de IA sin convertirla en una autoridad de verdad.

Las capacidades descritas a continuación representan límites y posibles
extensiones, no todas están implementadas en la versión 0.7.0.

### La IA sí puede

- Extraer una afirmación candidata.
- Identificar posibles señales de lenguaje o razonamiento.
- Formular preguntas socráticas.
- Adaptar dificultad.
- Resumir la reflexión del usuario.
- Sugerir una Tarjeta de Conocimiento.
- Indicar que no tiene suficiente información.

### La IA no puede

- Declarar verdad universal.
- Inventar fuentes.
- Presentar una probabilidad de veracidad sin fundamento.
- Inferir ideología.
- Decidir qué contenido debe censurarse.
- Sustituir fuentes primarias.
- Penalizar al usuario por una postura.
- Tratar una señal emocional como prueba de falsedad.

### Contrato de salida

La respuesta debe ser estructurada:

```json
{
  "claim_candidate": {
    "text": "string",
    "confidence": "low | medium | high"
  },
  "signals": [
    {
      "type": "vague_authority",
      "excerpt": "string",
      "explanation": "string",
      "certainty": "possible | likely",
      "verification_question": "string"
    }
  ],
  "socratic_questions": [
    {
      "question": "string",
      "skill": "source | evidence | context | language | corroboration",
      "purpose": "string"
    }
  ],
  "limitations": ["string"],
  "must_abstain_from_verdict": true
}
```

### Prompt de sistema conceptual

```text
You are AURA, a Media and Information Literacy learning coach.
Your job is to help the learner investigate, not to decide what they must believe.

Rules:
1. Ask before explaining.
2. Separate observable text from interpretation.
3. Describe manipulation signals as possibilities, not proof of falsehood.
4. Never invent a source, author, date, study or fact.
5. Do not infer political ideology or personal traits.
6. State uncertainty explicitly.
7. Encourage lateral reading and primary-source tracing.
8. Do not issue a true/false verdict.
9. Return only the required structured output.
10. If evidence is unavailable, say what would need to be checked.
```

### Modo degradado

Si la API falla:

- Los casos curados deben tener preguntas predefinidas.
- Las señales deben poder cargarse desde la ficha del caso.
- La demo debe continuar.
- Mostrar un mensaje sereno, no un error técnico.

### Evaluación interna de IA

Crear un conjunto de al menos 20 fragmentos:

- Verdaderos con lenguaje emocional.
- Falsos sin lenguaje emocional.
- Opinión.
- Sátira.
- Autoridad vaga.
- Estadísticas.
- Ambigüedad.
- Contenido político desde posiciones diferentes.

Revisar:

- Falsas acusaciones.
- Sesgo.
- Invención.
- Exceso de confianza.
- Preguntas genéricas.
- Calidad bilingüe.
- Cumplimiento del esquema.

---

## 13. Arquitectura técnica recomendada

El objetivo es minimizar componentes.

AURA 0.7.0 ya sigue esta decisión: una sola aplicación Next.js desplegada en
Vercel contiene interfaz, rutas de servidor, motor de casos y modo degradado. No
existe un segundo backend que deba desplegarse o mantenerse.

### Frontend

- Next.js.
- TypeScript.
- CSS utilitario o sistema de componentes accesibles.
- Aplicación web progresiva.
- Internacionalización.
- Diseño mobile-first.

### Backend

Opción recomendada para hackathon:

- Rutas API dentro de la aplicación.
- Servicio de IA.
- Base de datos PostgreSQL administrada o almacenamiento ligero.
- Registro anónimo de eventos.

Evitar separar FastAPI y Next.js salvo que exista una razón técnica fuerte y el equipo ya domine ambos entornos. Dos servicios aumentan despliegue, observabilidad y puntos de fallo.

### Componentes

```text
Navegador móvil
    |
    v
Aplicación web
    |
    +--> Motor de misiones curadas
    |
    +--> Servicio de preguntas de IA
    |
    +--> Registro anónimo de progreso
    |
    +--> Generador de Tarjeta de Evidencia
```

### Entidades mínimas

```text
Case
  id
  language
  content
  claim
  learning_objective
  evidence_sources
  predefined_questions
  review_status

Session
  id
  anonymous_participant_id
  case_id
  started_at
  completed_at

Assessment
  initial_confidence
  initial_share_decision
  initial_reason
  final_confidence
  final_action
  final_reason
  evidence_selected
  skill_scores

FacilitatorGroup
  id
  code
  aggregate_metrics
```

### Endpoints implementados

```text
GET  /                       experiencia completa
POST /api/aura/coach         pregunta socrática server-side
POST /api/aura/events        evento anónimo validado
```

Los casos se incorporan al build desde archivos TypeScript revisables. No existe
todavía una API pública de casos, sesiones o facilitadores.

### Endpoints conceptuales posteriores

```text
GET  /api/cases
GET  /api/cases/:id
POST /api/session
POST /api/analyze
POST /api/session/:id/step
POST /api/session/:id/complete
GET  /api/facilitator/:code/summary
```

### Requisitos no funcionales

- Carga móvil rápida.
- Interfaz usable con teclado.
- Contraste suficiente.
- No depender de imágenes pesadas.
- Enlaces de fuentes visibles.
- Estado de progreso persistente durante la misión.
- Reintentos controlados de IA.
- Límites de entrada.
- Protección contra inyección de instrucciones en contenido pegado.
- Registro de errores sin almacenar contenido sensible.

### Demo segura

- Tener una versión desplegada.
- Tener grabación de respaldo.
- Tener casos precomputados.
- Tener capturas y video local.
- Probar en incógnito.
- Probar sin sesión previa.
- Probar en red móvil.

---

## 14. Privacidad, ética y derechos

La [Guía de UNESCO sobre IA generativa en educación](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research) recomienda un enfoque centrado en las personas, con privacidad, validación ética, supervisión humana y diseño pedagógico.

### Principios

- Autonomía humana.
- Transparencia.
- Explicabilidad proporcional.
- Privacidad.
- No discriminación.
- Supervisión humana.
- Trazabilidad.
- Libertad de expresión.
- Inclusión lingüística y cultural.

### Política del MVP

- No pedir nombre para completar una misión.
- No almacenar el contenido pegado después del procesamiento, salvo consentimiento específico.
- Advertir que se eliminen teléfonos, nombres, imágenes privadas y datos personales.
- No usar entradas de usuarios para entrenamiento.
- No publicar Tarjetas de Evidencia automáticamente.
- No registrar ideología.
- No crear puntuaciones de credibilidad personal.
- Permitir borrar sesión local.
- Mostrar claramente qué parte fue generada por IA.

### Mensaje previo a pegar contenido

> No incluyas nombres, números de teléfono, conversaciones privadas, información médica ni otros datos personales. AURA es una herramienta educativa y no una línea de denuncia o verificación oficial.

### Riesgos de libertad de expresión

AURA debe diferenciar:

- Hecho verificable.
- Interpretación.
- Opinión.
- Sátira.
- Predicción.
- Experiencia personal.

No se debe etiquetar una opinión como falsa por no tener fuentes. Se puede preguntar qué evidencia sustenta una afirmación factual dentro de ella.

### Uso de contenido

- Preferir ejemplos propios, licenciados o de dominio público.
- Citar fuente y fecha.
- Usar fragmentos mínimos necesarios.
- No republicar artículos completos.
- Documentar licencias.

---

# Parte V — Evidencia, piloto e impacto

## 15. Fundamento de investigación

### Lectura lateral

La investigación de Civic Online Reasoning muestra que los verificadores profesionales abandonan temporalmente el sitio original para investigar la fuente y el contexto. Una intervención escolar basada en lectura lateral mejoró significativamente la evaluación de credibilidad. Fuente: [Lateral Reading on the Open Internet](https://cor.stanford.edu/research/lateral-reading-on-the-open-internet/).

Implicación:

> AURA debe pedir acciones observables fuera de la publicación, no limitarse a una conversación.

### Inoculación y prebunking

El juego Bad News mostró mejoras en reconocimiento de técnicas de manipulación. Fuente: [Fake news game confers psychological resistance](https://www.nature.com/articles/s41599-019-0279-9).

Sin embargo, identificar manipulación no siempre mejora por sí solo la distinción entre verdad y falsedad. Una serie de cinco estudios encontró mejores resultados cuando la inoculación se combinó con una intervención que dirigía atención hacia la precisión. Fuente: [Nature Human Behaviour](https://www.nature.com/articles/s41562-024-02023-2).

Implicación:

> AURA combina pausa de precisión, técnica y evaluación de evidencia.

### Refuerzo

Los efectos pueden debilitarse; los refuerzos posteriores pueden ayudar a mantenerlos. Fuente: [Psychological booster shots targeting memory](https://www.nature.com/articles/s41467-025-57205-x).

Implicación:

> AURA incluye una misión breve después de siete días.

### Riesgo de cinismo

Una intervención puede hacer que el usuario desconfíe tanto de contenido falso como verdadero. Por eso:

- Los casos deben ser balanceados.
- La métrica principal debe ser discernimiento, no desconfianza.
- Se debe premiar reconocer evidencia suficiente.

---

## 16. Diseño del piloto

### Objetivo

Comprobar:

- Comprensión.
- Usabilidad.
- Calidad de razonamiento.
- Transferencia inicial.
- Interés de facilitadores.

### Tamaño

Objetivo ambicioso pero viable:

- 30–50 participantes.

Plan mínimo si el equipo es de dos personas:

- 20–30 participantes.

No describir la muestra como representativa de Ecuador.

### Reclutamiento

- Contactos universitarios.
- Compañeros de clase.
- Organizaciones juveniles.
- Clubes académicos.
- Redes personales.

No utilizar logos ni nombres de instituciones como aliados sin autorización.

### Diseño

1. Consentimiento breve.
2. Datos demográficos mínimos y opcionales en un instrumento separado.
3. Una misión AURA guiada.
4. Un caso de transferencia sin guía.
5. Encuesta de usabilidad.
6. Conversación breve o pregunta abierta.
7. Misión de refuerzo a los siete días, solo si el calendario lo permite.

### Datos

- Rango de edad.
- País.
- Tipo de participante.
- Frecuencia de uso de redes.
- Evaluación inicial.
- Evidencia seleccionada.
- Acciones realizadas.
- Evaluación final.
- Tiempo.
- Respuesta de transferencia.
- Satisfacción.

No pedir afiliación política.

Los datos demográficos no forman parte del registro técnico de AURA 0.5. Si el
piloto los necesita, deben recopilarse en un formulario separado, con
consentimiento, categorías amplias y sin una clave que permita unirlos con la
sesión técnica salvo que el protocolo lo justifique.

### Rúbrica de razonamiento

Cada dimensión vale 0–3.

| Dimensión | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Afirmación | No identifica | Repite titular | Formula parcialmente | Formula una afirmación verificable precisa |
| Fuente | No considera | Menciona dominio | Investiga autor/editor | Rastrea fuente original y contexto |
| Evidencia | Sin evidencia | Usa apariencia/popularidad | Usa una fuente relevante | Usa evidencia primaria y distingue límites |
| Corroboración | No compara | Repite la misma cadena | Compara fuentes | Compara fuentes independientes y explica discrepancias |
| Incertidumbre | Certeza injustificada | Duda genérica | Reconoce información faltante | Calibra confianza y especifica qué falta |
| Acción | Reacción automática | Decisión sin razón | Acción prudente | Acción proporcional y justificada |

Puntaje máximo: 18.

### Métricas

#### Ganancia de razonamiento

```text
Puntaje final - puntaje inicial
```

#### Transferencia

```text
Puntuación automática actual: 0–2
```

La puntuación `0–2` evalúa el primer movimiento y su justificación. La rúbrica
manual `0–18` puede aplicarse por un facilitador para una evaluación educativa
más rica, pero no debe presentarse como calculada automáticamente por la versión
0.7.0.

#### Calibración

Comparar confianza con calidad real de la conclusión. No reducirla a una fórmula única si el conjunto es pequeño; mostrar ejemplos.

#### Calidad de compartir

- Comparte contenido sustentado con contexto.
- No comparte contenido engañoso.
- Suspende juicio cuando es incierto.

#### Usabilidad

- Tasa de finalización.
- Tiempo mediano.
- Pregunta más abandonada.
- Porcentaje que entiende el método AURA.

### Preguntas de salida

Escala 1–5:

- AURA me ayudó a saber qué investigar.
- Las preguntas me hicieron pensar sin decirme qué creer.
- Las fuentes fueron comprensibles.
- Podría usar estos pasos en otra publicación.
- Recomendaría esta actividad.

Abiertas:

- ¿Qué parte fue más útil?
- ¿Qué fue confuso?
- ¿Qué cambiarías?
- Describe una situación donde usarías AURA.

### Reporte

Mostrar:

- Participantes reales.
- Tasa de finalización.
- Mediana de duración.
- Cambio de la rúbrica.
- Transferencia.
- Dos o tres citas anónimas.
- Limitaciones.

Nunca utilizar:

> AURA reduces misinformation by 80%.

Salvo que exista un diseño y evidencia capaz de sostenerlo.

Usar:

> In an initial usability pilot with N participants, users improved their evidence-reasoning scores from X to Y and Z% successfully transferred at least four AURA behaviors to a new case. These preliminary results guide our next controlled evaluation.

---

## 17. AURA Circles

### Propósito

Convertir a jóvenes en facilitadores y creadores responsables de experiencias AMI.

### Formato

- Sesión de 30–45 minutos.
- Código o enlace compartido.
- Misión individual.
- Discusión guiada.
- Creación de Tarjeta de Evidencia.
- Reflexión sobre decisiones.

### Kit

- Guía de facilitación.
- Seis misiones.
- Plantilla para crear casos locales.
- Rúbrica.
- Código de conducta.
- Lista de fuentes recomendadas.
- Material imprimible de bajo consumo.

### Creación juvenil

Los jóvenes pueden proponer casos, pero estos pasan por:

1. Revisión de evidencia.
2. Revisión de lenguaje.
3. Revisión de equilibrio e inclusión.
4. Revisión legal.
5. Aprobación editorial.

### Impacto

- Participantes directos.
- Facilitadores formados.
- Círculos realizados.
- Casos locales revisados.
- Organizaciones que reutilizan el kit.

---

## 18. Sostenibilidad y escala

### Modelo

- Acceso gratuito para participantes.
- Casos base abiertos para educación.
- Guía de facilitación abierta.
- Alianzas con universidades, bibliotecas y organizaciones juveniles.
- Financiamiento mediante convocatorias, patrocinio responsable y programas institucionales.
- Servicios futuros de adaptación, capacitación y panel institucional sin monetizar datos personales.

### Control de costos

- Casos curados con preguntas de respaldo.
- Uso de IA en tareas pequeñas.
- Salidas estructuradas y cortas.
- Caché de análisis no sensible.
- Aplicación web en lugar de aplicaciones nativas.
- Sin procesamiento de video en el MVP.

### Escalabilidad

La escala no se basará solamente en más usuarios. Se basará en:

- Paquetes reutilizables.
- Facilitadores locales.
- Taxonomía común.
- Formato de casos abierto.
- Traducción con revisión humana.
- Evaluación comparable.

### Hoja de ruta posterior

#### 0–3 meses

- Mejorar MVP.
- Ampliar piloto.
- Crear 20 casos.
- Formalizar consejo asesor AMI.

#### 3–6 meses

- Implementar AURA Circles.
- Integrar casos creados localmente.
- Mejorar dashboard.
- Evaluar retención.

#### 6–12 meses

- Desplegar con varias organizaciones.
- Publicar toolkit abierto.
- Añadir análisis de imágenes con límites claros.
- Evaluación comparativa más rigurosa.

---

# Parte VI — Equipo y operación

## 19. Equipo actual

### Confirmados

#### Hernández Axel — Desarrollo e ingeniería de software

Responsabilidades:

- Dirección técnica.
- Arquitectura.
- Desarrollo del MVP.
- Integración de IA.
- Despliegue.
- Analítica.
- Seguridad.
- Demo técnica.

#### Nicole — Estudiante de Negocios Internacionales

Asignación base acordada:

- Dirección de estrategia e impacto.
- Investigación del público.
- Operación del piloto.
- Sostenibilidad.
- Alianzas.
- Documentación.
- Coordinación del pitch.
- Presentación y narrativa.

### Posibles

#### Integrante 3 — Estudiante de Negocios Internacionales

Responsabilidades sugeridas:

- Reclutamiento del piloto.
- AURA Circles.
- Mapeo de aliados.
- Investigación de mercado.
- Métricas.
- Comunicación bilingüe.
- Producción del video.

#### Integrante 4 — Perfil prioritario

Ideal:

- Comunicación.
- Periodismo.
- Educación.
- Psicología educativa.
- Alfabetización mediática.
- Diseño UX con experiencia educativa.

Responsabilidades:

- Diseño pedagógico.
- Curación de casos.
- Revisión de preguntas.
- Rúbrica.
- Sesgo e inclusión.
- Pruebas de usuario.

### Si quedan dos personas

| Área | Desarrollador | Negocios |
|---|---|---|
| Producto | Responsable | Consultada |
| Desarrollo | Responsable | Pruebas |
| Casos | Revisión técnica | Responsable |
| Investigación AMI | Compartida | Compartida |
| Piloto | Instrumentación | Reclutamiento y ejecución |
| Propuesta | Sección técnica | Lidera |
| Video | Demo | Narrativa/edición/coordinación |
| Sostenibilidad | Consultado | Responsable |
| Presentación | Demo | Pitch |

### Si quedan tres

- Desarrollador: producto.
- Negocios 1: estrategia, propuesta y sostenibilidad.
- Negocios 2: piloto, alianzas, video y comunicación.

La revisión pedagógica debe buscarse mediante mentoría o revisión externa puntual, sin inventar que esa persona forma parte del equipo.

### Si quedan cuatro

Agregar el perfil AMI/educación/UX. Esta es la composición más fuerte.

### Criterios para aceptar nuevos integrantes

- Edad entre 18 y 30.
- Disponibilidad diaria real.
- Capacidad complementaria.
- Cumplimiento.
- Comunicación.
- Alineación ética.
- Disposición a trabajar con fechas cerradas.

No incorporar a alguien únicamente para aumentar el número.

### Presentación del equipo

No decir:

> We are passionate young people.

Decir:

> Our team combines software engineering, international business, project strategy and community implementation. This allows us to build a functional product, test it with users and design a realistic pathway for regional adoption.

Adaptar la frase cuando el equipo quede confirmado.

---

## 20. Sistema de trabajo

### Reunión diaria

15 minutos:

1. Qué terminé.
2. Qué terminaré.
3. Qué me bloquea.
4. Qué decisión requiere el equipo.

### Tablero

Columnas:

- Backlog.
- Esta semana.
- Hoy.
- En progreso.
- Revisión.
- Terminado.
- Bloqueado.

### Prioridad

1. Experiencia completa.
2. Casos y evidencia.
3. Piloto.
4. Propuesta.
5. Video.
6. Mejoras visuales.
7. Funciones opcionales.

### Definition of Ready

Una tarea está lista si:

- Tiene responsable.
- Tiene resultado observable.
- Tiene criterio de aceptación.
- Puede completarse en menos de un día o está dividida.

### Decisiones congeladas

Congelar antes del 30 de julio:

- Público.
- One-liner.
- Método AURA.
- Seis casos.
- Stack.
- Métricas.
- Guion de demo.

Cambiar estas decisiones después solo si existe evidencia clara.

---

## 21. Cronograma crítico

El desarrollo está adelantado respecto al plan inicial: landing, flujo A-U-R-A,
dos misiones guiadas, IA, modo degradado, bilingüismo, Tarjeta de Evidencia,
transferencia, analítica local, expediente de procedencia, referencias reales y
modo facilitador ya existen en AURA 0.7.0. La ruta
crítica cambia de “construir una demo” a **probar, documentar y presentar una
intervención creíble**.

### 27–29 de julio — Congelar estrategia y operación

- Incorporar a Nicole con esta guía.
- Confirmar equipo mínimo.
- Congelar one-liner, público y alcance final.
- Seleccionar tres casos adicionales.
- Preparar lista de participantes.
- Verificar el modo piloto completo después del despliegue 0.7.0.
- Crear tablero y responsables.

### 30 de julio–2 de agosto — Instrumento y facilitación

- Ensayar la vista de facilitador con Nicole.
- Preparar consentimiento.
- Preparar encuesta breve de salida.
- Completar al menos un caso adicional.
- Revisar accesibilidad móvil.
- Ensayar el piloto completo.

### 3–5 de agosto — Prueba exploratoria

- Probar con 5–8 personas.
- Corregir errores críticos.
- Medir tiempo y abandonos.
- Verificar que transferencia se entiende sin explicación.
- Congelar cambios estructurales.

### 6–10 de agosto — Piloto y evidencia

- Ejecutar el piloto viable con 15–30 personas.
- Recoger métricas anónimas.
- Consolidar CSV o base central.
- Aplicar la rúbrica.
- Recoger comentarios autorizados.
- Documentar procedimiento y limitaciones.

### 11–12 de agosto — Análisis y propuesta

- Analizar resultados.
- Corregir únicamente puntos confusos o errores.
- Congelar funciones.
- Tomar capturas definitivas.
- Completar propuesta en inglés.
- Verificar cada afirmación contra evidencia.

### 13–14 de agosto — Video

- Ensayar.
- Grabar pantalla.
- Grabar narración.
- Editar.
- Subtítulos.
- Validar duración.

### 15 de agosto — QA

- Revisión técnica.
- Revisión de fuentes.
- Revisión de inglés.
- Revisión de propuesta.
- Verificación de nombres y edades del equipo.
- Exportar PDF/Word.
- Subir video.
- Probar enlace público.
- Simular envío.

### 16 de agosto — Envío

- Enviar antes del mediodía de Ecuador.
- Guardar confirmación.
- Guardar copia final.
- Verificar datos de integrantes.

### Regla de corte

Desde el 11 de agosto:

- No añadir funciones.
- Solo corregir, medir, documentar y presentar.

---

## 22. Recursos y presupuesto

### Costos del prototipo

- Hosting.
- Base de datos.
- Uso de API de IA.
- Dominio opcional.
- Edición de video.
- Incentivos pequeños para piloto, si son posibles.

### Principio

El prototipo debe funcionar con recursos mínimos y planes gratuitos o de bajo costo. No prometer infraestructura masiva.

### Presupuesto futuro

Categorías:

- Desarrollo.
- Curación editorial.
- Facilitación.
- Evaluación.
- Traducción.
- Accesibilidad.
- Infraestructura.
- Protección de datos.

La sostenibilidad debe incluir costos humanos; la IA no reemplaza revisión pedagógica y editorial.

---

# Parte VII — Riesgos

## 23. Registro de riesgos

| Riesgo | Probabilidad | Impacto | Mitigación | Responsable |
|---|---|---|---|---|
| Similaridad con TITAN | Alta | Alta | Posicionar como laboratorio de evidencia, transferencia y comunidad. | Estrategia |
| Exceso de alcance | Alta | Alta | Congelar MVP y lista de exclusiones. | Producto |
| Fallos de IA | Alta | Alta | Casos predefinidos, esquema y modo degradado. | Técnica |
| Alucinaciones | Media | Alta | IA no verifica hechos; fuentes curadas y abstención. | Técnica/AMI |
| Sesgo político | Media | Alta | Casos balanceados y revisión cruzada. | AMI |
| Cinismo general | Media | Alta | Incluir contenido verdadero e incierto. | AMI |
| Privacidad | Media | Alta | No almacenar contenido, advertencias y anonimización. | Técnica |
| Piloto pequeño | Alta | Media | Presentarlo como piloto de usabilidad, no prueba definitiva. | Impacto |
| Falta de participantes | Media | Alta | Reclutar pronto y usar varias redes. | Negocios |
| Equipo cambia | Alta | Media | Planes de 2, 3 y 4 personas. | Equipo |
| Enlaces rotos | Media | Alta | Verificar y conservar respaldo. | Contenido |
| API caída en demo | Media | Alta | Preguntas precomputadas y grabación. | Técnica |
| Inglés débil | Media | Alta | Revisión externa y ensayo. | Propuesta |
| Video excede 3 minutos | Media | Alta | Guion de 360–390 palabras y corte estricto. | Video |
| Envío tardío | Baja | Crítico | Envío interno antes del mediodía. | Líder |
| Afirmaciones de impacto no sustentadas | Media | Alta | Registro de evidencia para cada cifra. | Estrategia |
| Uso indebido de logos | Baja | Alta | No mostrar instituciones sin autorización. | Comunicación |

### Registro de afirmaciones

Cada cifra de la propuesta debe tener:

| Afirmación | Fuente | Fecha | Responsable | Verificada |
|---|---|---|---|---|
| Ejemplo | URL o resultado del piloto | Fecha | Nombre | Sí/No |

---

# Parte VIII — Propuesta para UNESCO

## 24. Estructura recomendada

Objetivo: 7–10 páginas claras, aunque UNESCO no establece aquí un límite de páginas.

### Página 1 — Portada

- AURA.
- Assess · Uncover · Research · Act.
- From reaction to evidence.
- Equipo y países.
- Categoría.
- Enlace/QR de demo.

### Página 2 — Problema

- Escena humana.
- Brecha educativa.
- Público concreto.
- Una o dos cifras verificadas.

### Página 3 — Solución

- One-liner.
- Diagrama de cuatro etapas.
- Captura principal.

### Página 4 — Experiencia

- Recorrido completo.
- Mapa de Evidencia.
- Tarjeta de Evidencia.

### Página 5 — Innovación

- Comparación con soluciones existentes.
- Lectura lateral.
- Transferencia.
- IA responsable.

### Página 6 — Impacto y piloto

- Teoría de cambio.
- Métricas.
- Resultados reales.
- Limitaciones.

### Página 7 — Inclusión y comunidad

- Público.
- AURA Circles.
- Bilingüismo.
- Bajo consumo.
- Accesibilidad.

### Página 8 — Viabilidad

- MVP.
- Arquitectura.
- Cronograma.
- Riesgos.

### Página 9 — Sostenibilidad

- Modelo.
- Escala.
- Alianzas futuras.

### Página 10 — Equipo y cierre

- Capacidades.
- Roles.
- Ask/cierre.
- Fuentes.

---

## 25. Banco de texto en inglés

Estos textos son una base. Deben actualizarse con resultados, nombres y datos finales.

### Project title

> AURA — Assess, Uncover, Research, Act

### Subtitle

> A bilingual evidence-training lab for Media and Information Literacy

### Tagline

> From reaction to evidence.

### Short description

> AURA turns viral posts into three-to-five-minute evidence missions where young people learn to identify verifiable claims, trace original sources, compare independent evidence and make responsible sharing decisions. AI guides the learner through Socratic questions but never issues a truth verdict. AURA measures whether users can transfer these investigation behaviors to a new case and enables youth facilitators to bring the experience into universities and community organizations.

### Problem statement

> Young people encounter hundreds of headlines, posts, images and forwarded messages every day. Generative AI has made misleading content faster, cheaper and more convincing to produce. Yet the challenge is not only access to fact-checks. Many tools evaluate a piece of content for the user, while few create short, accessible opportunities to practise the investigation process itself. A person may learn that one post is misleading and still be unprepared for the next one.
>
> AURA addresses this learning gap. It focuses on the transferable behaviors that responsible digital citizens need: pausing before sharing, identifying the claim, investigating the creator, tracing the original source, comparing independent evidence and communicating uncertainty.

### Target audience

> AURA initially serves university students and youth leaders aged 18–24 in Ecuador who frequently receive information through WhatsApp, TikTok, Instagram and digital news. The first implementation is designed for mobile devices, Spanish and English, low-data use and short learning sessions. The model can later be adapted by universities and youth organizations across Latin America through open case packs and facilitator guides.

### Solution

> AURA is built around a four-step bilingual learning method:
>
> **Assess / Analiza:** The learner identifies the verifiable claim and records initial confidence and sharing intention before receiving assistance.
>
> **Uncover / Ubica:** AURA highlights possible signals such as vague authority, emotional pressure or missing context and asks tailored Socratic questions.
>
> **Research / Rastrea:** The learner leaves the original post, traces the source, reviews primary evidence and compares independent coverage using an interactive Evidence Map.
>
> **Act / Actúa:** The learner explains what is supported, what remains uncertain and what responsible action to take. The session ends with a transparent Evidence Card and a later transfer challenge.

### Innovation

> AURA is not an automated truth detector and it is not primarily a chatbot. Its core innovation is turning media literacy into observable investigation practice. The system records whether learners formulate a verifiable claim, inspect the source, use lateral reading, identify primary evidence, corroborate information and calibrate confidence. It then tests these behaviors on a new case.
>
> AI personalizes questions and identifies possible learning signals, while verified evidence remains visible and human-auditable. This design reduces dependence on black-box verdicts and supports learner agency.

### Evidence

> AURA combines three evidence-informed approaches: accuracy prompting, technique-based media literacy and lateral reading. Research has shown that lateral-reading instruction can improve students’ ability to judge online credibility. Other studies suggest that recognizing manipulation works better for truth discernment when paired with explicit attention to accuracy. AURA operationalizes these findings in one short, repeatable learning experience.

### Impact

> AURA evaluates impact through evidence-reasoning quality rather than simple agreement with AI. Measures include claim identification, source tracing, corroboration, uncertainty calibration, responsible sharing decisions and transfer to an unseen case. Early pilots will be reported transparently as usability and learning evidence, with limitations clearly stated.

### Inclusion

> AURA is mobile-first, bilingual and designed to operate with limited bandwidth. It does not profile political beliefs or assign credibility scores to users. No account is required for the core experience. Youth facilitators can use AURA Circles and downloadable case packs in structured group sessions, enabling participation beyond individual app use.

### AI ethics

> AURA follows a human-centered approach. AI annotations are presented as possible signals, never as proof that content is false. The system is instructed to abstain from unsupported conclusions, never invent sources and make uncertainty visible. User-submitted content is not used to infer ideology or personal traits, and the MVP avoids retaining private content.

### Feasibility

> The current public MVP intentionally focuses on one complete learning loop rather than universal fact-checking. It includes two reviewed guided missions, one unguided transfer challenge, bilingual Socratic guidance, an Evidence Map, an Evidence Card and anonymous local reporting. Our pre-submission target is six reviewed cases in total and a lightweight facilitator summary. Video deepfake detection, arbitrary private-content ingestion, mass monitoring and automatic truth scoring are explicitly out of scope.

### Sustainability

> AURA will keep its core learner experience and base educational cases free. Scale will rely on reusable case packs, youth facilitator training, partnerships with universities and civil society, and grants or institutional support for localization and evaluation. Curated fallback content also reduces dependence on continuous AI inference and supports low-cost deployment.

### Team paragraph — two-person version

> Our confirmed team combines software engineering and international business. The technical lead is responsible for product architecture, development, AI integration, deployment and data protection. The strategy and impact lead is responsible for user research, pilot operations, sustainability, partnerships and the project narrative. We are also evaluating complementary team members for community implementation and MIL/educational design; the final submission will list only confirmed contributors.

### Closing

> Fact-checks can correct yesterday’s post. AURA trains young people to investigate tomorrow’s. By moving from reaction to evidence, learners do not borrow a verdict—they build a habit.

---

# Parte IX — Video y demostración

## 26. Guion de pitch de tres minutos

Duración objetivo: 2:50–2:57.  
Velocidad: aproximadamente 125–135 palabras por minuto.  
El guion final debe actualizar resultados y equipo.

### Guion en inglés

> Every day, a young person receives a post that feels urgent, emotional and convincing. They have only seconds to decide: believe it, ignore it or share it.
>
> Fact-checks are valuable, but a verdict about one post does not necessarily prepare someone for the next one.
>
> This is AURA: Assess, Uncover, Research and Act — a bilingual evidence-training lab for Media and Information Literacy.
>
> First, the learner identifies the claim, records how confident it seems and decides whether they would share it. AURA does not show an answer yet.
>
> Next, it highlights possible signals such as vague authority, emotional pressure or missing context. Instead of declaring the post true or false, AURA asks targeted Socratic questions.
>
> The most important step is Research. The learner leaves the original post, traces the source, reviews primary evidence and compares independent coverage. Every action becomes part of a visible Evidence Map.
>
> Finally, the learner decides what is supported, what remains uncertain and what responsible action to take. AURA generates an Evidence Card showing the learner’s reasoning and sources—not an automatic truth label.
>
> AURA then presents a new case with fewer hints. This measures whether the user learned a transferable investigation habit instead of simply agreeing with AI.
>
> We are starting with university students and youth leaders in Ecuador through a mobile-first experience in Spanish and English. AURA Circles will allow young facilitators to bring reviewed local cases into universities and community organizations.
>
> Our current public MVP includes two guided evidence missions, a functional four-step experience, an unguided transfer challenge and anonymous session reporting. [Update the case count only when additional cases are published. Insert one concise real pilot result here.]
>
> Our team combines software engineering with international business, giving us the capacity to build, test and develop a realistic path for adoption.
>
> Fact-checks can correct yesterday’s post. AURA trains young people to investigate tomorrow’s.
>
> AURA. From reaction to evidence.

### Lista de planos

| Tiempo | Imagen |
|---|---|
| 0:00–0:10 | Teléfono recibe publicación urgente. Dedo se acerca a compartir. |
| 0:10–0:25 | Problema y brecha. |
| 0:25–0:35 | Logo y método AURA. |
| 0:35–0:55 | Assess. |
| 0:55–1:15 | Uncover. |
| 1:15–1:45 | Research y Mapa de Evidencia. |
| 1:45–2:00 | Act y Tarjeta de Evidencia. |
| 2:00–2:15 | Caso de transferencia. |
| 2:15–2:30 | AURA Circles y público. |
| 2:30–2:42 | MVP y resultado real. |
| 2:42–2:52 | Equipo. |
| 2:52–2:58 | Cierre. |

### Reglas

- Mostrar producto antes del segundo 35.
- No dedicar más de 25 segundos al problema.
- No enumerar tecnologías.
- Mostrar una acción real de investigación.
- Mostrar resultado del piloto.
- Subtítulos en inglés.
- Música baja.
- No usar logos sin permiso.
- No usar material viral privado.
- El enlace debe abrir sin login.

---

## 27. Guion de demo

Duración: 75–90 segundos.

### Preparación

- Caso cargado.
- Fuentes disponibles.
- Navegador limpio.
- Zoom legible.
- Sin notificaciones.
- Sin contraseñas visibles.
- Resultado de IA precomputado.

### Secuencia

1. Mostrar la publicación.
2. Formular la afirmación.
3. Seleccionar confianza inicial.
4. Mostrar dos señales posibles.
5. Responder una pregunta.
6. Abrir Mapa de Evidencia.
7. Elegir fuente primaria.
8. Comparar una fuente independiente.
9. Marcar una incertidumbre.
10. Elegir acción final.
11. Mostrar Tarjeta de Evidencia.
12. Mostrar misión de transferencia.

### Frase de demo

> Notice that AURA never tells the learner what to believe. It makes the investigation process visible, actionable and measurable.

### Respaldo

- Video grabado.
- Capturas.
- Enlaces alternativos.
- Caso offline/predefinido.

---

# Parte X — Preguntas del jurado

## 28. Respuestas preparadas

### ¿En qué se diferencia de un fact-checker?

> A fact-checker evaluates a claim. AURA trains and measures the learner’s investigation process. It can complement fact-checkers by helping users understand and reuse their methods.

### ¿En qué se diferencia de TITAN u otros entrenadores socráticos?

> AURA is designed as an evidence-action lab rather than primarily a dialogue. Learners must perform lateral-reading actions, build a traceable Evidence Map, justify an action and transfer the skill to a new case. It also combines bilingual low-data deployment with youth-facilitated community case packs.

### ¿Cómo evita alucinaciones?

> AI does not provide factual verdicts. Reviewed cases contain explicit source bundles and predefined fallback questions. AI outputs follow a constrained schema, identify only possible signals and must abstain when evidence is unavailable.

### ¿Cómo saben que alguien aprendió?

> We score claim formulation, source tracing, evidence selection, corroboration, uncertainty and responsible action. We then test the same skills on a new case with fewer hints.

### ¿Cambiar de opinión significa aprender?

> No. AURA does not treat change itself as success. A learner may correctly maintain an initial judgment. Success is better evidence use and confidence calibration.

### ¿Por qué usar IA?

> AI makes guidance adaptive and can turn everyday content into personalized questions. However, evidence and final judgment remain human-controlled and traceable.

### ¿Puede AURA censurar?

> No. It does not remove content, profile beliefs or issue universal credibility scores. It supports inquiry, uncertainty and freedom of expression.

### ¿Cómo manejarán información privada de WhatsApp?

> The MVP warns users not to submit personal data, avoids persistent storage of pasted content and does not use it for model training or profiling.

### ¿Cómo escalarán?

> Through reusable case packs, facilitator training, an open case format, university and youth-organization partnerships, and careful localization rather than a single global content library.

### ¿Qué pasa sin internet o sin IA?

> Curated missions include predefined questions and evidence, allowing the core educational flow to continue with limited connectivity and without a live model response.

### ¿Por qué Ecuador?

> Ecuador is the team’s accessible implementation context, enabling real testing and culturally relevant design. The method and bilingual case format are designed for regional adaptation.

### ¿Cuál es su mayor riesgo?

> The greatest risk is overreliance on AI or teaching generalized distrust. We mitigate both by keeping evidence visible, including true and uncertain cases, measuring discernment and using human review.

---

# Parte XI — Controles finales

## 29. Checklist de producto

Estado verificado al 27 de julio de 2026:

- [x] El método A-U-R-A aparece igual en todo el producto.
- [x] El recorrido tiene implementación responsiva para móvil.
- [ ] Seis casos completos.
- [ ] Casos verdaderos, engañosos e inciertos.
- [ ] Fuentes primarias verificadas.
- [ ] Enlaces funcionan.
- [x] La IA no emite veredicto.
- [ ] La IA puede abstenerse.
- [x] Existe modo degradado.
- [x] Tarjeta de Evidencia.
- [x] Misión de transferencia.
- [x] Registro anónimo local y CSV.
- [x] Inglés y español.
- [ ] Teclado y contraste revisados.
- [x] El esquema técnico no almacena datos sensibles.
- [x] Demo pública.
- [ ] Video de respaldo.

## 30. Checklist de piloto

- [ ] Consentimiento.
- [ ] Instrumento inicial.
- [ ] Rúbrica.
- [ ] Participantes reales.
- [ ] Datos anónimos.
- [ ] Tasa de finalización.
- [ ] Tiempo.
- [ ] Puntaje inicial y final.
- [ ] Caso de transferencia.
- [ ] Encuesta.
- [ ] Citas autorizadas.
- [ ] Limitaciones documentadas.
- [ ] Ningún resultado inventado.

## 31. Checklist de propuesta

- [ ] Inglés revisado.
- [ ] Menos de 10 MB.
- [ ] Problema concreto.
- [ ] Público concreto.
- [ ] One-liner claro.
- [ ] Método visual.
- [ ] Competencia reconocida.
- [ ] Innovación defendible.
- [ ] Prototipo mostrado.
- [ ] Resultados reales.
- [ ] Impacto medible.
- [ ] Inclusión.
- [ ] Ética de IA.
- [ ] Viabilidad.
- [ ] Sostenibilidad.
- [ ] Equipo confirmado.
- [ ] Fuentes.
- [ ] QR probado.
- [ ] No hay logos no autorizados.
- [ ] No hay afirmaciones sin fuente.

## 32. Checklist del video

- [ ] Máximo tres minutos.
- [ ] Producto antes del segundo 35.
- [ ] Muestra Research/Rastrea.
- [ ] Muestra Tarjeta de Evidencia.
- [ ] Muestra transferencia.
- [ ] Incluye un resultado real.
- [ ] Incluye comunidad e inclusión.
- [ ] Equipo final correcto.
- [ ] Subtítulos.
- [ ] Audio claro.
- [ ] Enlace público.
- [ ] No requiere login.
- [ ] Reproducido en incógnito.
- [ ] Copia de respaldo.

## 33. Checklist del formulario

- [ ] Equipo de 2–6 personas.
- [ ] Todas las edades entre 18 y 30.
- [ ] Nombres legales correctos.
- [ ] Correos confirmados.
- [ ] Países correctos.
- [ ] Ocupaciones correctas.
- [ ] Título consistente.
- [ ] Categoría consistente.
- [ ] PDF/Word cargado.
- [ ] Video público.
- [ ] Envío único por líder.
- [ ] Envío antes del objetivo interno.
- [ ] Confirmación guardada.

---

# Parte XII — Fuentes

## 34. Fuentes principales

### Convocatoria

- [UNESCO Youth Hackathon 2026](https://www.unesco.org/en/articles/unesco-youth-hackathon-2026)
- [Portal oficial de envío](https://tally.so/r/MePkYk)
- [Página general UNESCO Youth Hackathon](https://www.unesco.org/en/media-information-literacy/youth-hackathon)

### Ganadores

- [Ganadores 2025](https://www.unesco.org/en/articles/global-youth-lead-way-media-and-information-literacy-meet-unesco-hackathon-2025-winners?s=08)
- [Ganadores 2024](https://www.unesco.org/en/articles/winners-unescos-youth-hackathon-2024-shape-future-media-and-information-literacy)
- [Proyectos ganadores 2023](https://www.unesco.org/en/articles/youth-hackathon-winners-design-impactful-projects-mil)

### Competencia

- [TITAN — Critical Thinking AI Coach](https://www.titanthinking.eu/)

### Evidencia

- [Lateral Reading on the Open Internet](https://cor.stanford.edu/research/lateral-reading-on-the-open-internet/)
- [Fake news game confers psychological resistance against online misinformation](https://www.nature.com/articles/s41599-019-0279-9)
- [Inoculation and accuracy prompting increase accuracy discernment in combination but not alone](https://www.nature.com/articles/s41562-024-02023-2)
- [Psychological booster shots targeting memory increase long-term resistance against misinformation](https://www.nature.com/articles/s41467-025-57205-x)

### Expedientes de los casos

- [Caffeine and Cognitive Functions in Sports — revisión sistemática y metaanálisis](https://pubmed.ncbi.nlm.nih.gov/33800853/)
- [EFSA — Scientific Opinion on the safety of caffeine](https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4102)
- [Manual de Verificación — procedencia, fecha y ubicación de video](https://verificationhandbook.com/book_es/chapter9.php)
- [UNESCO — Journalism, Fake News & Disinformation](https://www.unesco.org/en/articles/journalism-fake-news-disinformation)

### UNESCO AMI e IA

- [Media and Information Literacy — UNESCO](https://www.unesco.org/en/ami)
- [MIL responses to generative AI](https://www.unesco.org/en/articles/examining-media-and-information-literacy-responses-generative-ai-unesco-policy-brief)
- [Guidance for generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research)
- [Recommendation on the Ethics of Artificial Intelligence](https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence)
- [MIL Competencies in the Age of AI and Social Media](https://www.unesco.org/mil4teachers/en/module11/unit2)

### Infraestructura y seguridad técnica

- [Supabase — Understanding API keys](https://supabase.com/docs/guides/getting-started/api-keys)
- [Supabase — Securing the Data API](https://supabase.com/docs/guides/api/securing-your-api)
- [Supabase — Breaking change: explicit grants for new tables](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically)
- [OpenAI — Data controls in the API platform](https://platform.openai.com/docs/guides/your-data)

---

# Parte XIII — Control del proyecto

## 35. Decisiones que el equipo debe cerrar

- [ ] Integrantes finales.
- [ ] Persona líder.
- [ ] Público exacto.
- [ ] Instituciones donde se realizará el piloto, si hay autorización.
- [ ] Seis casos.
- [x] Nombre visual: AURA.
- [x] Idioma principal español con experiencia completa en inglés.
- [x] Stack: Next.js, Vercel, OpenAI server-side y Supabase server-side.
- [x] Analítica: consentimiento, registro local, CSV y persistencia central activa.
- [ ] Fecha del piloto.
- [ ] Presentador del video.
- [ ] Editor del video.
- [ ] Revisor de inglés.
- [ ] Revisor externo AMI.

## 36. Registro de decisiones

| Fecha | Decisión | Motivo | Responsable | Revisión |
|---|---|---|---|---|
| 27-07-2026 | Reposicionar AURA como laboratorio de evidencia | Diferenciar de TITAN y medir acciones | Equipo | Congelada |
| 27-07-2026 | Método A-U-R-A bilingüe | Claridad y memorabilidad | Equipo | Congelada |
| 27-07-2026 | Público inicial universitario/juvenil en Ecuador | Viabilidad de piloto | Equipo | Por confirmar |
| 27-07-2026 | Hernández Axel y Nicole forman el equipo núcleo confirmado | Son los integrantes con compromiso confirmado | Equipo | Congelada |
| 27-07-2026 | Arquitectura única Next.js desplegada en Vercel | Reducir complejidad y riesgo de demo | Hernández Axel | Congelada |
| 27-07-2026 | La IA pregunta, no verifica ni puntúa | Proteger autonomía y reducir alucinaciones | Hernández Axel | Congelada |
| 27-07-2026 | Medir transferencia mediante acciones `0–2` | Probar conducta reutilizable sin premiar obediencia | Equipo | Revisar con piloto |
| 27-07-2026 | No aceptar texto libre ni datos personales en analítica | Privacidad y minimización | Hernández Axel | Congelada |

## 37. Datos que deben reemplazarse

Buscar en todo el documento:

- `[Insert one concise real pilot result here.]`
- `N participants`
- `X to Y`
- `Z%`
- Nombres de los posibles integrantes 3 y 4, cuando se confirmen.
- Instituciones.
- QR.
- Enlace de video.

Enlace de demo ya confirmado:
`https://aura-opal-beta.vercel.app/`.

## 38. Cierre interno

La idea central que debe protegerse durante todo el proyecto es:

> AURA no gana por tener más inteligencia artificial. Gana si demuestra que la inteligencia artificial puede ceder protagonismo para que una persona aprenda a investigar mejor.

El jurado debe recordar tres cosas:

1. **AURA es una acción:** Analiza, Ubica, Rastrea, Actúa.
2. **AURA muestra aprendizaje real:** evidencia y transferencia, no obediencia a la IA.
3. **AURA convierte jóvenes en multiplicadores:** AURA Circles y casos locales revisados.

La candidatura será fuerte cuando cada promesa tenga una demostración:

| Promesa | Prueba |
|---|---|
| Es fácil | Demo móvil de tres minutos |
| Enseña | Rúbrica y transferencia |
| Es responsable | Fuentes visibles, abstención y privacidad |
| Es viable | MVP funcional |
| Es inclusiva | Bilingüismo, bajo consumo y accesibilidad |
| Puede escalar | Kit, casos y facilitadores |
| El equipo puede ejecutarla | Producto, piloto, propuesta y video terminados |

**AURA — From reaction to evidence.**
