import type { Ficha, Pregunta, RamaMapa, Unidad } from '../../types'
import { Divider, K } from '../../components/ui'

// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'sistema', label: 'La Tierra como sistema', color: 'terracotta',
    children: [
      { id: 's1', label: 'Sistema cerrado', detail: 'Intercambia energía (radiación solar, calor) pero no materia de forma significativa.' },
      { id: 's2', label: 'Subsistemas', children: [
        { id: 's2a', label: 'Geosfera', detail: 'La parte sólida de la Tierra.' },
        { id: 's2b', label: 'Hidrosfera', detail: 'Toda el agua del planeta.' },
        { id: 's2c', label: 'Atmósfera', detail: 'La capa de gases.' },
        { id: 's2d', label: 'Biosfera', detail: 'Los seres vivos.' },
      ]},
      { id: 's3', label: 'Motor', detail: 'Energía solar (externa) + calor interno de la Tierra.' },
    ],
  },
  {
    id: 'metodos', label: 'Métodos de estudio del interior', color: 'petrol',
    children: [
      { id: 'm1', label: 'Métodos directos', children: [
        { id: 'm1a', label: 'Minas y simas', detail: 'Acceso hasta 3.000 m de profundidad.' },
        { id: 'm1b', label: 'Sondeos geológicos', detail: 'Hasta 12 km (Proyecto Mohole).' },
        { id: 'm1c', label: 'Volcanes', detail: 'Expulsan materiales de zonas profundas.' },
        { id: 'm1d', label: 'Orógenos', detail: 'Materiales de cierta profundidad afloran en superficie.' },
        { id: 'm1e', label: 'Limitación', detail: 'Solo acceden a los primeros metros del manto.' },
      ]},
      { id: 'm2', label: 'Métodos indirectos', children: [
        { id: 'm2a', label: 'Gravimétrico', detail: 'Anomalías en la gravedad → localización de yacimientos.' },
        { id: 'm2b', label: 'Temperatura', detail: 'Gradiente geotérmico: 3°C cada 100 m.' },
        { id: 'm2c', label: 'Magnetismo terrestre', detail: 'Anomalías magnéticas → yacimientos de hierro.' },
        { id: 'm2d', label: 'Eléctrico', detail: 'Resistividad → aguas subterráneas, yacimientos. Preciso hasta 1.000 m.' },
        { id: 'm2e', label: 'Meteoritos', detail: 'Composición similar a planetesimales originales.' },
        { id: 'm2f', label: 'Método sísmico ★', detail: 'El más importante. Estudia ondas P y S para mapear el interior.' },
      ]},
    ],
  },
  {
    id: 'ondas', label: 'Ondas sísmicas', color: 'volcanic',
    children: [
      { id: 'o1', label: 'Ondas P', detail: 'Longitudinales, 6-13 km/s. Atraviesan todo (más lentas en fluidos).' },
      { id: 'o2', label: 'Ondas S', detail: 'Transversales, 3-8 km/s. NO atraviesan fluidos.' },
      { id: 'o3', label: 'Se refractan al cambiar de medio' },
      { id: 'o4', label: 'Discontinuidades', children: [
        { id: 'o4a', label: 'Mohorovicic (Moho)', detail: '35-70 km (continentes) / 8-10 km (océanos). P y S aceleran. Separa corteza del manto.' },
        { id: 'o4b', label: 'Gutenberg', detail: '2.900 km. P bajan velocidad, S desaparecen → medio líquido. Separa manto del núcleo externo.' },
        { id: 'o4c', label: 'Lehman', detail: '4.900-5.150 km. P aceleran → medio sólido. Separa núcleo externo del interno.' },
      ]},
    ],
  },
  {
    id: 'geoquimico', label: 'Modelo geoquímico (composición)', color: 'ochre',
    children: [
      { id: 'g1', label: 'Corteza', children: [
        { id: 'g1a', label: 'Continental', detail: '35-70 km, heterogénea, rocas antiguas (3.800 Ma), tipo granito, menos densa. Niveles: sedimentarias → metamórficas/plutónicas ácidas → metamórficas intensas/básicas.' },
        { id: 'g1b', label: 'Oceánica', detail: '8-10 km, homogénea, rocas jóvenes (180 Ma), tipo basalto, más densa. Capas: sedimentos → basaltos → gabros.' },
      ]},
      { id: 'g2', label: 'Manto', detail: 'Entre Moho y Gutenberg. Peridotitas. Manto superior + zona de transición + manto inferior.' },
      { id: 'g3', label: 'Núcleo', detail: 'Metálico: hierro, níquel, oxígeno, azufre.' },
    ],
  },
  {
    id: 'geodinamico', label: 'Modelo geodinámico (dinámica)', color: 'turquoise',
    children: [
      { id: 'd1', label: 'Litosfera', detail: 'Corteza + manto superior. Rígida, fracturada en placas. 50 km en océanos, 100-300 km en continentes.' },
      { id: 'd2', label: 'Astenosfera', detail: 'Sólida pero próxima a fusión (plástica). Ondas sísmicas se ralentizan. Sobre ella flotan las placas.' },
      { id: 'd3', label: 'Mesosfera', detail: 'Hasta 2.900 km (manto inferior). Células convectivas, plumas del manto.' },
      { id: 'd4', label: 'Capa D', detail: 'Base del manto, heterogénea. Origen de penachos térmicos.' },
      { id: 'd5', label: 'Endosfera', detail: 'Núcleo externo (fundido) + interno (sólido). Giro diferencial → campo magnético.' },
    ],
  },
  {
    id: 'pruebas', label: 'Pruebas de la tectónica de placas', color: 'terracotta',
    children: [
      { id: 'p1', label: 'Deriva continental (Wegener, 1912)', children: [
        { id: 'p1a', label: 'Pruebas geológicas', detail: 'Correlación de estructuras a ambos lados del Atlántico.' },
        { id: 'p1b', label: 'Pruebas paleontológicas', detail: 'Mismos fósiles en continentes separados.' },
        { id: 'p1c', label: 'Pruebas paleoclimáticas', detail: 'Tillitas (rocas glaciares) en regiones hoy tropicales → Pangea.' },
      ]},
      { id: 'p2', label: 'Tectónica de placas (Holmes, 1929)', detail: 'Corrientes de convección térmica mueven las placas.' },
      { id: 'p3', label: 'Magnetismo de rocas', children: [
        { id: 'p3a', label: 'Curvas de deriva polar', detail: 'Distintas por continente → los continentes se mueven.' },
        { id: 'p3b', label: 'Bandas magnéticas simétricas', detail: 'En dorsales → expansión del fondo oceánico.' },
      ]},
      { id: 'p4', label: 'Expansión del fondo oceánico (Hess, 1960)', detail: 'Corteza se forma en dorsales, se destruye en subducción. Corteza oceánica nunca supera 200 Ma.' },
    ],
  },
  {
    id: 'teoria', label: 'Teoría de la tectónica de placas', color: 'petrol',
    children: [
      { id: 't1', label: 'Placas litosféricas', detail: 'Fragmentos de litosfera que flotan sobre manto plástico. 8 grandes + menores. Mayoría mixtas (Pacífica = oceánica, Arábiga = continental).' },
      { id: 't2', label: 'Tipos de límites', children: [
        { id: 't2a', label: 'Bordes pasivos (transformantes)', detail: 'Cizalla, no crea ni destruye litosfera. Sismicidad por rozamiento. Ej: San Andrés.' },
        { id: 't2b', label: 'Bordes constructivos (dorsales)', detail: 'Tensión, magma asciende. Nueva corteza oceánica. Vulcanismo poco explosivo, sismicidad superficial.' },
        { id: 't2c', label: 'Bordes destructivos', children: [
          { id: 't2c1', label: 'Oceánica bajo continental', detail: 'Fosa oceánica, plano de Benioff, vulcanismo, cordilleras (Andes).' },
          { id: 't2c2', label: 'Oceánica bajo oceánica', detail: 'Fosa + arco de islas volcánicas (Japón).' },
          { id: 't2c3', label: 'Continental vs continental', detail: 'Gran cordillera (Himalaya). Sismicidad pero NO vulcanismo.' },
        ]},
      ]},
      { id: 't3', label: 'Motor de las placas', children: [
        { id: 't3a', label: 'Temperatura (convección)', detail: 'Columnas ascendentes calientes desde capa D, columnas descendentes frías en subducción.' },
        { id: 't3b', label: 'Gravedad', detail: 'Slab pull: litosfera densa tira de la placa al hundirse. Ridge push: empuje lateral desde dorsales.' },
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
        <p className="font-body text-sm uppercase tracking-widest text-terracotta mb-3">Unidad 1 · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          La Tierra por dentro
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          Todo el tema contado como si alguien te lo estuviera explicando. Sin formato apuntes, sin aburrimiento. Lee con calma — al terminar, lo tendrás mucho más claro.
        </p>
      </header>

      {/* Sección 1 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          1. La Tierra es como una cebolla<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">(pero más interesante)</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          La Tierra es un <K>sistema</K>. ¿Qué significa eso? Que sus partes no van por libre — interactúan entre ellas y forman algo más complejo que la suma de las piezas. Y es un <K>sistema cerrado</K>: intercambia energía con el exterior (recibe radiación del Sol, emite calor), pero prácticamente no intercambia materia. Sí, caen meteoritos y salen naves espaciales, pero en la escala del planeta eso es despreciable.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Tiene cuatro grandes subsistemas que están constantemente influyéndose entre sí: la <K>geosfera</K> (la parte sólida), la <K>hidrosfera</K> (el agua), la <K>atmósfera</K> (los gases) y la <K>biosfera</K> (los seres vivos). ¿Qué mueve todo esto? Dos fuentes de energía: el Sol desde fuera y el calor interno de la Tierra desde dentro.
        </p>
      </section>

      <Divider />

      {/* Sección 2 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          2. ¿Cómo sabemos lo que hay ahí abajo?
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Nadie ha viajado al centro de la Tierra (perdón, Julio Verne). Lo más profundo que hemos llegado con un sondeo son unos <K>12 km</K>, en el <K>Proyecto Mohole</K>. Y la Tierra tiene un radio de 6.371 km. Es como intentar conocer el interior de una sandía habiendo pinchado solo la cáscara.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los <K>métodos directos</K> — minas (hasta 3 km), sondeos, volcanes que escupen material de las profundidades, y montañas donde afloran rocas originadas a profundidad — nos dan información real pero muy limitada. Solo llegamos a los primeros metros del manto.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Así que necesitamos <K>métodos indirectos</K>, que son como hacer de detective:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>El <K>método gravimétrico</K> detecta anomalías en la gravedad. Si debajo de ti hay un yacimiento de mineral muy denso, la gravedad ahí será ligeramente mayor de lo esperado. Útil para encontrar yacimientos.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>La <K>temperatura</K> aumenta 3°C cada 100 metros de profundidad (gradiente geotérmico). Pero ojo: aunque en el núcleo las temperaturas son brutales, el material no está del todo fundido porque la presión es tan enorme que mantiene las cosas en estado sólido o semifundido.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>El <K>magnetismo terrestre</K> existe porque el núcleo externo (metálico y líquido) rota a distinta velocidad que el interno. Esto crea un campo magnético. Las variaciones locales (anomalías magnéticas) nos dicen si hay rocas ricas en hierro debajo.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>El <K>método eléctrico</K> mide la resistividad de las rocas usando electrodos. Muy preciso hasta 1.000 m, luego pierde fiabilidad. Perfecto para encontrar aguas subterráneas.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Los <K>meteoritos</K> son como cápsulas del tiempo. Vienen del cinturón de asteroides y tienen una composición parecida a los planetesimales que formaron la Tierra, así que nos cuentan de qué está hecho el interior.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Y el campeón indiscutible: el <K>método sísmico</K>. Es el que más información nos ha dado, y merece su propia sección.</span>
          </li>
        </ul>
      </section>

      <Divider />

      {/* Sección 3 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          3. Las ondas que lo cuentan todo
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Cuando hay un terremoto, en el punto donde se produce (el hipocentro o foco) se generan dos tipos de ondas que viajan por el interior de la Tierra:
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las <K>ondas P</K> (primarias) son las más rápidas (6 a 13 km/s). Son longitudinales — las partículas vibran en la misma dirección en que viaja la onda, como un muelle que se comprime y se estira. Pueden atravesar cualquier medio: sólido, líquido, gas. Pero en los fluidos van más lentas.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las <K>ondas S</K> (secundarias) son más lentas (3 a 8 km/s). Son transversales — las partículas vibran perpendiculares a la dirección de la onda, como cuando agitas una cuerda. El dato clave: <span className="font-bold text-terracotta-dark">NO se propagan por medios fluidos</span>. Si las ondas S desaparecen en algún punto, es que ahí hay algo líquido.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Estas ondas cambian de velocidad y dirección (se refractan) al pasar de un material a otro. Analizando esos cambios desde muchos sismógrafos repartidos por el mundo, hemos podido mapear el interior entero de la Tierra.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-volcanic pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Los puntos donde las ondas cambian bruscamente se llaman discontinuidades, y son las fronteras entre capas.
          </p>
        </blockquote>

        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Mohorovicic (Moho)</K>: a 35-70 km en continentes, 8-10 km en océanos. Aquí P y S aceleran. Separa la corteza del manto.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Gutenberg</K>: a 2.900 km. Las P bajan velocidad y las S desaparecen por completo. Esto significa que pasamos a un medio líquido. Separa el manto del núcleo externo.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><K>Lehman</K>: a 4.900-5.150 km. Las P aceleran de nuevo — volvemos a un medio sólido. Separa el núcleo externo del interno.</span>
          </li>
        </ul>
      </section>

      <Divider />

      {/* Sección 4 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          4. Las capas de la Tierra<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">— versión composición</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Hay dos formas de dividir la Tierra en capas: por composición (modelo geoquímico) y por comportamiento mecánico (modelo geodinámico). Primero la composición.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>corteza</K> es la capa más externa y la más fina. Pero no toda la corteza es igual:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>La <K>corteza continental</K> es gruesa (35-70 km), variada y vieja. Sus rocas más antiguas tienen 3.800 millones de años. Está hecha de materiales menos densos, tipo granito. Si la cortas en vertical, arriba encuentras rocas sedimentarias y volcánicas, en medio metamórficas con plutónicas ácidas (diorita), y abajo rocas muy metamorfizadas con ígneas básicas (gabro).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>La <K>corteza oceánica</K> es delgada (8-10 km), homogénea y joven — nunca supera los 180 millones de años (ya veremos por qué). Más densa, tipo basalto. Tiene tres capas simples: sedimentos arriba, basaltos en medio, gabros abajo.</span>
          </li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          El <K>manto</K> va desde la Moho hasta Gutenberg. Está hecho de <K>peridotitas</K>. Se divide en manto superior (con una zona de transición) y manto inferior. Mismo material, pero propiedades físicas diferentes según la profundidad.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          El <K>núcleo</K> es metálico: hierro y níquel, con algo de oxígeno y azufre.
        </p>
      </section>

      <Divider />

      {/* Sección 5 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          5. Las capas de la Tierra<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">— versión dinámica</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Este modelo no mira de qué están hechas las capas, sino cómo se comportan mecánicamente. Y es fundamental para entender la tectónica de placas.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>litosfera</K> es la capa rígida exterior: incluye toda la corteza más la parte superior del manto. Está fracturada en placas que se mueven. En los océanos llega hasta 50 km de profundidad; en los continentes, hasta 100-300 km.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>astenosfera</K> está justo debajo. Es sólida, pero tan cerca del punto de fusión que se comporta de forma plástica — se deforma lentamente. Las ondas sísmicas se ralentizan aquí. Sobre ella "flotan" las placas litosféricas.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>mesosfera</K> llega hasta 2.900 km (es el manto inferior). Aquí se forman las células de convección: material caliente sube desde la frontera con el núcleo y material frío baja en las zonas de subducción. También están las plumas del manto — chorros de material caliente que suben.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>capa D</K> está en la base del manto, justo sobre el núcleo. Es heterogénea y ahí nacen los penachos térmicos.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>endosfera</K> es el núcleo: externo (fundido) e interno (sólido). El núcleo externo gira a distinta velocidad que el interno, y ese giro diferencial genera el campo magnético terrestre.
        </p>
      </section>

      <Divider />

      {/* Sección 6 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          6. Las pruebas del gran movimiento
        </h3>

        <blockquote className="border-l-4 border-terracotta pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            En 1912, Alfred Wegener propuso que los continentes se mueven. Le dijeron que estaba loco. Tenía razón.
          </p>
        </blockquote>

        <p className="font-body text-lg leading-relaxed mb-2">
          Sus pruebas de la <K>deriva continental</K>:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><strong>Geológicas</strong>: si juntas Sudamérica y África, las estructuras geológicas (cratones, cinturones montañosos) encajan como piezas de puzle.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><strong>Paleontológicas</strong>: los mismos fósiles aparecen en continentes que hoy están separados por océanos enteros. Los bichos no cruzaron nadando.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span><strong>Paleoclimáticas</strong>: se encuentran <K>tillitas</K> (rocas glaciares) en regiones que hoy son tropicales. Esas rocas se formaron cuando esos continentes estaban en latitudes polares.</span>
          </li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          Wegener propuso que todos formaban un supercontinente, <K>Pangea</K>, que se fragmentó.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          El problema de Wegener: no supo explicar QUÉ movía los continentes. Eso lo resolvió <K>Arthur Holmes en 1929</K> con las <K>corrientes de convección</K> del manto.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Las pruebas definitivas vinieron del estudio de los fondos oceánicos (gracias al sonar) y del magnetismo natural de las rocas:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Se descubrieron <K>dorsales oceánicas</K> (cordilleras submarinas) y <K>fosas oceánicas</K>, y que los volcanes y terremotos se concentran en esos bordes.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>Los minerales de hierro en las rocas se imantan cuando el magma se solidifica, quedando "congelada" la orientación del campo magnético de ese momento. Al medir esto en rocas de distintas edades y continentes, se obtienen <K>curvas de deriva polar</K> que no coinciden entre sí → los continentes se mueven.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-volcanic mt-1 shrink-0">▸</span>
            <span>En el fondo oceánico, las <K>anomalías magnéticas</K> forman bandas simétricas a ambos lados de las dorsales → el fondo se está expandiendo desde las dorsales.</span>
          </li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          <K>Harry Hess (1960)</K> propuso la <K>expansión del fondo oceánico</K>: la corteza se crea en las dorsales, se separa, y se destruye en las zonas de subducción. Por eso la corteza oceánica nunca tiene más de 200 millones de años — está en constante reciclaje.
        </p>
      </section>

      <Divider />

      {/* Sección 7 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          7. Las placas y sus choques
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las <K>placas litosféricas</K> son fragmentos de litosfera de tamaño muy variable que encajan como un puzle gigante. La mayoría son mixtas (tienen parte continental y oceánica). Hay 8 grandes y varias menores. Dato: la placa del Pacífico es solo oceánica, la Arábiga es solo continental.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Se mueven flotando sobre la astenosfera plástica, y donde se encuentran (los bordes) es donde pasa la acción geológica.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-8 mb-4">Tres tipos de bordes:</h4>

        <div className="space-y-6 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">1. Bordes pasivos (fallas transformantes)</h5>
            <p className="font-body text-base leading-relaxed">
              Las placas se deslizan lateralmente una junto a otra. No se crea ni se destruye litosfera, pero el rozamiento genera terremotos. Ejemplo clásico: la <K>Falla de San Andrés</K>.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">2. Bordes constructivos (dorsales)</h5>
            <p className="font-body text-base leading-relaxed">
              Las placas se separan. El magma sube por la grieta, se solidifica y forma nueva corteza oceánica. Hay vulcanismo poco explosivo (magma basáltico muy fluido) y terremotos superficiales poco intensos. Las dorsales son cordilleras submarinas de unos 3 km de altura y 60.000 km de longitud total — una por océano.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">3. Bordes destructivos (subducción y colisión)</h5>
            <p className="font-body text-base leading-relaxed mb-3">Las placas chocan. Tres variantes:</p>
            <ul className="font-body text-base leading-relaxed space-y-2 pl-1">
              <li className="flex gap-3">
                <span className="text-terracotta mt-1 shrink-0">▹</span>
                <span><strong>Oceánica bajo continental</strong>: La oceánica (más densa y delgada) se mete debajo. Se forma una fosa oceánica, terremotos intensos que siguen un plano inclinado (<K>plano de Benioff</K>), actividad volcánica, y cordilleras (como los Andes).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta mt-1 shrink-0">▹</span>
                <span><strong>Oceánica bajo oceánica</strong>: Una subduce bajo la otra, formando una fosa y un arco de islas volcánicas (como Japón).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta mt-1 shrink-0">▹</span>
                <span><strong>Continental contra continental</strong>: Ninguna subduce fácilmente (ambas son poco densas). Se forma una cordillera enorme por compresión (como el Himalaya). Hay sismicidad pero <span className="font-bold text-terracotta-dark">NO vulcanismo</span>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* Sección 8 */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          8. ¿Qué mueve todo esto?
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          El motor tiene dos componentes:
        </p>

        <div className="space-y-6 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-volcanic-dark mb-2">🌡️ Temperatura</h5>
            <p className="font-body text-base leading-relaxed">
              El interior de la Tierra está caliente (calor residual + desintegración radiactiva). Ese calor se transmite por <K>convección</K>: material caliente sube desde la capa D hasta la base de la litosfera en columnas ascendentes, y material frío baja en las zonas de subducción. Son las <K>células de convección</K> del manto.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-volcanic-dark mb-2">🪨 Gravedad</h5>
            <p className="font-body text-base leading-relaxed">
              Cuando la litosfera oceánica se enfría y se vuelve más densa que el material de debajo, se hunde. Al hacerlo, tira del resto de la placa como si fuera una manta que se cae de la cama (<K>slab pull</K>). Además, desde las dorsales hay un empuje lateral: la nueva corteza "empuja" la vieja hacia los lados (<K>ridge push</K>).
            </p>
          </div>
        </div>

        {/* Closing pull quote */}
        <blockquote className="border-l-4 border-turquoise pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            La corteza oceánica se recicla constantemente: nace en las dorsales y se destruye al subducir bajo otra placa. Por eso nunca supera los 200 millones de años.
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
  { s: 'La Tierra como sistema', p: '¿Qué tipo de sistema es la Tierra y qué implica?', r: 'Sistema cerrado. Intercambia energía con el exterior pero no materia (despreciando meteoritos y naves).' },
  { s: 'La Tierra como sistema', p: '¿Cuáles son los 4 subsistemas de la Tierra?', r: 'Geosfera, hidrosfera, atmósfera y biosfera.' },
  { s: 'La Tierra como sistema', p: '¿Cuáles son las dos fuentes de energía que mueven los subsistemas terrestres?', r: 'La energía solar (externa) y el calor interno de la Tierra.' },
  { s: 'Métodos de estudio', p: '¿Cuál es la profundidad máxima alcanzada por un sondeo geológico?', r: '12 km (Proyecto Mohole).' },
  { s: 'Métodos de estudio', p: '¿Por qué los volcanes son un método directo de estudio del interior terrestre?', r: 'Porque expulsan materiales que proceden de zonas profundas de la Tierra.' },
  { s: 'Métodos de estudio', p: '¿Qué limitación tienen TODOS los métodos directos?', r: 'Solo tienen acceso a los primeros metros del manto.' },
  { s: 'Métodos de estudio', p: '¿Qué estudia el método gravimétrico?', r: 'Las anomalías (diferencias entre valores teóricos y reales) en la aceleración de la gravedad, útiles para localizar yacimientos minerales.' },
  { s: 'Métodos de estudio', p: '¿Qué tres factores producen cambios en la aceleración de la gravedad?', r: '1) El valor del radio terrestre (latitud), 2) la altitud, y 3) la masa de los materiales bajo el punto de observación.' },
  { s: 'Métodos de estudio', p: '¿Qué es el gradiente geotérmico y cuál es su valor?', r: 'Es el aumento de temperatura con la profundidad: 3°C por cada 100 metros.' },
  { s: 'Métodos de estudio', p: '¿Por qué el material del interior terrestre no está fundido a pesar de las altas temperaturas?', r: 'Porque la presión es tan elevada que mantiene los materiales en estado sólido o semifundido.' },
  { s: 'Métodos de estudio', p: '¿Por qué la Tierra tiene campo magnético?', r: 'Porque el núcleo externo (metálico y líquido) rota a distinta velocidad que el núcleo interno (metálico y sólido).' },
  { s: 'Métodos de estudio', p: '¿Para qué sirve el método eléctrico y cuál es su limitación?', r: 'Sirve para localizar yacimientos metálicos y aguas subterráneas (midiendo la resistividad eléctrica). Pierde precisión a partir de 1.000 metros.' },
  { s: 'Métodos de estudio', p: '¿Por qué los meteoritos nos informan sobre el interior terrestre?', r: 'Porque son planetesimales que no formaron un planeta y tienen composición similar a los que originaron la Tierra.' },
  { s: 'Métodos de estudio', p: '¿Por qué el método sísmico es el más importante de los métodos indirectos?', r: 'Porque es el que más datos ha aportado sobre la estructura interna y la composición del planeta, al estudiar cómo se propagan las ondas sísmicas.' },
  { s: 'Ondas sísmicas', p: 'Diferencia entre ondas P y ondas S (velocidad, tipo de vibración, propagación).', r: 'P: 6-13 km/s, longitudinales, atraviesan cualquier medio (más lentas en fluidos). S: 3-8 km/s, transversales, NO se propagan en medios fluidos.' },
  { s: 'Ondas sísmicas', p: '¿Qué son las discontinuidades sísmicas?', r: 'Zonas donde las ondas sísmicas se reflejan y refractan, indicando cambios de composición o estado físico entre capas.' },
  { s: 'Discontinuidades', p: '¿A qué profundidad está la discontinuidad de Mohorovicic y qué separa?', r: '35-70 km (continentes) y 8-10 km (océanos). Separa la corteza del manto. Las ondas P y S aumentan su velocidad.' },
  { s: 'Discontinuidades', p: '¿A qué profundidad está la discontinuidad de Gutenberg y qué separa?', r: '2.900 km. Separa el manto del núcleo externo. Las P disminuyen velocidad y las S dejan de transmitirse (medio líquido).' },
  { s: 'Discontinuidades', p: '¿A qué profundidad está la discontinuidad de Lehman y qué separa?', r: '4.900-5.150 km. Separa el núcleo externo del interno. Las P aumentan velocidad (medio sólido).' },
  { s: 'Discontinuidades', p: '¿Cómo sabemos que el núcleo externo es líquido?', r: 'Porque las ondas S (que no se propagan en fluidos) desaparecen al llegar a la discontinuidad de Gutenberg (2.900 km).' },
  { s: 'Modelo geoquímico', p: 'Diferencias entre corteza continental y oceánica (al menos 4).', r: 'Continental: 35-70 km, heterogénea, rocas hasta 3.800 Ma, menos densa (tipo granito). Oceánica: 8-10 km, homogénea, rocas hasta 180 Ma, más densa (tipo basalto).' },
  { s: 'Modelo geoquímico', p: '¿Cuáles son las tres capas verticales de la corteza continental (de arriba a abajo)?', r: '1) Rocas sedimentarias, volcánicas y plutónicas ácidas (granito). 2) Metamorfismo intermedio e ígneas intermedias (diorita). 3) Rocas muy metamorfizadas e ígneas básicas (gabro).' },
  { s: 'Modelo geoquímico', p: '¿Cuáles son las tres capas de la corteza oceánica?', r: '1) Capa de sedimentos. 2) Capa de basaltos (solidificados en dorsales). 3) Gabros (composición similar al basalto pero solidificación más lenta).' },
  { s: 'Modelo geoquímico', p: '¿De qué material está formado el manto?', r: 'Peridotitas.' },
  { s: 'Modelo geoquímico', p: '¿Qué composición tiene el núcleo?', r: 'Metálico: hierro, níquel, oxígeno y azufre.' },
  { s: 'Modelo geodinámico', p: '¿Qué es la litosfera y qué incluye?', r: 'Capa rígida más superficial que comprende la corteza y el manto superior. Está fracturada en placas litosféricas. 50 km en océanos, 100-300 km en continentes.' },
  { s: 'Modelo geodinámico', p: '¿Qué es la astenosfera y por qué es importante?', r: 'Capa sólida próxima al punto de fusión (plástica). Sobre ella "flotan" y se desplazan las placas litosféricas. Las ondas sísmicas reducen su velocidad al atravesarla.' },
  { s: 'Modelo geodinámico', p: '¿Qué ocurre en la mesosfera?', r: 'Se forman células convectivas: material caliente asciende desde el límite con el núcleo y fragmentos de litosfera fría descienden en zonas de subducción. Contiene plumas del manto.' },
  { s: 'Modelo geodinámico', p: '¿Qué genera el campo magnético terrestre según el modelo geodinámico?', r: 'El giro diferencial del núcleo externo (líquido) respecto al interno (sólido) en la endosfera.' },
  { s: 'Deriva continental y pruebas', p: '¿Quién propuso la deriva continental y en qué año?', r: 'Alfred Wegener en 1912.' },
  { s: 'Deriva continental y pruebas', p: 'Nombra los tres tipos de pruebas de la deriva continental.', r: 'Geológicas (estructuras coinciden a ambos lados del Atlántico), paleontológicas (mismos fósiles en continentes separados) y paleoclimáticas (tillitas en zonas hoy tropicales).' },
  { s: 'Deriva continental y pruebas', p: '¿Qué es Pangea?', r: 'El supercontinente que según Wegener reunía todos los continentes antes de su fragmentación.' },
  { s: 'Deriva continental y pruebas', p: '¿Qué mecanismo propuso Holmes (1929) para explicar el movimiento de las placas?', r: 'Las corrientes de convección térmica en el manto.' },
  { s: 'Paleomagnetismo y expansión', p: '¿Cómo demuestra el paleomagnetismo que los continentes se mueven?', r: 'Las curvas de deriva polar obtenidas en distintos continentes no coinciden entre sí, lo que indica que los continentes han cambiado de posición.' },
  { s: 'Paleomagnetismo y expansión', p: '¿Qué evidencia del fondo oceánico apoya la expansión?', r: 'Las anomalías magnéticas forman bandas paralelas y simétricas a ambos lados de las dorsales → la corteza se forma en la dorsal y se separa.' },
  { s: 'Paleomagnetismo y expansión', p: '¿Por qué la corteza oceánica nunca supera los 200 Ma de antigüedad?', r: 'Porque se crea continuamente en las dorsales y se destruye en las zonas de subducción. Está en constante reciclaje.' },
  { s: 'Tectónica de placas', p: '¿Qué son los bordes pasivos y qué ejemplo famoso hay?', r: 'Zonas donde las placas se deslizan lateralmente (esfuerzos de cizalla). No se crea ni destruye litosfera, pero hay sismicidad por rozamiento. Son las fallas transformantes (ej: San Andrés).' },
  { s: 'Tectónica de placas', p: '¿Qué ocurre en un borde constructivo?', r: 'Las placas se separan (esfuerzos de tensión), el magma asciende y solidifica formando nueva corteza oceánica. Se dan en las dorsales oceánicas. Vulcanismo poco explosivo, sismicidad superficial.' },
  { s: 'Tectónica de placas', p: 'Describe los tres tipos de bordes destructivos y sus resultados.', r: '1) Oceánica bajo continental: fosa, sismicidad (plano de Benioff), vulcanismo, cordilleras (Andes). 2) Oceánica bajo oceánica: fosa + arco de islas (Japón). 3) Continental vs continental: cordillera sin vulcanismo (Himalaya).' },
  { s: 'Motor de las placas', p: '¿Cuáles son las dos fuerzas que mueven las placas y cómo actúan?', r: '1) Temperatura: convección del manto (columnas calientes suben, frías bajan). 2) Gravedad: la litosfera oceánica densa tira de la placa al hundirse (slab pull) y la nueva corteza empuja desde las dorsales (ridge push).' },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  { s: 'La Tierra como sistema', q: '¿Qué tipo de sistema es la Tierra?', opts: ['Abierto', 'Cerrado', 'Aislado', 'Semiabierto'], correct: 1, exp: 'La Tierra intercambia energía con el exterior (radiación solar) pero no materia de forma significativa.' },
  { s: 'La Tierra como sistema', q: '¿Cuáles son los cuatro subsistemas de la Tierra?', opts: ['Corteza, manto, núcleo y atmósfera', 'Geosfera, hidrosfera, atmósfera y biosfera', 'Litosfera, astenosfera, mesosfera y endosfera', 'Hidrosfera, criosfera, atmósfera y geosfera'], correct: 1, exp: 'Los cuatro subsistemas son geosfera (sólida), hidrosfera (agua), atmósfera (gases) y biosfera (seres vivos).' },
  { s: 'La Tierra como sistema', q: '¿Qué intercambia la Tierra con el exterior?', opts: ['Materia y energía', 'Solo materia', 'Solo energía', 'Ni materia ni energía'], correct: 2, exp: 'Como sistema cerrado, intercambia energía (recibe radiación solar, emite calor) pero no materia de forma significativa.' },
  { s: 'La Tierra como sistema', q: '¿Cuáles son las dos fuentes de energía que mueven los subsistemas terrestres?', opts: ['Viento y mareas', 'Energía solar y calor interno', 'Gravedad lunar y radiación cósmica', 'Magnetismo y radiactividad'], correct: 1, exp: 'El Sol desde fuera y el calor interno de la Tierra desde dentro son los dos motores del sistema.' },
  { s: 'Métodos de estudio', q: '¿Cuál de estos NO es un método directo de estudio del interior terrestre?', opts: ['Volcanes', 'Sondeos geológicos', 'Método gravimétrico', 'Minas y simas'], correct: 2, exp: 'El método gravimétrico es indirecto — se basa en cálculos sobre anomalías de la gravedad, no en observación directa.' },
  { s: 'Métodos de estudio', q: '¿Cuál es la profundidad máxima alcanzada por un sondeo geológico?', opts: ['3 km', '12 km', '50 km', '100 km'], correct: 1, exp: 'El Proyecto Mohole alcanzó unos 12 km, apenas la "cáscara" de los 6.371 km de radio terrestre.' },
  { s: 'Métodos de estudio', q: '¿Qué limitación comparten TODOS los métodos directos?', opts: ['No funcionan bajo el mar', 'Solo acceden a los primeros metros del manto', 'No pueden analizar rocas', 'Son demasiado caros'], correct: 1, exp: 'Minas, sondeos, volcanes y orógenos solo dan información de las capas más superficiales.' },
  { s: 'Métodos de estudio', q: '¿Qué detecta el método gravimétrico?', opts: ['Ondas sísmicas', 'Anomalías en la aceleración de la gravedad', 'Campos eléctricos', 'Variaciones de temperatura'], correct: 1, exp: 'Detecta diferencias entre valores teóricos y reales de la gravedad, útiles para localizar yacimientos minerales.' },
  { s: 'Métodos de estudio', q: '¿Qué tres factores producen cambios en la aceleración de la gravedad?', opts: ['Temperatura, presión y humedad', 'Latitud (radio), altitud y masa de materiales bajo el punto', 'Viento, marea y rotación', 'Composición, densidad y color de las rocas'], correct: 1, exp: 'El radio terrestre (latitud), la altitud y la masa de los materiales subterráneos son los tres factores.' },
  { s: 'Métodos de estudio', q: '¿Para qué sirve el método eléctrico?', opts: ['Detectar terremotos', 'Localizar yacimientos metálicos y aguas subterráneas', 'Medir la temperatura del manto', 'Estudiar fósiles'], correct: 1, exp: 'Mide la resistividad eléctrica de las rocas. Preciso hasta 1.000 m, luego pierde fiabilidad.' },
  { s: 'Métodos de estudio', q: '¿Por qué los meteoritos informan sobre el interior terrestre?', opts: ['Porque vienen del centro de la Tierra', 'Porque son planetesimales con composición similar a la Tierra primitiva', 'Porque atraviesan el manto al caer', 'Porque contienen fósiles del interior'], correct: 1, exp: 'Son planetesimales del cinturón de asteroides, con composición similar a los que formaron la Tierra.' },
  { s: 'Métodos de estudio', q: '¿Cuál es el método indirecto más importante para estudiar el interior terrestre?', opts: ['Gravimétrico', 'Eléctrico', 'Sísmico', 'Magnético'], correct: 2, exp: 'El método sísmico es el que más datos ha aportado, al estudiar cómo se propagan las ondas P y S.' },
  { s: 'Ondas sísmicas', q: '¿Cuál es el valor del gradiente geotérmico?', opts: ['1°C cada 100 m', '3°C cada 100 m', '5°C cada 100 m', '3°C cada 1.000 m'], correct: 1, exp: 'La temperatura aumenta 3°C por cada 100 metros de profundidad.' },
  { s: 'Ondas sísmicas', q: '¿Qué tipo de ondas sísmicas NO se propagan por medios fluidos?', opts: ['Ondas P', 'Ondas S', 'Ambas se propagan por fluidos', 'Ninguna se propaga por fluidos'], correct: 1, exp: 'Las ondas S son transversales y no pueden transmitirse en medios fluidos. Las P sí, aunque más lentamente.' },
  { s: 'Ondas sísmicas', q: '¿Qué velocidad tienen las ondas P?', opts: ['1-3 km/s', '3-8 km/s', '6-13 km/s', '15-20 km/s'], correct: 2, exp: 'Las ondas P viajan entre 6 y 13 km/s, siendo las más rápidas.' },
  { s: 'Ondas sísmicas', q: '¿Qué tipo de vibración tienen las ondas P?', opts: ['Transversal', 'Longitudinal', 'Circular', 'Aleatoria'], correct: 1, exp: 'Las ondas P son longitudinales: las partículas vibran en la misma dirección que viaja la onda, como un muelle.' },
  { s: 'Ondas sísmicas', q: '¿Qué tipo de vibración tienen las ondas S?', opts: ['Longitudinal', 'Transversal', 'Rotatoria', 'Compresiva'], correct: 1, exp: 'Las ondas S son transversales: las partículas vibran perpendiculares a la dirección de la onda, como agitar una cuerda.' },
  { s: 'Ondas sísmicas', q: '¿Qué ocurre con las ondas sísmicas al pasar de un material a otro?', opts: ['Desaparecen', 'Se refractan (cambian velocidad y dirección)', 'Se mantienen iguales', 'Se convierten en calor'], correct: 1, exp: 'Al cambiar de medio, las ondas cambian de velocidad y dirección (refracción). Estos cambios permiten mapear el interior.' },
  { s: 'Ondas sísmicas', q: '¿Qué son las discontinuidades sísmicas?', opts: ['Tipos de terremotos', 'Zonas donde las ondas cambian bruscamente, indicando fronteras entre capas', 'Instrumentos de medición', 'Tipos de rocas del manto'], correct: 1, exp: 'Son zonas donde las ondas se reflejan y refractan, indicando cambios de composición o estado físico.' },
  { s: 'Discontinuidades', q: '¿Qué discontinuidad separa la corteza del manto?', opts: ['Gutenberg', 'Lehman', 'Mohorovicic', 'Conrad'], correct: 2, exp: 'La discontinuidad de Mohorovicic (Moho) se encuentra a 35-70 km en continentes y 8-10 km en océanos.' },
  { s: 'Discontinuidades', q: '¿A qué profundidad está la discontinuidad de Gutenberg?', opts: ['35-70 km', '700 km', '2.900 km', '5.150 km'], correct: 2, exp: 'La discontinuidad de Gutenberg está a 2.900 km y separa el manto del núcleo externo.' },
  { s: 'Discontinuidades', q: '¿Qué ocurre con las ondas en la discontinuidad de Gutenberg?', opts: ['P y S aceleran', 'P bajan velocidad y S desaparecen', 'Ambas desaparecen', 'Ambas aceleran'], correct: 1, exp: 'Las P disminuyen velocidad y las S dejan de transmitirse, indicando un medio líquido (núcleo externo).' },
  { s: 'Discontinuidades', q: '¿Cómo sabemos que el núcleo externo es líquido?', opts: ['Porque las ondas P desaparecen', 'Porque las ondas S desaparecen en la discontinuidad de Gutenberg', 'Porque la temperatura es demasiado alta', 'Por el estudio de meteoritos'], correct: 1, exp: 'Las ondas S no se propagan en fluidos. Al llegar a 2.900 km (Gutenberg) desaparecen, indicando un medio líquido.' },
  { s: 'Discontinuidades', q: '¿Qué indica la discontinuidad de Lehman?', opts: ['Paso de corteza a manto', 'Paso de manto a núcleo externo', 'Paso de núcleo externo a interno (las P aceleran → sólido)', 'Paso de litosfera a astenosfera'], correct: 2, exp: 'A 4.900-5.150 km las P aceleran de nuevo, indicando que volvemos a un medio sólido (núcleo interno).' },
  { s: 'Discontinuidades', q: '¿Por qué el material del interior no está fundido pese a las altas temperaturas?', opts: ['Porque no hay suficiente calor', 'Porque la presión lo mantiene sólido o semifundido', 'Porque está muy lejos del Sol', 'Porque el campo magnético lo enfría'], correct: 1, exp: 'La presión es tan elevada que mantiene los materiales en estado sólido o semifundido a pesar del calor extremo.' },
  { s: 'Modelo geoquímico', q: '¿Cuál es la roca principal del manto?', opts: ['Granito', 'Basalto', 'Peridotita', 'Gabro'], correct: 2, exp: 'El manto está formado básicamente de peridotitas, tanto en el manto superior como en el inferior.' },
  { s: 'Modelo geoquímico', q: 'La corteza oceánica es más _____ y más _____ que la continental.', opts: ['Gruesa y antigua', 'Delgada y joven', 'Delgada y antigua', 'Gruesa y joven'], correct: 1, exp: 'La oceánica tiene 8-10 km (vs 35-70 km) y nunca supera 180 Ma (vs 3.800 Ma).' },
  { s: 'Modelo geoquímico', q: '¿Qué tipo de roca predomina en la corteza continental?', opts: ['Basalto', 'Peridotita', 'Granito', 'Gabro'], correct: 2, exp: 'La corteza continental está hecha de materiales menos densos, tipo granito.' },
  { s: 'Modelo geoquímico', q: '¿Qué tipo de roca predomina en la corteza oceánica?', opts: ['Granito', 'Basalto', 'Peridotita', 'Caliza'], correct: 1, exp: 'La corteza oceánica es más densa, tipo basalto, con capas de sedimentos, basaltos y gabros.' },
  { s: 'Modelo geoquímico', q: '¿Cuáles son las tres capas de la corteza oceánica (de arriba a abajo)?', opts: ['Granito, diorita, gabro', 'Sedimentos, basaltos, gabros', 'Basaltos, peridotitas, gabros', 'Sedimentos, granitos, peridotitas'], correct: 1, exp: 'La corteza oceánica tiene tres capas: sedimentos arriba, basaltos en medio, gabros abajo.' },
  { s: 'Modelo geoquímico', q: '¿Cuál es la antigüedad máxima de las rocas de la corteza continental?', opts: ['180 Ma', '500 Ma', '3.800 Ma', '4.500 Ma'], correct: 2, exp: 'Las rocas más antiguas de la corteza continental tienen 3.800 millones de años.' },
  { s: 'Modelo geoquímico', q: '¿Qué composición tiene el núcleo terrestre?', opts: ['Silicatos y oxígeno', 'Peridotitas', 'Hierro, níquel, oxígeno y azufre', 'Granito y basalto'], correct: 2, exp: 'El núcleo es metálico: principalmente hierro y níquel, con algo de oxígeno y azufre.' },
  { s: 'Modelo geodinámico', q: '¿Qué capa del modelo geodinámico es rígida y está fracturada en placas?', opts: ['Astenosfera', 'Mesosfera', 'Litosfera', 'Endosfera'], correct: 2, exp: 'La litosfera (corteza + manto superior) es rígida y está dividida en placas litosféricas que se mueven sobre la astenosfera.' },
  { s: 'Modelo geodinámico', q: '¿Sobre qué capa "flotan" las placas litosféricas?', opts: ['Mesosfera', 'Endosfera', 'Capa D', 'Astenosfera'], correct: 3, exp: 'La astenosfera es sólida pero plástica (próxima al punto de fusión), permitiendo que las placas se desplacen sobre ella.' },
  { s: 'Modelo geodinámico', q: '¿Qué incluye la litosfera?', opts: ['Solo la corteza', 'Corteza + manto superior', 'Todo el manto', 'Corteza + astenosfera'], correct: 1, exp: 'La litosfera incluye la corteza y la parte superior del manto. Es rígida y está fracturada en placas.' },
  { s: 'Modelo geodinámico', q: '¿Qué espesor tiene la litosfera bajo los océanos?', opts: ['Unos 50 km', '100-300 km', '500 km', '2.900 km'], correct: 0, exp: 'Bajo los océanos la litosfera tiene unos 50 km; bajo los continentes, 100-300 km.' },
  { s: 'Modelo geodinámico', q: '¿Qué ocurre en la mesosfera?', opts: ['Las placas se fracturan', 'Se forman células convectivas y plumas del manto', 'Se genera el campo magnético', 'Se forman los fósiles'], correct: 1, exp: 'En la mesosfera (manto inferior) el material caliente asciende y el frío desciende, formando células de convección.' },
  { s: 'Modelo geodinámico', q: '¿Qué genera el campo magnético terrestre?', opts: ['La rotación de la Tierra', 'El giro diferencial del núcleo externo (líquido) respecto al interno (sólido)', 'Los minerales de hierro de la corteza', 'La radiación solar'], correct: 1, exp: 'El núcleo externo metálico y líquido gira a distinta velocidad que el interno sólido, generando el campo magnético.' },
  { s: 'Modelo geodinámico', q: '¿Dónde nacen los penachos térmicos?', opts: ['En la astenosfera', 'En la litosfera', 'En la capa D (base del manto)', 'En el núcleo interno'], correct: 2, exp: 'La capa D está en la base del manto, justo sobre el núcleo. Es heterogénea y ahí se originan los penachos térmicos.' },
  { s: 'Modelo geodinámico', q: '¿Cuál es la diferencia entre el modelo geoquímico y el geodinámico?', opts: ['El geoquímico clasifica por estado físico, el geodinámico por composición', 'El geoquímico clasifica por composición, el geodinámico por comportamiento mecánico', 'Son dos nombres para el mismo modelo', 'El geodinámico solo estudia el núcleo'], correct: 1, exp: 'El geoquímico divide en corteza/manto/núcleo (composición). El geodinámico divide en litosfera/astenosfera/mesosfera/endosfera (comportamiento mecánico).' },
  { s: 'Deriva continental y pruebas', q: '¿Quién propuso la deriva continental?', opts: ['Holmes', 'Hess', 'Wegener', 'Lehman'], correct: 2, exp: 'Alfred Wegener propuso en 1912 que los continentes se habían movido desde un supercontinente llamado Pangea.' },
  { s: 'Deriva continental y pruebas', q: '¿En qué año se propuso la deriva continental?', opts: ['1890', '1912', '1929', '1960'], correct: 1, exp: 'Wegener propuso su teoría en 1912.' },
  { s: 'Deriva continental y pruebas', q: '¿Qué es Pangea?', opts: ['Un tipo de roca', 'El supercontinente que reunía todos los continentes', 'Una placa tectónica', 'Un método de estudio'], correct: 1, exp: 'Pangea es el supercontinente propuesto por Wegener que se fragmentó dando lugar a los continentes actuales.' },
  { s: 'Deriva continental y pruebas', q: '¿Qué son las tillitas y qué prueban?', opts: ['Fósiles marinos que prueban la existencia de océanos antiguos', 'Rocas volcánicas que prueban la actividad magmática pasada', 'Rocas de origen glaciar que prueban que los continentes estuvieron en otras latitudes', 'Minerales magnéticos que prueban la inversión de los polos'], correct: 2, exp: 'Las tillitas son rocas glaciares encontradas en regiones hoy tropicales, evidencia paleoclimática de la deriva continental.' },
  { s: 'Deriva continental y pruebas', q: '¿Qué prueba paleontológica apoya la deriva continental?', opts: ['Fósiles de dinosaurios en la Antártida', 'Los mismos fósiles aparecen en continentes hoy separados por océanos', 'Fósiles marinos en montañas', 'Ausencia de fósiles en el fondo oceánico'], correct: 1, exp: 'Los mismos fósiles en continentes separados indican que estuvieron unidos: los animales no cruzaron nadando.' },
  { s: 'Deriva continental y pruebas', q: '¿Qué problema tenía la teoría de Wegener?', opts: ['No tenía pruebas', 'No explicaba qué mecanismo movía los continentes', 'Los continentes no encajaban', 'Los fósiles no coincidían'], correct: 1, exp: 'Wegener demostró que los continentes se mueven, pero no supo explicar QUÉ los movía. Holmes lo resolvió en 1929.' },
  { s: 'Deriva continental y pruebas', q: '¿Qué mecanismo propuso Holmes (1929)?', opts: ['La atracción lunar', 'Las corrientes de convección térmica en el manto', 'La rotación terrestre', 'El impacto de meteoritos'], correct: 1, exp: 'Holmes propuso que las corrientes de convección del manto son el motor que mueve las placas.' },
  { s: 'Paleomagnetismo y expansión', q: '¿Cómo demuestra el paleomagnetismo que los continentes se mueven?', opts: ['Los polos magnéticos no existen', 'Las curvas de deriva polar de distintos continentes no coinciden', 'Las rocas no tienen magnetismo', 'El campo magnético es constante'], correct: 1, exp: 'Las curvas de deriva polar obtenidas en distintos continentes no coinciden entre sí → los continentes han cambiado de posición.' },
  { s: 'Paleomagnetismo y expansión', q: '¿Qué demuestran las bandas magnéticas simétricas a ambos lados de las dorsales?', opts: ['Que los polos magnéticos cambian', 'Que el fondo oceánico se expande desde las dorsales', 'Que los continentes se hunden', 'Que el manto es homogéneo'], correct: 1, exp: 'Las bandas simétricas muestran que la corteza se forma en la dorsal y se separa hacia ambos lados, registrando las inversiones del campo magnético.' },
  { s: 'Paleomagnetismo y expansión', q: '¿Quién propuso la expansión del fondo oceánico y en qué año?', opts: ['Wegener, 1912', 'Holmes, 1929', 'Hess, 1960', 'Lehman, 1936'], correct: 2, exp: 'Harry Hess propuso en 1960 que la corteza se crea en las dorsales, se separa y se destruye en las zonas de subducción.' },
  { s: 'Paleomagnetismo y expansión', q: '¿Por qué la corteza oceánica nunca supera los 200 millones de años?', opts: ['Porque se funde por el calor del Sol', 'Porque se erosiona con el agua del mar', 'Porque se crea en las dorsales y se destruye en las zonas de subducción', 'Porque los meteoritos la destruyen periódicamente'], correct: 2, exp: 'La corteza oceánica se recicla constantemente: nace en las dorsales y se destruye al subducir bajo otra placa.' },
  { s: 'Paleomagnetismo y expansión', q: '¿Por qué la Tierra tiene campo magnético?', opts: ['Por los minerales de la corteza', 'Porque el núcleo externo (metálico y líquido) rota a distinta velocidad que el interno', 'Por la radiación solar', 'Por la rotación del manto'], correct: 1, exp: 'El giro diferencial entre el núcleo externo líquido y el interno sólido genera el campo magnético terrestre.' },
  { s: 'Tectónica de placas', q: '¿En qué tipo de borde se crea nueva litosfera?', opts: ['Bordes destructivos', 'Bordes pasivos', 'Bordes constructivos', 'Zonas de subducción'], correct: 2, exp: 'En los bordes constructivos (dorsales oceánicas) el magma asciende y forma nueva corteza oceánica al solidificarse.' },
  { s: 'Tectónica de placas', q: '¿Qué ocurre cuando chocan dos placas continentales?', opts: ['Una subduce bajo la otra', 'Se forma una fosa oceánica', 'Se forma una gran cordillera con sismicidad pero sin vulcanismo', 'Se forma un arco de islas'], correct: 2, exp: 'Ambas son poco densas para subducir, así que se comprimen formando cordilleras como el Himalaya. Hay terremotos pero no volcanes.' },
  { s: 'Tectónica de placas', q: '¿Qué es el plano de Benioff?', opts: ['La superficie de una dorsal oceánica', 'El plano inclinado donde se localizan los terremotos en una zona de subducción', 'La frontera entre el manto superior e inferior', 'El límite entre la litosfera y la astenosfera'], correct: 1, exp: 'En las zonas de subducción, los terremotos se distribuyen a lo largo de un plano inclinado que sigue la placa que se hunde.' },
  { s: 'Tectónica de placas', q: '¿Qué tipo de placa es la placa del Pacífico?', opts: ['Continental', 'Mixta', 'Oceánica', 'Subducida'], correct: 2, exp: 'La placa del Pacífico es solo oceánica. La mayoría de las demás son mixtas.' },
  { s: 'Tectónica de placas', q: '¿Qué tipo de placa es la placa Arábiga?', opts: ['Oceánica', 'Mixta', 'Continental', 'Subducida'], correct: 2, exp: 'La placa Arábiga es solo continental. La mayoría de las placas son mixtas.' },
  { s: 'Tectónica de placas', q: '¿Qué ocurre en un borde pasivo (falla transformante)?', opts: ['Se crea nueva corteza', 'Las placas se deslizan lateralmente, generando sismicidad por rozamiento', 'Una placa subduce bajo otra', 'Se forma una dorsal'], correct: 1, exp: 'En los bordes pasivos las placas se deslizan lateralmente. No se crea ni destruye litosfera, pero hay terremotos. Ej: San Andrés.' },
  { s: 'Tectónica de placas', q: '¿Qué se forma cuando una placa oceánica subduce bajo otra oceánica?', opts: ['Una cordillera continental', 'Una fosa y un arco de islas volcánicas', 'Una falla transformante', 'Una dorsal oceánica'], correct: 1, exp: 'Se forma una fosa oceánica y un arco de islas volcánicas, como Japón.' },
  { s: 'Tectónica de placas', q: '¿Qué cordillera se formó por la colisión de dos placas continentales?', opts: ['Los Andes', 'Las Rocosas', 'El Himalaya', 'Los Alpes escandinavos'], correct: 2, exp: 'El Himalaya se formó por la colisión entre la placa India y la placa Euroasiática. En colisión continental no hay vulcanismo.' },
  { s: 'Tectónica de placas', q: '¿Cuántas placas litosféricas grandes hay?', opts: ['4', '8', '12', '20'], correct: 1, exp: 'Hay 8 placas grandes y varias menores. La mayoría son mixtas (parte continental y oceánica).' },
  { s: 'Motor de las placas', q: '¿Qué mecanismo principal mueve las placas litosféricas?', opts: ['Solo la rotación de la Tierra', 'La atracción lunar', 'Convección del manto + gravedad (slab pull y ridge push)', 'Solo el viento solar'], correct: 2, exp: 'Las células de convección del manto y la fuerza gravitatoria (tirón de la placa que subduce + empuje desde las dorsales) son los dos motores.' },
  { s: 'Motor de las placas', q: '¿Qué es el "slab pull"?', opts: ['El empuje del magma en las dorsales', 'La fuerza de la litosfera densa que tira de la placa al hundirse en subducción', 'La rotación del núcleo', 'El efecto de la gravedad lunar'], correct: 1, exp: 'Cuando la litosfera oceánica se enfría y se vuelve más densa, se hunde y tira del resto de la placa, como una manta que se cae de la cama.' },
  { s: 'Motor de las placas', q: '¿Qué es el "ridge push"?', opts: ['La subducción de la placa', 'El empuje lateral desde las dorsales: la nueva corteza empuja la vieja hacia los lados', 'La presión del núcleo', 'La fuerza de las mareas'], correct: 1, exp: 'Desde las dorsales, la nueva corteza formada "empuja" la corteza más vieja hacia los lados.' },
  { s: 'Motor de las placas', q: '¿Qué tipo de vulcanismo hay en los bordes constructivos (dorsales)?', opts: ['Muy explosivo', 'Poco explosivo (magma basáltico fluido)', 'No hay vulcanismo', 'Solo fumarolas'], correct: 1, exp: 'En las dorsales el magma basáltico es muy fluido, produciendo vulcanismo poco explosivo y sismicidad superficial.' },
]

export const unidad: Unidad = {
  id: 'geo-u1',
  unidad: 'Unidad 1',
  title: 'Estructura de la Tierra',
  shortTitle: 'Estructura de la Tierra',
  description: 'El interior de la Tierra, los métodos para estudiarlo, las capas y la tectónica de placas.',
  footer: 'Tectónica de Placas',
  mapaRoot: 'Estructura de la Tierra y Tectónica de Placas',
  accent: 'petrol',
  mapa,
  fichas,
  quiz,
  Historia,
}
