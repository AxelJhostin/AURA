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

**Versión:** MVP demostrable `0.2.0`  
**Objetivo:** UNESCO Youth Hackathon 2026  
**Equipo confirmado:** Axel + Nicol  
**Modo:** prototipo local, listo para versionarse en GitHub  
**Caso incluido:** caso educativo simulado sobre una afirmación de bebidas
energéticas y memoria

La demo ya permite:

- Cambiar la interfaz entre español e inglés.
- Registrar una reacción inicial sin señalarla como correcta o incorrecta.
- Identificar señales que justifican una pausa.
- Elegir fuentes y construir un mapa de evidencia.
- Decidir una acción proporcional a la evidencia.
- Generar y copiar una Tarjeta de evidencia.
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

El MVP no depende todavía de IA, autenticación ni base de datos. Esta es una
decisión deliberada: primero se valida la experiencia pedagógica central; luego
se añade IA únicamente donde mejore las preguntas, la adaptación y el feedback.

## Inicio rápido

### Requisitos

- Node.js `>=22.13.0`
- npm

### Ejecutar en local

```bash
npm install
npm run dev
```

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
│   ├── components/
│   │   └── AuraExperience.tsx   # experiencia, contenido e interacciones
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
├── .openai/
│   └── hosting.json             # configuración compatible con Sites
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
desarrollo del MVP, futura integración responsable de IA, analítica, seguridad,
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
- Next.js 16 como contrato de aplicación.
- vinext + Vite para el entorno local y compilación.
- CSS propio para identidad visual, diseño responsivo y accesibilidad.
- Estado local de React para la misión.

No hay backend en esta versión. No se recopilan datos ni se almacenan respuestas.
Una base de datos solo debe añadirse después de definir el modelo de
consentimiento, retención y privacidad.

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
Futuro: reto de transferencia
```

## Próxima versión recomendada

La siguiente meta no es añadir un chatbot general. Es completar el ciclo de
aprendizaje:

1. Extraer los casos a un esquema de datos reutilizable.
2. Crear dos casos adicionales: uno verdadero y uno incierto.
3. Añadir un reto de transferencia sin ayuda.
4. Instrumentar eventos mínimos y anónimos.
5. Crear modo de facilitación para el piloto.
6. Integrar IA con salidas estructuradas y preguntas de respaldo.
7. Ejecutar pruebas con usuarios antes de ampliar funciones.

Cada elemento tiene criterios de aceptación en
[`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md).

## GitHub

El proyecto ya es un repositorio Git local. Antes de publicarlo:

1. Revisar nombres y correos de autores.
2. Elegir una licencia. No se ha asumido una licencia pública.
3. Crear un repositorio remoto.
4. Confirmar que no existan secretos ni datos del piloto.
5. Hacer el primer commit.
6. Conectar el remoto y subir la rama principal.

Ejemplo de primer commit:

```bash
git add .
git commit -m "feat: launch AURA evidence lab prototype"
```

No se incluye una licencia de código porque esa decisión pertenece al equipo.

## Convenciones

- Interfaz y contenido principal: español e inglés.
- Componentes React: `PascalCase`.
- Variables y funciones: inglés.
- Commits: mensajes breves tipo Conventional Commits.
- Una rama por objetivo verificable.
- Ninguna métrica se presenta como resultado hasta tener evidencia.

## Documentación de referencia

La guía maestra contiene:

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
