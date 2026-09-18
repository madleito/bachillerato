import { useEffect } from 'react'
import { ASIGNATURAS } from './contenido'
import { Fichas } from './components/Fichas'
import { esTab, Layout } from './components/Layout'
import { MapaConceptual } from './components/MapaConceptual'
import { Quiz } from './components/Quiz'
import { SelectorAsignaturas, SelectorUnidades } from './components/Selectores'
import { guardarPosicion } from './lib/progreso'
import { irA, useRuta } from './lib/ruta'

export function App() {
  const ruta = useRuta()

  const asignatura = ASIGNATURAS.find(a => a.id === ruta.asignaturaId)
  const unidad = asignatura?.unidades.find(u => u.id === ruta.unidadId)
  const tab = esTab(ruta.tab) ? ruta.tab : 'historia'

  // Recuerda dónde estaba para el botón de «seguir donde lo dejaste».
  useEffect(() => {
    if (asignatura && unidad) {
      guardarPosicion({ asignaturaId: asignatura.id, unidadId: unidad.id, tab })
    }
  }, [asignatura, unidad, tab])

  // Cada pantalla empieza por arriba, incluso al abrir un enlace directo con el
  // navegador restaurando la posición anterior.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [ruta.asignaturaId, ruta.unidadId, ruta.tab])

  if (!asignatura) {
    return (
      <div className="min-h-screen bg-tierra-bg font-body">
        <SelectorAsignaturas
          asignaturas={ASIGNATURAS}
          onElegir={id => irA({ asignaturaId: id })}
          onSeguir={(asignaturaId, unidadId, tabGuardada) =>
            irA({ asignaturaId, unidadId, tab: tabGuardada })
          }
        />
      </div>
    )
  }

  if (!unidad) {
    return (
      <div className="min-h-screen bg-tierra-bg font-body">
        <SelectorUnidades
          asignatura={asignatura}
          onElegir={unidadId => irA({ asignaturaId: asignatura.id, unidadId, tab: 'historia' })}
          onVolver={() => irA({})}
        />
      </div>
    )
  }

  const { Historia } = unidad

  return (
    <Layout
      asignatura={asignatura}
      unidad={unidad}
      tabActiva={tab}
      onTab={nueva => irA({ asignaturaId: asignatura.id, unidadId: unidad.id, tab: nueva })}
      onVolver={() => irA({ asignaturaId: asignatura.id })}
    >
      {tab === 'mapa' && <MapaConceptual data={unidad.mapa} rootLabel={unidad.mapaRoot} />}
      {tab === 'historia' && <Historia />}
      {tab === 'fichas' && (
        <Fichas unidadId={unidad.id} deck={unidad.fichas} accent={unidad.accent} />
      )}
      {tab === 'quiz' && <Quiz unidadId={unidad.id} pool={unidad.quiz} accent={unidad.accent} />}
    </Layout>
  )
}
