# Bachillerato · Herramienta de estudio

Web de estudio para Catalina Lázaro Joswig. Cada unidad tiene cuatro herramientas:
mapa conceptual, resumen narrativo, fichas con repetición espaciada y quiz.

**En línea:** https://madleito.github.io/bachillerato/

## Qué hay dentro

| Asignatura | Curso | Unidades |
|---|---|---|
| Biología | 2º Bachillerato | 1. Biomoléculas inorgánicas |
| Geología | 1º Bachillerato | 1. Estructura de la Tierra · 2. Procesos internos · 3. Procesos externos |

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:5173/bachillerato/
pnpm build      # genera dist/
pnpm typecheck
pnpm iconos     # regenera los iconos de la PWA desde public/logo.svg
```

Stack: Vite + React + TypeScript + Tailwind v4, como PWA instalable que funciona
sin conexión. Se publica solo en GitHub Pages al empujar a `main`.

## Cómo añadir una unidad

1. Crea `src/contenido/<asignatura>/<unidad>.tsx` y exporta un objeto `unidad` que
   cumpla el tipo `Unidad` de `src/types.ts`: `mapa`, `fichas`, `quiz` y un
   componente `Historia`.
2. Cada ficha y cada pregunta llevan un campo `s` con la sección del tema. Es lo
   que alimenta los filtros «¿de qué apartados?» de las fichas y del quiz, así que
   los nombres de sección deben coincidir entre `fichas` y `quiz`.
3. Añade la unidad al array correspondiente en `src/contenido/index.ts`.

El progreso de estudio se guarda en `localStorage` con una clave estable derivada
del **texto** de cada pregunta (`hashId`), no de su posición: reordenar o insertar
contenido no borra lo ya estudiado. Cambiar el enunciado de una ficha sí la trata
como nueva.

## Material fuente

El contenido de cada unidad sale de los apuntes de clase. Los originales **no se
guardan en el repositorio** — no son entrada del build y pesaban casi 100 MB:

- **Biología UD1** · `UD 1 Biomolécuas inorgánicas.pptx`, en la carpeta
  `CATA/2 BACH - Biologia/` del equipo, fuera de este repositorio.
- **Geología UD2 y UD3** · los dos PDF estuvieron versionados y se borraron en el
  commit que menciona `material/`. Siguen recuperables del historial:
  `git log --diff-filter=D --name-only -- material/` para encontrarlo, y
  `git checkout <commit>~1 -- material/` para restaurarlos.

La versión anterior de la web (un único HTML con React y Babel por CDN) está en
`legacy/index-v1.html`.

---

Desarrollado por [WofferLab](https://wofferlab.com)
