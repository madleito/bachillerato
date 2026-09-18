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
}

/** Pregunta de quiz. `correct` es el índice de la opción correcta. */
export interface Pregunta {
  q: string
  opts: string[]
  correct: number
  exp: string
  s: string
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
}

/** Una asignatura agrupa las unidades de un curso. */
export interface Asignatura {
  id: string
  nombre: string
  curso: string
  descripcion: string
  icono: string
  accent: Color
  unidades: Unidad[]
}

export type TabId = 'mapa' | 'historia' | 'fichas' | 'quiz'
