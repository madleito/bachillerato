import { useEffect, useMemo, useRef, useState } from 'react'
import type { Color, Pregunta } from '../types'
import { acento } from '../lib/colores'
import { olvidarFallo, registrarFallo, registrarIntentoQuiz } from '../lib/progreso'
import { useProgresoUnidad } from '../lib/useProgreso'
import { fechaCorta, hashId, seccionesDe, shuffle } from '../lib/utils'
import { SelectorSecciones } from './SelectorSecciones'

type Fase = 'inicio' | 'jugando' | 'resultado'
type Modo = 'rapido' | 'examen'

/** Preguntas por intento en modo rápido. */
const PREGUNTAS_RAPIDO = 10
/** Tope de preguntas en modo examen: una sesión que se pueda hacer del tirón. */
const PREGUNTAS_EXAMEN = 30
/** Segundos por pregunta en modo examen. */
const SEGUNDOS_POR_PREGUNTA = 45

interface PreguntaPreparada extends Pregunta {
  opcionesBarajadas: string[]
  correctaBarajada: number
}

function prepararQuiz(pool: readonly Pregunta[]): PreguntaPreparada[] {
  return pool.map(q => {
    const indices = shuffle(q.opts.map((_, i) => i))
    return {
      ...q,
      opcionesBarajadas: indices.map(i => q.opts[i]),
      correctaBarajada: indices.indexOf(q.correct),
    }
  })
}

