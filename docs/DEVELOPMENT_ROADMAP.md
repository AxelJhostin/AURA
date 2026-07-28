# AURA — Hoja de ruta de desarrollo

- **Propietario técnico:** Axel
- **Propietaria de estrategia e impacto:** Nicol
- **Estado base:** MVP demostrable 0.4.0
- **Objetivo:** convertir el flujo actual en un piloto medible y una candidatura
respaldada por evidencia real.

## 1. Qué ya existe

- Página de presentación bilingüe.
- Método A-U-R-A explicado.
- Motor bilingüe con dos casos educativos simulados.
- Flujo interactivo de cuatro etapas.
- Selección de señales y fuentes.
- Mapa de evidencia.
- Tarjeta de evidencia copiable.
- Preguntas socráticas adaptadas mediante OpenAI con respaldo determinista.
- Build estándar de Next.js compatible con Vercel.
- Equipo y hoja de ruta visibles.
- Diseño responsivo y navegación por teclado.
- Guía maestra versionada junto al proyecto.

## 2. Alcance congelado del MVP

El MVP de candidatura debe demostrar:

1. Una misión completa en menos de cinco minutos.
2. Fuentes visibles durante la investigación.
3. Preguntas socráticas breves.
4. Decisión inicial y decisión final.
5. Mapa o registro de evidencia.
6. Tarjeta de evidencia.
7. Reto de transferencia.
8. Operación en español e inglés.
9. Funcionamiento correcto en móvil.
10. Métricas mínimas para el piloto.

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

## 3. Arquitectura objetivo inmediata

```text
Interfaz React
├── Catálogo de casos versionado
├── Motor determinista del flujo A-U-R-A
├── Preguntas de respaldo sin IA
├── Adaptador opcional de IA
├── Eventos anónimos del piloto
└── Exportación de Tarjeta de evidencia
```

Principio: la misión debe poder completarse si el servicio de IA no está
disponible.

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
- [ ] Añadir validación formal de esquema y estado de revisión editorial.

## 5. Backlog priorizado

### P0 — antes del primer piloto

#### P0.1 Extraer el caso a datos — implementado en 0.4.0

- Catálogo tipado con casos 01 y 02.
- Separar contenido de presentación y contenido del caso.
- Añadir pruebas del contrato de casos en build.

**Aceptación alcanzada:** cambiar o añadir un caso no exige editar el componente
de la misión ni las listas permitidas de la ruta de IA.

#### P0.2 Reto de transferencia

- La versión 0.4.0 ya demuestra que el método opera sobre un segundo tema.
- Aún falta el reto final no guiado para medir transferencia sin repetir pistas.
- Presentar una segunda afirmación breve.
- Pedir al usuario elegir el primer movimiento de investigación.
- No ofrecer las mismas pistas que en la misión guiada.
- Registrar justificación.

**Aceptación:** se puede comparar desempeño guiado y no guiado.

#### P0.3 Instrumentación mínima

Eventos propuestos:

- `mission_started`
- `initial_decision_recorded`
- `signal_selected`
- `source_opened`
- `action_selected`
- `evidence_card_generated`
- `transfer_completed`
- `mission_abandoned`

Propiedades permitidas:

- identificador anónimo de sesión;
- identificador de caso;
- idioma;
- etapa;
- duración;
- opción seleccionada codificada;
- versión del producto.

**No recopilar:** nombre, correo, texto privado pegado, ubicación precisa,
identificadores publicitarios o historial de navegación.

**Aceptación:** existe diccionario de eventos, consentimiento definido y prueba
de que ninguna propiedad contiene datos sensibles.

#### P0.4 Modo facilitación

- Código corto de sesión.
- Pantalla con instrucciones.
- Vista agregada, sin identificar personas.
- Exportación CSV anonimizada.

**Aceptación:** Nicol puede operar una sesión sin apoyo técnico durante la
actividad.

#### P0.5 Accesibilidad y dispositivos

- WCAG 2.2 AA como objetivo.
- Navegación completa con teclado.
- Lectura comprensible con lector de pantalla.
- Contraste verificado.
- 320 px de ancho sin desplazamiento horizontal.
- Prueba en Android de gama media.
- Modo de reducción de movimiento.

**Aceptación:** lista de comprobación firmada y defectos críticos resueltos.

### P1 — candidatura y demo final

#### P1.1 Tres casos equilibrados

Incluir:

- una afirmación verdadera presentada de forma sensacionalista;
- una afirmación engañosa;
- una afirmación con evidencia insuficiente.

**Aceptación:** AURA no enseña que todo contenido viral es falso.

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

- Recorrido de 2–3 minutos.
- Caso con cambio visible de razonamiento.
- Subtítulos ES/EN.
- Capturas reales del producto.
- Contingencia: video local si falla internet.

**Aceptación:** una persona externa comprende problema, método, diferencia,
evidencia y siguiente paso sin explicación adicional.

### P2 — después de enviar

- AURA Circles.
- Herramienta de creación local de casos.
- Panel institucional.
- Biblioteca de micromódulos.
- Modo de bajo consumo de datos.
- Nuevos países e idiomas.
- Evaluación longitudinal.

## 6. Plan de sprints

### Sprint 0 — congelar producto

- Revisar el prototipo con Axel y Nicol.
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

- Modo de sesión.
- Panel agregado.
- Instrumento pre/post.

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
| Licencia del repositorio | Axel + Nicol | Antes de hacerlo público | Apertura vs. protección |
| Modelo y costo de IA | Axel | Antes del piloto | evaluar calidad, costo y latencia |
| Infraestructura del piloto | Axel | Antes de P0.3 | privacidad y simplicidad |
| Institución o comunidad piloto | Nicol | Antes de Sprint 4 | acceso real y permiso |
| Integrantes 3 y 4 | Equipo | Lo antes posible | complementariedad real |
| Revisor AMI externo | Nicol | Antes del piloto | rigor pedagógico |

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
- [ ] `npm test` pasa.
- [ ] README y guía siguen vigentes.

## 10. Criterio de victoria

El producto estará listo para competir cuando el equipo pueda demostrar, no
solo afirmar, lo siguiente:

> Una persona completó una misión, produjo una conclusión trazable, aplicó la
> habilidad a un caso nuevo y el equipo pudo medir ese aprendizaje sin pedirle
> que obedeciera a una inteligencia artificial.
