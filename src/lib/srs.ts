import type { Ficha } from '../types'
import type { ProgresoFicha, ProgresoUnidad } from './progreso'
import { hashId, shuffle } from './utils'

/**
 * Repetición espaciada, con cajas de Leitner.
 *
 * La idea: una ficha que aciertas sube de caja y tarda más en volver a
 * aparecer; una que fallas cae a la caja 0 y vuelve en la misma sesión. Así el
 * tiempo de estudio se concentra en lo que todavía no está aprendido en vez de
 * repartirse por igual entre lo fácil y lo difícil.
 */

/** Días que se espera antes de volver a preguntar, según la caja. */
const INTERVALOS_DIAS = [0, 1, 3, 7, 16, 35]

export const CAJA_MAXIMA = INTERVALOS_DIAS.length - 1
/** A partir de esta caja consideramos la ficha aprendida. */
export const CAJA_DOMINADA = 4

const DIA_MS = 86_400_000

export function idDeFicha(ficha: Ficha): string {
  return hashId(ficha.p)
}

export function estadoDe(
  ficha: Ficha,
  progreso: ProgresoUnidad,
): ProgresoFicha | undefined {
  return progreso.fichas[idDeFicha(ficha)]
}

/** Calcula el nuevo estado de una ficha tras responderla. */
export function evaluar(previo: ProgresoFicha | undefined, acerto: boolean): ProgresoFicha {
  const base: ProgresoFicha = previo ?? { caja: 0, proxima: 0, aciertos: 0, fallos: 0 }
  const caja = acerto ? Math.min(base.caja + 1, CAJA_MAXIMA) : 0
  return {
    caja,
    proxima: Date.now() + INTERVALOS_DIAS[caja] * DIA_MS,
    aciertos: base.aciertos + (acerto ? 1 : 0),
    fallos: base.fallos + (acerto ? 0 : 1),
  }
}

export interface Resumen {
  total: number
  nuevas: number
  /** Vistas, pendientes de repaso hoy. */
  pendientes: number
  /** Vistas, pero aún no dominadas y sin tocar hasta más adelante. */
  enProceso: number
  dominadas: number
  /** Cuántas tocan ahora mismo: pendientes + nuevas. */
  paraHoy: number
  /** Porcentaje dominado, 0-100. */
  porcentaje: number
}

export function resumir(fichas: readonly Ficha[], progreso: ProgresoUnidad): Resumen {
  const ahora = Date.now()
  let nuevas = 0
  let pendientes = 0
  let enProceso = 0
  let dominadas = 0

  for (const ficha of fichas) {
    const estado = estadoDe(ficha, progreso)
    if (!estado) {
      nuevas++
    } else if (estado.caja >= CAJA_DOMINADA && estado.proxima > ahora) {
      dominadas++
    } else if (estado.proxima <= ahora) {
      pendientes++
    } else {
      enProceso++
    }
  }

  const total = fichas.length
  return {
    total,
    nuevas,
    pendientes,
    enProceso,
    dominadas,
    paraHoy: nuevas + pendientes,
    porcentaje: total === 0 ? 0 : Math.round((dominadas / total) * 100),
  }
}

export type ModoFichas = 'repaso' | 'todas' | 'falladas'

export interface OpcionesSesion {
  modo: ModoFichas
  /** Secciones seleccionadas; vacío o `undefined` = todas. */
  secciones?: readonly string[]
  /** Tope de fichas por sesión en modo repaso. */
  limite?: number
}

/**
 * Arma la tanda de fichas de esta sesión.
 * En modo repaso van primero las que tocan por fecha y después las nuevas,
 * porque recuperar lo que estás a punto de olvidar es lo que más consolida.
 */
export function construirSesion(
  fichas: readonly Ficha[],
  progreso: ProgresoUnidad,
  { modo, secciones, limite = 20 }: OpcionesSesion,
): Ficha[] {
  const filtradas =
    secciones && secciones.length > 0
      ? fichas.filter(f => secciones.includes(f.s))
      : [...fichas]

  if (modo === 'todas') return shuffle(filtradas)

  if (modo === 'falladas') {
    return shuffle(
      filtradas.filter(f => {
        const estado = estadoDe(f, progreso)
        return !!estado && estado.fallos > 0 && estado.caja < CAJA_DOMINADA
      }),
    )
  }

  const ahora = Date.now()
  const pendientes: Ficha[] = []
  const nuevas: Ficha[] = []
  for (const ficha of filtradas) {
    const estado = estadoDe(ficha, progreso)
    if (!estado) nuevas.push(ficha)
    else if (estado.proxima <= ahora) pendientes.push(ficha)
  }

  return [...shuffle(pendientes), ...shuffle(nuevas)].slice(0, limite)
}
