# AURA Opportunity Circles — Dossier colaborativo completo 2026

## Archivo único de trabajo para Hernández Axel, Nicole y José Luis

**Fecha de corte:** 7 de agosto de 2026<br>
**Versión funcional:** AURA Opportunity Circles 1.0.0<br>
**Estado técnico:** alcance del MVP técnico completado y listo para pilotos<br>
**Estado de impacto:** todavía no demostrado; requiere participantes reales<br>
**Demo técnica:** datos simulados locales, separados de Supabase y de cualquier piloto<br>
**Estado de la postulación:** PDF, video, evidencia humana y envío pendientes<br>
**Demo pública:** <https://aura-opal-beta.vercel.app/><br>
**Repositorio:** <https://github.com/AxelJhostin/AURA><br>
**Convocatoria:** <https://www.unesco.org/en/media-information-literacy/youth-hackathon><br>
**Fecha límite documentada:** 16 de agosto de 2026, 23:59, hora de París<br>
**Objetivo interno:** enviar el 15 de agosto de 2026, 18:00, hora de Ecuador

> Este es el archivo que el equipo debe compartir y leer primero. Empieza con
> una capa canónica que resuelve el estado actual y el orden de trabajo. Después
> incorpora, sin resumir ni recortar, los once documentos públicos vigentes del
> repositorio. Si una explicación histórica de un anexo parece chocar con la
> capa canónica, prevalecen el estado y las decisiones indicados al inicio.

---

# Parte I — La verdad ejecutiva

## 1. Qué es AURA

AURA Opportunity Circles es una intervención juvenil bilingüe de
Alfabetización Mediática e Informacional. Entrena a jóvenes para investigar
becas, empleos, intercambios y programas juveniles antes de entregar datos,
dinero o confianza.

Su recorrido aplica **Analiza · Ubica · Rastrea · Actúa**:

1. la persona registra su reacción inicial;
2. identifica la afirmación y señales que justifican una pausa;
3. rastrea origen, procedencia y corroboración;
4. construye una conclusión con límites;
5. decide una acción proporcional;
6. genera una Tarjeta de Evidencia;
7. enfrenta un caso nuevo sin pistas para demostrar transferencia.

La IA no decide qué creer, no verifica automáticamente la verdad y no inventa
fuentes. Solo formula una pregunta socrática breve a partir de opciones
codificadas. La misión continúa con preguntas de respaldo cuando la IA falla.

## 2. Estado que debe repetirse en todos los entregables

| Capa | Estado real | Lenguaje autorizado |
|---|---|---|
| MVP técnico | **100 % del alcance congelado** | “Functional prototype ready for pilots” |
| Calidad técnica | **Verificada** | 52 comprobaciones, CI, build y cobertura sobre umbrales |
| Demo técnica | **Verificada, datos simulados locales** | “Technical demonstration”; nunca “pilot evidence” |
| Piloto humano | **Pendiente** | “Pilot-ready”; nunca “impact proven” |
| Impacto educativo | **No demostrado todavía** | Presentar hipótesis, instrumento y resultados solo cuando existan |
| Opportunity Circles | **Implementados y listos para probar** | Formato de 25 minutos para 6–20 participantes |
| PDF final | **Pendiente** | Nicole y José lideran; Axel verifica hechos técnicos |
| Video público | **Pendiente** | Máximo tres minutos; demo real, subtítulos y límites |
| Formulario | **Registro realizado; envío final pendiente** | Una única postulación completa desde el liderazgo |
| Kichwa | **Expansión futura condicionada** | Explorar solo con codiseño y validación comunitaria |

“MVP completo” no significa “candidatura completa”. El software está listo; la
prioridad ahora es convertir uso real en evidencia y esa evidencia en una
propuesta clara, honesta y visualmente fuerte.

## 3. Tesis competitiva vigente

> **AURA Opportunity Circles trains young people to investigate scholarships,
> jobs, exchanges and youth programmes before giving away data, money or
> trust. A guided evidence lab, peer discussion and an unguided transfer
> challenge turn media literacy into observable behavior that other young
> facilitators can replicate.**

La candidatura es defendible porque une:

- un problema concreto y cotidiano;
- una habilidad transferible, no un veredicto aislado;
- participación juvenil entre pares;
- evidencia visible y trazable;
- IA responsable, opcional y subordinada a la persona;
- privacidad por diseño;
- una intervención breve que puede replicarse;
- un MVP funcional que demuestra capacidad de ejecución.

La valoración interna de **8,5/10** describe la solidez del producto antes de
pilotos. No es una nota de UNESCO ni una probabilidad de ganar.

---

# Parte II — Inventario completo del MVP

## 4. Capacidades funcionales implementadas

### Experiencia educativa

- Interfaz completa en español e inglés.
- Cuatro misiones guiadas de oportunidades digitales.
- Estados de evidencia equilibrados: engañoso, insuficiente y respaldado con
  límites.
- Método A-U-R-A completo.
- Reacción inicial sin etiquetar a la persona como correcta o incorrecta.
- Selección de hallazgo, límite y acción.
- Mapa de Evidencia.
- Tarjeta de Evidencia copiable.
- Reto de transferencia nuevo y sin pistas.
- Puntuación de transferencia de 0 a 6 basada en seis conductas observables:
  afirmación, origen, procedencia, corroboración, incertidumbre y acción.

### IA responsable

- Coach socrático ejecutado únicamente en servidor.
- Clave de OpenAI fuera del navegador y del repositorio.
- Entrada limitada a caso, etapa, idioma y opciones codificadas.
- Una pregunta breve; sin veredicto y sin creación de fuentes.
- Solicitudes configuradas sin almacenamiento.
- Rate limiting y validación de origen.
- Pregunta de respaldo por caso para operar sin IA.

### Evidencia y procedencia

- Contenido educativo ficticio etiquetado como simulado.
- Identificadores de documentos simulados.
- Referencias oficiales reales separadas del expediente ficticio.
- Enlaces auditables que abren fuera de la aplicación.
- Regla editorial bilingüe y validación automática del catálogo.
- Prohibición de presentar una señal emocional como prueba de falsedad.

### Pilotos y medición

- Consentimiento explícito para analítica anónima.
- Pulso opcional pre/post de confianza, escala 1–5.
- Código de piloto anónimo.
- Enlace compartible sin cuentas.
- Panel agregado de facilitación.
- Tasa de finalización, promedio de transferencia y cambio de confianza.
- Exportación agregada CSV sin identificadores de sesión.
- Reporte codificado de una sesión.
- Persistencia server-side en Supabase.
- RLS, privilegios restringidos y servicio únicamente desde rutas de servidor.

### Facilitación y comunidad

- Opportunity Circle de 25 minutos.
- Tamaño recomendado de 6–20 participantes.
- Agenda exacta de apertura, práctica, conversación, transferencia y cierre.
- Salvaguardas para no abrir enlaces reales ni recopilar datos personales.
- Plantilla de registro y testimonios con autorización.
- Formación básica de nuevos facilitadores.

### Calidad, accesibilidad y despliegue

- Aplicación Next.js 16 y TypeScript.
- Build estándar compatible con Vercel.
- Diseño responsivo y comprobación a 320 px.
- Navegación por teclado, foco visible, objetivos táctiles y movimiento
  reducido.
- 14 pruebas unitarias.
- 7 pruebas de integración.
- 19 comprobaciones de contrato/build.
- 12 aserciones pgTAP.
- 52 comprobaciones automatizadas totales.
- Cobertura instrumentada: 95,54 % de líneas, 77,36 % de ramas y 79,52 % de
  funciones.
- Lint, TypeScript, build y CI de aplicación + Supabase.

## 5. Lo que no forma parte del MVP

- Fact-checking automático universal.
- Detector de deepfakes.
- OCR general de capturas.
- Scraping de sitios arbitrarios.
- Perfil político o psicológico.
- Ranking público de participantes.
- Cuentas personales.
- Aplicación nativa o extensión.
- PWA/offline completo.
- Seguimiento longitudinal.
- Dashboard institucional avanzado.
- Traducción o facilitación en Kichwa.

Estas ausencias no deben ocultarse. Permiten explicar que el MVP es deliberado,
pequeño, seguro y viable.

## 6. Qué falta realmente antes de competir

1. Confirmar elegibilidad y datos privados exactos de los tres integrantes.
2. Ejecutar un ensayo con aproximadamente cinco personas.
3. Realizar al menos dos Opportunity Circles con participantes reales.
4. Exportar y analizar métricas agregadas.
5. Recoger observaciones, fricciones, testimonios autorizados y limitaciones.
6. Conseguir una revisión externa AMI/MIL.
7. Congelar cifras y afirmaciones del piloto.
8. Redactar y diseñar el PDF final en inglés.
9. Grabar un pitch público de máximo tres minutos.
10. Simular una revisión independiente con tres perfiles.
11. Verificar archivo, enlace, tamaño, permisos y consistencia.
12. Completar una sola postulación oficial.

---

# Parte III — Equipo y sistema de colaboración

## 7. Equipo final cerrado

### Hernández Axel — Product and Technical Lead

- Producto, arquitectura, código, IA, seguridad y despliegue.
- Estabilidad de producción y corrección de errores críticos.
- Demo técnica, capturas y explicación verificable.
- Exportación y revisión de métricas agregadas.
- Costos técnicos, riesgos y verificación factual.
- Carga y envío oficial acordado por el equipo.

### Nicole Madelyne Pincay Soledispa — Strategy and Impact Lead

- Problema, público, inclusión y teoría de cambio.
- Reclutamiento, logística y facilitación.
- Impacto, sostenibilidad y adopción.
- Narrativa principal y coordinación del PDF.
- Coherencia entre propuesta, video y formulario.
- Control de que no se inventen resultados, aliados ni avales.

### José Luis Cañarte Plúa — Research and Editorial Lead

- Investigación, referencias y registro de evidencia.
- Estructura, edición e inglés del PDF.
- Síntesis de resultados y limitaciones.
- Control de longitud, claridad y consistencia terminológica.
- Guion, transcripción y subtítulos del video.
- Revisión de los cinco criterios oficiales.

## 8. Reglas de decisión

| Decisión | Lidera | Deben aprobar |
|---|---|---|
| Producto, seguridad y hechos técnicos | Axel | Axel |
| Problema, impacto, inclusión y sostenibilidad | Nicole | Los tres |
| Inglés, estructura y referencias | José | Los tres |
| Cifras del piloto | Axel + Nicole | Los tres |
| PDF final | Nicole + José | Los tres |
| Video final | Nicole + José | Los tres |
| Formulario y envío | Axel | Los tres |

Si una afirmación importante no tiene evidencia, se elimina o se convierte en
hipótesis, limitación o plan futuro.

## 9. Flujo de trabajo diario

1. Reunión breve: hecho nuevo, bloqueo y entrega del día.
2. Una única fuente para cifras y afirmaciones.
3. Cada cambio del PDF indica dueño y evidencia.
4. Axel revisa afirmaciones técnicas.
5. Nicole revisa propósito, impacto e inclusión.
6. José revisa inglés, referencias y legibilidad.
7. Los tres aprueban la versión congelada.

No guardar datos personales, fechas de nacimiento ni documentos de identidad
en este archivo público. Esos campos deben mantenerse en una copia privada.

---

# Parte IV — Arquitectura definitiva del PDF

## 10. Objetivo editorial

El PDF debe poder entenderse sin explicación oral y permitir que una persona
encuentre en pocos segundos:

- el problema;
- la solución;
- el público;
- el prototipo;
- la alineación AMI/MIL;
- la innovación;
- la evidencia;
- la inclusión;
- la viabilidad;
- el equipo y la petición.

Formato recomendado: **10 páginas, PDF con texto nativo y seleccionable, en
inglés, visual, con una afirmación central por página**. Las citas y pies deben
ser legibles. No se diseña para “engañar un algoritmo”; se diseña para revisión
humana rápida, extracción correcta de texto y correspondencia explícita con los
criterios publicados.

## 11. Estructura página por página

| Página | Título | Pregunta que responde | Contenido mínimo | Lidera |
|---|---|---|---|---|
| 1 | Executive Summary | ¿Qué es y por qué importa? | tesis, público, método, demo y tres pruebas | Nicole + José |
| 2 | Problem Statement and Target Audience | ¿Qué riesgo concreto vive quién? | escena humana, brecha, barreras y fuentes | Nicole |
| 3 | Objectives and Theory of Change | ¿Qué comportamiento queremos cambiar? | objetivo, cadena causal e indicadores | Nicole + Axel |
| 4 | Functional Prototype | ¿Qué existe hoy? | recorrido AURA, capturas, demo y 52 checks | Axel |
| 5 | Theme and MIL Principles | ¿Cómo cumple el reto? | áreas temáticas, competencias y derechos | Nicole + José |
| 6 | Innovation and Creativity | ¿Qué hace diferente a AURA? | comparación justa, transferencia e IA limitada | José + Axel |
| 7 | Early Evidence and Impact Measurement | ¿Qué observamos? | piloto, métricas, limitaciones y testimonios | Axel + Nicole |
| 8 | Inclusion and Community Delivery | ¿Quién puede usarlo y cómo? | móvil, bilingüe, privacidad y Circle | Nicole |
| 9 | Feasibility and Sustainability | ¿Puede mantenerse y crecer? | arquitectura, costos, riesgos y seis meses | Axel + Nicole |
| 10 | Team, Roadmap and Call to Action | ¿Quién lo hará y qué solicita? | tres roles, próximos pasos, enlaces y cierre | Los tres |

La especificación completa de cada página —texto base, visuales, presupuesto de
palabras, bandas de evidencia y pruebas de aceptación— aparece íntegra en el
anexo **AURA_Estructura_Definitiva_PDF_UNESCO_2026.md**.

## 12. Cinco criterios que deben nombrarse literalmente

1. **Consistency with the Theme and MIL Principles**
2. **Clarity of Presentation**
3. **Innovation and Creativity**
4. **Feasibility and Sustainability**
5. **Impact and Inclusion**

Cada criterio necesita una afirmación, una evidencia o plan verificable, una
limitación honesta y una ubicación fácil de encontrar.

## 13. Registro obligatorio de evidencia

Clasificar cada afirmación como:

- **Built:** existe en el producto o repositorio y puede demostrarse.
- **Verified:** una prueba o revisión técnica la respalda.
- **Observed:** fue observada con participantes reales.
- **Planned:** es una acción futura con responsable y plazo.
- **Conditional:** depende de una colaboración o validación todavía inexistente.

Ejemplos:

| Afirmación | Estado | Evidencia |
|---|---|---|
| AURA tiene un prototipo bilingüe funcional | Built + Verified | demo, código, CI |
| AURA mide seis conductas de transferencia | Built + Verified | reto 0–6 y pruebas |
| Los participantes mejoraron | No afirmar aún | requiere piloto y análisis |
| El Circle puede ejecutarse en 25 minutos | Built; Observed pendiente | guía + piloto |
| AURA ofrece Kichwa | Prohibido | no existe traducción ni validación |
| AURA explorará localización Kichwa | Conditional | hoja de ruta y futura colaboración |

## 14. Paquete mínimo para cerrar el PDF

### Evidencia técnica

- URL pública.
- Repositorio.
- hash de la versión mostrada.
- captura del recorrido.
- captura de Tarjeta de Evidencia.
- captura del reto de transferencia.
- CI verde y resumen de pruebas.
- descripción breve de privacidad e IA.

### Evidencia educativa

- objetivo y teoría de cambio.
- rúbrica de seis conductas.
- instrumento pre/post.
- explicación de transferencia.
- revisión AMI externa y cambios realizados.

### Evidencia de piloto

- fecha y código de cada sesión.
- cantidad que inició y completó.
- promedio de transferencia.
- cambio pre/post con población base.
- observaciones de facilitación.
- barreras y errores encontrados.
- testimonios autorizados.
- limitaciones de muestra y duración.

### Evidencia operativa

- agenda de 25 minutos.
- tamaño y contexto del grupo.
- responsables.
- consentimiento.
- protocolo de seguridad.
- costo real o estimado claramente etiquetado.
- plan de seis meses.

## 15. Reglas visuales

- Una idea dominante por página.
- Titulares que expresen una conclusión, no solo un tema.
- Texto nativo; no convertir páginas completas en imágenes.
- Contraste, tamaño y espaciado accesibles.
- Capturas reales, recortadas y legibles.
- Máximo tres a cinco cifras destacadas por página.
- Pie de figura con fuente, fecha y estado de evidencia.
- Enlaces escritos y clicables.
- Misma terminología en PDF, video, demo y formulario.
- Ningún número sin unidad, población base o fecha.

---

# Parte V — Piloto, análisis y lenguaje

## 16. Secuencia mínima de validación

### Ensayo

- Cinco personas aproximadamente.
- Confirmar que entienden propósito, consentimiento y navegación.
- Medir tiempo y detectar bloqueos.
- Corregir solo errores críticos.

### Pilotos principales

- Al menos dos Circles.
- Meta orientativa total: 30–50 participantes, sin inventar si se alcanza menos.
- Mismo protocolo básico.
- Códigos separados por sesión.
- Observaciones estructuradas.
- Sin recopilar nombres, correos, documentos ni mensajes privados.

### Análisis

- Reportar cantidades absolutas y denominadores.
- Separar inicio, finalización y respuestas emparejadas.
- Mostrar distribución, no solo promedio cuando sea posible.
- No atribuir causalidad con muestra pequeña.
- Explicar abandonos y datos faltantes.
- Conservar resultados negativos o ambiguos.

## 17. Lenguaje permitido

- “The prototype includes…”
- “The current build records…”
- “In a pilot with N participants, we observed…”
- “Participants reported…”
- “These early findings do not establish long-term impact.”
- “AURA plans to explore…”
- “This expansion depends on…”

## 18. Lenguaje prohibido sin evidencia

- “AURA proves…”
- “AURA eliminates misinformation.”
- “AURA guarantees critical thinking.”
- “AURA is the first…”
- “Users improved” sin población, instrumento y resultado.
- “UNESCO supports AURA.”
- “We partner with…” si solo existe interés o contacto deseado.
- “AURA is available in Kichwa.”

## 19. Localización Kichwa como expansión futura

La localización Kichwa puede fortalecer pertinencia cultural y servicio
comunitario, pero hoy no existe traducción, contacto con hablantes, alianza,
variante seleccionada ni comunidad participante. No debe aparecer como logro
del MVP.

Solo se activa si:

1. una comunidad y hablantes aceptan participar;
2. se acuerda variante y terminología;
3. existe codiseño con jóvenes y educación intercultural;
4. se revisa un Circle completo;
5. se reconoce y, cuando corresponda, compensa el trabajo;
6. se prueba comprensión antes de habilitar IA generativa.

La lengua del pueblo Tsáchila es Tsáfiqui/Tsafiki; no debe confundirse con
Kichwa.

---

# Parte VI — Calendario y gates de entrega

## 20. Ruta crítica

| Fecha objetivo | Entrega | Gate |
|---|---|---|
| 30–31 julio | ensayo, consentimiento y logística | recorrido entendible y medible |
| 1 agosto | congelación técnica | solo errores críticos |
| 2–6 agosto | pilotos principales | datos y observaciones preservados |
| 7 agosto | análisis | cifras congeladas con limitaciones |
| 8–9 agosto | revisión AMI externa | observaciones registradas y resueltas |
| 10–11 agosto | redacción y diseño del PDF | diez páginas completas |
| 12–13 agosto | video | enlace público y subtítulos |
| 14 agosto | tres revisiones independientes | ningún criterio débil |
| 15 agosto | QA y envío interno | aprobación de los tres |
| 16 agosto | margen de contingencia | no depender de la última hora |

## 21. Gate del PDF

- [ ] Diez páginas o extensión final acordada.
- [ ] Todos los campos oficiales cubiertos.
- [ ] Cinco criterios visibles.
- [ ] Cada cifra tiene fuente y denominador.
- [ ] Resultados, planes y proyecciones están separados.
- [ ] No hay aliados, idiomas ni impacto inventados.
- [ ] Inglés revisado.
- [ ] Texto seleccionable.
- [ ] Menos de 10 MB.
- [ ] Enlaces públicos probados sin sesión.
- [ ] Aprobación de Axel, Nicole y José.

## 22. Gate del video

- [ ] Máximo tres minutos.
- [ ] Abre con el problema humano.
- [ ] Muestra el producto real.
- [ ] Explica la diferencia entre veredicto y entrenamiento.
- [ ] Incluye evidencia proporcional.
- [ ] Declara una limitación.
- [ ] Tiene subtítulos en inglés.
- [ ] Enlace público sin login.
- [ ] Coincide con cifras y lenguaje del PDF.

## 23. Gate final de candidatura

- [ ] Elegibilidad confirmada.
- [ ] Nombres legales revisados en privado.
- [ ] Equipo final de tres.
- [ ] Categoría correcta.
- [ ] Archivo correcto y dentro del límite.
- [ ] Video accesible.
- [ ] URL de demo accesible.
- [ ] Revisión independiente completada.
- [ ] Una sola versión final aprobada.
- [ ] Confirmación de envío conservada.

---

# Parte VII — Cómo usar esta recopilación

## 24. Ruta de lectura recomendada

### Para entender el estado en 20 minutos

1. Leer Partes I–III de este archivo.
2. Leer el anexo del dossier de postulación.
3. Revisar la guía de facilitación antes del ensayo.

### Para producir el PDF

1. Leer Partes IV–VI.
2. Trabajar directamente con el anexo de estructura definitiva del PDF.
3. Consultar la guía maestra para textos, fuentes, pitch y preguntas del jurado.
4. Usar el dossier de postulación como matriz de control.

### Para modificar o explicar el código

