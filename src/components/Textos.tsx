import { useMemo, useState } from 'react'
import type { Color, Texto } from '../types'
import { acento } from '../lib/colores'
import { seccionesDe } from '../lib/utils'
import { SelectorSecciones } from './SelectorSecciones'
import { AI } from './ui'

/**
 * Práctica de comentario de texto.
 *
 * En la EvAU de Historia de la Filosofía se comenta un fragmento: hay que
 * identificar el tema, explicar las ideas y relacionarlas con el resto del
 * pensamiento del autor. Aquí cada fragmento se lee primero «en frío» y el
 * comentario se despliega después, para que el esfuerzo de recordar ocurra
 * antes de ver la respuesta.
 */

function Fragmento({ texto, accent }: { texto: Texto; accent: Color }) {
  const [abierto, setAbierto] = useState(false)
  const a = acento(accent)

  return (
    <article className="bg-white border border-tierra-sand rounded-2xl overflow-hidden">
      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-4">
          <p className={`font-display text-lg font-semibold ${a.text}`}>{texto.obra}</p>
          <p className="font-body text-xs text-tierra-slate/70">{texto.ref}</p>
        </div>
        <blockquote className="font-body text-lg leading-relaxed text-tierra-charcoal italic whitespace-pre-line">
          «{texto.fragmento}»
        </blockquote>
      </div>

      {!abierto ? (
        <div className="border-t border-tierra-sand bg-tierra-cream/40 px-5 md:px-7 py-4">
          <p className="font-body text-sm text-tierra-slate mb-3">
            Antes de mirar: ¿cuál es el tema?, ¿qué ideas defiende?, ¿con qué otras partes de su
            filosofía conecta?
          </p>
          <button
            onClick={() => setAbierto(true)}
            className={`font-body text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition-opacity hover:opacity-90 ${a.solid}`}
          >
            Ver comentario
          </button>
        </div>
      ) : (
        <div className="border-t border-tierra-sand bg-tierra-cream/40 px-5 md:px-7 py-5 space-y-5">
          <section>
            <p className="font-body text-xs uppercase tracking-widest text-volcanic-dark mb-1.5">Tema</p>
            <p className="font-body text-base text-tierra-charcoal leading-relaxed">{texto.tema}</p>
          </section>
          <section>
            <p className="font-body text-xs uppercase tracking-widest text-volcanic-dark mb-1.5">
              Ideas principales
            </p>
            <ol className="font-body text-base text-tierra-charcoal leading-relaxed space-y-2">
              {texto.ideas.map((idea, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`font-display font-bold ${a.text} shrink-0`}>{i + 1}.</span>
                  <span>{idea}</span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <p className="font-body text-xs uppercase tracking-widest text-volcanic-dark mb-1.5">
              Relación con el resto de su filosofía
            </p>
            <p className="font-body text-base text-tierra-charcoal leading-relaxed">{texto.relacion}</p>
          </section>
          <section>
            <p className="font-body text-xs uppercase tracking-widest text-volcanic-dark mb-2">
              Términos que conviene definir
            </p>
            <div className="flex flex-wrap gap-2">
              {texto.terminos.map(t => (
                <span key={t} className={`font-body text-sm px-3 py-1 rounded-full ${a.soft} ${a.text}`}>
                  {t}
                </span>
              ))}
            </div>
          </section>
          <button
            onClick={() => setAbierto(false)}
            className="font-body text-sm text-tierra-slate/70 hover:text-tierra-charcoal cursor-pointer transition-colors"
          >
            Ocultar comentario
          </button>
        </div>
      )}
    </article>
  )
}

export function Textos({
  textos,
  accent,
  aviso,
}: {
  textos: Texto[]
  accent: Color
  aviso?: string
}) {
  const [secciones, setSecciones] = useState<string[]>([])
  const listaSecciones = useMemo(() => seccionesDe(textos), [textos])
  const conteo = useMemo(() => {
    const c: Record<string, number> = {}
    for (const t of textos) c[t.s] = (c[t.s] ?? 0) + 1
    return c
  }, [textos])
  const visibles = secciones.length === 0 ? textos : textos.filter(t => secciones.includes(t.s))

  return (
    <div className="page-enter max-w-2xl mx-auto">
      <header className="mb-8">
        <p className="font-body text-sm uppercase tracking-widest text-volcanic mb-3">Comentario de texto</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-tierra-charcoal leading-tight mb-3">
          Textos
        </h2>
        <p className="font-body text-base text-tierra-slate leading-relaxed">
          Fragmentos de los diálogos para practicar el comentario. Léelos, intenta explicarlos tú y
          después despliega el comentario para comprobarlo.
        </p>
      </header>

      {aviso && (
        <AI>
          <p>{aviso}</p>
        </AI>
      )}

      <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 mb-8">
        <p className="font-body text-xs uppercase tracking-widest text-ochre-dark mb-2">
          Cómo se comenta un texto
        </p>
        <ol className="font-body text-sm text-tierra-charcoal leading-relaxed space-y-1">
          <li><span className="font-semibold">1. Tema:</span> de qué trata, en una frase.</li>
          <li><span className="font-semibold">2. Ideas:</span> qué afirma y en qué orden lo argumenta.</li>
          <li><span className="font-semibold">3. Relación:</span> cómo encaja con el resto del pensamiento del autor.</li>
          <li><span className="font-semibold">4. Términos:</span> define con precisión los conceptos clave.</li>
        </ol>
      </div>

      {listaSecciones.length > 1 && (
        <div className="mb-8">
          <SelectorSecciones
            secciones={listaSecciones}
            seleccionadas={secciones}
            onChange={setSecciones}
            accent={accent}
            conteo={conteo}
          />
        </div>
      )}

      <div className="space-y-6">
        {visibles.map(t => (
          <Fragmento key={t.id} texto={t} accent={accent} />
        ))}
      </div>
    </div>
  )
}
