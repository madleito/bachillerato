import { hashId } from './utils'

/**
 * Progreso de estudio, guardado en localStorage.
 *
 * Todo lo que se guarda vive en el navegador de la alumna: no hay servidor ni
 * cuenta. Si el navegador bloquea el almacenamiento (modo privado, ajustes de
 * Safari), la app sigue funcionando: simplemente no recuerda nada entre
 * sesiones, así que cada lectura y cada escritura van protegidas.
 */

const CLAVE = 'bachillerato:progreso:v1'

/** Estado de una ficha dentro del sistema de repetición espaciada. */
export interface ProgresoFicha {
  /** Caja de Leitner: 0 = recién fallada, 5 = dominada. */
  caja: number
  /** Momento (ms) en que toca volver a verla. */
  proxima: number
  aciertos: number
  fallos: number
}

export interface IntentoQuiz {
  fecha: number
  aciertos: number
  total: number
  modo: 'rapido' | 'examen'
}

export interface ProgresoUnidad {
  fichas: Record<string, ProgresoFicha>
  intentos: IntentoQuiz[]
  /** Nº de veces que se ha fallado cada pregunta, por id estable. */
  falladas: Record<string, number>
  ultimaVisita: number
}

export interface UltimaPosicion {
  asignaturaId: string
  unidadId: string
  tab: string
}

interface Datos {
  v: 1
  unidades: Record<string, ProgresoUnidad>
  ultima?: UltimaPosicion
}

const VACIO: Datos = { v: 1, unidades: {} }

function unidadVacia(): ProgresoUnidad {
  return { fichas: {}, intentos: [], falladas: {}, ultimaVisita: 0 }
}

/**
 * Instancia única para las unidades sin progreso todavía. Tiene que ser siempre
 * el mismo objeto: `useSyncExternalStore` compara por identidad y devolver uno
 * nuevo en cada lectura provocaría un bucle de renderizado.
 */
const UNIDAD_VACIA: ProgresoUnidad = Object.freeze(unidadVacia())

let memoria: Datos | null = null

function leer(): Datos {
  if (memoria) return memoria
  try {
    const crudo = localStorage.getItem(CLAVE)
    memoria = crudo ? { ...VACIO, ...(JSON.parse(crudo) as Datos) } : { ...VACIO }
  } catch {
    memoria = { ...VACIO }
  }
  return memoria
}

function escribir(datos: Datos): void {
  memoria = datos
  try {
    localStorage.setItem(CLAVE, JSON.stringify(datos))
  } catch {
    /* Almacenamiento no disponible: se mantiene solo en memoria. */
  }
  for (const oyente of oyentes) oyente()
}

// ─── Suscripción, para que la interfaz se refresque al guardar ───
const oyentes = new Set<() => void>()
export function suscribir(fn: () => void): () => void {
  oyentes.add(fn)
  return () => {
    oyentes.delete(fn)
  }
}

// ─── Lecturas ───

export function progresoDe(unidadId: string): ProgresoUnidad {
  return leer().unidades[unidadId] ?? UNIDAD_VACIA
}

export function ultimaPosicion(): UltimaPosicion | undefined {
  return leer().ultima
}

export function todoElProgreso(): Datos {
  return leer()
}

// ─── Escrituras ───

function actualizarUnidad(
  unidadId: string,
  cambio: (u: ProgresoUnidad) => ProgresoUnidad,
): void {
  const datos = leer()
  const actual = datos.unidades[unidadId] ?? unidadVacia()
  escribir({
    ...datos,
    unidades: { ...datos.unidades, [unidadId]: cambio(actual) },
  })
}

export function guardarPosicion(pos: UltimaPosicion): void {
  const datos = leer()
  const previa = datos.ultima
  if (
    previa &&
    previa.asignaturaId === pos.asignaturaId &&
    previa.unidadId === pos.unidadId &&
    previa.tab === pos.tab
  ) {
    return
  }
  escribir({ ...datos, ultima: pos })
  actualizarUnidad(pos.unidadId, u => ({ ...u, ultimaVisita: Date.now() }))
}

export function registrarIntentoQuiz(unidadId: string, intento: IntentoQuiz): void {
  actualizarUnidad(unidadId, u => ({
    ...u,
    intentos: [...u.intentos, intento].slice(-30),
  }))
}

export function registrarFallo(unidadId: string, pregunta: string): void {
  const id = hashId(pregunta)
  actualizarUnidad(unidadId, u => ({
    ...u,
    falladas: { ...u.falladas, [id]: (u.falladas[id] ?? 0) + 1 },
  }))
}

export function olvidarFallo(unidadId: string, pregunta: string): void {
  const id = hashId(pregunta)
  actualizarUnidad(unidadId, u => {
    if (!u.falladas[id]) return u
    const falladas = { ...u.falladas }
    delete falladas[id]
    return { ...u, falladas }
  })
}

export function guardarFicha(unidadId: string, fichaId: string, estado: ProgresoFicha): void {
  actualizarUnidad(unidadId, u => ({
    ...u,
    fichas: { ...u.fichas, [fichaId]: estado },
  }))
}

/** Borra el progreso de una unidad (o de todo, si no se indica unidad). */
export function reiniciar(unidadId?: string): void {
  const datos = leer()
  if (!unidadId) {
    escribir({ ...VACIO })
    return
  }
  const unidades = { ...datos.unidades }
  delete unidades[unidadId]
  escribir({ ...datos, unidades })
}

// ─── Exportar / importar, para no perderlo al cambiar de móvil ───

export function exportar(): string {
  return JSON.stringify(leer(), null, 2)
}

export function importar(json: string): boolean {
  try {
    const datos = JSON.parse(json) as Datos
    if (typeof datos !== 'object' || datos === null || !('unidades' in datos)) return false
    escribir({ ...VACIO, ...datos })
    return true
  } catch {
    return false
  }
}
