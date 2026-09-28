import type { ReactNode } from 'react'

/**
 * Línea del tiempo vertical, para las unidades de Historia.
 *
 * Cada hito lleva su fecha tal como se escribe en el examen («218 a. C.»,
 * «siglo VI»), así que la fecha es texto y el orden es el del array.
 * Los `periodo` actúan como separadores entre etapas.
 */

export interface Hito {
  fecha: string
  texto: ReactNode
  /** Resalta los hitos que hay que saberse sí o sí. */
  clave?: boolean
}

export interface TramoCronologia {
  periodo: string
  hitos: Hito[]
}

export function Cronologia({ titulo, tramos }: { titulo?: string; tramos: TramoCronologia[] }) {
  return (
    <figure className="my-8 bg-white border border-tierra-sand rounded-2xl p-5 md:p-7">
      {titulo && (
        <p className="font-body text-[11px] uppercase tracking-widest text-tierra-slate/70 mb-5">{titulo}</p>
      )}
      <div className="space-y-6">
        {tramos.map(tramo => (
          <section key={tramo.periodo}>
            <p className="font-display text-base font-semibold text-volcanic-dark mb-3">{tramo.periodo}</p>
            <ol className="relative border-l-2 border-tierra-sand ml-2 space-y-4">
              {tramo.hitos.map((hito, i) => (
                <li key={i} className="pl-5 relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-white ${
                      hito.clave ? 'bg-volcanic' : 'bg-ochre'
                    }`}
                  />
                  <p
                    className={`font-display text-sm font-bold leading-tight ${
                      hito.clave ? 'text-volcanic-dark' : 'text-ochre-dark'
                    }`}
                  >
                    {hito.fecha}
                  </p>
                  <p className="font-body text-base text-tierra-charcoal leading-snug mt-0.5">{hito.texto}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      <figcaption className="font-body text-xs text-tierra-slate/70 mt-5 flex items-center gap-2">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-volcanic" aria-hidden="true" /> fecha clave para
        el examen
      </figcaption>
    </figure>
  )
}
