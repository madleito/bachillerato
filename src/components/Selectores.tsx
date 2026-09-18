import { useState } from 'react'
import type { Asignatura, Unidad } from '../types'
import { acento } from '../lib/colores'
import { progresoDe } from '../lib/progreso'
import { useProgresoUnidad, useUltimaPosicion } from '../lib/useProgreso'
import { resumir } from '../lib/srs'
import { TABS } from './Layout'
import { Progreso } from './Progreso'

function Creditos() {
  return (
    <p className="font-body text-xs text-tierra-slate/70">
      Desarrollado por{' '}
      <a
        href="https://wofferlab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-petrol hover:text-volcanic transition-colors underline-offset-2 hover:underline"
      >
        WofferLab
      </a>{' '}
      para Catalina Lázaro Joswig
    </p>
  )
}

/** Barra fina con el porcentaje de fichas dominadas de una unidad. */
function BarraUnidad({ unidad }: { unidad: Unidad }) {
  const progreso = useProgresoUnidad(unidad.id)
  const { porcentaje, dominadas, total } = resumir(unidad.fichas, progreso)
  const a = acento(unidad.accent)

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-body text-xs text-tierra-slate/70">
          {dominadas === 0 ? 'Sin empezar' : `${dominadas} de ${total} fichas dominadas`}
        </span>
        <span className={`font-body text-xs font-semibold ${a.text}`}>{porcentaje}%</span>
      </div>
      <div className="w-full h-1.5 bg-tierra-sand rounded-full overflow-hidden">
        <div className={`h-full ${a.bar} rounded-full transition-all duration-500`} style={{ width: `${porcentaje}%` }} />
      </div>
    </div>
  )
}

// ─── Selector de asignatura ───

