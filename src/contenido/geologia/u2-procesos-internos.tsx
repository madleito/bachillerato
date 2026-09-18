import type { Ficha, Pregunta, RamaMapa, Unidad } from '../../types'
import { Divider, K } from '../../components/ui'

// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'magmas', label: 'Magmas y magmatismo', color: 'volcanic',
    children: [
      { id: 'mg1', label: 'Qué es el magma', detail: 'Roca fundida. Compuesto por silicatos fundidos + óxidos/metales + fluidos (H₂O, CO₂) que le dan fluidez.' },
      { id: 'mg2', label: 'Tipos de magma', children: [
        { id: 'mg2a', label: 'Basáltico (básico)', detail: 'El más abundante y fluido. Fusión parcial del manto a altas temperaturas.' },
        { id: 'mg2b', label: 'Granítico (ácido)', detail: 'El más viscoso y el que funde a menor temperatura. Fusión de la corteza continental.' },
        { id: 'mg2c', label: 'Andesítico (intermedio)', detail: 'El menos abundante. Fusión parcial de la corteza oceánica.' },
      ]},
      { id: 'mg3', label: 'Diagramas P/T', children: [
        { id: 'mg3a', label: 'Isoterma (gradiente geotérmico)', detail: 'Temperatura media a la que están las rocas del interior.' },
        { id: 'mg3b', label: 'Curva de sólidus', detail: 'Temperatura a la que las rocas empiezan a fundirse. Por debajo: todo sólido, sin magmas.' },
        { id: 'mg3c', label: 'Curva de líquidus', detail: 'Temperatura a la que la roca está totalmente fundida. Entre sólidus y líquidus: fusión parcial.' },
      ]},
      { id: 'mg4', label: 'Factores de fusión', children: [
        { id: 'mg4a', label: 'Aumento local de temperatura' },
        { id: 'mg4b', label: 'Disminución de presión' },
        { id: 'mg4c', label: 'Aumento de agua', detail: 'El agua rompe enlaces en los silicatos y facilita la fusión.' },
      ]},
      { id: 'mg5', label: 'Ascenso y consolidación', children: [
        { id: 'mg5a', label: 'Cámara magmática', detail: 'El magma asciende por menor densidad hasta encontrar rocas de igual densidad y se acumula ahí.' },
        { id: 'mg5b', label: 'Erupción volcánica', detail: 'Si la cámara se sobrepresiona, el magma sale → rocas volcánicas.' },
        { id: 'mg5c', label: 'Rocas plutónicas', detail: 'Si se consolida dentro de la cámara magmática.' },
        { id: 'mg5d', label: 'Rocas filonianas', detail: 'Si se consolida en las vías de ascenso.' },
      ]},
      { id: 'mg6', label: 'Evolución del magma', detail: 'Cristalización lenta (puede durar millones de años). Los minerales de punto de fusión más alto (y más densos) cristalizan primero.' },
    ],
  },
  {
    id: 'magmatismo-placas', label: 'Magmatismo y tectónica de placas', color: 'petrol',
    children: [
      { id: 'mp1', label: 'Bordes constructivos (dorsales)', detail: '≈80% del magmatismo terrestre. Por disminución de presión (tensión). Magma basáltico → gabro (profundidad) + basalto (superficie). Forma la corteza oceánica.' },
      { id: 'mp2', label: 'Bordes destructivos (subducción)', detail: '≈12% de los magmas. Por aumento de temperatura (rozamiento). Superficial: basaltos. Profundidad: granitos.' },
      { id: 'mp3', label: 'Intraplaca', detail: 'Pequeña parte. Puntos calientes del manto. Más frecuente en zonas oceánicas (Hawaii) que continentales (Yellowstone).' },
    ],
  },
  {
    id: 'relieves', label: 'Relieves y rocas magmáticas', color: 'ochre',
    children: [
      { id: 'r1', label: 'Relieves plutónicos', children: [
        { id: 'r1a', label: 'Batolito', detail: 'Gran masa de rocas plutónicas — la propia cámara magmática cristalizada. Miles de km² (ej: Pico de la Miel).' },
        { id: 'r1b', label: 'Sill', detail: 'Masa tabular, generalmente horizontal.' },
        { id: 'r1c', label: 'Dique o filón', detail: 'Masa tabular vertical.' },
      ]},
      { id: 'r2', label: 'Relieves volcánicos', children: [
        { id: 'r2a', label: 'Coladas de lava', detail: 'Lavas cordadas → magmas fluidos. Lavas en bloque → magmas viscosos.' },
        { id: 'r2b', label: 'Chimenea volcánica', detail: 'Masa tubular — el conducto de salida del magma (ej: Torre del Diablo).' },
      ]},
      { id: 'r3', label: 'Tipos de rocas magmáticas', children: [
        { id: 'r3a', label: 'Plutónicas', detail: 'Cristalizan en profundidad, lentamente. Textura granuda o pegmatítica, minerales visibles a simple vista.' },
        { id: 'r3b', label: 'Volcánicas', detail: 'Solidifican en superficie muy rápido. Textura microcristalina, porfídica o vítrea.' },
        { id: 'r3c', label: 'Filonianas', detail: 'Enfriamiento rápido cerca de la superficie. Forman diques o filones. Mezcla de características.' },
      ]},
    ],
  },
  {
    id: 'vulcanismo', label: 'Vulcanismo', color: 'terracotta',
    children: [
      { id: 'v1', label: 'Tipos de erupciones', children: [
        { id: 'v1a', label: 'Hawaiana', detail: 'Tranquilas y fluidas. Coladas que llegan lejos, conos de pendientes suaves.' },
        { id: 'v1b', label: 'Estromboliana', detail: 'Más explosivas, pero de dispersión pequeña.' },
        { id: 'v1c', label: 'Vulcaniana', detail: 'Muchos piroclastos, sin coladas significativas. Explosividad moderada-violenta.' },
        { id: 'v1d', label: 'Pliniana', detail: 'Muy explosivas y violentas, con grandes emisiones de piroclastos.' },
      ]},
      { id: 'v2', label: 'Riesgo volcánico', children: [
        { id: 'v2a', label: 'IVE (Índice de Explosividad Volcánica)', detail: 'Cuantifica la peligrosidad. Escala del 0 al 8.' },
        { id: 'v2b', label: 'Localización', detail: 'Mayoría en zonas de subducción y dorsales (riesgo casi nulo en dorsales). También intraplaca (Hawaii).' },
      ]},
      { id: 'v3', label: 'Flujos volcánicos', children: [
        { id: 'v3a', label: 'Coladas de lava' },
        { id: 'v3b', label: 'Nubes ardientes (flujos piroclásticos)' },
        { id: 'v3c', label: 'Lahares' },
      ]},
      { id: 'v4', label: 'Predicción', detail: 'Precursores volcánicos: movimientos sísmicos, elevación del terreno, emisión de gases, cambios de temperatura.' },
      { id: 'v5', label: 'Prevención', detail: 'Evacuación, cambio del curso de las coladas, solidificación con agua fría, distribución de mascarillas.' },
    ],
  },
  {
    id: 'metamorfismo', label: 'Metamorfismo', color: 'turquoise',
    children: [
      { id: 'me1', label: 'Definición', detail: 'Cambios fisicoquímicos en las rocas, sin perder el estado sólido, al alterarse las condiciones de P y T. Resultado: rocas metamórficas (de cualquier roca original).' },
      { id: 'me2', label: 'Procesos metamórficos', children: [
        { id: 'me2a', label: 'Recristalización', detail: 'A partir de 300°C los minerales se reagrupan formando cristales mayores, sin cambiar la composición. Ej: caliza → mármol.' },
        { id: 'me2b', label: 'Estructuras orientadas (foliación)', detail: 'Micas, arcillas, anfíboles y piroxenos se orientan perpendicularmente a los esfuerzos. Se desarrolla esquistosidad.' },
        { id: 'me2c', label: 'Nuevos minerales', detail: 'Reajustes mineralógicos: minerales inestables reaccionan entre sí y forman minerales metamórficos.' },
        { id: 'me2d', label: 'Brechificación', detail: 'Rotura por presiones dirigidas cerca de fallas. Forma brechas de falla.' },
        { id: 'me2e', label: 'Deshidratación', detail: 'Minerales hidratados (arcillas) y carbonatos pierden H₂O y CO₂, que pasan a los fluidos y facilitan las reacciones.' },
      ]},
      { id: 'me3', label: 'Agentes', children: [
        { id: 'me3a', label: 'Temperatura', detail: 'Entre 200 y 800°C. Aumenta por gradiente geotérmico o contacto con magmas. Favorece cambios químicos.' },
        { id: 'me3b', label: 'Presión', detail: 'Entre 2 y 15 kbar. Litostática + de fluidos + tectónica. Produce cambios físicos.' },
        { id: 'me3c', label: 'Fluidos/volátiles', detail: 'Por deshidratación y descarbonatación. Favorecen las reacciones químicas.' },
      ]},
      { id: 'me4', label: 'Tipos de metamorfismo', children: [
        { id: 'me4a', label: 'Dinámico (de presión)', detail: 'Zonas poco profundas de grandes fallas: mucha presión, poca temperatura. Brechificación → brechas de falla.' },
        { id: 'me4b', label: 'De contacto (térmico)', detail: 'Mucha temperatura, poca presión. Contacto con magmas. Forma una aureola de contacto alrededor de la masa magmática.' },
        { id: 'me4c', label: 'Regional ★', detail: 'El más importante. Aumentan P y T de forma paralela. Afecta extensas zonas de la corteza continental. Grado bajo (pizarras) → alto (gneises, migmatitas).' },
      ]},
      { id: 'me5', label: 'Rocas metamórficas', children: [
        { id: 'me5a', label: 'Orientadas', detail: 'De rocas silicatadas (arcillas, areniscas, granitos). Las más comunes.' },
        { id: 'me5b', label: 'No orientadas' },
      ]},
      { id: 'me6', label: 'Metamorfismo y placas', detail: 'El metamorfismo regional se produce, principalmente, en las zonas de subducción.' },
    ],
  },
  {
    id: 'deformacion', label: 'Deformación y riesgo sísmico', color: 'petrol',
    children: [
      { id: 'df1', label: 'Tipos de deformación', children: [
        { id: 'df1a', label: 'Elástica', detail: 'La roca vuelve a su estado al desaparecer el esfuerzo. Responsable de los terremotos.' },
        { id: 'df1b', label: 'Plástica', detail: 'Se supera el límite elástico: las rocas se doblan (pliegues).' },
        { id: 'df1c', label: 'Rotura', detail: 'Se supera el límite plástico: las rocas se fracturan (fallas).' },
      ]},
      { id: 'df2', label: 'Riesgo geológico', children: [
        { id: 'df2a', label: 'Peligrosidad', detail: 'Probabilidad de que suceda el fenómeno catastrófico en un intervalo de tiempo.' },
        { id: 'df2b', label: 'Exposición', detail: 'Conjunto de personas, bienes e infraestructuras expuestos al riesgo.' },
        { id: 'df2c', label: 'Vulnerabilidad', detail: 'Grado del daño.' },
      ]},
    ],
  },
]

