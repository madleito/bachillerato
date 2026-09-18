import { useSyncExternalStore } from 'react'

/**
 * Enrutado por hash (`#/biologia/bio-u1/quiz`).
 *
 * Se usa hash y no rutas normales porque GitHub Pages sirve ficheros estáticos:
 * con rutas normales, recargar en `/biologia/bio-u1` daría un 404 al no existir
 * ese fichero. Además así se pueden compartir enlaces a una pestaña concreta.
 */

export interface Ruta {
  asignaturaId?: string
  unidadId?: string
  tab?: string
}

function leerHash(): string {
  return window.location.hash
}

function suscribir(fn: () => void): () => void {
  window.addEventListener('hashchange', fn)
  return () => window.removeEventListener('hashchange', fn)
}

export function useRuta(): Ruta {
  const hash = useSyncExternalStore(suscribir, leerHash, () => '')
  const partes = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  return {
    asignaturaId: partes[0],
    unidadId: partes[1],
    tab: partes[2],
  }
}

export function irA(ruta: Ruta): void {
  const partes = [ruta.asignaturaId, ruta.unidadId, ruta.tab].filter(Boolean)
  const destino = partes.length > 0 ? `#/${partes.join('/')}` : '#/'
  if (window.location.hash !== destino) {
    window.location.hash = destino
  }
  window.scrollTo({ top: 0, behavior: 'instant' })
}