export function SelectorAsignaturas({
  asignaturas,
  onElegir,
  onSeguir,
}: {
  asignaturas: Asignatura[]
  onElegir: (id: string) => void
  onSeguir: (asignaturaId: string, unidadId: string, tab: string) => void
}) {
  const [verProgreso, setVerProgreso] = useState(false)
  const ultima = useUltimaPosicion()

  const asignaturaUltima = ultima && asignaturas.find(a => a.id === ultima.asignaturaId)
  const unidadUltima = asignaturaUltima?.unidades.find(u => u.id === ultima?.unidadId)

  return (
    <div className="page-enter max-w-3xl mx-auto px-4 py-12 md:py-20">
      <header className="mb-10 text-center">
        <p className="font-body text-sm uppercase tracking-widest text-volcanic mb-3">
          Bachillerato · Herramienta de estudio
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          ¿Qué estudiamos hoy?
        </h1>
        <p className="font-body text-lg text-tierra-slate leading-relaxed max-w-xl mx-auto">
          Cada unidad tiene su mapa conceptual, su resumen narrativo, sus fichas y su quiz.
        </p>
      </header>

      {unidadUltima && asignaturaUltima && ultima && (
        <button
          onClick={() => onSeguir(asignaturaUltima.id, unidadUltima.id, ultima.tab)}
          className="w-full mb-8 text-left bg-tierra-charcoal text-white rounded-2xl px-5 py-4 md:px-6 md:py-5 hover:bg-tierra-slate transition-colors cursor-pointer flex items-center gap-4"
        >
          <span className="text-2xl shrink-0" aria-hidden="true">↩︎</span>
          <span className="flex-1 min-w-0">
            <span className="block font-body text-xs uppercase tracking-widest text-white/60 mb-1">
              Seguir donde lo dejaste
            </span>
            <span className="block font-display text-lg font-semibold truncate">
              {unidadUltima.title}
            </span>
            <span className="block font-body text-sm text-white/70">
              {asignaturaUltima.nombre} · {TABS.find(t => t.id === ultima.tab)?.label ?? 'La Historia'}
            </span>
          </span>
          <span className="text-xl shrink-0" aria-hidden="true">→</span>
        </button>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {asignaturas.map(asignatura => {
          const a = acento(asignatura.accent)
          const totalFichas = asignatura.unidades.reduce((n, u) => n + u.fichas.length, 0)
          const dominadas = asignatura.unidades.reduce(
            (n, u) => n + resumir(u.fichas, progresoDe(u.id)).dominadas,
            0,
          )
          const pct = totalFichas === 0 ? 0 : Math.round((dominadas / totalFichas) * 100)

          return (
            <button
              key={asignatura.id}
              onClick={() => onElegir(asignatura.id)}
              className={`group text-left bg-white border ${a.border} rounded-2xl p-6 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer relative overflow-hidden`}
            >
              <span className={`absolute top-0 left-0 right-0 h-1 ${a.bar}`} />
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className={`font-body text-xs uppercase tracking-widest ${a.text}`}>
                  {asignatura.curso}
                </p>
                <span className="text-2xl leading-none" aria-hidden="true">
                  {asignatura.icono}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-tierra-charcoal leading-tight mb-3">
                {asignatura.nombre}
              </h2>
              <p className="font-body text-base text-tierra-slate leading-relaxed mb-4">
                {asignatura.descripcion}
              </p>
              <p className="font-body text-sm text-tierra-slate/70 mb-4">
                {asignatura.unidades.length}{' '}
                {asignatura.unidades.length === 1 ? 'unidad' : 'unidades'} · {totalFichas} fichas
              </p>
              <div className="w-full h-1.5 bg-tierra-sand rounded-full overflow-hidden mb-4">
                <div className={`h-full ${a.bar} rounded-full`} style={{ width: `${pct}%` }} />
              </div>
              <span
                className={`inline-flex items-center gap-1.5 font-body text-sm font-semibold ${a.text} group-hover:gap-2.5 transition-all`}
              >
                Entrar
                <span>→</span>
              </span>
            </button>
          )
        })}
      </div>

      <footer className="mt-16 text-center space-y-3">
        {verProgreso ? (
          <Progreso onCerrar={() => setVerProgreso(false)} />
        ) : (
          <button
            onClick={() => setVerProgreso(true)}
            className="font-body text-xs text-tierra-slate/60 hover:text-tierra-charcoal underline underline-offset-2 cursor-pointer transition-colors"
          >
            Copia de seguridad del progreso
          </button>
        )}
        <Creditos />
      </footer>
    </div>
  )
}

// ─── Selector de unidad dentro de una asignatura ───

export function SelectorUnidades({
  asignatura,
  onElegir,
  onVolver,
}: {
  asignatura: Asignatura
  onElegir: (unidadId: string) => void
  onVolver: () => void
}) {
  return (
    <div className="page-enter max-w-3xl mx-auto px-4 py-10 md:py-16">
      <button
        onClick={onVolver}
        className="flex items-center gap-1 text-tierra-slate hover:text-tierra-charcoal font-body text-sm cursor-pointer transition-colors mb-8"
      >
        <span className="text-base">←</span>
        <span>Asignaturas</span>
      </button>

      <header className="mb-10">
        <p className={`font-body text-sm uppercase tracking-widest ${acento(asignatura.accent).text} mb-3`}>
          {asignatura.curso}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          {asignatura.nombre}
        </h1>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          {asignatura.descripcion}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {asignatura.unidades.map(unidad => {
          const a = acento(unidad.accent)
          return (
            <button
              key={unidad.id}
              onClick={() => onElegir(unidad.id)}
              className={`group text-left bg-white border ${a.border} rounded-2xl p-6 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer relative overflow-hidden`}
            >
              <span className={`absolute top-0 left-0 right-0 h-1 ${a.bar}`} />
              <p className={`font-body text-xs uppercase tracking-widest ${a.text} mb-2`}>
                {unidad.unidad}
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-tierra-charcoal leading-tight mb-3">
                {unidad.title}
              </h2>
              <p className="font-body text-base text-tierra-slate leading-relaxed mb-5">
                {unidad.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {TABS.map(t => (
                  <span
                    key={t.id}
                    className={`${a.soft} ${a.text} text-xs font-body px-2.5 py-1 rounded-full flex items-center gap-1`}
                  >
                    <span aria-hidden="true">{t.icon}</span>
                    <span>{t.shortLabel}</span>
                  </span>
                ))}
              </div>
              <BarraUnidad unidad={unidad} />
            </button>
          )
        })}
      </div>

      <footer className="mt-16 text-center space-y-2">
        <p className="font-body text-xs text-tierra-slate/60">
          Se irán añadiendo más unidades con el tiempo.
        </p>
        <Creditos />
      </footer>
    </div>
  )
}