1. Leer README.
2. Leer Arquitectura y pruebas.
3. Leer Contributing.
4. Tratar MVP Technical Fixes como historial cerrado, no como backlog abierto.

## 25. Fuentes incorporadas

El generador añadirá una tabla con ruta, propósito y extensión, seguida del
contenido íntegro de cada fuente. No incorpora documentos privados con correos,
fechas de nacimiento u otros datos personales. Esa exclusión es una salvaguarda
de privacidad, no una omisión del proyecto.

## 26. Regla canónica final

> No ampliar el MVP para parecer más innovador. Demostrar que el producto
> funciona, medir con honestidad, hacer visible la participación juvenil y
> convertir cada afirmación importante en evidencia verificable.


## 27. Manifiesto de fuentes

| # | Ruta original | Para qué se usa | Líneas |
|---|---|---|---:|
| 1 | `public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md` | Estado de candidatura, matriz UNESCO, responsables, calendario y gates de envío. | 1027 |
| 2 | `public/docs/AURA_Estructura_Definitiva_PDF_UNESCO_2026.md` | Plano completo, página por página, para redactar y diseñar el PDF final. | 1498 |
| 3 | `public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md` | Investigación, estrategia, producto, IA, piloto, equipo, pitch, riesgos y fuentes. | 3096 |
| 4 | `public/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md` | Protocolo de 25 minutos, salvaguardas, métricas y registro de pilotos. | 440 |
| 5 | `README.md` | Estado verificable del producto, capacidades, ejecución, despliegue y estructura. | 503 |
| 6 | `docs/ARCHITECTURE_AND_TESTING.md` | Arquitectura modular, límites, pirámide de pruebas y cambios seguros. | 224 |
| 7 | `docs/DEVELOPMENT_ROADMAP.md` | Alcance congelado, trabajo posterior al piloto y expansión responsable. | 530 |
| 8 | `docs/AXEL_OPERATIONAL_INPUTS.md` | Decisiones reales de infraestructura, IA, presupuesto, equipo y pendientes. | 195 |
| 9 | `docs/MVP_TECHNICAL_FIXES.md` | Registro histórico de las correcciones técnicas críticas ya cerradas. | 254 |
| 10 | `CONTRIBUTING.md` | Reglas para cambiar código o contenido sin degradar el MVP ni su integridad. | 141 |
| 11 | `public/docs/AURA_Nota_Transparencia_Validacion_Tecnica_2026.md` | Regla de transparencia para distinguir demo técnica, MVP y evidencia de participantes. | 76 |

---

# Parte VIII — Anexos íntegros

Los anexos mantienen la redacción completa de las fuentes vigentes. Los enlaces
relativos conservan su ruta original y funcionan mejor al abrir el documento
fuente dentro del repositorio.

# Anexo 1 — public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md

> **Propósito de la fuente:** Estado de candidatura, matriz UNESCO, responsables, calendario y gates de envío.<br>
> **Extensión incorporada:** 1027 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles — Dossier de postulación y matriz UNESCO 2026

## Documento operativo para Hernández Axel, Nicole y José Luis

