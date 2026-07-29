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

## Definición de terminado

Una tarea está terminada cuando:

- cumple sus criterios de aceptación;
- no introduce un veredicto automático disfrazado;
- mantiene las fuentes y límites visibles;
- funciona con teclado y en pantalla móvil;
- no inventa datos, alianzas o métricas;
- tiene pruebas proporcionales al riesgo;
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

## Licencia

El equipo todavía no ha elegido licencia pública. Hasta tomar esa decisión, no
se debe asumir permiso de redistribución fuera de la colaboración autorizada.