// ─── La Historia ───
function Historia() {
  return (
    <article className="page-enter max-w-2xl mx-auto">
      {/* Intro */}
      <header className="mb-12 md:mb-16">
        <p className="font-body text-sm uppercase tracking-widest text-terracotta mb-3">Unidad 2 · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          La Tierra que se mueve por dentro
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          Todo lo que pasa bajo la corteza contado sin apuntes: cómo se funden las rocas, por qué hay volcanes, cómo se transforman por presión y calor, y qué pasa cuando no aguantan más.
        </p>
      </header>

      {/* 1. Magmas */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          1. Rocas que se funden<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">el magma y sus tipos</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Bajo nuestros pies, en ciertas zonas y en ciertas condiciones, las rocas se derriten. A eso lo llamamos <K>magma</K>: roca fundida. No es homogéneo — está compuesto sobre todo por <K>silicatos fundidos</K>, con algo de óxidos y metales, y siempre una cierta cantidad de <K>fluidos</K> (agua, CO₂) que lo hacen más fluido.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Al conjunto de procesos que forman, hacen evolucionar y solidificar los magmas lo llamamos <K>magmatismo</K>, y las rocas que resultan son las <K>rocas magmáticas</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Hay tres tipos de magma según su composición y dónde se forman:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>El <K>basáltico o básico</K> es el más abundante y el más fluido. Se forma por fusión parcial de las rocas del manto a altas temperaturas.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>El <K>granítico o ácido</K> es el más viscoso y el que funde a menor temperatura. Procede de la fusión de la corteza continental.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>El <K>andesítico o intermedio</K> es el menos abundante. Se forma por fusión parcial de la corteza oceánica.</span>
          </li>
        </ul>
      </section>

      <Divider />

      {/* 2. Diagramas P/T y factores */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          2. ¿Cómo se funde una roca?
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Para entenderlo usamos los <K>diagramas P/T</K> (presión-temperatura). Dibujamos tres curvas: la <K>isoterma</K> (o gradiente geotérmico), que marca a qué temperatura están realmente las rocas a cada profundidad; la <K>curva de sólidus</K>, a partir de la cual las rocas empiezan a fundirse; y la <K>curva de líquidus</K>, donde ya están completamente fundidas. Entre sólidus y líquidus hay <K>fusión parcial</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          En condiciones normales, las rocas del manto están por debajo del sólidus — sólidas. Para que se fundan hace falta que se rompa ese equilibrio. Hay tres mecanismos:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Un <K>aumento local de la temperatura</K>.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Una <K>disminución de la presión</K>.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Un <K>aumento de agua</K>, que rompe los enlaces de los silicatos y rebaja el punto de fusión.</span>
          </li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          Uno o varios de estos factores provocan una <K>fusión parcial</K> del manto. Como el magma resultante es menos denso que las rocas de alrededor, asciende. Sube hasta encontrar un nivel donde la densidad se iguala — ahí se para y se acumula formando una <K>cámara magmática</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Si llega más magma, la cámara se sobrepresiona. Parte del magma sale al exterior: es una <K>erupción volcánica</K>, y genera <K>rocas volcánicas</K>. Si el magma se enfría dentro de la cámara, se forman <K>rocas plutónicas</K>. Y si se queda en las vías de ascenso (grietas intermedias), forma <K>rocas filonianas</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La consolidación es lenta — puede durar millones de años. Como el magma no es una sustancia pura, no todo cristaliza a la vez. Primero lo hacen los minerales de punto de fusión más alto (que además son los más densos). Luego, los de punto de fusión más bajo, hasta que todo queda consolidado.
        </p>
      </section>

      <Divider />

      {/* 3. Magmatismo y placas */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          3. Dónde se forman los magmas
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los magmas no aparecen por cualquier sitio. Casi todo el magmatismo ocurre en los <K>límites de placas</K>, y cada tipo de límite produce un magma distinto.
        </p>

        <div className="space-y-6 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🌋 Dorsales (bordes constructivos)</h5>
            <p className="font-body text-base leading-relaxed">
              Aquí ocurre el <K>80%</K> del magmatismo terrestre. Los esfuerzos de tensión hacen bajar la presión, el manto se funde parcialmente y se forma <K>magma basáltico</K>. La mayoría se consolida en profundidad (gabro) y el resto asciende hasta la superficie (basalto). Ambos forman la corteza oceánica.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🔻 Subducción (bordes destructivos)</h5>
            <p className="font-body text-base leading-relaxed">
              Aquí se forma el <K>12%</K> del magma, por el aumento de temperatura del rozamiento entre placas. En zonas superficiales nacen magmas <K>basálticos</K> que dan basaltos. En profundidad cristalizan magmas <K>graníticos</K> (más viscosos) que dan granitos.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🔥 Intraplaca (puntos calientes)</h5>
            <p className="font-body text-base leading-relaxed">
              Una pequeña parte del magmatismo ocurre en el interior de las placas, por <K>puntos calientes</K> del manto. Más frecuente en zonas oceánicas (Hawaii) que continentales (Yellowstone).
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* 4. Rocas magmáticas y relieves */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          4. Las rocas del magmatismo y sus formas
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Cuando el magma cristaliza en profundidad, lo hace lentamente: los minerales tienen tiempo para crecer. Son las <K>rocas plutónicas</K>, con textura granuda o pegmatítica, cristales grandes y reconocibles a simple vista. Cuando sale a la superficie y se enfría rápido, apenas da tiempo a formar cristales — son las <K>rocas volcánicas</K>, con textura microcristalina, porfídica o incluso vítrea. Y si se enfría en grietas cerca de la superficie, bastante rápido pero aún dentro de la corteza, aparecen las <K>rocas filonianas</K>, a medio camino.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Cada tipo deja una forma de relieve reconocible:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Un <K>batolito</K> es una gran masa de rocas plutónicas — la propia cámara magmática ya cristalizada. Pueden ocupar miles de km² (ej: el Pico de la Miel).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Un <K>sill</K> es una masa tabular, generalmente horizontal.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Un <K>dique o filón</K> es una masa tabular vertical.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Las <K>coladas de lava</K> son mantos solidificados sobre las laderas del volcán: cordadas si el magma es fluido, en bloque si es viscoso.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>La <K>chimenea volcánica</K> es el conducto tubular por el que sale el magma (ej: la Torre del Diablo).</span>
          </li>
        </ul>
      </section>

      <Divider />

      {/* 5. Vulcanismo */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          5. Volcanes: del paseo a la catástrofe
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          No todos los volcanes son iguales. Dependiendo de la viscosidad del magma y de la cantidad de gases, las erupciones van desde tranquilas hasta devastadoras. Cuatro tipos clásicos:
        </p>

        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Hawaiana</K>: tranquilas y fluidas. Coladas que alcanzan grandes distancias, conos de pendientes suaves.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Estromboliana</K>: más explosivas, pero de dispersión pequeña.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Vulcaniana</K>: muchos piroclastos, sin coladas significativas. Explosividad moderada-violenta.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Pliniana</K>: muy explosivas y violentas, con grandes emisiones de piroclastos.</span>
          </li>
        </ul>

        <blockquote className="border-l-4 border-terracotta pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Para cuantificar la peligrosidad usamos el IVE — Índice de Explosividad Volcánica — en escala del 0 al 8.
          </p>
        </blockquote>

        <p className="font-body text-lg leading-relaxed mb-4">
          La mayoría de las erupciones ocurren en <K>zonas de subducción</K> y en <K>dorsales</K> (aunque en estas últimas el riesgo es casi nulo). También existe el vulcanismo <K>intraplaca</K>, como el de Hawái.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los volcanes producen distintos flujos: <K>coladas de lava</K>, <K>nubes ardientes</K> (flujos piroclásticos) y <K>lahares</K>. Los más mortíferos no son las coladas sino las nubes ardientes y los lahares.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Antes de una erupción hay <K>precursores volcánicos</K>: microterremotos, elevación del terreno, emisión de gases, cambios de temperatura. Son las señales que permiten <K>predecir</K>. Y como medidas <K>preventivas</K>: evacuación de la población, desvío del curso de las coladas, solidificación con agua fría, distribución de mascarillas…
        </p>
      </section>

      <Divider />

      {/* 6. Metamorfismo */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          6. Rocas que cambian sin fundirse
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          El <K>metamorfismo</K> es lo que le pasa a una roca cuando cambian sus condiciones de presión y temperatura pero <span className="font-bold text-terracotta-dark">sin llegar a fundirse</span>. Se mantiene sólida, pero sus minerales se reorganizan, se reagrupan o se sustituyen por otros. El resultado son las <K>rocas metamórficas</K>, que pueden proceder de cualquier roca anterior (sedimentaria, magmática o incluso de otra metamórfica).
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Los cambios son de varios tipos:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Recristalización</K>: a partir de 300°C los minerales se movilizan y se reagrupan formando cristales más grandes, sin cambiar la composición. Ejemplo clásico: la caliza se convierte en <K>mármol</K>.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Estructuras orientadas</K>: los minerales planares (micas, arcillas) y los alargados (anfíboles, piroxenos) se orientan perpendiculares a la dirección del esfuerzo. De ahí salen la <K>foliación</K> y la <K>esquistosidad</K>.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Nuevos minerales</K>: algunos minerales se inestabilizan con la P y la T y reaccionan entre sí formando minerales metamórficos.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Brechificación</K>: por presiones dirigidas cerca de las fallas, las rocas se rompen. Forman <K>brechas de falla</K>.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Deshidratación</K>: arcillas y carbonatos pierden H₂O y CO₂ cuando se calientan. Esos fluidos pasan a los poros y ayudan a las reacciones químicas entre minerales.</span>
          </li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-8 mb-4">Los agentes del metamorfismo:</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Son tres: <K>temperatura</K> (200–800°C, por el gradiente geotérmico o por contacto con magmas), <K>presión</K> (2–15 kbar: litostática, de fluidos y tectónica) y <K>fluidos</K> (agua y CO₂ liberados por deshidratación). Los tres tienen que actuar durante <span className="italic">mucho tiempo</span> — los cambios son lentísimos.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-8 mb-4">Tres tipos según qué domina:</h4>
        <div className="space-y-6 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">1. Metamorfismo dinámico (de presión)</h5>
            <p className="font-body text-base leading-relaxed">
              Mucha presión, poca temperatura. Ocurre en zonas superficiales de grandes fallas. Brechificación pura → <K>brechas de falla</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">2. Metamorfismo de contacto (térmico)</h5>
            <p className="font-body text-base leading-relaxed">
              Mucha temperatura, poca presión. Ocurre alrededor de un magma caliente. Se forma una <K>aureola de contacto</K> cuyo grosor depende de la temperatura del magma y de su cantidad.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">3. Metamorfismo regional ★</h5>
            <p className="font-body text-base leading-relaxed">
              El más importante. P y T aumentan en paralelo. Afecta a <span className="font-bold">extensas zonas de la corteza continental</span> — cientos de miles de km². Va desde grado muy bajo (pizarras) hasta grado alto (gneises, migmatitas). Se da sobre todo en <K>zonas de subducción</K>.
            </p>
          </div>
        </div>

        <p className="font-body text-lg leading-relaxed mb-4">
          La variedad de rocas metamórficas depende de tres factores: la roca original, el tipo de metamorfismo y el grado alcanzado. Se clasifican según la estructura en <K>orientadas</K> (las más comunes, procedentes de rocas silicatadas como arcillas, areniscas o granitos) y <K>no orientadas</K>.
        </p>
      </section>

      <Divider />

      {/* 7. Deformación */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          7. Cuando la roca no aguanta más
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las rocas, como cualquier sólido, se deforman al aplicarles un esfuerzo. Lo hacen de tres maneras según la intensidad del esfuerzo:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Deformación elástica</K>: la roca se deforma mientras se mantiene el esfuerzo, pero vuelve a su estado original al desaparecer. Es la responsable de los <K>terremotos</K> — la energía acumulada se libera de golpe cuando la roca recupera su forma.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Deformación plástica</K>: si se supera el límite elástico, las rocas se doblan. De ahí los <K>pliegues</K>.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Deformación por rotura</K>: si se supera también el límite plástico, las rocas se fracturan. De ahí las <K>fallas</K>.</span>
          </li>
        </ul>
      </section>

      <Divider />

      {/* 8. Riesgo */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          8. Riesgo sísmico y tectónica
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Llamamos <K>riesgo geológico</K> a cualquier proceso o fenómeno geológico que, por su localización, severidad y frecuencia, suponga una amenaza para personas, bienes o infraestructuras.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          El riesgo se descompone en tres factores:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Peligrosidad</K>: probabilidad de que el fenómeno catastrófico ocurra en un intervalo de tiempo determinado.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Exposición</K>: personas, bienes e infraestructuras expuestos al riesgo.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Vulnerabilidad</K>: grado de daño esperable cuando el fenómeno ocurre.</span>
          </li>
        </ul>

        <blockquote className="border-l-4 border-turquoise pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Los procesos geológicos internos —magmatismo, metamorfismo, deformación— no son catástrofes: son cómo la Tierra respira. El riesgo aparece solo cuando coincidimos con ellos.
          </p>
        </blockquote>
      </section>

      {/* End marker */}
      <div className="flex items-center justify-center gap-3 mt-16 mb-8">
        <span className="block w-8 h-px bg-tierra-sand" />
        <span className="text-tierra-slate text-xs font-body tracking-widest uppercase">Fin del resumen</span>
        <span className="block w-8 h-px bg-tierra-sand" />
      </div>
    </article>
  );
}

// ─── Fichas de estudio ───
const fichas: Ficha[] = [
  { s: 'Magmas y magmatismo', p: '¿Qué es el magmatismo?', r: 'Conjunto de procesos que comprenden la formación de los magmas, su evolución y su consolidación, dando lugar a las rocas magmáticas.' },
  { s: 'Magmas y magmatismo', p: '¿Qué es el magma y de qué está compuesto?', r: 'Roca fundida. Compuesto por silicatos fundidos, con posibles óxidos o metales, y cierta proporción de fluidos (H₂O, CO₂) que le dan fluidez.' },
  { s: 'Magmas y magmatismo', p: '¿Qué papel juegan los fluidos (H₂O, CO₂) en el magma?', r: 'Le proporcionan mayor fluidez y, al romper enlaces en los silicatos, rebajan el punto de fusión.' },
  { s: 'Magmas y magmatismo', p: '¿Cuáles son los tres tipos de magma y cuál es el más abundante?', r: 'Basáltico (básico), granítico (ácido) y andesítico (intermedio). El basáltico es el más abundante y fluido.' },
  { s: 'Magmas y magmatismo', p: '¿Cómo se forma el magma basáltico?', r: 'Por fusión parcial de las rocas del manto terrestre a altas temperaturas.' },
  { s: 'Magmas y magmatismo', p: '¿Cómo se forma el magma granítico?', r: 'Por la fusión de la corteza continental. Es el más viscoso y el que funde a menor temperatura.' },
  { s: 'Magmas y magmatismo', p: '¿Cómo se forma el magma andesítico?', r: 'Por fusión parcial de la corteza oceánica. Es el menos abundante.' },
  { s: 'Magmas y magmatismo', p: '¿Qué son los diagramas P/T?', r: 'Diagramas presión (profundidad)-temperatura que muestran cuándo funde una roca. Incluyen isoterma, sólidus y líquidus.' },
  { s: 'Magmas y magmatismo', p: '¿Qué es la isoterma o gradiente geotérmico?', r: 'La temperatura media a la que están las rocas en el interior terrestre a cada profundidad.' },
  { s: 'Magmas y magmatismo', p: '¿Qué es la curva de sólidus?', r: 'La temperatura a la que las rocas empiezan a fundirse. Por debajo todo es sólido; no hay magmas.' },
  { s: 'Magmas y magmatismo', p: '¿Qué es la curva de líquidus?', r: 'La temperatura a la que una roca está fundida por completo. Entre sólidus y líquidus la fusión es parcial.' },
  { s: 'Magmas y magmatismo', p: 'Nombra los tres factores que pueden provocar la fusión parcial del manto.', r: '1) Aumento local de temperatura. 2) Disminución de presión. 3) Aumento de agua (rompe enlaces en los silicatos).' },
  { s: 'Magmas y magmatismo', p: '¿Por qué el magma asciende una vez formado?', r: 'Porque es menos denso que las rocas que lo rodean.' },
  { s: 'Magmas y magmatismo', p: '¿Qué es una cámara magmática?', r: 'Una acumulación de magma que se forma cuando este, al ascender, alcanza una zona de rocas de igual densidad y se detiene.' },
  { s: 'Magmas y magmatismo', p: '¿Qué ocurre si el aporte de magma a la cámara es continuo?', r: 'La cámara se sobrepresiona y parte del magma sale, produciendo una erupción volcánica y rocas volcánicas.' },
  { s: 'Rocas y relieves magmáticos', p: 'Diferencia entre rocas plutónicas, volcánicas y filonianas (dónde cristalizan).', r: 'Plutónicas: dentro de la cámara magmática. Volcánicas: en la superficie tras erupción. Filonianas: en las vías de ascenso.' },
  { s: 'Rocas y relieves magmáticos', p: '¿Qué textura tienen las rocas plutónicas y por qué?', r: 'Textura granuda o pegmatítica, con cristales grandes visibles a simple vista, porque la cristalización es lenta en profundidad.' },
  { s: 'Rocas y relieves magmáticos', p: '¿Qué textura tienen las rocas volcánicas y por qué?', r: 'Microcristalina, porfídica o vítrea — cristales pequeños o inexistentes — porque solidifican muy rápido en superficie.' },
  { s: 'Rocas y relieves magmáticos', p: '¿Cómo cristaliza un magma al enfriarse?', r: 'Lentamente y por partes: los minerales de punto de fusión más alto (y más densos) cristalizan primero; después los de menor punto de fusión.' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Dónde se produce el 80% del magmatismo terrestre?', r: 'En los bordes constructivos o dorsales oceánicas, por disminución de presión asociada a los esfuerzos de tensión.' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Qué rocas se forman en las dorsales?', r: 'Magma basáltico: la mayoría consolida en profundidad formando gabro; el resto asciende y forma basalto. Ambas constituyen la corteza oceánica.' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Qué porcentaje del magmatismo se produce en las zonas de subducción y por qué?', r: 'El 12%, por aumento de temperatura debido al rozamiento entre placas.' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Qué rocas se forman en las zonas de subducción?', r: 'Superficialmente: basaltos (de magmas basálticos). En profundidad: granitos (de magmas graníticos más viscosos).' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Qué es el vulcanismo intraplaca?', r: 'Magmatismo en el interior de una placa, debido a puntos calientes del manto. Más frecuente en zonas oceánicas (Hawaii) que continentales (Yellowstone).' },
  { s: 'Rocas y relieves magmáticos', p: '¿Qué es un batolito?', r: 'Gran masa de rocas plutónicas que corresponde a la cámara magmática cristalizada. Puede ocupar miles de km². Ej: Pico de la Miel.' },
  { s: 'Rocas y relieves magmáticos', p: 'Diferencia entre sill y dique/filón.', r: 'Sill: masa tabular generalmente horizontal. Dique o filón: masa tabular vertical.' },
  { s: 'Vulcanismo y riesgo volcánico', p: '¿Qué es una colada de lava y qué tipos hay?', r: 'Manto de lava solidificado en las laderas del volcán. Lavas cordadas (magmas fluidos) y lavas en bloque (magmas viscosos).' },
  { s: 'Vulcanismo y riesgo volcánico', p: '¿Qué es la chimenea volcánica?', r: 'Masa tubular de rocas magmáticas que corresponde al conducto de salida del magma (ej: Torre del Diablo).' },
  { s: 'Vulcanismo y riesgo volcánico', p: 'Describe los cuatro tipos principales de erupción volcánica.', r: '1) Hawaiana: tranquila y fluida. 2) Estromboliana: más explosiva, dispersión pequeña. 3) Vulcaniana: muchos piroclastos, explosividad moderada-violenta. 4) Pliniana: muy explosivas, grandes emisiones de piroclastos.' },
  { s: 'Vulcanismo y riesgo volcánico', p: '¿Qué es el IVE?', r: 'Índice de Explosividad Volcánica. Cuantifica la peligrosidad de un volcán. Escala del 0 al 8.' },
  { s: 'Vulcanismo y riesgo volcánico', p: 'Nombra los tres tipos de flujos volcánicos.', r: 'Coladas de lava, nubes ardientes (flujos piroclásticos) y lahares.' },
  { s: 'Vulcanismo y riesgo volcánico', p: '¿Qué son los precursores volcánicos?', r: 'Fenómenos que anuncian una erupción: movimientos sísmicos, elevación del terreno, emisión de gases, cambios de temperatura.' },
  { s: 'Vulcanismo y riesgo volcánico', p: 'Nombra cuatro medidas preventivas frente al riesgo volcánico.', r: 'Evacuación de la población, cambio del curso de las coladas, solidificación con agua fría, distribución de mascarillas.' },
  { s: 'Metamorfismo', p: '¿Qué es el metamorfismo?', r: 'Cambios fisicoquímicos que sufren las rocas, sin perder el estado sólido, al cambiar las condiciones de presión y temperatura. Forma rocas metamórficas.' },
  { s: 'Metamorfismo', p: '¿De qué tipos de roca pueden formarse las rocas metamórficas?', r: 'De cualquier roca preexistente: sedimentaria, magmática o metamórfica.' },
  { s: 'Metamorfismo', p: '¿Qué es la recristalización y a partir de qué temperatura ocurre?', r: 'A partir de 300°C los minerales se movilizan y se reagrupan en cristales mayores, sin cambiar la composición. Ej: caliza → mármol.' },
  { s: 'Metamorfismo', p: '¿Qué es la foliación o esquistosidad?', r: 'Estructura orientada que se desarrolla cuando los minerales planares (micas, arcillas) o alargados (anfíboles, piroxenos) se orientan perpendicularmente al esfuerzo de compresión.' },
  { s: 'Metamorfismo', p: '¿Qué son los minerales metamórficos?', r: 'Minerales nuevos que aparecen cuando los minerales originales se inestabilizan con la P y T, reaccionan entre sí y forman fases nuevas.' },
  { s: 'Metamorfismo', p: '¿Qué es la brechificación?', r: 'Proceso de rotura por presiones dirigidas o tectónicas cerca de fallas. Las rocas se rompen y forman brechas de falla.' },
  { s: 'Metamorfismo', p: '¿Qué es la deshidratación metamórfica?', r: 'Pérdida de H₂O y CO₂ por minerales hidratados (arcillas) y carbonatos al calentarse. Esos fluidos facilitan las reacciones entre minerales.' },
  { s: 'Metamorfismo', p: 'Nombra los tres agentes del metamorfismo.', r: 'Temperatura (200-800°C), presión (2-15 kbar) y presencia de fluidos o volátiles.' },
  { s: 'Metamorfismo', p: '¿A qué se debe el aumento de temperatura en el metamorfismo?', r: 'Al gradiente geotérmico al profundizar en la corteza, o al contacto con magmas calientes.' },
  { s: 'Metamorfismo', p: '¿Qué tipos de presión intervienen en el metamorfismo?', r: 'Litostática (peso de los materiales encima), de los fluidos entre los granos, y tectónica (esfuerzos de compresión).' },
  { s: 'Metamorfismo', p: '¿Qué tipos de metamorfismo existen?', r: 'Dinámico o de presión, de contacto o térmico, y regional.' },
  { s: 'Metamorfismo', p: '¿Qué caracteriza al metamorfismo dinámico?', r: 'Mucha presión, poca temperatura. Se da en zonas poco profundas de grandes fallas. Produce brechificación → brechas de falla.' },
  { s: 'Metamorfismo', p: '¿Qué caracteriza al metamorfismo de contacto?', r: 'Mucha temperatura, poca presión. Ocurre por contacto con magmas calientes. Forma una aureola de contacto de rocas metamórficas.' },
  { s: 'Metamorfismo', p: '¿Qué caracteriza al metamorfismo regional?', r: 'Es el más importante. P y T aumentan en paralelo. Afecta a extensas zonas de corteza continental. Grado bajo (pizarras) hasta alto (gneises, migmatitas).' },
  { s: 'Metamorfismo', p: '¿Dónde se produce principalmente el metamorfismo regional?', r: 'En las zonas de subducción.' },
  { s: 'Metamorfismo', p: '¿De qué tres factores depende la gran diversidad de rocas metamórficas?', r: '1) Naturaleza de la roca original. 2) Tipo de metamorfismo. 3) Grado de metamorfismo alcanzado.' },
  { s: 'Metamorfismo', p: 'Clasificación de las rocas metamórficas según su estructura.', r: 'Orientadas (las más comunes, de rocas silicatadas como arcillas, areniscas y granitos) y no orientadas.' },
  { s: 'Deformación y riesgo sísmico', p: 'Nombra los tres tipos de deformación de las rocas.', r: 'Elástica, plástica y por rotura.' },
  { s: 'Deformación y riesgo sísmico', p: '¿Qué es la deformación elástica y qué genera?', r: 'Deformación que desaparece al cesar el esfuerzo. Es la responsable de los terremotos.' },
  { s: 'Deformación y riesgo sísmico', p: '¿Cuándo se produce deformación plástica?', r: 'Cuando se supera el límite de elasticidad. Las rocas se doblan (pliegues).' },
  { s: 'Deformación y riesgo sísmico', p: '¿Cuándo se produce deformación por rotura?', r: 'Cuando se supera el límite de plasticidad. Las rocas se fracturan (fallas).' },
  { s: 'Deformación y riesgo sísmico', p: '¿Qué es un riesgo geológico?', r: 'Circunstancia, proceso o suceso geológico que, por su localización, severidad y frecuencia, supone una amenaza para la salud, seguridad o bienestar de personas, bienes o economía.' },
  { s: 'Deformación y riesgo sísmico', p: 'Define peligrosidad (en riesgo geológico).', r: 'Probabilidad de que un fenómeno catastrófico suceda en un intervalo de tiempo determinado.' },
  { s: 'Deformación y riesgo sísmico', p: 'Define exposición (en riesgo geológico).', r: 'Conjunto de personas, bienes e infraestructuras expuestos al riesgo.' },
  { s: 'Deformación y riesgo sísmico', p: 'Define vulnerabilidad (en riesgo geológico).', r: 'Grado del daño esperable cuando el fenómeno ocurre.' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Qué rocas forman la corteza oceánica según el magmatismo de dorsales?', r: 'Gabro (consolidado en profundidad) y basalto (consolidado en superficie), ambos a partir de magma basáltico.' },
  { s: 'Magmatismo y tectónica de placas', p: '¿Por qué en las dorsales hay vulcanismo poco explosivo?', r: 'Porque el magma es basáltico y muy fluido, permitiendo que los gases escapen fácilmente.' },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  // Magmas
  { s: 'Magmas y magmatismo', q: '¿Qué es el magma?', opts: ['Roca sedimentaria', 'Roca fundida', 'Roca metamórfica sólida', 'Agua subterránea caliente'], correct: 1, exp: 'El magma es roca fundida, compuesta fundamentalmente por silicatos fundidos con algo de óxidos, metales y fluidos.' },
  { s: 'Magmas y magmatismo', q: '¿Qué le proporciona fluidez al magma?', opts: ['Los óxidos metálicos', 'Los fluidos como H₂O y CO₂', 'La alta presión', 'El enfriamiento parcial'], correct: 1, exp: 'Los fluidos (H₂O, CO₂) presentes siempre en cierta proporción rompen enlaces y aumentan la fluidez.' },
  { s: 'Magmas y magmatismo', q: '¿Cuál es el magma más abundante en la Tierra?', opts: ['Granítico', 'Andesítico', 'Basáltico', 'Riolítico'], correct: 2, exp: 'El magma basáltico (básico) es el más abundante y el más fluido. Se forma por fusión parcial del manto.' },
  { s: 'Magmas y magmatismo', q: '¿Cómo se forma el magma granítico?', opts: ['Por fusión del manto', 'Por fusión de la corteza continental', 'Por fusión de la corteza oceánica', 'Por cristalización fraccionada'], correct: 1, exp: 'El magma granítico o ácido procede de la fusión de la corteza continental. Es el más viscoso y el que funde a menor temperatura.' },
  { s: 'Magmas y magmatismo', q: '¿Cómo se forma el magma andesítico?', opts: ['Por fusión del manto', 'Por fusión de la corteza continental', 'Por fusión parcial de la corteza oceánica', 'Por enfriamiento lento del basalto'], correct: 2, exp: 'El magma andesítico o intermedio se produce por fusión parcial de la corteza oceánica. Es el menos abundante.' },
  { s: 'Magmas y magmatismo', q: '¿Cuál de los magmas es el más viscoso?', opts: ['Basáltico', 'Andesítico', 'Granítico', 'Todos tienen la misma viscosidad'], correct: 2, exp: 'El magma granítico (ácido) es el más viscoso y el que funde a menor temperatura.' },
  // Diagramas P/T
  { s: 'Magmas y magmatismo', q: '¿Qué marca la curva de sólidus en un diagrama P/T?', opts: ['La temperatura en la que la roca está totalmente fundida', 'La temperatura a la que la roca empieza a fundirse', 'La temperatura media del manto', 'La temperatura de solidificación del núcleo'], correct: 1, exp: 'La curva de sólidus es la temperatura a la que la roca empieza a fundirse. Por debajo todo es sólido; por encima hay fusión parcial.' },
  { s: 'Magmas y magmatismo', q: '¿Qué indica la curva de líquidus?', opts: ['El inicio de la fusión', 'La temperatura a la que la roca está fundida por completo', 'El punto de ebullición del magma', 'El gradiente geotérmico'], correct: 1, exp: 'La curva de líquidus marca la temperatura a la que la roca está totalmente fundida. Entre sólidus y líquidus la fusión es parcial.' },
  { s: 'Magmas y magmatismo', q: '¿Qué representa la isoterma en un diagrama P/T?', opts: ['La presión en el manto', 'La temperatura media real de las rocas a cada profundidad (gradiente geotérmico)', 'El flujo de magma', 'La densidad de las rocas'], correct: 1, exp: 'La isoterma o gradiente geotérmico indica la temperatura media a la que están las rocas a cada profundidad.' },
  { s: 'Magmas y magmatismo', q: '¿Qué zona corresponde a la fusión parcial?', opts: ['Por debajo del sólidus', 'Entre sólidus y líquidus', 'Por encima del líquidus', 'Solo en el sólidus'], correct: 1, exp: 'Entre las curvas de sólidus y líquidus la roca está parcialmente fundida.' },
  // Factores de fusión
  { s: 'Magmas y magmatismo', q: '¿Cuál de estos NO es un factor que provoque la fusión del manto?', opts: ['Aumento de temperatura', 'Disminución de presión', 'Aumento de agua', 'Aumento de densidad'], correct: 3, exp: 'Los tres factores son: aumento de temperatura, disminución de presión y aumento de agua. La densidad no provoca fusión.' },
  { s: 'Magmas y magmatismo', q: '¿Por qué el agua facilita la fusión de los silicatos?', opts: ['Porque los enfría', 'Porque rompe los enlaces existentes en los silicatos', 'Porque disuelve los minerales', 'Porque aumenta la presión'], correct: 1, exp: 'El agua rompe los enlaces en los silicatos y rebaja el punto de fusión de las rocas.' },
  { s: 'Magmas y magmatismo', q: '¿Por qué el magma asciende tras formarse?', opts: ['Por su mayor densidad', 'Por la rotación de la Tierra', 'Por su menor densidad', 'Por la presión del agua subterránea'], correct: 2, exp: 'El magma es menos denso que las rocas que lo rodean, así que flota hacia arriba.' },
  // Cámara magmática
  { s: 'Magmas y magmatismo', q: '¿Qué es una cámara magmática?', opts: ['Un tipo de roca volcánica', 'Acumulación de magma cuando alcanza rocas de igual densidad', 'Una falla tectónica', 'El interior del núcleo externo'], correct: 1, exp: 'El magma asciende hasta encontrar rocas de su misma densidad y ahí se detiene, formando la cámara magmática.' },
  { s: 'Magmas y magmatismo', q: '¿Qué provoca una erupción volcánica?', opts: ['La cristalización completa del magma', 'La sobrepresión de la cámara magmática por aporte continuo de magma', 'El enfriamiento superficial', 'La desaparición de los fluidos'], correct: 1, exp: 'Si el aporte de magma es continuo, la cámara se sobrepresiona y parte del magma sale: erupción volcánica.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Dónde cristalizan las rocas plutónicas?', opts: ['En la superficie', 'En las vías de ascenso del magma', 'En la cámara magmática', 'En el fondo oceánico'], correct: 2, exp: 'Las rocas plutónicas se forman cuando el magma se consolida dentro de la cámara magmática.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Dónde cristalizan las rocas filonianas?', opts: ['En el manto', 'En la superficie', 'En las vías de ascenso del magma', 'En el núcleo externo'], correct: 2, exp: 'Las rocas filonianas se forman cuando el magma se consolida en las vías de ascenso, formando diques o filones.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué minerales cristalizan primero al enfriarse un magma?', opts: ['Los de punto de fusión más bajo', 'Los menos densos', 'Los de punto de fusión más alto (y más densos)', 'Todos a la vez'], correct: 2, exp: 'Los minerales de punto de fusión más alto, que además son los más densos, son los primeros en cristalizar.' },
  // Magmatismo y placas
  { s: 'Magmatismo y tectónica de placas', q: '¿En qué zona se produce aproximadamente el 80% del magmatismo terrestre?', opts: ['Zonas de subducción', 'Dorsales oceánicas', 'Puntos calientes', 'Fallas continentales'], correct: 1, exp: 'En los bordes constructivos (dorsales) se produce el 80% del magmatismo, por disminución de presión.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Qué causa la fusión del manto en las dorsales?', opts: ['El aumento de temperatura por rozamiento', 'La disminución de presión por esfuerzos de tensión', 'La presencia de puntos calientes', 'La radiación solar'], correct: 1, exp: 'Los esfuerzos de tensión reducen la presión y el manto funde parcialmente → magma basáltico.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Qué rocas forman la corteza oceánica?', opts: ['Granito y diorita', 'Gabro y basalto', 'Peridotita y basalto', 'Gneiss y esquisto'], correct: 1, exp: 'El magma basáltico de las dorsales cristaliza como gabro en profundidad y basalto en superficie.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Qué porcentaje de magmatismo ocurre en zonas de subducción?', opts: ['≈12%', '≈40%', '≈80%', '≈50%'], correct: 0, exp: 'En las zonas de subducción se forma aproximadamente el 12% de los magmas terrestres.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Qué causa la fusión en las zonas de subducción?', opts: ['Descompresión', 'Aumento de temperatura por rozamiento entre placas', 'Puntos calientes', 'Meteoritos'], correct: 1, exp: 'El rozamiento entre las placas en subducción genera aumento de temperatura y funde las rocas.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Qué rocas se forman en zonas de subducción en profundidad?', opts: ['Basaltos', 'Peridotitas', 'Granitos', 'Calizas'], correct: 2, exp: 'En profundidad cristalizan los magmas graníticos (más viscosos) formando granitos. En superficie, basaltos.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Qué es el vulcanismo intraplaca?', opts: ['Volcanismo en los bordes de las placas', 'Magmatismo en el interior de las placas, por puntos calientes', 'Volcanismo submarino general', 'Erupciones piroclásticas'], correct: 1, exp: 'El vulcanismo intraplaca ocurre por puntos calientes del manto en el interior de las placas, no en sus bordes.' },
  { s: 'Magmatismo y tectónica de placas', q: '¿Dónde se manifiesta el vulcanismo intraplaca con más frecuencia?', opts: ['En zonas de subducción', 'En zonas oceánicas (ej. Hawaii)', 'En cordilleras continentales', 'En dorsales'], correct: 1, exp: 'Es más frecuente en zonas oceánicas (Hawaii) que continentales (Yellowstone).' },
  // Rocas y relieves
  { s: 'Rocas y relieves magmáticos', q: '¿Qué es un batolito?', opts: ['Una masa tabular vertical', 'Una masa tabular horizontal', 'Una gran masa de rocas plutónicas (cámara magmática cristalizada)', 'Un conducto volcánico'], correct: 2, exp: 'Un batolito es una gran masa de rocas plutónicas, la propia cámara magmática cristalizada. Miles de km².' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué es un sill?', opts: ['Masa tabular vertical', 'Masa tabular generalmente horizontal', 'Una cámara magmática', 'Una chimenea volcánica'], correct: 1, exp: 'Un sill es una masa tabular de rocas magmáticas, generalmente horizontal.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué es un dique o filón?', opts: ['Masa tabular horizontal', 'Masa tabular vertical', 'Un batolito pequeño', 'Una colada de lava'], correct: 1, exp: 'Un dique (o filón) es una masa tabular de rocas magmáticas vertical.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué son las lavas cordadas?', opts: ['Lavas de magmas muy viscosos', 'Lavas de magmas fluidos', 'Lavas enfriadas bajo el mar', 'Lavas fragmentadas'], correct: 1, exp: 'Las lavas cordadas son típicas de magmas fluidos. Las lavas en bloque, de magmas viscosos.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué es la chimenea volcánica?', opts: ['Un batolito pequeño', 'El conducto tubular de salida del magma', 'Una cámara magmática', 'La base del volcán'], correct: 1, exp: 'La chimenea volcánica es la masa tubular de rocas magmáticas correspondiente al conducto de salida del magma (ej: Torre del Diablo).' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué textura tienen las rocas plutónicas?', opts: ['Microcristalina o vítrea', 'Granuda o pegmatítica (cristales grandes visibles)', 'Foliada', 'Porfídica'], correct: 1, exp: 'Como cristalizan lentamente en profundidad, presentan textura granuda o pegmatítica, con cristales reconocibles a simple vista.' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué textura tienen las rocas volcánicas?', opts: ['Granuda', 'Microcristalina, porfídica o vítrea', 'Pegmatítica', 'Foliada'], correct: 1, exp: 'Como solidifican muy rápido en la superficie, sus cristales son pequeños (microcristalina), mixtos (porfídica) o inexistentes (vítrea).' },
  { s: 'Rocas y relieves magmáticos', q: '¿Qué caracteriza a las rocas filonianas?', opts: ['Enfriamiento muy lento en el manto', 'Enfriamiento rápido cerca de la superficie, formando diques o filones', 'Están siempre en superficie', 'Son siempre basálticas'], correct: 1, exp: 'Las rocas filonianas se forman por enfriamiento relativamente rápido del magma en zonas próximas a la superficie, formando diques o filones.' },
  // Vulcanismo
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Cómo son las erupciones hawaianas?', opts: ['Muy explosivas con grandes piroclastos', 'Tranquilas y fluidas, con coladas que alcanzan grandes distancias', 'Con muchos piroclastos sin coladas', 'Moderadamente explosivas de dispersión pequeña'], correct: 1, exp: 'Las hawaianas son tranquilas y fluidas, con coladas largas y conos de pendientes suaves.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Qué erupción es la más explosiva y violenta?', opts: ['Hawaiana', 'Estromboliana', 'Vulcaniana', 'Pliniana'], correct: 3, exp: 'Las erupciones plinianas son las más explosivas y violentas, con grandes emisiones de piroclastos.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Qué caracteriza a las erupciones estrombolianas?', opts: ['Tranquilas y muy fluidas', 'Más explosivas pero de dispersión pequeña', 'Enormes nubes piroclásticas', 'No tienen coladas'], correct: 1, exp: 'Las estrombolianas son más explosivas que las hawaianas pero la dispersión es pequeña.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Qué caracteriza a las erupciones vulcanianas?', opts: ['Coladas fluidas muy largas', 'Muchos piroclastos sin coladas significativas; explosividad moderada-violenta', 'No tienen piroclastos', 'Son submarinas'], correct: 1, exp: 'Las vulcanianas producen muchos piroclastos sin coladas significativas, con explosividad moderada-violenta.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Qué es el IVE?', opts: ['Índice de Valoración Eruptiva', 'Índice de Explosividad Volcánica (0-8)', 'Indicador de Vulcanismo Europeo', 'Índice de Viscosidad Efectiva'], correct: 1, exp: 'El IVE es el Índice de Explosividad Volcánica. Escala del 0 al 8 para cuantificar la peligrosidad.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Cuál de estos NO es un tipo de flujo volcánico?', opts: ['Coladas de lava', 'Lahares', 'Nubes ardientes', 'Tillitas'], correct: 3, exp: 'Los flujos son coladas, nubes ardientes (flujos piroclásticos) y lahares. Las tillitas son rocas glaciares.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Qué son los precursores volcánicos?', opts: ['Productos de la erupción', 'Señales que anuncian una erupción: sismicidad, elevación del terreno, gases, calor', 'Instrumentos de medición', 'Fases del magma ascendente'], correct: 1, exp: 'Los precursores son fenómenos previos al ascenso del magma que permiten predecir la erupción.' },
  { s: 'Vulcanismo y riesgo volcánico', q: '¿Cuál de estas NO es una medida preventiva frente al riesgo volcánico?', opts: ['Evacuación de la población', 'Distribución de mascarillas', 'Desvío del curso de las coladas', 'Provocar una explosión controlada del volcán'], correct: 3, exp: 'Las medidas típicas son evacuación, cambio de curso de las coladas, solidificación con agua fría y distribución de mascarillas.' },
  // Metamorfismo
  { s: 'Metamorfismo', q: '¿Qué es el metamorfismo?', opts: ['Fusión y solidificación de rocas', 'Cambios fisicoquímicos en rocas SIN perder el estado sólido al cambiar P y T', 'Erosión superficial', 'Formación de sedimentos'], correct: 1, exp: 'El metamorfismo son cambios fisicoquímicos sin perder el estado sólido por cambios en P y T. Clave: no hay fusión.' },
  { s: 'Metamorfismo', q: '¿De qué tipos de roca pueden proceder las rocas metamórficas?', opts: ['Solo de sedimentarias', 'Solo de magmáticas', 'De cualquier roca preexistente (sedimentaria, magmática o metamórfica)', 'Solo de otras metamórficas'], correct: 2, exp: 'Cualquier roca puede convertirse en metamórfica si se somete a los factores adecuados.' },
  { s: 'Metamorfismo', q: '¿Qué ejemplo ilustra la recristalización metamórfica?', opts: ['Basalto → gabro', 'Caliza → mármol', 'Granito → basalto', 'Arena → arenisca'], correct: 1, exp: 'La recristalización ocurre a partir de 300°C y el ejemplo clásico es la transformación de caliza en mármol.' },
  { s: 'Metamorfismo', q: '¿Qué es la foliación o esquistosidad?', opts: ['Un tipo de falla', 'Estructura orientada de minerales perpendicular al esfuerzo', 'Un proceso sedimentario', 'La capa externa del volcán'], correct: 1, exp: 'Es una estructura orientada: micas, arcillas, anfíboles y piroxenos se orientan perpendiculares al esfuerzo de compresión.' },
  { s: 'Metamorfismo', q: '¿Qué se forma por brechificación?', opts: ['Mármol', 'Brechas de falla', 'Gneises', 'Pizarras'], correct: 1, exp: 'La brechificación ocurre por presiones dirigidas cerca de las fallas y produce brechas de falla.' },
  { s: 'Metamorfismo', q: '¿Qué ocurre en la deshidratación metamórfica?', opts: ['Los minerales absorben agua', 'Minerales hidratados (arcillas) y carbonatos pierden H₂O y CO₂, que pasan a los fluidos', 'Se forman nuevos cristales de hielo', 'Se produce fusión parcial'], correct: 1, exp: 'Las arcillas y carbonatos expuestos a alta temperatura pierden H₂O y CO₂, que facilitan las reacciones entre minerales.' },
  { s: 'Metamorfismo', q: '¿En qué rango de temperatura actúa el agente térmico del metamorfismo?', opts: ['0-100°C', '100-200°C', '200-800°C', '800-1500°C'], correct: 2, exp: 'El metamorfismo ocurre entre los 200 y 800°C. Por debajo no hay cambios mineralógicos; por encima hay fusión.' },
  { s: 'Metamorfismo', q: '¿En qué rango actúa la presión en el metamorfismo?', opts: ['0-1 kbar', '2-15 kbar', '15-50 kbar', '50-100 kbar'], correct: 1, exp: 'La presión actúa entre 2 y 15 kbar. Litostática + de fluidos + tectónica.' },
  { s: 'Metamorfismo', q: '¿Cuál de estos NO es un tipo de presión en el metamorfismo?', opts: ['Litostática', 'De fluidos', 'Tectónica', 'Atmosférica'], correct: 3, exp: 'Los tres tipos son litostática (peso), de fluidos intergranulares y tectónica (compresión). La atmosférica es despreciable en profundidad.' },
  { s: 'Metamorfismo', q: '¿Cuál es el tipo de metamorfismo más importante?', opts: ['Dinámico', 'De contacto', 'Regional', 'Térmico'], correct: 2, exp: 'El metamorfismo regional es el más importante: afecta a extensas zonas de corteza continental (cientos de miles de km²).' },
  { s: 'Metamorfismo', q: '¿Qué caracteriza al metamorfismo dinámico?', opts: ['Mucha temperatura, poca presión', 'Mucha presión, poca temperatura; brechificación', 'P y T aumentan en paralelo', 'Solo actúa con agua'], correct: 1, exp: 'El metamorfismo dinámico ocurre en zonas poco profundas de grandes fallas: mucha presión, poca temperatura → brechas de falla.' },
  { s: 'Metamorfismo', q: '¿Qué caracteriza al metamorfismo de contacto?', opts: ['Solo presión', 'Mucha temperatura, poca presión; aureola de contacto alrededor del magma', 'Fusión total de la roca', 'Ocurre solo en el manto'], correct: 1, exp: 'El metamorfismo de contacto o térmico ocurre por contacto con magmas calientes, formando una aureola alrededor.' },
  { s: 'Metamorfismo', q: '¿Qué caracteriza al metamorfismo regional?', opts: ['Solo calor, sin presión', 'P y T aumentan en paralelo; afecta extensas zonas de corteza continental', 'Es el menos importante', 'Ocurre solo en el núcleo'], correct: 1, exp: 'En el metamorfismo regional P y T aumentan juntas. Grado bajo (pizarras) a alto (gneises, migmatitas).' },
  { s: 'Metamorfismo', q: '¿Dónde se produce principalmente el metamorfismo regional?', opts: ['En las dorsales', 'En puntos calientes', 'En las zonas de subducción', 'En fallas transformantes'], correct: 2, exp: 'El metamorfismo regional se produce principalmente en las zonas de subducción.' },
  { s: 'Metamorfismo', q: '¿Qué roca representa metamorfismo regional de grado alto?', opts: ['Pizarra', 'Mármol', 'Gneises o migmatitas', 'Brecha de falla'], correct: 2, exp: 'En el metamorfismo regional: grado bajo → pizarras; grado alto → gneises y migmatitas.' },
  { s: 'Metamorfismo', q: '¿De qué 3 factores depende la diversidad de rocas metamórficas?', opts: ['Edad, color y densidad', 'Naturaleza de la roca original, tipo y grado de metamorfismo', 'Latitud, altitud y temperatura', 'Presión, volumen y masa'], correct: 1, exp: 'Los tres factores son: roca original, tipo de metamorfismo y grado alcanzado.' },
  { s: 'Metamorfismo', q: '¿Qué son las rocas metamórficas orientadas?', opts: ['Rocas con cristales aleatorios', 'Rocas con foliación, procedentes de rocas silicatadas (arcillas, areniscas, granitos)', 'Rocas volcánicas', 'Rocas sin metamorfismo'], correct: 1, exp: 'Las orientadas proceden del metamorfismo de rocas silicatadas y son las más comunes.' },
  // Deformación y riesgo
  { s: 'Deformación y riesgo sísmico', q: '¿Qué deformación es responsable de los terremotos?', opts: ['Plástica', 'Por rotura', 'Elástica', 'Química'], correct: 2, exp: 'La deformación elástica (la roca vuelve a su estado al cesar el esfuerzo) es la responsable de los terremotos.' },
  { s: 'Deformación y riesgo sísmico', q: '¿Qué ocurre cuando se supera el límite elástico?', opts: ['La roca vuelve a su estado', 'La roca se dobla (deformación plástica)', 'La roca se fractura', 'No pasa nada'], correct: 1, exp: 'Al superar el límite elástico se entra en deformación plástica: las rocas se doblan → pliegues.' },
  { s: 'Deformación y riesgo sísmico', q: '¿Qué ocurre cuando se supera el límite plástico?', opts: ['La roca se comba', 'La roca vuelve a su forma original', 'La roca se fractura (rotura)', 'Se funde'], correct: 2, exp: 'Al superar el límite plástico se produce la deformación por rotura: las rocas se fracturan → fallas.' },
  { s: 'Deformación y riesgo sísmico', q: '¿Qué es un riesgo geológico?', opts: ['Un fenómeno meteorológico', 'Un proceso geológico que, por localización, severidad y frecuencia, amenaza a personas, bienes o economía', 'La probabilidad de encontrar minerales', 'Un estudio sísmico'], correct: 1, exp: 'El riesgo geológico es toda circunstancia, proceso o suceso geológico que, por su localización, severidad y frecuencia, suponga una amenaza para la salud, seguridad o bienestar.' },
  { s: 'Deformación y riesgo sísmico', q: '¿Qué es la peligrosidad en un riesgo geológico?', opts: ['El daño producido', 'Probabilidad de que ocurra el fenómeno catastrófico en un intervalo de tiempo', 'Los bienes expuestos', 'La magnitud máxima registrada'], correct: 1, exp: 'La peligrosidad es la probabilidad de que suceda el fenómeno catastrófico en un intervalo de tiempo determinado.' },
  { s: 'Deformación y riesgo sísmico', q: '¿Qué es la exposición en un riesgo geológico?', opts: ['El grado del daño', 'La probabilidad del fenómeno', 'Conjunto de personas, bienes e infraestructuras expuestos al riesgo', 'La edad de las rocas'], correct: 2, exp: 'La exposición es el conjunto de personas, bienes e infraestructuras que están en zona de riesgo.' },
  { s: 'Deformación y riesgo sísmico', q: '¿Qué es la vulnerabilidad?', opts: ['El daño esperable cuando el fenómeno ocurre', 'La probabilidad del evento', 'El número de volcanes de una región', 'La cantidad de magma'], correct: 0, exp: 'La vulnerabilidad es el grado del daño esperable cuando el fenómeno se produce.' },
]

export const unidad: Unidad = {
  id: 'geo-u2',
  unidad: 'Unidad 2',
  title: 'Procesos Geológicos Internos',
  shortTitle: 'Procesos Internos',
  description: 'Magmatismo, vulcanismo, metamorfismo, deformación de las rocas y riesgo geológico.',
  footer: 'Magmatismo · Vulcanismo · Metamorfismo',
  mapaRoot: 'Procesos Geológicos Internos',
  accent: 'volcanic',
  mapa,
  fichas,
  quiz,
  Historia,
}
