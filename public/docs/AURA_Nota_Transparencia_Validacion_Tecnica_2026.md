# AURA Opportunity Circles — Nota de transparencia de validación técnica

**Fecha de corte:** 7 de agosto de 2026  
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
