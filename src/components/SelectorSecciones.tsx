import type { Color } from '../types'
import { acento } from '../lib/colores'

/**
 * Chips para elegir de qué apartados del tema quieres estudiar.
 * Sin ninguna seleccionada se entiende «todas», que es el caso normal.
 */
export function SelectorSecciones({
  secciones,
  seleccionadas,
  onChange,
  accent,
  conteo,
}: {
  secciones: readonly string[]
  seleccionadas: readonly string[]
  onChange: (nuevas: string[]) => void
  accent: Color
  /** Nº de elementos por sección, para mostrarlo junto al nombre. */
  conteo?: Record<string, number>
}) {
  const a = acento(accent)
  const todas = seleccionadas.length === 0

  function alternar(seccion: string) {
    onChange(
      seleccionadas.includes(seccion)
        ? seleccionadas.filter(s => s !== seccion)
        : [...seleccionadas, seccion],
    )
  }

  return (
    <div>
      <p className="font-body text-xs uppercase tracking-widest text-tierra-slate/70 mb-3">
        ¿De qué apartados?
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange([])}
          aria-pressed={todas}
          className={`font-body text-sm px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
            todas
              ? `${a.solid} border-transparent`
              : 'bg-white border-tierra-sand text-tierra-slate hover:bg-tierra-cream/60'
          }`}
        >
          Todo el tema
        </button>
        {secciones.map(seccion => {
          const activa = seleccionadas.includes(seccion)
          return (
            <button
              key={seccion}
              onClick={() => alternar(seccion)}
              aria-pressed={activa}
              className={`font-body text-sm px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                activa
                  ? `${a.solid} border-transparent`
                  : 'bg-white border-tierra-sand text-tierra-slate hover:bg-tierra-cream/60'
              }`}
            >
              {seccion}
              {conteo && (
                <span className={activa ? 'opacity-70' : 'text-tierra-slate/50'}> · {conteo[seccion] ?? 0}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
