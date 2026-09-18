import { useMemo, useState } from 'react'
import type { Color, Ficha } from '../types'
import { acento } from '../lib/colores'
import { guardarFicha } from '../lib/progreso'
import { useProgresoUnidad } from '../lib/useProgreso'
import {
  CAJA_DOMINADA,
  CAJA_MAXIMA,
  construirSesion,
  estadoDe,
  evaluar,
  idDeFicha,
  resumir,
} from '../lib/srs'
import type { ModoFichas } from '../lib/srs'
import { cuando, seccionesDe } from '../lib/utils'
import { SelectorSecciones } from './SelectorSecciones'

type Fase = 'inicio' | 'estudio' | 'resumen'

interface Resultado {
  ficha: Ficha
  acerto: boolean
}

export function Fichas({
  unidadId,
  deck,
  accent,
}: {
  unidadId: string
  deck: Ficha[]
  accent: Color
}) {
  const progreso = useProgresoUnidad(unidadId)
  const [fase, setFase] = useState<Fase>('inicio')
  const [secciones, setSecciones] = useState<string[]>([])
  const [modo, setModo] = useState<ModoFichas>('repaso')
  const [sesion, setSesion] = useState<Ficha[]>([])
  const [indice, setIndice] = useState(0)
  const [volteada, setVolteada] = useState(false)
  const [resultados, setResultados] = useState<Resultado[]>([])
  const [claveAnimacion, setClaveAnimacion] = useState(0)

  const a = acento(accent)
  const listaSecciones = useMemo(() => seccionesDe(deck), [deck])
  const conteo = useMemo(() => {
    const c: Record<string, number> = {}
    for (const f of deck) c[f.s] = (c[f.s] ?? 0) + 1
    return c
  }, [deck])

  const filtradas = useMemo(
    () => (secciones.length === 0 ? deck : deck.filter(f => secciones.includes(f.s))),
    [deck, secciones],
  )
  const resumen = useMemo(() => resumir(filtradas, progreso), [filtradas, progreso])
  const nFalladas = useMemo(
    () =>
      filtradas.filter(f => {
        const e = estadoDe(f, progreso)
        return !!e && e.fallos > 0 && e.caja < CAJA_DOMINADA
      }).length,
    [filtradas, progreso],
  )

  function empezar(m: ModoFichas) {
    const nueva = construirSesion(deck, progreso, { modo: m, secciones })
    if (nueva.length === 0) return
    setModo(m)
    setSesion(nueva)
    setIndice(0)
    setVolteada(false)
    setResultados([])
    setClaveAnimacion(k => k + 1)
    setFase('estudio')
  }

  function responder(acerto: boolean) {
    const ficha = sesion[indice]
    guardarFicha(unidadId, idDeFicha(ficha), evaluar(estadoDe(ficha, progreso), acerto))
    setResultados(prev => [...prev, { ficha, acerto }])
    setVolteada(false)
    if (indice + 1 < sesion.length) {
      setTimeout(() => {
        setIndice(i => i + 1)
        setClaveAnimacion(k => k + 1)
      }, 200)
    } else {
      setTimeout(() => setFase('resumen'), 300)
    }
  }

  // ─── Pantalla de inicio ───
  if (fase === 'inicio') {
    return (
      <div className="page-enter max-w-lg mx-auto">
        <header className="mb-8">
          <p className="font-body text-sm uppercase tracking-widest text-volcanic mb-3">Memorizar</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tierra-charcoal leading-tight mb-3">
            Fichas de Estudio
          </h2>
          <p className="font-body text-base text-tierra-slate leading-relaxed">
            Las que falles volverán pronto; las que domines tardarán cada vez más en aparecer.
            Tu progreso se guarda en este dispositivo.
          </p>
        </header>

        {/* Progreso de la unidad */}
        <div className="bg-white border border-tierra-sand rounded-2xl p-5 md:p-6 mb-6">
          <div className="flex items-baseline justify-between mb-3">
            <span className="font-body text-sm text-tierra-slate">Dominadas</span>
            <span className={`font-display text-2xl font-bold ${a.text}`}>
              {resumen.dominadas}
              <span className="text-tierra-slate/50 text-lg font-normal">/{resumen.total}</span>
            </span>
          </div>
          <div className="w-full h-2.5 bg-tierra-sand rounded-full overflow-hidden mb-4">
            <div
              className={`h-full ${a.bar} rounded-full transition-all duration-500`}
              style={{ width: `${resumen.porcentaje}%` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <span className="block font-display text-xl font-bold text-volcanic-dark">{resumen.pendientes}</span>
              <span className="font-body text-xs text-tierra-slate">a repasar</span>
            </div>
            <div>
              <span className="block font-display text-xl font-bold text-tierra-slate">{resumen.nuevas}</span>
              <span className="font-body text-xs text-tierra-slate">sin ver</span>
            </div>
            <div>
              <span className="block font-display text-xl font-bold text-turquoise-dark">{resumen.enProceso}</span>
              <span className="font-body text-xs text-tierra-slate">en proceso</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <SelectorSecciones
            secciones={listaSecciones}
            seleccionadas={secciones}
            onChange={setSecciones}
            accent={accent}
            conteo={conteo}
          />
        </div>

        <div className="space-y-3">
          <button
            onClick={() => empezar('repaso')}
            disabled={resumen.paraHoy === 0}
            className={`w-full py-4 px-5 rounded-xl font-body font-semibold text-left transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${a.solid} hover:opacity-90`}
          >
            <span className="block text-base">Repaso inteligente</span>
            <span className="block text-sm font-normal opacity-80">
              {resumen.paraHoy === 0
                ? 'Nada pendiente por ahora — vuelve mañana'
                : `${Math.min(resumen.paraHoy, 20)} fichas: las que tocan hoy y las que no has visto`}
            </span>
          </button>

          <button
            onClick={() => empezar('falladas')}
            disabled={nFalladas === 0}
            className="w-full py-4 px-5 rounded-xl font-body font-semibold text-left bg-terracotta/10 text-terracotta-dark hover:bg-terracotta/20 transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="block text-base">Solo las que he fallado</span>
            <span className="block text-sm font-normal opacity-80">
              {nFalladas === 0 ? 'Todavía no has fallado ninguna' : `${nFalladas} fichas atascadas`}
            </span>
          </button>

          <button
            onClick={() => empezar('todas')}
            disabled={filtradas.length === 0}
            className="w-full py-4 px-5 rounded-xl font-body font-semibold text-left bg-tierra-cream text-tierra-charcoal hover:bg-tierra-sand transition-colors cursor-pointer disabled:opacity-40"
          >
            <span className="block text-base">Pasarlas todas</span>
            <span className="block text-sm font-normal text-tierra-slate">
              Las {filtradas.length} fichas seguidas, sin filtro
            </span>
          </button>
        </div>
      </div>
    )
  }

  // ─── Pantalla de resumen ───
  if (fase === 'resumen') {
    const acertadas = resultados.filter(r => r.acerto).length
    const falladas = resultados.filter(r => !r.acerto)
    const total = resultados.length
    const pct = total === 0 ? 0 : Math.round((acertadas / total) * 100)

    let mensaje: string
    let colorMensaje: string
    if (pct === 100) {
      mensaje = '¡Perfecto! Lo tienes dominado.'
      colorMensaje = 'text-turquoise-dark'
    } else if (pct >= 75) {
      mensaje = '¡Muy bien! Solo unos pocos fallos.'
      colorMensaje = 'text-turquoise'
    } else if (pct >= 50) {
      mensaje = 'Vas por buen camino. Esas falladas vuelven pronto.'
      colorMensaje = 'text-ochre-dark'
    } else {
      mensaje = 'Toca repasar un poco más. ¡Tú puedes!'
      colorMensaje = 'text-terracotta'
    }

    return (
      <div className="page-enter max-w-md mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-tierra-charcoal mb-2">Resultado</h2>
        <p className="font-body text-tierra-slate mb-8">{total} fichas completadas</p>

        <div className="flex justify-center gap-8 mb-6">
          <div>
            <span className="block font-display text-4xl font-bold text-turquoise">{acertadas}</span>
            <span className="font-body text-sm text-tierra-slate">Sabía</span>
          </div>
          <div>
            <span className="block font-display text-4xl font-bold text-terracotta">{falladas.length}</span>
            <span className="font-body text-sm text-tierra-slate">No sabía</span>
          </div>
        </div>

        <div className="w-full h-3 bg-tierra-sand rounded-full overflow-hidden mb-4">
          <div className="h-full bg-turquoise rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <p className={`font-display text-lg font-semibold ${colorMensaje} mb-8`}>{mensaje}</p>

        {falladas.length > 0 && (
          <div className="text-left bg-terracotta/5 border border-terracotta/20 rounded-2xl p-5 mb-8">
            <p className="font-body text-xs uppercase tracking-widest text-terracotta-dark mb-3">
              Vuelven en la próxima sesión
            </p>
            <ul className="space-y-2">
              {falladas.map((r, i) => (
                <li key={i} className="font-body text-sm text-tierra-charcoal leading-snug flex gap-2">
                  <span className="text-terracotta shrink-0">▸</span>
                  <span>{r.ficha.p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {falladas.length > 0 && (
            <button
              onClick={() => {
                setSesion(falladas.map(r => r.ficha))
                setIndice(0)
                setVolteada(false)
                setResultados([])
                setClaveAnimacion(k => k + 1)
                setFase('estudio')
              }}
              className="px-6 py-3 bg-terracotta text-white font-body font-semibold rounded-xl hover:bg-terracotta-dark transition-colors cursor-pointer"
            >
              Repasar las {falladas.length} falladas
            </button>
          )}
          <button
            onClick={() => setFase('inicio')}
            className="px-6 py-3 bg-tierra-cream text-tierra-charcoal font-body font-semibold rounded-xl hover:bg-tierra-sand transition-colors cursor-pointer"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  // ─── Pantalla de estudio ───
  const actual = sesion[indice]
  const estado = estadoDe(actual, progreso)

  return (
    <div className="page-enter max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-tierra-charcoal">
            {modo === 'falladas' ? 'Repaso de falladas' : modo === 'todas' ? 'Todas las fichas' : 'Repaso inteligente'}
          </h2>
          <p className="font-body text-sm text-tierra-slate mt-1">Intenta responder antes de voltear</p>
        </div>
        <span className="font-display text-lg font-semibold text-ochre-dark shrink-0">
          {indice + 1}
          <span className="text-tierra-slate/50">/{sesion.length}</span>
        </span>
      </div>

      <div className="w-full h-1.5 bg-tierra-sand rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-ochre rounded-full transition-all duration-300"
          style={{ width: `${(indice / sesion.length) * 100}%` }}
        />
      </div>

      {/* Estado de esta ficha en la repetición espaciada */}
      <div className="flex items-center justify-between mb-5 min-h-6">
        <span className="font-body text-xs text-tierra-slate/70">{actual.s}</span>
        <span className="font-body text-xs text-tierra-slate/70">
          {estado ? (
            <>
              <span aria-hidden="true">{'●'.repeat(estado.caja)}{'○'.repeat(CAJA_MAXIMA - estado.caja)}</span>{' '}
              · vista {estado.aciertos + estado.fallos} {estado.aciertos + estado.fallos === 1 ? 'vez' : 'veces'}
            </>
          ) : (
            'ficha nueva'
          )}
        </span>
      </div>

      <div className="flip-perspective" key={claveAnimacion}>
        <button
          type="button"
          aria-label={volteada ? 'Ver la pregunta' : 'Ver la respuesta'}
          className={`flip-card card-slide-in w-full h-72 md:h-80 cursor-pointer text-left ${volteada ? 'flipped' : ''}`}
          onClick={() => setVolteada(v => !v)}
        >
          <div className="flip-face w-full h-full bg-white rounded-2xl border border-tierra-sand p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-xs">
            <span className="text-xs uppercase tracking-widest text-ochre font-body mb-4">Pregunta</span>
            <p className="font-body text-lg md:text-xl text-tierra-charcoal leading-relaxed">{actual.p}</p>
            <span className="mt-auto text-xs text-tierra-slate/40 font-body">Toca para voltear</span>
          </div>

          <div className="flip-face flip-back w-full h-full bg-petrol rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-xs overflow-y-auto">
            <span className="text-xs uppercase tracking-widest text-turquoise-light font-body mb-4">Respuesta</span>
            <p className="font-body text-lg md:text-xl text-white/95 leading-relaxed">{actual.r}</p>
          </div>
        </button>
      </div>

      <div
        className={`flex gap-3 mt-6 transition-opacity duration-300 ${volteada ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}
      >
        <button
          onClick={() => responder(false)}
          className="flex-1 py-3.5 bg-terracotta/10 text-terracotta-dark font-body font-semibold rounded-xl hover:bg-terracotta/20 transition-colors cursor-pointer"
        >
          No lo sabía ✗
        </button>
        <button
          onClick={() => responder(true)}
          className="flex-1 py-3.5 bg-turquoise/10 text-turquoise-dark font-body font-semibold rounded-xl hover:bg-turquoise/20 transition-colors cursor-pointer"
        >
          Lo sabía ✓
        </button>
      </div>

      <button
        onClick={() => setFase('inicio')}
        className="w-full mt-4 font-body text-sm text-tierra-slate/70 hover:text-tierra-charcoal transition-colors cursor-pointer"
      >
        Dejarlo por ahora
      </button>

      <p className="font-body text-xs text-tierra-slate/50 text-center mt-6">
        Volverá a aparecer {estado ? cuando(estado.proxima) : 'según cómo respondas'}
      </p>
    </div>
  )
}
