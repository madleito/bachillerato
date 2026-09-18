/** Devuelve una copia barajada del array (Fisher-Yates). */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Identificador estable a partir del texto de una pregunta.
 * Se usa como clave de progreso para que reordenar o insertar contenido
 * no borre lo que la alumna ya tenía estudiado.
 */
export function hashId(texto: string): string {
  let h = 5381
  for (let i = 0; i < texto.length; i++) {
    h = ((h << 5) + h + texto.charCodeAt(i)) | 0
  }
  return (h >>> 0).toString(36)
}

/** Lista de secciones únicas, en el orden en que aparecen. */
export function seccionesDe(items: readonly { s: string }[]): string[] {
  const vistas = new Set<string>()
  const orden: string[] = []
  for (const it of items) {
    if (!vistas.has(it.s)) {
      vistas.add(it.s)
      orden.push(it.s)
    }
  }
  return orden
}

/** "hace 3 días", "hoy", "en 2 semanas"… */
export function cuando(ts: number): string {
  const dias = Math.round((ts - Date.now()) / 86_400_000)
  if (dias === 0) return 'hoy'
  if (dias === 1) return 'mañana'
  if (dias === -1) return 'ayer'
  if (dias > 0) return dias < 14 ? `en ${dias} días` : `en ${Math.round(dias / 7)} semanas`
  const d = -dias
  return d < 14 ? `hace ${d} días` : `hace ${Math.round(d / 7)} semanas`
}

export function fechaCorta(ts: number): string {
  return new Date(ts).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}
