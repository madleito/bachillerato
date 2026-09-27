import type { Asignatura } from '../types'
import { unidad as geoU1 } from './geologia/u1-estructura'
import { unidad as geoU2 } from './geologia/u2-procesos-internos'
import { unidad as geoU3 } from './geologia/u3-procesos-externos'
import { unidad as bioU1 } from './biologia/u1-biomoleculas-inorganicas'
import { unidad as bioU2 } from './biologia/u2-glucidos'
import { unidad as filoPlaton } from './filosofia/u1-platon'

export const ASIGNATURAS: Asignatura[] = [
  {
    id: 'biologia',
    nombre: 'Biología',
    curso: '2º Bachillerato',
    descripcion:
      'La química de la vida: de qué átomos estamos hechos, cómo se unen y qué papel juegan el agua y las sales minerales.',
    icono: '🧬',
    accent: 'verde',
    unidades: [bioU1, bioU2],
  },
  {
    id: 'filosofia',
    nombre: 'Historia de la Filosofía',
    nombreCorto: 'Filosofía',
    curso: '2º Bachillerato',
    descripcion:
      'Los grandes autores, de la Grecia clásica en adelante: qué es lo real, qué podemos conocer, cómo vivir y cómo organizar la ciudad.',
    icono: '🏛️',
    accent: 'terracotta',
    unidades: [filoPlaton],
  },
  {
    id: 'geologia',
    nombre: 'Geología',
    curso: '1º Bachillerato',
    descripcion:
      'El planeta por dentro y por fuera: su estructura, la tectónica de placas y los procesos que construyen y desgastan el relieve.',
    icono: '🌍',
    accent: 'petrol',
    unidades: [geoU1, geoU2, geoU3],
  },
]
