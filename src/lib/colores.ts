import type { Color } from '../types'

/**
 * Las clases van escritas enteras a propósito: Tailwind rastrea el código
 * fuente buscando nombres de clase literales, así que construirlas con
 * plantillas (`bg-${color}`) haría que no se generase el CSS.
 */

export interface EstiloColor {
  dot: string
  line: string
  bg: string
  text: string
  badge: string
}

export const COLOR_MAP: Record<Color, EstiloColor> = {
  terracotta: { dot: 'bg-terracotta', line: 'border-terracotta/30', bg: 'bg-terracotta/5', text: 'text-terracotta-dark', badge: 'bg-terracotta/10 text-terracotta-dark' },
  petrol:     { dot: 'bg-petrol',     line: 'border-petrol/30',     bg: 'bg-petrol/5',     text: 'text-petrol-dark',     badge: 'bg-petrol/10 text-petrol-dark' },
  volcanic:   { dot: 'bg-volcanic',   line: 'border-volcanic/30',   bg: 'bg-volcanic/5',   text: 'text-volcanic-dark',   badge: 'bg-volcanic/10 text-volcanic-dark' },
  ochre:      { dot: 'bg-ochre',      line: 'border-ochre/30',      bg: 'bg-ochre/5',      text: 'text-ochre-dark',      badge: 'bg-ochre/10 text-ochre-dark' },
  turquoise:  { dot: 'bg-turquoise',  line: 'border-turquoise/30',  bg: 'bg-turquoise/5',  text: 'text-turquoise-dark',  badge: 'bg-turquoise/10 text-turquoise-dark' },
  verde:      { dot: 'bg-verde',      line: 'border-verde/30',      bg: 'bg-verde/5',      text: 'text-verde-dark',      badge: 'bg-verde/10 text-verde-dark' },
}

export interface EstiloAcento {
  bar: string
  text: string
  soft: string
  border: string
  ring: string
  solid: string
}

export const ACCENT_STYLES: Record<Color, EstiloAcento> = {
  petrol:     { bar: 'bg-petrol',     text: 'text-petrol-dark',     soft: 'bg-petrol/5',     border: 'border-petrol/20',     ring: 'ring-petrol/30',     solid: 'bg-petrol text-white' },
  volcanic:   { bar: 'bg-volcanic',   text: 'text-volcanic-dark',   soft: 'bg-volcanic/5',   border: 'border-volcanic/20',   ring: 'ring-volcanic/30',   solid: 'bg-volcanic text-white' },
  terracotta: { bar: 'bg-terracotta', text: 'text-terracotta-dark', soft: 'bg-terracotta/5', border: 'border-terracotta/20', ring: 'ring-terracotta/30', solid: 'bg-terracotta text-white' },
  turquoise:  { bar: 'bg-turquoise',  text: 'text-turquoise-dark',  soft: 'bg-turquoise/5',  border: 'border-turquoise/20',  ring: 'ring-turquoise/30',  solid: 'bg-turquoise text-white' },
  ochre:      { bar: 'bg-ochre',      text: 'text-ochre-dark',      soft: 'bg-ochre/5',      border: 'border-ochre/20',      ring: 'ring-ochre/30',      solid: 'bg-ochre text-white' },
  verde:      { bar: 'bg-verde',      text: 'text-verde-dark',      soft: 'bg-verde/5',      border: 'border-verde/20',      ring: 'ring-verde/30',      solid: 'bg-verde text-white' },
}

export function acento(color: Color): EstiloAcento {
  return ACCENT_STYLES[color] ?? ACCENT_STYLES.petrol
}
