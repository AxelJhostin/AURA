# AURA Opportunity Circles — Dossier de postulación y matriz UNESCO 2026

## Documento operativo para Hernández Axel, Nicole y José Luis

**Proyecto:** AURA Opportunity Circles
**Método:** AURA — Assess · Uncover · Research · Act
**Descriptor:** Youth-led practice for safer digital opportunities
**Versión funcional:** AURA Opportunity Circles 1.0.0
**Estado técnico:** producto funcional listo para pilotos; impacto no demostrado
**Fecha de referencia:** 29 de julio de 2026
**Fecha límite oficial:** 16 de agosto de 2026, 23:59, hora de París  
**Objetivo interno de envío:** 15 de agosto de 2026, 18:00, hora de Ecuador  
**Prototipo público:** <https://aura-opal-beta.vercel.app/>  
**Repositorio:** <https://github.com/AxelJhostin/AURA>  
**Rama de producción:** [`main`](https://github.com/AxelJhostin/AURA/commits/main/) — registrar el hash vigente en la ficha final de envío
**Línea base técnica verificada:** [`b6b7943`](https://github.com/AxelJhostin/AURA/commit/b6b7943fc6b0dfa778ab269d56d3ba6a77d02ca5) + [CI aprobada](https://github.com/AxelJhostin/AURA/actions/runs/30505243112)
**Fuente estratégica completa:** [Guía maestra de AURA](./AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md)
**Guía operativa:** [Opportunity Circles — facilitación y piloto](./AURA_Opportunity_Circles_Guia_Facilitacion.md)

---

## 1. Para qué sirve este documento

Este es el documento público que Axel, Nicole y José deben leer primero. Resume:

- qué es AURA;
- qué ya existe y puede demostrarse;
- qué falta antes de enviar;
- quién debe hacer cada tarea;
- cómo se corresponde AURA con cada requisito oficial;
- cómo construir una propuesta fácil de revisar;
- cómo evitar una descalificación administrativa;
- cómo simular la revisión de los tres expertos;
- cuál es el plan diario hasta el envío.

La guía maestra conserva la investigación, arquitectura, instrumentos, banco de
texto, guion y decisiones detalladas. Este dossier convierte ese contenido en
un plan de entrega.

---

## 2. Respuesta ejecutiva

### Lo que ya tenemos

AURA Opportunity Circles ya no es una idea ni un mockup. Es una intervención
juvenil con producto bilingüe funcional y protocolo de 25 minutos que:

1. presenta cuatro casos de becas, empleos, intercambios y programas juveniles;
2. guía a la persona mediante Analiza, Ubica, Rastrea y Actúa;
3. mantiene visibles las fuentes y sus límites;
4. usa IA para hacer preguntas, no para emitir un veredicto;
5. produce una Tarjeta de Evidencia trazable;
6. mide transferencia en un caso nuevo y sin guía;
7. registra métricas anónimas con consentimiento;
8. compara un pulso opcional pre/post;
9. permite operar Opportunity Circles y consultar resultados agregados;
10. funciona en español, inglés y pantallas de 320 px;
11. debe cerrar build de producción, TypeScript, lint y 52 comprobaciones
    automatizadas en cuatro capas;
12. mantiene cobertura instrumentada por encima de los umbrales definidos;
13. tiene entrega de eventos serializada y reintentos ante fallos transitorios;
14. incorpora agenda, salvaguardas, registro y formación de facilitadores.

### Lo que falta

No falta una función crítica para iniciar Circles. Pilotos, revisión externa,
PDF y video son la fase de validación y candidatura. Falta convertir el
producto en evidencia y la evidencia en una candidatura excelente:

- piloto de ensayo con cinco personas;
- al menos dos Opportunity Circles con participantes reales;
- análisis honesto de resultados y limitaciones;
- revisión externa de AMI/MIL;
- propuesta final en inglés;
- video pitch de máximo tres minutos;
- control independiente por tres revisores;
- carga y envío oficial.

### La decisión estratégica

Desde este momento se congela el alcance de Opportunity Circles 1.0.0. Solo se
modifica código para corregir un problema observado en pilotos o una falla que
amenace la demostración.

### Tesis competitiva vigente

> **AURA Opportunity Circles trains young people to investigate scholarships,
> jobs, exchanges and youth programmes before giving away data, money or trust.
> A guided evidence lab, peer discussion and an unguided transfer challenge
> turn media literacy into observable behavior that other young facilitators
> can replicate.**

La especialización mejora la candidatura porque:

- hace visible una víctima, un daño y una acción concreta;
- conecta AI and MIL, MIL Education, Community Impact y Youth Engagement;
- conserva el MVP y reduce riesgo de ejecución;
- convierte “AURA Circles” de proyección futura en formato operativo;
- permite medir seis conductas sin recopilar datos personales;
- evita enseñar desconfianza generalizada mediante casos engañosos,
  insuficientes y respaldados con límites.

### Lectura estratégica actual del MVP

**Evaluación interna: 8,5/10 como propuesta de producto antes de pilotos.** No
es una calificación oficial, una predicción del jurado ni una probabilidad de
ganar.

| Activo actual | Oportunidad que habilita | Evidencia que todavía falta | Responsable |
|---|---|---|---|
| Problema concreto sobre becas, empleos e intercambios | Comunicar propósito en una frase y conectar con aspiraciones juveniles | Necesidades observadas del público | Nicole + José |
| Circle de 25 minutos | Implementación en universidades, bibliotecas y grupos juveniles | Dos sesiones y aprendizaje de facilitación | Nicole |
| Reto de transferencia `0–6` | Medir conductas, no solo satisfacción | Resultados agregados y limitaciones | Axel + José |
| IA socrática con respaldo | Demostrar IA responsable y resiliente | Observación de utilidad real de las preguntas | Axel |
| Casos desacoplados y bilingües | Paquetes regionales revisados por país | Revisión AMI y referencias latinoamericanas adicionales | José |
| Datos mínimos y panel agregado | Colaboraciones sin recopilar expedientes personales | Prueba de consentimiento y comprensión | Los tres |

Las oportunidades de expansión —red de facilitadores, paquetes por país,
investigación educativa agregada, PWA/offline y paneles institucionales— se
presentan como **ruta posterior al piloto**, nunca como capacidades ya
construidas.

Los límites que deben permanecer visibles son: casos simulados, ausencia de
seguimiento longitudinal, dependencia de la calidad de facilitación,
comprensión aún no probada con públicos diversos, fuentes regionales por
fortalecer e impacto e inclusión todavía no demostrados.

**Decisión operativa:** congelar funciones de 1.0.0. Solo se corrigen errores
críticos, privacidad, accesibilidad, exactitud editorial o barreras que impidan
completar y medir el Circle.

---

## 3. Qué sabemos realmente sobre la evaluación

### Hechos oficiales

UNESCO publica que:

- la postulación se realiza en Tally;
- solo se acepta una postulación final por equipo, enviada por su líder;
- el documento debe ser PDF o Word y pesar como máximo 10 MB;
- el video debe durar como máximo tres minutos;
- el documento debe incluir equipo, problema, objetivos, público, prototipo o
  concepto, sostenibilidad, creatividad y viabilidad;
- cada proyecto será revisado por tres expertos internacionales;
- la evaluación se realizará del 18 de agosto al 13 de septiembre;
- se aplicarán cinco criterios: tema y AMI, claridad, innovación, viabilidad y
  sostenibilidad, e impacto e inclusión.

### Campos confirmados del formulario Tally

El formulario oficial fue inspeccionado el 28 de julio de 2026 sin enviar una
postulación. Solicita:

- para el líder: First name, Last name, Email Address, confirmación del correo,
  país, género, fecha de nacimiento, ocupación/estado e institución;
- para el segundo integrante: los mismos datos, sin campo de confirmación del
  correo;
- integrantes 3–6 opcionales con nombre, apellido, correo, país, género, fecha
  de nacimiento, ocupación/estado e institución;
- nombre de la propuesta;
- introducción breve;
- categoría;
- un PDF o Word de máximo 10 MB;
- enlace público al video.

Para AURA se completarán únicamente tres integrantes y se seleccionará
`Applications / Websites`. Los correos y fechas de nacimiento permanecen en la
hoja privada del equipo, no en este repositorio.

### Lo que no está publicado

No existe evidencia pública de:

- un ranking automático por IA;
- pesos numéricos oficiales para los cinco criterios;
- palabras clave secretas;
- una nota mínima publicada;
- una rúbrica detallada de 0 a 10;
- un mecanismo para premiar la repetición de términos.

### Inferencia razonable

El formulario puede automatizar comprobaciones administrativas como campos
obligatorios, tipo de archivo, tamaño o integridad del envío. Además, por el
volumen de 2025 —1.286 propuestas— es razonable preparar un documento que pueda
ser preclasificado y escaneado rápidamente. Sin embargo, UNESCO afirma que la
evaluación sustantiva será realizada por tres expertos.

Por tanto, AURA se optimizará para dos capas legítimas:

1. **Cumplimiento administrativo inequívoco.**
2. **Lectura humana rápida, verificable y memorable.**

No se utilizarán texto oculto, repetición artificial de palabras, metadatos
engañosos ni afirmaciones inventadas. Esas prácticas pueden reducir confianza y
contradicen los valores del proyecto.

---

## 4. Identidad canónica

Todos los archivos, formularios, capturas y discursos deben usar exactamente la
misma identidad.

| Campo | Valor canónico |
|---|---|
| Nombre | AURA |
| Expansión | Assess · Uncover · Research · Act |
| Nombre del método en español | Analiza · Ubica · Rastrea · Actúa |
| Descriptor | Bilingual evidence-training lab for Media and Information Literacy |
| Eslogan | From reaction to evidence. |
| Promesa | AURA does not tell people what to believe. It trains them to investigate with evidence. |
| Categoría principal | Application / Website |
| Áreas principales | AI and MIL; MIL Education |
| Áreas complementarias | Community Impact; Youth Engagement |
| Público inicial | University students and youth leaders aged 18–24 in Ecuador |
| Estado | Technical MVP scope 100% complete; real-world pilot pending |
| Equipo confirmado | Hernández Axel; Nicole Madelyne Pincay Soledispa; José Luis Cañarte Plúa |
| País inicial | Ecuador |

### One-liner oficial

> AURA is a bilingual evidence-training lab where young people investigate
> viral claims, compare auditable sources, justify responsible actions and
> demonstrate the same skill on a new case—without borrowing an automated truth
> verdict.

### Descripción de 50 palabras

> AURA turns viral posts into short bilingual Media and Information Literacy
> missions. Young people analyse a claim, inspect its context, trace auditable
> sources and choose a responsible action. Socratic AI guides without issuing a
> truth verdict, while an unguided transfer challenge measures whether the
> investigation habit can be reused.

---

## 5. Compuerta de elegibilidad y envío

Un solo fallo en esta tabla puede impedir la evaluación antes de que el jurado
conozca la calidad del producto.

| Requisito | Estado | Evidencia o acción | Responsable |
|---|---|---|---|
| Equipo de 2–6 integrantes | LISTO | Axel, Nicole y José confirmados; equipo cerrado | Los tres |
| Todos tienen 18–30 años | VERIFICAR | Confirmar fechas y edades a la fecha del envío | Nicole + José |
| Nombres legales y correos correctos | PARCIAL | Nombres y correos recibidos; confirmar división First/Last y demás campos privados | Nicole + José |
| Líder del equipo definido | LISTO | Hernández Axel | Los tres |
| Valores de paz, diversidad y libertad de expresión | LISTO | Principios de diseño y narrativa AMI | Nicole |
| Equilibrio e inclusión considerados | EN PROGRESO | Equipo, público, accesibilidad y plan comunitario | Nicole + José |
| Documento PDF o Word | PENDIENTE | Nicole y José producen; Axel verifica hechos técnicos | Nicole + José |
| Archivo menor de 10 MB | PENDIENTE | Comprobar antes de cargar | José + Axel |
| Video de máximo 3:00 | PENDIENTE | Objetivo interno 2:50–2:57 | Los tres |
| Enlace de video público sin login | PENDIENTE | Probar en incógnito y otro dispositivo | Axel |
| Postulación única por líder | PENDIENTE | No enviar ensayos incompletos como finales | Líder |
| Envío antes del plazo | PENDIENTE | Objetivo interno: 15 de agosto, 18:00 Ecuador | Líder |
| Confirmación conservada | PENDIENTE | Captura, correo y copia de archivos enviados | Los tres |

---

## 6. Cobertura de contenido obligatorio

Los siguientes encabezados deben aparecer literalmente en el PDF final. Así se
reduce la ambigüedad para una revisión rápida o una extracción automática de
texto.

| Componente solicitado | Encabezado recomendado | Evidencia AURA | Estado |
|---|---|---|---|
| Team members | `Team and Capacity to Deliver` | Axel: producto/ingeniería; Nicole: estrategia/impacto; José: investigación/inglés/edición | Listo; faltan biografías |
| Problem statement | `Problem Statement` | Brecha entre recibir un fact-check y aprender a investigar | Listo |
| Objectives | `Objectives and Theory of Change` | Conductas observables + transferencia | Listo |
| Target audience | `Target Audience and Inclusion` | Jóvenes 18–24 en Ecuador | Validar |
| Prototype or concept | `Functional Prototype` | Web pública, cuatro casos y panel de piloto | Listo |
| Sustainability | `Feasibility and Sustainability` | Arquitectura pequeña, casos reutilizables, facilitadores | Completar costos |
| Creativity | `Innovation and Creativity` | Laboratorio de evidencia, IA socrática y transferencia | Listo |
| Feasibility | `Implementation Plan` | MVP operativo, cronograma y riesgos | Completar calendario |

---

## 7. Matriz de los cinco criterios oficiales

Los criterios no tienen pesos públicos. La columna “preparación” es una
auditoría interna de evidencia, no una nota de UNESCO.

### 7.1 Consistency with the Theme and MIL Principles

**Pregunta del evaluador:** ¿Es realmente una intervención AMI dirigida por
jóvenes o solo una aplicación genérica con IA?

**Respuesta AURA:** AURA convierte competencias AMI en acciones observables:
identificar una afirmación, investigar procedencia e incentivos, leer
lateralmente, comparar evidencia, comunicar incertidumbre y actuar de forma
responsable.

**Evidencia disponible:**

- método A-U-R-A completo;
- cuatro casos con evidencia engañosa, respaldada con límites e insuficiente;
- fuentes reales separadas de los artefactos simulados;
- IA sin veredicto automático;
- producto creado y liderado por jóvenes;
- alineación con AI and MIL, MIL Education, Community Impact y Youth
  Engagement.

**Falta:**

- una tabla de una página que conecte cada acción A-U-R-A con una competencia
  AMI;
- una frase explícita sobre “Play Your Part” como agencia de la persona.

**Responsables:** Nicole redacta; José edita y verifica referencias; Axel
comprueba que coincida con el producto.
**Preparación interna:** ALTA.

### 7.2 Clarity of Presentation

**Pregunta del evaluador:** ¿Puedo entender el problema, la experiencia, el
equipo y la petición en menos de dos minutos?

**Respuesta AURA:** Una frase, cuatro acciones, un artefacto final y una prueba
de transferencia.

**Evidencia disponible:**

- one-liner canónico;
- demo pública;
- método visual de cuatro pasos;
- tres roles complementarios: producto/ingeniería, estrategia/impacto e
  investigación/edición;
- guía, guion y banco de texto.

**Falta:**

- biografías finales de 40–60 palabras;
- fotografía o presentación consistente del equipo;
- PDF de 7–10 páginas;
- video definitivo;
- una captura legible por cada momento clave.

**Responsables:** Nicole dirige narrativa; José dirige edición e inglés; Axel
produce demo y capturas.
**Preparación interna:** MEDIA-ALTA.

### 7.3 Innovation and Creativity

**Pregunta del evaluador:** ¿Qué hace AURA que no sea ya un chatbot o un
fact-checker?

**Respuesta AURA:** AURA no sustituye la investigación con un veredicto. Hace
visible el proceso de la persona, produce una conclusión trazable y prueba la
misma conducta en un caso nuevo sin guía.

**Evidencia disponible:**

- comparación “veredicto” frente a “laboratorio”;
- IA socrática y modo degradado;
- Mapa y Tarjeta de Evidencia;
- reto de transferencia 0–6 sobre seis conductas observables;
- catálogo editorial equilibrado;
- estados de evidencia distintos de verdadero/falso.

**Falta:**

- una comparación visual sobria con fact-checkers, chatbots educativos y
  TITAN, reconociendo también el alcance curricular de Checkology;
- explicar que la innovación es la combinación y la ejecución, no una falsa
  afirmación de ser “los primeros”.

**Responsables:** Axel aporta producto; Nicole redacta comparación; José
comprueba claridad y referencias.
**Preparación interna:** ALTA.

### 7.4 Feasibility and Sustainability

**Pregunta del evaluador:** ¿Puede este equipo operar, mantener y ampliar la
solución con recursos realistas?

**Respuesta AURA:** El MVP ya funciona con una arquitectura única, preguntas de
respaldo cuando falla la IA, casos reutilizables, analítica mínima y operación
sin cuentas.

**Evidencia disponible:**

- producción en Vercel;
- Next.js, OpenAI server-side y Supabase;
- 52 comprobaciones automatizadas: 14 unitarias, 7 de integración, 19 de
  contrato/build y 12 aserciones pgTAP;
- CI reproducible para aplicación y base, sin secretos;
- cobertura instrumentada de 95,54 % líneas, 77,36 % ramas y 79,52 %
  funciones;
- reglas críticas extraídas de React y HTTP a módulos de dominio;
- RLS y privilegios mínimos;
- cuatro casos reutilizables;
- CSV y panel agregado;
- funcionamiento sin IA;
- responsables técnicos y de estrategia definidos.

**Falta:**

- presupuesto mensual para piloto, 100, 1.000 y 10.000 usuarios;
- plan de seis meses;
- mantenimiento editorial de casos;
- modelo sostenible: casos base gratuitos, alianzas, formación y apoyo
  institucional;
- dos riesgos principales con mitigación.

**Responsables:** Axel calcula costos; Nicole define adopción y alianzas; José
edita el argumento de viabilidad.
**Preparación interna:** MEDIA-ALTA.

### 7.5 Impact and Inclusion

**Pregunta del evaluador:** ¿Resuelve un problema real, incluye a quienes
normalmente quedan fuera y demuestra señales de impacto?

**Respuesta AURA:** AURA está diseñada para móviles, español e inglés, bajo
consumo, sin cuenta y sin perfilar creencias. Permite que jóvenes facilitadores
lleven la práctica a universidades y organizaciones.

**Evidencia disponible:**

- accesibilidad técnica y soporte a 320 px;
- sin nombre, correo ni texto libre en analítica;
- pulso opcional pre/post;
- finalización, tiempo y transferencia;
- español e inglés;
- plan de AURA Circles;
- público inicial concreto.

**Falta crítica:**

- participantes reales;
- resultados agregados;
- observaciones cualitativas autorizadas;
- revisión AMI externa;
- evidencia de necesidades del público;
- ruta concreta para jóvenes con conectividad o acceso limitados.

**Responsables:** Nicole lidera; Axel exporta y visualiza métricas; José
sintetiza resultados y limitaciones.
**Preparación interna:** MEDIA hasta completar el piloto.

---

## 8. Registro de evidencia

Cada afirmación importante del PDF debe apuntar a una evidencia. Si no existe,
debe presentarse como objetivo, hipótesis o plan.

| Afirmación | Evidencia válida | Estado |
|---|---|---|
| Existe un MVP funcional | URL pública + capturas | VERIFICADO |
| La experiencia es bilingüe | Selector ES/EN + prueba | VERIFICADO |
| Hay cuatro misiones equilibradas | Catálogo + compuerta editorial | VERIFICADO |
| La IA no decide el veredicto | Producto + contrato de API | VERIFICADO |
| Se mide transferencia | Reto no guiado + rúbrica 0–6 | VERIFICADO |
| La analítica evita datos sensibles | Esquema, API, RLS y documentación | VERIFICADO |
| Funciona en móvil | Prueba a 320 px | VERIFICADO |
| El software reduce riesgo de regresión | 52 comprobaciones + cobertura sobre umbrales + CI de 1.0.0 | VERIFICADO |
| Mejora una habilidad | Resultado de piloto | PENDIENTE |
| Es útil para el público | Observación y encuesta de piloto | PENDIENTE |
| Puede facilitarse en comunidad | Ensayo de facilitación | PENDIENTE |
| Tiene apoyo institucional | Carta o confirmación real | NO AFIRMAR |
| Es “la primera” solución | No existe evidencia suficiente | NO AFIRMAR |

### Regla de lenguaje

- **Realidad actual:** “AURA includes…”, “The public MVP demonstrates…”
- **Resultado observado:** “In our pilot, X of Y participants…”
- **Meta futura:** “We aim to…”, “The next phase will…”
- **Prohibido sin evidencia:** “AURA improves critical thinking by…”

---

## 9. Plan crítico hasta el envío

### 28–29 de julio — Preparar validación

**Nicole + José**

- confirmar edades, nombres legales y correos; Axel ya está definido como líder;
- reclutar cinco personas para ensayo;
- identificar 30–50 contactos para el piloto principal;
- preparar mensaje de invitación y horarios;
- conseguir una persona externa con experiencia AMI, educación o periodismo;
- abrir una hoja privada de control de participantes, sin subirla al
  repositorio.

**Axel**

- congelar funciones;
- conservar un enlace/código separado por cohorte;
- preparar acceso al panel agregado y exportación CSV;
- crear una hoja de incidencias;
- comprobar producción antes de cada sesión.

### 30–31 de julio — Piloto de ensayo, 5 personas

- una sesión individual o grupal;
- observar sin explicar el producto antes de tiempo;
- registrar dónde se detienen, qué no entienden y cuánto tardan;
- comprobar consentimiento, pre/post, misión, transferencia y agregado;
- clasificar incidencias como bloqueante, grave, menor o preferencia;
- corregir únicamente bloqueantes y graves.

### 1 de agosto — Congelación técnica

- ejecutar build, lint y pruebas;
- verificar móvil;
- registrar versión utilizada;
- cerrar cualquier cambio no esencial.

### 2–6 de agosto — Piloto principal

- objetivo: 30–50 participantes;
- si el acceso es limitado, priorizar una muestra honesta y documentada sobre
  números inflados;
- usar el mismo protocolo;
- separar cada cohorte con su propio código;
- no recopilar nombres dentro de AURA;
- guardar CSV agregado y fecha de cada sesión.

### 7 de agosto — Análisis

- tasa de inicio y finalización;
- tiempo mediano;
- promedio de transferencia;
- número de pares pre/post;
- promedio pre, promedio post y diferencia;
- errores frecuentes;
- observaciones de facilitación;
- limitaciones y tamaño de muestra.

No interpretar un cambio de autoconfianza como prueba suficiente de aprendizaje.
La transferencia, la finalización y las observaciones deben presentarse juntas.

### 8–9 de agosto — Revisión AMI externa

La persona revisora debe comprobar:

- equilibrio entre casos ciertos, engañosos e inciertos;
- lenguaje proporcional a la evidencia;
- fuentes y procedencia;
- riesgos de salud o amplificación;
- preguntas socráticas;
- inclusión y libertad de expresión;
- ausencia de veredicto automático.

Guardar nombre, perfil, fecha, alcance y cambios realizados. No llamarlo
“aval” ni “alianza” si solo fue una revisión.

### 10–11 de agosto — Propuesta

- redactar en inglés;
- objetivo: 7–10 páginas;
- incluir únicamente resultados ya cerrados;
- añadir limitaciones;
- exportar PDF con texto seleccionable;
- mantenerlo por debajo de 10 MB.

### 12–13 de agosto — Video

- duración objetivo: 2:50–2:57;
- mostrar el producto antes del segundo 35;
- enseñar Rastrea, Tarjeta, transferencia y panel agregado;
- incluir una sola cifra real y comprensible;
- subtítulos en inglés;
- publicar sin login.

### 14 de agosto — Simulación de tres expertos

Tres personas evalúan por separado, sin explicación oral del equipo. Cada una
debe responder:

1. ¿Qué problema resuelve AURA?
2. ¿Quién se beneficia?
3. ¿Qué hace la persona dentro del producto?
4. ¿Qué es innovador?
5. ¿Qué evidencia ya existe?
6. ¿Qué falta validar?
7. ¿Cómo puede mantenerse?
8. ¿Dónde aparece inclusión?

Si dos personas no pueden responder una pregunta, la propuesta falla en
claridad y debe corregirse.

### 15 de agosto — Envío interno

- revisar archivos;
- probar todos los enlaces;
- comprobar tamaño y duración;
- cargar desde una conexión estable;
- guardar confirmación;
- conservar una copia exacta del envío.

El 16 de agosto queda únicamente como margen de emergencia.

---

## 10. Plan operativo de Nicole

### Prioridad 1 — Equipo y elegibilidad

- confirmar que todos cumplen 18–30 años;
- comprobar que los datos privados de Axel estén completos como líder;
- mantener una sola lista de nombres y correos;
- incluir solo integrantes realmente confirmados;
- describir la complementariedad entre ingeniería y negocios internacionales.

### Prioridad 2 — Pilotos

- reclutar;
- calendarizar;
- explicar consentimiento;
- facilitar sin conducir respuestas;
- registrar incidencias y observaciones;
- coordinar la revisión AMI;
- conservar evidencia y limitaciones.

### Prioridad 3 — Impacto e inclusión

- definir por qué jóvenes universitarios de Ecuador son el primer público;
- documentar canales y barreras reales;
- explicar bilingüismo, móvil, privacidad y bajo consumo;
- convertir AURA Circles en un plan concreto de facilitación;
- evitar prometer comunidades o alianzas inexistentes.

### Prioridad 4 — Sostenibilidad

- proponer actores que podrían adoptar AURA;
- distinguir contactos deseados de alianzas confirmadas;
- redactar el plan de seis meses;
- preparar un mapa de universidades, organizaciones juveniles y medios
  educativos;
- definir por qué el contenido base seguirá siendo gratuito.

### Prioridad 5 — Narrativa y pitch

- mantener una sola historia;
- explicar primero el problema humano;
- mostrar el producto, no describir funciones durante tres minutos;
- reconocer límites;
- terminar con la promesa canónica.

---

## 11. Plan operativo de José

### Prioridad 1 — Inglés y estructura

- crear el esqueleto del PDF con los encabezados oficiales;
- mantener una única terminología en inglés;
- editar oraciones para claridad, precisión y lectura rápida;
- comprobar que las referencias y pies de figura correspondan a cada
  afirmación.

### Prioridad 2 — Evidencia

- mantener la matriz afirmación → evidencia → limitación;
- revisar denominadores, fechas y fuentes;
- sintetizar los resultados del piloto sin exagerarlos;
- separar hechos actuales, resultados observados y planes futuros.

### Prioridad 3 — Entregables

- coliderar con Nicole la propuesta final;
- revisar transcripción y subtítulos del video;
- verificar que Tally, PDF y video usen los mismos nombres y cifras;
- preparar el documento para que se entienda sin explicación oral.

---

## 12. Plan operativo de Axel

- mantener producción disponible;
- no agregar funciones por entusiasmo;
- separar códigos de ensayo y piloto;
- exportar métricas agregadas después de cada cohorte;
- corregir únicamente fallos observados;
- conservar commit, fecha y versión de cada piloto;
- conservar la ejecución de CI y ejecutar `npm run check` antes de cada release;
- preparar capturas limpias;
- generar QR del dominio canónico;
- calcular costos reales;
- crear una copia del demo para el video;
- verificar PDF, enlaces, peso, video e incógnito;
- nunca exponer claves ni publicar datos privados.

---

## 13. Responsabilidades compartidas

| Entregable | Lidera | Aprueba |
|---|---|---|
| Equipo final y elegibilidad | Nicole + José | Los tres |
| Operación de pilotos | Nicole | Los tres |
| Estabilidad técnica | Axel | Axel |
| Análisis de métricas | Axel | Nicole + José |
| Interpretación de impacto | Nicole | Los tres |
| Revisión AMI | Nicole | Los tres |
| Presupuesto técnico | Axel | Nicole + José |
| Sostenibilidad y alianzas | Nicole | Los tres |
| PDF final | Nicole + José | Los tres |
| Inglés y referencias | José | Los tres |
| Demo y capturas | Axel | Los tres |
| Video | Los tres | Los tres |
| Formulario y envío | Líder confirmado | Los tres |

---

## 14. Arquitectura del PDF final

Usar los nombres oficiales de los criterios en inglés. El PDF debe ser legible
como documento y no como un conjunto de diapositivas sin contexto.

### Page 1 — Executive Summary

- identidad canónica;
- problema en una frase;
- solución en una frase;
- público;
- estado “functional public MVP”;
- URL y QR;
- cinco criterios resumidos en una tabla.

### Page 2 — Problem Statement

- escena humana;
- brecha educativa;
- por qué un veredicto no enseña necesariamente la siguiente investigación;
- evidencia externa breve y citada.

### Page 3 — Objectives and Theory of Change

- entradas;
- acciones A-U-R-A;
- productos observables;
- resultado inmediato;
- hipótesis de impacto;
- limitaciones.

### Page 4 — Functional Prototype

- recorrido;
- cuatro casos;
- fuentes;
- Tarjeta;
- transferencia;
- enlace público.

### Page 5 — Consistency with the Theme and MIL Principles

- tema oficial;
- competencias AMI;
- agencia juvenil;
- AI and MIL + MIL Education;
- “Play Your Part”.

### Page 6 — Innovation and Creativity

- comparación con veredictos automáticos;
- IA socrática;
- trazabilidad;
- transferencia;
- catálogo equilibrado.

### Page 7 — Impact and Inclusion

- público;
- piloto;
- resultados;
- limitaciones;
- móvil, ES/EN, privacidad y AURA Circles.

### Page 8 — Feasibility and Sustainability

- arquitectura;
- costos;
- riesgos;
- plan de seis meses;
- adopción y sostenibilidad.

### Page 9 — Team and Capacity to Deliver

- roles;
- evidencia de ejecución;
- distribución de responsabilidades;
- Axel, Nicole y José como equipo final cerrado.

### Page 10 — Evidence and Next Steps

- tabla de evidencia;
- cronograma;
- fuentes;
- contacto;
- cierre.

---

## 15. Diseño para revisión humana y comprobación automática

### Hacer

- PDF con texto nativo y seleccionable;
- encabezados exactos y consistentes;
- título AURA idéntico en formulario, PDF y video;
- tabla de contenido;
- números de página;
- enlaces completos además del QR;
- una afirmación principal por párrafo;
- tablas con encabezados simples;
- cifras con denominador, fecha y fuente;
- capturas con pie explicativo;
- contraste suficiente;
- archivo con nombre estable:
  `AURA_UNESCO_Youth_Hackathon_2026_Proposal.pdf`;
- video:
  `AURA_UNESCO_Youth_Hackathon_2026_Pitch.mp4`;
- transcripción y subtítulos;
- URL pública probada sin login.

### No hacer

- PDF escaneado como una sola imagen;
- texto oculto o blanco;
- listas de palabras clave sin sentido;
- repetir “UNESCO”, “MIL” o “innovation” artificialmente;
- afirmar impacto antes de medirlo;
- mezclar objetivos con resultados;
- usar nombres diferentes del proyecto;
- depender solo de QR;
- usar letra demasiado pequeña;
- incluir capturas ilegibles;
- superar 10 MB;
- video de 3:01;
- enlace privado o con solicitud de acceso.

### Densidad de evidencia

Cada página debe responder:

1. ¿Qué afirmamos?
2. ¿Qué prueba lo demuestra?
3. ¿Qué limitación reconocemos?
4. ¿Qué haremos después?

Esta estructura ayuda a una persona, a una rúbrica digital y a cualquier
extracción de texto sin intentar manipular el proceso.

---

## 16. Simulación de los tres expertos

UNESCO anuncia tres expertos por proyecto. AURA debe reproducir ese proceso
antes del envío.

### Perfil A — Especialista AMI

Evalúa:

- principios AMI;
- agencia;
- libertad de expresión;
- calidad de fuentes;
- incertidumbre;
- riesgos del uso de IA.

### Perfil B — Producto y viabilidad

Evalúa:

- experiencia funcional;
- claridad;
- tecnología;
- costos;
- capacidad del equipo;
- sostenibilidad.

### Perfil C — Impacto e inclusión

Evalúa:

- necesidad real;
- público;
- métricas;
- accesibilidad;
- participación juvenil;
- escalabilidad contextual.

### Hoja interna de revisión

Cada persona asigna de forma independiente:

- `0`: ausente;
- `1`: afirmado sin evidencia;
- `2`: evidencia parcial;
- `3`: evidencia clara y proporcional.

| Criterio | A | B | C | Evidencia faltante | Cambio |
|---|---:|---:|---:|---|---|
| Theme and MIL |  |  |  |  |  |
| Clarity |  |  |  |  |  |
| Innovation |  |  |  |  |  |
| Feasibility and Sustainability |  |  |  |  |  |
| Impact and Inclusion |  |  |  |  |  |

### Condición interna de envío

- ningún criterio puede tener mediana inferior a `2`;
- Theme and MIL e Innovation deben alcanzar mediana `3`;
- ninguna cifra puede carecer de fuente;
- ningún revisor puede confundir AURA con un detector automático;
- los tres deben encontrar demo, público y propuesta de impacto en menos de dos
  minutos.

Esta condición es interna y no representa una nota oficial.

---

## 17. Métricas que sí deben presentarse

Después del piloto:

- participantes que iniciaron;
- participantes que terminaron;
- tasa de finalización;
- tiempo mediano;
- número de retos de transferencia;
- promedio y distribución de transferencia 0–6;
- número de respuestas pre/post pareadas;
- promedio inicial y final de autoconfianza;
- diferencia pre/post, descrita como autopercepción;
- problemas de usabilidad observados;
- cambios realizados;
- tamaño y limitaciones de la muestra.

### Formato recomendado

> In a pilot with **N** participants, **X/N** completed a guided mission and
> **Y/N** completed the unguided transfer challenge. The average transfer score
> was **Z/6**. Among **P** paired optional responses, self-reported confidence
> changed from **A/5** to **B/5**. Because this was a small, non-random pilot,
> these findings are presented as early usability and learning signals, not
> causal proof.

---

## 18. Riesgos de candidatura

| Riesgo | Señal | Mitigación | Responsable |
|---|---|---|---|
| Producto fuerte, impacto débil | No hay pilotos | Priorizar validación desde ahora | Nicole |
| Confusión con fact-checker | Jurado espera un veredicto | Mostrar transferencia y Tarjeta | Los tres |
| IA ocupa demasiado protagonismo | Pitch parece chatbot | Persona y evidencia al centro | Nicole + José |
| Sostenibilidad vaga | Solo se menciona “alianzas” | Costos y plan de seis meses | Los tres |
| Inclusión declarativa | No hay decisiones concretas | Móvil, bilingüe, privacidad y facilitación | Nicole |
| Métricas infladas | Cifras sin limitaciones | Denominador, método y cautela | José + Axel |
| Equipo poco creíble | Roles genéricos | Entregables y responsables concretos | Los tres |
| Archivo no elegible | Peso, duración o acceso | Compuerta técnica final | Axel |
| Envío tardío | Problema de red o formulario | Enviar el 15 de agosto | Líder |
| Inconsistencia entre materiales | Nombres o cifras distintas | Identidad canónica y fuente única | José |

---

## 19. Definición de candidatura terminada

La candidatura está terminada únicamente cuando:

- [ ] integrantes y elegibilidad están confirmados;
- [ ] existe piloto de ensayo;
- [ ] existe piloto principal o una justificación honesta del tamaño logrado;
- [ ] métricas y limitaciones están cerradas;
- [ ] revisión AMI externa está documentada;
- [ ] propuesta en inglés está aprobada por tres revisores;
- [ ] PDF pesa menos de 10 MB;
- [ ] video dura menos de tres minutos;
- [ ] video y demo funcionan sin login;
- [ ] cada criterio oficial tiene afirmación y evidencia;
- [ ] formulario utiliza la identidad canónica;
- [ ] no hay resultados, alianzas ni superlativos inventados;
- [ ] envío fue realizado por el líder;
- [ ] confirmación y archivos exactos fueron archivados.

---

## 20. Fuentes oficiales

- [UNESCO Youth Hackathon 2026](https://www.unesco.org/en/articles/unesco-youth-hackathon-2026)
- [Página general oficial del UNESCO Youth Hackathon](https://www.unesco.org/en/media-information-literacy/youth-hackathon)
- [Portal oficial de envío](https://tally.so/r/MePkYk)
- [Ganadores UNESCO Youth Hackathon 2025](https://www.unesco.org/en/articles/global-youth-lead-way-media-and-information-literacy-meet-unesco-hackathon-2025-winners)

---

## 21. Regla final

No intentaremos “engañar” una automatización hipotética. Construiremos una
postulación que pase cualquier filtro administrativo, sea fácil de analizar,
use los nombres exactos de los criterios y permita que tres expertos encuentren
rápidamente evidencia verificable.

La ventaja competitiva de AURA no será repetir palabras clave. Será presentar
un producto funcional, una pedagogía defendible, datos honestos, un equipo
capaz y un plan concreto.
