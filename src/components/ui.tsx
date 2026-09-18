import type { ReactNode } from 'react'

/** Resalta un término clave dentro del texto narrativo. */
export function K({ children }: { children: ReactNode }) {
  return (
    <span className="bg-ochre/15 text-ochre-dark px-1 py-0.5 rounded font-semibold">
      {children}
    </span>
  )
}

/** Separador entre secciones de «La Historia». */
export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-12 md:my-16">
      <span className="block w-12 h-px bg-tierra-sand" />
      <span className="text-ochre text-lg">◆</span>
      <span className="block w-12 h-px bg-tierra-sand" />
    </div>
  )
}

/**
 * Apunte añadido por IA.
 * Cajón visualmente diferenciado del texto principal de los apuntes de
 * Catalina. Se usa cuando se añade un ejemplo, contexto o aclaración que NO
 * está en sus apuntes originales, para que sepa siempre qué entra en el examen
 * y qué es ayuda extra.
 */
export function AI({ children }: { children: ReactNode }) {
  return (
    <aside className="my-6 border-2 border-dashed border-tierra-slate/40 bg-tierra-charcoal/[0.04] rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-tierra-slate/15">
        <span className="text-base" aria-hidden="true">🤖</span>
        <span className="font-body text-[11px] uppercase tracking-widest text-tierra-slate font-bold">
          Apunte Añadido por IA
        </span>
      </div>
      <div className="font-body text-base text-tierra-slate leading-relaxed space-y-3">
        {children}
      </div>
    </aside>
  )
}

/** Marco común para los esquemas SVG dibujados a mano. */
export function Figura({
  titulo,
  pie,
  children,
}: {
  titulo?: string
  pie?: string
  children: ReactNode
}) {
  return (
    <figure className="my-8">
      <div className="bg-white border border-tierra-sand rounded-2xl p-4 md:p-6">
        {titulo && (
          <p className="font-body text-[11px] uppercase tracking-widest text-tierra-slate/70 mb-3 text-center">
            {titulo}
          </p>
        )}
        {children}
      </div>
      {pie && (
        <figcaption className="font-body text-sm text-tierra-slate/80 leading-relaxed mt-3 text-center px-2">
          {pie}
        </figcaption>
      )}
    </figure>
  )
}
