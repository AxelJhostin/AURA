import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

const outputPath = path.join(
  repositoryRoot,
  "public/docs/AURA_DOSSIER_COLABORATIVO_COMPLETO_2026.md",
);

const sources = [
  {
    path: "public/docs/AURA_Dossier_Postulacion_y_Matriz_Evaluacion_2026.md",
    purpose:
      "Estado de candidatura, matriz UNESCO, responsables, calendario y gates de envío.",
  },
  {
    path: "public/docs/AURA_Estructura_Definitiva_PDF_UNESCO_2026.md",
    purpose:
      "Plano completo, página por página, para redactar y diseñar el PDF final.",
  },
  {
    path: "public/docs/AURA_Guia_Maestra_UNESCO_Youth_Hackathon_2026.md",
    purpose:
      "Investigación, estrategia, producto, IA, piloto, equipo, pitch, riesgos y fuentes.",
  },
  {
    path: "public/docs/AURA_Opportunity_Circles_Guia_Facilitacion.md",
    purpose:
      "Protocolo de 25 minutos, salvaguardas, métricas y registro de pilotos.",
  },
  {
    path: "README.md",
    purpose:
      "Estado verificable del producto, capacidades, ejecución, despliegue y estructura.",
  },
  {
    path: "docs/ARCHITECTURE_AND_TESTING.md",
    purpose:
      "Arquitectura modular, límites, pirámide de pruebas y cambios seguros.",
  },
  {
    path: "docs/DEVELOPMENT_ROADMAP.md",
    purpose:
      "Alcance congelado, trabajo posterior al piloto y expansión responsable.",
  },
  {
    path: "docs/AXEL_OPERATIONAL_INPUTS.md",
    purpose:
      "Decisiones reales de infraestructura, IA, presupuesto, equipo y pendientes.",
  },
  {
    path: "docs/MVP_TECHNICAL_FIXES.md",
    purpose:
      "Registro histórico de las correcciones técnicas críticas ya cerradas.",
  },
  {
    path: "CONTRIBUTING.md",
    purpose:
      "Reglas para cambiar código o contenido sin degradar el MVP ni su integridad.",
  },
];

const overview = `# AURA Opportunity Circles — Dossier colaborativo completo 2026

## Archivo único de trabajo para Hernández Axel, Nicole y José Luis

**Fecha de corte:** 30 de julio de 2026<br>
**Versión funcional:** AURA Opportunity Circles 1.0.0<br>
**Estado técnico:** alcance del MVP técnico completado y listo para pilotos<br>
**Estado de impacto:** todavía no demostrado; requiere participantes reales<br>
**Estado de la postulación:** PDF, video, evidencia humana y envío pendientes<br>
**Demo pública:** <https://aura-opal-beta.vercel.app/><br>
**Repositorio:** <https://github.com/AxelJhostin/AURA><br>
**Convocatoria:** <https://www.unesco.org/en/media-information-literacy/youth-hackathon><br>
**Fecha límite documentada:** 16 de agosto de 2026, 23:59, hora de París<br>
**Objetivo interno:** enviar el 15 de agosto de 2026, 18:00, hora de Ecuador

> Este es el archivo que el equipo debe compartir y leer primero. Empieza con
> una capa canónica que resuelve el estado actual y el orden de trabajo. Después
> incorpora, sin resumir ni recortar, los diez documentos públicos vigentes del
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
`;

function countLines(content) {
  return content === "" ? 0 : content.split("\n").length;
}

function normalizeMarkdownForCompilation(content) {
  return content
    .split("\n")
    .map((line) => {
      const trimmed = line.trimEnd();
      const trailingLength = line.length - trimmed.length;

      if (trimmed !== "" && trailingLength >= 2) {
        return `${trimmed}<br>`;
      }

      return trimmed;
    })
    .join("\n");
}

const loadedSources = await Promise.all(
  sources.map(async (source) => {
    const content = await readFile(
      path.join(repositoryRoot, source.path),
      "utf8",
    );

    return {
      ...source,
      content: normalizeMarkdownForCompilation(content).trimEnd(),
      lines: countLines(content),
    };
  }),
);

const sourceTable = loadedSources
  .map(
    (source, index) =>
      `| ${index + 1} | \`${source.path}\` | ${source.purpose} | ${source.lines} |`,
  )
  .join("\n");

const annexes = loadedSources
  .map(
    (source, index) => `# Anexo ${index + 1} — ${source.path}

> **Propósito de la fuente:** ${source.purpose}<br>
> **Extensión incorporada:** ${source.lines} líneas<br>
> **Nota:** el contenido siguiente se conserva íntegro para que este único
> archivo pueda funcionar sin abrir documentos adicionales.

${source.content}`,
  )
  .join("\n\n---\n\n");

const output = `${overview}

## 27. Manifiesto de fuentes

| # | Ruta original | Para qué se usa | Líneas |
|---|---|---|---:|
${sourceTable}

---

# Parte VIII — Anexos íntegros

Los anexos mantienen la redacción completa de las fuentes vigentes. Los enlaces
relativos conservan su ruta original y funcionan mejor al abrir el documento
fuente dentro del repositorio.

${annexes}
`;

await writeFile(outputPath, output, "utf8");

console.log(
  `Wrote ${path.relative(repositoryRoot, outputPath)} with ${countLines(output)} lines.`,
);