**Proyecto:** AURA Opportunity Circles
**Método:** AURA — Assess · Uncover · Research · Act
**Descriptor:** Youth-led practice for safer digital opportunities
**Versión funcional:** AURA Opportunity Circles 1.0.0
**Estado técnico:** producto funcional listo para pilotos; impacto no demostrado
**Fecha de referencia:** 30 de julio de 2026
**Fecha límite oficial:** 16 de agosto de 2026, 23:59, hora de París<br>
**Objetivo interno de envío:** 15 de agosto de 2026, 18:00, hora de Ecuador<br>
**Prototipo público:** <https://aura-opal-beta.vercel.app/><br>
**Repositorio:** <https://github.com/AxelJhostin/AURA><br>
**Rama de producción:** [`main`](https://github.com/AxelJhostin/AURA/commits/main/) — registrar el hash vigente en la ficha final de envío
**Línea base técnica verificada:** [`b6b7943`](https://github.com/AxelJhostin/AURA/commit/b6b7943fc6b0dfa778ab269d56d3ba6a77d02ca5) + [CI aprobada](https://github.com/AxelJhostin/AURA/actions/runs/30505243112)
**Fuente estratégica completa:** [Guía maestra de AURA](./AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md)
**Guía operativa:** [Opportunity Circles — facilitación y piloto](./AURA_Opportunity_Circles_Guia_Facilitacion.md)
**Archivo único para el equipo:** [Dossier colaborativo completo](./AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md)

---

## 1. Para qué sirve este documento

Esta es la matriz operativa de la postulación. Para incorporación y
colaboración, Axel, Nicole y José deben empezar por el
[dossier colaborativo completo](./AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md),
que incorpora íntegramente este archivo y las demás fuentes vigentes. Esta
matriz resume:

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

La primera exploración lingüística propuesta es **AURA Community Localization
Pilot — Kichwa**. Su estado es `FUTURO CONDICIONADO`: no hay traducción,
contactos, alianza, variante elegida ni comunidad confirmada. Solo podría
activarse después del piloto inicial mediante codiseño con hablantes,
educadores interculturales y jóvenes de una comunidad participante. El primer
Circle usaría contenido humano curado y no generación libre de IA.

Los límites que deben permanecer visibles son: casos simulados, ausencia de
seguimiento longitudinal, dependencia de la calidad de facilitación,
comprensión aún no probada con públicos diversos, fuentes regionales por
fortalecer e impacto e inclusión todavía no demostrados.

**Decisión operativa:** congelar funciones de 1.0.0. Solo se corrigen errores
críticos, privacidad, accesibilidad, exactitud editorial o barreras que impidan
completar y medir el Circle.

No escribir “AURA supports Kichwa”, “partnered with Kichwa communities” ni
“preserves indigenous languages”. El único lenguaje permitido antes de una
colaboración real es que el equipo **planea explorar** un piloto de localización
comunitaria Kichwa sujeto a codiseño, revisión y prueba con hablantes.

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
| El panel agregado se puede demostrar | Modo `AURA-DEMSAMPLEXYZ`, aviso visible y prueba unitaria | VERIFICADO TÉCNICAMENTE; NO ES PILOTO |
| Mejora una habilidad | Resultado de piloto | PENDIENTE |
| Es útil para el público | Observación y encuesta de piloto | PENDIENTE |
| Puede facilitarse en comunidad | Ensayo de facilitación | PENDIENTE |
| Tiene apoyo institucional | Carta o confirmación real | NO AFIRMAR |
| Es “la primera” solución | No existe evidencia suficiente | NO AFIRMAR |

### Regla de lenguaje

- **Realidad actual:** “AURA includes…”, “The public MVP demonstrates…”
- **Demo técnica:** “This dashboard uses client-only simulated data to demonstrate reporting; no participant outcomes are claimed.”
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

---

# Anexo 2 — public/docs/AURA_Estructura_Definitiva_PDF_UNESCO_2026.md

> **Propósito de la fuente:** Plano completo, página por página, para redactar y diseñar el PDF final.<br>
> **Extensión incorporada:** 1498 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles — Estructura definitiva del PDF UNESCO 2026

## Plano editorial, argumental y de evidencia para una candidatura de nivel ganador

**Proyecto:** AURA Opportunity Circles
**Método:** AURA — Assess · Uncover · Research · Act
**Descriptor:** Youth-led practice for safer digital opportunities
**Categoría:** Applications / Websites
**Áreas principales:** AI and MIL · MIL Education
**Áreas complementarias:** Community Impact · Youth Engagement
**Equipo:** Hernández Axel · Nicole Madelyne Pincay Soledispa · José Luis Cañarte Plúa
**Prototipo:** <https://aura-opal-beta.vercel.app/>
**Repositorio:** <https://github.com/AxelJhostin/AURA>
**Fecha de esta guía:** 30 de julio de 2026
**Fecha límite oficial:** 16 de agosto de 2026, 23:59, hora de París
**Objetivo interno de envío:** 15 de agosto de 2026, 18:00, hora de Ecuador
**Formato oficial:** PDF o Word, máximo 10 MB
**Base técnica comprobable:** 52 comprobaciones automatizadas y CI de 1.0.0
aprobada para el commit estable `b6b7943`.
**Archivo único para el equipo:** [Dossier colaborativo completo](./AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md)

---

## 1. Propósito de este archivo

Este documento define **cómo debe construirse el PDF final de AURA**, página por
página. No es todavía el texto definitivo de la propuesta. Es el plano que
Nicole, José y Axel deben seguir para convertir el producto funcional, los
resultados del piloto y la estrategia del proyecto en una candidatura:

- inmediatamente comprensible;
- alineada con todos los requisitos publicados;
- defendible ante especialistas en AMI/MIL, producto e impacto;
- basada en evidencia verificable;
- visualmente memorable;
- honesta sobre sus límites;
- fácil de revisar en pocos minutos;
- consistente con el formulario, la demo y el video.

La meta no es producir el documento más largo. La meta es que cada página haga
avanzar una sola tesis:

> **AURA Opportunity Circles trains young people to investigate scholarships,
> jobs, exchanges and youth programmes before giving away data, money or trust,
> then measures whether they can repeat the process without depending on AI.**

---

## 2. Requisitos oficiales que el PDF debe cubrir

La convocatoria oficial de UNESCO exige que el documento incluya:

1. integrantes del equipo;
2. planteamiento del problema;
3. objetivos;
4. público objetivo;
5. prototipo o concepto;
6. sostenibilidad;
7. creatividad;
8. viabilidad.

La evaluación publicada utiliza cinco criterios:

1. **Consistency with the Theme and MIL Principles**
2. **Clarity of Presentation**
3. **Innovation and Creativity**
4. **Feasibility and Sustainability**
5. **Impact and Inclusion**

UNESCO también anuncia que cada proyecto será revisado por tres expertos
internacionales. No publica pesos numéricos, extensión máxima en páginas,
rúbrica detallada ni un sistema automático de puntuación.

### Decisión editorial

El PDF final será:

- redactado principalmente en **inglés internacional claro**;
- de **10 páginas**;
- de aproximadamente **1.800–2.300 palabras**;
- construido con texto nativo y seleccionable;
- comprensible sin abrir la demo, pero reforzado por ella;
- exportado como
  `AURA_UNESCO_Youth_Hackathon_2026_Proposal.pdf`;
- inferior a 10 MB, con objetivo interno de 6–8 MB.

El inglés no debe sonar artificialmente académico. Se usarán frases cortas,
verbos concretos y términos que una persona de cualquier región pueda
comprender.

---

## 3. La tesis competitiva de AURA

El PDF debe demostrar cinco ideas en este orden:

1. **Existe un daño concreto:** oportunidades digitales urgentes pueden
   obtener documentos, dinero o credenciales aprovechando aspiraciones
   educativas y laborales.
2. **AURA ofrece una intervención concreta:** un Circle de 25 minutos combina
   práctica guiada, conversación entre pares y transferencia sin pistas.
3. **No es solo una idea:** existe un MVP público, bilingüe y funcional que
   completa todo el ciclo de aprendizaje.
4. **Su innovación es defendible:** IA socrática sin veredicto, evidencia
   visible, acción responsable y una prueba de transferencia.
5. **Puede generar impacto realista:** comienza con jóvenes de Ecuador, forma
   facilitadores pares y puede expandirse a otros tipos de decisiones.

### Posicionamiento que debe permanecer constante

> **Before giving away data, money or trust, investigate the opportunity. AURA
> trains the process and tests whether it transfers.**

### Lo que AURA no es

El PDF no debe presentar AURA como:

- detector universal de noticias falsas;
- sustituto de periodistas o verificadores;
- calificador automático de credibilidad;
- sistema de vigilancia de redes sociales;
- prueba definitiva de impacto educativo;
- producto ya adoptado por instituciones;
- plataforma que puede resolver cualquier contenido enviado por una persona.
- directorio que garantiza becas, empleos o intercambios;
- detector que declara fraude automáticamente.

### Oportunidades y límites que deben guiar la narrativa

La valoración interna del MVP es **8,5/10 como producto antes de pilotos**. Esta
cifra sirve para priorizar trabajo interno; no debe presentarse como nota de
UNESCO, probabilidad de ganar ni resultado educativo.

La narrativa debe aprovechar cinco oportunidades:

1. un problema concreto ligado con aspiraciones juveniles;
2. una intervención que puede salir de la pantalla mediante facilitadores;
3. transferencia medible como diferencia frente a alertas y chatbots;
4. IA responsable, opcional y subordinada a evidencia visible;
5. escala mediante paquetes locales y alianzas, no solo mediante más usuarios.

También debe declarar límites:

- casos simulados pendientes de revisión AMI externa;
- medición dentro de una sesión, sin evidencia longitudinal;
- calidad dependiente de facilitación y mantenimiento editorial;
- inclusión, conectividad y comprensión aún no probadas con públicos diversos;
- referencias ecuatorianas y latinoamericanas por fortalecer;
- funcionamiento offline/PWA todavía no implementado;
- impacto, adopción y alianzas no demostrados.

El MVP 1.0.0 permanece congelado. Las expansiones —más verticales, paneles,
PWA/offline, autoría distribuida e investigación longitudinal— pertenecen a la
hoja de ruta posterior al piloto y no deben inflar la descripción de lo
construido.

---

## 4. Patrones de proyectos ganadores que AURA debe incorporar

Los ganadores publicados por UNESCO en 2024 y 2025 no constituyen una rúbrica
oficial, pero muestran patrones útiles:

- público claramente delimitado;
- método o formato fácil de recordar;
- experiencia práctica, no solo informativa;
- inclusión conectada con una comunidad real;
- modalidad que puede funcionar fuera de una presentación;
- combinación de producto y estrategia de implementación;
- evidencia de progreso o capacidad de ejecución;
- explicación sencilla de por qué la intervención importa.

AURA ya tiene un método distintivo, un producto funcional y una experiencia
práctica. Para elevar la candidatura, el PDF debe hacer igualmente visibles:

- la comunidad inicial;
- la evidencia del piloto;
- la función de jóvenes facilitadores;
- los costos y recursos necesarios;
- el plan de los siguientes seis meses;
- los límites éticos y técnicos.

---

## 5. Regla de evidencia: construido, observado y proyectado

Toda afirmación debe pertenecer a una de estas tres categorías:

| Categoría | Qué significa | Lenguaje permitido |
|---|---|---|
| **Built** | Existe y puede comprobarse en el MVP | `AURA includes…`, `The current MVP allows…` |
| **Observed** | Fue medido u observado en el piloto | `In a pilot with N participants…` |
| **Planned** | Es una acción futura con responsable y fecha | `During the next six months, the team will…` |

Durante la redacción se pueden usar las marcas internas `[BUILT]`,
`[OBSERVED]` y `[PLANNED]`. Antes de exportar el PDF deben reemplazarse por
subtítulos visuales como:

- **Available now**
- **Early pilot evidence**
- **Next implementation phase**

### Lenguaje prohibido sin evidencia suficiente

No usar:

- `proven impact`;
- `eliminates misinformation`;
- `guarantees critical thinking`;
- `scalable worldwide`;
- `the first platform`;
- `UNESCO-endorsed`;
- `partnered with`;
- `users improved by X%` sin instrumento, denominador y cálculo verificable.

### Forma correcta de presentar resultados tempranos

> In a small pilot with **[[PILOT_N]]** participants,
> **[[COMPLETERS]]/[[PILOT_N]]** completed a guided mission and
> **[[TRANSFER_COMPLETERS]]/[[PILOT_N]]** completed the unguided transfer
> challenge. The average transfer score was **[[TRANSFER_AVG]]/6**. These
> findings are early usability and learning signals from a non-random sample,
> not causal proof of educational impact.

---

## 6. Arquitectura general del PDF

| Página | Encabezado principal | Trabajo estratégico | Criterio dominante |
|---:|---|---|---|
| 1 | `Executive Summary` | Lograr comprensión y curiosidad en 30 segundos | Clarity |
| 2 | `Problem Statement and Target Audience` | Demostrar una necesidad humana y específica | Impact and Inclusion |
| 3 | `Objectives and Theory of Change` | Mostrar cómo AURA convierte el problema en resultados medibles | Theme and MIL |
| 4 | `Functional Prototype` | Probar que existe una experiencia completa | Feasibility |
| 5 | `Consistency with the Theme and MIL Principles` | Hacer inequívoco el encaje con UNESCO | Theme and MIL |
| 6 | `Innovation and Creativity` | Defender la originalidad sin exagerarla | Innovation |
| 7 | `Early Evidence and Impact Measurement` | Presentar piloto, métricas y límites | Impact |
| 8 | `Inclusion and Community Implementation` | Demostrar acceso y agencia juvenil | Inclusion |
| 9 | `Feasibility and Sustainability` | Mostrar costos, riesgos, adopción y continuidad | Feasibility and Sustainability |
| 10 | `Team, Roadmap and Closing Case` | Probar capacidad de entrega y cerrar con claridad | Clarity and Delivery |

### Hilo narrativo

El documento debe sentirse como una sola historia:

> **A young person receives an urgent digital opportunity → the message asks
> for data, money or trust → AURA provides deliberate practice → the person
> traces the source and takes a proportionate action → an unguided challenge
> tests transfer → youth facilitators replicate the Circle.**

---

# Parte I — Especificación página por página

## 7. Página 1 — Executive Summary

### Objetivo

Permitir que una persona entienda el proyecto, su diferencia, su estado y su
relevancia en menos de 30 segundos.

### Encabezado exacto

> **AURA — Assess · Uncover · Research · Act**
> *A bilingual evidence-training lab for Media and Information Literacy*

### Contenido obligatorio

1. Eslogan: `From reaction to evidence.`
2. One-liner oficial.
3. Una frase de problema.
4. Una frase de solución.
5. Público inicial.
6. Estado real: `Functional public MVP`.
7. Categoría y áreas de enfoque.
8. Los tres integrantes y Ecuador.
9. URL visible de la demo.
10. QR probado hacia la demo.

### Texto base

> Young people can receive a verdict about one misleading post and still remain
> unprepared for the next. AURA turns viral claims into short bilingual
> evidence missions where learners identify a verifiable claim, inspect its
> context, trace auditable sources, justify a responsible action and transfer
> the same investigation habit to a new case. Socratic AI guides the process
> without issuing a truth verdict.

### Recurso visual principal

Una captura limpia del recorrido A-U-R-A en móvil o una composición de cuatro
pantallas, sin texto ilegible. Agregar una etiqueta pequeña:

> `Working prototype — live and publicly accessible`

### Banda de evidencia

Cinco datos breves, solo si están verificados:

- `4 bilingual guided missions`
- `1 unguided transfer challenge`
- `ES / EN`
- `Mobile-first`
- `[[PILOT_N]] pilot participants`

Si el piloto todavía no se realizó, eliminar el quinto dato. No usar cero ni
un espacio reservado visible.

### Presupuesto editorial

- 110–150 palabras.
- Una imagen principal.
- Máximo cinco datos destacados.

### Prueba de aceptación

Una persona que vea únicamente esta página debe poder responder:

- ¿Qué es AURA?
- ¿Para quién es?
- ¿Qué lo hace diferente?
- ¿Existe?
- ¿Dónde puede probarse?

---

## 8. Página 2 — Problem Statement and Target Audience

### Objetivo

Demostrar que el equipo entiende un problema educativo, no solo un problema de
contenido falso.

### Apertura humana

Comenzar con una escena concreta y corta:

> A student receives an urgent scholarship link in a group chat. The message
> looks credible, friends are forwarding it, and there is pressure to act
> quickly. The central challenge is not simply whether this link is false. It
> is whether the student knows what to check before trusting or sharing it.

### Problema principal

> Many interventions correct individual pieces of content. Fewer provide
> repeated, short and accessible opportunities to practise the investigation
> process itself. This leaves a transfer gap: a person may know yesterday’s
> answer without having a method for tomorrow’s claim.

### Público objetivo

Definir con precisión:

- **Primario:** university students and youth leaders aged 18–24 in Ecuador.
- **Contexto:** uso frecuente de WhatsApp, TikTok, Instagram y noticias
  digitales.
- **Necesidad:** decisiones rápidas frente a afirmaciones, imágenes, enlaces y
  mensajes reenviados.
- **Primer entorno de implementación:** universidades, grupos juveniles y
  sesiones facilitadas.

### Evidencia externa

Usar como máximo dos afirmaciones externas:

1. una fuente oficial o académica sobre la necesidad de competencias AMI/MIL
   en la era de IA;
2. una fuente oficial o académica sobre el valor de la lectura lateral,
   precisión o práctica basada en casos.

Cada cifra debe mostrar organización/autores, año y referencia. No incluir una
cifra solo porque sea llamativa.

### Recurso visual

Un diagrama de tres niveles:

`Viral claim → Borrowed verdict → Same vulnerability on the next claim`

Debajo:

`Viral claim → Guided investigation practice → Transferable habit`

### Sección de brecha

Usar el subtítulo:

> **The gap AURA addresses**

Separar claramente:

- problema social amplio: misinformation and low-quality information;
- problema educativo abordable: insufficient practice of investigation
  behaviours;
- alcance de AURA: training, not universal verification.

### Presupuesto editorial

- 180–230 palabras.
- Dos fuentes principales como máximo.
- Un diagrama simple.

### Prueba de aceptación

El evaluador no debe preguntarse:

- “¿Por qué otra aplicación de fact-checking?”
- “¿Quién necesita esto exactamente?”
- “¿Qué parte del problema puede resolver realmente este equipo?”

---

## 9. Página 3 — Objectives and Theory of Change

### Objetivo

Mostrar que AURA tiene una lógica educativa medible y que sus objetivos
corresponden con el producto.

### Objetivo general

> To strengthen young people’s ability to investigate digital claims, evaluate
> evidence, communicate uncertainty and choose responsible information actions
> without depending on automated truth verdicts.

### Objetivos específicos

Usar cuatro objetivos observables:

1. Help learners identify a verifiable claim and pause before sharing.
2. Train source, context and incentive inspection through Socratic prompts.
3. Practise lateral reading, primary-source tracing and corroboration.
4. Measure whether learners can reuse these behaviours in an unguided case.

### Teoría de cambio

Representar como una línea de cinco pasos:

| Inputs | Activities | Outputs | Early outcomes | Longer-term contribution |
|---|---|---|---|---|
| Bilingual cases, auditable evidence, web MVP, youth facilitators | A-U-R-A mission, Evidence Map, Evidence Card, transfer challenge | Completed investigations and coded behaviours | Better claim identification, source tracing, corroboration and calibrated action | More independent and responsible participation in digital information environments |

### Hipótesis central

> If young people repeatedly practise an explicit investigation process on
> varied claims, receive questions instead of verdicts and demonstrate the
> process on a new case, then they are more likely to build transferable MIL
> behaviours rather than borrow a one-time answer.

### Indicadores vinculados

No colocar métricas decorativas. Relacionar cada objetivo con una medida:

| Objetivo | Indicador |
|---|---|
| Pausar e identificar | selección de afirmación verificable y acción inicial |
| Inspeccionar | señales de contexto, procedencia e incentivos reconocidas |
| Investigar | selección y comparación de fuentes |
| Transferir | puntuación `0–6` en caso no guiado |

### Límite explícito

> The current pilot can provide early evidence about usability and observable
> investigation behaviours. It cannot yet establish long-term or causal
> educational impact.

### Presupuesto editorial

- 180–220 palabras.
- Una teoría de cambio.
- Una tabla de indicadores.

### Prueba de aceptación

Cada objetivo debe aparecer luego en el producto y en el sistema de medición.
Si un objetivo no puede demostrarse ni medirse, debe reformularse.

---

## 10. Página 4 — Functional Prototype

### Objetivo

Probar que AURA ya funciona y que el recorrido implementa la teoría de cambio.

### Apertura

> AURA is not a concept-only submission. Its public MVP implements the complete
> learning loop and is ready for supervised real-world pilots.

### Recorrido que debe mostrarse

Usar una secuencia visual numerada:

1. **Assess / Analiza** — identify the claim and record an initial reaction.
2. **Uncover / Ubica** — inspect context, signals, creator and incentives.
3. **Research / Rastrea** — trace and compare visible sources.
4. **Act / Actúa** — communicate what is supported, uncertain and responsible.
5. **Evidence Card** — produce a transparent investigation artefact.
6. **Transfer Challenge** — apply the method to a new, unguided case.

### Capacidades disponibles ahora

Seleccionar solo las más relevantes:

- four balanced bilingual guided missions;
- Socratic AI with curated fallback questions;
- auditable source records separated from simulated learning artefacts;
- anonymous, consent-based measurement;
- optional pre/post confidence pulse;
- facilitator pilot links and aggregate reporting;
- mobile layout and Spanish/English interface.
- automated quality gates across domain rules, API routes, production build
  and database security.

La evidencia técnica debe ocupar como máximo una línea o un pequeño pie. Es una
prueba de capacidad y viabilidad, no el argumento pedagógico principal.

### IA responsable

Incluir un recuadro:

> **AI asks; evidence remains visible; the learner decides.**

Explicar en dos frases:

- la IA no emite un veredicto;
- si la IA falla, la experiencia continúa mediante preguntas revisadas.

### Enlaces

Mostrar ambos como texto y no depender solo del QR:

- `Live prototype: https://aura-opal-beta.vercel.app/`
- `Source repository: https://github.com/AxelJhostin/AURA`

### Recursos visuales

- tres o cuatro capturas con pies de máximo 12 palabras;
- al menos una captura móvil;
- una captura de `Research / Rastrea`;
- una captura de la Tarjeta de Evidencia o transferencia.

### Presupuesto editorial

- 150–200 palabras.
- Máximo cuatro capturas.
- Ninguna captura con texto esencial ilegible.

### Prueba de aceptación

Un evaluador debe poder distinguir entre:

- funcionalidad existente;
- contenido educativo simulado;
- resultado futuro.

---

## 11. Página 5 — Consistency with the Theme and MIL Principles

### Objetivo

Hacer imposible que AURA sea interpretado como una aplicación genérica de IA.

### Tema oficial

Incluir literalmente:

> **Play Your Part: Youth Designing the Future of Media and Information
> Literacy**

### Encaje con las áreas

| Área | Contribución de AURA |
|---|---|
| **AI and MIL** | Uses bounded Socratic AI while teaching critical engagement with evidence and AI-generated information environments |
| **MIL Education** | Converts MIL competencies into a short, repeatable investigation experience |
| **Community Impact** | Enables facilitated pilots and future youth-led AURA Circles |
| **Youth Engagement** | Positions young people as investigators, facilitators and co-designers rather than passive recipients |

### Mapeo A-U-R-A con competencias AMI/MIL

| Método | Conducta AMI/MIL observable |
|---|---|
| Assess | identify fact-checkable claims; pause before amplification |
| Uncover | examine authorship, context, purpose, incentives and missing information |
| Research | search laterally; trace original sources; compare independent evidence |
| Act | communicate uncertainty; choose proportional and responsible action |

### Agencia y libertad de expresión

Incluir:

> AURA does not prescribe political beliefs or assign credibility scores to
> people. It strengthens the learner’s agency to ask questions, examine
> evidence, tolerate uncertainty and participate responsibly.

### “Play Your Part”

La conexión no debe ser decorativa:

> In AURA, “Play Your Part” becomes an observable action: the learner pauses,
> investigates, documents and decides before amplifying a claim. Youth
> facilitators can then bring the same practice into their own communities.

### Fuentes recomendadas

Priorizar referencias de UNESCO:

- UNESCO MIL Curriculum;
- MIL competencies in the age of AI and social media;
- Journey through the MILtiverse.

### Presupuesto editorial

- 180–230 palabras.
- Dos tablas compactas.
- Una referencia visible al tema oficial.

### Prueba de aceptación

Un especialista AMI/MIL debe encontrar:

- agencia;
- acceso y evaluación crítica;
- producción/acción responsable;
- incertidumbre;
- libertad de expresión;
- participación juvenil;
- IA subordinada al aprendizaje.

---

## 12. Página 6 — Innovation and Creativity

### Objetivo

Defender una combinación novedosa de decisiones, sin afirmar que AURA es
“único en el mundo”.

### Frase central

> AURA’s innovation is not AI alone. It is the integration of Socratic
> guidance, auditable evidence, responsible action and transfer measurement
> within one short bilingual learning loop.

### Comparación defendible

| Enfoque común | AURA |
|---|---|
| Delivers a verdict about one item | Trains an investigation process |
| User receives the answer | Learner builds and explains a conclusion |
| Black-box confidence or credibility score | Visible sources and uncertainty |
| Success means agreement | Success means observable reasoning and transfer |
| AI is the authority | AI asks bounded questions |
| One completed case is the endpoint | A new unguided case tests reuse |

### Cuatro capas de innovación

1. **Pedagogical:** observable practice instead of passive advice.
2. **Product:** Evidence Map and Evidence Card make reasoning inspectable.
3. **AI design:** questions without verdicts, with a non-AI fallback.
4. **Evaluation:** transfer to a different case, not only completion or
   satisfaction.

### Equilibrio pedagógico

Explicar que la biblioteca no debe enseñar sospecha generalizada:

> AURA includes misleading, supported-with-limits and insufficient-evidence
> cases. The goal is discernment, not automatic distrust.

### Competencia y humildad

Reconocer que fact-checkers, cursos, juegos y chatbots cumplen funciones
valiosas. La tesis es que AURA ocupa una brecha específica:

> AURA complements verification and MIL education by providing short,
> repeatable practice with visible evidence and transfer measurement.

### Tabla comparativa recomendada

| Enfoque | Fortaleza que se reconoce | Posición honesta de AURA |
|---|---|---|
| Fact-checkers | Resuelven afirmaciones concretas con investigación profesional | AURA practica el proceso que una persona reutiliza antes y después de consultar verificaciones |
| TITAN | Entrenamiento socrático con IA y evaluación de pensamiento crítico | AURA no reclama inventar lo socrático; integra misión compacta, evidencia trazable, seis conductas de transferencia y facilitación juvenil ES/EN |
| Checkology | Currículo amplio, recursos docentes y evaluación escolar | AURA es una intervención breve, sin registro y preparada para pilotos o círculos entre pares |

No usar esta tabla para declarar superioridad general. Usarla para definir alcance:
AURA complementa soluciones existentes y resuelve una situación de uso más
estrecha.

### Presupuesto editorial

- 170–220 palabras.
- Una tabla comparativa.
- Máximo cuatro innovaciones.

### Prueba de aceptación

Después de esta página, el evaluador debe poder repetir la diferencia de AURA
en una sola frase.

---

## 13. Página 7 — Early Evidence and Impact Measurement

### Objetivo

Mostrar evidencia real y proporcional. Esta página será una de las más
importantes de toda la candidatura.

### Si el piloto ya está completo

Incluir:

- fechas;
- número de participantes;
- perfil general sin datos personales;
- contexto y dispositivo;
- cantidad que inició y terminó;
- cantidad que completó transferencia;
- promedio y distribución `0–6`;
- respuestas pre/post pareadas;
- tiempo mediano;
- dos hallazgos de usabilidad;
- cambios realizados;
- limitaciones.

### Tabla de resultados

| Medida | Resultado | Interpretación permitida |
|---|---:|---|
| Participants started | `[[STARTED]]` | alcance del piloto |
| Guided mission completed | `[[COMPLETED]]/[[STARTED]]` | señal de finalización |
| Transfer challenge completed | `[[TRANSFER_N]]/[[STARTED]]` | señal de participación en evaluación |
| Mean transfer score | `[[MEAN]]/6` | conducta observada en un caso nuevo |
| Median completion time | `[[MINUTES]] min` | señal de usabilidad |
| Paired confidence responses | `[[PAIRED_N]]` | base del cambio autoinformado |
| Confidence pre/post | `[[PRE]]/5 → [[POST]]/5` | autopercepción, no desempeño |

### Visual recomendado

Un gráfico pequeño con:

- finalización;
- distribución de transferencia de 0 a 6;
- pre/post solo si las respuestas están correctamente pareadas.

No usar porcentajes sin mostrar también el denominador.

### Resultados cualitativos

Incluir máximo dos citas cortas, solo con autorización y sin identificar a la
persona. Ejemplo:

> “[[AUTHORIZED_QUOTE]]” — Pilot participant, age range [[RANGE]]

### Limitaciones obligatorias

> This was a small, non-random and short-term pilot. Results may be affected by
> facilitator presence, device access and participant self-selection. They are
> presented as early usability and learning signals, not causal proof.

### Si el piloto todavía no está cerrado

No inventar resultados. Sustituir temporalmente la tabla por:

- instrumento;
- protocolo;
- indicadores;
- criterio de análisis;
- una demostración técnica claramente rotulada, si ayuda a explicar el panel.

Si se muestra `AURA-DEMSAMPLEXYZ`, conservar en la captura y en el texto el
aviso “Technical demonstration · simulated data”. Su contenido prueba la
interfaz, no el impacto, y no reemplaza la tabla de un piloto. La versión
enviada no debe inventar una fecha, muestra ni resultado humano: es preferible
explicar el piloto futuro con precisión.

### Presupuesto editorial

- 170–220 palabras.
- Una tabla de resultados.
- Un gráfico.
- Máximo dos citas.

### Prueba de aceptación

Cada cifra debe tener:

- denominador;
- fecha;
- definición;
- fuente de datos;
- responsable de verificación.

---

## 14. Página 8 — Inclusion and Community Implementation

### Objetivo

Demostrar que inclusión no es una palabra añadida al final, sino un conjunto de
decisiones de diseño y operación.

### Público y barreras

Presentar una tabla:

| Barrera | Respuesta actual | Próximo paso verificable |
|---|---|---|
| Mobile-first access | responsive interface down to 320 px | test on low-end Android devices |
| Language | complete Spanish and English experiences | explore a Kichwa community localization pilot only after co-design with speakers and educators |
| Limited connectivity | short sessions and non-AI fallback | downloadable facilitator materials |
| Privacy concerns | no account for core experience; consent-based anonymous metrics | publish plain-language privacy notice |
| Unequal access to individual devices | facilitator-led group use | pilot AURA Circles |
| Different confidence or literacy levels | Socratic prompts and visible evidence | accessibility and comprehension testing |

### Opportunity Circles

Presentar como formato implementado y listo para pilotos, no como impacto ya
demostrado:

> **AURA Opportunity Circles** are 25-minute peer-led sessions where young
> people investigate a simulated opportunity, discuss evidence and complete an
> unguided transfer challenge.

Definir el formato:

- 25 minutos;
- 6–20 participantes;
- un facilitador joven;
- un dispositivo por persona o trabajo en parejas;
- guía reutilizable;
- conversación sobre incertidumbre y acción responsable;
- reporte agregado sin datos personales.

### Participación juvenil

Mostrar tres niveles:

1. youth as learners;
2. youth as peer facilitators;
3. youth as co-designers of locally relevant cases.

### Inclusión que no debe afirmarse todavía

No afirmar accesibilidad plena, funcionamiento offline completo, adopción
comunitaria ni validación con grupos marginados hasta probarlos.

### Presupuesto editorial

- 170–220 palabras.
- Una tabla de barreras.
- Un diagrama de AURA Circles.

### Prueba de aceptación

La página debe nombrar:

- una comunidad inicial;
- barreras reales;
- decisiones presentes;
- mejoras futuras;
- cómo participarán jóvenes en la implementación.

---

## 15. Página 9 — Feasibility and Sustainability

### Objetivo

Probar que el proyecto puede mantenerse, implementarse y aprender sin depender
de promesas vagas.

### Estado de preparación

Incluir:

> The technical MVP scope is complete and publicly deployed. The current
> priority is real-world validation, editorial strengthening and a repeatable
> facilitator model—not additional feature expansion.

### Arquitectura y recursos

Explicar en lenguaje no técnico:

- aplicación web pública;
- contenido educativo estructurado y reutilizable;
- preguntas de respaldo para no depender completamente de IA;
- medición anónima con consentimiento;
- infraestructura pequeña y de bajo costo;
- repositorio versionado.
- reglas críticas separadas de la interfaz y CI reproducible;
- pruebas de restricciones y RLS en una base local aislada.

### Plan de seis meses

| Periodo | Resultado | Indicador |
|---|---|---|
| Month 1 | refine MVP from pilot findings | critical issues resolved and cases reviewed |
| Months 2–3 | run university/youth-organization pilots | sessions, completion and transfer data |
| Months 3–4 | publish facilitator kit and case-authoring standard | reviewed kit and reusable case template |
| Months 4–5 | train youth facilitators | facilitators trained and sessions delivered |
| Months 5–6 | evaluate regional adaptation and the feasibility of a Kichwa community localization pilot | report, partner feedback and a go/no-go decision based on real collaboration |

### Modelo de sostenibilidad

Separar:

- **Core access:** free learner experience and base case library.
- **Content:** reusable and locally adaptable case packs.
- **Implementation:** facilitator training and partner-led sessions.
- **Support:** grants, universities, civil-society partners and institutional
  sponsorship.
- **Learning loop:** pilot evidence informs product and content revisions.

### Presupuesto

Incluir una tabla solo cuando Axel proporcione cifras verificadas:

| Rubro | MVP actual | Piloto de 6 meses | Supuesto |
|---|---:|---:|---|
| Hosting and database | `[[COST]]` | `[[COST]]` | expected usage |
| AI usage | `[[COST]]` | `[[COST]]` | requests per participant |
| Content review | `[[COST]]` | `[[COST]]` | reviewer hours |
| Facilitation and outreach | `[[COST]]` | `[[COST]]` | sessions and transport |
| Accessibility/localization | `[[COST]]` | `[[COST]]` | testing and adaptation |

Si aún no existen cifras defendibles, usar recursos y supuestos, no montos
inventados.

### Riesgos y mitigaciones

Seleccionar cuatro:

- overreliance on AI → visible evidence and fallback prompts;
- generalized distrust → balanced cases;
- weak adoption → facilitator-led pilots and partner feedback;
- privacy risk → data minimization and explicit consent.

### Presupuesto editorial

- 200–250 palabras.
- Una hoja de ruta.
- Una tabla pequeña de recursos o presupuesto.
- Cuatro riesgos como máximo.

### Prueba de aceptación

El evaluador debe encontrar:

- qué existe;
- cuánto trabajo requiere la siguiente fase;
- quién puede adoptarlo;
- qué recursos necesita;
- cómo controla sus principales riesgos.

---

## 16. Página 10 — Team, Roadmap and Closing Case

### Objetivo

Demostrar capacidad de ejecución y cerrar con una frase que el jurado recuerde.

### Equipo

Usar responsabilidades vinculadas con entregables:

> **Hernández Axel — Product and Technical Lead.** Software engineer
> responsible for product architecture, development, responsible AI,
> analytics, data protection, deployment and technical demonstration.

> **Nicole Madelyne Pincay Soledispa — Strategy and Impact Lead.**
> International Business student responsible for audience research, pilot
> operations, inclusion, sustainability, partnerships, narrative and pitch
> coordination.

> **José Luis Cañarte Plúa — Research and Editorial Lead.** Responsible for
> evidence review, report structure, references, English-language editing and
> submission quality control.

No incluir correos personales en el PDF público salvo que el formulario o el
equipo decidan expresamente usar un correo de contacto. El formulario ya
recopila los correos.

### Evidencia de capacidad

Mostrar:

- MVP diseñado, construido y desplegado;
- release 1.0.0 con 52 comprobaciones automatizadas y CI aprobada;
- responsabilidades complementarias;
- plan de piloto;
- sistema de medición;
- calendario de seis meses;
- repositorio y demo verificables.

### Próximos hitos

Usar tres:

1. validate with young people in Ecuador;
2. strengthen cases and facilitator materials;
3. expand through youth and university partnerships.

### Cierre

> **Fact-checks can correct yesterday’s post. AURA trains young people to
> investigate tomorrow’s.**

Agregar una última línea:

> By moving from reaction to evidence, learners do not borrow a verdict—they
> build a habit.

### Pie final

- URL completa de la demo;
- QR;
- repositorio;
- contacto del líder, solo si el equipo lo aprueba;
- referencias abreviadas.

### Referencias

Usar un sistema compacto de notas numeradas y una lista final de fuentes
principales. Las referencias completas pueden ocupar el tercio inferior de la
página. Toda fuente citada debe ser accesible y corresponder exactamente con la
afirmación.

### Presupuesto editorial

- 160–210 palabras, sin contar referencias.
- Tres perfiles.
- Tres hitos.
- Un cierre.

### Prueba de aceptación

El jurado debe terminar con tres certezas:

- el equipo puede ejecutar;
- sabe qué validar después;
- AURA tiene una propuesta de valor memorable.

---

# Parte II — Sistema visual y legibilidad

## 17. Dirección visual

El PDF debe parecer una propuesta de innovación educativa seria y joven, no un
informe burocrático ni una presentación tecnológica genérica.

### Principios

- fondo claro;
- alto contraste;
- un color principal de AURA y un color de acento;
- mucho espacio en blanco;
- títulos grandes;
- párrafos cortos;
- iconografía coherente;
- capturas reales del producto;
- números destacados solo cuando aporten evidencia;
- máximo dos tipografías.

### Tipografía recomendada

- Títulos: 22–30 pt.
- Subtítulos: 14–18 pt.
- Cuerpo: 10.5–12 pt.
- Notas y referencias: mínimo 8.5–9 pt.
- Interlineado: 1.15–1.35.

No reducir el cuerpo para hacer entrar más texto. Recortar contenido es mejor
que sacrificar legibilidad.

### Retícula

- márgenes mínimos de 16–20 mm;
- una o dos columnas;
- numeración visible;
- pie con `AURA · UNESCO Youth Hackathon 2026`;
- encabezado de criterio en páginas 5–9;
- alineación consistente de tablas y capturas.

### Capturas

Cada captura debe:

- provenir de la versión de producción;
- estar en el mismo idioma que el PDF, cuando sea posible;
- tener resolución suficiente;
- mostrar solo una función importante;
- llevar un pie que explique qué prueba;
- ocultar datos de prueba innecesarios;
- no contener claves, paneles privados ni información personal.

### Diagramas

Los diagramas deben tener texto editable o vectorial. No usar gráficos
decorativos generados con texto ilegible. Los cuatro diagramas prioritarios son:

1. brecha de transferencia;
2. método A-U-R-A;
3. teoría de cambio;
4. modelo AURA Circles.

---

## 18. Anatomía obligatoria de una página

Cada página, salvo portada, debe contener:

1. **Claim:** una afirmación central visible.
2. **Evidence:** un dato, función, fuente o resultado que la sostenga.
3. **Meaning:** una frase que explique por qué importa.
4. **Limit or next step:** límite relevante o acción futura.

Ejemplo:

> **Claim:** AURA measures transfer, not only completion.
> **Evidence:** The MVP includes an unguided challenge scored from 0–6 across
> six observable investigation behaviours.
> **Meaning:** This checks whether the learner can reuse the investigation
> process on a new topic.
> **Limit:** The first pilot provides an early signal and does not prove
> long-term retention.

---

## 19. Lenguaje para lectura humana y extracción de texto

### Hacer

- usar los encabezados oficiales en inglés;
- escribir `Media and Information Literacy (MIL)` la primera vez;
- usar siempre `AURA` en mayúsculas;
- mantener `Assess · Uncover · Research · Act`;
- incluir enlaces completos además del QR;
- escribir cifras como `12/15 participants (80%)`;
- indicar fuente y año;
- usar tablas con encabezados simples;
- mantener texto nativo y seleccionable;
- incluir texto alternativo durante la edición del documento fuente.

### No hacer

- ocultar palabras clave;
- repetir criterios sin contenido;
- convertir páginas completas en imágenes;
- colocar texto blanco o metadatos engañosos;
- abusar de siglas;
- usar superlativos imposibles de probar;
- presentar planes como resultados;
- depender de un QR;
- incluir una tabla ilegible con decenas de filas;
- usar logos de UNESCO o instituciones sin autorización.

---

# Parte III — Evidencia, fuentes y control

## 20. Registro maestro de afirmaciones

Antes de redactar, crear una fila por cada cifra o afirmación fuerte:

| ID | Afirmación | Tipo | Fuente | Fecha | Página | Responsable | Estado |
|---|---|---|---|---|---:|---|---|
| C-01 | MVP has four bilingual guided missions | Built | production demo/repository | [[DATE]] | 1, 4 | Axel | Verified |
| C-01b | Technical release passed 52 automated checks | Built | CI run + stable commit | 29-07-2026 | 4, 9 | Axel | Local verification complete; CI pending |
| C-02 | Pilot included N participants | Observed | pilot export | [[DATE]] | 1, 7 | Axel + Nicole | Pending |
| C-03 | AURA Circles will be piloted | Planned | six-month roadmap | [[DATE]] | 8, 9 | Nicole | Approved |

### Regla

Una afirmación no entra al PDF si:

- no tiene fuente;
- la fuente no dice lo que afirmamos;
- no tiene fecha;
- no distingue resultado de plan;
- ninguna persona acepta responsabilidad por verificarla.

---

## 21. Paquete mínimo de evidencia

### Evidencia técnica

- demo pública;
- commit estable
  [`b6b7943`](https://github.com/AxelJhostin/AURA/commit/b6b7943fc6b0dfa778ab269d56d3ba6a77d02ca5);
- [CI aprobada](https://github.com/AxelJhostin/AURA/actions/runs/30505243112);
- capturas de producción;
- build, TypeScript y lint;
- 14 pruebas unitarias, 7 de integración, 19 comprobaciones de
  contrato/build y 12 aserciones pgTAP;
- recorrido bilingüe;
- modo sin IA;
- instrumento de medición;
- política de datos mínimos.

No convertir cobertura o número de pruebas en una afirmación de impacto. Solo
demuestran disciplina de implementación y reducción de riesgo técnico.

### Evidencia educativa

- objetivos observables;
- mapeo A-U-R-A con competencias AMI/MIL;
- rúbrica de transferencia;
- variedad equilibrada de casos;
- revisión de fuentes;
- limitaciones pedagógicas.

### Evidencia de piloto

- protocolo;
- consentimiento;
- rango y perfil general de participantes;
- datos anónimos;
- denominadores;
- resultados;
- problemas observados;
- cambios realizados;
- limitaciones.

### Evidencia operativa

- roles del equipo;
- hoja de ruta;
- recursos y costos;
- riesgos;
- modelo de facilitación;
- estrategia de sostenibilidad.

---

## 22. Fuentes prioritarias

### Requisitos y evaluación

- [UNESCO Youth Hackathon 2026](https://www.unesco.org/en/articles/unesco-youth-hackathon-2026)
- [UNESCO Youth Hackathon — página general](https://www.unesco.org/en/media-information-literacy/youth-hackathon)
- [Portal oficial de entrega](https://tally.so/r/MePkYk)

### Marco AMI/MIL

- [UNESCO MIL competencies in the age of AI and social media](https://www.unesco.org/mil4teachers/en/module11/unit2)
- [UNESCO MIL and misinformation](https://www.unesco.org/mil4teachers/en/module4/unit5)
- [UNESCO MIL Curriculum — Think Critically, Click Wisely](https://iite.unesco.org/publications/media-and-information-literate-citizens-think-critically-click-wisely/)
- [Journey through the MILtiverse](https://www.unesco.org/en/articles/journey-through-miltiverse)

### Referentes del Hackathon

- [Ganadores UNESCO Youth Hackathon 2025](https://www.unesco.org/en/articles/global-youth-lead-way-media-and-information-literacy-meet-unesco-hackathon-2025-winners)
- [Ganadores UNESCO Youth Hackathon 2024](https://www.unesco.org/en/articles/winners-unescos-youth-hackathon-2024-shape-future-media-and-information-literacy)

### Evidencia académica

Usar solo trabajos que el equipo haya leído y pueda explicar. Para cada estudio:

- citar el hallazgo exacto;
- evitar generalizar más allá de la muestra;
- registrar DOI o URL estable;
- confirmar autores y año;
- explicar cómo influyó en una decisión de diseño de AURA.

---

## 23. Matriz final de cumplimiento

| Requisito o criterio | Página principal | Evidencia mínima | Dueño |
|---|---:|---|---|
| Team members | 10 | roles, capacidades y entregables | José |
| Problem statement | 2 | escena, brecha y fuentes | Nicole + José |
| Objectives | 3 | objetivo general y cuatro objetivos observables | Nicole |
| Target audience | 2, 8 | segmento, contexto y barreras | Nicole |
| Prototype or concept | 4 | capturas, demo y recorrido | Axel |
| Sustainability | 9 | modelo, recursos y seis meses | Nicole + Axel |
| Creativity | 6 | comparación y cuatro capas | José + Axel |
| Feasibility | 4, 9 | MVP, arquitectura, costos y riesgos | Axel |
| Theme and MIL | 5 | tema, áreas y competencias | Nicole + José |
| Clarity | todas | hilo, jerarquía y consistencia | José |
| Innovation | 6 | IA socrática, trazabilidad y transferencia | Axel + José |
| Impact | 3, 7 | teoría de cambio y piloto | Nicole + Axel |
| Inclusion | 2, 8 | barreras, decisiones y AURA Circles | Nicole |

---

# Parte IV — Flujo de producción

## 24. Orden correcto de trabajo

### Fase 1 — Cerrar evidencia

Antes del texto final:

- ejecutar el piloto;
- exportar y limpiar datos;
- calcular métricas;
- registrar limitaciones;
- verificar todas las funciones mostradas;
- cerrar costos y supuestos;
- confirmar próximos hitos.

### Fase 2 — Redactar por bloques

1. Nicole redacta problema, público, impacto, inclusión y sostenibilidad.
2. Axel redacta prototipo, IA responsable, viabilidad, costos y riesgos
   técnicos.
3. José convierte ambos insumos en una sola voz editorial en inglés, verifica
   fuentes y elimina afirmaciones débiles.

### Fase 3 — Diseño

- construir la retícula;
- preparar capturas;
- dibujar diagramas;
- montar tablas;
- mantener referencias vinculadas;
- comprobar peso desde la primera exportación.

### Fase 4 — Revisión de tres expertos

Simular los perfiles anunciados por UNESCO:

1. especialista AMI/MIL;
2. producto y viabilidad;
3. impacto e inclusión.

Cada revisor asigna:

- `0` — ausente;
- `1` — afirmado sin evidencia;
- `2` — evidencia parcial;
- `3` — evidencia clara, proporcional y fácil de encontrar.

| Criterio | Revisor A | Revisor B | Revisor C | Debilidad | Cambio requerido |
|---|---:|---:|---:|---|---|
| Theme and MIL |  |  |  |  |  |
| Clarity |  |  |  |  |  |
| Innovation |  |  |  |  |  |
| Feasibility and Sustainability |  |  |  |  |  |
| Impact and Inclusion |  |  |  |  |  |

### Condición interna

- ningún criterio con mediana inferior a `2`;
- Theme and MIL e Innovation con mediana `3`;
- ninguna cifra sin fuente;
- ningún revisor confunde AURA con un fact-checker;
- los tres encuentran demo, público, diferencia e impacto en menos de dos
  minutos.

---

## 25. Control de consistencia con video y formulario

Los siguientes campos deben ser idénticos:

| Elemento | PDF | Video | Formulario |
|---|---|---|---|
| Nombre | AURA | AURA | AURA |
| Expansión | Assess · Uncover · Research · Act | misma | misma si existe campo |
| Categoría | Applications / Websites | mencionar una vez | seleccionar exactamente |
| Equipo | Axel, Nicole, José | mismos tres | mismos datos legales |
| Público | youth aged 18–24 in Ecuador | mismo | misma introducción |
| Estado | functional public MVP; pilot status real | mismo | misma descripción |
| Métricas | cifras finales verificadas | mismas | mismas si se mencionan |
| Demo | URL canónica | mostrar/probar | incluir en propuesta |

Usar una sola hoja de cifras finales. Nadie debe copiar datos desde versiones
antiguas del documento.

---

## 26. Checklist de exportación

### Contenido

- [ ] Están los ocho componentes obligatorios.
- [ ] Están los cinco criterios con encabezados fáciles de encontrar.
- [ ] El problema es educativo, concreto y delimitado.
- [ ] El público está definido por edad, lugar y contexto.
- [ ] La demo aparece antes de la mitad del documento.
- [ ] La diferencia con un fact-checker es inequívoca.
- [ ] El uso de IA tiene límites claros.
- [ ] El impacto se expresa con indicadores y no con promesas.
- [ ] Inclusión contiene decisiones concretas.
- [ ] Sostenibilidad contiene recursos, adopción y calendario.
- [ ] El equipo tiene responsabilidades vinculadas con entregables.
- [ ] Cada resultado distingue denominador y limitación.

### Evidencia

- [ ] Cada cifra tiene fuente, fecha y responsable.
- [x] El commit estable y la ejecución de CI corresponden a la versión mostrada.
- [x] “52 comprobaciones” se usa como evidencia técnica, no como impacto educativo.
- [ ] Cada cita del piloto tiene autorización.
- [ ] No hay participantes identificables.
- [ ] No hay aliados no confirmados.
- [ ] No se usan superlativos no demostrables.
- [ ] Built, Observed y Planned no se mezclan.
- [ ] Las fuentes académicas fueron leídas por el equipo.

### Diseño

- [ ] Texto nativo y seleccionable.
- [ ] Cuerpo de al menos 10.5 pt.
- [ ] Contraste suficiente.
- [ ] Capturas legibles.
- [ ] Números de página.
- [ ] URLs completas.
- [ ] QR probado.
- [ ] Sin logos no autorizados.
- [ ] Sin texto oculto.
- [ ] Nombre de archivo correcto.
- [ ] Peso inferior a 10 MB.

### Prueba externa

- [ ] Se abrió en computadora.
- [ ] Se abrió en móvil.
- [ ] Se probó en incógnito.
- [ ] Los enlaces funcionan.
- [ ] La demo funciona sin login.
- [ ] Tres personas realizaron la simulación de evaluación.
- [ ] Una persona externa pudo explicar AURA después de leer dos páginas.

---

## 27. Campos que deberán reemplazarse

Antes de producir la versión final, buscar `[[` en el documento de trabajo y
reemplazar:

- `[[PILOT_N]]`
- `[[STARTED]]`
- `[[COMPLETED]]`
- `[[COMPLETERS]]`
- `[[TRANSFER_N]]`
- `[[TRANSFER_COMPLETERS]]`
- `[[TRANSFER_AVG]]`
- `[[MEAN]]`
- `[[MINUTES]]`
- `[[PAIRED_N]]`
- `[[PRE]]`
- `[[POST]]`
- `[[AUTHORIZED_QUOTE]]`
- `[[RANGE]]`
- `[[COST]]`
- `[[DATE]]`

La exportación está bloqueada si queda un marcador.

---

## 28. Definición de PDF terminado

El PDF estará terminado únicamente cuando:

- cumpla el formato oficial;
- pueda entenderse sin exposición oral;
- demuestre el MVP con evidencia visual;
- incluya resultados reales y limitaciones;
- conecte A-U-R-A con competencias AMI/MIL;
- haga visible la agencia juvenil;
- presente una innovación específica y comparativa;
- tenga un plan de adopción y sostenibilidad;
- muestre capacidad real del equipo;
- supere la simulación de tres expertos;
- coincida con el video y el formulario;
- pese menos de 10 MB;
- no contenga una sola afirmación que el equipo no pueda defender oralmente.

---

## 29. Regla final

La propuesta ganadora no será la que prometa resolver toda la desinformación.
Será la que permita al jurado ver una relación limpia entre:

> **problema específico → método comprensible → producto funcional → evidencia
> proporcional → comunidad concreta → plan viable**

AURA puede dejar la vara muy alta porque ya posee el activo más difícil: una
experiencia funcional con una tesis pedagógica clara. El PDF debe convertir ese
activo en una historia verificable, humana y memorable.

> **Fact-checks can correct yesterday’s post. AURA trains young people to
> investigate tomorrow’s.**

---

# Anexo 3 — public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md

> **Propósito de la fuente:** Investigación, estrategia, producto, IA, piloto, equipo, pitch, riesgos y fuentes.<br>
> **Extensión incorporada:** 3096 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles — Guía maestra para UNESCO Youth Hackathon 2026

## Analiza · Ubica · Rastrea · Actúa

**Marca y método:** AURA — Assess · Uncover · Research · Act
**Programa inicial:** AURA Opportunity Circles
**Descriptor:** Youth-led practice for safer digital opportunities
**Eslogan principal:** De oportunidades urgentes a decisiones informadas.
**Eslogan en inglés:** From urgent opportunities to informed decisions.
**Promesa del producto:** AURA entrena a jóvenes para comprobar oportunidades antes de entregar datos, dinero o confianza.
**Estado de este documento:** Fuente pública de estrategia, producto, operación
y candidatura — versión 3.0.

**Versión funcional de referencia:** AURA Opportunity Circles 1.0.0 — producto
funcional listo para pilotos; impacto todavía no demostrado.
**Archivo único para el equipo:** [Dossier colaborativo completo](./AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md)

**Ubicación en el proyecto:** `public/docs/`, accesible desde el prototipo y versionada junto al código.<br>
**Fecha de referencia:** 30 de julio de 2026.
**Fecha límite oficial:** 16 de agosto de 2026, 23:59, hora de París. En Ecuador continental equivale aproximadamente a las 16:59. El objetivo interno es enviar el 15 de agosto a las 18:00 de Ecuador.

**Prototipo público:** [https://aura-opal-beta.vercel.app/](https://aura-opal-beta.vercel.app/)

**Repositorio:** [https://github.com/AxelJhostin/AURA](https://github.com/AxelJhostin/AURA)

**Rama de producción:** [`main`](https://github.com/AxelJhostin/AURA/commits/main/).
El hash vigente debe registrarse en la ficha final de envío; la corrección crítica
de analítica quedó documentada en el
[#4](https://github.com/AxelJhostin/AURA/pull/4).

**Línea base técnica verificada:**
[`b6b7943`](https://github.com/AxelJhostin/AURA/commit/b6b7943fc6b0dfa778ab269d56d3ba6a77d02ca5),
con [CI de aplicación y Supabase aprobada](https://github.com/AxelJhostin/AURA/actions/runs/30505243112).

**Plan operativo de postulación para el equipo final:**
[Dossier y matriz de evaluación UNESCO 2026](./AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md).

**Guía de operación comunitaria:**
[Guía de facilitación de Opportunity Circles](./AURA_Opportunity_Circles_Guia_Facilitacion.md).

---

## Decisión estratégica vigente — 29 de julio de 2026

AURA conserva su identidad como método y plataforma general. La candidatura
2026 se especializa en **AURA Opportunity Circles**, su primera implementación
comunitaria.

### Problema concreto

Jóvenes reciben becas, empleos, intercambios y programas digitales que combinan
una recompensa importante con urgencia, apariencia institucional y solicitudes
de documentos, dinero o credenciales. Una lista de señales puede advertir sobre
un mensaje, pero no demuestra que la persona sabrá investigar el siguiente.

### Intervención

Cada Opportunity Circle dura aproximadamente 25 minutos y combina:

1. una misión guiada del método A-U-R-A;
2. conversación estructurada entre pares;
3. un reto desconocido sin pistas;
4. pulso opcional pre/post;
5. medición anónima de seis conductas;
6. preparación para que otra persona joven facilite el siguiente Circle.

### Catálogo activo

| Caso | Estado de evidencia | Conducta principal |
|---|---|---|
| La beca que vence hoy | Engañosa | Rastrear convocatoria, dominio y tratamiento de datos |
| Contratado sin entrevista | Engañosa | Comprobar reclutador, vacante y pago anticipado |
| La organización que aún no se puede comprobar | Insuficiente | Pausar sin acusar fraude |
| La oportunidad real con un video equivocado | Respaldada con límites | Conservar la oportunidad y corregir fecha, canal y respaldo sintético |

El reto de transferencia presenta una supuesta alianza para 40 pasantías y
evalúa afirmación, origen, procedencia, corroboración, incertidumbre y acción
sin pistas previas.

### Regla de interpretación

Los casos anteriores sobre salud, emergencias y estudios permanecen en el
repositorio como catálogo legado del método AURA, pero **no forman parte del
programa piloto ni de la narrativa principal de la candidatura 2026**. Si una
sección posterior de esta guía describe AURA como un laboratorio general, debe
interpretarse dentro de la especialización Opportunity Circles definida aquí.

---

## Briefing de incorporación para Axel, Nicole y José

Esta sección permite entender el proyecto, su estado y las decisiones inmediatas
sin tener que leer primero las más de dos mil líneas de la guía. El resto del
documento contiene la justificación, especificaciones, instrumentos, guiones y
controles detallados.

### 1. AURA en noventa segundos

**AURA Opportunity Circles es un programa bilingüe de Alfabetización Mediática
e Informacional dirigido por jóvenes.** Entrena a estudiantes para comprobar
becas, empleos, intercambios y programas juveniles antes de entregar
documentos, dinero o confianza.

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

> AURA entrena a jóvenes para comprobar oportunidades antes de entregar datos,
> dinero o confianza, y mide si pueden repetir el proceso sin depender de la IA.

En inglés:

> AURA trains young people to investigate opportunities before giving away
> data, money or trust, and measures whether they can repeat the process
> without depending on AI.

### 2. Qué problema resuelve

El problema concreto es que oportunidades digitales urgentes pueden utilizar
la aspiración educativa y laboral para obtener documentos, dinero o
credenciales. Las personas deben decidir rápido y suelen evaluar por diseño,
popularidad o familiaridad. Una alerta puede corregir un mensaje, pero no
necesariamente entrena el proceso que se necesita para el siguiente.

AURA aborda esa brecha educativa mediante práctica observable:

- detenerse antes de entregar algo difícil de recuperar;
- convertir una oportunidad en una afirmación verificable;
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
- implementación comunitaria actual mediante Opportunity Circles de 25 minutos.

No afirmar que AURA es la primera solución socrática con IA. TITAN y otros
proyectos ya trabajan en espacios cercanos. La originalidad está en la
integración concreta de acciones, trazabilidad, transferencia, contexto
latinoamericano y participación juvenil.

### 5. Estado real del producto — Opportunity Circles 1.0.0, listo para pilotos

La siguiente tabla es la fuente de verdad. “Implementado” significa que existe
en `main` y en el dominio público de Vercel. No significa que ya fue validado
con usuarios.

| Capacidad | Estado | Evidencia actual |
|---|---|---|
| Landing bilingüe y responsiva | Implementado | Producción pública en Vercel |
| Método A-U-R-A | Implementado | Flujo completo de cuatro etapas |
| Caso 01: beca y solicitud de datos | Implementado | Estado `misleading` y referencias FTC/ARCOTEL |
| Caso 02: empleo y pago por equipo | Implementado | Estado `misleading` y referencias FTC/SEPS |
| Caso 03: intercambio sin responsables confirmados | Implementado | Estado `insufficient`; enseña a pausar sin acusar |
| Caso 04: programa real y respaldo sintético desactualizado | Implementado | Estado `supported-with-limits`; conserva la oportunidad legítima |
| Motor reutilizable de casos | Implementado | Contenido separado de la interfaz |
| Compuerta editorial del catálogo | Implementada | El build valida ES/EN, IDs, procedencia, referencias y equilibrio |
| Decisión inicial | Implementado | Opción codificada antes de investigar |
| Señales investigables | Implementado | La explicación aparece después de elegir, sin regalar la respuesta |
| Mapa de fuentes | Implementado | La persona inspecciona fuentes candidatas antes de conocer su función |
| Expediente de procedencia | Implementado | Cada pieza simulada muestra ID, origen, fecha y declaración explícita |
| Referencias reales | Implementado | Enlaces auditables separados del material ficticio de cada caso |
| Acción proporcional | Implementado | Selección y justificación mediante el caso |
| Tarjeta de Evidencia | Implementado | Hallazgo, límite y acción construidos por la persona; revisión pedagógica separada |
| Entrenador socrático con OpenAI | Implementado | Pregunta adaptada por caso y etapa |
| Respaldo sin IA | Implementado | Preguntas curadas si la API falla |
| Reto de transferencia sin guía | Implementado | Alianza simulada para 40 pasantías |
| Puntuación de transferencia | Implementado | Rúbrica 0–6 de afirmación, origen, procedencia, corroboración, incertidumbre y acción |
| Consentimiento de métricas | Implementado | Envío anónimo o modo solo local |
| Pulso opcional pre/post | Implementado en 0.8.0 | Opción codificada `1–5`, sin nombre ni texto libre |
| Informe de sesión | Implementado | Eventos, tiempo y puntuación |
| Exportación CSV | Implementado | Descarga desde el dispositivo |
| API de eventos validada | Implementado | Rechaza eventos y opciones inventadas |
| Persistencia central | Activa y verificada | Vercel inserta eventos anónimos server-side en Supabase |
| Código y enlace de piloto | Implementado en 0.7.0 | Código aleatorio de 12 caracteres, sin cuenta ni PII |
| Vista de facilitador | Implementada en 0.7.0 | Totales y promedios; la API no devuelve filas ni identificadores |
| Guía de Opportunity Circle | Implementada en 1.0.0 | Agenda de 25 minutos, salvaguardas, registro y formación |
| Comparación agregada pre/post | Implementada en 0.8.0 | Promedios inicial/final, delta y número de pares |
| Exportación agregada CSV | Implementada en 0.8.0 | Solo métricas del piloto; no contiene IDs de sesión |
| Migración de piloto en producción | Activa y verificada | Columna, restricción, índice, RLS y privilegios comprobados |
| Migración de razonamiento y transferencia 0.9 | Activa y verificada | Nuevos eventos codificados y puntuación `0–6` probados en transacción revertida |
| Accesibilidad técnica | Implementada en 0.8.0 | Enlace de salto, foco visible, movimiento reducido y layout de 320 px |
| Reglas de dominio modulares | Implementadas | Eventos, agregación de pilotos y transferencia fuera de React/HTTP |
| Calidad automatizada | Verificada localmente en 1.0.0 | 52 comprobaciones en cuatro capas y cobertura sobre umbrales |
| Integración continua | Activa | GitHub Actions valida aplicación y pgTAP en cada cambio de `main` |
| Demo técnica de métricas | Implementada | Código `AURA-DEMSAMPLEXYZ`; datos locales simulados, aviso visible, sin Supabase ni CSV |
| Pilotos con participantes reales | Pendiente | No existen resultados que puedan afirmarse |
| Revisión AMI externa de los casos | Pendiente | La revisión interna está registrada; falta el gate externo |
| Propuesta final en inglés | Pendiente | Banco de texto disponible en esta guía |
| Pitch grabado | Pendiente | Guion y lista de planos disponibles |

Validaciones técnicas ejecutadas para AURA Opportunity Circles 1.0.0 antes de
integrar en `main`:

- compilación de producción Next.js correcta;
- TypeScript y lint sin errores;
- 52 comprobaciones automatizadas aprobadas: 14 unitarias, 7 de integración,
  19 de contrato/build y 12 aserciones pgTAP;
- cobertura instrumentada: 95,54 % de líneas, 77,36 % de ramas y 79,52 % de
  funciones, por encima de los umbrales 90/70/75;
- GitHub Actions de 1.0.0 aprobada en Linux para aplicación y base local;
- cero vulnerabilidades conocidas reportadas por `npm audit` para 1.0.0;
- ruta pública de eventos probada con aceptación, rechazo y persistencia real;
- generación, normalización y propagación del código de piloto verificadas;
- ruta de resumen limitada a resultados agregados y clave server-side;
- recorrido de código revisado para 320 px: consentimiento, misión guiada,
  conclusión estructurada, transferencia `0–6`, pulso final y lectura agregada;
- revisión visual a 320 px exactos con `scrollWidth = clientWidth = 320`, sin
  desbordamiento horizontal;
- RLS activa en Supabase, sin permisos para `anon` ni `authenticated`, y
  `service_role` limitado a `SELECT` e `INSERT`;
- asesores de seguridad y rendimiento de Supabase sin errores ni advertencias;
  solo permanecen tres avisos informativos de índices aún no utilizados,
  esperables antes del piloto real;
- migración 0.9 verificada con eventos de razonamiento y transferencia `6/6`
  dentro de una transacción revertida, sin conservar filas de prueba;
- cero errores o advertencias en la consola del navegador de producción;
- secretos fuera del repositorio;
- despliegue Production de Vercel confirmado.

Límite técnico declarado: aún no existe una suite E2E automatizada en navegador
ni una prueba de integración que consuma OpenAI real. Los límites externos se
simulan y el recorrido se ha revisado manualmente. Esto no bloquea el piloto,
pero es la siguiente mejora técnica útil después del envío.

### Evaluación estratégica actual del MVP — 30 de julio de 2026

Esta evaluación analiza el producto disponible **antes** de incorporar
resultados de pilotos, PDF final o video. No es una nota de UNESCO, una
predicción del jurado ni una probabilidad de ganar.

**Valoración interna del producto: 8,5/10.** AURA ya tiene nivel competitivo
como propuesta porque combina un problema reconocible, una intervención
replicable, un MVP funcional y medición de transferencia. La candidatura
completa todavía depende de evidencia con personas reales.

| Dimensión | Evaluación interna | Lectura honesta |
|---|---:|---|
| Claridad del problema | 9/10 | Becas, empleos e intercambios conectan aspiración, urgencia y riesgo recuperable |
| Encaje con juventud y AMI/MIL | 9/10 | Jóvenes investigan, deliberan y facilitan; la evidencia permanece visible |
| Innovación defendible | 8/10 | La diferencia está en acciones trazables y transferencia, no en afirmar que inventamos lo socrático |
| Viabilidad técnica | 9/10 | Producto público, bilingüe, sin cuentas, con modo sin IA y calidad automatizada |
| Privacidad e IA responsable | 9/10 | Datos mínimos, consentimiento, RLS y ausencia de veredicto automático |
| Capacidad de medición | 8,5/10 | Seis conductas observables y comparación guiada/no guiada; falta seguimiento longitudinal |
| Escalabilidad | 8,5/10 | Casos desacoplados y sesiones facilitadas; falta probar formación y mantenimiento editorial |
| Inclusión demostrada | 5/10 | Existen decisiones de diseño, pero todavía no evidencia con públicos diversos |
| Impacto demostrado | Pendiente | No debe puntuarse ni afirmarse antes de los pilotos |

#### Oportunidades estratégicas

1. **Resolver un problema emocionalmente importante.** Investigar una
   oportunidad educativa o laboral antes de entregar datos, dinero o confianza
   es más concreto que “combatir la desinformación” en general.
2. **Ser un programa juvenil, no solo una web.** Opportunity Circles permite
   operar en universidades, colegios, bibliotecas, grupos juveniles y centros
   comunitarios mediante facilitación entre pares.
3. **Diferenciarse de detectores y chatbots.** AURA no resuelve un enlace:
   entrena afirmación, origen, procedencia, corroboración, incertidumbre y
   acción, y prueba si esas conductas se transfieren.
4. **Mostrar IA responsable.** La IA formula preguntas, no decide; las fuentes
   permanecen visibles y el recorrido funciona con preguntas de respaldo.
5. **Construir una red de facilitadores.** La escala puede medirse mediante
   personas formadas, Circles realizados, paquetes locales revisados y nuevas
   personas capaces de facilitar.
6. **Activar alianzas naturales.** Universidades, oficinas de relaciones
   internacionales y empleabilidad, bibliotecas, ONG juveniles y organizaciones
   de protección de datos tienen un motivo concreto para probar el formato.
7. **Crear una línea de aprendizaje e investigación.** Con consentimiento y
   resultados agregados, AURA puede estudiar qué conductas cuestan más, cuándo
   aparece exceso de confianza y si la práctica se transfiere.
8. **Expandirse por verticales después de validar el núcleo.** Becas, empleos,
   intercambios y programas juveniles pueden convertirse en paquetes de casos
   adaptados por país. Salud, contenido cívico, finanzas y contenido sintético
   permanecen como expansiones futuras, no como promesas del MVP. La primera
   exploración lingüística propuesta es un piloto comunitario Kichwa,
   condicionado a codiseño con hablantes y educadores.

#### Límites y vulnerabilidades que deben declararse

- Los cuatro casos son simulados; protegen a participantes y evitan acusaciones,
  pero necesitan revisión AMI externa y pruebas de realismo.
- La transferencia dentro de una sesión no demuestra comportamiento semanas
  después ni reducción de pérdidas reales.
- La calidad de la experiencia depende de que la persona facilitadora respete
  tiempos, salvaguardas y preguntas abiertas.
- Falta comprobar comprensión con distintos niveles educativos, conectividad,
  discapacidad y experiencia digital.
- Conviene fortalecer referencias ecuatorianas y latinoamericanas sin eliminar
  fuentes internacionales primarias.
- La IA añade adaptación, pero no es indispensable; esto debe presentarse como
  resiliencia pedagógica, no como una promesa de automatización.
- AURA todavía no ofrece funcionamiento offline/PWA completo.
- Impacto, inclusión, adopción institucional y alianzas continúan pendientes de
  evidencia.

#### Decisión de producto

El alcance funcional de Opportunity Circles 1.0.0 queda congelado. Antes de los
pilotos solo se corrige:

- un error crítico reproducible;
- una barrera que impida consentimiento, misión, transferencia o lectura
  agregada;
- un problema de privacidad, accesibilidad o exactitud editorial;
- una falla que amenace la demostración pública.

No se añaden más casos, paneles, gamificación, perfiles, chat abierto ni
verticales. El siguiente salto de valor debe venir de evidencia con personas,
revisión externa y una iteración documentada.

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
- hay cuatro misiones guiadas equilibradas y un reto no guiado;
- AURA genera una Tarjeta de Evidencia;
- existe medición anónima local, pulso pre/post y exportación CSV;
- la persistencia central está activa para eventos autorizados y usa RLS,
  privilegios explícitos y rutas exclusivamente server-side;
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
9. Abre exactamente dos fuentes candidatas y después observa el mapa de
   evidencia.
10. Elige una acción proporcional.
11. Construye un hallazgo, explicita el límite de la evidencia y genera una
    Tarjeta de Evidencia con sus propias decisiones.
12. Recibe la revisión pedagógica del caso, separada de su tarjeta.
13. Inicia un reto diferente, sin la guía A-U-R-A visible paso a paso.
14. Responde seis decisiones sobre afirmación, origen, procedencia,
    corroboración, incertidumbre y acción.
15. Recibe una puntuación `0–6` y feedback criterio por criterio únicamente
    después de enviar.
16. Puede descargar el reporte anónimo de la sesión en CSV.

El reto no pregunta solamente “¿es verdadero o falso?”. Observa si la persona
puede reconstruir un proceso de investigación completo sin depender de pistas,
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
- `reasoning_finding_selected`;
- `reasoning_limit_selected`;
- `evidence_card_generated`;
- `mission_abandoned`;
- `transfer_started`;
- `transfer_choice_selected`;
- `transfer_completed`;
- `pilot_baseline_recorded`;
- `pilot_exit_recorded`.

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
  |      +--> Dominio puro: eventos, agregación y transferencia
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
  `supabase/migrations/20260728141033_add_anonymous_pilot_code.sql`;
- migración de pulso pre/post aplicada y versionada:
  `supabase/migrations/20260728164500_add_anonymous_pilot_pulse.sql`;
- migración de razonamiento y transferencia 0.9 aplicada y versionada:
  `supabase/migrations/20260729113000_aura_reasoning_and_transfer_v2.sql`;
- pruebas de base:
  `supabase/tests/database/aura_learning_events.test.sql`.

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

Si Supabase no está configurado o está temporalmente indisponible, la misión
sigue funcionando y conserva eventos en el dispositivo para exportarlos como
CSV. La aplicación pública sí tiene la persistencia central configurada; solo
envía después del consentimiento explícito.

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
- coordinar con José la narrativa, el PDF y la versión en inglés.

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

#### José Luis Cañarte Plúa — investigación, inglés y edición

Responsable principal de:

- estructura y edición del PDF;
- claridad, gramática y consistencia en inglés;
- comprobación de referencias, pies de figura y afirmaciones;
- síntesis de resultados y limitaciones del piloto;
- control de los cinco criterios oficiales;
- transcripción y subtítulos del video;
- revisión para que la candidatura funcione sin explicación oral.

El perfil académico o profesional exacto de José debe confirmarse antes de
redactar su biografía. No se inferirá a partir de su correo institucional.

#### Equipo cerrado

AURA queda confirmado con tres integrantes: Hernández Axel, Nicole Madelyne
Pincay Soledispa y José Luis Cañarte Plúa. No hay plazas abiertas. Cualquier
cambio debe ser aprobado por los tres y respetar la elegibilidad de 18–30 años.

### 12. Sistema de coordinación Axel–Nicole–José

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

- Nicole y José completan la incorporación.
- El equipo prueba AURA 0.8 de extremo a extremo.
- Se congela el público inicial.
- Se registra que el equipo final queda cerrado en tres integrantes.
- Se consiguen los primeros participantes.
- Se revisan los cuatro casos con una persona experta en AMI.
- Se confirma el protocolo de consentimiento y acceso al agregado.

#### 30 de julio–2 de agosto — ensayo interno y facilitación

- Ensayar la vista de facilitador y la exportación agregada.
- Revisar consentimiento e instrucciones con Nicole y José.
- Verificar el pulso inicial/final.
- Probar 320 px y un Android de gama media.
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
- distribución de puntuación `0–6`;
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
| Dependencia de Hernández Axel | Nicole lidera piloto e impacto; José lidera edición e inglés |

### 17. Inventario de activos

| Activo | Ubicación o estado |
|---|---|
| Demo pública | `https://aura-opal-beta.vercel.app/` |
| Código | `https://github.com/AxelJhostin/AURA` |
| Guía maestra | Este archivo |
| Dossier de postulación | `public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md` |
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

1. Confirmar equipo final, edades elegibles y persona líder.
2. Confirmar cinco participantes y fecha del piloto de ensayo.
3. Cerrar calendario y reclutamiento del piloto principal.
4. Confirmar una persona revisora externa de AMI/MIL.
5. Confirmar responsables y fechas de propuesta, video y revisión de inglés.

---

## Índice ejecutivo

- [Briefing de incorporación para Axel, Nicole y José](#briefing-de-incorporación-para-axel-nicole-y-josé)
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

| Solución o enfoque | Aporte | Brecha específica que AURA trabaja |
|---|---|---|
| Fact-checkers | Verifican afirmaciones concretas. | El usuario puede recibir el resultado sin aprender el proceso. |
| Etiquetas verdadero/falso | Respuesta rápida. | Simplifican ambigüedad y pueden aumentar dependencia. |
| [TITAN](https://www.titanthinking.eu/) | Entrenamiento socrático, microlessons y evaluación de pensamiento crítico. | AURA no compite por “ser socrática”: se concentra en una misión compacta con artefacto trazable, seis conductas de transferencia, bilingüismo ES/EN y operación juvenil sin registro. |
| [Checkology](https://newslit.org/our-checkology-virtual-classroom/) | Plataforma educativa consolidada con lecciones, recursos, cuentas de clase y evaluación. | AURA ofrece una práctica breve y autónoma para pilotos o círculos juveniles, sin sustituir un currículo escolar completo. |
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

La defensa no es que ningún componente exista por separado. La innovación es la
integración verificable de una práctica corta: reacción inicial → procedencia →
evidencia → límite → acción → transferencia. Si esa secuencia no puede verse en
la demo y medirse en el piloto, la afirmación de innovación pierde fuerza.

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

**Perfil:** estudiante universitario de primer o segundo año.<br>
**Dispositivo:** teléfono Android de gama media.<br>
**Comportamiento:** recibe titulares, capturas y mensajes reenviados durante el día.<br>
**Problema:** tiene poco tiempo y no sabe qué pasos concretos seguir para investigar.<br>
**Motivación:** evitar compartir información engañosa sin tener que convertirse en verificador profesional.<br>
**Barreras:** costo de datos, fatiga, exceso de texto, desconfianza hacia etiquetas ideológicas y poca experiencia buscando fuentes primarias.

### Usuario facilitador

**Perfil:** joven líder, docente o coordinador de organización.<br>
**Necesidad:** actividad breve, replicable y medible.<br>
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
5. AURA Community Localization Pilot — Kichwa, condicionado a colaboración
   comunitaria verificable.
6. Otros idiomas mediante codiseño, revisión humana y pruebas locales.

### AURA Community Localization Pilot — Kichwa

**Estado al 30 de julio de 2026:** exploración futura. AURA no está disponible
en Kichwa y el equipo no conoce todavía a hablantes, docentes, organizaciones ni
comunidades Kichwa que hayan aceptado colaborar. No existe traducción, alianza,
aval, variante elegida ni fecha de implementación.

La motivación es apoyar una expansión ecuatoriana con pertinencia cultural, no
añadir un idioma para aparentar alcance. El Ministerio de Educación distingue a
la nacionalidad Kichwa y a la nacionalidad Tsa’chi dentro del Sistema de
Educación Intercultural Bilingüe; la lengua del pueblo Tsáchila es
Tsáfiqui/Tsafiki, no Kichwa. Fuentes:
[Educación Intercultural Bilingüe](https://educacion.gob.ec/educacion-intercultural-bilingue-princ/),
[currículos interculturales bilingües](https://educacion.gob.ec/curriculos-nacionales-interculturales-bilingues/)
y [materiales en Tsafiki](https://educacion.gob.ec/capacitan-a-docentes-interculturales-bilingues-sobre-uso-de-materiales-didacticos-en-tsafiki/).
La Constitución reconoce al Kichwa y al Shuar como idiomas oficiales de
relación intercultural, según la
[Asamblea Nacional](https://www.asambleanacional.gob.ec/es/noticia/asamblea_entrega_al_pais_constitucion_en_kichwa).

#### Condiciones para activar la exploración

1. Encontrar una persona hablante, docente intercultural u organización Kichwa
   que quiera participar sin que el equipo presuponga representación.
2. Acordar comunidad, variante, escritura, glosario, reconocimiento,
   compensación y uso del contenido.
3. Codiseñar un Opportunity Circle completo; no limitarse a traducir botones.
4. Adaptar oportunidad, instituciones, fuentes, consentimiento, acciones y
   preguntas a un contexto elegido por la comunidad colaboradora.
5. Empezar con preguntas socráticas curadas por personas. La generación libre
   de IA permanece desactivada hasta que hablantes evalúen calidad y seguridad.
6. Probar comprensión y pertinencia con jóvenes hablantes.
7. Registrar correcciones, aprobación, autoría y límites antes de publicar.

#### Lenguaje permitido mientras no exista colaboración

> AURA plans to explore a Kichwa community localization pilot after its initial
> validation, contingent on co-design with speakers, intercultural educators
> and young people from a participating community.

No afirmar:

- que AURA ya ofrece Kichwa;
- que fue diseñada con o para comunidades Kichwa;
- que existe una alianza o contacto confirmado;
- que representa a todas las comunidades o variantes Kichwa;
- que preserva una lengua;
- que una traducción automática equivale a inclusión.

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

### Biblioteca objetivo y estado actual

| Caso | Tipo | Habilidad principal | Uso |
|---|---|---|---|
| 1 | Salud, cifra precisa y autoridad vaga | Rastrear qué midió la fuente | Guiado — implementado |
| 2 | Video real con fecha y lugar alterados | Verificar procedencia y contexto | Guiado — implementado |
| 3 | Beneficio real convertido en cura instantánea | Conservar el núcleo cierto y corregir el exceso | Guiado — implementado |
| 4 | Piloto pequeño convertido en política universal | Reconocer evidencia insuficiente | Guiado — implementado |
| 5 | Publicación institucional auténtica | Reconocer evidencia suficiente | Expansión posterior al MVP |
| 6 | Enlace urgente de becas que pide datos | Priorizar fuente oficial y procedencia | Transferencia — implementado |

Los cuatro casos guiados cubren los tres estados mínimos exigidos por el diseño:
`supported-with-limits`, `misleading` e `insufficient`. El catálogo valida esta
cobertura automáticamente. Los casos 5 y futuros amplían variedad, pero no
bloquean el MVP técnico.

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
encuentra en la tabla del briefing de incorporación. A 29 de julio, AURA tiene
cuatro casos guiados equilibrados y un reto de transferencia; los pilotos con
personas reales y los entregables de candidatura siguen pendientes.

### Incluido en el alcance objetivo

- Aplicación web móvil.
- Español e inglés.
- Método A-U-R-A.
- Cuatro misiones guiadas equilibradas y un reto de transferencia; nuevos casos
  solo si pasan la misma compuerta editorial.
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

El MVP técnico está terminado cuando:

1. Un usuario puede completar una misión de extremo a extremo en móvil.
2. Las cuatro etapas se entienden sin explicación oral.
3. Las fuentes se pueden abrir y clasificar.
4. La IA puede fallar sin romper la experiencia.
5. El usuario produce una Tarjeta de Evidencia.
6. Se registra una métrica de transferencia.
7. Existen cuatro casos equilibrados y auditables.
8. Español e inglés funcionan.
9. El equipo puede demostrarlo en menos de 90 segundos.
10. Producción, pruebas automatizadas y analítica están operativas.

AURA Opportunity Circles 1.0.0 cumple esta definición técnica. La prueba con personas reales es el
siguiente gate de validación y no una razón para ampliar funciones.

### Función estrella

Si el tiempo escasea, proteger:

> El usuario debe rastrear y seleccionar evidencia; la IA no debe hacerlo todo por él.

---

# Parte IV — IA, tecnología y seguridad

## 12. Función de la IA

### Implementación real en AURA Opportunity Circles 1.0.0

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
extensiones; no todas están implementadas en la versión 1.0.0.

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

AURA Opportunity Circles 1.0.0 ya sigue esta decisión: una sola aplicación Next.js desplegada en
Vercel contiene interfaz, rutas de servidor, motor de casos y modo degradado. No
existe un segundo backend que deba desplegarse o mantenerse.

### Frontend

- Next.js.
- TypeScript.
- CSS utilitario o sistema de componentes accesibles.
- Aplicación web responsiva; una PWA instalable queda fuera del MVP.
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
    +--> Dominio puro de reglas y medición
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
GET  /api/aura/pilots        resumen agregado por código de piloto
```

Los casos se incorporan al build desde archivos TypeScript revisables. No existe
una API pública de casos ni sesiones. La única lectura de facilitación es el
resumen agregado por código; nunca devuelve filas o identificadores.

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

Los datos demográficos no forman parte del registro técnico de AURA 0.8. Si el
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
Puntuación automática actual: 0–6
```

La puntuación `0–6` asigna un punto a cada conducta observable: formular la
afirmación, buscar el origen, comprobar procedencia, corroborar de forma
independiente, expresar incertidumbre y elegir una acción proporcional. La
rúbrica manual `0–18` puede aplicarse por un facilitador para una evaluación
educativa más rica, pero no debe presentarse como calculada automáticamente por
la versión 1.0.0.

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

#### José Luis Cañarte Plúa — Investigación y edición

Asignación base acordada:

- Investigación y control de evidencia.
- Estructura y edición de informes.
- Revisión de inglés.
- Comprobación de referencias.
- Síntesis de resultados y limitaciones.
- Transcripción y subtítulos del video.
- Control editorial de la propuesta final.

### Equipo final

El equipo queda cerrado con tres integrantes. No se mantienen plazas en
evaluación.

Responsabilidades:

- Diseño pedagógico.
- Curación de casos.
- Revisión de preguntas.
- Rúbrica.
- Sesgo e inclusión.
- Pruebas de usuario.

### Distribución definitiva del equipo de tres

| Área | Lidera | Apoyo y aprobación |
|---|---|---|
| Producto, ingeniería, seguridad y demo | Hernández Axel | Nicole + José |
| Problema, estrategia, impacto, sostenibilidad y pilotos | Nicole | Axel + José |
| Investigación, inglés, referencias y edición | José Luis | Axel + Nicole |
| PDF, video, cifras finales y envío | Responsabilidad compartida | Aprobación de los tres |

La revisión pedagógica debe buscarse mediante mentoría o revisión externa
puntual, sin inventar que esa persona forma parte del equipo. El equipo está
cerrado y no mantiene plazas en evaluación.

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
- Cuatro casos equilibrados y auditables.
- Stack.
- Métricas.
- Guion de demo.

Cambiar estas decisiones después solo si existe evidencia clara.

---

## 21. Cronograma crítico

El desarrollo está adelantado respecto al plan inicial: landing, flujo A-U-R-A,
cuatro misiones guiadas equilibradas, IA, modo degradado, bilingüismo, Tarjeta
de Evidencia, transferencia, analítica local, expediente de procedencia,
referencias reales, instrumento pre/post y modo facilitador ya existen en AURA
Opportunity Circles 1.0.0. La ruta
crítica cambia de “construir una demo” a **probar, documentar y presentar una
intervención creíble**.

### 27–29 de julio — Congelar estrategia y operación

- Incorporar a Nicole y José con esta guía.
- Confirmar datos privados y elegibilidad del equipo final.
- Congelar one-liner, público y alcance final.
- Revisar los cuatro casos implementados con una persona experta en AMI.
- Preparar lista de participantes.
- Verificar el modo piloto completo en la versión desplegada 1.0.0.
- Crear tablero y responsables.

### 30 de julio–2 de agosto — Ensayo interno y facilitación

- Ensayar la vista de facilitador con Nicole y José.
- Preparar consentimiento.
- Verificar el pulso pre/post y la exportación agregada.
- Probar 320 px y un Android de gama media.
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

> The current public MVP intentionally focuses on a complete learning loop rather than universal fact-checking. It includes four balanced bilingual guided missions, one unguided transfer challenge, Socratic guidance with curated fallback questions, an Evidence Map, an Evidence Card, optional anonymous pre/post measurement and aggregate facilitator reporting. The product is deployed and ready for real-world pilots. Video deepfake detection, arbitrary private-content ingestion, mass monitoring and automatic truth scoring are explicitly out of scope.

### Sustainability

> AURA will keep its core learner experience and base educational cases free. Scale will rely on reusable case packs, youth facilitator training, partnerships with universities and civil society, and grants or institutional support for localization and evaluation. Curated fallback content also reduces dependence on continuous AI inference and supports low-cost deployment.

### Team paragraph — final three-person version

> Our confirmed three-person team combines software engineering, international business, impact strategy, research and English-language editorial review. Hernández Axel leads product architecture, development, responsible AI, deployment and data protection. Nicole Madelyne Pincay Soledispa leads audience research, pilot operations, inclusion, sustainability and narrative. José Luis Cañarte Plúa leads evidence review, report structure, references and English-language editing. This division connects a working product with a clear, verifiable and feasible submission.

### Closing

> Fact-checks can correct yesterday’s post. AURA trains young people to investigate tomorrow’s. By moving from reaction to evidence, learners do not borrow a verdict—they build a habit.

---

# Parte IX — Video y demostración

## 26. Guion de pitch de tres minutos

Duración objetivo: 2:50–2:57.<br>
Velocidad: aproximadamente 125–135 palabras por minuto.<br>
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
> Our current public MVP includes four balanced bilingual evidence missions, a functional four-step experience, an unguided transfer challenge, optional pre/post measurement and aggregate anonymous pilot reporting. [Insert one concise real pilot result here only after the pilot dataset is closed.]
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

Estado verificado al 29 de julio de 2026:

- [x] El método A-U-R-A aparece igual en todo el producto.
- [x] El recorrido tiene implementación responsiva para móvil.
- [x] Cuatro casos completos y equilibrados.
- [x] Casos respaldados con límites, engañosos e insuficientes.
- [x] Referencias reales separadas de los artefactos simulados.
- [x] Enlaces del producto verificados.
- [x] La IA no emite veredicto.
- [ ] La abstención formal de la IA está evaluada con la rúbrica adversarial.
- [x] Existe modo degradado.
- [x] Tarjeta de Evidencia.
- [x] Misión de transferencia.
- [x] Registro anónimo local y CSV.
- [x] Inglés y español.
- [x] Teclado, foco visible, contraste y ancho de 320 px revisados técnicamente.
- [x] El esquema técnico no almacena datos sensibles.
- [x] Demo pública.
- [ ] Video de respaldo.
- [x] `npm run check` y 52 comprobaciones automatizadas aprobadas localmente para 1.0.0.
- [x] CI de aplicación y Supabase pgTAP aprobada para el commit estable de 1.0.0.

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
- [Supabase — Testing overview](https://supabase.com/docs/guides/local-development/testing/overview)
- [Supabase — Testing your database with pgTAP](https://supabase.com/docs/guides/database/testing)
- [Supabase — Breaking change: explicit grants for new tables](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically)
- [OpenAI — Data controls in the API platform](https://platform.openai.com/docs/guides/your-data)

---

# Parte XIII — Control del proyecto

## 35. Decisiones que el equipo debe cerrar

- [x] Integrantes finales: Axel, Nicole y José.
- [x] Persona líder: Hernández Axel.
- [ ] Público exacto; base estratégica actual: estudiantes universitarios y
  líderes juveniles de 18–24 años en Ecuador.
- [ ] Instituciones donde se realizará el piloto, si hay autorización.
- [x] Cuatro casos guiados equilibrados; no ampliar antes del piloto.
- [x] Nombre visual: AURA.
- [x] Idioma principal español con experiencia completa en inglés.
- [x] Stack: Next.js, Vercel, OpenAI server-side y Supabase server-side.
- [x] Analítica: consentimiento, registro local, CSV y persistencia central activa.
- [ ] Fecha del piloto.
- [ ] Presentador del video.
- [ ] Editor del video.
- [x] Revisor de inglés: José.
- [ ] Revisor externo AMI.

## 36. Registro de decisiones

| Fecha | Decisión | Motivo | Responsable | Revisión |
|---|---|---|---|---|
| 27-07-2026 | Reposicionar AURA como laboratorio de evidencia | Diferenciar de TITAN y medir acciones | Equipo | Congelada |
| 27-07-2026 | Método A-U-R-A bilingüe | Claridad y memorabilidad | Equipo | Congelada |
| 27-07-2026 | Público inicial universitario/juvenil en Ecuador | Viabilidad de piloto | Equipo | Por confirmar |
| 28-07-2026 | Hernández Axel, Nicole Madelyne Pincay Soledispa y José Luis Cañarte Plúa forman el equipo final | Los tres tienen compromiso confirmado y roles complementarios | Equipo | Congelada |
| 28-07-2026 | El alcance técnico del MVP está completo al 100 % | Build, TypeScript, lint y producción verificadas | Hernández Axel | Congelada |
| 29-07-2026 | Añadir arquitectura de dominio y compuertas de calidad en cuatro capas | Reducir regresiones antes de pilotos y cambios grandes | Hernández Axel | 52 comprobaciones y CI 1.0.0 verificadas |
| 27-07-2026 | Arquitectura única Next.js desplegada en Vercel | Reducir complejidad y riesgo de demo | Hernández Axel | Congelada |
| 27-07-2026 | La IA pregunta, no verifica ni puntúa | Proteger autonomía y reducir alucinaciones | Hernández Axel | Congelada |
| 29-07-2026 | Ampliar transferencia a seis conductas `0–6` y ocultar pistas previas | Probar un proceso reutilizable sin premiar obediencia | Hernández Axel | Implementada; revisar con piloto |
| 27-07-2026 | No aceptar texto libre ni datos personales en analítica | Privacidad y minimización | Hernández Axel | Congelada |

## 37. Datos que deben reemplazarse

Buscar en todo el documento:

- `[Insert one concise real pilot result here.]`
- `N participants`
- `X to Y`
- `Z%`
- Datos privados y biografías finales de Axel, Nicole y José.
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

---

# Anexo 4 — public/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md

> **Propósito de la fuente:** Protocolo de 25 minutos, salvaguardas, métricas y registro de pilotos.<br>
> **Extensión incorporada:** 440 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles

## Guía operativa de facilitación y piloto

**Versión:** 1.0<br>
**Fecha de corte:** 30 de julio de 2026
**Equipo:** Hernández Axel · Nicole Madelyne Pincay Soledispa · José Luis Cañarte Plúa<br>
**Archivo único para el equipo:** [Dossier colaborativo completo](./AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md)
**Programa:** primera implementación comunitaria del método AURA<br>
**Duración recomendada:** 25 minutos<br>
**Tamaño recomendado:** 6–20 participantes<br>
**Público inicial:** jóvenes de 18–24 años en Ecuador<br>

---

## 1. Qué es un Opportunity Circle

Un AURA Opportunity Circle es una sesión breve, dirigida por jóvenes, donde las personas practican cómo comprobar becas, empleos, intercambios y programas juveniles antes de entregar documentos, dinero o confianza.

No es:

- una charla tradicional sobre estafas;
- un directorio de oportunidades;
- un verificador automático;
- una actividad para recopilar historias personales;
- una demostración donde la IA decide por la persona.

Sí es:

- una práctica basada en decisiones;
- una conversación estructurada entre pares;
- un reto de transferencia sin pistas;
- una medición anónima de conductas observables;
- un formato que otra persona joven puede volver a facilitar.

### Promesa central

> Jóvenes entrenando a jóvenes para investigar oportunidades digitales urgentes antes de entregar datos, dinero o confianza.

---

## 2. Objetivo de aprendizaje

Al finalizar, cada participante debe poder:

1. formular la afirmación verificable detrás de una oportunidad;
2. salir del mensaje recibido y buscar la convocatoria original;
3. conectar dominio, bases, contacto y responsable institucional;
4. corroborar mediante un segundo canal independiente;
5. conservar incertidumbre cuando la evidencia no alcanza;
6. elegir una acción proporcional que proteja a la persona sin destruir una oportunidad legítima.

El éxito no se define por memorizar una lista de señales. Se define por aplicar estas seis conductas en un caso nuevo sin guía.

---

## 3. Salvaguardas obligatorias

La persona facilitadora debe leer y aplicar estas reglas:

1. No solicitar nombres, correos, números de identificación, fotografías, capturas ni documentos.
2. No pedir que participantes compartan públicamente experiencias de fraude.
3. No abrir enlaces reales propuestos durante la sesión.
4. No investigar en vivo a personas, cuentas u organizaciones reales.
5. No declarar fraude a partir de una sola señal.
6. No presentar confianza subjetiva como aprendizaje demostrado.
7. No publicar resultados de una persona; solo resultados agregados.
8. No prometer que AURA garantiza la legitimidad de una oportunidad.
9. Si alguien revela una pérdida o riesgo real, detener la discusión pública y dirigirlo a canales institucionales apropiados.

Todos los casos de la plataforma son simulados. Las referencias externas respaldan el método y los patrones de riesgo; no convierten la simulación en una acusación real.

---

## 4. Preparación del Circle

### 4.1 Materiales

- Un teléfono, tableta o computadora por persona o pareja.
- Acceso a la versión desplegada de AURA.
- Código anónimo generado en el modo facilitador.
- Cronómetro.
- Esta guía.
- Opcional: pizarra o una hoja grande para registrar preguntas, nunca datos personales.

### 4.2 Comprobación técnica

Antes de recibir al grupo:

1. Abrir AURA en modo incógnito o en otro dispositivo.
2. Confirmar que se puede cambiar entre español e inglés.
3. Completar el inicio de una misión.
4. Verificar que las referencias se abren en una pestaña nueva.
5. Generar un código de Circle.
6. Copiar y probar el enlace con el código.
7. Confirmar que el panel agregado responde.
8. Mantener disponible el modo local si falla la conexión con analítica.

### 4.3 Selección del caso

Elegir un caso de acuerdo con el grupo:

| Caso | Competencia principal | Resultado pedagógico |
|---|---|---|
| La beca que vence hoy | Procedencia y protección de datos | Reconocer una convocatoria suplantada |
| Contratado sin entrevista | Identidad del reclutador y pagos | Detener un pago y corroborar con la empresa |
| La organización que aún no se puede comprobar | Incertidumbre calibrada | Pausar sin acusar fraude |
| La oportunidad real con un video equivocado | Vigencia y contenido sintético | Conservar lo legítimo y corregir lo engañoso |

Para el primer piloto se recomienda **La beca que vence hoy**, porque su propósito es fácil de comprender y sus conductas son observables.

---

## 5. Agenda exacta de 25 minutos

### Minutos 0–3 · Abrir

Texto recomendado:

> Hoy no vamos a memorizar señales ni a pedirle a una IA que decida por nosotros. Investigaremos una oportunidad simulada y veremos si después podemos repetir el proceso sin pistas. AURA no pide nombres, correos ni documentos reales.

Acciones:

1. Compartir el enlace con el código.
2. Explicar las opciones de analítica anónima y modo local.
3. Permitir que cada persona elija.
4. Completar el pulso inicial de confianza.

No explicar todavía cuál es la conducta correcta.

### Minutos 3–11 · Practicar

Cada persona o pareja completa una misión guiada:

1. **Analiza:** registra su reacción inicial.
2. **Ubica:** convierte señales en preguntas.
3. **Rastrea:** abre dos expedientes y consulta referencias reales.
4. **Actúa:** construye una Tarjeta de Evidencia.

La persona facilitadora:

- controla el tiempo;
- aclara navegación;
- no revela respuestas;
- no clasifica elecciones como inteligentes o ingenuas;
- pregunta “¿qué evidencia cambiaría tu decisión?”.

### Minutos 11–17 · Conversar

Usar tres preguntas:

1. ¿Qué señal provocó una pausa, pero todavía no demostraba nada?
2. ¿Qué fuente conectó la oportunidad con un responsable?
3. ¿Qué decisión protege a la persona sin destruir una oportunidad legítima?

Registrar únicamente ideas generales. No registrar nombres ni elecciones individuales.

### Minutos 17–23 · Transferir

Cada participante resuelve individualmente el reto sin pistas.

Reglas:

- no conversar durante el reto;
- no regresar a la misión guiada;
- no pedir ayuda a la persona facilitadora;
- no interpretar la puntuación como nota escolar.

La puntuación 0–6 representa seis conductas:

1. afirmación;
2. origen;
3. procedencia;
4. corroboración;
5. incertidumbre;
6. acción.

### Minutos 23–25 · Cerrar

1. Completar el pulso final.
2. Pedir que cada persona piense —sin entregarlo— en un hábito que aplicará.
3. Recordar que AURA no garantiza oportunidades.
4. Agradecer y explicar cómo se usarán los resultados agregados.

Texto recomendado:

> El objetivo no es desconfiar de todo. Es poder pausar, rastrear y actuar de forma proporcional antes de entregar algo que no podemos recuperar.

---

## 6. Datos que sí y no se recopilan

### Sí

- identificador aleatorio de sesión;
- código de Circle;
- idioma;
- identificadores de opciones;
- etapa;
- tiempo;
- puntuación de transferencia 0–6;
- pulso opcional de confianza 1–5;
- versión del producto.

### No

- nombre;
- correo;
- teléfono;
- dirección IP almacenada por AURA;
- documento de identidad;
- fotografía;
- URL aportada por participante;
- texto libre;
- historial de navegación;
- relato personal.

La clave pública de Supabase nunca sustituye las políticas de acceso. La escritura se realiza desde una ruta de servidor y la base debe mantener RLS, privilegios mínimos y reportes únicamente agregados.

---

## 7. Métricas del piloto

### Métricas primarias

1. **Tasa de finalización guiada**
   - tarjetas generadas / misiones iniciadas.

2. **Transferencia**
   - número de retos completados;
   - promedio sobre 6;
   - distribución por conducta.

3. **Cambio de confianza**
   - promedio final menos promedio inicial;
   - siempre separado de desempeño.

4. **Duración**
   - tiempo promedio de misión guiada;
   - tiempo del reto sin pistas.

### Indicadores mínimos para interpretar

- Una puntuación alta con confianza estable puede indicar aprendizaje sin sobreconfianza.
- Confianza alta con transferencia baja indica que la persona se siente preparada, pero aún no demuestra las conductas.
- Transferencia alta con confianza baja puede indicar competencia acompañada de cautela.
- La tasa de finalización no demuestra por sí sola aprendizaje.

### Umbrales de decisión para iterar

Estos son umbrales internos, no resultados prometidos:

- Si menos del 70% termina la misión, revisar tiempo y navegación.
- Si menos del 60% identifica origen y procedencia, revisar la etapa Rastrea.
- Si la acción responsable supera ampliamente al rastreo, puede existir adivinación moral sin investigación.
- Si la confianza sube pero la transferencia no, revisar el mensaje de cierre.
- Si participantes confunden señales con prueba de fraude, reforzar el caso de evidencia insuficiente.

---

## 8. Registro del piloto

Completar después de cada Circle:

| Campo | Registro |
|---|---|
| Fecha | |
| Lugar o modalidad | |
| Facilitador/a | |
| Código de Circle | |
| Participantes aproximados | |
| Caso guiado | |
| Duración real | |
| Problemas técnicos | |
| Pregunta que generó más conversación | |
| Confusión observada | |
| Cambio recomendado | |
| Autorización para usar testimonio | Sí / No / No solicitado |

No incluir nombres de participantes en este registro.

---

## 9. Testimonios

Un testimonio solo puede utilizarse si:

1. la persona entiende dónde aparecerá;
2. da autorización explícita;
3. puede retirarla antes del envío;
4. no revela que fue víctima ni datos sensibles;
5. no se presenta como resultado representativo de todo el grupo.

Formato recomendado:

> “Antes miraba el diseño del mensaje; ahora busco la convocatoria desde el sitio de la organización.”<br>
> — Participante de piloto, rango de edad, autorización registrada.

Nunca fabricar, mejorar o traducir un testimonio de forma que cambie su significado.

---

## 10. Formación de nuevos facilitadores

Una persona puede facilitar su primer Circle después de:

1. completar una misión;
2. obtener y revisar su resultado de transferencia;
3. observar un Circle;
4. leer las salvaguardas;
5. practicar el guion inicial;
6. demostrar que sabe generar y consultar un código;
7. acordar a quién acudir ante una revelación sensible.

La multiplicación no debe medirse por enlaces compartidos, sino por Circles realizados con salvaguardas y registros completos.

---

## 11. División del trabajo del equipo

### Hernández Axel

- estabilidad del producto;
- analítica y panel agregado;
- soporte técnico;
- control de versiones;
- exportación de resultados;
- preparación de la demo.

### Nicole Madelyne Pincay Soledispa

- coordinación de participantes;
- alianzas y espacios;
- facilitación o cofacilitación;
- sostenibilidad;
- experiencia del público;
- narrativa del impacto.

### José Luis Cañarte Plúa

- revisión de casos y fuentes;
- observación estructurada;
- control de evidencia;
- registro del piloto;
- edición de resultados;
- preparación en inglés.

---

## 12. Escala responsable y límites operativos

Opportunity Circles puede crecer formando facilitadores juveniles y adaptando
paquetes de casos con revisión local. La escala no se mide solo en visitas:
también en facilitadores preparados, sesiones completadas, casos revisados,
instituciones que repiten el formato y mejoras basadas en evidencia.

Entornos potenciales:

- universidades y oficinas de relaciones internacionales o empleabilidad;
- colegios, bibliotecas y centros comunitarios;
- organizaciones juveniles y de alfabetización mediática;
- iniciativas de protección de datos y seguridad digital.

Estas son oportunidades, no alianzas confirmadas.

Límites que cada facilitador debe comprender:

- una transferencia `0–6` dentro del Circle no demuestra conducta futura;
- los casos simulados no son denuncias ni sustituyen revisión experta;
- una sesión mal facilitada puede inducir respuestas, vergüenza o
  sobreconfianza;
- el formato aún debe probarse con distintos niveles educativos, de
  conectividad, accesibilidad y experiencia digital;
- AURA no funciona todavía como experiencia offline/PWA completa;
- una mayor confianza después de la sesión no equivale por sí sola a
  competencia.

Antes de formar nuevos facilitadores a escala, el equipo debe observar al menos
dos Circles, documentar dudas frecuentes y actualizar el guion de formación.

### Futura localización comunitaria Kichwa

Esta guía todavía no autoriza facilitar AURA en Kichwa. El equipo no tiene
traducción, hablantes revisores, comunidad participante ni alianza confirmada.
Si después del piloto inicial aparece una colaboración real, las personas
hablantes y educadoras deben compartir decisiones sobre variante, glosario,
ejemplos, consentimiento, preguntas, atribución y aprobación.

No se debe traducir esta guía automáticamente y presentarla como material
comunitario. El primer Circle localizado debe usar preguntas curadas por
personas, probarse con jóvenes hablantes y registrar cambios antes de publicarse.

---

## 13. Evidencias para la postulación

Guardar:

- enlace público del prototipo;
- capturas del flujo, sin participantes identificables;
- fecha y código de cada Circle;
- número aproximado de participantes;
- exportación agregada;
- problemas y cambios realizados;
- carta o correo de aliado, con autorización;
- testimonios autorizados;
- versión de esta guía;
- commit o versión del producto usada.

No afirmar:

- que AURA reduce estafas reales sin seguimiento;
- que la confianza equivale a competencia;
- que un piloto pequeño representa a toda la juventud ecuatoriana;
- que una puntuación demuestra comportamiento fuera de la sesión;
- que existe una alianza mientras solo está en conversación.

---

## 14. Criterio para estar listos

Opportunity Circles estará listo para presentarse como intervención validada cuando exista:

- producto estable y desplegado;
- al menos dos Circles realizados;
- al menos 25 participantes agregados;
- transferencia registrada;
- una iteración documentada a partir de evidencia;
- revisión externa AMI o de contenido;
- narrativa y resultados disponibles en inglés;
- consentimiento verificable para cualquier imagen o testimonio.

Hasta entonces debe describirse como **prototipo funcional listo para pilotos**, nunca como solución de impacto probado.

---

## 15. Frase de cierre

> AURA no decide si una oportunidad merece tu confianza. Te entrena para construir esa decisión con evidencia y demostrar que puedes repetir el proceso sin depender de la IA.

---

# Anexo 5 — README.md

> **Propósito de la fuente:** Estado verificable del producto, capacidades, ejecución, despliegue y estructura.<br>
> **Extensión incorporada:** 503 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles

> **Analiza · Ubica · Rastrea · Actúa**<br>
> Jóvenes entrenando a jóvenes para investigar oportunidades antes de entregar
> datos, dinero o confianza.

AURA es un método y laboratorio bilingüe de Alfabetización Mediática e
Informacional (AMI/MIL). **Opportunity Circles** es su primera implementación
comunitaria: sesiones breves dirigidas por jóvenes para comprobar becas,
empleos, intercambios y programas juveniles antes de entregar documentos,
dinero o confianza. AURA no entrega un veredicto automático; entrena a la
persona para investigar, justificar una decisión y transferir la habilidad a
una oportunidad nueva sin depender de la IA.

Este repositorio reúne cinco entregables que deben evolucionar juntos:

1. Un **prototipo web funcional** con cuatro Opportunity Circles y transferencia.
2. Un **dossier colaborativo completo** que reúne en un solo archivo el estado
   canónico y el contenido íntegro de toda la documentación pública vigente.
3. La **guía maestra del proyecto** para estrategia, candidatura, piloto,
   producto, IA responsable, riesgos, pitch y ejecución.
4. Una **guía operativa de facilitación** para ejecutar Circles con salvaguardas.
5. Un **dossier operativo de postulación** que convierte los criterios
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
- **Validación humana:** pendiente; no se afirman resultados de participantes
- **Demo técnica:** código `AURA-DEMSAMPLEXYZ`, con datos simulados locales y
  aviso visible; no consulta ni escribe en Supabase

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

### Demo técnica de métricas

El código `AURA-DEMSAMPLEXYZ` permite recorrer el panel agregado con una muestra
determinista generada en el navegador. El panel muestra un aviso permanente y
no permite exportarla; esos valores no proceden de participantes, no llegan a
Supabase y no son evidencia de impacto. La regla y el lenguaje autorizado para
PDF/video están en
[`public/docs/AURA_Nota_Transparencia_Validacion_Tecnica_2026.md`](public/docs/AURA_Nota_Transparencia_Validacion_Tecnica_2026.md).

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

## Lectura estratégica del MVP

La evaluación interna actual sitúa al producto en **8,5/10 como propuesta de
MVP**, no como nota de UNESCO ni probabilidad de ganar. Sus mayores fortalezas
son la claridad del problema, la intervención juvenil de 25 minutos, la
transferencia medible, la privacidad y una IA que pregunta sin emitir
veredictos.

Las oportunidades posteriores al piloto son formar una red de facilitadores,
adaptar paquetes por país, colaborar con universidades y organizaciones
juveniles, y estudiar resultados agregados de aprendizaje. Sus límites actuales
son igualmente explícitos: casos simulados, ausencia de seguimiento
longitudinal, dependencia de la calidad de facilitación, referencias regionales
por fortalecer y funcionamiento offline/PWA todavía incompleto.

Como primera exploración de localización comunitaria, la hoja de ruta propone
**AURA Community Localization Pilot — Kichwa**. Hoy no existe traducción,
contacto, alianza ni validación con una comunidad Kichwa. Solo avanzará después
del piloto principal si hablantes, educadores interculturales y jóvenes de una
comunidad aceptan codiseñar, revisar y compartir reconocimiento sobre un Circle
completo. No se utilizará traducción automática como sustituto de participación.

**Regla vigente:** Opportunity Circles 1.0.0 permanece congelado hasta obtener
evidencia de pilotos. Antes de eso solo se corrigen errores críticos,
privacidad, accesibilidad o barreras que impidan completar y medir el recorrido.
El análisis completo está en la sección “Evaluación estratégica actual del MVP”
de la
[guía maestra](public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md).

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
| `public/docs/AURA_Nota_Transparencia_Validacion_Tecnica_2026.md` | distinción obligatoria entre demo técnica, MVP y piloto humano |
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
SUPABASE_URL=https://pnxnjcngmzcgbyslogcc.supabase.co
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

El punto de entrada recomendado para el equipo es el
[`AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md`](public/docs/AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md).
Se reconstruye después de actualizar cualquier documento fuente con:

```bash
npm run docs:collab
```

Este dossier incorpora íntegramente las diez fuentes públicas vigentes y añade
una capa canónica con:

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

No incorpora correos, fechas de nacimiento ni otros datos privados del
formulario.

---

**AURA Opportunity Circles — From urgent opportunities to informed decisions.**

---

# Anexo 6 — docs/ARCHITECTURE_AND_TESTING.md

> **Propósito de la fuente:** Arquitectura modular, límites, pirámide de pruebas y cambios seguros.<br>
> **Extensión incorporada:** 224 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

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

La exploración futura **AURA Community Localization Pilot — Kichwa** requerirá
generalizar el contrato actual `LocalizedContent` más allá de `es`/`en`, pero
esa migración no se implementará por adelantado. Primero deben existir
colaboración comunitaria, variante acordada, glosario revisado, un Circle
adaptado y criterios de prueba. La IA generativa permanecerá desactivada para
Kichwa hasta que hablantes revisen su comportamiento; el primer piloto usará
preguntas curadas y respaldo determinista.

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

---

# Anexo 7 — docs/DEVELOPMENT_ROADMAP.md

> **Propósito de la fuente:** Alcance congelado, trabajo posterior al piloto y expansión responsable.<br>
> **Extensión incorporada:** 530 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles — Hoja de ruta de desarrollo

- **Propietario técnico:** Hernández Axel
- **Propietaria de estrategia e impacto:** Nicole
- **Propietario de investigación, inglés y edición:** José Luis Cañarte Plúa
- **Estado base:** Opportunity Circles 1.0.0 — producto listo para pilotos
- **Calidad verificada:** 52 comprobaciones automatizadas, CI de aplicación y
  pgTAP aprobada, cobertura instrumentada sobre sus umbrales
- **Objetivo:** validar una intervención juvenil de 25 minutos sobre
  oportunidades digitales y convertir sus resultados en una candidatura
  respaldada por evidencia real.

## 1. Qué ya existe

- Página de presentación bilingüe.
- Método A-U-R-A explicado.
- Motor bilingüe con cuatro casos de oportunidades simuladas y equilibradas:
  beca engañosa, empleo con pago, intercambio incierto y programa legítimo
  difundido mediante información desactualizada.
- Validación formal de paridad bilingüe, procedencia, referencias y estado
  editorial durante cada build.
- Flujo interactivo de cuatro etapas.
- Selección de señales y fuentes.
- Expediente de procedencia para cada fuente simulada.
- Referencias reales auditables separadas del material ficticio.
- Mapa de evidencia.
- Tarjeta de evidencia copiable.
- Reto de transferencia no guiado con rúbrica `0–6`.
- Consentimiento de analítica y reporte CSV por sesión.
- Ruta validada para persistencia opcional en Supabase.
- Código aleatorio y enlace compartible para cada piloto.
- Panel de facilitación con métricas agregadas y sin filas individuales.
- Guía de Opportunity Circle con agenda, salvaguardas, registro y formación.
- Instrumento opcional pre/post `1–5` sin texto libre.
- Exportación CSV agregada sin identificadores de sesión.
- Preguntas socráticas adaptadas mediante OpenAI con respaldo determinista.
- Build estándar de Next.js compatible con Vercel.
- Equipo y hoja de ruta visibles.
- Diseño responsivo y navegación por teclado.
- Guía maestra versionada junto al proyecto.
- Reglas críticas extraídas a módulos de dominio puros.
- Pruebas unitarias, de integración, contrato/build y base de datos.
- CI reproducible sin secretos para la aplicación y Supabase local.

## 2. Alcance congelado de Opportunity Circles 1.0.0

El MVP de candidatura debe demostrar:

1. Una misión completa en seis a ocho minutos.
2. Fuentes visibles durante la investigación.
3. Preguntas socráticas breves.
4. Decisión inicial y decisión final.
5. Mapa o registro de evidencia.
6. Tarjeta de evidencia.
7. Reto de transferencia.
8. Operación en español e inglés.
9. Funcionamiento correcto en móvil.
10. Métricas mínimas para el piloto.
11. Una sesión replicable de 25 minutos para 6–20 participantes.
12. Casos que distinguen fraude, incertidumbre y oportunidad legítima con
    información engañosa.

Quedan fuera hasta validar lo anterior:

- chat abierto;
- feed social;
- análisis de video;
- extensiones de navegador;
- aplicación móvil nativa;
- gamificación compleja;
- perfil social;
- generación automática de casos sin revisión;
- clasificación universal de verdad.

### Puerta para cualquier expansión

Las oportunidades estratégicas posteriores al piloto son:

- paquetes de casos de becas, empleos, intercambios y programas juveniles
  adaptados por país;
- formación y acreditación interna de facilitadores;
- alianzas con universidades, bibliotecas y organizaciones juveniles;
- análisis agregado para investigación educativa;
- modo de bajo consumo y funcionamiento offline/PWA;
- revisión editorial distribuida con control humano.

Ninguna entra al alcance por ser atractiva. Para avanzar debe responder a una
necesidad observada, tener responsable, costo, salvaguarda y métrica de éxito.

### Exploración posterior — AURA Community Localization Pilot: Kichwa

**Estado actual:** idea aprobada para exploración futura; sin traducción,
contactos, alianza, variante seleccionada ni comunidad confirmada. El producto
publicado continúa en español e inglés.

Esta exploración busca apoyar una adaptación comunitaria ecuatoriana, no añadir
un idioma como elemento decorativo. Solo se activa si se cumplen estas puertas:

1. una persona hablante, docente intercultural u organización Kichwa acepta
   participar;
2. la comunidad colaboradora define variante, escritura, terminología,
   reconocimiento y condiciones de uso;
3. se adapta un Circle completo, incluyendo consentimiento, fuentes,
   instituciones, acciones y preguntas de respaldo;
4. la primera versión usa contenido humano curado; no generación libre de IA;
5. jóvenes hablantes prueban comprensión, pertinencia y seguridad;
6. las correcciones y la aprobación quedan registradas antes de publicar.

No afirmar disponibilidad en Kichwa, codiseño, alianza, preservación lingüística
ni representación de pueblos indígenas hasta que exista evidencia.

## 3. Arquitectura objetivo inmediata

```text
Interfaz React
├── Catálogo de casos versionado
├── Dominio puro: eventos, agregación y transferencia
├── Motor determinista del flujo A-U-R-A
├── Preguntas de respaldo sin IA
├── Adaptador opcional de IA
├── Reto de transferencia sin guía
├── Eventos anónimos del piloto
├── Persistencia server-side opcional
└── Exportación de Tarjeta de evidencia + CSV
```

Principio: la misión debe poder completarse si el servicio de IA no está
disponible.

La arquitectura vigente y el procedimiento para cambios grandes están en
[`ARCHITECTURE_AND_TESTING.md`](./ARCHITECTURE_AND_TESTING.md). La deuda
controlada es `AuraExperience.tsx`: no bloquea los pilotos, pero debe dividirse
antes de agregar cuentas, roles o recorridos adicionales.

## 4. Modelo de datos de casos — primera versión implementada

El catálogo tipado vive en `app/data/cases.ts`. La interfaz y la ruta de IA
consumen el mismo caso activo, por lo que añadir una misión ya no exige
reescribir el flujo React ni duplicar listas de opciones en el servidor.

Modelo implementado:

```ts
type AuraCase = {
  id: string;
  number: string;
  status: "published";
  editorial: EditorialReview;
  catalog: LocalizedContent;
  mission: LocalizedContent;
  artifact: LocalizedContent;
  post: LocalizedContent;
  stages: AuraStages;
  initialChoices: CaseChoice[];
  signals: CaseChoice[];
  sources: CaseSource[];
  actions: CaseChoice[];
  evidenceMap: LocalizedContent;
  result: LocalizedContent;
  ai: ServerPromptContext;
};
```

### Criterios de aceptación

- [x] El contenido de las misiones sale del componente React.
- [x] La interfaz renderiza cualquier caso publicado del catálogo.
- [x] Los textos ES/EN tienen paridad estructural.
- [x] La ruta de IA valida opciones según el caso activo.
- [x] Toda fuente contiene tipo, título, contexto y limitación.
- [x] Toda pieza simulada declara ID, procedencia, fecha y carácter ficticio.
- [x] Cada caso enlaza referencias reales para contexto o método.
- [x] Añadir validación formal de esquema y estado de revisión editorial.

## 5. Backlog priorizado

### P0 — antes del primer piloto

#### P0.1 Extraer el caso a datos — implementado en 0.4.0

- Catálogo tipado con casos 01 y 02.
- Separar contenido de presentación y contenido del caso.
- Añadir pruebas del contrato de casos en build.

**Aceptación alcanzada:** cambiar o añadir un caso no exige editar el componente
de la misión ni las listas permitidas de la ruta de IA.

#### P0.2 Reto de transferencia — actualizado en 1.0.0

- [x] Presentar una afirmación nueva sobre una alianza para 40 pasantías.
- [x] Evaluar seis conductas: afirmación, origen, procedencia, corroboración,
  incertidumbre y acción.
- [x] No mostrar fuentes, pistas ni preguntas de AURA.
- [x] Registrar las decisiones mediante opciones codificadas.
- [x] Calcular una puntuación observable `0–6`.

**Aceptación alcanzada:** el reto permite observar si la persona reconstruye el
proceso completo en una oportunidad desconocida, sin pistas ni explicaciones
antes de enviar.

#### P0.2b Opportunity Circles — implementado en 1.0.0

- [x] Especializar el catálogo activo en becas, empleos, intercambios y
  programas juveniles.
- [x] Conservar los tres estados pedagógicos: engañoso, insuficiente y
  respaldado con límites.
- [x] Añadir una agenda comunitaria exacta de 25 minutos.
- [x] Añadir salvaguardas para datos, relatos, enlaces y acusaciones.
- [x] Conectar el modo facilitador con el concepto de Circle.
- [x] Mantener el catálogo general anterior como currículo legado, fuera del
  piloto activo.

**Aceptación técnica alcanzada:** el producto, la guía y la medición expresan
una misma intervención. **Aceptación de impacto pendiente:** dos Circles reales,
25 o más participantes agregados y una iteración documentada.

#### P0.3 Instrumentación mínima — implementada en 0.5.0

Eventos implementados:

- `mission_started`
- `initial_decision_recorded`
- `signal_selected`
- `source_opened`
- `action_selected`
- `reasoning_finding_selected`
- `reasoning_limit_selected`
- `evidence_card_generated`
- `mission_abandoned`
- `transfer_started`
- `transfer_choice_selected`
- `transfer_completed`
- `pilot_baseline_recorded`
- `pilot_exit_recorded`

Propiedades permitidas:

- identificador anónimo de sesión;
- identificador de caso;
- idioma;
- etapa;
- duración;
- opción seleccionada codificada;
- versión del producto.
- puntuación de transferencia.
- respuesta codificada de confianza `1–5`.

**No recopilar:** nombre, correo, texto privado pegado, ubicación precisa,
IP almacenada, agente de navegador, identificadores publicitarios o historial
de navegación.

**Aceptación alcanzada:** existe un contrato cerrado, consentimiento explícito,
validación server-side, respaldo local y exportación CSV. La persistencia
central está activa en Supabase, usa únicamente la ruta server-side y fue
verificada con eventos anónimos de la aplicación pública.

#### P0.3b Expediente de fuentes — implementado en 0.7.0

- [x] Identificador estable para cada pieza del caso.
- [x] Procedencia, fecha y declaración explícita de simulación.
- [x] Separación visual entre evidencia ficticia y referencias reales.
- [x] Referencias abiertas con autor, editor, fecha y fecha de consulta.
- [x] Paridad estructural en español e inglés.

**Aceptación alcanzada:** AURA ya no presenta una pieza educativa inventada como
si fuera una publicación, estudio o reporte real. La persona puede distinguir
qué pertenece al caso y abrir el material externo que respalda el contexto o el
método de verificación.

#### P0.4 Modo facilitación — implementado en 0.7.0

- [x] Exportación CSV por sesión.
- [x] Código aleatorio de piloto con 12 caracteres.
- [x] Enlace de invitación compartible.
- [x] Vista agregada, sin identificar personas ni devolver filas.
- [x] Participantes, finalización, transferencia, tiempo y puntuación media.
- [x] Validación server-side, límite de frecuencia e índice parcial en Supabase.

**Aceptación técnica alcanzada:** Nicole puede crear un código, copiar el enlace
y consultar resultados agregados sin apoyo técnico. Falta validar el protocolo
con personas reales antes de declarar alcanzada la aceptación operativa.

#### P0.5 Accesibilidad y dispositivos — salvaguardas implementadas en 0.8.0

- [x] WCAG 2.2 AA como objetivo documentado.
- [x] Navegación completa con teclado y enlace para saltar a la misión.
- [x] Regiones, estados y controles con etiquetas accesibles.
- [x] Foco visible en enlaces, botones e inputs.
- [x] Salvaguardas específicas para 320 px sin desplazamiento horizontal.
- [ ] Prueba física en Android de gama media durante el ensayo interno.
- [x] Modo de reducción de movimiento.

**Aceptación técnica alcanzada:** build, lint, prueba automatizada y emulación de
320 px sin defectos críticos. La prueba física pertenece al protocolo del
ensayo, no al backlog de código.

#### P0.6 Modularidad y compuertas de calidad — implementado el 29-07-2026

- [x] Validación de eventos separada del transporte HTTP.
- [x] Agregación de pilotos separada de la ruta.
- [x] Puntuación de transferencia separada de React.
- [x] 14 pruebas unitarias y 7 de integración.
- [x] 19 comprobaciones de contrato/build.
- [x] 12 aserciones pgTAP para esquema, restricciones, RLS y privilegios.
- [x] Umbrales de cobertura: 90 % líneas, 70 % ramas y 75 % funciones.
- [x] GitHub Actions verifica aplicación y base en cada cambio de `main`.

**Aceptación objetivo de 1.0.0:** 52 comprobaciones aprobadas localmente y en
Linux CI.
Las pruebas no llaman servicios de producción ni contienen secretos.

### P1 — candidatura y demo final

#### P1.1 Casos equilibrados — implementado en 0.8.0

- [x] Una afirmación verdadera presentada de forma sensacionalista.
- [x] Una afirmación engañosa.
- [x] Una afirmación con evidencia insuficiente.
- [x] Mostrar el estado de evidencia solo al terminar la investigación.
- [x] Conservar referencias reales separadas del expediente ficticio.

**Aceptación alcanzada:** el catálogo cubre `supported-with-limits`,
`misleading` e `insufficient`; el build falla si uno de esos estados desaparece.

#### P1.2 IA socrática acotada — primera versión implementada

Usos permitidos:

- reformular una pregunta según la acción observada;
- pedir justificación;
- resumir evidencia seleccionada;
- señalar una omisión sin dar el veredicto;
- generar feedback de transferencia sujeto a rúbrica.

Salida estructurada sugerida:

```json
{
  "question": "string",
  "reason": "missing_source | missing_context | unsupported_action",
  "references": ["source-id"],
  "abstain": false
}
```

**Aceptación:** si la salida es inválida, aparece una pregunta de respaldo; la IA
no inventa fuentes ni oculta incertidumbre.

Estado actual:

- Ruta privada `POST /api/aura/coach`.
- Responses API mediante el SDK oficial.
- Modelo configurable con `OPENAI_MODEL`.
- Entrada limitada a identificadores predefinidos.
- Una sola pregunta, sin veredicto ni fuentes inventadas.
- `store: false`, límite de salida y rate limit básico.
- Preguntas de respaldo si la clave o el servicio no están disponibles.

Pendiente: evaluación con una rúbrica, pruebas adversariales y limitación
distribuida antes de tráfico público significativo.

#### P1.3 Exportar Tarjeta de evidencia

- Imagen o PDF compartible.
- Sello claro de “caso educativo”.
- Fuentes y fecha.
- Sin inferir identidad.
- Versión accesible en texto.

**Aceptación:** el archivo se genera en móvil y no presenta la conclusión como
veredicto institucional de UNESCO.

#### P1.4 Demo y video

- Recorrido de producto de 5–7 minutos; demostración narrada condensada para el
  video oficial de máximo tres minutos.
- Caso con cambio visible de razonamiento.
- Subtítulos ES/EN.
- Capturas reales del producto.
- Contingencia: video local si falla internet.

**Aceptación:** una persona externa comprende problema, método, diferencia,
evidencia y siguiente paso sin explicación adicional.

### P2 — después de enviar

- Suite E2E de navegador para recorrido, idioma, teclado y móvil.
- Dividir `AuraExperience.tsx` antes de ampliar el modelo de estado.
- Kit regional y formación de facilitadores de Opportunity Circles.
- Herramienta de creación local de casos.
- Panel institucional.
- Biblioteca de micromódulos.
- Modo de bajo consumo de datos.
- PWA/offline si los pilotos confirman una barrera de conectividad.
- AURA Community Localization Pilot — Kichwa, condicionado a codiseño y revisión
  con hablantes y educadores.
- Otros países e idiomas únicamente mediante localización comunitaria revisada.
- Evaluación longitudinal.

## 6. Plan de sprints

### Sprint 0 — congelar producto

- Revisar el prototipo con Hernández Axel, Nicole y José.
- Confirmar tono, público, caso y recorrido.
- Registrar decisiones.

**Salida:** alcance firmado y backlog priorizado.

### Sprint 1 — sistema de casos

- Extraer datos.
- Añadir casos 02 y 03.
- Pruebas unitarias del esquema.

**Salida:** catálogo bilingüe revisable.

### Sprint 2 — transferencia y métricas

- Crear reto sin ayuda.
- Instrumentar eventos anónimos.
- Añadir consentimiento.

**Salida:** versión apta para ensayo interno.

### Sprint 3 — facilitación

- [x] Modo de sesión.
- [x] Panel agregado.
- [x] Instrumento pre/post.
- [x] Exportación agregada sin identificadores individuales.

**Salida:** paquete de piloto.

### Sprint 4 — piloto

- Ensayo con 5 personas.
- Corregir defectos.
- Piloto objetivo.
- Analizar resultados sin exagerarlos.

**Salida:** métricas reales y citas autorizadas.

### Sprint 5 — candidatura

- Integrar datos reales.
- Grabar demo.
- Editar video.
- Revisión ES/EN.
- Enviar antes del límite interno.

**Salida:** candidatura completa y respaldada.

## 7. Decisiones pendientes

| Decisión | Responsable | Fecha límite | Criterio |
|---|---|---:|---|
| Licencia del repositorio | Los tres | Antes de definir licencia | Apertura vs. protección |
| Modelo y costo de IA | Hernández Axel | Antes del piloto | confirmar calidad, costo y latencia con uso real |
| Infraestructura del piloto | Hernández Axel | Resuelta | Vercel + Supabase server-side, consentimiento y modo local |
| Institución o comunidad piloto | Nicole + José | Antes del piloto | acceso real y permiso |
| Equipo final | Los tres | Resuelta | Axel + Nicole + José; no incorporar más personas |
| Revisor AMI externo | Nicole + José | Antes del piloto | rigor pedagógico |

## 8. Métricas de piloto

No medir solo “acertó/no acertó”.

### Conductas

- pausa antes de compartir;
- identifica la afirmación verificable;
- abre fuente primaria;
- realiza lectura lateral;
- reconoce patrocinio o incentivo;
- distingue lo medido de lo afirmado;
- justifica una acción proporcional;
- transfiere la estrategia a un caso nuevo.

### Experiencia

- finalización;
- tiempo por etapa;
- abandono;
- comprensión del lenguaje;
- utilidad percibida;
- confianza calibrada;
- intención de usar el método de nuevo.

### Guardrails

- no aumentar cinismo;
- no presentar incertidumbre como falsedad;
- no penalizar una decisión inicial;
- no premiar obediencia a la IA;
- no almacenar contenido privado sin consentimiento explícito.

### Demostración técnica sin piloto humano

`AURA-DEMSAMPLEXYZ` existe únicamente para comprobar visualmente el panel de
agregados. Sus datos son deterministas, locales y simulados; no se escriben en
Supabase, no se exportan y no pueden presentarse como métrica de participantes.
La documentación de candidatura debe separar esta comprobación del piloto real.

## 9. Revisión antes de cada release

- [ ] La misión puede completarse sin ayuda del equipo.
- [ ] ES y EN expresan el mismo significado.
- [ ] No hay métricas inventadas.
- [ ] Todo caso está etiquetado.
- [ ] Las fuentes permanecen visibles.
- [ ] La IA puede abstenerse.
- [ ] El flujo funciona con teclado.
- [ ] El flujo funciona en móvil.
- [ ] Los eventos no contienen datos sensibles.
- [ ] `npm run lint` pasa.
- [ ] `npm run check` pasa.
- [ ] `npm run test:coverage` mantiene los umbrales.
- [ ] `npm run test:db` pasa cuando cambia Supabase.
- [ ] README y guía siguen vigentes.

## 10. Criterio de victoria

El producto estará listo para competir cuando el equipo pueda demostrar, no
solo afirmar, lo siguiente:

> Una persona completó una misión, produjo una conclusión trazable, aplicó la
> habilidad a un caso nuevo y el equipo pudo medir ese aprendizaje sin pedirle
> que obedeciera a una inteligencia artificial.

---

# Anexo 8 — docs/AXEL_OPERATIONAL_INPUTS.md

> **Propósito de la fuente:** Decisiones reales de infraestructura, IA, presupuesto, equipo y pendientes.<br>
> **Extensión incorporada:** 195 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA — Insumos operativos de Axel (candidatura)

**Propósito:** respuestas del liderazgo técnico para completar viabilidad,
presupuesto y datos del equipo en el PDF / dossier.
**No es backlog de código.** Los defectos del MVP están en
[`MVP_TECHNICAL_FIXES.md`](./MVP_TECHNICAL_FIXES.md).
**Fecha de actualización:** 30 de julio de 2026.
**Fuente:** Hernández Axel.

Regla de lenguaje (igual que el dossier):

- lo marcado **DECIDIDO** puede afirmarse en la propuesta;
- lo marcado **PENDIENTE** no debe inventarse ni presentarse como hecho;
- no afirmar alianzas, impacto medido ni dominio propio sin evidencia.

---

## 1. Equipo y liderazgo

| Campo | Valor | Estado |
|---|---|---|
| Líder del equipo (postulación) | Hernández Axel | **DECIDIDO** |
| Nombre público del proyecto | AURA Opportunity Circles | **DECIDIDO** |
| Nombre legal para el formulario | Confirmar contra documento de identidad antes del envío | **PENDIENTE ADMINISTRATIVO** |
| Equipo confirmado | Axel + Nicole + José | **DECIDIDO; equipo cerrado** |
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
| CI | GitHub Actions: aplicación + Supabase pgTAP | **OPERATIVA Y VERIFICADA** |
| Calidad automatizada | 52 comprobaciones; cobertura con umbrales | **VERIFICADA 29-07-2026** |

**Nota para redacción:** usar la URL pública actual para capturas y demo. No
prometer dominio propio hasta decidirlo. Si más adelante hay dominio, actualizar
este archivo y el dossier.

Evidencia técnica de referencia:

- commit estable:
  [`b6b7943`](https://github.com/AxelJhostin/AURA/commit/b6b7943fc6b0dfa778ab269d56d3ba6a77d02ca5);
- CI completa:
  [`30505243112`](https://github.com/AxelJhostin/AURA/actions/runs/30505243112);
- 14 pruebas unitarias, 7 de integración, 19 comprobaciones de
  contrato/build y 12 aserciones pgTAP;
- cobertura instrumentada: 95,54 % líneas, 77,36 % ramas y 79,52 % funciones;
- auditoría npm: cero vulnerabilidades conocidas al verificar esta versión.

Estas cifras respaldan capacidad técnica y reducción de riesgo. No prueban
aprendizaje, impacto ni accesibilidad con personas reales.

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

### Postura estratégica del producto

- **Evaluación interna actual:** 8,5/10 como MVP; no es nota oficial ni
  probabilidad de ganar.
- **Fortalezas que Axel puede demostrar:** producto público, flujo bilingüe,
  transferencia `0–6`, datos mínimos, modo sin IA, CI y arquitectura pequeña.
- **Oportunidades posteriores al piloto:** paquetes de casos por país,
  formación de facilitadores, alianzas universitarias, análisis agregado de
  aprendizaje, modo de conectividad reducida y un piloto de localización
  comunitaria Kichwa si aparece una colaboración real.
- **Límites técnicos honestos:** no existe seguimiento longitudinal, PWA/offline
  completo, autoría dinámica ni validación con públicos diversos.
- **Decisión:** no ampliar funciones hasta que un piloto revele una necesidad
  concreta; solo corregir fallas críticas, privacidad, accesibilidad o exactitud.

---

## 6. Aún pendiente (no inventar)

| Tema | Responsable sugerido | Notas |
|---|---|---|
| Plan técnico a 6 meses (versión final y costos) | Axel | Existe estructura preliminar; faltan supuestos cuantificados y aprobación del equipo |
| Mantenimiento editorial de casos (quién + frecuencia) | Los tres | Sin decisión aún |
| Dos riesgos técnicos principales + mitigación (texto final) | Axel | Pendiente de redacción; el dossier ya tiene borradores de riesgos |
| URL canónica definitiva | Axel | Después; mientras tanto usar demo Vercel |
| Desglose de costos 100 / 1.000 / 10.000 | Axel | Solo cuando haya estimaciones honestas |
| Licencia pública concreta (MIT, etc.) | Los tres | Cuando decidan publicarla |
| Contacto Kichwa o de educación intercultural bilingüe | Nicole + José | No existe hoy; buscar después del piloto sin afirmar alianza |
| Variante, glosario, reconocimiento y compensación para localización Kichwa | Comunidad colaboradora + equipo | No decidir sin hablantes y educadores participantes |
| Viabilidad técnica de IA en Kichwa | Axel + revisores hablantes | Empezar con preguntas curadas; no habilitar generación libre sin validación |

---

## 7. Texto usable en la propuesta (borrador, solo hechos)

> AURA is led by Hernández Axel (technical and product lead), Nicole
> Madelyne Pincay Soledispa (strategy and impact) and José Luis Cañarte Plúa
> (research, English and editorial review). The public MVP runs on Vercel’s free tier and optional
> Supabase free-tier analytics, currently served at a `*.vercel.app` URL. The
> Socratic coach uses OpenAI (GPT-5.6 family), which will be retained for the
> pilot with a practical API budget ceiling of about USD 30; the full mission
> still works with deterministic fallback prompts if the model is unavailable.
> Base educational missions remain free and require no login. A repository
> license has not been published yet. Detailed six-month technical roadmap,
> editorial maintenance cadence, and precise cost tables for 1,000+ users will
> be completed with honest estimates rather than invented figures.

Versión ES (misma restricción de hechos):

> AURA está liderada por Hernández Axel (liderazgo técnico y de
> producto), Nicole Madelyne Pincay Soledispa (estrategia e impacto) y José
> Luis Cañarte Plúa (investigación, inglés y revisión editorial). El MVP público
> corre en el plan gratuito de Vercel y
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
   cualitativo; José lidera inglés, evidencia y edición.

---

**Próxima actualización esperada de Axel:** supuestos y costos del plan de seis
meses, riesgos técnicos para el PDF, cadencia editorial y, si aplica, URL
canónica + licencia. El código del MVP no tiene tareas críticas abiertas.

---

# Anexo 9 — docs/MVP_TECHNICAL_FIXES.md

> **Propósito de la fuente:** Registro histórico de las correcciones técnicas críticas ya cerradas.<br>
> **Extensión incorporada:** 254 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA 0.8.0 — Correcciones técnicas del MVP

> **Documento histórico cerrado.** FIX-01 a FIX-05 fueron implementados y
> verificados. No contiene trabajo pendiente ni debe usarse como backlog
> vigente. El estado técnico actual de AURA Opportunity Circles 1.0.0 está en
> [`ARCHITECTURE_AND_TESTING.md`](./ARCHITECTURE_AND_TESTING.md): 52
> comprobaciones automatizadas, CI verde y MVP técnico completo al 29 de julio
> de 2026. El alcance permanece congelado hasta los pilotos. Las referencias de
> líneas que siguen son aproximaciones históricas.

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

---

# Anexo 10 — CONTRIBUTING.md

> **Propósito de la fuente:** Reglas para cambiar código o contenido sin degradar el MVP ni su integridad.<br>
> **Extensión incorporada:** 141 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# Contribuir a AURA

Gracias por ayudar a construir AURA. El proyecto combina producto, educación,
investigación y estrategia; por eso una contribución no termina cuando “el
código funciona”. También debe proteger el aprendizaje, la evidencia y la
seguridad de las personas.

## Antes de empezar

1. Lee el [`README.md`](README.md).
2. Consulta la
   [guía maestra](public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md).
3. Revisa [`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md).
4. Confirma que la tarea pertenece al MVP vigente.

### Compuerta de alcance vigente

Opportunity Circles 1.0.0 está congelado hasta completar pilotos. Una
contribución anterior al piloto debe resolver al menos una de estas condiciones:

- error crítico reproducible;
- barrera de consentimiento, misión, transferencia o lectura agregada;
- riesgo de privacidad o accesibilidad;
- error editorial o factual en un caso;
- falla de build, prueba, producción o demostración pública.

No se aceptan por ahora más casos, verticales, gamificación, perfiles, chat
abierto, panel institucional ni PWA. Esas oportunidades se reconsideran con
evidencia del piloto y una decisión explícita del equipo.

La futura exploración Kichwa no autoriza traducciones espontáneas. Antes de
aceptar contenido debe existir una colaboración verificable con hablantes o
educadores, definición comunitaria de variante y terminología, revisión humana,
atribución acordada y una prueba de comprensión. Hasta entonces la experiencia
publicada permanece únicamente en español e inglés.

## Flujo de trabajo

1. Crea una rama con un objetivo claro:

   ```bash
   git switch -c feat/nombre-breve
   ```

2. Haz cambios pequeños y verificables.
3. Prueba español, inglés, escritorio y móvil.
4. Ejecuta:

   ```bash
   npm run check
   ```

5. Si cambia el esquema o las reglas de persistencia, ejecuta también:

   ```bash
   npm run db:start
   npm run test:db
   npm run db:stop
   ```

6. Documenta cualquier decisión pedagógica o de privacidad.
7. Abre una revisión antes de fusionar.

Consulta [`docs/ARCHITECTURE_AND_TESTING.md`](docs/ARCHITECTURE_AND_TESTING.md)
antes de agregar estados, rutas, eventos o migraciones.

### Pruebas según el cambio

| Si cambia… | Prueba mínima |
|---|---|
| regla de puntuación, validación o agregación | unitaria en `tests/unit/` |
| ruta HTTP o comportamiento ante un proveedor | integración en `tests/integration/` |
| HTML, metadatos, catálogo, privacidad o build | contrato en `tests/*.test.mjs` |
| tabla, restricción, índice, privilegio o RLS | migración nueva + pgTAP |
| flujo, idioma, teclado o layout | recorrido manual ES/EN y móvil; E2E cuando exista |

Las reglas reutilizables deben vivir en `app/domain/`, sin dependencias de
React, red ni Supabase. Las rutas y componentes actúan como adaptadores. No
dupliques una regla de negocio en el componente y en la API.

## Definición de terminado

Una tarea está terminada cuando:

- cumple sus criterios de aceptación;
- no introduce un veredicto automático disfrazado;
- mantiene las fuentes y límites visibles;
- funciona con teclado y en pantalla móvil;
- no inventa datos, alianzas o métricas;
- tiene pruebas proporcionales al riesgo;
- mantiene los umbrales de cobertura definidos por `npm run test:coverage`;
- actualiza la documentación afectada.

## Commits

Formato sugerido:

```text
feat: add transfer challenge
fix: preserve language after mission reset
docs: define pilot consent flow
test: cover evidence card generation
```

## Contenido y casos

Todo caso debe indicar:

- que es real, adaptado o simulado;
- la afirmación principal;
- fuentes primarias y contexto independiente;
- límites e incertidumbres;
- posibles conflictos de interés;
- preguntas de respaldo si la IA falla;
- revisión humana y fecha.

Nunca agregar capturas reales con datos personales sin autorización.

## IA

Una función de IA requiere:

- propósito educativo específico;
- salida estructurada;
- fuentes visibles;
- comportamiento de abstención;
- prueba de seguridad y sesgo;
- alternativa sin IA;
- costo estimado.

No se aceptará un chatbot general como sustituto del flujo A-U-R-A.

Las pruebas de integración no deben llamar a OpenAI ni a Supabase de
producción. Los límites externos se simulan; la base local se valida mediante
migraciones y pgTAP, sin secretos.

## Licencia

El equipo todavía no ha elegido licencia pública. Hasta tomar esa decisión, no
se debe asumir permiso de redistribución fuera de la colaboración autorizada.

---

# Anexo 11 — public/docs/AURA_Nota_Transparencia_Validacion_Tecnica_2026.md

> **Propósito de la fuente:** Regla de transparencia para distinguir demo técnica, MVP y evidencia de participantes.<br>
> **Extensión incorporada:** 76 líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

# AURA Opportunity Circles — Nota de transparencia de validación técnica

**Fecha de corte:** 7 de agosto de 2026<br>
**Estado:** MVP funcional y conexión Vercel → Supabase verificados; no existe un piloto con participantes reales cerrado.

## Propósito

Esta nota evita que una demostración técnica se confunda con evidencia de impacto. AURA enseña a distinguir afirmaciones, evidencia y límites; su candidatura debe cumplir el mismo estándar.

## Tres tipos de evidencia, sin mezclarlos

| Tipo | Qué demuestra | Estado actual | Lenguaje autorizado |
|---|---|---|---|
| Producto construido | MVP, privacidad y recorrido | Verificado | `Functional public MVP ready for pilots` |
| Validación técnica | Que el panel calcula y presenta agregados | Verificada con muestra determinista | `Technical demonstration with simulated data` |
| Piloto humano | Uso, fricciones o aprendizaje de personas reales | Pendiente | No afirmar resultados, mejoras ni porcentajes |

La conexión de producción a Supabase está activa, pero la base comienza sin eventos de participantes. Esa ausencia es correcta: no se ha introducido ningún dato sintético en Supabase.

## Modo de demostración técnica

En el panel de facilitación, introducir este código:

```text
AURA-DEMSAMPLEXYZ
```

El panel mostrará una muestra **determinista y local** para recorrer todas las métricas. El aviso ámbar visible indica que los valores:

- no proceden de personas;
- no se consultan ni se escriben en Supabase;
- no se exportan a CSV;
- no son un piloto, evaluación de usabilidad ni resultado educativo;
- no pueden convertirse en porcentajes, gráficas o citas del PDF final.

Su único propósito es verificar la interfaz del reporte agregado durante una demo técnica. La muestra incluye resultados mixtos deliberadamente: no pretende probar eficacia, alcance ni mejora.

## Uso permitido en el PDF y el video

Si se muestra el panel, debe verse completo el aviso de “Technical demonstration · simulated data”. El guion autorizado es:

> “AURA includes an aggregate facilitator dashboard. This screen uses a client-only simulated dataset to demonstrate the reporting interface; no participant outcomes are claimed. The public MVP is ready for a future consent-based pilot.”

También es válido presentar solo las capacidades técnicas: misión guiada, transferencia sin pistas, consentimiento, analítica anónima, RLS, panel agregado y pruebas automatizadas.

## Lenguaje no autorizado

No usar la muestra de demostración para afirmar, sugerir o dejar implícito que:

- seis personas participaron;
- 83 % completó una misión;
- la confianza aumentó;
- el promedio de transferencia mide aprendizaje real;
- AURA ya fue validada con jóvenes, una institución o una comunidad;
- existe un piloto, testimonio o alianza que no ocurrió.

No se deben recortar capturas para ocultar el aviso ni guardar su contenido como un CSV de resultados.

## Qué sí fortalece la candidatura ahora

La convocatoria 2026 solicita un prototipo o concepto y valora factibilidad, innovación, claridad, impacto e inclusión. No establece que un piloto humano sea obligatorio. Por ello, la candidatura debe ganar credibilidad con:

1. un problema específico y cotidiano;
2. un MVP público que permite recorrer la solución de extremo a extremo;
3. una intervención breve, bilingüe, replicable y con privacidad por diseño;
4. límites honestos y un plan concreto de piloto posterior;
5. un PDF y video claros que separen lo construido, lo demostrado técnicamente y lo que todavía se evaluará con personas.

La página oficial de UNESCO indica que cada proyecto será revisado por tres expertos internacionales. Por eso la claridad y la trazabilidad importan más que aparentar métricas inexistentes.

Fuente: <https://www.unesco.org/en/articles/unesco-youth-hackathon-2026>

## Próxima validación ética

Cuando termine el periodo de exámenes y exista disponibilidad, el primer piloto debe usar un código nuevo —nunca `AURA-DEMSAMPLEXYZ`—, consentimiento explícito y una cohorte identificada solo fuera de la aplicación. Sus resultados se analizarán como muestra pequeña, no aleatoria y de corto plazo.
