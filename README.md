# Bachillerato · Herramienta de estudio

Web de estudio para Catalina y Tatiana. Cada unidad tiene cuatro herramientas:
mapa conceptual, resumen narrativo, fichas con repetición espaciada y quiz. Las
unidades de Historia de la Filosofía tienen una quinta: textos para practicar el
comentario.

**En línea:** https://madleito.github.io/bachillerato/

## Qué hay dentro

| Asignatura | Curso | Unidades |
|---|---|---|
| Biología | 2º Bachillerato | 1. Biomoléculas inorgánicas · 2. Los glúcidos |
| Historia de España | 2º Bachillerato | Tema 1. De la Prehistoria a la monarquía visigoda |
| Historia de la Filosofía | 2º Bachillerato | Platón |
| Geología | 1º Bachillerato | 1. Estructura de la Tierra · 2. Procesos internos · 3. Procesos externos |

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:5173/bachillerato/
pnpm build      # genera dist/
pnpm typecheck
pnpm iconos     # regenera los iconos de la PWA desde public/logo.svg
pnpm imagenes   # registra las dimensiones de las imágenes de public/img
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
4. Opcional: `textos` (fragmentos para comentario) activa la pestaña «Textos».
5. En Historia, `<Cronologia>` pinta la línea del tiempo del tema dentro de «La Historia».

### Imágenes

Las imágenes de los apuntes van en `public/img/<unidad>/` en WebP, con fondo
blanco y como mucho 1400 px (en `scripts/registrar-imagenes.py` están los
comandos). Después, `pnpm imagenes` registra su tamaño para que la página no
«salte» al cargarlas. En «La Historia» se usan con `<Imagen>` y `<Galeria>`, y
todas se pueden tocar para verlas a pantalla completa.

En fichas y preguntas hay dos campos, y la diferencia importa:

- `img`: la imagen **forma parte de la pregunta**. Solo cuando la imagen es lo
  que se pregunta («identifica este disacárido») y **no lleva la respuesta
  escrita**. Si el original trae el nombre rotulado, se hace una versión sin él
  (`…-sin-nombre.webp`).
- `imgRespuesta`: imagen de refuerzo, que aparece al voltear la ficha.

El progreso de estudio se guarda en `localStorage` con una clave estable derivada
del **texto** de cada pregunta (`hashId`), no de su posición: reordenar o insertar
contenido no borra lo ya estudiado. Cambiar el enunciado de una ficha sí la trata
como nueva.

## Material fuente

El contenido de cada unidad sale de los apuntes de clase. Los originales **no se
guardan en el repositorio** — no son entrada del build y pesaban casi 100 MB:

- **Biología UD1** · `UD 1 Biomolécuas inorgánicas.pptx`, en la carpeta
  `CATA/2 BACH - Biologia/` del equipo, fuera de este repositorio.
- **Biología UD2** · `UD 2 Los glúcidos.pptx`, en la misma carpeta.
- **Historia de España, Tema 1** · `HISTORIA TEMA 1.pdf`, en la misma carpeta.
- **Filosofía, Platón** · `Platón Apuntes 2026-27.pdf`, en la misma carpeta. Los
  fragmentos de la pestaña «Textos» no vienen en los apuntes: son traducciones
  propias de los pasajes clásicos, marcadas como tales en la propia web.
- **Geología UD2 y UD3** · los dos PDF estuvieron versionados y se borraron en el
  commit que menciona `material/`. Siguen recuperables del historial:
  `git log --diff-filter=D --name-only -- material/` para encontrarlo, y
  `git checkout <commit>~1 -- material/` para restaurarlos.

La versión anterior de la web (un único HTML con React y Babel por CDN) está en
`legacy/index-v1.html`.

---

Desarrollado por [WofferLab](https://wofferlab.com)
