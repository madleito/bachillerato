import type { Ficha, Pregunta, RamaMapa, Unidad } from '../../types'
import { AI, Divider, Figura, K } from '../../components/ui'

// ═══════════════════════════════════════════════════════════════
//  Esquemas dibujados con la paleta del proyecto.
//  No se usan las imágenes de la presentación: son capturas de manual,
//  con otra estética y de terceros.
// ═══════════════════════════════════════════════════════════════

/** La molécula de agua: geometría, ángulo y cargas parciales. */
function SvgMoleculaAgua() {
  return (
    <Figura
      titulo="La molécula de agua"
      pie="Un oxígeno y dos hidrógenos unidos covalentemente, formando 104,5°. Los dos pares de electrones sin compartir del oxígeno empujan a los hidrógenos hacia abajo y crean la zona negativa."
    >
      <svg
        viewBox="0 0 420 300"
        className="w-full h-auto max-w-md mx-auto"
        role="img"
        aria-label="Molécula de agua con ángulo de 104,5 grados y cargas parciales"
      >
        {/* enlaces covalentes, por debajo de los átomos */}
        <line x1="210" y1="100" x2="115" y2="174" stroke="#4A5568" strokeWidth="8" strokeLinecap="round" />
        <line x1="210" y1="100" x2="305" y2="174" stroke="#4A5568" strokeWidth="8" strokeLinecap="round" />

        {/* arco del ángulo */}
        <path d="M 166 134 A 56 56 0 0 0 254 134" fill="none" stroke="#C1666B" strokeWidth="2" strokeDasharray="5 4" />
        <text x="210" y="186" textAnchor="middle" fontSize="17" fill="#A34E52" fontFamily="Fraunces, serif" fontWeight="700">104,5°</text>

        {/* pares de electrones sin compartir */}
        <circle cx="191" cy="54" r="5.5" fill="#2A6F97" />
        <circle cx="203" cy="46" r="5.5" fill="#2A6F97" />
        <circle cx="217" cy="46" r="5.5" fill="#2A6F97" />
        <circle cx="229" cy="54" r="5.5" fill="#2A6F97" />

        {/* átomos */}
        <circle cx="210" cy="100" r="38" fill="#1B4965" />
        <text x="210" y="110" textAnchor="middle" fontSize="28" fill="#FAF6F0" fontFamily="Fraunces, serif" fontWeight="700">O</text>
        <circle cx="115" cy="174" r="26" fill="#D4A373" />
        <text x="115" y="183" textAnchor="middle" fontSize="21" fill="#2C3639" fontFamily="Fraunces, serif" fontWeight="700">H</text>
        <circle cx="305" cy="174" r="26" fill="#D4A373" />
        <text x="305" y="183" textAnchor="middle" fontSize="21" fill="#2C3639" fontFamily="Fraunces, serif" fontWeight="700">H</text>

        {/* cargas parciales */}
        <text x="210" y="24" textAnchor="middle" fontSize="21" fill="#1B4965" fontFamily="Fraunces, serif" fontWeight="700">δ−</text>
        <text x="60" y="208" textAnchor="middle" fontSize="21" fill="#B8854F" fontFamily="Fraunces, serif" fontWeight="700">δ+</text>
        <text x="360" y="208" textAnchor="middle" fontSize="21" fill="#B8854F" fontFamily="Fraunces, serif" fontWeight="700">δ+</text>

        {/* dipolo */}
        <line x1="210" y1="240" x2="210" y2="276" stroke="#2A9D8F" strokeWidth="2.5" />
        <polygon points="210,232 203,246 217,246" fill="#2A9D8F" />
        <text x="226" y="268" fontSize="14" fill="#1F7A6F" fontFamily="Source Serif 4, serif" fontStyle="italic">dipolo</text>
      </svg>
    </Figura>
  )
}

/** Puentes de hidrógeno entre moléculas de agua. */
function SvgPuentesHidrogeno() {
  // Cada molécula se dibuja con la posición exacta de sus dos hidrógenos, para
  // que los puentes salgan del H de una molécula al O de otra, que es como son
  // en realidad: no van de oxígeno a oxígeno.
  const molecula = (
    ox: number, oy: number,
    h1x: number, h1y: number,
    h2x: number, h2y: number,
    destacada = false,
  ) => (
    <g>
      <line x1={ox} y1={oy} x2={h1x} y2={h1y} stroke="#4A5568" strokeWidth="4.5" strokeLinecap="round" />
      <line x1={ox} y1={oy} x2={h2x} y2={h2y} stroke="#4A5568" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx={ox} cy={oy} r={destacada ? 20 : 17} fill="#1B4965" />
      <text x={ox} y={oy + (destacada ? 6 : 5)} textAnchor="middle" fontSize={destacada ? 16 : 13} fill="#FAF6F0" fontFamily="Fraunces, serif" fontWeight="700">O</text>
      <circle cx={h1x} cy={h1y} r="11" fill="#D4A373" />
      <text x={h1x} y={h1y + 4} textAnchor="middle" fontSize="11" fill="#2C3639" fontFamily="Fraunces, serif" fontWeight="700">H</text>
      <circle cx={h2x} cy={h2y} r="11" fill="#D4A373" />
      <text x={h2x} y={h2y + 4} textAnchor="middle" fontSize="11" fill="#2C3639" fontFamily="Fraunces, serif" fontWeight="700">H</text>
    </g>
  )

  return (
    <Figura
      titulo="Puentes de hidrógeno"
      pie="El hidrógeno de una molécula, con carga parcial positiva, es atraído por el oxígeno de otra, con carga parcial negativa. Son enlaces débiles, que se rompen y se rehacen sin parar: de ahí salen casi todas las propiedades del agua."
    >
      <svg
        viewBox="0 0 420 312"
        className="w-full h-auto max-w-md mx-auto"
        role="img"
        aria-label="Una molécula de agua central unida por cuatro puentes de hidrógeno a otras cuatro moléculas"
      >
        {/* puentes: siempre de un H a un O */}
        <line x1="158" y1="96" x2="210" y2="140" stroke="#2A9D8F" strokeWidth="3" strokeDasharray="6 5" />
        <line x1="262" y1="96" x2="210" y2="140" stroke="#2A9D8F" strokeWidth="3" strokeDasharray="6 5" />
        <line x1="162" y1="177" x2="110" y2="218" stroke="#2A9D8F" strokeWidth="3" strokeDasharray="6 5" />
        <line x1="258" y1="177" x2="310" y2="218" stroke="#2A9D8F" strokeWidth="3" strokeDasharray="6 5" />

        {/* moléculas que ceden su H al oxígeno central */}
        {molecula(110, 62, 158, 96, 62, 34)}
        {molecula(310, 62, 262, 96, 358, 34)}
        {/* molécula central */}
        {molecula(210, 140, 162, 177, 258, 177, true)}
        {/* moléculas que reciben el H de la central */}
        {molecula(110, 218, 62, 190, 96, 266)}
        {molecula(310, 218, 358, 190, 324, 266)}

        <text x="210" y="302" textAnchor="middle" fontSize="13" fill="#1F7A6F" fontFamily="Source Serif 4, serif" fontStyle="italic">
          cada molécula puede unirse hasta a otras cuatro
        </text>
      </svg>
    </Figura>
  )
}

/** Ósmosis: la misma célula en los tres medios. */
function SvgOsmosis() {
  const flecha = (tipo: 'sale' | 'entra' | 'iso') => {
    if (tipo === 'sale') {
      return (
        <g>
          <line x1="60" y1="88" x2="60" y2="54" stroke="#C1666B" strokeWidth="2.5" />
          <polygon points="60,44 53,58 67,58" fill="#C1666B" />
        </g>
      )
    }
    if (tipo === 'entra') {
      return (
        <g>
          <line x1="60" y1="52" x2="60" y2="84" stroke="#1F7A6F" strokeWidth="2.5" />
          <polygon points="60,94 53,80 67,80" fill="#1F7A6F" />
        </g>
      )
    }
    return (
      <g>
        <line x1="40" y1="58" x2="40" y2="84" stroke="#4A5568" strokeWidth="2" />
        <polygon points="40,92 34,80 46,80" fill="#4A5568" />
        <line x1="80" y1="92" x2="80" y2="66" stroke="#4A5568" strokeWidth="2" />
        <polygon points="80,58 74,70 86,70" fill="#4A5568" />
      </g>
    )
  }

  const panel = (
    x: number,
    titulo: string,
    color: string,
    fuera: [number, number][],
    dentro: [number, number][],
    celula: React.ReactNode,
    etiqueta: string,
    tipo: 'sale' | 'entra' | 'iso',
  ) => (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y="34" width="120" height="112" rx="10" fill="#F0E9DF" stroke="#E6DDD1" strokeWidth="2" />
      {fuera.map((p, i) => (
        <circle key={`f${i}`} cx={p[0]} cy={p[1]} r="3.2" fill={color} />
      ))}
      {celula}
      {dentro.map((p, i) => (
        <circle key={`d${i}`} cx={p[0]} cy={p[1]} r="3.2" fill={color} />
      ))}
      {flecha(tipo)}
      <text x="60" y="22" textAnchor="middle" fontSize="13" fill="#2C3639" fontFamily="Fraunces, serif" fontWeight="700">{titulo}</text>
      <text x="60" y="166" textAnchor="middle" fontSize="12" fill="#4A5568" fontFamily="Source Serif 4, serif">{etiqueta}</text>
    </g>
  )

  return (
    <Figura
      titulo="Ósmosis: la célula en cada medio"
      pie="El agua siempre va de donde hay menos soluto a donde hay más. En medio hipertónico la célula se arruga (crenación o plasmólisis); en hipotónico se hincha y puede reventar (hemólisis o turgencia); en isotónico entra y sale lo mismo."
    >
      <svg
        viewBox="0 0 420 180"
        className="w-full h-auto"
        role="img"
        aria-label="Una célula en medio hipertónico, hipotónico e isotónico"
      >
        {panel(
          5, 'HIPERTÓNICO', '#C1666B',
          [[14, 48], [30, 64], [18, 90], [36, 112], [16, 128], [100, 50], [108, 76], [92, 102], [106, 122], [86, 134], [52, 44], [70, 136], [46, 130], [78, 44]],
          [[54, 100], [66, 108], [60, 92]],
          <circle cx="60" cy="102" r="19" fill="#FAF6F0" stroke="#A34E52" strokeWidth="2.5" strokeDasharray="5 3" />,
          'sale agua · se arruga', 'sale',
        )}
        {panel(
          150, 'HIPOTÓNICO', '#2A9D8F',
          [[16, 52], [104, 130]],
          [[44, 104], [60, 96], [74, 108], [52, 120], [68, 122], [60, 82]],
          <circle cx="60" cy="102" r="34" fill="#FAF6F0" stroke="#1F7A6F" strokeWidth="2.5" />,
          'entra agua · se hincha', 'entra',
        )}
        {panel(
          295, 'ISOTÓNICO', '#4A5568',
          [[16, 52], [34, 74], [20, 112], [100, 58], [92, 106], [106, 128], [52, 44], [74, 134]],
          [[48, 102], [62, 94], [70, 110], [56, 116]],
          <circle cx="60" cy="102" r="26" fill="#FAF6F0" stroke="#4A5568" strokeWidth="2.5" />,
          'equilibrio · igual', 'iso',
        )}
      </svg>
    </Figura>
  )
}

/** La escala de pH con referencias biológicas. */
function SvgEscalaPh() {
  const equis = (ph: number) => 34 + (ph / 14) * 352
  const marca = (ph: number, etiqueta: string, arriba: boolean) => (
    <g key={etiqueta}>
      <line x1={equis(ph)} y1={arriba ? 54 : 92} x2={equis(ph)} y2={arriba ? 68 : 80} stroke="#2C3639" strokeWidth="1.5" />
      <text
        x={equis(ph)}
        y={arriba ? 46 : 110}
        textAnchor="middle"
        fontSize="11"
        fill="#2C3639"
        fontFamily="Source Serif 4, serif"
      >
        {etiqueta}
      </text>
    </g>
  )

  return (
    <Figura
      titulo="La escala de pH"
      pie="pH = −log[H⁺]. Por debajo de 7, ácido; por encima, básico. La sangre se mantiene en 7,4 gracias al tampón bicarbonato: una desviación pequeña ya altera las proteínas."
    >
      <svg viewBox="0 0 420 148" className="w-full h-auto" role="img" aria-label="Escala de pH de 0 a 14 con referencias biológicas">
        <defs>
          <linearGradient id="gradiente-ph" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C1666B" />
            <stop offset="50%" stopColor="#D4A373" />
            <stop offset="100%" stopColor="#1B4965" />
          </linearGradient>
        </defs>
        <rect x="34" y="68" width="352" height="24" rx="12" fill="url(#gradiente-ph)" />
        {[0, 2, 4, 6, 7, 8, 10, 12, 14].map(n => (
          <g key={n}>
            <line x1={equis(n)} y1="92" x2={equis(n)} y2="100" stroke="#4A5568" strokeWidth={n === 7 ? 2 : 1} />
            <text
              x={equis(n)}
              y="128"
              textAnchor="middle"
              fontSize="12"
              fill="#4A5568"
              fontFamily="Fraunces, serif"
              fontWeight={n === 7 ? 700 : 400}
            >
              {n}
            </text>
          </g>
        ))}
        {marca(2, 'jugo gástrico', true)}
        {marca(7.4, 'sangre 7,4', true)}
        {marca(7, 'neutro', false)}
        <text x="34" y="30" fontSize="13" fill="#A34E52" fontFamily="Fraunces, serif" fontWeight="700">ÁCIDO</text>
        <text x="386" y="30" textAnchor="end" fontSize="13" fill="#143B52" fontFamily="Fraunces, serif" fontWeight="700">BÁSICO</text>
      </svg>
    </Figura>
  )
}

/** Cómo se colocan las moléculas anfipáticas en el agua. */
function SvgEstructurasOrientadas() {
  /**
   * Un fosfolípido: cabeza polar (círculo) y dos colas apolares (líneas).
   * Con giro 0 la cabeza queda ARRIBA y las colas caen hacia abajo; con giro
   * 180, al revés. La cabeza siempre tiene que mirar al agua.
   */
  const lipido = (x: number, y: number, giro: number, clave: string) => (
    <g key={clave} transform={`translate(${x} ${y}) rotate(${giro})`}>
      <line x1="-2.6" y1="0" x2="-2.6" y2="15" stroke="#B8854F" strokeWidth="2" strokeLinecap="round" />
      <line x1="2.6" y1="0" x2="2.6" y2="15" stroke="#B8854F" strokeWidth="2" strokeLinecap="round" />
      <circle cx="0" cy="-2" r="5" fill="#2A9D8F" />
    </g>
  )

  /** Anillo de fosfolípidos. `cabezaFuera` decide hacia dónde miran las cabezas. */
  const anillo = (cx: number, cy: number, r: number, n: number, cabezaFuera: boolean, clave: string) =>
    Array.from({ length: n }, (_, i) => {
      const grados = (i / n) * 360
      const rad = (grados * Math.PI) / 180
      return lipido(
        cx + r * Math.sin(rad),
        cy - r * Math.cos(rad),
        cabezaFuera ? grados : grados + 180,
        `${clave}-${i}`,
      )
    })

  const columnas = [34, 56, 78, 100, 122, 144, 166]
  const titulo = (x: number, y: number, texto: string) => (
    <text x={x} y={y} textAnchor="middle" fontSize="13" fill="#2C3639" fontFamily="Fraunces, serif" fontWeight="700">
      {texto}
    </text>
  )
  const pie = (x: number, y: number, texto: string) => (
    <text x={x} y={y} textAnchor="middle" fontSize="11" fill="#4A5568" fontFamily="Source Serif 4, serif">
      {texto}
    </text>
  )

  return (
    <Figura
      titulo="Estructuras orientadas"
      pie="Las moléculas anfipáticas, como los fosfolípidos, esconden del agua sus colas apolares y sacan al agua las cabezas polares. De ahí salen micelas, bicapas y liposomas: el origen de las membranas celulares."
    >
      <svg viewBox="0 0 420 380" className="w-full h-auto" role="img" aria-label="Monocapa, micela, bicapa y liposoma formados por fosfolípidos">
        {/* MONOCAPA · cabezas dentro del agua, colas al aire */}
        {titulo(100, 26, 'MONOCAPA')}
        <rect x="20" y="60" width="160" height="72" fill="#2A9D8F" opacity="0.08" />
        <line x1="20" y1="60" x2="180" y2="60" stroke="#2A9D8F" strokeWidth="1" strokeDasharray="3 3" />
        {columnas.map(x => lipido(x, 60, 180, `mono-${x}`))}
        {pie(100, 152, 'superficie del agua')}

        {/* MICELA · cabezas fuera, colas escondidas dentro */}
        {titulo(315, 26, 'MICELA')}
        <circle cx="315" cy="98" r="24" fill="#D4A373" opacity="0.15" />
        {anillo(315, 98, 30, 16, true, 'micela')}
        {pie(315, 152, 'colas hacia dentro')}

        {/* BICAPA · cabezas hacia fuera, colas enfrentadas en el centro */}
        {titulo(100, 222, 'BICAPA')}
        {columnas.map(x => lipido(x, 254, 0, `bi-sup-${x}`))}
        {columnas.map(x => lipido(x, 292, 180, `bi-inf-${x}`))}
        {pie(100, 326, 'membrana celular')}

        {/* LIPOSOMA · dos capas, con agua dentro y fuera */}
        {titulo(315, 222, 'LIPOSOMA')}
        <circle cx="315" cy="296" r="15" fill="#2A9D8F" opacity="0.14" />
        {anillo(315, 296, 22, 12, false, 'lipo-int')}
        {anillo(315, 296, 46, 20, true, 'lipo-ext')}
        {pie(315, 300, 'agua')}
      </svg>
    </Figura>
  )
}


// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'bioelementos', label: 'Bioelementos', color: 'verde',
    children: [
      { id: 'b0', label: '¿Qué son?', detail: 'Los elementos químicos presentes en las moléculas de los seres vivos, las biomoléculas. De los 100 elementos que conforman la materia del universo, 70 son bioelementos.' },
      { id: 'b1', label: 'No coinciden con la corteza terrestre', detail: 'Los bioelementos mayoritarios NO coinciden, salvo el oxígeno, con los elementos químicos más abundantes de la corteza terrestre.' },
      { id: 'b2', label: 'Propiedades', children: [
        { id: 'b2a', label: 'Capas electrónicas externas incompletas', detail: 'Los seis bioelementos mayoritarios las tienen incompletas, lo que facilita la formación de enlaces covalentes.' },
        { id: 'b2b', label: 'Número atómico bajo', detail: 'Los electrones compartidos quedan próximos al núcleo, así que las moléculas formadas son estables.' },
        { id: 'b2c', label: 'O y N son electronegativos', detail: 'Por eso muchas biomoléculas son polares y, en consecuencia, solubles en agua.' },
        { id: 'b2d', label: 'Fácil incorporación a los seres vivos', detail: 'Se encuentran en moléculas accesibles como el CO₂ y el H₂O.' },
      ]},
      { id: 'b3', label: 'El carbono ★', children: [
        { id: 'b3a', label: 'Por qué es el elemento clave', detail: 'Es muy abundante en la Tierra y accesible para los seres vivos, es un elemento estable, posee valencia 4 y tiene gran facilidad para formar cadenas.' },
        { id: 'b3b', label: 'Cadenas estables', detail: 'Origina cadenas de morfología y tamaño variables que adquieren estructuras espaciales complejas. Estas moléculas carbonadas son características de los organismos vivos.' },
        { id: 'b3c', label: '¿Por qué el C y no el Si?', detail: 'Ambos tienen 4 electrones de valencia, pero en el carbono se distribuyen de forma tetragonal y sus enlaces son más estables. Compara el CO₂, que es un gas, con el SiO₂, que es un sólido.' },
      ]},
      { id: 'b4', label: 'Clasificación según su proporción', children: [
        { id: 'b4a', label: 'Primarios o mayoritarios', detail: 'C, H, O, N, P y S. Son el 95% de la materia viva. Forman enlaces covalentes, se unen fácilmente con H y O, y forman moléculas que pueden polimerizar.' },
        { id: 'b4b', label: 'Secundarios', detail: 'Na, K, Ca, Mg y Cl. Entre todos ellos, el 4,5% de la materia viva.' },
        { id: 'b4c', label: 'Oligoelementos', detail: 'Fe, Mn, I, F, Co, Si, Cr, Zn, Li, Mo… En proporciones inferiores al 0,1%, pero imprescindibles para la vida. No son los mismos en todos los seres vivos: solo 14 se han encontrado en todos.' },
      ]},
    ],
  },
  {
    id: 'enlaces', label: 'Biomoléculas y sus enlaces', color: 'petrol',
    children: [
      { id: 'e0', label: 'Principios inmediatos', detail: 'Los bioelementos constituyen unas moléculas llamadas principios inmediatos o biomoléculas.' },
      { id: 'e1', label: 'Fuerzas INTRAmoleculares', children: [
        { id: 'e1a', label: 'Enlace covalente ★', detail: 'El más fuerte. Se produce cuando dos átomos con electrones de valencia desapareados los comparten y quedan unidos. Permite construir moléculas estables en el medio acuoso celular.' },
        { id: 'e1b', label: 'Tipos de covalente', detail: 'Sencillo si cada átomo comparte un electrón (metano), doble si comparte dos (formaldehído) y triple si comparte tres (acetileno).' },
        { id: 'e1c', label: 'Qué mantiene unido', detail: 'Las cadenas carbonadas, que son los constituyentes básicos de la materia viva, y los grupos funcionales (amino, alcohol, ácido…) unidos a esas cadenas.' },
        { id: 'e1d', label: 'De dónde viene su diversidad', detail: 'Las moléculas con este enlace pueden tener zonas hidrófobas e hidrófilas (fosfolípidos), ser solubles en agua (monosacáridos) o ionizarse en medio acuoso (aminoácidos).' },
        { id: 'e1e', label: 'Enlace iónico', detail: 'Se produce entre elementos con cargas eléctricas opuestas y forma redes cristalinas de agregados de aniones y cationes. Da lugar a biomoléculas inorgánicas.' },
        { id: 'e1f', label: 'Dónde aparece el iónico', detail: 'En proteínas, estabilizando su forma espacial (si se pierde, se pierden sus propiedades biológicas); en uniones específicas de cationes a enzimas, como la hemoglobina; y en estructuras cristalinas solubles e insolubles, como caparazones y esqueletos. También en el NaCl disuelto, con sus iones disociados.' },
      ]},
      { id: 'e2', label: 'Fuerzas INTERmoleculares', children: [
        { id: 'e2a', label: 'Interacciones electrostáticas', detail: 'Atracciones eléctricas entre radicales de carga diferente.' },
        { id: 'e2b', label: 'Puentes de hidrógeno ★', detail: 'Un átomo de H unido covalentemente a un átomo muy electronegativo interacciona con un par de electrones de otro átomo electronegativo. Es más débil que las fuerzas intramoleculares, lo que posibilita su fácil rotura y formación.' },
        { id: 'e2c', label: 'Dónde aparecen los puentes de H', detail: 'Estabilizan macromoléculas como el ADN, consolidando la doble hélice, y son fundamentales en reacciones reversibles y en las uniones transitorias del metabolismo celular.' },
        { id: 'e2d', label: 'Fuerzas de Van der Waals', detail: 'Atracciones moleculares entre grupos NO polares, causadas por dipolos instantáneos originados por la variación de la nube de electrones.' },
        { id: 'e2e', label: 'Para qué sirven', detail: 'Son uniones muy débiles, temporales e inespecíficas, pero resultan fundamentales para mantener la conformación de ciertas macromoléculas y en las uniones antígeno-anticuerpo. También explican cómo se adhieren las patas del gecko.' },
      ]},
      { id: 'e3', label: 'Clasificación de las biomoléculas', children: [
        { id: 'e3a', label: 'Orgánicas', detail: 'Están formadas por cadenas de carbono: glúcidos, lípidos, proteínas y ácidos nucleicos.' },
        { id: 'e3b', label: 'Inorgánicas', detail: 'NO están formadas por cadenas de carbono: agua, sales minerales y gases. Aparecen también en la materia inerte y son indispensables para las funciones vitales.' },
      ]},
    ],
  },
  {
    id: 'agua', label: 'El agua', color: 'turquoise',
    children: [
      { id: 'a0', label: 'La molécula más abundante', detail: 'Entre el 50% y el 95% del peso de un ser vivo, en torno al 70-90% de su masa.' },
      { id: 'a1', label: 'De qué depende su cantidad', children: [
        { id: 'a1a', label: 'Especie', detail: 'Los organismos acuáticos tienen un porcentaje muy elevado (la medusa, un 95%); las especies de zonas desérticas lo tienen muy bajo.' },
        { id: 'a1b', label: 'Edad del individuo', detail: 'Las estructuras biológicas de los organismos jóvenes presentan mayor proporción de agua que las de los individuos con mayor edad.' },
        { id: 'a1c', label: 'Tipo de tejido', detail: 'Como las reacciones biológicas se llevan a cabo en medio acuoso, los tejidos con gran actividad bioquímica contienen más agua que los más pasivos.' },
      ]},
      { id: 'a2', label: 'Dónde está y de dónde viene', children: [
        { id: 'a2a', label: 'Localización', detail: 'Agua intracelular, agua circulante y agua intersticial.' },
        { id: 'a2b', label: 'Origen', detail: 'Agua exógena, la que se incorpora del exterior, y agua endógena o metabólica, la que se produce en las reacciones de condensación.' },
      ]},
      { id: 'a3', label: 'Estructura química', children: [
        { id: 'a3a', label: 'Geometría', detail: 'Un átomo de O y dos de H unidos covalentemente, formando un ángulo de 104,5°. La molécula tiene geometría triangular.' },
        { id: 'a3b', label: 'Electrones sin compartir', detail: 'El oxígeno posee cuatro electrones más sin compartir. Eso crea una carga negativa débil en esa zona y determina la geometría triangular.' },
        { id: 'a3c', label: 'Carácter polar', detail: 'Es eléctricamente neutra, sin carga neta, pero tiene cargas parciales opuestas: negativa donde están los electrones no compartidos y positiva donde están los hidrógenos. Es un dipolo.' },
        { id: 'a3d', label: 'Cohesión y adhesión', detail: 'Los puentes de hidrógeno entre moléculas de agua la hacen altamente cohesiva; los que forma con otras moléculas polares (alcoholes, aminas) la hacen altamente adhesiva.' },
      ]},
      { id: 'a4', label: 'Las ocho propiedades', children: [
        { id: 'a4a', label: 'A · Poder disolvente', detail: 'Su polaridad le permite interponerse entre los iones de las redes cristalinas y disolverlas. Su constante dieléctrica es muy elevada: 80, frente a 24 del etanol. También disuelve moléculas no iónicas con grupos polares, formando puentes de hidrógeno con ellas.' },
        { id: 'a4b', label: 'B · Estado líquido', detail: 'La elevada fuerza de cohesión la mantiene líquida a temperaturas no extremas, algo que no ocurre con moléculas químicamente relacionadas como el NH₃ o el H₂S, gaseosas a temperatura ambiente. Permite el transporte interno y la lubricación.' },
        { id: 'a4c', label: 'C · Elevada tensión superficial', detail: 'Las moléculas de la superficie solo reciben fuerzas de cohesión desde el interior, así que se genera una fuerza neta hacia dentro y la superficie se comporta como una membrana elástica tensa. Causa las deformaciones celulares y los movimientos citoplasmáticos, y permite que los insectos ligeros caminen sobre el agua.' },
        { id: 'a4d', label: 'D · Elevado calor específico', detail: 'Parte del calor aplicado se emplea en romper puentes de hidrógeno y no en elevar la temperatura, que sube y baja más lentamente que en otros líquidos. Amortigua las variaciones térmicas del medio y del propio organismo.' },
        { id: 'a4e', label: 'D · Elevado calor de vaporización', detail: 'Pasar a estado gaseoso exige romper los puentes de hidrógeno, y esa energía se toma del entorno, que se enfría. Es la base del sudor y de que una hoja se mantenga fresca con luz intensa.' },
        { id: 'a4f', label: 'E · Menor densidad en estado sólido', detail: 'El hielo es un 10% menos denso que el agua líquida y flota. A 0 °C se forma una red espacial estable que ocupa más volumen. El hielo superficial aísla térmicamente y permite la vida acuática bajo él durante el invierno.' },
        { id: 'a4g', label: 'F · Capilaridad', detail: 'La cohesión entre sus moléculas combinada con la adhesión a otras superficies permite que el agua ascienda por conductos estrechos. Es fundamental para el ascenso de la savia bruta por el xilema.' },
        { id: 'a4h', label: 'G · Líquido casi incompresible', detail: 'Su volumen no disminuye apreciablemente aunque se apliquen presiones muy altas. Determina las deformaciones citoplasmáticas y permite que actúe como esqueleto hidrostático.' },
        { id: 'a4i', label: 'H · Ionización', detail: 'Un hidrógeno de una molécula se une covalentemente al oxígeno de otra: se obtienen H₃O⁺ (H⁺, para simplificar) y OH⁻, con carga opuesta y en igual concentración. Participa en la hidrólisis y la condensación, y en la fotosíntesis aporta los H⁺ y los electrones.' },
      ]},
      { id: 'a5', label: 'Funciones biológicas', detail: 'Principal disolvente biológico · función metabólica · función estructural · función mecánica amortiguadora · función de transporte · función termorreguladora · posibilita la vida acuática en climas fríos.' },
    ],
  },
  {
    id: 'dispersiones', label: 'El agua con otras sustancias', color: 'ochre',
    children: [
      { id: 'p0', label: 'Cuatro tipos de relación', detail: 'Según la naturaleza de la sustancia (polar o apolar, soluble o insoluble) y el tamaño de las partículas dispersas: disoluciones, dispersiones coloidales, emulsiones y estructuras orientadas.' },
      { id: 'p1', label: 'Disoluciones', children: [
        { id: 'p1a', label: 'Con qué las forma', detail: 'Con compuestos iónicos y sustancias polares de bajo peso molecular: sales minerales, monosacáridos, disacáridos y aminoácidos.' },
        { id: 'p1b', label: 'Solvatación', detail: 'El agua se interpone entre los iones y los mantiene separados gracias a su elevada constante dieléctrica, pese a la atracción que existe entre ellos.' },
      ]},
      { id: 'p2', label: 'Dispersiones coloidales', children: [
        { id: 'p2a', label: 'Con qué las forma', detail: 'Con macromoléculas de alto peso molecular: polisacáridos, proteínas y ácidos nucleicos. Es lo que ocurre en el citoplasma celular.' },
        { id: 'p2b', label: 'Dos fases', detail: 'Fase dispersa (el soluto) y fase dispersante (el medio).' },
        { id: 'p2c', label: 'Estados sol y gel', detail: 'Se diferencian en la cantidad de agua presente y, por tanto, en la viscosidad. Sol: líquido, la fase dispersante supera a la dispersa (la pintura). Gel: gelatinoso o semisólido, el disolvente queda envuelto por el soluto (la gelatina).' },
        { id: 'p2d', label: 'Para qué sirve pasar de sol a gel', detail: 'La polimerización o despolimerización de proteínas citoplasmáticas causa la transformación, como en la formación de pseudópodos. También mantiene la humedad de estructuras como el mucus respiratorio, o el deslizamiento del caracol.' },
        { id: 'p2e', label: 'Propiedades de los coloides', detail: 'Efecto Tyndall, movimiento browniano, sedimentación, elevada adsorción, elevada viscosidad y diálisis.' },
      ]},
      { id: 'p3', label: 'Emulsiones', children: [
        { id: 'p3a', label: 'Con qué las forma', detail: 'Con sustancias totalmente apolares.' },
        { id: 'p3b', label: 'Transitorias', detail: 'Formadas por agua y una sustancia apolar.' },
        { id: 'p3c', label: 'Permanentes', detail: 'Formadas por agua, una sustancia apolar y una sustancia anfipática, que actúa como emulgente.' },
      ]},
      { id: 'p4', label: 'Estructuras orientadas', detail: 'Se forman con moléculas anfipáticas, como los fosfolípidos, que se orientan en monocapas, bicapas, micelas y liposomas. Es el origen de las membranas celulares.' },
    ],
  },
  {
    id: 'sales', label: 'Las sales minerales', color: 'terracotta',
    children: [
      { id: 's0', label: 'Qué son', detail: 'Biomoléculas inorgánicas, solubles o insolubles en agua, que se encuentran precipitadas en forma sólida o disueltas en forma de iones.' },
      { id: 's1', label: 'Precipitadas (insolubles)', children: [
        { id: 's1a', label: 'Función estructural', detail: 'Constituyen estructuras sólidas de sostén y protección: huesos, conchas, caparazones y espículas. Las más abundantes son silicatos, carbonatos y fosfatos.' },
        { id: 's1b', label: 'Carbonato cálcico', detail: 'Caparazones de protozoos marinos como los foraminíferos; dureza de dientes y huesos de vertebrados; esqueleto externo de corales, conchas de gasterópodos y bivalvos y exoesqueleto de artrópodos; rigidez de algunas esponjas y espinas de erizos de mar.' },
        { id: 's1c', label: 'Silicatos', detail: 'Espículas de algunas esponjas; caparazones de radiolarios y diatomeas; endurecen estructuras vegetales de gramíneas o del género Equisetum.' },
        { id: 's1d', label: 'Fosfato cálcico', detail: 'Forma parte de la matriz mineral que compone los huesos de los vertebrados.' },
      ]},
      { id: 's2', label: 'Disueltas (solubles)', children: [
        { id: 's2a', label: 'Aniones', detail: 'Cl⁻, CO₃²⁻, HCO₃⁻, PO₄³⁻, SO₄²⁻ y nitrato.' },
        { id: 's2b', label: 'Cationes', detail: 'Na⁺, K⁺, Ca²⁺, Mg²⁺, Fe²⁺ y Fe³⁺.' },
        { id: 's2c', label: 'Dónde están', detail: 'Forman parte de los medios internos extracelulares e intracelulares, siempre disociadas en iones.' },
      ]},
      { id: 's3', label: 'A · Funciones fisiológicas o bioquímicas', children: [
        { id: 's3a', label: 'Na⁺', detail: 'Mantenimiento del equilibrio iónico y acuoso en el medio extracelular, y transmisión de la corriente eléctrica. Propio del líquido intersticial.' },
        { id: 's3b', label: 'K⁺', detail: 'Contracción muscular, regulación de la actividad cardiaca y transmisión de la corriente nerviosa. Propio del líquido intracelular.' },
        { id: 's3c', label: 'Ca²⁺', detail: 'Coagulación de la sangre, mineralización de estructuras esqueléticas, contracción muscular, regulación de la actividad cardiaca, transmisión sináptica y activador o cofactor de algunas enzimas.' },
        { id: 's3d', label: 'Mg²⁺', detail: 'Regulador de la contracción muscular y de la transmisión nerviosa, constituyente de los ribosomas funcionales, y activador o cofactor de enzimas. Asociado a la clorofila, absorbe energía luminosa.' },
        { id: 's3e', label: 'Otros iones', detail: 'F (forma parte de los huesos y previene la caries) · I (hormonas tiroideas) · Fe (grupo hemo y mioglobina, transporta O₂) · Co (vitamina B₁₂) · S (aminoácidos Met y Cys) · PO₄ (ácidos nucleicos y ATP) · Zn (proteínas que se unen al ADN en la transcripción) · Mn (fotólisis del agua en la fotosíntesis) · Cr (potencia la actividad de la insulina).' },
        { id: 's3f', label: 'Equilibrio constante', detail: 'Las concentraciones iónicas y la proporción entre cationes deben mantenerse en equilibrio; cualquier variación, por defecto o por exceso, puede provocar alteraciones graves o incluso letales.' },
      ]},
      { id: 's4', label: 'B · Mantenimiento de las concentraciones osmóticas', children: [
        { id: 's4a', label: 'Membranas semipermeables', detail: 'Dejan pasar el agua, pero no los solutos.' },
        { id: 's4b', label: 'Ósmosis', detail: 'El agua atraviesa la membrana siempre desde el medio más diluido (hipotónico) al más concentrado (hipertónico), igualando las concentraciones. No requiere energía: es un mecanismo de difusión simple.' },
        { id: 's4c', label: 'Tonicidad', detail: 'La medida de la concentración de una disolución: hipertónica si está más concentrada, hipotónica si está más diluida e isotónica si tiene la misma concentración.' },
        { id: 's4d', label: 'Medio hipertónico', detail: 'Sale agua y disminuye el volumen celular: crenación en células animales y plasmólisis en células vegetales.' },
        { id: 's4e', label: 'Medio hipotónico', detail: 'Entra agua y aumenta el volumen celular: hemólisis en células animales y turgencia en células vegetales.' },
        { id: 's4f', label: 'Medio isotónico', detail: 'Equilibrio: entra y sale la misma cantidad de agua.' },
        { id: 's4g', label: 'Difusión y diálisis', detail: 'Difusión: paso libre a través de la membrana de moléculas de pequeño tamaño, como O₂ y CO₂, desde mayor a menor concentración. Diálisis: separación de moléculas de una dispersión coloidal según su tamaño; se aplica en la filtración de sangre en la insuficiencia renal grave.' },
        { id: 's4h', label: 'Osmorregulación', detail: 'Vegetales: absorben por las raíces en medios hipotónicos; en hipertónicos eliminan agua por los estomas y mueren; las halófitas absorben gran cantidad de sales para poder absorber agua. Animales: en aguas continentales producen mucha orina muy diluida; los peces marinos, poca y concentrada, y eliminan sales por las branquias; aves y reptiles marinos tienen glándulas que eliminan sales; los terrestres disminuyen la evaporación y la pérdida de agua en la orina.' },
      ]},
      { id: 's5', label: 'C · Mantenimiento del pH', children: [
        { id: 's5a', label: 'Qué es el pH', detail: 'El logaritmo del inverso de la concentración de protones: pH = −log[H⁺]. Oscila entre 0 y 14. pH = 7 es neutro, menor que 7 ácido y mayor que 7 básico.' },
        { id: 's5b', label: 'Por qué importa', detail: 'Los líquidos biológicos intracelulares y extracelulares tienen un grado de acidez determinado cuya variación altera la estructura y la función de las proteínas, y en las reacciones bioquímicas se liberan con frecuencia pequeñas cantidades de ácidos.' },
        { id: 's5c', label: 'Sistemas tampón', detail: 'Tampón, buffer o amortiguador: actúa como aceptor o donante de H⁺ para compensar el exceso o el déficit de estos iones, manteniendo el pH constante. Está compuesto por un ácido débil y su base conjugada, o por una base débil y su ácido conjugado.' },
        { id: 's5d', label: 'Tampón bicarbonato', detail: 'H₂CO₃ / HCO₃⁻. Actúa EXTRAcelularmente. A pH 7,4 la relación ion/ácido es de 20/1. Es un excelente amortiguador de ácidos y un sistema abierto: permite eliminar CO₂ y ion bicarbonato.' },
        { id: 's5e', label: 'Tampón fosfato', detail: 'Ion dihidrógeno fosfato / ion monohidrógeno fosfato. Actúa INTRAcelularmente, con gran eficacia.' },
        { id: 's5f', label: 'Orgánicos e inorgánicos', detail: 'Orgánicos: proteínas, aminoácidos, tampón hemoglobina. Inorgánicos: tampón bicarbonato y tampón fosfato. Existen en todos los fluidos biológicos y son imprescindibles para la vida.' },
      ]},
    ],
  },
  {
    id: 'gases', label: 'Las moléculas gaseosas', color: 'volcanic',
    children: [
      { id: 'g1', label: 'No se encuentran libres', detail: 'Las moléculas gaseosas imprescindibles para el metabolismo celular no se encuentran libres en el interior del organismo.' },
      { id: 'g2', label: 'O₂', detail: 'Indispensable en la respiración. Va unido a la hemoglobina.' },
      { id: 'g3', label: 'CO₂', detail: 'Indispensable en la fotosíntesis. Puede unirse en pequeñas proporciones a la hemoglobina o transportarse en el plasma en forma de bicarbonato.' },
      { id: 'g4', label: 'Amoniaco', detail: 'Se encuentra disuelto en los líquidos biológicos.' },
      { id: 'g5', label: 'La excepción', detail: 'Prácticamente los únicos gases libres están en los órganos de flotación de microalgas unicelulares, como Cyclotella meneghiniana.' },
    ],
  },
]

