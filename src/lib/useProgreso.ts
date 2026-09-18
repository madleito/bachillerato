import { useSyncExternalStore } from 'react'
import { progresoDe, suscribir, ultimaPosicion } from './progreso'
import type { ProgresoUnidad, UltimaPosicion } from './progreso'

/** Progreso de una unidad, que se refresca solo cuando se guarda algo. */
export function useProgresoUnidad(unidadId: string): ProgresoUnidad {
  return useSyncExternalStore(suscribir, () => progresoDe(unidadId))
}

/** Última unidad y pestaña visitadas, para el botón de «seguir donde lo dejé». */
export function useUltimaPosicion(): UltimaPosicion | undefined {
  return useSyncExternalStore(suscribir, ultimaPosicion)
}
