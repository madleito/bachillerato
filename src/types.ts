import type { ComponentType } from 'react'

/** Colores de acento disponibles en la paleta. */
export type Color =
  | 'terracotta'
  | 'petrol'
  | 'volcanic'
  | 'ochre'
  | 'turquoise'
  | 'verde'

/** Nodo del mapa conceptual. Puede tener hijos, un detalle, o ambos. */
export interface NodoMapa {
  id: string
  label: string
  detail?: string
  children?: NodoMapa[]
}

/** Rama de primer nivel del mapa: siempre lleva color. */
export interface RamaMapa extends NodoMapa {
  color: Color
}

/** Ficha de estudio. `s` es la sección del tema a la que pertenece. */
export interface Ficha {
  p: string
  r: string
  s: string
  /**
   * Imagen que forma parte de la pregunta (ruta dentro de public/img). Solo
   * cuando la imagen es lo que se pregunta y no lleva la respuesta escrita.
   */
  img?: string
  /** Imagen de refuerzo: se muestra al voltear la ficha, junto a la respuesta. */
  imgRespuesta?: string
}

/** Pregunta de quiz. `correct` es el índice de la opción correcta. */
export interface Pregunta {
  q: string
  opts: string[]
  correct: number
  exp: string
  s: string
  /** Imagen opcional sobre la que se pregunta (ruta dentro de public/img). */
  img?: string
}

/**
 * Fragmento de un autor para practicar el comentario de texto.
 * La alumna lee el fragmento, intenta identificar el tema y las ideas, y
 * después despliega el comentario para comprobarlo.
 */
export interface Texto {
  id: string
  /** Obra y localización, p. ej. «República», libro VII, 514a-515a. */
  obra: string
  ref: string
  s: string
  fragmento: string
  /** Tema del texto en una frase. */
  tema: string
  /** Ideas principales, en el orden en que aparecen. */
  ideas: string[]
  /** Cómo encaja el fragmento en el conjunto del pensamiento del autor. */
  relacion: string
  /** Términos filosóficos que conviene definir al comentarlo. */
  terminos: string[]
}

/** Una unidad didáctica con sus cuatro herramientas de estudio. */
export interface Unidad {
  id: string
  unidad: string
  title: string
  shortTitle: string
  description: string
  footer: string
  mapaRoot: string
  mapa: RamaMapa[]
  fichas: Ficha[]
  quiz: Pregunta[]
  Historia: ComponentType
  accent: Color
  /** Fragmentos para comentario de texto. Si existen, aparece la pestaña «Textos». */
  textos?: Texto[]
  /** Aviso sobre el origen de los textos (p. ej. si no vienen en los apuntes). */
  textosAviso?: string
}

/** Una asignatura agrupa las unidades de un curso. */
export interface Asignatura {
  id: string
  nombre: string
  /** Versión corta para la cabecera en el móvil. */
  nombreCorto?: string
  curso: string
  descripcion: string
  icono: string
  accent: Color
  unidades: Unidad[]
}

export type TabId = 'mapa' | 'historia' | 'fichas' | 'quiz' | 'textos'