// ─── La Historia ───
function Historia() {
  return (
    <article className="page-enter max-w-2xl mx-auto">
      {/* Intro */}
      <header className="mb-12 md:mb-16">
        <p className="font-body text-sm uppercase tracking-widest text-verde mb-3">Unidad 1 · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          De qué estamos hechos, exactamente
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          Antes de estudiar células, tejidos u órganos hay que bajar un nivel: a los átomos concretos que forman
          la materia viva, a los enlaces que los mantienen unidos y a las dos moléculas inorgánicas que lo
          sostienen todo — el agua y las sales minerales.
        </p>
      </header>

      {/* Sección 1 · Bioelementos */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          1. La vida usa muy pocos elementos<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">los bioelementos</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los <K>bioelementos</K> son los elementos químicos presentes en las moléculas de los seres vivos, es
          decir, en las <K>biomoléculas</K>. De los 100 elementos químicos que conforman la materia del universo,
          70 son bioelementos, y esos 70 constituyen las biomoléculas comunes a todos los seres vivos.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Aquí hay un detalle que suele caer en los exámenes y que es contraintuitivo: los bioelementos
          mayoritarios <span className="font-bold text-terracotta-dark">no coinciden</span>, salvo el oxígeno, con
          los elementos químicos más abundantes de la corteza terrestre. La vida no está hecha de lo que más
          había a mano, sino de lo que mejor funcionaba.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Por qué precisamente esos</h4>
        <p className="font-body text-lg leading-relaxed mb-2">
          Los seis mayoritarios comparten cuatro propiedades que los hacen ideales:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Tienen las <K>capas electrónicas externas incompletas</K>, lo que facilita que formen enlaces covalentes.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Su <K>número atómico es bajo</K>: los electrones compartidos quedan cerca del núcleo y las moléculas que forman son estables.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>O y el N son electronegativos</K>, así que muchas de las moléculas resultantes son polares y, por tanto, solubles en agua.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Se <K>incorporan con facilidad</K> a los seres vivos, porque se encuentran en moléculas accesibles como el CO₂ y el H₂O.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">El carbono, el protagonista</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          El <K>carbono</K> es el principal elemento formador de la materia viva, y lo es por cuatro razones: es
          muy abundante en la Tierra y accesible para los seres vivos, es un elemento estable, posee{' '}
          <K>valencia 4</K> y tiene una gran facilidad para <K>formar cadenas</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Esa última es la clave. El carbono origina cadenas estables cuya morfología y tamaño variables les
          permiten adquirir estructuras espaciales complejas. Esas moléculas carbonadas son <em>la</em>{' '}
          característica de los organismos vivos.
        </p>

        <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6 my-6">
          <h5 className="font-display text-lg font-semibold text-petrol mb-2">¿Por qué el C y no el Si?</h5>
          <p className="font-body text-base leading-relaxed">
            Es una pregunta clásica. Ambos tienen <K>4 electrones de valencia</K>, pero en el carbono se
            distribuyen de forma <K>tetragonal</K> y sus enlaces son mucho más estables. La comparación que lo
            deja claro: el <K>CO₂</K> es un gas que se difunde y circula sin problema, mientras que el{' '}
            <K>SiO₂</K> es un sólido — el cuarzo. Con silicio, el equivalente de nuestra respiración sería
            expulsar arena.
          </p>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Clasificación según su proporción</h4>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Primarios o mayoritarios — 95%</h5>
            <p className="font-body text-base leading-relaxed">
              <K>C, H, O, N, P y S</K>. Forman enlaces covalentes, se unen fácilmente con H y O, y forman
              moléculas que pueden <K>polimerizar</K>, es decir, encadenarse en macromoléculas.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Secundarios — 4,5%</h5>
            <p className="font-body text-base leading-relaxed">
              <K>Na, K, Ca, Mg y Cl</K>. Están en menor proporción que los anteriores, pero entre todos ellos
              suman el 4,5% de la materia viva.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Oligoelementos — menos del 0,1%</h5>
            <p className="font-body text-base leading-relaxed">
              <K>Fe, Mn, I, F, Co, Si, Cr, Zn, Li, Mo</K>… Aparecen en proporciones inferiores al 0,1%, pero son{' '}
              <span className="font-bold text-terracotta-dark">imprescindibles para la vida</span>. Ojo con este
              matiz: no son los mismos para todos los seres vivos; solo <K>14</K> se han encontrado en todos.
            </p>
          </div>
        </div>

        <AI>
          <p>
            Para no confundir los dos primeros grupos: los primarios son los que construyen las cadenas
            (C, H, O, N, P, S) y los secundarios son los que después circulan como <em>iones</em> haciendo
            funciones — justamente los que reaparecen al final del tema como sales minerales (Na, K, Ca, Mg, Cl).
            Primarios = arquitectura; secundarios = funcionamiento.
          </p>
        </AI>
      </section>

      <Divider />

      {/* Sección 2 · Enlaces */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          2. Cómo se pegan las piezas<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">los enlaces químicos en las biomoléculas</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los bioelementos constituyen unas moléculas llamadas <K>principios inmediatos</K> o{' '}
          <K>biomoléculas</K>. Esas moléculas poseen enlaces químicos fundamentales tanto para mantener su
          estructura como para posibilitar su función en la célula. La clasificación que hay que tener clarísima
          es esta:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-petrol/5 border border-petrol/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-petrol-dark mb-2">Fuerzas intramoleculares</p>
            <p className="font-body text-base leading-relaxed">
              Dentro de la molécula, y más fuertes.
            </p>
            <ul className="font-body text-base leading-relaxed mt-3 space-y-1">
              <li>· Enlace covalente</li>
              <li>· Enlace iónico</li>
            </ul>
          </div>
          <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-turquoise-dark mb-2">Fuerzas intermoleculares</p>
            <p className="font-body text-base leading-relaxed">
              Entre moléculas, y más débiles.
            </p>
            <ul className="font-body text-base leading-relaxed mt-3 space-y-1">
              <li>· Interacciones electrostáticas</li>
              <li>· Fuerzas de Van der Waals</li>
              <li>· Puentes de hidrógeno</li>
            </ul>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.1 El enlace covalente</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Es <span className="font-bold text-terracotta-dark">el más fuerte de todos</span>. Se produce cuando dos
          átomos con electrones de valencia desapareados los comparten y quedan unidos. Precisamente por ser tan
          fuerte, permite que las moléculas se mantengan estables en el medio acuoso celular.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">Según cuántos electrones comparta cada átomo:</p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Sencillo</K>: cada átomo comparte un electrón — el metano.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Doble</K>: cada átomo comparte dos — el formaldehído.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Triple</K>: cada átomo comparte tres — el acetileno.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          ¿Por qué es clave en la materia viva? Por dos motivos: las <K>cadenas carbonadas</K>, que son los
          constituyentes básicos de la materia viva, se mantienen unidas por enlaces covalentes; y los{' '}
          <K>grupos funcionales</K> (amino, alcohol, ácido…) también se mantienen unidos a esas cadenas por este
          mismo tipo de enlace.
        </p>
        <blockquote className="border-l-4 border-verde pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Las moléculas con enlace covalente pueden comportarse de formas muy distintas: tener zonas hidrófobas
            e hidrófilas como los fosfolípidos, ser solubles en agua como los monosacáridos, o ionizarse en medio
            acuoso como los aminoácidos. Por eso son tan diversas.
          </p>
        </blockquote>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.2 El enlace iónico</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Se produce entre elementos con <K>cargas eléctricas opuestas</K> y forma <K>redes cristalinas</K> de
          agregados de aniones y cationes. Este es el enlace que da lugar a las{' '}
          <K>biomoléculas inorgánicas</K>. Aparece en tres sitios que conviene memorizar:
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🧬 En las proteínas</h5>
            <p className="font-body text-base leading-relaxed">
              Los enlaces iónicos formados entre sus distintas zonas permiten mantener su estructura y estabilizar
              su forma espacial. Si se pierden esos enlaces, se altera la estructura tridimensional y la molécula
              pierde sus propiedades biológicas.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🔗 En uniones específicas</h5>
            <p className="font-body text-base leading-relaxed">
              Se produce entre aniones o cationes inorgánicos y moléculas orgánicas muy variadas. Por ejemplo, la
              acción de ciertas enzimas y catalizadores biológicos sucede gracias a los cationes que se les unen
              por enlace iónico. La <K>hemoglobina</K> es el caso típico.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">💎 En estructuras cristalinas</h5>
            <p className="font-body text-base leading-relaxed">
              Pueden ser solubles e insolubles. Las <K>insolubles</K> permiten formar sistemas de sostén y órganos
              resistentes, como caparazones y esqueletos — exoesqueletos de diatomeas, conchas de moluscos. Y el{' '}
              <K>NaCl</K> disuelto en las células mantiene sus iones Cl⁻ y Na⁺ disociados.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.3 Los puentes de hidrógeno</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Un átomo de <K>hidrógeno</K> unido covalentemente a un átomo muy <K>electronegativo</K> interacciona con
          un par de electrones de otro átomo electronegativo. Dicho de otro modo: donde hay moléculas o grupos
          polares aparecen cargas parciales negativas, que son atraídas por la carga parcial positiva del
          hidrógeno de otras moléculas polares.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Lo importante es que es un enlace <span className="font-bold text-terracotta-dark">menos fuerte</span>{' '}
          que las fuerzas intramoleculares, y eso — que parece una desventaja — es justo su utilidad: posibilita
          su <K>fácil rotura y formación</K> entre moléculas. Estabiliza macromoléculas como el <K>ADN</K>,
          consolidando la doble hélice, y es fundamental en las reacciones reversibles y en las uniones
          transitorias del metabolismo celular.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.4 Las fuerzas de Van der Waals</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Son atracciones moleculares entre <K>grupos no polares</K>, producidas por la formación de{' '}
          <K>dipolos instantáneos</K> originados por la variación de la nube de electrones. Son uniones{' '}
          <K>muy débiles, temporales e inespecíficas</K>, pero resultan fundamentales para mantener la
          conformación de ciertas macromoléculas y en las <K>uniones antígeno-anticuerpo</K>.
        </p>
        <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6 my-6">
          <h5 className="font-display text-lg font-semibold text-petrol mb-2">🦎 El gecko</h5>
          <p className="font-body text-base leading-relaxed">
            Las patas de los geckos tienen almohadillas con estructuras finas de setas parecidas a pelos, y cada
            seta termina en un haz de espátulas. Una parte de esas diminutas espátulas tiene carga positiva y la
            otra negativa, y al acercarse a una superficie funcionan como imanes gracias a las fuerzas de Van der
            Waals. El único material al que un gecko no puede adherirse es el teflón.
          </p>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.5 Orgánicas frente a inorgánicas</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las biomoléculas se diferencian según su composición química, es decir, según si el elemento mayoritario
          es o no el carbono. Las <K>orgánicas</K> están formadas por cadenas de carbono; las{' '}
          <K>inorgánicas</K>, no. Y estas últimas — agua, sales minerales y gases — aparecen tanto en los seres
          vivos como en la materia inerte, y son indispensables para el desarrollo de las funciones vitales. Son
          las protagonistas del resto del tema.
        </p>
      </section>

      <Divider />

      {/* Sección 3 · Estructura del agua */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          3. Una molécula con un ángulo raro<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">la estructura química del agua</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          El agua es la molécula <span className="font-bold text-terracotta-dark">más abundante</span> de todos
          los seres vivos: entre el 50% y el 95% de su peso, en torno al 70-90% de su masa. Pero esa cantidad no
          es fija, y depende de tres cosas:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>La <K>especie</K>: los organismos acuáticos tienen un porcentaje muy elevado — la medusa, un 95% — mientras que las especies de zonas desérticas lo tienen muy bajo.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>La <K>edad del individuo</K>: las estructuras biológicas de los organismos jóvenes presentan mayor proporción de agua que las de los individuos de más edad.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>tipo de tejido</K>: como las reacciones biológicas se llevan a cabo en un medio acuoso, los tejidos con gran actividad bioquímica contienen más agua que los más pasivos.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          En el cuerpo se localiza en tres compartimentos — <K>intracelular</K>, <K>circulante</K> e{' '}
          <K>intersticial</K> — y procede de dos fuentes: el <K>agua exógena</K>, la que se incorpora del
          exterior, y el <K>agua endógena o metabólica</K>, la que se produce en las propias reacciones de
          condensación.
        </p>

        <SvgMoleculaAgua />

        <p className="font-body text-lg leading-relaxed mb-4">
          Ahora la estructura, que es de donde sale absolutamente todo lo demás. La molécula de agua son{' '}
          <K>un átomo de oxígeno y dos de hidrógeno</K> unidos covalentemente, formando un ángulo de{' '}
          <K>104,5°</K>. Además, el oxígeno posee <K>cuatro electrones más sin compartir</K>, y eso tiene dos
          consecuencias: aparece una carga negativa débil en la zona donde se sitúan esos electrones, y la
          molécula adquiere <K>geometría triangular</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          El resultado: aunque el agua es <K>eléctricamente neutra</K> — no tiene carga eléctrica neta — dentro de
          ella aparecen cargas parciales opuestas. La zona de los electrones no compartidos del oxígeno es
          negativa y la zona donde se sitúan los hidrógenos es positiva. Eso es exactamente lo que significa que
          la molécula de agua tiene <K>carácter polar</K>: es un <K>dipolo</K>.
        </p>

        <SvgPuentesHidrogeno />

        <p className="font-body text-lg leading-relaxed mb-4">
          Esa polaridad favorece la interacción entre unas moléculas de agua y otras: la zona parcialmente
          negativa de una es atraída por la zona parcialmente positiva de otra, y entre ambas se establece un{' '}
          <K>puente de hidrógeno</K>. Eso convierte al agua en una sustancia altamente <K>cohesiva</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Y también puede formar puentes de hidrógeno con otras moléculas polares distintas — alcoholes, aminas —
          lo que la convierte además en una sustancia altamente <K>adhesiva</K>. Estas dos particularidades le
          confieren todas sus propiedades.
        </p>

        <AI>
          <p>
            Un truco para el examen: casi cualquier pregunta del tipo «explica por qué el agua…» se responde
            volviendo a los <strong>puentes de hidrógeno</strong>. ¿Por qué es líquida a temperatura ambiente?
            Puentes de hidrógeno. ¿Por qué tiene tanto calor específico? Porque el calor se gasta en romperlos.
            ¿Por qué el hielo flota? Porque al congelarse forman una red que ocupa más volumen. ¿Por qué hay
            capilaridad y tensión superficial? Cohesión, otra vez puentes de hidrógeno.
          </p>
        </AI>
      </section>

      <Divider />

      {/* Sección 4 · Propiedades del agua */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          4. Las ocho propiedades<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">y para qué le sirven a un ser vivo</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-6">
          Su particular molécula dipolar le confiere las propiedades que la convierten en una molécula
          imprescindible para la vida. Cada una viene con su «importancia para los seres vivos», que es
          justamente lo que suelen preguntar.
        </p>

        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">A · Poder disolvente</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              Debido a la polaridad de su molécula, el agua se interpone entre los iones de las redes cristalinas
              de los compuestos iónicos, lo que disminuye mucho la atracción entre ellos y provoca su disolución.
              Su <K>constante dieléctrica</K> es muy elevada — 80, frente a 24 del etanol —, así que ejerce una
              gran fuerza que mantiene separados a los iones de carga opuesta. También forma enlaces de hidrógeno
              con moléculas no iónicas que tienen grupos polares, algo que ocurre en muchas biomoléculas.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> como las moléculas deben
              estar disueltas para reaccionar entre sí, el agua es el medio donde ocurren las reacciones
              bioquímicas de la actividad vital. Y al revés: que algunas biomoléculas (lípidos, ciertas proteínas)
              sean insolubles les permite construir estructuras celulares.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">B · Estado líquido a temperatura ambiente</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              La elevada fuerza de cohesión entre sus moléculas permite que el agua se mantenga líquida a
              temperaturas no extremas. No ocurre con otras moléculas químicamente relacionadas, como el{' '}
              <K>amoníaco (NH₃)</K> o el <K>ácido sulfhídrico (H₂S)</K>, que a temperatura ambiente son gases.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> actúa como vehículo de
              transporte en el interior del organismo y como medio lubricante en las estructuras en movimiento.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">C · Elevada tensión superficial</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              En el interior de una masa de agua las moléculas se cohesionan en todas las direcciones del espacio,
              así que las fuerzas se compensan. Pero las moléculas de la superficie solo están sometidas a la
              acción de las de dentro, porque no hay cohesión con el aire. Se origina una <K>fuerza neta hacia el
              interior</K> y la superficie libre se comporta como una membrana elástica tensa.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> es la causa de la mayoría
              de las deformaciones celulares y de los movimientos citoplasmáticos. Y permite que pequeños insectos
              ligeros se desplacen sobre ella.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">D · Elevado calor específico</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              Cuando se aplica calor al agua, parte de la energía se emplea en <K>romper los enlaces de
              hidrógeno</K> y no en elevar su temperatura. Por eso su temperatura asciende más lentamente que la
              de otros líquidos, y también desciende más lentamente al liberar calor.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> los organismos acuáticos
              viven en un ambiente con pocas fluctuaciones térmicas, y los terrestres se benefician de esa
              amortiguación gracias a la gran cantidad de agua que contienen. Es imprescindible para evitar la
              alteración de las biomoléculas y para que las reacciones químicas se realicen correctamente.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">D · Elevado calor de vaporización</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              Para que el agua pase de líquido a gas hay que romper los enlaces de hidrógeno, lo que requiere un
              aporte considerable de energía. Y esa energía <K>se toma del entorno</K>, que por tanto se enfría.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> una película de agua sobre
              una superficie biológica la refrigera al evaporarse. El cuerpo humano disipa el exceso de calor
              evaporando el sudor, y una hoja se mantiene fresca bajo una luz intensa.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">E · Menor densidad en estado sólido</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              La densidad del hielo es aproximadamente un <K>10% menor</K> que la del agua líquida, así que flota.
              Cuando la temperatura baja de 4 °C las moléculas se acercan tanto que cada una puede formar enlaces
              de hidrógeno con otras cuatro; al llegar a 0 °C se forma una <K>red espacial estable</K> que ocupa
              más volumen que el agua líquida.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> cuando se enfrían ríos y
              mares, la superficie se congela pero el fondo permanece líquido, porque la capa de hielo actúa como{' '}
              <K>aislante térmico</K>. Eso permite que los organismos acuáticos sobrevivan bajo el hielo durante
              el invierno.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">F · Capilaridad</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              La unión entre moléculas de agua mediante enlaces de hidrógeno les da un grado de{' '}
              <K>cohesión</K> muy alto que, combinado con la <K>adhesión</K> a la superficie de otras estructuras
              gracias a su polaridad, permite que el agua ascienda por conductos estrechos.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> es fundamental para el
              ascenso de la <K>savia bruta</K> por los tubos del xilema en los vegetales.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">G · Líquido casi incompresible</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              Por el elevado grado de cohesión entre sus moléculas, el volumen del agua líquida no disminuye
              apreciablemente aunque se apliquen presiones muy altas.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> determina las deformaciones
              citoplasmáticas y permite que el agua actúe como <K>esqueleto hidrostático</K> en las células
              vegetales y en ciertos animales.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">H · Ionización</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              Un átomo de hidrógeno de una molécula se une, mediante enlace covalente, al oxígeno de otra molécula
              cercana a la que estaba unido por un puente de hidrógeno. Se obtienen así dos iones de carga opuesta
              y en igual concentración: <K>H₃O⁺</K> — que se escribe H⁺ para simplificar — y <K>OH⁻</K>.
            </p>
            <p className="font-body text-base leading-relaxed text-tierra-slate">
              <span className="font-semibold text-verde-dark">Para el ser vivo:</span> el agua y sus productos de
              ionización participan en reacciones biológicas importantes, que vienen a continuación.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Hidrólisis y condensación</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Son las dos reacciones inversas que conviene no confundir nunca:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-petrol/5 border border-petrol/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-petrol-dark mb-2">Hidrólisis</p>
            <p className="font-body text-base leading-relaxed">
              Una molécula de agua <K>rompe</K> una molécula orgánica, y se obtienen moléculas sencillas a partir
              de otra mayor. Sacarosa → glucosa + fructosa.
            </p>
          </div>
          <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-turquoise-dark mb-2">Condensación</p>
            <p className="font-body text-base leading-relaxed">
              El proceso inverso: moléculas sencillas <K>se unen</K> para obtener otras mayores, y eso origina
              moléculas de agua libre — el <K>agua metabólica</K>.
            </p>
          </div>
        </div>
        <p className="font-body text-lg leading-relaxed mb-4">
          El agua interviene además en la <K>fotosíntesis</K>, donde proporciona los H⁺ y los electrones
          necesarios para sintetizar las moléculas orgánicas. Experimenta <K>fotólisis</K> y es la fuente de poder
          reductor de la fotosíntesis: la pieza clave del ciclo de la materia.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Resumen: las funciones del agua</h4>
        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-5 my-6">
          <ul className="font-body text-lg leading-relaxed space-y-2">
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Principal <K>disolvente</K> biológico</span></li>
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Función <K>metabólica</K></span></li>
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Función <K>estructural</K></span></li>
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Función <K>mecánica amortiguadora</K></span></li>
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Función de <K>transporte</K></span></li>
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Función <K>termorreguladora</K></span></li>
            <li className="flex gap-3"><span className="text-volcanic shrink-0">▸</span><span>Posibilita la <K>vida acuática en climas fríos</K></span></li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* Sección 5 · El agua con otras sustancias */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          5. Con quién se junta el agua<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">disoluciones, coloides, emulsiones y estructuras orientadas</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Según la naturaleza de la sustancia que interacciona con el agua — polar o apolar, soluble o insoluble —
          y según el tamaño de las partículas dispersas, se distinguen <K>cuatro tipos de relación</K>. Vale la
          pena aprenderlas como una escala de tamaño creciente.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">5.1 Disoluciones</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          El tamaño de las moléculas del soluto es <K>pequeño</K>. Forman disoluciones las sales minerales y las
          moléculas orgánicas de masa molecular no muy elevada: monosacáridos, disacáridos, aminoácidos. El
          mecanismo con los compuestos iónicos se llama <K>solvatación</K>: el agua rodea cada ion y los mantiene
          separados gracias a su elevada constante dieléctrica.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">5.2 Dispersiones coloidales</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Aquí el soluto es <K>mucho mayor</K>: macromoléculas como los polisacáridos, las proteínas y los ácidos
          nucleicos. Es exactamente lo que ocurre en el <K>citoplasma celular</K>, así que se puede decir que la
          materia viva tiene carácter coloidal. Un coloide tiene dos fases: la <K>fase dispersa</K> (el soluto) y
          la <K>fase dispersante</K> (el medio).
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-turquoise-dark mb-2">Estado SOL</p>
            <p className="font-body text-base leading-relaxed">
              Líquido. La fase dispersante es mayor que la dispersa. Ejemplo: la pintura.
            </p>
          </div>
          <div className="bg-ochre/5 border border-ochre/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-ochre-dark mb-2">Estado GEL</p>
            <p className="font-body text-base leading-relaxed">
              Gelatinoso o semisólido. El disolvente queda envuelto por el soluto. Ejemplo: la gelatina.
            </p>
          </div>
        </div>
        <p className="font-body text-lg leading-relaxed mb-4">
          La diferencia entre ambos está en la cantidad de agua presente y, por tanto, en la <K>viscosidad</K>. Y
          el paso de uno a otro no es una curiosidad: la <K>polimerización o despolimerización</K> de algunas
          proteínas citoplasmáticas causa la transformación de un estado en otro, que es lo que se ve en la
          formación de <K>pseudópodos</K>. Estos coloides viscosos también mantienen la humedad de ciertas
          estructuras, como el <K>mucus</K> del aparato respiratorio, o permiten el deslizamiento de animales como
          el caracol.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">Propiedades de los coloides, que hay que saber enumerar:</p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Efecto <K>Tyndall</K></span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Movimiento <K>browniano</K></span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Sedimentación</K></span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Elevada <K>adsorción</K></span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Elevada <K>viscosidad</K></span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Diálisis</K></span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">5.3 Emulsiones</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          El agua forma emulsiones con sustancias <K>totalmente apolares</K>. Hay dos tipos, y la diferencia está
          en si hay o no una tercera molécula que haga de intermediaria:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Transitorias</K>: formadas por agua y una sustancia apolar.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Permanentes</K>: formadas por agua, una sustancia apolar y una sustancia <K>anfipática</K>, que actúa de <K>emulgente</K>.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">5.4 Estructuras orientadas</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          El agua origina estructuras orientadas con moléculas <K>anfipáticas</K>, como los fosfolípidos, que
          tienen una cabeza polar y unas colas apolares. Al meterlos en agua se colocan solos, escondiendo las
          colas y sacando las cabezas: se forman <K>monocapas</K>, <K>bicapas</K>, <K>micelas</K> y{' '}
          <K>liposomas</K>.
        </p>

        <SvgEstructurasOrientadas />

        <AI>
          <p>
            Aquí está una de las ideas más bonitas del tema: nadie tiene que «construir» una membrana celular. La
            bicapa se forma <em>sola</em>, simplemente porque es la disposición en la que las colas apolares
            quedan más lejos del agua. La membrana de todas tus células existe por una propiedad del agua.
          </p>
        </AI>
      </section>

      <Divider />

      {/* Sección 6 · Sales minerales */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          6. Las sales minerales<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">sólidas o disueltas, nunca decorativas</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los organismos vivos también están formados por <K>sales minerales</K>: compuestos inorgánicos que
          pueden ser solubles o insolubles en agua. Esa distinción organiza el apartado entero, porque de ella
          dependen sus funciones.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-terracotta/5 border border-terracotta/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-terracotta-dark mb-2">Insolubles · precipitadas</p>
            <p className="font-body text-base leading-relaxed">
              Se encuentran precipitadas y constituyen <K>estructuras sólidas</K> en los seres vivos, como
              esqueletos o caparazones. Función <K>estructural</K>.
            </p>
          </div>
          <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-turquoise-dark mb-2">Solubles · disueltas</p>
            <p className="font-body text-base leading-relaxed">
              Lo habitual es que aparezcan disueltas y <K>disociadas en sus iones</K>, aniones y cationes. Función{' '}
              <K>reguladora</K>.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.1 Los iones que hay que saberse</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las sales disueltas forman parte de los medios internos extracelulares e intracelulares. Los más
          importantes:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-tierra-cream/60 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-petrol-dark mb-2">Aniones (−)</p>
            <p className="font-body text-base leading-relaxed">
              Cl⁻ · CO₃²⁻ · HCO₃⁻ · PO₄³⁻ · SO₄²⁻ · nitrato
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-petrol-dark mb-2">Cationes (+)</p>
            <p className="font-body text-base leading-relaxed">
              Na⁺ · K⁺ · Ca²⁺ · Mg²⁺ · Fe²⁺ · Fe³⁺
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.2 Funciones fisiológicas o bioquímicas</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Muchos procesos biológicos solo se pueden realizar con la intervención de determinados iones. Estos
          cuatro son los que más se preguntan:
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Na⁺ · sodio</h5>
            <p className="font-body text-base leading-relaxed">
              Mantenimiento del equilibrio iónico y acuoso en el <K>medio extracelular</K>, y transmisión de la
              corriente eléctrica. Es el ion del líquido intersticial.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">K⁺ · potasio</h5>
            <p className="font-body text-base leading-relaxed">
              Contracción muscular, regulación de la actividad cardiaca y transmisión de la corriente nerviosa. Es
              el ion del <K>líquido intracelular</K>. Junto con el Na⁺ mantiene el <K>potencial de membrana</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Ca²⁺ · calcio</h5>
            <p className="font-body text-base leading-relaxed">
              Coagulación de la sangre, mineralización de estructuras esqueléticas, contracción muscular,
              regulación de la actividad cardiaca, transmisión sináptica, y activador y cofactor de algunas
              enzimas. El más polivalente de todos.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Mg²⁺ · magnesio</h5>
            <p className="font-body text-base leading-relaxed">
              Regulador de la contracción muscular y de la transmisión nerviosa, constituyente de los{' '}
              <K>ribosomas funcionales</K>, y activador y cofactor de enzimas. Asociado a la <K>clorofila</K>,
              absorbe la energía luminosa.
            </p>
          </div>
        </div>

        <p className="font-body text-lg leading-relaxed mb-2">Y los demás, que suelen entrar como pregunta corta:</p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Fe</K>: grupo hemo y mioglobina — transporta el O₂.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>I</K>: constituyente de las hormonas tiroideas.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>F</K>: forma parte de los huesos y previene la caries.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Co</K>: vitamina B₁₂.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>S</K>: forma parte de aminoácidos como la metionina y la cisteína.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>PO₄</K>: forma parte de los ácidos nucleicos y del ATP.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Zn</K>: proteínas que se unen al ADN en la transcripción.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Mn</K>: fotólisis del agua en la fotosíntesis.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Cr</K>: participa en reacciones y potencia la actividad de la insulina.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Cl</K>: líquido intersticial y equilibrio hídrico.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          Un apunte importante: las concentraciones iónicas y la proporción entre los cationes deben mantenerse en{' '}
          <K>equilibrio constante</K>. Cualquier variación, por defecto o por exceso, puede provocar alteraciones
          graves o incluso letales. Algunos cationes, además, participan activamente en reacciones{' '}
          <K>redox</K> (Fe²⁺ ⇄ Fe³⁺, Cu²⁺ ⇄ Cu³⁺).
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.3 Las sales precipitadas y las estructuras duras</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los huesos, las conchas, los caparazones y las espículas de algunos organismos están formados por sales
          precipitadas. Las más abundantes son <K>silicatos, carbonatos y fosfatos</K>. También aparecen en
          inclusiones citoplasmáticas y en depósitos de paredes celulares de órganos vegetales, como ciertas
          semillas y frutos.
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🐚 Carbonato cálcico</h5>
            <p className="font-body text-base leading-relaxed">
              Caparazones de protozoos marinos como los <K>foraminíferos</K>; dureza de dientes y huesos de
              vertebrados; esqueleto externo de corales, conchas de gasterópodos y bivalvos y exoesqueleto de
              artrópodos; rigidez de algunas esponjas y de las espinas de los erizos de mar.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🔬 Silicatos</h5>
            <p className="font-body text-base leading-relaxed">
              Espículas de algunas esponjas; caparazones de microorganismos como los <K>radiolarios</K> y las{' '}
              <K>diatomeas</K>; endurecen estructuras vegetales de gramíneas o del género <em>Equisetum</em>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🦴 Fosfato cálcico</h5>
            <p className="font-body text-base leading-relaxed">
              Forma parte de la <K>matriz mineral</K> que compone los huesos de los vertebrados.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Sección 7 · Ósmosis */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          7. Por qué una célula se arruga o revienta<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">ósmosis y tonicidad</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los <K>procesos osmóticos</K> son los procesos biológicos que dependen de la concentración de solutos en
          el agua. Y todo arranca de una característica de las membranas celulares: son{' '}
          <K>semipermeables</K>, es decir, dejan pasar el agua pero no los solutos.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Eso es imprescindible para mantener los niveles adecuados de agua dentro de la célula, pero se convierte
          en un problema cuando hay que nivelar concentraciones a ambos lados. Entonces se produce la{' '}
          <K>ósmosis</K>.
        </p>

        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 my-6 text-center">
          <p className="font-display text-lg md:text-xl font-bold text-ochre-dark leading-snug">
            EL AGUA VA SIEMPRE DEL MEDIO MÁS DILUIDO (HIPOTÓNICO)<br />
            AL MÁS CONCENTRADO (HIPERTÓNICO)
          </p>
        </div>

        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>tonicidad</K> es la medida de la concentración de una disolución. Una disolución es{' '}
          <K>hipertónica</K> cuando está más concentrada, <K>hipotónica</K> cuando está más diluida e{' '}
          <K>isotónica</K> cuando tiene la misma concentración.
        </p>

        <SvgOsmosis />

        <p className="font-body text-lg leading-relaxed mb-4">
          Lo que le ocurre a la célula tiene nombre propio, y cambia según sea animal o vegetal. Esta tabla es de
          las cosas que más caen:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full min-w-[30rem] border-collapse font-body text-base">
            <thead>
              <tr className="bg-tierra-cream">
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold text-tierra-charcoal">Medio</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold text-tierra-charcoal">El agua…</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold text-tierra-charcoal">Célula animal</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold text-tierra-charcoal">Célula vegetal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-tierra-sand px-3 py-2.5 font-semibold text-terracotta-dark">Hipertónico</td>
                <td className="border border-tierra-sand px-3 py-2.5">sale</td>
                <td className="border border-tierra-sand px-3 py-2.5">Crenación</td>
                <td className="border border-tierra-sand px-3 py-2.5">Plasmólisis</td>
              </tr>
              <tr className="bg-tierra-cream/40">
                <td className="border border-tierra-sand px-3 py-2.5 font-semibold text-turquoise-dark">Hipotónico</td>
                <td className="border border-tierra-sand px-3 py-2.5">entra</td>
                <td className="border border-tierra-sand px-3 py-2.5">Hemólisis</td>
                <td className="border border-tierra-sand px-3 py-2.5">Turgencia</td>
              </tr>
              <tr>
                <td className="border border-tierra-sand px-3 py-2.5 font-semibold text-tierra-slate">Isotónico</td>
                <td className="border border-tierra-sand px-3 py-2.5">entra y sale igual</td>
                <td className="border border-tierra-sand px-3 py-2.5" colSpan={2}>Equilibrio: no cambia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AI>
          <p>
            La turgencia vegetal la mantiene la <strong>vacuola</strong>, y es la razón por la que una planta sin
            regar se «cae»: no ha perdido estructura, ha perdido presión de agua. Y ojo con un detalle que
            confunde: en la célula vegetal la pared celular impide que reviente en medio hipotónico, por eso se
            habla de turgencia y no de lisis. En la animal, sin pared, sí revienta.
          </p>
        </AI>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">7.1 Difusión y diálisis</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          La ósmosis <span className="font-bold text-terracotta-dark">no requiere energía</span>: se realiza
          mediante un mecanismo de <K>difusión simple</K> y se utiliza universalmente en la biosfera.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>difusión</K> es el paso libre, a través de la membrana, de moléculas de pequeño tamaño como el O₂
          y el CO₂, siempre desde el medio con mayor concentración al de menor. La ósmosis es, por tanto, un{' '}
          <K>caso especial de difusión</K> en el que lo que pasa es el agua, y va del medio más diluido al más
          concentrado.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>diálisis</K> es un proceso relacionado: la membrana semipermeable permite el paso, además del
          agua, de los solutos de <K>baja masa molecular</K> desde la zona de mayor a la de menor concentración,
          por simple difusión. Es la separación de moléculas de una dispersión coloidal según su tamaño, y es
          exactamente lo que se hace al filtrar la sangre en casos de <K>insuficiencia renal grave</K>.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">7.2 Osmorregulación</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Son los mecanismos para regular la entrada y salida de agua, sales minerales y otras moléculas. Cada
          grupo lo resuelve a su manera:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Vegetales</K>: en medios hipotónicos absorben por las raíces. En medios hipertónicos eliminan agua por los estomas y mueren. Las plantas <K>halófitas</K> absorben gran cantidad de sales, y así consiguen absorber agua.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Animales de aguas continentales</K> (medio hipotónico): producen gran cantidad de orina muy diluida.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Peces marinos</K> (medio hipertónico): baja cantidad de orina muy concentrada, y eliminan sales por las branquias.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Aves y reptiles marinos</K> (medio hipertónico): tienen glándulas específicas que eliminan sales.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Animales terrestres</K> (medio hipotónico): disminuyen la evaporación y la pérdida de agua en la orina.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          En resumen, las funciones de las sales en disolución son: mantener la <K>homeostasis</K> y el grado de
          salinidad, regular la <K>actividad enzimática</K> (activación e inhibición, como cofactores), regular la{' '}
          <K>presión osmótica</K> y el volumen celular, estabilizar las <K>dispersiones coloidales</K>, generar{' '}
          <K>potenciales eléctricos</K> — el potencial de membrana — y regular el <K>pH</K>.
        </p>
      </section>

      <Divider />

      {/* Sección 8 · pH */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          8. Mantener la acidez a raya<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">el pH y los sistemas tampón</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Cuando se disuelve un <K>ácido</K> en agua, la concentración de protones [H⁺] aumenta; si es una{' '}
          <K>base</K>, disminuye. Así que en una disolución acuosa de un ácido habrá más iones H⁺ que OH⁻, y en la
          de una base ocurrirá lo contrario.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Para expresar el grado de acidez se usa el <K>pH</K>, que se define como el logaritmo del inverso de la
          concentración de protones — o, lo que es lo mismo, el logaritmo decimal cambiado de signo:
        </p>

        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 my-6 text-center">
          <p className="font-display text-xl md:text-2xl font-bold text-ochre-dark tracking-wide">
            pH = −log [H⁺]
          </p>
        </div>

        <p className="font-body text-lg leading-relaxed mb-4">
          Un ejemplo para fijarlo: si la [H⁺] de una disolución es 10⁻⁵, su pH es 5. Los valores oscilan{' '}
          <K>entre 0 y 14</K>.
        </p>

        <SvgEscalaPh />

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Por qué hace falta un tampón</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los líquidos biológicos intracelulares y extracelulares tienen un grado de acidez determinado, y su
          variación <span className="font-bold text-terracotta-dark">altera la estructura y la función de las
          proteínas</span>. El problema es que en las reacciones bioquímicas se liberan con frecuencia pequeñas
          cantidades de ácidos, que provocarían variaciones del pH.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          De ahí los <K>sistemas tampón</K>, <K>buffer</K> o amortiguadores: actúan como aceptores o donantes de
          H⁺ para compensar el exceso o el déficit de estos iones, manteniendo el pH en un valor constante.
          Suelen incluir dos especies iónicas en equilibrio: un <K>ácido débil y su base conjugada</K>, o una base
          débil y su ácido conjugado. Existen en todos los fluidos biológicos y son imprescindibles para la vida.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-turquoise-dark mb-2">Tampón bicarbonato · EXTRAcelular</p>
            <p className="font-body text-base leading-relaxed">
              H₂CO₃ / HCO₃⁻. A pH 7,4 la relación ion/ácido es de <K>20/1</K>. Excelente amortiguador de ácidos en
              el medio extracelular y, sobre todo, un <K>sistema abierto</K>: se puede eliminar CO₂ y ion
              bicarbonato.
            </p>
          </div>
          <div className="bg-petrol/5 border border-petrol/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-petrol-dark mb-2">Tampón fosfato · INTRAcelular</p>
            <p className="font-body text-base leading-relaxed">
              Ion dihidrógeno fosfato / ion monohidrógeno fosfato. Su ventaja principal es su{' '}
              <K>gran eficacia en el medio intracelular</K>.
            </p>
          </div>
        </div>

        <p className="font-body text-lg leading-relaxed mb-4">
          Además de estos dos, que son <K>inorgánicos</K>, hay tampones <K>orgánicos</K>: proteínas, aminoácidos y
          el tampón hemoglobina. Algunas proteínas actúan tanto intra como extracelularmente.
        </p>

        <AI>
          <p>
            Regla nemotécnica para no confundirlos: <strong>fos</strong>fato va <strong>fuera no</strong>, va
            dentro (intracelular); el bi<strong>carbo</strong>nato viaja por la sangre, que es lo que está{' '}
            <strong>fuera</strong> de la célula (extracelular). Y el 20/1 solo aplica al bicarbonato, a pH 7,4.
          </p>
        </AI>
      </section>

      <Divider />

      {/* Sección 9 · Gases */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-verde-dark mb-6 leading-snug">
          9. Los gases nunca van sueltos<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">las moléculas gaseosas</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Es el apartado más corto del tema, pero tiene una idea que se pregunta tal cual: las moléculas gaseosas
          imprescindibles para el metabolismo celular{' '}
          <span className="font-bold text-terracotta-dark">no se encuentran libres</span> en el interior del
          organismo. Ni siquiera el O₂ y el CO₂, que son indispensables en la respiración y la fotosíntesis.
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>oxígeno</K> va unido a la <K>hemoglobina</K>.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>dióxido de carbono</K> puede unirse en pequeñas proporciones a la hemoglobina, o transportarse en el plasma en forma de <K>bicarbonato</K>.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>amoniaco</K> se encuentra disuelto en los líquidos biológicos.</span></li>
        </ul>
        <blockquote className="border-l-4 border-verde pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Hay muy pocos casos de moléculas gaseosas libres en los seres vivos: prácticamente se limitan a los
            órganos de flotación de microalgas unicelulares, como <em>Cyclotella meneghiniana</em>.
          </p>
        </blockquote>

        <p className="font-body text-lg leading-relaxed mb-4">
          Y con eso se cierra el tema: unos pocos elementos escogidos, unos enlaces que los mantienen unidos, una
          molécula de agua con un ángulo de 104,5° de la que sale casi todo, y unas sales que regulan el resto.
          Todo lo demás de Biología — glúcidos, lípidos, proteínas, ácidos nucleicos, la célula entera — se
          construye encima de esto.
        </p>
      </section>
    </article>
  )
}

// ─── Fichas de estudio ───
const fichas: Ficha[] = [
  { s: '1. Bioelementos', p: '¿Qué son los bioelementos?', r: 'Los elementos químicos presentes en las moléculas de los seres vivos, llamadas biomoléculas.' },
  { s: '1. Bioelementos', p: 'De los 100 elementos químicos del universo, ¿cuántos son bioelementos?', r: '70, y constituyen las biomoléculas comunes a todos los seres vivos.' },
  { s: '1. Bioelementos', p: '¿Coinciden los bioelementos mayoritarios con los elementos más abundantes de la corteza terrestre?', r: 'No, salvo el oxígeno. Es una de las ideas clave del apartado.' },
  { s: '1. Bioelementos', p: 'Nombra las 4 propiedades de los bioelementos.', r: 'Capas electrónicas externas incompletas (facilita enlaces covalentes); número atómico bajo (moléculas estables); O y N electronegativos (moléculas polares y solubles en agua); se incorporan fácilmente porque están en el CO₂ y el H₂O.' },
  { s: '1. Bioelementos', p: '¿Por qué las capas electrónicas externas incompletas son una ventaja?', r: 'Porque facilitan la formación de enlaces covalentes.' },
  { s: '1. Bioelementos', p: '¿Qué implica que los bioelementos tengan número atómico bajo?', r: 'Que los electrones compartidos se hallan próximos al núcleo y, por tanto, las moléculas formadas son estables.' },
  { s: '1. Bioelementos', p: '¿Por qué muchas biomoléculas son solubles en agua?', r: 'Porque el O y el N son electronegativos, lo que hace que muchas moléculas sean polares.' },
  { s: '1. Bioelementos', p: '¿Por qué el carbono es el principal elemento formador de la materia viva? (4 razones)', r: 'Es muy abundante en la Tierra y accesible; es un elemento estable; posee valencia 4; y tiene gran facilidad para formar cadenas.' },
  { s: '1. Bioelementos', p: '¿Qué permiten las cadenas de carbono?', r: 'Originar cadenas estables de morfología y tamaño variables, que adquieren estructuras espaciales complejas características de los organismos vivos.' },
  { s: '1. Bioelementos', p: '¿Por qué el carbono y no el silicio, si ambos tienen 4 electrones de valencia?', r: 'En el C se distribuyen de forma tetragonal y sus enlaces son más estables. Se ve comparando el CO₂ (gas) con el SiO₂ (sólido).' },
  { s: '1. Bioelementos', p: '¿Cuáles son los bioelementos primarios o mayoritarios y qué porcentaje suponen?', r: 'C, H, O, N, P y S. El 95% de la materia viva.' },
  { s: '1. Bioelementos', p: 'Nombra 3 características de los bioelementos primarios.', r: 'Forman enlaces covalentes; se unen fácilmente con H y O; y forman moléculas que pueden polimerizar.' },
  { s: '1. Bioelementos', p: '¿Cuáles son los bioelementos secundarios y qué porcentaje suponen?', r: 'Na, K, Ca, Mg y Cl. El 4,5% de la materia viva entre todos ellos.' },
  { s: '1. Bioelementos', p: '¿Qué son los oligoelementos y en qué proporción aparecen?', r: 'Fe, Mn, I, F, Co, Si, Cr, Zn, Li, Mo… En proporciones inferiores al 0,1%, pero son imprescindibles para la vida.' },
  { s: '1. Bioelementos', p: '¿Son los oligoelementos los mismos en todos los seres vivos?', r: 'No. Solo 14 de ellos se han encontrado en todos los seres vivos.' },

  { s: '2. Biomoléculas y enlaces', p: '¿Qué son los principios inmediatos?', r: 'Las biomoléculas: las moléculas que los bioelementos constituyen.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cuáles son las fuerzas INTRAmoleculares?', r: 'El enlace covalente y el enlace iónico.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cuáles son las fuerzas INTERmoleculares?', r: 'Las interacciones electrostáticas, las fuerzas de Van der Waals y los enlaces o puentes de hidrógeno.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cómo se produce el enlace covalente?', r: 'Cuando dos átomos con electrones de valencia desapareados los comparten y quedan unidos.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cuál es el enlace más fuerte y qué permite?', r: 'El covalente. Permite que las moléculas se mantengan estables en el medio acuoso celular.' },
  { s: '2. Biomoléculas y enlaces', p: 'Tipos de enlace covalente y un ejemplo de cada uno.', r: 'Sencillo (cada átomo comparte un electrón — metano), doble (comparte dos — formaldehído) y triple (comparte tres — acetileno).' },
  { s: '2. Biomoléculas y enlaces', p: '¿Por qué el enlace covalente es clave en la materia viva?', r: 'Porque mantiene unidas las cadenas carbonadas, constituyentes básicos de la materia viva, y porque también une los grupos funcionales (amino, alcohol…) a esas cadenas.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Por qué son tan diversas las moléculas con enlace covalente?', r: 'Porque pueden tener zonas hidrófobas e hidrófilas (fosfolípidos), ser solubles en agua (monosacáridos) o ionizarse en medio acuoso (aminoácidos).' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cómo se produce el enlace iónico y qué forma?', r: 'Entre elementos con cargas eléctricas opuestas. Forma redes cristalinas de agregados de aniones y cationes.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué tipo de biomoléculas da lugar el enlace iónico?', r: 'Las biomoléculas inorgánicas.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué papel juega el enlace iónico en las proteínas?', r: 'Los enlaces iónicos entre sus distintas zonas mantienen su estructura y estabilizan su forma espacial. Al perderlos se altera la estructura tridimensional y se pierden sus propiedades biológicas.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué es la unión específica por enlace iónico? Pon un ejemplo.', r: 'La unión de aniones o cationes inorgánicos a moléculas orgánicas variadas. Ciertas enzimas y catalizadores actúan gracias a los cationes unidos a ellos por enlace iónico; el ejemplo típico es la hemoglobina.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Para qué sirven las estructuras cristalinas insolubles?', r: 'Permiten formar sistemas de sostén y órganos resistentes, como caparazones y esqueletos.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cómo está el NaCl dentro de las células?', r: 'Disuelto, con sus iones Cl⁻ y Na⁺ disociados.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué son las interacciones electrostáticas?', r: 'Atracciones eléctricas entre radicales de carga diferente.' },
  { s: '2. Biomoléculas y enlaces', p: 'Define el enlace o puente de hidrógeno.', r: 'Un átomo de H unido covalentemente a un átomo muy electronegativo interacciona con un par de electrones de otro átomo electronegativo.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué ventaja tiene que el puente de hidrógeno sea más débil que las fuerzas intramoleculares?', r: 'Posibilita su fácil rotura y formación entre moléculas, lo que es fundamental en reacciones reversibles y uniones transitorias del metabolismo celular.' },
  { s: '2. Biomoléculas y enlaces', p: '¿En qué macromolécula son especialmente importantes los puentes de hidrógeno?', r: 'En el ADN, donde consolidan la doble hélice.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué son las fuerzas de Van der Waals?', r: 'Atracciones moleculares entre grupos NO polares, producidas por dipolos instantáneos originados por la variación de la nube de electrones.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cómo son las uniones de Van der Waals y para qué son fundamentales?', r: 'Muy débiles, temporales e inespecíficas. Son fundamentales para mantener la conformación de ciertas macromoléculas y en las uniones antígeno-anticuerpo.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Qué ejemplo curioso ilustra las fuerzas de Van der Waals?', r: 'Las patas del gecko: sus setas terminan en espátulas con cargas opuestas que se adhieren a las superficies. El único material al que no se adhiere es el teflón.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cómo se diferencian las biomoléculas orgánicas de las inorgánicas?', r: 'Por si el elemento mayoritario es o no el carbono: las orgánicas están formadas por cadenas de carbono, las inorgánicas no.' },
  { s: '2. Biomoléculas y enlaces', p: '¿Cuáles son las biomoléculas inorgánicas y dónde aparecen?', r: 'El agua, las sales minerales y los gases. Aparecen en los seres vivos y también en la materia inerte, y son indispensables para las funciones vitales.' },

  { s: '3. Estructura del agua', p: '¿Qué porcentaje del peso de un ser vivo es agua?', r: 'Entre el 50% y el 95% de su peso (en torno al 70-90% en masa), según la especie, la edad y el tipo de tejido.' },
  { s: '3. Estructura del agua', p: '¿De qué tres factores depende la cantidad de agua de un organismo?', r: 'De la especie, de la edad del individuo y del tipo de tejido u órgano.' },
  { s: '3. Estructura del agua', p: '¿Cómo influye la especie en el contenido de agua? Pon un ejemplo.', r: 'Los organismos acuáticos tienen un porcentaje muy elevado (la medusa, un 95%) y las especies de zonas desérticas lo tienen muy bajo.' },
  { s: '3. Estructura del agua', p: '¿Cómo influye la edad en el contenido de agua?', r: 'Las estructuras biológicas de los organismos jóvenes tienen mayor proporción de agua que las de los individuos con mayor edad.' },
  { s: '3. Estructura del agua', p: '¿Por qué los tejidos más activos tienen más agua?', r: 'Porque las reacciones biológicas se llevan a cabo en un medio acuoso, así que los tejidos con gran actividad bioquímica contienen más agua que los pasivos.' },
  { s: '3. Estructura del agua', p: '¿Dónde se localiza el agua en el cuerpo?', r: 'Agua intracelular, agua circulante y agua intersticial.' },
  { s: '3. Estructura del agua', p: '¿Cuáles son las dos fuentes del agua de un organismo?', r: 'El agua exógena (la que se incorpora del exterior) y el agua endógena o metabólica (la producida en las reacciones de condensación).' },
  { s: '3. Estructura del agua', p: 'Describe la estructura de la molécula de agua.', r: 'Un átomo de O y dos de H unidos covalentemente, formando un ángulo de 104,5°. Geometría triangular.' },
  { s: '3. Estructura del agua', p: '¿Cuál es el ángulo de la molécula de agua?', r: '104,5°.' },
  { s: '3. Estructura del agua', p: '¿Cuántos electrones sin compartir tiene el oxígeno del agua y qué dos consecuencias tiene?', r: 'Cuatro. Consecuencias: una carga negativa débil en la zona donde se sitúan esos electrones, y la geometría triangular de la molécula.' },
  { s: '3. Estructura del agua', p: '¿El agua tiene carga eléctrica neta?', r: 'No, es eléctricamente neutra. Pero presenta cargas eléctricas parciales opuestas dentro de la molécula.' },
  { s: '3. Estructura del agua', p: '¿Dónde están las cargas parciales de la molécula de agua?', r: 'La zona de los electrones no compartidos del oxígeno es negativa; la zona donde se sitúan los hidrógenos es positiva. Por eso la molécula tiene carácter polar.' },
  { s: '3. Estructura del agua', p: '¿Qué hace que el agua sea altamente COHESIVA?', r: 'Los puentes de hidrógeno entre unas moléculas de agua y otras: la zona parcialmente negativa de una atrae a la parcialmente positiva de otra.' },
  { s: '3. Estructura del agua', p: '¿Qué hace que el agua sea altamente ADHESIVA?', r: 'Que también puede formar puentes de hidrógeno con otras moléculas polares distintas, como alcoholes o aminas.' },
  { s: '3. Estructura del agua', p: '¿Con cuántas otras moléculas de agua puede unirse una molécula por puentes de hidrógeno?', r: 'Hasta con cuatro.' },

  { s: '4. Propiedades del agua', p: 'Enumera las 8 propiedades del agua.', r: 'Poder disolvente, estado líquido, elevada tensión superficial, características térmicas (calor específico y de vaporización), menor densidad en estado sólido, capilaridad, casi incompresible e ionización.' },
  { s: '4. Propiedades del agua', p: '¿En qué consiste el poder disolvente del agua?', r: 'Su polaridad le permite interponerse entre los iones de las redes cristalinas, disminuyendo la atracción entre ellos y provocando su disolución.' },
  { s: '4. Propiedades del agua', p: '¿Cuál es la constante dieléctrica del agua y con qué se compara?', r: '80, frente a 24 del etanol. Es muy elevada, y por eso mantiene separados los iones de carga opuesta.' },
  { s: '4. Propiedades del agua', p: 'Además de compuestos iónicos, ¿qué otras moléculas disuelve el agua y cómo?', r: 'Moléculas no iónicas que tienen grupos polares, formando enlaces de hidrógeno con ellas (por ejemplo la sacarosa).' },
  { s: '4. Propiedades del agua', p: '¿Por qué es importante el poder disolvente para los seres vivos?', r: 'Porque las moléculas deben estar disueltas en un medio líquido para reaccionar entre sí: el agua es el medio donde ocurren las reacciones bioquímicas.' },
  { s: '4. Propiedades del agua', p: '¿Qué ventaja tiene que algunas biomoléculas sean INSOLUBLES en agua?', r: 'Los lípidos y ciertas proteínas, al ser insolubles, pueden construir estructuras celulares.' },
  { s: '4. Propiedades del agua', p: '¿Por qué el agua es líquida a temperatura ambiente?', r: 'Por la elevada fuerza de cohesión entre sus moléculas (puentes de hidrógeno).' },
  { s: '4. Propiedades del agua', p: '¿Qué moléculas parecidas al agua son gases a temperatura ambiente?', r: 'El amoníaco (NH₃) y el ácido sulfhídrico (H₂S).' },
  { s: '4. Propiedades del agua', p: '¿Para qué le sirve al organismo que el agua sea líquida?', r: 'Actúa como vehículo de transporte en el interior del organismo y como medio lubricante en las estructuras en movimiento.' },
  { s: '4. Propiedades del agua', p: '¿Por qué se produce la tensión superficial?', r: 'Las moléculas de la superficie solo están sometidas a las fuerzas de cohesión de las moléculas del interior, porque no hay cohesión con el aire. Se origina una fuerza neta hacia el interior.' },
  { s: '4. Propiedades del agua', p: '¿Cómo se comporta la superficie libre del agua por la tensión superficial?', r: 'Como una membrana elástica tensa.' },
  { s: '4. Propiedades del agua', p: '¿Qué importancia biológica tiene la tensión superficial?', r: 'Es la causa de la mayoría de las deformaciones celulares y de los movimientos citoplasmáticos, y permite que pequeños insectos se desplacen sobre el agua.' },
  { s: '4. Propiedades del agua', p: '¿Por qué el agua tiene elevado calor específico?', r: 'Porque parte de la energía aplicada se emplea en romper los enlaces de hidrógeno y no en elevar su temperatura, que sube y baja más lentamente que la de otros líquidos.' },
  { s: '4. Propiedades del agua', p: '¿Qué importancia biológica tiene el elevado calor específico?', r: 'Permite que los organismos acuáticos vivan con pocas fluctuaciones térmicas, y amortigua la temperatura corporal de los terrestres. Evita la alteración de las biomoléculas.' },
  { s: '4. Propiedades del agua', p: '¿Por qué el agua tiene elevado calor de vaporización?', r: 'Porque pasar de líquido a gas exige romper los enlaces de hidrógeno, lo que requiere un aporte considerable de energía que se toma del entorno, que se enfría.' },
  { s: '4. Propiedades del agua', p: 'Da dos ejemplos biológicos del calor de vaporización.', r: 'El cuerpo humano disipa el exceso de calor al evaporar el sudor; una hoja se mantiene fresca en presencia de luz intensa.' },
  { s: '4. Propiedades del agua', p: '¿Cuánto menos denso es el hielo que el agua líquida?', r: 'Aproximadamente un 10% menos denso, por eso flota.' },
  { s: '4. Propiedades del agua', p: '¿Qué ocurre con las moléculas de agua por debajo de 4 °C y a 0 °C?', r: 'Por debajo de 4 °C se acercan tanto que cada una forma enlaces de hidrógeno con otras cuatro; a 0 °C se forma una red espacial estable que ocupa más volumen que el agua líquida.' },
  { s: '4. Propiedades del agua', p: '¿Qué importancia biológica tiene que el hielo flote?', r: 'Al enfriarse ríos y mares, la superficie se congela pero el fondo sigue líquido porque el hielo actúa de aislante térmico. Los organismos acuáticos sobreviven bajo el hielo en invierno.' },
  { s: '4. Propiedades del agua', p: '¿Qué es la capilaridad y de qué depende?', r: 'La capacidad del agua de ascender por conductos estrechos. Depende de la cohesión entre sus moléculas (puentes de hidrógeno) combinada con la adhesión a otras superficies por su polaridad.' },
  { s: '4. Propiedades del agua', p: '¿Cuál es el ejemplo biológico clásico de capilaridad?', r: 'El ascenso de la savia bruta por los tubos del xilema en los vegetales.' },
  { s: '4. Propiedades del agua', p: '¿Por qué el agua es casi incompresible y para qué sirve?', r: 'Por el elevado grado de cohesión entre sus moléculas. Determina las deformaciones citoplasmáticas y permite actuar como esqueleto hidrostático en células vegetales y ciertos animales.' },
  { s: '4. Propiedades del agua', p: '¿Qué iones se producen en la ionización del agua?', r: 'H₃O⁺ (que se escribe H⁺ para simplificar) y OH⁻, con carga opuesta y en igual concentración.' },
  { s: '4. Propiedades del agua', p: '¿Qué es la hidrólisis?', r: 'La reacción en la que una molécula de agua rompe una molécula orgánica, obteniéndose moléculas sencillas a partir de otra mayor. Ej: sacarosa → glucosa + fructosa.' },
  { s: '4. Propiedades del agua', p: '¿Qué es la condensación y qué origina?', r: 'El proceso inverso a la hidrólisis: moléculas sencillas se unen para formar otras mayores, lo que origina moléculas de agua libre — el agua metabólica.' },
  { s: '4. Propiedades del agua', p: '¿Qué aporta el agua en la fotosíntesis?', r: 'Proporciona los H⁺ y los electrones necesarios para la síntesis de las moléculas orgánicas. Experimenta fotólisis y es la fuente de poder reductor.' },
  { s: '4. Propiedades del agua', p: 'Enumera las 7 funciones biológicas del agua.', r: 'Principal disolvente biológico; función metabólica; función estructural; función mecánica amortiguadora; función de transporte; función termorreguladora; y posibilitar la vida acuática en climas fríos.' },

  { s: '5. El agua con otras sustancias', p: '¿Cuáles son los 4 tipos de relación del agua con otras sustancias?', r: 'Disoluciones, dispersiones coloidales, emulsiones y estructuras orientadas.' },
  { s: '5. El agua con otras sustancias', p: '¿De qué depende el tipo de relación que el agua establece con una sustancia?', r: 'De la naturaleza de la sustancia (polar o apolar, soluble o insoluble) y del tamaño de las partículas dispersas en el agua.' },
  { s: '5. El agua con otras sustancias', p: '¿Con qué sustancias forma el agua disoluciones?', r: 'Con compuestos iónicos y sustancias polares de bajo peso molecular: sales minerales, monosacáridos, disacáridos y aminoácidos.' },
  { s: '5. El agua con otras sustancias', p: '¿Qué es la solvatación?', r: 'El proceso por el que el agua se interpone entre los iones de un compuesto iónico y los mantiene separados, disolviéndolo.' },
  { s: '5. El agua con otras sustancias', p: '¿Con qué sustancias forma el agua dispersiones coloidales?', r: 'Con macromoléculas de alto peso molecular: polisacáridos, proteínas y ácidos nucleicos. Es lo que ocurre en el citoplasma celular.' },
  { s: '5. El agua con otras sustancias', p: '¿Cuáles son las dos fases de un coloide?', r: 'La fase dispersa (el soluto) y la fase dispersante (el medio).' },
  { s: '5. El agua con otras sustancias', p: 'Diferencia entre estado SOL y estado GEL.', r: 'Sol: líquido, la fase dispersante es mayor que la dispersa (la pintura). Gel: gelatinoso o semisólido, el disolvente queda envuelto por el soluto (la gelatina). Se diferencian en la cantidad de agua y, por tanto, en la viscosidad.' },
  { s: '5. El agua con otras sustancias', p: '¿Qué causa la transformación de sol a gel y qué ejemplo lo ilustra?', r: 'La polimerización o despolimerización de algunas proteínas citoplasmáticas. Se aprecia en la formación de pseudópodos.' },
  { s: '5. El agua con otras sustancias', p: 'Da dos ejemplos de la utilidad de los coloides viscosos.', r: 'Mantienen la humedad de estructuras como el mucus del aparato respiratorio, y permiten el deslizamiento de animales como el caracol.' },
  { s: '5. El agua con otras sustancias', p: 'Enumera las 6 propiedades de los coloides.', r: 'Efecto Tyndall, movimiento browniano, sedimentación, elevada adsorción, elevada viscosidad y diálisis.' },
  { s: '5. El agua con otras sustancias', p: '¿Con qué sustancias forma el agua emulsiones?', r: 'Con sustancias totalmente apolares.' },
  { s: '5. El agua con otras sustancias', p: 'Diferencia entre emulsión transitoria y permanente.', r: 'Transitoria: agua + una sustancia apolar. Permanente: agua + una sustancia apolar + una sustancia anfipática, que actúa como emulgente.' },
  { s: '5. El agua con otras sustancias', p: '¿Qué son los emulgentes?', r: 'Las sustancias anfipáticas que permiten formar emulsiones permanentes.' },
  { s: '5. El agua con otras sustancias', p: '¿Con qué moléculas forma el agua estructuras orientadas y cuáles son?', r: 'Con moléculas anfipáticas, como los fosfolípidos. Forman monocapas, bicapas, micelas y liposomas.' },
  { s: '5. El agua con otras sustancias', p: '¿Por qué son importantes las estructuras orientadas?', r: 'Porque las bicapas de fosfolípidos son el origen de las membranas celulares: se forman solas porque es la disposición en la que las colas apolares quedan más lejos del agua.' },

  { s: '6. Sales minerales', p: '¿De qué dos formas se pueden encontrar las sales minerales?', r: 'Precipitadas en forma sólida (insolubles) o disueltas en forma de iones (solubles).' },
  { s: '6. Sales minerales', p: '¿Qué función tienen las sales minerales precipitadas?', r: 'Función estructural: constituyen estructuras sólidas como esqueletos y caparazones.' },
  { s: '6. Sales minerales', p: '¿Cuáles son los aniones más importantes de las sales disueltas?', r: 'Cl⁻, CO₃²⁻, HCO₃⁻, PO₄³⁻, SO₄²⁻ y nitrato.' },
  { s: '6. Sales minerales', p: '¿Cuáles son los cationes más importantes de las sales disueltas?', r: 'Na⁺, K⁺, Ca²⁺, Mg²⁺, Fe²⁺ y Fe³⁺.' },
  { s: '6. Sales minerales', p: '¿Cuáles son las 4 funciones de las sales minerales?', r: 'Funciones fisiológicas o bioquímicas; mantenimiento de las concentraciones osmóticas; mantenimiento del pH; y constitución de estructuras duras de sostén y protección.' },
  { s: '6. Sales minerales', p: 'Funciones del Na⁺.', r: 'Mantenimiento del equilibrio iónico y acuoso en el medio extracelular, y transmisión de la corriente eléctrica. Es el ion del líquido intersticial.' },
  { s: '6. Sales minerales', p: 'Funciones del K⁺.', r: 'Contracción muscular, regulación de la actividad cardiaca y transmisión de la corriente nerviosa. Es el ion del líquido intracelular.' },
  { s: '6. Sales minerales', p: 'Funciones del Ca²⁺.', r: 'Coagulación de la sangre, mineralización de estructuras esqueléticas, contracción muscular, regulación de la actividad cardiaca, transmisión sináptica, y activador y cofactor de algunas enzimas.' },
  { s: '6. Sales minerales', p: 'Funciones del Mg²⁺.', r: 'Regulador de la contracción muscular y de la transmisión nerviosa, constituyente de los ribosomas funcionales, y activador y cofactor de enzimas. Asociado a la clorofila, absorbe energía luminosa.' },
  { s: '6. Sales minerales', p: '¿Qué dos iones mantienen el potencial de membrana?', r: 'El Na⁺ y el K⁺.' },
  { s: '6. Sales minerales', p: '¿Qué función tiene el hierro?', r: 'Forma parte del grupo hemo y de la mioglobina: transporta el O₂.' },
  { s: '6. Sales minerales', p: '¿Qué función tiene el yodo?', r: 'Es constituyente de las hormonas tiroideas.' },
  { s: '6. Sales minerales', p: '¿Qué función tiene el flúor?', r: 'Forma parte de los huesos y previene la caries.' },
  { s: '6. Sales minerales', p: '¿Qué función tienen el azufre y el cobalto?', r: 'El azufre forma parte de aminoácidos como la metionina y la cisteína; el cobalto, de la vitamina B₁₂.' },
  { s: '6. Sales minerales', p: '¿Qué función tienen el fosfato, el cinc, el manganeso y el cromo?', r: 'PO₄: ácidos nucleicos y ATP. Zn: proteínas que se unen al ADN en la transcripción. Mn: fotólisis del agua en la fotosíntesis. Cr: potencia la actividad de la insulina.' },
  { s: '6. Sales minerales', p: '¿Qué ocurre si se altera el equilibrio de concentraciones iónicas?', r: 'Cualquier variación, por defecto o por exceso, puede provocar alteraciones graves o incluso letales.' },
  { s: '6. Sales minerales', p: '¿Cuáles son las sales precipitadas más abundantes?', r: 'Silicatos, carbonatos y fosfatos.' },
  { s: '6. Sales minerales', p: 'Funciones del carbonato cálcico.', r: 'Caparazones de foraminíferos; dureza de dientes y huesos de vertebrados; esqueleto externo de corales, conchas de gasterópodos y bivalvos y exoesqueleto de artrópodos; rigidez de esponjas y espinas de erizos de mar.' },
  { s: '6. Sales minerales', p: 'Funciones de los silicatos.', r: 'Espículas de algunas esponjas; caparazones de radiolarios y diatomeas; endurecen estructuras vegetales de gramíneas o del género Equisetum.' },
  { s: '6. Sales minerales', p: 'Función del fosfato cálcico.', r: 'Forma parte de la matriz mineral que compone los huesos de los vertebrados.' },
  { s: '6. Sales minerales', p: 'Enumera las funciones de las sales en disolución.', r: 'Mantener la homeostasis y la salinidad; regular la actividad enzimática (cofactores); regular la presión osmótica y el volumen celular; estabilizar las dispersiones coloidales; generar potenciales eléctricos; y regular el pH.' },

  { s: '7. Ósmosis y tonicidad', p: '¿Qué significa que las membranas celulares sean semipermeables?', r: 'Que dejan pasar el agua, pero no los solutos.' },
  { s: '7. Ósmosis y tonicidad', p: 'Define la ósmosis.', r: 'El mecanismo por el que el agua atraviesa una membrana semipermeable siempre desde el medio más diluido (hipotónico) al más concentrado (hipertónico), igualando las concentraciones a ambos lados.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Requiere energía la ósmosis?', r: 'No. Se realiza mediante un mecanismo de difusión simple y se utiliza universalmente en la biosfera.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué es la tonicidad?', r: 'La medida de la concentración de una disolución.' },
  { s: '7. Ósmosis y tonicidad', p: 'Define disolución hipertónica, hipotónica e isotónica.', r: 'Hipertónica: más concentrada. Hipotónica: más diluida. Isotónica: la misma concentración.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué le pasa a una célula en medio HIPERTÓNICO?', r: 'Sale agua y baja el volumen celular: se arruga y se deshidrata. Crenación en células animales, plasmólisis en células vegetales.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué le pasa a una célula en medio HIPOTÓNICO?', r: 'Entra agua y sube el volumen celular: se hincha y puede explotar. Hemólisis en células animales, turgencia en células vegetales.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué le pasa a una célula en medio ISOTÓNICO?', r: 'Se mantiene igual: el agua entra y sale en la misma cantidad. Hay equilibrio.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué orgánulo se encarga de la turgencia vegetal?', r: 'La vacuola.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué es la difusión?', r: 'El paso libre, a través de la membrana celular, de moléculas de pequeño tamaño como el O₂ y el CO₂, siempre desde el medio con mayor concentración al de menor.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué relación hay entre difusión y ósmosis?', r: 'La ósmosis es un caso especial de difusión, en el que lo que pasa es el agua y va del medio más diluido al más concentrado.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué es la diálisis y qué aplicación médica tiene?', r: 'La separación de moléculas de una dispersión coloidal según su tamaño: la membrana deja pasar el agua y los solutos de baja masa molecular. Se aplica en la filtración de sangre en la insuficiencia renal grave.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Qué es la osmorregulación?', r: 'Los mecanismos para regular la entrada y salida de agua, sales minerales y otras moléculas.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Cómo osmorregulan los vegetales?', r: 'En medios hipotónicos absorben por las raíces; en hipertónicos eliminan agua por los estomas y mueren. Las halófitas absorben gran cantidad de sales para poder absorber agua.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Cómo osmorregulan los animales de aguas continentales y los peces marinos?', r: 'Los de aguas continentales (medio hipotónico) producen gran cantidad de orina muy diluida. Los peces marinos (medio hipertónico), baja cantidad de orina muy concentrada, y eliminan sales por las branquias.' },
  { s: '7. Ósmosis y tonicidad', p: '¿Cómo osmorregulan las aves y reptiles marinos y los animales terrestres?', r: 'Aves y reptiles marinos tienen glándulas que eliminan sales. Los terrestres disminuyen la evaporación y la pérdida de agua en la orina.' },

  { s: '8. pH y tampones', p: '¿Qué ocurre con la [H⁺] al disolver un ácido y al disolver una base?', r: 'Con un ácido la concentración de protones aumenta; con una base, disminuye.' },
  { s: '8. pH y tampones', p: 'Define el pH y escribe su fórmula.', r: 'El logaritmo del inverso de la concentración de protones: pH = −log[H⁺].' },
  { s: '8. pH y tampones', p: 'Si la [H⁺] de una disolución es 10⁻⁵, ¿cuál es su pH?', r: '5.' },
  { s: '8. pH y tampones', p: '¿Entre qué valores oscila el pH y qué significa cada zona?', r: 'Entre 0 y 14. pH = 7 neutro, pH < 7 ácido, pH > 7 básico.' },
  { s: '8. pH y tampones', p: '¿Por qué es necesario mantener el pH constante?', r: 'Porque los líquidos biológicos tienen un grado de acidez determinado cuya variación altera la estructura y la función de las proteínas.' },
  { s: '8. pH y tampones', p: '¿Qué son los sistemas tampón y cómo actúan?', r: 'Tampones, buffer o amortiguadores: actúan como aceptores o donantes de H⁺ para compensar el exceso o el déficit de estos iones, manteniendo el pH constante.' },
  { s: '8. pH y tampones', p: '¿De qué están compuestos los tampones?', r: 'De un ácido débil y su base conjugada, o de una base débil y su ácido conjugado: dos especies iónicas en equilibrio.' },
  { s: '8. pH y tampones', p: '¿Qué tampón actúa EXTRAcelularmente y de qué está formado?', r: 'El tampón bicarbonato (o carbonato): H₂CO₃ y HCO₃⁻.' },
  { s: '8. pH y tampones', p: '¿Qué tampón actúa INTRAcelularmente y de qué está formado?', r: 'El tampón fosfato: ion dihidrógeno fosfato e ion monohidrógeno fosfato.' },
  { s: '8. pH y tampones', p: 'Ventajas del sistema tampón bicarbonato.', r: 'A pH 7,4 la relación ion/ácido es de 20/1; es un excelente amortiguador de ácidos en el medio extracelular; y es un sistema abierto, que permite eliminar CO₂ y ion bicarbonato.' },
  { s: '8. pH y tampones', p: '¿Cuál es la ventaja principal del tampón fosfato?', r: 'Su gran eficacia en el medio intracelular.' },
  { s: '8. pH y tampones', p: 'Diferencia entre tampones orgánicos e inorgánicos.', r: 'Orgánicos: proteínas, aminoácidos, tampón hemoglobina. Inorgánicos: tampón bicarbonato y tampón fosfato. Existen en todos los fluidos biológicos.' },

  { s: '9. Moléculas gaseosas', p: '¿Se encuentran libres las moléculas gaseosas en los seres vivos?', r: 'No. Las moléculas gaseosas imprescindibles para el metabolismo celular no se encuentran libres en el interior del organismo.' },
  { s: '9. Moléculas gaseosas', p: '¿Cómo se transporta el O₂?', r: 'Unido a la hemoglobina.' },
  { s: '9. Moléculas gaseosas', p: '¿Cómo se transporta el CO₂?', r: 'Puede unirse en pequeñas proporciones a la hemoglobina, o transportarse en el plasma en forma de bicarbonato.' },
  { s: '9. Moléculas gaseosas', p: '¿Cómo se encuentra el amoniaco en los seres vivos?', r: 'Disuelto en los líquidos biológicos.' },
  { s: '9. Moléculas gaseosas', p: '¿Cuál es prácticamente el único caso de moléculas gaseosas libres en seres vivos?', r: 'Los órganos de flotación de microalgas unicelulares, como Cyclotella meneghiniana.' },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  { s: '1. Bioelementos', q: '¿Qué son los bioelementos?', opts: ['Las moléculas de los seres vivos', 'Los elementos químicos presentes en las biomoléculas', 'Los orgánulos celulares', 'Las sales minerales precipitadas'], correct: 1, exp: 'Los bioelementos son los elementos químicos presentes en las moléculas de los seres vivos, denominadas biomoléculas.' },
  { s: '1. Bioelementos', q: 'De los 100 elementos químicos del universo, ¿cuántos son bioelementos?', opts: ['25', '50', '70', '92'], correct: 2, exp: 'De los 100 elementos químicos que conforman la materia del universo, 70 son bioelementos.' },
  { s: '1. Bioelementos', q: '¿Qué elemento es el único que coincide entre los bioelementos mayoritarios y los más abundantes de la corteza terrestre?', opts: ['El carbono', 'El oxígeno', 'El nitrógeno', 'El silicio'], correct: 1, exp: 'Los bioelementos mayoritarios NO coinciden, salvo el oxígeno, con los elementos más abundantes de la corteza terrestre.' },
  { s: '1. Bioelementos', q: '¿Por qué tener las capas electrónicas externas incompletas es una ventaja para un bioelemento?', opts: ['Porque facilita los enlaces covalentes', 'Porque los hace más pesados', 'Porque impide que reaccionen', 'Porque los vuelve radiactivos'], correct: 0, exp: 'Los seis bioelementos mayoritarios tienen las capas electrónicas externas incompletas, lo que facilita la formación de enlaces covalentes.' },
  { s: '1. Bioelementos', q: '¿Qué consecuencia tiene que los bioelementos tengan número atómico bajo?', opts: ['Que son inestables', 'Que los electrones compartidos están próximos al núcleo y las moléculas son estables', 'Que no forman enlaces', 'Que son insolubles'], correct: 1, exp: 'Un número atómico bajo implica que los electrones compartidos se hallan próximos al núcleo, y las moléculas formadas son estables.' },
  { s: '1. Bioelementos', q: '¿Por qué muchas biomoléculas son solubles en agua?', opts: ['Porque el C tiene valencia 4', 'Porque el O y el N son electronegativos, lo que las hace polares', 'Porque tienen número atómico alto', 'Porque forman redes cristalinas'], correct: 1, exp: 'Como el O y el N son electronegativos, muchas moléculas son polares y por ello solubles en agua.' },
  { s: '1. Bioelementos', q: '¿Cuál de estas NO es una razón por la que el carbono es el elemento clave de la materia viva?', opts: ['Es muy abundante y accesible', 'Es un elemento estable', 'Posee valencia 4 y forma cadenas', 'Es el elemento más abundante de la corteza terrestre'], correct: 3, exp: 'El carbono es clave por ser abundante y accesible, estable, tener valencia 4 y una gran facilidad para formar cadenas. No es el más abundante de la corteza.' },
  { s: '1. Bioelementos', q: '¿Qué valencia tiene el carbono?', opts: ['2', '3', '4', '6'], correct: 2, exp: 'El carbono posee valencia 4, lo que le da una gran facilidad para formar cadenas.' },
  { s: '1. Bioelementos', q: '¿Por qué el carbono y no el silicio, si ambos tienen 4 electrones de valencia?', opts: ['El Si no existe en la Tierra', 'En el C se distribuyen de forma tetragonal y sus enlaces son más estables', 'El Si no forma enlaces covalentes', 'El C tiene menos masa'], correct: 1, exp: 'Ambos tienen 4 electrones de valencia, pero en el C se distribuyen de forma tetragonal y los enlaces son más estables. Compara el CO₂ (gas) con el SiO₂ (sólido).' },
  { s: '1. Bioelementos', q: '¿Cuáles son los bioelementos primarios?', opts: ['Na, K, Ca, Mg y Cl', 'C, H, O, N, P y S', 'Fe, Mn, I, F y Co', 'C, Si, O y N'], correct: 1, exp: 'Los bioelementos primarios o mayoritarios son C, H, O, N, P y S, y suponen el 95% de la materia viva.' },
  { s: '1. Bioelementos', q: '¿Qué porcentaje de la materia viva suponen los bioelementos primarios?', opts: ['75%', '85%', '95%', '99,9%'], correct: 2, exp: 'Los bioelementos primarios suponen el 95% de la materia viva.' },
  { s: '1. Bioelementos', q: '¿Cuáles son los bioelementos secundarios?', opts: ['C, H, O, N, P y S', 'Na, K, Ca, Mg y Cl', 'Fe, Zn, I y Cu', 'Si, Al y Fe'], correct: 1, exp: 'Los bioelementos secundarios son Na, K, Ca, Mg y Cl, y suponen el 4,5% de la materia viva entre todos ellos.' },
  { s: '1. Bioelementos', q: '¿En qué proporción aparecen los oligoelementos?', opts: ['Menos del 0,1%', 'Entre el 1% y el 4%', 'Alrededor del 10%', 'Más del 20%'], correct: 0, exp: 'Los oligoelementos se encuentran en proporciones inferiores al 0,1%, pero son imprescindibles para la vida.' },
  { s: '1. Bioelementos', q: '¿Cuántos oligoelementos se han encontrado en TODOS los seres vivos?', opts: ['6', '14', '25', 'Todos, son los mismos'], correct: 1, exp: 'Los oligoelementos no son los mismos para todos los seres vivos: solo 14 de ellos se han encontrado en todos.' },

  { s: '2. Biomoléculas y enlaces', q: 'Otro nombre para las biomoléculas es…', opts: ['Principios inmediatos', 'Oligoelementos', 'Principios estructurales', 'Metabolitos primarios'], correct: 0, exp: 'Los bioelementos constituyen unas moléculas llamadas principios inmediatos o biomoléculas.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Cuáles son las fuerzas INTRAmoleculares?', opts: ['Puentes de hidrógeno y Van der Waals', 'Enlace covalente y enlace iónico', 'Interacciones electrostáticas y Van der Waals', 'Solo el enlace covalente'], correct: 1, exp: 'Las fuerzas intramoleculares son el enlace covalente y el enlace iónico.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Cuál de estas NO es una fuerza INTERmolecular?', opts: ['Interacciones electrostáticas', 'Fuerzas de Van der Waals', 'Puentes de hidrógeno', 'Enlace iónico'], correct: 3, exp: 'El enlace iónico es una fuerza intramolecular. Las intermoleculares son las interacciones electrostáticas, las de Van der Waals y los puentes de hidrógeno.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Cuál es el enlace más fuerte?', opts: ['El puente de hidrógeno', 'El covalente', 'El de Van der Waals', 'La interacción electrostática'], correct: 1, exp: 'El enlace covalente es el más fuerte, y permite que las moléculas se mantengan estables en el medio acuoso celular.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Cómo se produce el enlace covalente?', opts: ['Entre átomos con cargas opuestas', 'Cuando dos átomos con electrones de valencia desapareados los comparten', 'Por dipolos instantáneos', 'Por atracción entre radicales'], correct: 1, exp: 'El enlace covalente se produce cuando dos átomos con electrones de valencia desapareados los comparten y quedan unidos.' },
  { s: '2. Biomoléculas y enlaces', q: 'En un enlace covalente doble, cada átomo comparte…', opts: ['Un electrón', 'Dos electrones', 'Tres electrones', 'Cuatro electrones'], correct: 1, exp: 'Es doble si cada átomo comparte dos electrones. Ejemplo: el formaldehído.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué molécula es el ejemplo de enlace covalente triple?', opts: ['Metano', 'Formaldehído', 'Acetileno', 'Agua'], correct: 2, exp: 'El acetileno es el ejemplo de enlace triple; el metano de sencillo y el formaldehído de doble.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué mantiene unidas las cadenas carbonadas?', opts: ['Puentes de hidrógeno', 'Enlaces covalentes', 'Enlaces iónicos', 'Fuerzas de Van der Waals'], correct: 1, exp: 'Las cadenas carbonadas, constituyentes básicos de la materia viva, se mantienen unidas por enlaces covalentes, igual que los grupos funcionales unidos a ellas.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué tipo de biomoléculas da lugar el enlace iónico?', opts: ['Las orgánicas', 'Las inorgánicas', 'Solo las proteínas', 'Solo los lípidos'], correct: 1, exp: 'El enlace iónico da lugar a biomoléculas inorgánicas.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué forma el enlace iónico?', opts: ['Cadenas lineales', 'Redes cristalinas de agregados de aniones y cationes', 'Dobles hélices', 'Bicapas'], correct: 1, exp: 'El enlace iónico se produce entre elementos con cargas eléctricas opuestas y forma redes cristalinas de agregados de aniones y cationes.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué pasa si una proteína pierde sus enlaces iónicos internos?', opts: ['Nada relevante', 'Se altera su estructura tridimensional y pierde sus propiedades biológicas', 'Se vuelve más estable', 'Se convierte en un lípido'], correct: 1, exp: 'La pérdida de estos enlaces altera la estructura tridimensional de la biomolécula, provocando la pérdida de sus propiedades biológicas.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué molécula es el ejemplo típico de unión específica por enlace iónico?', opts: ['El ADN', 'La hemoglobina', 'La sacarosa', 'El colesterol'], correct: 1, exp: 'La hemoglobina es el ejemplo de unión específica de un catión inorgánico a una molécula orgánica por enlace iónico.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué permiten las estructuras cristalinas INSOLUBLES?', opts: ['El transporte de gases', 'Formar sistemas de sostén y órganos resistentes, como caparazones y esqueletos', 'La replicación del ADN', 'La fotosíntesis'], correct: 1, exp: 'Las estructuras cristalinas insolubles permiten la formación de sistemas de sostén y órganos resistentes, como caparazones y esqueletos.' },
  { s: '2. Biomoléculas y enlaces', q: 'Define el puente de hidrógeno.', opts: ['Un H unido covalentemente a un átomo muy electronegativo interacciona con un par de electrones de otro átomo electronegativo', 'Dos hidrógenos que comparten electrones', 'Un H que cede un electrón a un metal', 'Una atracción entre grupos apolares'], correct: 0, exp: 'Es la definición exacta del enlace o puente de hidrógeno.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué ventaja tiene que el puente de hidrógeno sea un enlace débil?', opts: ['Que consume menos energía al formarse', 'Que posibilita su fácil rotura y formación, clave en reacciones reversibles', 'Que impide las uniones transitorias', 'Que hace más rígidas las moléculas'], correct: 1, exp: 'Es menos fuerte que las fuerzas intramoleculares, lo cual posibilita su fácil rotura y formación entre moléculas: fundamental en reacciones reversibles y uniones transitorias del metabolismo.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué macromolécula estabilizan los puentes de hidrógeno consolidando su doble hélice?', opts: ['El almidón', 'El ADN', 'La celulosa', 'El glucógeno'], correct: 1, exp: 'Los puentes de hidrógeno son estabilizadores de estructuras en macromoléculas como el ADN, en el que consolidan la doble hélice.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Entre qué tipo de grupos actúan las fuerzas de Van der Waals?', opts: ['Entre grupos polares', 'Entre grupos NO polares', 'Entre iones', 'Entre ácidos y bases'], correct: 1, exp: 'Son atracciones moleculares entre grupos no polares, causadas por dipolos instantáneos originados por la variación de la nube de electrones.' },
  { s: '2. Biomoléculas y enlaces', q: '¿En qué proceso inmunitario son fundamentales las fuerzas de Van der Waals?', opts: ['La fagocitosis', 'Las uniones antígeno-anticuerpo', 'La fiebre', 'La coagulación'], correct: 1, exp: 'Son uniones muy débiles, temporales e inespecíficas, fundamentales para mantener la conformación de macromoléculas y en las uniones antígeno-anticuerpo.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Cuál es el único material al que un gecko NO puede adherirse?', opts: ['El vidrio', 'El teflón', 'El metal pulido', 'La cerámica'], correct: 1, exp: 'El único material al que un gecko no puede adherirse es el teflón.' },
  { s: '2. Biomoléculas y enlaces', q: '¿Qué caracteriza a las biomoléculas inorgánicas?', opts: ['Que están formadas por cadenas de carbono', 'Que NO están formadas por cadenas de carbono', 'Que solo aparecen en seres vivos', 'Que no intervienen en funciones vitales'], correct: 1, exp: 'Las biomoléculas inorgánicas no están formadas por cadenas de carbono. Aparecen en los seres vivos y en la materia inerte, y son indispensables para las funciones vitales.' },

  { s: '3. Estructura del agua', q: '¿Cuál es la molécula más abundante en los seres vivos?', opts: ['Las proteínas', 'El agua', 'Los glúcidos', 'Las sales minerales'], correct: 1, exp: 'El agua es la molécula más abundante de todos los seres vivos, entre el 50% y el 95% de su peso.' },
  { s: '3. Estructura del agua', q: '¿De qué tres factores depende la cantidad de agua de un organismo?', opts: ['Especie, edad y tipo de tejido', 'Especie, clima y alimentación', 'Edad, sexo y peso', 'Tejido, temperatura y pH'], correct: 0, exp: 'La cantidad de agua depende de la especie, de la edad del individuo y del tipo de tejido u órgano.' },
  { s: '3. Estructura del agua', q: '¿Qué porcentaje de agua tiene una medusa?', opts: ['56%', '70%', '86%', '95%'], correct: 3, exp: 'Los organismos acuáticos tienen un porcentaje muy elevado de agua: la medusa, un 95%.' },
  { s: '3. Estructura del agua', q: '¿Por qué los tejidos con gran actividad bioquímica tienen más agua?', opts: ['Porque pesan más', 'Porque las reacciones biológicas se llevan a cabo en medio acuoso', 'Porque tienen más sales', 'Porque están más vascularizados'], correct: 1, exp: 'Dado que las reacciones biológicas se llevan a cabo en un medio acuoso, los tejidos con gran actividad bioquímica contienen una proporción mayor de agua que los más pasivos.' },
  { s: '3. Estructura del agua', q: '¿Cuáles son las tres localizaciones del agua en el cuerpo?', opts: ['Intracelular, circulante e intersticial', 'Exógena, endógena y metabólica', 'Plasmática, linfática y celular', 'Libre, ligada y estructural'], correct: 0, exp: 'El agua se localiza como agua intracelular, agua circulante y agua intersticial.' },
  { s: '3. Estructura del agua', q: '¿Qué es el agua endógena o metabólica?', opts: ['La que se bebe', 'La que se produce en las propias reacciones del organismo', 'La del líquido intersticial', 'La de los alimentos'], correct: 1, exp: 'El agua endógena o metabólica es la que se produce en las reacciones de condensación del propio organismo, frente al agua exógena que se incorpora del exterior.' },
  { s: '3. Estructura del agua', q: '¿Cuál es el ángulo de la molécula de agua?', opts: ['90°', '104,5°', '109,5°', '120°'], correct: 1, exp: 'Los átomos de hidrógeno forman un ángulo de 104,5° respecto al oxígeno.' },
  { s: '3. Estructura del agua', q: '¿Cuántos electrones sin compartir posee el oxígeno del agua?', opts: ['Dos', 'Tres', 'Cuatro', 'Seis'], correct: 2, exp: 'El oxígeno posee cuatro electrones más sin compartir, lo que crea una carga negativa débil en esa zona y determina la geometría triangular.' },
  { s: '3. Estructura del agua', q: '¿Qué geometría tiene la molécula de agua?', opts: ['Lineal', 'Triangular', 'Tetraédrica plana', 'Hexagonal'], correct: 1, exp: 'Los electrones no compartidos del oxígeno determinan la geometría triangular de la molécula de agua.' },
  { s: '3. Estructura del agua', q: '¿Tiene el agua carga eléctrica neta?', opts: ['Sí, es negativa', 'Sí, es positiva', 'No, es eléctricamente neutra pero con cargas parciales opuestas', 'No tiene ninguna carga en absoluto'], correct: 2, exp: 'El agua es eléctricamente neutra, sin carga neta, pero en su molécula aparecen cargas eléctricas parciales opuestas. Por eso es polar.' },
  { s: '3. Estructura del agua', q: '¿Qué hace que el agua sea altamente ADHESIVA?', opts: ['Los puentes de H entre moléculas de agua', 'Los puentes de H que forma con otras moléculas polares como alcoholes y aminas', 'Su elevada densidad', 'Su geometría lineal'], correct: 1, exp: 'Los puentes de hidrógeno entre moléculas de agua la hacen cohesiva; los que forma con otras moléculas polares distintas (alcoholes, aminas) la hacen adhesiva.' },
  { s: '3. Estructura del agua', q: '¿Con cuántas moléculas de agua puede unirse una molécula por puentes de hidrógeno?', opts: ['Con una', 'Con dos', 'Con tres', 'Con cuatro'], correct: 3, exp: 'Cada molécula de agua puede formar enlaces de hidrógeno con otras cuatro.' },

  { s: '4. Propiedades del agua', q: '¿Cuál es la constante dieléctrica del agua?', opts: ['24', '40', '80', '100'], correct: 2, exp: 'La constante dieléctrica del agua es muy elevada: 80, frente a 24 del etanol.' },
  { s: '4. Propiedades del agua', q: '¿Por qué es fundamental el poder disolvente del agua?', opts: ['Porque enfría el organismo', 'Porque las moléculas deben estar disueltas para reaccionar entre sí', 'Porque aumenta la densidad celular', 'Porque impide la hidrólisis'], correct: 1, exp: 'Las moléculas deben encontrarse disueltas en un medio líquido para reaccionar entre sí, así que el agua es el medio donde ocurren las reacciones bioquímicas.' },
  { s: '4. Propiedades del agua', q: '¿Qué ventaja tiene que los lípidos sean INSOLUBLES en agua?', opts: ['Les permite construir estructuras celulares', 'Les permite transportar oxígeno', 'Les permite regular el pH', 'Ninguna, es una desventaja'], correct: 0, exp: 'Algunas biomoléculas (lípidos y ciertas proteínas) son insolubles en agua, lo que les permite llevar a cabo funciones como construir estructuras celulares.' },
  { s: '4. Propiedades del agua', q: '¿Qué moléculas parecidas al agua son GASES a temperatura ambiente?', opts: ['CO₂ y CH₄', 'NH₃ y H₂S', 'O₂ y N₂', 'SiO₂ y CaCO₃'], correct: 1, exp: 'El amoníaco (NH₃) y el ácido sulfhídrico (H₂S), químicamente relacionados con el agua, son gases a temperatura ambiente. El agua es líquida por su elevada cohesión.' },
  { s: '4. Propiedades del agua', q: '¿Por qué se origina la tensión superficial?', opts: ['Porque las moléculas de la superficie solo reciben fuerzas de cohesión del interior', 'Porque el aire empuja hacia abajo', 'Porque el agua se evapora', 'Por la gravedad'], correct: 0, exp: 'Las moléculas de la superficie solo están sometidas a las fuerzas de cohesión de las moléculas del interior, ya que no hay cohesión con el aire. Se origina una fuerza neta hacia dentro.' },
  { s: '4. Propiedades del agua', q: '¿Cuál de estas NO es una consecuencia de la tensión superficial?', opts: ['Las deformaciones celulares', 'Los movimientos citoplasmáticos', 'Que los insectos ligeros caminen sobre el agua', 'El ascenso de la savia por el xilema'], correct: 3, exp: 'El ascenso de la savia bruta por el xilema se debe a la capilaridad, no a la tensión superficial.' },
  { s: '4. Propiedades del agua', q: '¿Por qué el agua tiene elevado calor específico?', opts: ['Porque es muy densa', 'Porque parte del calor se emplea en romper enlaces de hidrógeno y no en subir la temperatura', 'Porque es incompresible', 'Porque tiene geometría triangular'], correct: 1, exp: 'Al aplicar calor, parte de la energía se emplea en romper los enlaces de hidrógeno y no en elevar la temperatura, que asciende y desciende más lentamente que en otros líquidos.' },
  { s: '4. Propiedades del agua', q: 'El sudor refrigera el cuerpo gracias a…', opts: ['El elevado calor específico', 'El elevado calor de vaporización', 'La tensión superficial', 'La capilaridad'], correct: 1, exp: 'Al evaporarse, el agua toma energía térmica del medio y el conjunto se enfría: es el elevado calor de vaporización.' },
  { s: '4. Propiedades del agua', q: '¿Cuánto menos denso es el hielo que el agua líquida?', opts: ['Un 1%', 'Un 10%', 'Un 25%', 'Un 50%'], correct: 1, exp: 'La densidad del hielo es aproximadamente un 10% menor que la del agua líquida, lo que permite que flote.' },
  { s: '4. Propiedades del agua', q: '¿Qué ocurre a 0 °C con las moléculas de agua?', opts: ['Se separan del todo', 'Se forma una red espacial estable que ocupa más volumen', 'Pierden los puentes de hidrógeno', 'Se vuelven apolares'], correct: 1, exp: 'A 0 °C se forma una red espacial estable que ocupa más volumen que el agua líquida, por lo que el hielo es menos denso y flota.' },
  { s: '4. Propiedades del agua', q: '¿Por qué sobreviven los peces bajo el hielo en invierno?', opts: ['Porque el hielo aporta oxígeno', 'Porque la capa de hielo superficial actúa como aislante térmico y el fondo sigue líquido', 'Porque bajan su metabolismo a cero', 'Porque el agua no se congela nunca'], correct: 1, exp: 'La superficie se congela pero el fondo permanece líquido, porque la capa de hielo actúa como aislante térmico.' },
  { s: '4. Propiedades del agua', q: 'La capilaridad resulta de combinar…', opts: ['Cohesión y adhesión', 'Densidad y viscosidad', 'Ionización y polaridad', 'Tensión superficial y presión'], correct: 0, exp: 'La cohesión entre moléculas de agua por enlaces de hidrógeno, combinada con la adhesión a otras superficies por su polaridad, permite el ascenso por conductos estrechos.' },
  { s: '4. Propiedades del agua', q: '¿Cuál es el ejemplo biológico clásico de capilaridad?', opts: ['El sudor', 'El ascenso de la savia bruta por el xilema', 'La contracción muscular', 'La coagulación'], correct: 1, exp: 'La capilaridad es fundamental para el ascenso de la savia bruta por los tubos del xilema en los vegetales.' },
  { s: '4. Propiedades del agua', q: '¿Qué permite que el agua actúe como esqueleto hidrostático?', opts: ['Su poder disolvente', 'Que sea casi incompresible', 'Su ionización', 'Su calor de vaporización'], correct: 1, exp: 'Al ser casi incompresible por la elevada cohesión, determina las deformaciones citoplasmáticas y actúa como esqueleto hidrostático.' },
  { s: '4. Propiedades del agua', q: '¿Qué iones se obtienen en la ionización del agua?', opts: ['H⁺ y O²⁻', 'H₃O⁺ y OH⁻', 'H₂ y O₂', 'Na⁺ y Cl⁻'], correct: 1, exp: 'Se obtienen H₃O⁺ (H⁺ para simplificar) y OH⁻, dos iones con carga opuesta y en igual concentración.' },
  { s: '4. Propiedades del agua', q: '¿Qué es la hidrólisis?', opts: ['La unión de moléculas sencillas para formar otras mayores', 'La rotura de una molécula orgánica por una molécula de agua', 'La evaporación del agua celular', 'La ionización del agua'], correct: 1, exp: 'En la hidrólisis una molécula de agua rompe una molécula orgánica, obteniéndose moléculas sencillas a partir de otra mayor.' },
  { s: '4. Propiedades del agua', q: '¿Qué proceso origina el agua metabólica?', opts: ['La hidrólisis', 'La condensación', 'La ósmosis', 'La diálisis'], correct: 1, exp: 'En la condensación, moléculas sencillas se unen para obtener otras mayores, lo que origina moléculas de agua libre: el agua metabólica.' },
  { s: '4. Propiedades del agua', q: '¿Qué aporta el agua en la fotosíntesis?', opts: ['El CO₂', 'Los H⁺ y los electrones necesarios para sintetizar moléculas orgánicas', 'El nitrógeno', 'La clorofila'], correct: 1, exp: 'El agua interviene en la fotosíntesis proporcionando los H⁺ y los electrones necesarios para la síntesis de moléculas orgánicas. Es la fuente de poder reductor.' },

  { s: '5. El agua con otras sustancias', q: '¿Cuáles son los 4 tipos de relación del agua con otras sustancias?', opts: ['Disoluciones, coloides, emulsiones y estructuras orientadas', 'Ósmosis, difusión, diálisis y solvatación', 'Sol, gel, micela y bicapa', 'Hidrólisis, condensación, ionización y fotólisis'], correct: 0, exp: 'Se distinguen cuatro tipos: disoluciones, dispersiones coloidales, emulsiones y estructuras orientadas.' },
  { s: '5. El agua con otras sustancias', q: '¿Qué sustancias forman DISOLUCIONES con el agua?', opts: ['Macromoléculas como las proteínas', 'Sustancias iónicas y polares de bajo peso molecular', 'Sustancias totalmente apolares', 'Moléculas anfipáticas'], correct: 1, exp: 'Forman disoluciones las sales minerales y las moléculas orgánicas de masa molecular no muy elevada: monosacáridos, disacáridos, aminoácidos.' },
  { s: '5. El agua con otras sustancias', q: '¿Qué sustancias forman DISPERSIONES COLOIDALES?', opts: ['Los monosacáridos', 'Las macromoléculas: polisacáridos, proteínas y ácidos nucleicos', 'Las sales minerales', 'Los gases'], correct: 1, exp: 'Las macromoléculas originan dispersiones coloidales, algo que ocurre en el citoplasma celular.' },
  { s: '5. El agua con otras sustancias', q: '¿Cuáles son las dos fases de un coloide?', opts: ['Sólida y líquida', 'Fase dispersa y fase dispersante', 'Ácida y básica', 'Interna y externa'], correct: 1, exp: 'Un coloide tiene dos fases: la fase dispersa (el soluto) y la fase dispersante (el medio).' },
  { s: '5. El agua con otras sustancias', q: '¿Qué caracteriza al estado GEL?', opts: ['Es líquido y poco viscoso', 'Es gelatinoso o semisólido, con el disolvente envuelto por el soluto', 'No contiene agua', 'Es una emulsión permanente'], correct: 1, exp: 'El gel es gelatinoso o semisólido: el disolvente queda envuelto por el soluto. La gelatina es un gel; la pintura, un sol.' },
  { s: '5. El agua con otras sustancias', q: '¿Qué proceso celular ilustra el cambio de sol a gel?', opts: ['La mitosis', 'La formación de pseudópodos', 'La respiración celular', 'La síntesis de proteínas'], correct: 1, exp: 'La polimerización o despolimerización de algunas proteínas citoplasmáticas causa la transformación de un estado en otro, como se aprecia en la formación de pseudópodos.' },
  { s: '5. El agua con otras sustancias', q: '¿Cuál de estas NO es una propiedad de los coloides?', opts: ['Efecto Tyndall', 'Movimiento browniano', 'Elevada adsorción', 'Ionización'], correct: 3, exp: 'Las propiedades de los coloides son: efecto Tyndall, movimiento browniano, sedimentación, elevada adsorción, elevada viscosidad y diálisis.' },
  { s: '5. El agua con otras sustancias', q: '¿Con qué sustancias forma el agua EMULSIONES?', opts: ['Con sustancias iónicas', 'Con sustancias totalmente apolares', 'Con macromoléculas polares', 'Con sales minerales'], correct: 1, exp: 'El agua forma emulsiones con sustancias totalmente apolares.' },
  { s: '5. El agua con otras sustancias', q: '¿Qué diferencia a una emulsión permanente de una transitoria?', opts: ['La temperatura', 'Que la permanente lleva además una sustancia anfipática (emulgente)', 'Que la permanente no lleva agua', 'Que la transitoria es más densa'], correct: 1, exp: 'Las transitorias las forman agua y una sustancia apolar; las permanentes, agua, una sustancia apolar y una anfipática, que actúa de emulgente.' },
  { s: '5. El agua con otras sustancias', q: '¿Qué tipo de moléculas forman las estructuras orientadas?', opts: ['Las moléculas iónicas', 'Las moléculas anfipáticas, como los fosfolípidos', 'Los monosacáridos', 'Los gases disueltos'], correct: 1, exp: 'El agua origina estructuras orientadas con moléculas anfipáticas, como los fosfolípidos: monocapas, bicapas, micelas y liposomas.' },
  { s: '5. El agua con otras sustancias', q: '¿Cuál de estas NO es una estructura orientada?', opts: ['Micela', 'Bicapa', 'Liposoma', 'Coloide'], correct: 3, exp: 'Las estructuras orientadas son monocapas, bicapas, micelas y liposomas. El coloide es otro tipo de relación del agua con la materia.' },

  { s: '6. Sales minerales', q: '¿De qué dos formas se encuentran las sales minerales?', opts: ['Precipitadas en forma sólida o disueltas en forma de iones', 'Solo disueltas', 'En estado gaseoso o líquido', 'Unidas siempre a proteínas'], correct: 0, exp: 'Las sales minerales pueden encontrarse precipitadas en forma sólida o disueltas en forma de iones.' },
  { s: '6. Sales minerales', q: '¿Qué función tienen las sales minerales precipitadas?', opts: ['Reguladora', 'Estructural: forman estructuras sólidas como esqueletos y caparazones', 'Energética', 'De transporte de gases'], correct: 1, exp: 'Las sales insolubles se encuentran precipitadas y constituyen estructuras sólidas en los seres vivos, como esqueletos o caparazones.' },
  { s: '6. Sales minerales', q: '¿Cuál de estos es un CATIÓN de las sales disueltas?', opts: ['Cl⁻', 'HCO₃⁻', 'Mg²⁺', 'PO₄³⁻'], correct: 2, exp: 'Los cationes son Na⁺, K⁺, Ca²⁺, Mg²⁺, Fe²⁺ y Fe³⁺. Los demás de la lista son aniones.' },
  { s: '6. Sales minerales', q: '¿Qué ion es característico del líquido INTRAcelular?', opts: ['Na⁺', 'K⁺', 'Cl⁻', 'Ca²⁺'], correct: 1, exp: 'El K⁺ es el ion del líquido intracelular; el Na⁺ y el Cl⁻ lo son del líquido intersticial.' },
  { s: '6. Sales minerales', q: '¿Cuál de estas NO es una función del Ca²⁺?', opts: ['Coagulación de la sangre', 'Mineralización de estructuras esqueléticas', 'Transmisión sináptica', 'Constituyente de los ribosomas funcionales'], correct: 3, exp: 'Ser constituyente de los ribosomas funcionales es función del Mg²⁺, no del Ca²⁺.' },
  { s: '6. Sales minerales', q: '¿Qué catión está asociado a la clorofila?', opts: ['Fe²⁺', 'Mg²⁺', 'Ca²⁺', 'K⁺'], correct: 1, exp: 'El Mg asociado a la clorofila absorbe la energía luminosa.' },
  { s: '6. Sales minerales', q: '¿Qué dos iones mantienen el potencial de membrana?', opts: ['Ca²⁺ y Mg²⁺', 'Na⁺ y K⁺', 'Fe²⁺ y Cu²⁺', 'Cl⁻ y HCO₃⁻'], correct: 1, exp: 'El Na⁺ y el K⁺ mantienen el potencial de membrana.' },
  { s: '6. Sales minerales', q: '¿Qué ion forma parte del grupo hemo y de la mioglobina?', opts: ['Zn', 'Fe', 'I', 'Co'], correct: 1, exp: 'El Fe forma parte del grupo hemo y de la mioglobina: transporta el O₂.' },
  { s: '6. Sales minerales', q: '¿Qué elemento es constituyente de las hormonas tiroideas?', opts: ['El flúor', 'El yodo', 'El cromo', 'El manganeso'], correct: 1, exp: 'El yodo es constituyente de las hormonas tiroideas.' },
  { s: '6. Sales minerales', q: '¿Qué elemento participa en la fotólisis del agua en la fotosíntesis?', opts: ['El manganeso', 'El cinc', 'El cobalto', 'El azufre'], correct: 0, exp: 'El Mn participa en la fotólisis del agua en la fotosíntesis.' },
  { s: '6. Sales minerales', q: '¿Qué elemento forma parte de la vitamina B₁₂?', opts: ['El hierro', 'El cobalto', 'El cinc', 'El flúor'], correct: 1, exp: 'El cobalto forma parte de la vitamina B₁₂.' },
  { s: '6. Sales minerales', q: '¿Cuáles son las sales precipitadas más abundantes?', opts: ['Cloruros, nitratos y sulfatos', 'Silicatos, carbonatos y fosfatos', 'Óxidos, hidróxidos y sulfuros', 'Sodio, potasio y calcio'], correct: 1, exp: 'Las sales precipitadas más abundantes son los silicatos, los carbonatos y los fosfatos.' },
  { s: '6. Sales minerales', q: '¿Qué sal forma los caparazones de radiolarios y diatomeas?', opts: ['Carbonato cálcico', 'Silicatos', 'Fosfato cálcico', 'Cloruro sódico'], correct: 1, exp: 'Los silicatos forman las espículas de algunas esponjas y los caparazones de radiolarios y diatomeas.' },
  { s: '6. Sales minerales', q: '¿Qué sal forma parte de la matriz mineral de los huesos de los vertebrados?', opts: ['El silicato', 'El fosfato cálcico', 'El cloruro sódico', 'El nitrato potásico'], correct: 1, exp: 'El fosfato cálcico forma parte de la matriz mineral que compone los huesos de los vertebrados.' },
  { s: '6. Sales minerales', q: '¿Qué sal aporta rigidez a las espinas de los erizos de mar y a las conchas de bivalvos?', opts: ['El carbonato cálcico', 'El silicato', 'El fosfato cálcico', 'El sulfato de magnesio'], correct: 0, exp: 'El carbonato cálcico forma el esqueleto externo de corales, conchas de gasterópodos y bivalvos, exoesqueleto de artrópodos, y da rigidez a esponjas y espinas de erizos de mar.' },

  { s: '7. Ósmosis y tonicidad', q: '¿Qué significa que una membrana sea semipermeable?', opts: ['Que deja pasar todo', 'Que deja pasar el agua pero no los solutos', 'Que deja pasar los solutos pero no el agua', 'Que no deja pasar nada'], correct: 1, exp: 'Las membranas celulares son semipermeables: dejan pasar el agua, pero no los solutos.' },
  { s: '7. Ósmosis y tonicidad', q: '¿En qué dirección se mueve el agua en la ósmosis?', opts: ['Del medio más concentrado al más diluido', 'Del medio más diluido (hipotónico) al más concentrado (hipertónico)', 'Siempre hacia fuera de la célula', 'Siempre hacia dentro de la célula'], correct: 1, exp: 'En la ósmosis el agua atraviesa la membrana siempre desde el medio más diluido (hipotónico) al más concentrado (hipertónico).' },
  { s: '7. Ósmosis y tonicidad', q: '¿Requiere energía la ósmosis?', opts: ['Sí, consume ATP', 'No, es un mecanismo de difusión simple', 'Solo en células animales', 'Solo en medios hipertónicos'], correct: 1, exp: 'La ósmosis no requiere energía: se realiza mediante un mecanismo de difusión simple y se utiliza universalmente en la biosfera.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Qué es una disolución hipertónica?', opts: ['La que está más diluida', 'La que está más concentrada', 'La que tiene la misma concentración', 'La que no tiene solutos'], correct: 1, exp: 'Una disolución es hipertónica cuando está más concentrada; hipotónica cuando está más diluida; e isotónica cuando tiene la misma concentración.' },
  { s: '7. Ósmosis y tonicidad', q: 'Una célula ANIMAL en medio hipertónico sufre…', opts: ['Hemólisis', 'Crenación', 'Turgencia', 'Plasmólisis'], correct: 1, exp: 'En medio hipertónico sale agua y baja el volumen celular: crenación en células animales y plasmólisis en células vegetales.' },
  { s: '7. Ósmosis y tonicidad', q: 'Una célula VEGETAL en medio hipotónico sufre…', opts: ['Plasmólisis', 'Turgencia', 'Crenación', 'Hemólisis'], correct: 1, exp: 'En medio hipotónico entra agua y sube el volumen celular: hemólisis en células animales y turgencia en células vegetales.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Qué le ocurre a una célula en medio isotónico?', opts: ['Se hincha', 'Se arruga', 'Se mantiene igual: entra y sale la misma cantidad de agua', 'Explota'], correct: 2, exp: 'En medio isotónico hay equilibrio: el agua entra y sale en la misma cantidad y la célula se mantiene igual.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Qué orgánulo se encarga de la turgencia vegetal?', opts: ['El cloroplasto', 'La vacuola', 'La mitocondria', 'El aparato de Golgi'], correct: 1, exp: 'La turgescencia vegetal corre a cargo de la vacuola.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Qué moléculas pasan por difusión simple?', opts: ['Las proteínas', 'Moléculas de pequeño tamaño como O₂ y CO₂', 'Los polisacáridos', 'Los ácidos nucleicos'], correct: 1, exp: 'La difusión es el paso libre a través de la membrana de moléculas de pequeño tamaño, como O₂ y CO₂, siempre de mayor a menor concentración.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Qué es la diálisis?', opts: ['El paso de agua de menor a mayor concentración', 'La separación de moléculas de una dispersión coloidal según su tamaño', 'La rotura de moléculas por el agua', 'La formación de micelas'], correct: 1, exp: 'La diálisis es la separación de moléculas de una dispersión coloidal según su tamaño. Se aplica en la filtración de sangre en la insuficiencia renal grave.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Cómo osmorregulan los peces marinos?', opts: ['Gran cantidad de orina muy diluida', 'Baja cantidad de orina muy concentrada y eliminación de sales por las branquias', 'No osmorregulan', 'Mediante glándulas de sal en la cabeza'], correct: 1, exp: 'Los peces marinos viven en medio hipertónico: producen baja cantidad de orina muy concentrada y eliminan sales por las branquias.' },
  { s: '7. Ósmosis y tonicidad', q: '¿Qué son las plantas halófitas?', opts: ['Las que viven sin agua', 'Las que absorben gran cantidad de sales para poder absorber agua', 'Las que crecen en la sombra', 'Las que no tienen estomas'], correct: 1, exp: 'Las plantas halófitas absorben gran cantidad de sales, y así consiguen absorber agua en medios hipertónicos.' },

  { s: '8. pH y tampones', q: '¿Cómo se define el pH?', opts: ['Como la concentración de OH⁻', 'Como el logaritmo del inverso de la concentración de protones', 'Como la cantidad de sales disueltas', 'Como la temperatura de una disolución'], correct: 1, exp: 'El pH se define como el logaritmo del inverso de la concentración de protones: pH = −log[H⁺].' },
  { s: '8. pH y tampones', q: 'Si la [H⁺] de una disolución es 10⁻⁵, su pH es…', opts: ['3', '5', '7', '9'], correct: 1, exp: 'El pH de una disolución cuya [H⁺] es de 10⁻⁵ será 5.' },
  { s: '8. pH y tampones', q: '¿Entre qué valores oscila el pH?', opts: ['0 y 7', '0 y 14', '1 y 10', '−7 y 7'], correct: 1, exp: 'Los valores de pH pueden oscilar entre 0 y 14: pH 7 neutro, menor que 7 ácido y mayor que 7 básico.' },
  { s: '8. pH y tampones', q: '¿Por qué es crítico mantener el pH constante?', opts: ['Porque altera el color de los tejidos', 'Porque su variación altera la estructura y la función de las proteínas', 'Porque cambia la temperatura corporal', 'Porque afecta a la densidad del agua'], correct: 1, exp: 'Los líquidos biológicos tienen un grado de acidez determinado cuya variación altera la estructura y la función de las proteínas.' },
  { s: '8. pH y tampones', q: '¿Cómo actúan los sistemas tampón?', opts: ['Eliminando todas las sales', 'Como aceptores o donantes de H⁺ para compensar su exceso o déficit', 'Aumentando siempre el pH', 'Bloqueando las reacciones bioquímicas'], correct: 1, exp: 'Los tampones, buffer o amortiguadores actúan como aceptores o donantes de H⁺ para compensar el exceso o el déficit de estos iones, manteniendo el pH constante.' },
  { s: '8. pH y tampones', q: '¿De qué están compuestos los sistemas tampón?', opts: ['De un ácido fuerte y una base fuerte', 'De un ácido débil y su base conjugada', 'De dos ácidos fuertes', 'De sales precipitadas'], correct: 1, exp: 'Los tampones están compuestos por un ácido débil y su base conjugada (o una base débil y su ácido conjugado): dos especies iónicas en equilibrio.' },
  { s: '8. pH y tampones', q: '¿Qué tampón actúa EXTRAcelularmente?', opts: ['El tampón fosfato', 'El tampón bicarbonato', 'El tampón hemoglobina', 'El tampón cloruro'], correct: 1, exp: 'El tampón carbonato o bicarbonato (H₂CO₃ y HCO₃⁻) actúa extracelularmente; el tampón fosfato actúa intracelularmente.' },
  { s: '8. pH y tampones', q: '¿Qué tampón actúa INTRAcelularmente?', opts: ['El tampón bicarbonato', 'El tampón fosfato', 'El tampón acetato', 'El tampón amonio'], correct: 1, exp: 'El tampón fosfato actúa intracelularmente, con gran eficacia.' },
  { s: '8. pH y tampones', q: 'A pH 7,4, ¿cuál es la relación ion/ácido del tampón bicarbonato?', opts: ['1/1', '5/1', '20/1', '100/1'], correct: 2, exp: 'A pH 7,4 la relación ion/ácido del tampón bicarbonato es de 20/1.' },
  { s: '8. pH y tampones', q: '¿Por qué se dice que el tampón bicarbonato es un "sistema abierto"?', opts: ['Porque cambia de pH libremente', 'Porque permite eliminar CO₂ y ion bicarbonato', 'Porque no necesita agua', 'Porque actúa dentro y fuera de la célula'], correct: 1, exp: 'Es un sistema abierto porque permite la eliminación de CO₂ y de ion bicarbonato, lo que lo hace un excelente amortiguador de ácidos en el medio extracelular.' },
  { s: '8. pH y tampones', q: '¿Cuál de estos es un tampón ORGÁNICO?', opts: ['El tampón bicarbonato', 'El tampón fosfato', 'El tampón hemoglobina', 'El tampón carbonato'], correct: 2, exp: 'Los tampones orgánicos son las proteínas, los aminoácidos y el tampón hemoglobina. El bicarbonato y el fosfato son inorgánicos.' },

  { s: '9. Moléculas gaseosas', q: '¿Cómo se encuentran las moléculas gaseosas imprescindibles para el metabolismo?', opts: ['Libres en el citoplasma', 'NO se encuentran libres en el interior del organismo', 'Solo en los pulmones', 'En forma de cristales'], correct: 1, exp: 'Las moléculas gaseosas imprescindibles para el metabolismo celular no se encuentran libres en el interior del organismo.' },
  { s: '9. Moléculas gaseosas', q: '¿Cómo se transporta el O₂?', opts: ['Disuelto libremente en el plasma', 'Unido a la hemoglobina', 'En forma de bicarbonato', 'Unido al colágeno'], correct: 1, exp: 'En el caso del oxígeno, está unido a la hemoglobina.' },
  { s: '9. Moléculas gaseosas', q: '¿Cómo se transporta el CO₂?', opts: ['Solo como gas libre', 'Unido en pequeñas proporciones a la hemoglobina o en el plasma como bicarbonato', 'Unido a la mioglobina', 'No se transporta'], correct: 1, exp: 'El dióxido de carbono puede unirse en pequeñas proporciones a la hemoglobina o transportarse en el plasma en forma de bicarbonato.' },
  { s: '9. Moléculas gaseosas', q: '¿Dónde están prácticamente los únicos gases libres de los seres vivos?', opts: ['En los alvéolos pulmonares', 'En los órganos de flotación de microalgas unicelulares', 'En las vacuolas vegetales', 'En los cloroplastos'], correct: 1, exp: 'Hay muy pocos casos de moléculas gaseosas libres, limitándose prácticamente a los órganos de flotación en microalgas unicelulares, como Cyclotella meneghiniana.' },
  { s: '9. Moléculas gaseosas', q: '¿Cómo se encuentra el amoniaco en los seres vivos?', opts: ['Como gas libre', 'Disuelto en los líquidos biológicos', 'Unido a la hemoglobina', 'Precipitado en cristales'], correct: 1, exp: 'El amoniaco se encuentra disuelto en los líquidos biológicos.' },
]

export const unidad: Unidad = {
  id: 'bio-u1',
  unidad: 'Unidad 1',
  title: 'Biomoléculas inorgánicas',
  shortTitle: 'Biomoléculas inorgánicas',
  description:
    'Bioelementos, enlaces químicos, el agua y sus propiedades, las sales minerales, la ósmosis, el pH y las moléculas gaseosas.',
  footer: 'Bioelementos · El agua · Sales minerales',
  mapaRoot: 'Biomoléculas inorgánicas',
  accent: 'verde',
  mapa,
  fichas,
  quiz,
  Historia,
}