function reloj(segundos: number): string {
  const m = Math.floor(segundos / 60)
  const s = segundos % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export function Quiz({
  unidadId,
  pool,
  accent,
}: {
  unidadId: string
  pool: Pregunta[]
  accent: Color
}) {
  const progreso = useProgresoUnidad(unidadId)
  const [fase, setFase] = useState<Fase>('inicio')
  const [modo, setModo] = useState<Modo>('rapido')
  const [secciones, setSecciones] = useState<string[]>([])
  const [preguntas, setPreguntas] = useState<PreguntaPreparada[]>([])
  const [indice, setIndice] = useState(0)
  const [elegida, setElegida] = useState<number | null>(null)
  const [aciertos, setAciertos] = useState(0)
  const [respuestas, setRespuestas] = useState<(number | null)[]>([])
  const [restante, setRestante] = useState(0)
  const guardado = useRef(false)

  const a = acento(accent)
  const listaSecciones = useMemo(() => seccionesDe(pool), [pool])
  const conteo = useMemo(() => {
    const c: Record<string, number> = {}
    for (const q of pool) c[q.s] = (c[q.s] ?? 0) + 1
    return c
  }, [pool])

  const filtradas = useMemo(
    () => (secciones.length === 0 ? pool : pool.filter(q => secciones.includes(q.s))),
    [pool, secciones],
  )
  const nFalladas = useMemo(
    () => pool.filter(q => progreso.falladas[hashId(q.q)]).length,
    [pool, progreso],
  )
  const historial = progreso.intentos.slice(-5).reverse()
  const mejor = progreso.intentos.reduce(
    (max, i) => Math.max(max, Math.round((i.aciertos / i.total) * 100)),
    0,
  )

  // Cronómetro del modo examen
  useEffect(() => {
    if (fase !== 'jugando' || modo !== 'examen') return
    if (restante <= 0) return
    const id = setInterval(() => setRestante(r => r - 1), 1000)
    return () => clearInterval(id)
  }, [fase, modo, restante])

  useEffect(() => {
    if (fase === 'jugando' && modo === 'examen' && restante === 0 && preguntas.length > 0) {
      terminar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restante])

  function empezar(m: Modo, soloFalladas = false) {
    const base = soloFalladas
      ? pool.filter(q => progreso.falladas[hashId(q.q)])
      : filtradas
    if (base.length === 0) return
    const barajadas = shuffle(base)
    const elegidas = barajadas.slice(0, m === 'rapido' ? PREGUNTAS_RAPIDO : PREGUNTAS_EXAMEN)
    setModo(m)
    setPreguntas(prepararQuiz(elegidas))
    setIndice(0)
    setElegida(null)
    setRespuestas(Array(elegidas.length).fill(null))
    setAciertos(0)
    setRestante(m === 'examen' ? elegidas.length * SEGUNDOS_POR_PREGUNTA : 0)
    guardado.current = false
    setFase('jugando')
  }

  function terminar() {
    if (!guardado.current) {
      guardado.current = true
      registrarIntentoQuiz(unidadId, {
        fecha: Date.now(),
        aciertos,
        total: preguntas.length,
        modo,
      })
    }
    setFase('resultado')
  }

  function elegir(i: number) {
    if (elegida !== null) return
    const actual = preguntas[indice]
    const correcta = i === actual.correctaBarajada
    setElegida(i)
    setRespuestas(prev => {
      const copia = [...prev]
      copia[indice] = i
      return copia
    })
    if (correcta) {
      setAciertos(s => s + 1)
      olvidarFallo(unidadId, actual.q)
    } else {
      registrarFallo(unidadId, actual.q)
    }
    // En modo examen no se corrige sobre la marcha: se pasa a la siguiente.
    if (modo === 'examen') {
      setTimeout(() => {
        if (indice + 1 < preguntas.length) {
          setIndice(n => n + 1)
          setElegida(null)
        } else {
          terminar()
        }
      }, 180)
    }
  }

  function siguiente() {
    if (indice + 1 < preguntas.length) {
      setIndice(i => i + 1)
      setElegida(null)
    } else {
      terminar()
    }
  }

  // ─── Pantalla de inicio ───
  if (fase === 'inicio') {
    return (
      <div className="page-enter max-w-lg mx-auto">
        <header className="mb-8">
          <p className="font-body text-sm uppercase tracking-widest text-volcanic mb-3">Ponerse a prueba</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tierra-charcoal leading-tight mb-3">
            Quiz
          </h2>
          <p className="font-body text-base text-tierra-slate leading-relaxed">
            {pool.length} preguntas en el banco. Elige de qué apartados quieres examinarte.
          </p>
        </header>

        {progreso.intentos.length > 0 && (
          <div className="bg-white border border-tierra-sand rounded-2xl p-5 md:p-6 mb-6">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-body text-sm text-tierra-slate">Mejor resultado</span>
              <span className={`font-display text-2xl font-bold ${a.text}`}>{mejor}%</span>
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-tierra-slate/70 mb-2">
              Últimos intentos
            </p>
            <ul className="space-y-1.5">
              {historial.map((i, k) => {
                const pct = Math.round((i.aciertos / i.total) * 100)
                return (
                  <li key={k} className="flex items-center gap-3 font-body text-sm">
                    <span className="text-tierra-slate/60 w-14 shrink-0">{fechaCorta(i.fecha)}</span>
                    <span className="flex-1 h-1.5 bg-tierra-sand rounded-full overflow-hidden">
                      <span
                        className={`block h-full rounded-full ${pct >= 60 ? 'bg-turquoise' : 'bg-terracotta'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </span>
                    <span className="text-tierra-charcoal w-20 text-right shrink-0">
                      {i.aciertos}/{i.total}
                      <span className="text-tierra-slate/50"> · {i.modo === 'examen' ? 'examen' : 'rápido'}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

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
            onClick={() => empezar('rapido')}
            disabled={filtradas.length === 0}
            className={`w-full py-4 px-5 rounded-xl font-body font-semibold text-left transition-colors cursor-pointer disabled:opacity-50 ${a.solid} hover:opacity-90`}
          >
            <span className="block text-base">Quiz rápido</span>
            <span className="block text-sm font-normal opacity-80">
              {Math.min(PREGUNTAS_RAPIDO, filtradas.length)} preguntas al azar, con corrección al momento
            </span>
          </button>

          <button
            onClick={() => empezar('examen')}
            disabled={filtradas.length === 0}
            className="w-full py-4 px-5 rounded-xl font-body font-semibold text-left bg-petrol text-white hover:bg-petrol-dark transition-colors cursor-pointer disabled:opacity-50"
          >
            <span className="block text-base">Modo examen ⏱</span>
            <span className="block text-sm font-normal opacity-80">
              {Math.min(filtradas.length, PREGUNTAS_EXAMEN)} preguntas con cronómetro y sin corrección hasta el final
            </span>
          </button>

          <button
            onClick={() => empezar('rapido', true)}
            disabled={nFalladas === 0}
            className="w-full py-4 px-5 rounded-xl font-body font-semibold text-left bg-terracotta/10 text-terracotta-dark hover:bg-terracotta/20 transition-colors cursor-pointer disabled:opacity-40"
          >
            <span className="block text-base">Solo las que he fallado</span>
            <span className="block text-sm font-normal opacity-80">
              {nFalladas === 0 ? 'Todavía no has fallado ninguna' : `${nFalladas} preguntas pendientes de aclarar`}
            </span>
          </button>
        </div>
      </div>
    )
  }

  // ─── Pantalla de resultado ───
  if (fase === 'resultado') {
    const examenTerminado = modo === 'examen'
    const falladas = preguntas
      .map((pregunta, i) => ({ pregunta, elegidaIdx: respuestas[i] ?? null }))
      .filter(({ pregunta, elegidaIdx }) => elegidaIdx !== pregunta.correctaBarajada)
    const total = preguntas.length
    const pct = total === 0 ? 0 : Math.round((aciertos / total) * 100)
    let mensaje: string
    let colorMensaje: string
    let emoji: string
    if (pct === 100) {
      mensaje = '¡Puntuación perfecta! Dominas el tema.'
      colorMensaje = 'text-turquoise-dark'
      emoji = '🏆'
    } else if (pct >= 80) {
      mensaje = '¡Excelente! Estás casi lista para el examen.'
      colorMensaje = 'text-turquoise'
      emoji = '🌟'
    } else if (pct >= 60) {
      mensaje = 'Bien, pero repasa los fallos antes del examen.'
      colorMensaje = 'text-ochre-dark'
      emoji = '💪'
    } else if (pct >= 40) {
      mensaje = 'Necesitas repasar bastante. ¡Usa las fichas!'
      colorMensaje = 'text-volcanic'
      emoji = '📖'
    } else {
      mensaje = 'Toca estudiar a fondo. Lee La Historia y vuelve.'
      colorMensaje = 'text-terracotta'
      emoji = '🔄'
    }

    return (
      <div className="page-enter max-w-md mx-auto text-center">
        <span className="text-5xl block mb-4">{emoji}</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-tierra-charcoal mb-2">
          {aciertos} de {total}
        </h2>
        <p className="font-body text-tierra-slate mb-6">
          {pct}% de aciertos · modo {modo === 'examen' ? 'examen' : 'rápido'}
        </p>

        <div className="w-full h-3 bg-tierra-sand rounded-full overflow-hidden mb-4">
          <div className="h-full bg-turquoise rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <p className={`font-display text-lg font-semibold ${colorMensaje} mb-8`}>{mensaje}</p>

        {examenTerminado && falladas.length > 0 && (
          <div className="text-left bg-terracotta/5 border border-terracotta/20 rounded-2xl p-5 mb-8">
            <p className="font-body text-xs uppercase tracking-widest text-terracotta-dark mb-4">
              Repasa estas {falladas.length}
            </p>
            <ul className="space-y-5">
              {falladas.map(({ pregunta, elegidaIdx }, i) => (
                <li key={i}>
                  <p className="font-body text-sm font-semibold text-tierra-charcoal leading-snug mb-1.5">
                    {pregunta.q}
                  </p>
                  <p className="font-body text-sm text-terracotta-dark leading-snug">
                    Marcaste: {elegidaIdx === null ? 'sin responder' : pregunta.opcionesBarajadas[elegidaIdx]}
                  </p>
                  <p className="font-body text-sm text-turquoise-dark leading-snug">
                    Correcta: {pregunta.opcionesBarajadas[pregunta.correctaBarajada]}
                  </p>
                  <p className="font-body text-sm text-tierra-slate leading-relaxed mt-1">{pregunta.exp}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => empezar(modo)}
            className="px-8 py-3.5 bg-petrol text-white font-body font-semibold rounded-xl hover:bg-petrol-dark transition-colors cursor-pointer"
          >
            Intentar de nuevo
          </button>
          <button
            onClick={() => setFase('inicio')}
            className="px-6 py-3.5 bg-tierra-cream text-tierra-charcoal font-body font-semibold rounded-xl hover:bg-tierra-sand transition-colors cursor-pointer"
          >
            Cambiar de modo
          </button>
        </div>
      </div>
    )
  }

  // ─── Pantalla de pregunta ───
  const actual = preguntas[indice]
  const total = preguntas.length
  const respondida = elegida !== null
  const acertada = elegida === actual.correctaBarajada
  const examen = modo === 'examen'

  return (
    <div className="page-enter max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-tierra-charcoal">
          {examen ? 'Modo examen' : 'Quiz'}
        </h2>
        <span className="font-display text-lg font-semibold text-turquoise-dark">
          {indice + 1}
          <span className="text-tierra-slate/50">/{total}</span>
        </span>
      </div>

      <div className="w-full h-1.5 bg-tierra-sand rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-turquoise rounded-full transition-all duration-300"
          style={{ width: `${(indice / total) * 100}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="font-body text-xs text-tierra-slate/70">{actual.s}</span>
        {examen ? (
          <span
            className={`font-display text-sm font-semibold px-3 py-1 rounded-full ${
              restante <= 30 ? 'bg-terracotta/15 text-terracotta-dark' : 'bg-tierra-cream text-tierra-slate'
            }`}
          >
            ⏱ {reloj(Math.max(0, restante))}
          </span>
        ) : (
          <span className="font-body text-sm text-tierra-slate bg-tierra-cream px-3 py-1 rounded-full">
            Aciertos: <span className="font-semibold text-turquoise-dark">{aciertos}</span>
          </span>
        )}
      </div>

      <div className="mb-6">
        <p className="font-body text-xl md:text-2xl text-tierra-charcoal leading-relaxed">{actual.q}</p>
      </div>

      <div className="space-y-3 mb-6">
        {actual.opcionesBarajadas.map((opt, i) => {
          let estilo = 'bg-white border-tierra-sand hover:border-ochre/50 cursor-pointer'
          if (respondida) {
            if (examen) {
              // En examen no se revela nada: solo se marca lo elegido.
              estilo =
                i === elegida
                  ? 'bg-ochre/10 border-ochre'
                  : 'bg-white border-tierra-sand opacity-50'
            } else if (i === actual.correctaBarajada) {
              estilo = 'bg-turquoise/10 border-turquoise ring-2 ring-turquoise/30'
            } else if (i === elegida && !acertada) {
              estilo = 'bg-terracotta/10 border-terracotta ring-2 ring-terracotta/30'
            } else {
              estilo = 'bg-white border-tierra-sand opacity-50'
            }
          }
          return (
            <button
              key={i}
              onClick={() => elegir(i)}
              disabled={respondida}
              className={`w-full text-left px-5 py-4 border-2 rounded-xl font-body text-base transition-all ${estilo}`}
            >
              <span className="font-semibold text-tierra-slate mr-2">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          )
        })}
      </div>

      {respondida && !examen && (
        <div className={`p-4 rounded-xl mb-6 ${acertada ? 'bg-turquoise/10' : 'bg-terracotta/10'}`}>
          <p
            className={`font-body text-sm font-semibold mb-1 ${acertada ? 'text-turquoise-dark' : 'text-terracotta-dark'}`}
          >
            {acertada ? '¡Correcto!' : 'Incorrecto'}
          </p>
          <p className="font-body text-sm text-tierra-charcoal leading-relaxed">{actual.exp}</p>
        </div>
      )}

      {respondida && !examen && (
        <button
          onClick={siguiente}
          className="w-full py-3.5 bg-petrol text-white font-body font-semibold rounded-xl hover:bg-petrol-dark transition-colors cursor-pointer"
        >
          {indice + 1 < total ? 'Siguiente pregunta' : 'Ver resultado'}
        </button>
      )}

      <button
        onClick={() => setFase('inicio')}
        className="w-full mt-4 font-body text-sm text-tierra-slate/70 hover:text-tierra-charcoal transition-colors cursor-pointer"
      >
        Dejarlo por ahora
      </button>
    </div>
  )
}
