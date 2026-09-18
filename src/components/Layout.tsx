import type { ReactNode } from 'react'
import type { Asignatura, TabId, Unidad } from '../types'

export interface Tab {
  id: TabId
  label: string
  icon: string
  shortLabel: string
}

export const TABS: Tab[] = [
  { id: 'mapa', label: 'Mapa Conceptual', icon: '🗺️', shortLabel: 'Mapa' },
  { id: 'historia', label: 'La Historia', icon: '📖', shortLabel: 'Historia' },
  { id: 'fichas', label: 'Fichas de Estudio', icon: '🃏', shortLabel: 'Fichas' },
  { id: 'quiz', label: 'Quiz', icon: '🎯', shortLabel: 'Quiz' },
]

export function esTab(valor: string | undefined): valor is TabId {
  return TABS.some(t => t.id === valor)
}

export function Layout({
  asignatura,
  unidad,
  tabActiva,
  onTab,
  onVolver,
  children,
}: {
  asignatura: Asignatura
  unidad: Unidad
  tabActiva: TabId
  onTab: (tab: TabId) => void
  onVolver: () => void
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-tierra-bg font-body">
      <header className="sticky top-0 z-50 bg-tierra-bg/95 backdrop-blur-sm border-b border-tierra-sand">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 pt-3 pb-2">
            <button
              onClick={onVolver}
              className="flex items-center gap-1 text-tierra-slate hover:text-tierra-charcoal font-body text-sm cursor-pointer transition-colors shrink-0"
              aria-label="Volver a las unidades"
            >
              <span className="text-base">←</span>
              <span className="hidden sm:inline">Unidades</span>
            </button>
            <span className="block w-px h-5 bg-tierra-sand shrink-0" />
            <h1 className="font-display text-lg md:text-xl font-bold text-tierra-charcoal tracking-tight shrink-0">
              {asignatura.nombre}
            </h1>
            <span className="font-body text-sm text-tierra-slate hidden sm:inline truncate">
              {unidad.unidad} · {unidad.title}
            </span>
            <span className="font-body text-xs text-tierra-slate sm:hidden truncate">
              {unidad.unidad}
            </span>
          </div>

          <nav className="flex gap-1" role="tablist">
            {TABS.map(tab => {
              const activa = tabActiva === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activa}
                  onClick={() => onTab(tab.id)}
                  className={`
                    flex-1 flex items-center justify-center gap-1.5
                    py-2.5 px-2 text-sm font-medium rounded-t-lg
                    transition-colors duration-200 cursor-pointer
                    ${activa ? 'text-volcanic-dark tab-active' : 'text-tierra-slate hover:text-tierra-charcoal hover:bg-tierra-cream/50'}
                  `}
                >
                  <span className="text-base leading-none" aria-hidden="true">{tab.icon}</span>
                  <span className="hidden sm:inline font-body">{tab.label}</span>
                  <span className="sm:hidden font-body text-xs">{tab.shortLabel}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12" key={`${unidad.id}-${tabActiva}`}>
        {children}
      </main>

      <footer className="border-t border-tierra-sand py-6 mt-12 space-y-1.5">
        <p className="text-center font-body text-xs text-tierra-slate/60">
          {asignatura.curso} · {asignatura.nombre} · {unidad.footer}
        </p>
        <p className="text-center font-body text-xs text-tierra-slate/70">
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
      </footer>
    </div>
  )
}
