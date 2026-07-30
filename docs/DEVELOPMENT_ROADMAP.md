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
