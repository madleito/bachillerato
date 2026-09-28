import type { ReactNode } from 'react'
import type { Ficha, Pregunta, RamaMapa, Unidad } from '../../types'
import { AI, Divider, K } from '../../components/ui'
import { Cronologia } from '../../components/Cronologia'

// ─── Secciones (compartidas por fichas y quiz) ───
const H1 = '1.1 Paleolítico y Neolítico'
const H2 = '1.2 Pueblos prerromanos y colonizaciones'
const H3 = '1.3 La Hispania romana'
const H4 = '1.4 La monarquía visigoda'

// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'prehistoria', label: H1, color: 'ochre',
    children: [
      { id: 'p1', label: 'Paleolítico Inferior', detail: 'De 1,2 millones a 100.000 años. Homo antecessor (Atapuerca, Burgos). Yacimientos de Torralba y Ambrona (Soria). Cultura de los bifaces.' },
      { id: 'p2', label: 'Paleolítico Medio', detail: 'De 100.000 a 40.000 años. Homo neanderthalensis. Sima de las Palomas (Murcia), Cova Negra (Valencia) y El Sidrón (Asturias). Cultura musteriense.' },
      { id: 'p3', label: 'Paleolítico Superior', detail: 'Desde hace 40.000 años. Homo sapiens. Cultura magdaleniense. Arte rupestre franco-cantábrico (animales; Altamira) y arte mueble.' },
      { id: 'p4', label: 'Rasgos del Paleolítico', detail: 'Economía depredadora (caza, pesca, recolección), nomadismo, uso del fuego, enterramientos (conciencia de la trascendencia) y arte rupestre y mueble.' },
      { id: 'p5', label: 'Epipaleolítico', detail: 'Hacia 8000-5000 a. C. Transición. Arte rupestre levantino: escenas de caza y figuras humanas (Valltorta, Castellón; Cogul, Lleida).' },
      { id: 'p6', label: 'Neolítico', children: [
        { id: 'p6a', label: 'Revolución Neolítica', detail: 'Hacia 5000 a. C. Agricultura y ganadería: de economía depredadora a productora. Sedentarismo, aldeas y nueva organización social.' },
        { id: 'p6b', label: 'Cerámica cardial', detail: '5000-3500 a. C. Decorada con impresiones de conchas.' },
        { id: 'p6c', label: 'Cultura de Almería', detail: '3500-2500 a. C. Viviendas circulares.' },
      ]},
      { id: 'p7', label: 'Megalitismo', detail: 'Neolítico final y Edad de los Metales. Grandes construcciones de piedra con función funeraria o ritual: menhir, dolmen y cromlech. En Baleares: navetas, taulas y talayots.' },
    ],
  },
  {
    id: 'prerromanos', label: H2, color: 'terracotta',
    children: [
      { id: 'r1', label: 'Tartessos', detail: 'Siglos VIII-VI a. C. Suroeste (Cádiz, Huelva, Sevilla, Extremadura). Agricultura, artesanía y comercio de metales. Rey Argantonio. Comercio con fenicios y griegos. Tesoro del Carambolo.' },
      { id: 'r2', label: 'Iberos', detail: 'Siglos VI-I a. C. Sur y este. Varios pueblos (layetanos, turdetanos) con lengua y cultura comunes. Escritura, agricultura, comercio y moneda. Dama de Elche.' },
      { id: 'r3', label: 'Celtas', detail: 'Desde el siglo X a. C. Meseta, norte y noroeste. Indoeuropeos. Sin escritura; dominaban el hierro. Organización tribal y guerrera, ganadería. Castros (gallegos, numantinos).' },
      { id: 'r4', label: 'Colonizaciones', children: [
        { id: 'r4a', label: 'Fenicios', detail: 'Desde el siglo VIII a. C. Gadir (Cádiz). Intereses comerciales. Difundieron el hierro, el torno de alfarero y la escritura alfabética.' },
        { id: 'r4b', label: 'Griegos', detail: 'Colonias de Rosas y Ampurias. Comercio de metales, sal y aceite de oliva.' },
        { id: 'r4c', label: 'Cartagineses', detail: 'Herederos de las factorías fenicias (Ibiza). Principal potencia del Mediterráneo occidental. Se enfrentan a Roma en la Segunda Guerra Púnica (218-201 a. C.).' },
      ]},
      { id: 'r5', label: 'Campos de Urnas', detail: 'Edad del Hierro. Pueblos procedentes de Europa central.' },
    ],
  },
  {
    id: 'roma', label: H3, color: 'volcanic',
    children: [
      { id: 'm1', label: 'La conquista', children: [
        { id: 'm1a', label: '218 a. C.', detail: 'Desembarco en Ampurias durante la Segunda Guerra Púnica. Primera fase: expulsión de los cartagineses.' },
        { id: 'm1b', label: '195 a. C.', detail: 'Campañas de Catón para reprimir las sublevaciones indígenas.' },
        { id: 'm1c', label: 'Guerras cántabras', detail: 'Fase final, con Augusto (hasta el 19 a. C.): sometimiento de cántabros y astures.' },
      ]},
      { id: 'm2', label: 'Organización provincial', children: [
        { id: 'm2a', label: '197 a. C.', detail: 'Hispania Citerior (valle del Ebro y Levante) e Hispania Ulterior (valle del Guadalquivir).' },
        { id: 'm2b', label: 'Augusto', detail: 'Tres provincias: Tarraconensis (Tarraco), Baetica (Corduba) y Lusitania (Emerita Augusta).' },
        { id: 'm2c', label: 'Bajo Imperio (297 d. C.)', detail: 'Nuevas provincias: Carthaginensis (Carthago Nova) y Gallaecia (Bracara Augusta). En el siglo IV, Balearica.' },
      ]},
      { id: 'm3', label: 'Romanización', detail: 'Asimilación por los indígenas de la cultura, lengua, costumbres y formas de vida romanas. Medios: urbanización y vías (Vía Augusta, Vía de la Plata).' },
      { id: 'm4', label: 'Economía y sociedad', detail: 'Explotación de aceite, trigo, salazones y metales. Latifundio con esclavos. Libres (algunos ciudadanos romanos) y no libres.' },
      { id: 'm5', label: 'Cultura y religión', detail: 'Latín, derecho romano, religión romana con culto al emperador. Cristianismo, importante desde el siglo III d. C.' },
    ],
  },
  {
    id: 'visigodos', label: H4, color: 'petrol',
    children: [
      { id: 'v1', label: '409 d. C.', detail: 'Invasión de suevos (Galicia), vándalos (Andalucía) y alanos (Portugal y Cartagena). Los visigodos, federados de Roma, en Toulouse.' },
      { id: 'v2', label: '507 · Vouillé', detail: 'Derrotados por los francos, los visigodos dejan Toulouse y fijan su reino en Toledo, hasta la invasión musulmana de 711.' },
      { id: 'v3', label: 'Unificación', children: [
        { id: 'v3a', label: 'Territorial', detail: 'Leovigildo (siglo VI) conquista el reino suevo y combate a los bizantinos. Suintila (siglo VII) expulsa a los bizantinos y pacifica a los vascones.' },
        { id: 'v3b', label: 'Religiosa', detail: 'Recaredo abandona el arrianismo y se convierte al catolicismo en el III Concilio de Toledo (589).' },
        { id: 'v3c', label: 'Legislativa', detail: 'Recesvinto: Liber Iudiciorum o Fuero Juzgo (654), leyes comunes para godos e hispanorromanos.' },
      ]},
      { id: 'v4', label: 'Instituciones', children: [
        { id: 'v4a', label: 'Monarquía electiva', detail: 'El rey era elegido, lo que generaba inestabilidad y luchas por el trono.' },
        { id: 'v4b', label: 'Officium Palatinum', detail: 'Ayudaba al rey a gobernar: comes del tesoro (hacienda), duces (delegados en las provincias), comites de las ciudades y gardingos.' },
        { id: 'v4c', label: 'Aula Regia', detail: 'Consejo Real de la alta aristocracia que asesoraba al rey.' },
        { id: 'v4d', label: 'Concilios de Toledo', detail: 'Asambleas legislativas y religiosas: unían política y religión y ratificaban las decisiones del rey.' },
      ]},
      { id: 'v5', label: 'Sociedad y cultura', detail: 'Herencia romana, cristiana e imperial. Ruralización: las ciudades pierden importancia. Cultura religiosa: Isidoro de Sevilla y sus Etimologías.' },
    ],
  },
]

// ─── Maquetación de La Historia ───
const LI = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3">
    <span className="text-volcanic mt-1 shrink-0">▸</span>
    <span>{children}</span>
  </li>
)
const P = ({ children }: { children: ReactNode }) => (
  <p className="font-body text-lg leading-relaxed mb-4">{children}</p>
)
const Titulo = ({ n, titulo, sub }: { n: string; titulo: string; sub: string }) => (
  <h3 className="font-display text-2xl md:text-3xl font-semibold text-volcanic-dark mb-6 leading-snug">
    {n} {titulo}
    <br className="hidden md:block" />
    <span className="text-tierra-slate text-xl md:text-2xl font-normal"> {sub}</span>
  </h3>
)
const H = ({ children }: { children: ReactNode }) => (
  <h4 className="font-display text-xl font-semibold text-petrol mt-10 mb-3">{children}</h4>
)
const Caja = ({ titulo, children }: { titulo: string; children: ReactNode }) => (
  <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
    <h5 className="font-display text-lg font-semibold text-terracotta-dark mb-2">{titulo}</h5>
    <div className="font-body text-base leading-relaxed">{children}</div>
  </div>
)
function Tabla({ cabecera, filas, minimo = '32rem' }: { cabecera: string[]; filas: ReactNode[][]; minimo?: string }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse font-body text-sm md:text-base" style={{ minWidth: minimo }}>
        <thead>
          <tr className="bg-tierra-cream">
            {cabecera.map(c => (
              <th key={c} className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold text-tierra-charcoal">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-tierra-cream/40' : ''}>
              {fila.map((celda, j) => (
                <td key={j} className={`border border-tierra-sand px-3 py-2.5 align-top ${j === 0 ? 'font-semibold' : ''}`}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
/** Esquema de respuesta para la pregunta de desarrollo del examen. */
const Esquema = ({ children }: { children: ReactNode }) => (
  <AI>
    <p className="font-semibold">Si te lo preguntan en el examen, un orden que funciona:</p>
    <ol className="list-decimal pl-5 space-y-1">{children}</ol>
  </AI>
)

// ─── La Historia ───
function Historia() {
  return (
    <article className="page-enter max-w-2xl mx-auto">
      <header className="mb-12 md:mb-16">
        <p className="font-body text-sm uppercase tracking-widest text-volcanic mb-3">Tema 1 · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          De Atapuerca a Toledo
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          Más de un millón de años en un solo tema: desde los primeros humanos de Atapuerca hasta el reino
          visigodo de Toledo, que cae en 711. Por el camino, la península pasa de grupos nómadas que cazan y
          recolectan a aldeas de agricultores, pueblos con escritura y moneda, una provincia de Roma y,
          finalmente, un reino cristiano unificado.
        </p>
      </header>

      <Cronologia
        titulo="El tema de un vistazo"
        tramos={[
          { periodo: 'Prehistoria', hitos: [
            { fecha: 'Hace 1,2 millones de años', texto: 'Paleolítico Inferior: Homo antecessor en Atapuerca', clave: true },
            { fecha: 'Hace 100.000 años', texto: 'Paleolítico Medio: Homo neanderthalensis, cultura musteriense' },
            { fecha: 'Hace 40.000 años', texto: 'Paleolítico Superior: Homo sapiens, Altamira', clave: true },
            { fecha: '8000-5000 a. C.', texto: 'Epipaleolítico: arte levantino' },
            { fecha: 'Hacia 5000 a. C.', texto: 'Neolítico: agricultura y ganadería', clave: true },
          ]},
          { periodo: 'Pueblos prerromanos y colonizaciones', hitos: [
            { fecha: 'Siglo X a. C.', texto: 'Celtas en la Meseta, el norte y el noroeste' },
            { fecha: 'Siglo VIII a. C.', texto: 'Colonizaciones: los fenicios fundan Gadir. Tartessos (s. VIII-VI)', clave: true },
            { fecha: 'Siglos VI-I a. C.', texto: 'Iberos en el sur y el este' },
          ]},
          { periodo: 'Hispania romana', hitos: [
            { fecha: '218 a. C.', texto: 'Desembarco romano en Ampurias (Segunda Guerra Púnica)', clave: true },
            { fecha: '197 a. C.', texto: 'Hispania Citerior e Hispania Ulterior' },
            { fecha: '195 a. C.', texto: 'Campañas de Catón' },
            { fecha: 'Hasta 19 a. C.', texto: 'Guerras cántabras: fin de la conquista con Augusto', clave: true },
            { fecha: '297 d. C.', texto: 'Nuevas provincias: Carthaginensis y Gallaecia' },
          ]},
          { periodo: 'Monarquía visigoda', hitos: [
            { fecha: '409', texto: 'Llegan suevos, vándalos y alanos', clave: true },
            { fecha: '507', texto: 'Batalla de Vouillé: los visigodos se instalan en Toledo', clave: true },
            { fecha: '589', texto: 'III Concilio de Toledo: Recaredo se convierte al catolicismo', clave: true },
            { fecha: '654', texto: 'Liber Iudiciorum de Recesvinto', clave: true },
            { fecha: '711', texto: 'Invasión musulmana: fin del reino visigodo', clave: true },
          ]},
        ]}
      />

      {/* 1.1 */}
      <section>
        <Titulo n="1.1" titulo="Cazadores y agricultores" sub="el Paleolítico y el Neolítico" />
        <P>
          El Paleolítico y el Neolítico forman parte de la <K>Prehistoria</K>. El Paleolítico, el periodo más
          largo con diferencia, se divide en tres etapas: <K>Inferior</K>, <K>Medio</K> y <K>Superior</K>. Cada
          una tiene su especie humana protagonista, sus yacimientos y su cultura, y así es como hay que
          aprenderlas.
        </P>
        <Tabla
          cabecera={['Etapa', 'Cronología', 'Protagonista', 'Yacimientos', 'Cultura']}
          minimo="40rem"
          filas={[
            ['Inferior', '1,2 millones - 100.000 años', 'Homo antecessor', 'Atapuerca (Burgos); Torralba y Ambrona (Soria)', 'Bifaces'],
            ['Medio', '100.000 - 40.000 años', 'Homo neanderthalensis', 'Sima de las Palomas (Murcia), Cova Negra (Valencia), El Sidrón (Asturias)', 'Musteriense'],
            ['Superior', 'Desde hace 40.000 años', 'Homo sapiens', 'Altamira (Cantabria)', 'Magdaleniense'],
          ]}
        />
        <AI>
          <p>
            La cultura de los bifaces del Paleolítico Inferior tiene nombre propio: se llama{' '}
            <strong>achelense</strong>. Si en el examen sale «cultura achelense», es esta.
          </p>
        </AI>
        <P>
          El Paleolítico Superior es el del <K>arte</K>. Destaca el <K>arte rupestre franco-cantábrico</K>, con
          representaciones de animales, como las de la <K>cueva de Altamira</K>. Y también hay{' '}
          <K>arte mueble</K>, hecho sobre objetos que se podían transportar.
        </P>

        <H>Cómo vivían en el Paleolítico</H>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI>Una <K>economía depredadora</K>, basada en la caza, la pesca y la recolección. Es su característica principal.</LI>
          <LI>Como no producían sus alimentos, eran <K>nómadas</K>: se desplazaban en busca de recursos.</LI>
          <LI>Conocían y usaban el <K>fuego</K>.</LI>
          <LI>Hacían <K>enterramientos</K>, lo que muestra cierta conciencia de la trascendencia.</LI>
          <LI>Desarrollaron <K>arte rupestre y mueble</K>.</LI>
        </ul>

        <H>El Epipaleolítico: la transición</H>
        <P>
          Entre el Paleolítico y el Neolítico, aproximadamente entre el <K>8000 y el 5000 a. C.</K>, hay una
          etapa de transición. Su rasgo más conocido es el <K>arte rupestre levantino</K>, que ya no representa
          solo animales sino <K>escenas de caza y figuras humanas</K>, en yacimientos como{' '}
          <K>Valltorta</K> (Castellón) y <K>Cogul</K> (Lleida).
        </P>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-ochre/5 border border-ochre/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-ochre-dark mb-2">Franco-cantábrico</p>
            <p className="font-body text-base leading-relaxed">Paleolítico Superior. <K>Animales</K>. Altamira.</p>
          </div>
          <div className="bg-terracotta/5 border border-terracotta/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-terracotta-dark mb-2">Levantino</p>
            <p className="font-body text-base leading-relaxed">Epipaleolítico. <K>Escenas de caza y figuras humanas</K>. Valltorta y Cogul.</p>
          </div>
        </div>

        <H>El Neolítico: de cazar a producir</H>
        <P>
          Hacia el <K>5000 a. C.</K> comienza el Neolítico con la <K>Revolución Neolítica</K>: la aparición de
          la <K>agricultura</K> y la <K>ganadería</K>. Es un cambio enorme, porque se pasa de una{' '}
          <K>economía depredadora</K> a una <K>economía productora</K>. Y eso arrastra lo demás: si produces tu
          comida, puedes quedarte en un sitio, así que llega el <K>sedentarismo</K>, aparecen las{' '}
          <K>aldeas</K> y la sociedad se organiza de otra manera.
        </P>
        <div className="space-y-5 mb-4">
          <Caja titulo="Cerámica cardial · 5000-3500 a. C.">
            La primera fase, con una cerámica decorada con <K>impresiones de conchas</K>.
          </Caja>
          <Caja titulo="Cultura de Almería · 3500-2500 a. C.">
            Caracterizada por sus <K>viviendas circulares</K>.
          </Caja>
        </div>

        <H>El megalitismo</H>
        <P>
          Durante el <K>Neolítico final y la Edad de los Metales</K> se desarrolla el <K>megalitismo</K>:
          grandes construcciones de piedra con posibles funciones <K>funerarias o rituales</K>. Sus tipos
          principales son el <K>menhir</K>, el <K>dolmen</K> y el <K>cromlech</K>. En las{' '}
          <K>Islas Baleares</K> destacan las <K>navetas</K>, las <K>taulas</K> y los <K>talayots</K>.
        </P>
        <AI>
          <p>
            Para no confundir los tres tipos: el <strong>menhir</strong> es una sola piedra clavada en vertical;
            el <strong>dolmen</strong>, varias piedras verticales con una losa encima, como una mesa (solía ser
            una tumba); y el <strong>cromlech</strong>, muchos menhires colocados en círculo.
          </p>
        </AI>

        <Esquema>
          <li>Qué es la Prehistoria y qué etapas incluye.</li>
          <li>Paleolítico Inferior, Medio y Superior: cronología, especie, yacimientos y cultura de cada uno.</li>
          <li>Rasgos del Paleolítico: economía depredadora, nomadismo, fuego, enterramientos, arte.</li>
          <li>Epipaleolítico y arte levantino.</li>
          <li>Neolítico: Revolución Neolítica y sus consecuencias; cerámica cardial y cultura de Almería.</li>
          <li>Megalitismo.</li>
        </Esquema>
      </section>

      <Divider />

      {/* 1.2 */}
      <section>
        <Titulo n="1.2" titulo="Antes de Roma" sub="pueblos prerromanos y colonizaciones del Mediterráneo" />
        <P>
          Los <K>pueblos prerromanos</K> son los que habitaban la península ibérica antes de la llegada de los
          romanos. Se distinguen tres grandes grupos: <K>tartessos</K>, <K>iberos</K> y <K>celtas</K>.
        </P>
        <Tabla
          cabecera={['', 'Tartessos', 'Iberos', 'Celtas']}
          minimo="38rem"
          filas={[
            ['Cuándo', 'Siglos VIII-VI a. C.', 'Siglos VI-I a. C.', 'Desde el siglo X a. C.'],
            ['Dónde', 'Suroeste: Cádiz, Huelva, Sevilla, Extremadura', 'Sur y este', 'Meseta, norte y noroeste'],
            ['Economía', 'Agricultura, artesanía, comercio de minerales y metales', 'Agricultura, comercio desarrollado, moneda', 'Ganadería y pastoreo; metalurgia del hierro'],
            ['Escritura', '—', 'Sí', 'No'],
            ['Destaca', 'Rey Argantonio; Tesoro del Carambolo', 'Dama de Elche', 'Castros (gallegos, numantinos)'],
          ]}
        />
        <div className="space-y-5 mb-4">
          <Caja titulo="Tartessos">
            Se desarrollaron en el suroeste entre los <K>siglos VIII y VI a. C.</K> Vivían de la agricultura, la
            artesanía y el <K>comercio de minerales y metales</K>. Destaca el legendario rey{' '}
            <K>Argantonio</K>. Comerciaron con fenicios y griegos, pero acabaron desapareciendo, absorbidos y
            conquistados por otros pueblos. En arte destaca el <K>Tesoro del Carambolo</K>, un ajuar funerario.
          </Caja>
          <Caja titulo="Iberos">
            Entre los <K>siglos VI y I a. C.</K>, en el sur y el este. <K>No eran un único pueblo</K>, sino
            varios — como <K>layetanos</K> y <K>turdetanos</K> — con una lengua y una cultura comunes. Conocían
            la <K>escritura</K>, vivían de la agricultura, tenían un comercio desarrollado y usaban{' '}
            <K>moneda</K>. Su obra más famosa es la <K>Dama de Elche</K>.
          </Caja>
          <Caja titulo="Celtas">
            De origen <K>indoeuropeo</K>, se asentaron desde el <K>siglo X a. C.</K> en la Meseta, el norte y el
            noroeste. Su cultura y economía eran más atrasadas que las de los iberos: <K>no conocían la
            escritura</K>, pero <K>dominaban el hierro</K>. Tenían una organización <K>tribal y guerrera</K>,
            vivían sobre todo de la <K>ganadería y el pastoreo</K>, y habitaban en poblados fortificados
            llamados <K>castros</K>, como los castros gallegos y numantinos.
          </Caja>
        </div>

        <H>Las colonizaciones</H>
        <P>
          Desde aproximadamente el <K>siglo VIII a. C.</K>, en la <K>Edad del Hierro</K>, llegan a la península
          pueblos del Mediterráneo con intereses sobre todo comerciales.
        </P>
        <div className="space-y-5 mb-4">
          <Caja titulo="Fenicios">
            Llegaron desde el Mediterráneo oriental y fundaron colonias como <K>Gadir</K> (Cádiz), en las costas
            mediterránea y atlántica. Mantuvieron una fuerte relación comercial con los pueblos prerromanos y
            difundieron tres cosas que hay que saberse: el <K>hierro</K>, el <K>torno de alfarero</K> y la{' '}
            <K>escritura alfabética</K>.
          </Caja>
          <Caja titulo="Griegos">
            Fundaron colonias como <K>Rosas</K> y <K>Ampurias</K>, y comerciaron con metales, sal, aceite de
            oliva y otros productos.
          </Caja>
          <Caja titulo="Cartagineses">
            Herederos de las factorías fenicias, especialmente de <K>Ibiza</K>, se convirtieron en la{' '}
            <K>principal potencia del Mediterráneo occidental</K>. Extendieron su dominio por la península y se
            enfrentaron a Roma en la <K>Segunda Guerra Púnica (218-201 a. C.)</K>. Su derrota trajo a los
            romanos a la península.
          </Caja>
        </div>
        <AI>
          <p>
            Tus apuntes ponen la <strong>cultura de los Campos de Urnas</strong> como «cultura principal» de las
            colonizaciones, y eso lleva a confusión. Los Campos de Urnas no son colonizadores del Mediterráneo:
            son pueblos <strong>indoeuropeos de Europa central</strong> que entraron por los Pirineos, y se
            relacionan con la llegada de los celtas. Colonizadores son fenicios, griegos y cartagineses, que
            vinieron por mar. Merece la pena confirmarlo con el profesor.
          </p>
        </AI>

        <Esquema>
          <li>Qué son los pueblos prerromanos y cuáles son.</li>
          <li>Tartessos, iberos y celtas: cronología, localización, economía, organización y arte.</li>
          <li>Las colonizaciones: fenicios, griegos y cartagineses, y qué aportó cada uno.</li>
          <li>Enlace con el tema siguiente: la Segunda Guerra Púnica trae a Roma.</li>
        </Esquema>
      </section>

      <Divider />

      {/* 1.3 */}
      <section>
        <Titulo n="1.3" titulo="Hispania, provincia de Roma" sub="conquista, organización y romanización" />
        <H>La conquista (218-19 a. C.)</H>
        <P>
          La conquista romana de Hispania comenzó en el <K>218 a. C.</K>, con el <K>desembarco del ejército
          romano en Ampurias</K> en plena <K>Segunda Guerra Púnica</K>. La conquista fue larga y tuvo tres
          fases:
        </P>
        <ol className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li><span className="font-semibold text-volcanic-dark">1.</span> <K>Enfrentamiento con Cartago</K>, que terminó con la expulsión de los cartagineses de la península.</li>
          <li><span className="font-semibold text-volcanic-dark">2.</span> <K>Campañas de Catón (195 a. C.)</K> para reprimir las sublevaciones de los pueblos indígenas. Roma sigue avanzando hasta conquistar gran parte del territorio.</li>
          <li><span className="font-semibold text-volcanic-dark">3.</span> <K>Fase final, con Augusto</K>: las <K>guerras cántabras</K>, que terminan en el <K>19 a. C.</K> con el sometimiento de cántabros y astures.</li>
        </ol>
        <AI>
          <p>
            Casi dos siglos para conquistar Hispania. Los últimos en caer fueron los pueblos del norte, los más
            alejados del Mediterráneo y los menos romanizados — lo mismo que pasará siglos después con los
            vascones frente a los visigodos.
          </p>
        </AI>

        <H>La organización en provincias</H>
        <P>A medida que avanzaba la conquista, Roma fue dividiendo Hispania en provincias:</P>
        <Tabla
          cabecera={['Momento', 'Provincias', 'Capitales']}
          minimo="30rem"
          filas={[
            ['197 a. C.', 'Hispania Citerior (valle del Ebro y Levante) e Hispania Ulterior (valle del Guadalquivir)', '—'],
            ['Augusto', 'Tarraconensis, Baetica y Lusitania', 'Tarraco, Corduba y Emerita Augusta'],
            ['297 d. C. (Bajo Imperio)', 'Se añaden Carthaginensis y Gallaecia', 'Carthago Nova y Bracara Augusta'],
            ['Siglo IV d. C.', 'Se añade Balearica', '—'],
          ]}
        />
        <AI>
          <p>
            Un aviso sobre la fecha de la división de <strong>Augusto</strong>: tus apuntes la sitúan en el{' '}
            <strong>19 a. C.</strong>, que es el año en que termina la conquista. Muchos manuales la datan en el{' '}
            <strong>27 a. C.</strong> Pregunta al profesor qué fecha quiere en el examen; mientras, lo seguro es
            decir «en época de Augusto».
          </p>
        </AI>

        <H>La romanización</H>
        <P>
          La <K>romanización</K> fue el proceso por el que los pueblos indígenas de Hispania, como íberos y
          celtas, <K>asimilaron la cultura, la lengua, las costumbres y las formas de vida romanas</K>. Tuvo dos
          grandes vehículos:
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI>La <K>urbanización</K>: las ciudades se convirtieron en centros de difusión de la cultura romana.</LI>
          <LI>Las <K>vías de comunicación</K>, sobre todo la <K>Vía Augusta</K> y la <K>Vía de la Plata</K>, que conectaban las principales ciudades.</LI>
        </ul>
        <div className="space-y-5 mb-4">
          <Caja titulo="Economía">
            Basada en la <K>explotación de los recursos de Hispania</K>: aceite, trigo, salazones y metales. Se
            extendió el <K>latifundio trabajado por esclavos</K>.
          </Caja>
          <Caja titulo="Sociedad">
            Dividida entre <K>personas libres</K> — algunas con <K>ciudadanía romana</K> — y{' '}
            <K>personas no libres</K>, principalmente esclavos.
          </Caja>
          <Caja titulo="Cultura y religión">
            Se adoptaron el <K>latín</K>, las formas de organización y el <K>derecho romano</K>, y la religión
            romana, que incluía el <K>culto al emperador</K>. Más tarde se extendió el <K>cristianismo</K>, que
            ganó importancia sobre todo desde el <K>siglo III d. C.</K>
          </Caja>
        </div>

        <Esquema>
          <li>Conquista: inicio en 218 a. C. y sus tres fases hasta las guerras cántabras.</li>
          <li>Organización provincial: 197 a. C., Augusto y Bajo Imperio.</li>
          <li>Romanización: concepto y vehículos (ciudades y vías).</li>
          <li>Economía, sociedad, cultura y religión.</li>
        </Esquema>
      </section>

      <Divider />

      {/* 1.4 */}
      <section>
        <Titulo n="1.4" titulo="El reino de Toledo" sub="la monarquía visigoda" />
        <H>La llegada de los pueblos germánicos</H>
        <P>
          En el <K>409 d. C.</K> varios pueblos germánicos invadieron la península y se repartieron el
          territorio: los <K>suevos</K> en Galicia, los <K>vándalos</K> en Andalucía y los <K>alanos</K> en
          Portugal y Cartagena. Mientras tanto, los <K>visigodos</K>, otro pueblo germánico, estaban instalados
          en el sur de la Galia, en <K>Toulouse</K>, como <K>federados del Imperio romano</K>.
        </P>
        <P>
          En el <K>507</K>, en la <K>batalla de Vouillé</K>, los francos derrotaron a los visigodos, que
          abandonaron Toulouse y se trasladaron a <K>Toledo</K>, donde establecieron su reino. Allí
          permanecieron hasta la <K>invasión musulmana de 711</K>.
        </P>

        <H>La unificación</H>
        <P>
          La población de la Hispania visigoda era en su gran mayoría <K>hispanorromana</K>, con una religión y
          unas leyes distintas de las de los visigodos, que eran minoría. Por eso el gran proceso de esta etapa
          es la <K>unificación</K>, en tres frentes:
        </P>
        <AI>
          <p>
            En tus apuntes, este párrafo empieza con «<strong>Al-Ándalus</strong> estaba integrado por una
            mayoría de población hispanorromana…». Es un error: Al-Ándalus es el territorio musulmán a partir de
            711, y aquí se habla del <strong>reino visigodo</strong>. Corrígelo en tus apuntes para que no se
            cuele en el examen.
          </p>
        </AI>
        <div className="space-y-5 mb-4">
          <Caja titulo="Territorial">
            <K>Leovigildo</K> (siglo VI) conquistó el reino de los <K>suevos</K> y combatió a los{' '}
            <K>bizantinos</K>. Más tarde, <K>Suintila</K> expulsó definitivamente a los bizantinos y consiguió la
            pacificación de los <K>vascones</K>.
          </Caja>
          <Caja titulo="Religiosa">
            Los visigodos eran <K>arrianos</K> y los hispanorromanos, católicos. <K>Recaredo</K> renunció al
            arrianismo y se convirtió al <K>catolicismo</K> en el <K>III Concilio de Toledo (589)</K>.
          </Caja>
          <Caja titulo="Legislativa">
            <K>Recesvinto</K> unificó las leyes en el <K>654</K> con el <K>Liber Iudiciorum</K> o{' '}
            <K>Fuero Juzgo</K>, común para godos e hispanorromanos.
          </Caja>
        </div>
        <AI>
          <p>
            Un matiz sobre la unificación territorial: tus apuntes dicen que <strong>Leovigildo expulsó a
            suevos y bizantinos</strong>. Leovigildo acabó con el reino suevo y luchó contra los bizantinos,
            pero quien los expulsó del todo fue <strong>Suintila</strong>, ya en el siglo VII. Es un dato que
            se pregunta; confírmalo con el profesor.
          </p>
        </AI>

        <H>Las instituciones</H>
        <P>
          La <K>monarquía</K> visigoda era <K>electiva</K>: el rey era elegido, y eso provocó mucha
          inestabilidad y frecuentes luchas por el trono. Junto al rey había otras instituciones:
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI>La <K>Asamblea de Hombres Libres</K>, que elegía al rey y le otorgaba el poder.</LI>
          <LI>El <K>Officium Palatinum</K>, que ayudaba al rey a gobernar. Lo formaban el <K>comes</K> del tesoro (la hacienda), los <K>duces</K> (delegados del rey en las provincias), los <K>comites de las ciudades</K> y los <K>gardingos</K>, jefes militares.</LI>
          <LI>El <K>Aula Regia</K> o <K>Consejo Real</K>, órgano de asesoramiento del rey formado por la alta aristocracia.</LI>
          <LI>Los <K>Concilios de Toledo</K>, asambleas legislativas y religiosas que unían política y religión y ratificaban las decisiones del rey.</LI>
        </ul>
        <AI>
          <p>
            Tus apuntes dicen que la monarquía fue electiva al principio y <strong>después se hizo
            hereditaria</strong>. Lo habitual en los manuales es lo contrario: <strong>fue electiva hasta el
            final</strong>. Varios reyes intentaron asegurar la sucesión asociando a sus hijos al trono, pero no
            llegó a ser hereditaria, y esa inestabilidad ayuda a explicar la rápida caída de 711. Consulta con el
            profesor qué versión quiere.
          </p>
        </AI>

        <H>Sociedad y cultura</H>
        <P>
          Los visigodos recogieron parte de la <K>tradición romana, cristiana e imperial</K>. Durante su
          monarquía se aceleró la <K>ruralización</K>: las ciudades perdieron importancia. La cultura se centró
          cada vez más en la <K>religión</K>, y destacó <K>Isidoro de Sevilla</K>, autor de las{' '}
          <K>Etimologías</K>, una obra que reúne gran parte del saber acumulado y quiere conservar la cultura
          romana.
        </P>

        <Esquema>
          <li>Invasiones del 409 y los visigodos como federados en Toulouse.</li>
          <li>Vouillé (507) y el reino de Toledo hasta 711.</li>
          <li>Unificación territorial, religiosa (589) y legislativa (654).</li>
          <li>Instituciones: monarquía electiva, Officium Palatinum, Aula Regia, Concilios de Toledo.</li>
          <li>Ruralización y cultura: Isidoro de Sevilla.</li>
        </Esquema>
      </section>
    </article>
  )
}

// ─── Fichas de estudio ───
const fichas: Ficha[] = [
  { s: H1, p: '¿En qué tres etapas se divide el Paleolítico?', r: 'Inferior, Medio y Superior.' },
  { s: H1, p: 'Cronología del Paleolítico Inferior.', r: 'De 1,2 millones a 100.000 años aproximadamente.' },
  { s: H1, p: '¿Quién protagoniza el Paleolítico Inferior y dónde se han encontrado sus restos?', r: 'El Homo antecessor, principalmente en Atapuerca (Burgos).' },
  { s: H1, p: 'Además de Atapuerca, ¿qué yacimientos del Paleolítico Inferior destacan?', r: 'Torralba y Ambrona (Soria).' },
  { s: H1, p: '¿Qué cultura corresponde al Paleolítico Inferior?', r: 'La de los bifaces (cultura achelense).' },
  { s: H1, p: 'Cronología y protagonista del Paleolítico Medio.', r: 'Entre 100.000 y 40.000 años. Homo neanderthalensis.' },
  { s: H1, p: 'Nombra tres yacimientos del Paleolítico Medio.', r: 'Sima de las Palomas (Murcia), Cova Negra (Valencia) y El Sidrón (Asturias).' },
  { s: H1, p: '¿Qué cultura corresponde al Paleolítico Medio?', r: 'La musteriense.' },
  { s: H1, p: 'Cronología, protagonista y cultura del Paleolítico Superior.', r: 'Desde hace unos 40.000 años. Homo sapiens. Cultura magdaleniense.' },
  { s: H1, p: '¿Qué arte caracteriza al Paleolítico Superior?', r: 'El arte rupestre franco-cantábrico, con representaciones de animales (Altamira), y el arte mueble.' },
  { s: H1, p: '¿Qué es el arte mueble?', r: 'El realizado sobre objetos que podían transportarse.' },
  { s: H1, p: '¿Cuál es la característica principal de la economía paleolítica?', r: 'Es una economía depredadora, basada en la caza, la pesca y la recolección.' },
  { s: H1, p: '¿Por qué eran nómadas los grupos paleolíticos?', r: 'Porque no producían sus propios alimentos y se desplazaban en busca de recursos.' },
  { s: H1, p: 'Enumera los rasgos del Paleolítico.', r: 'Economía depredadora, nomadismo, uso del fuego, enterramientos (conciencia de la trascendencia) y arte rupestre y mueble.' },
  { s: H1, p: '¿Qué muestran los enterramientos paleolíticos?', r: 'Cierta conciencia de la trascendencia.' },
  { s: H1, p: '¿Qué es el Epipaleolítico y cuándo se desarrolla?', r: 'La etapa de transición entre Paleolítico y Neolítico, aproximadamente entre el 8000 y el 5000 a. C.' },
  { s: H1, p: '¿Qué arte caracteriza al Epipaleolítico y dónde?', r: 'El arte rupestre levantino: escenas de caza y figuras humanas. Valltorta (Castellón) y Cogul (Lleida).' },
  { s: H1, p: 'Diferencia entre arte franco-cantábrico y levantino.', r: 'Franco-cantábrico: Paleolítico Superior, animales (Altamira). Levantino: Epipaleolítico, escenas de caza y figuras humanas (Valltorta, Cogul).' },
  { s: H1, p: '¿Cuándo comienza el Neolítico y en qué consiste la Revolución Neolítica?', r: 'Hacia el 5000 a. C. Es el desarrollo de la agricultura y la ganadería: se pasa de una economía depredadora a una productora.' },
  { s: H1, p: '¿Qué consecuencias tiene la economía productora?', r: 'Favorece el sedentarismo, la aparición de aldeas y una nueva organización de la sociedad.' },
  { s: H1, p: '¿Qué es la cerámica cardial y cuándo se da?', r: 'Cerámica decorada con impresiones de conchas. 5000-3500 a. C.' },
  { s: H1, p: '¿Qué caracteriza a la cultura de Almería y cuándo se da?', r: 'Sus viviendas circulares. 3500-2500 a. C.' },
  { s: H1, p: '¿Qué es el megalitismo y cuándo se desarrolla?', r: 'Grandes construcciones de piedra con posibles funciones funerarias o rituales. Neolítico final y Edad de los Metales.' },
  { s: H1, p: '¿Cuáles son los tipos principales de megalitos?', r: 'Menhir, dolmen y cromlech.' },
  { s: H1, p: '¿Qué construcciones megalíticas destacan en Baleares?', r: 'Navetas, taulas y talayots.' },

  { s: H2, p: '¿Qué son los pueblos prerromanos y cuáles son los tres grandes grupos?', r: 'Los que habitaban la península antes de la llegada de los romanos: tartessos, iberos y celtas.' },
  { s: H2, p: '¿Cuándo y dónde se desarrollaron los tartessos?', r: 'Siglos VIII-VI a. C., en el suroeste: Cádiz, Huelva, Sevilla y Extremadura.' },
  { s: H2, p: '¿A qué se dedicaban los tartessos?', r: 'A la agricultura, la artesanía y el comercio de minerales y metales.' },
  { s: H2, p: '¿Qué rey legendario y qué obra artística se asocian a Tartessos?', r: 'El rey Argantonio y el Tesoro del Carambolo, un ajuar funerario.' },
  { s: H2, p: '¿Con quién comerciaron los tartessos y cómo desaparecieron?', r: 'Con fenicios y griegos. Desaparecieron absorbidos y conquistados por otros pueblos.' },
  { s: H2, p: '¿Cuándo y dónde se localizaron los iberos?', r: 'Siglos VI-I a. C., en el sur y el este de la península.' },
  { s: H2, p: '¿Eran los iberos un único pueblo?', r: 'No: eran varios pueblos (layetanos, turdetanos…) con una lengua y una cultura comunes.' },
  { s: H2, p: 'Rasgos de la economía y cultura ibera.', r: 'Conocían la escritura, economía agrícola, comercio desarrollado y uso de moneda.' },
  { s: H2, p: '¿Cuál es la obra artística ibera más famosa?', r: 'La Dama de Elche.' },
  { s: H2, p: '¿De qué origen eran los celtas y dónde se asentaron?', r: 'Indoeuropeo. Desde el siglo X a. C. en la Meseta, el norte y el noroeste.' },
  { s: H2, p: 'Rasgos de los celtas.', r: 'Sin escritura, dominaban el hierro, organización tribal y guerrera, economía ganadera y de pastoreo.' },
  { s: H2, p: '¿Qué son los castros? Pon ejemplos.', r: 'Poblados fortificados de los celtas. Castros gallegos y numantinos.' },
  { s: H2, p: '¿Cuándo comienzan las colonizaciones?', r: 'Hacia el siglo VIII a. C., en la Edad del Hierro.' },
  { s: H2, p: '¿Qué colonia fundaron los fenicios y qué buscaban?', r: 'Gadir (Cádiz). Buscaban principalmente intereses comerciales.' },
  { s: H2, p: '¿Qué tres elementos difundieron los fenicios?', r: 'El hierro, el torno de alfarero y la escritura alfabética.' },
  { s: H2, p: '¿Qué colonias fundaron los griegos y con qué comerciaban?', r: 'Rosas y Ampurias. Metales, sal, aceite de oliva y otros productos.' },
  { s: H2, p: '¿Quiénes eran los cartagineses?', r: 'Herederos de las factorías fenicias, especialmente de Ibiza; la principal potencia del Mediterráneo occidental.' },
  { s: H2, p: '¿Por qué llegan los romanos a la península?', r: 'Por el enfrentamiento con Cartago en la Segunda Guerra Púnica (218-201 a. C.).' },

  { s: H3, p: '¿Cuándo y dónde comenzó la conquista romana de Hispania?', r: 'En el 218 a. C., con el desembarco en Ampurias, durante la Segunda Guerra Púnica.' },
  { s: H3, p: '¿Cómo terminó la primera fase de la conquista?', r: 'Con la expulsión de los cartagineses de la península.' },
  { s: H3, p: '¿Qué ocurrió en el 195 a. C.?', r: 'Las campañas de Catón para reprimir las sublevaciones de los pueblos indígenas.' },
  { s: H3, p: '¿Cuál fue la fase final de la conquista?', r: 'Las guerras cántabras, con Augusto, que terminaron en el 19 a. C. con el sometimiento de cántabros y astures.' },
  { s: H3, p: '¿En qué dos provincias se dividió Hispania en el 197 a. C.?', r: 'Hispania Citerior (valle del Ebro y Levante) e Hispania Ulterior (valle del Guadalquivir).' },
  { s: H3, p: '¿Qué tres provincias creó Augusto y cuáles eran sus capitales?', r: 'Tarraconensis (Tarraco), Baetica (Corduba) y Lusitania (Emerita Augusta).' },
  { s: H3, p: '¿Qué provincias se crearon en el Bajo Imperio (297 d. C.)?', r: 'Carthaginensis (capital Carthago Nova) y Gallaecia (capital Bracara Augusta).' },
  { s: H3, p: '¿Qué provincia se creó en el siglo IV d. C.?', r: 'Balearica.' },
  { s: H3, p: '¿Qué es la romanización?', r: 'El proceso de asimilación de la cultura, la lengua, las costumbres y las formas de vida romanas por los pueblos indígenas de Hispania.' },
  { s: H3, p: '¿Cuáles fueron los principales medios de romanización?', r: 'La urbanización (las ciudades difundían la cultura romana) y las vías de comunicación.' },
  { s: H3, p: 'Nombra las dos vías romanas más importantes de Hispania.', r: 'La Vía Augusta y la Vía de la Plata.' },
  { s: H3, p: '¿Qué recursos explotó Roma en Hispania?', r: 'Aceite, trigo, salazones y metales.' },
  { s: H3, p: '¿Qué forma de propiedad se extendió en la Hispania romana?', r: 'El latifundio trabajado por esclavos.' },
  { s: H3, p: '¿Cómo se dividía la sociedad hispanorromana?', r: 'En personas libres (algunas con ciudadanía romana) y personas no libres, principalmente esclavos.' },
  { s: H3, p: '¿Qué elementos culturales adoptó Hispania con la romanización?', r: 'El latín, las formas de organización y el derecho romano, y la religión romana con el culto al emperador.' },
  { s: H3, p: '¿Desde cuándo adquiere importancia el cristianismo en Hispania?', r: 'Especialmente desde el siglo III d. C.' },

  { s: H4, p: '¿Qué pueblos invadieron la península en el 409 y dónde se instalaron?', r: 'Suevos (Galicia), vándalos (Andalucía) y alanos (Portugal y Cartagena).' },
  { s: H4, p: '¿Dónde estaban los visigodos antes de llegar a Hispania y en calidad de qué?', r: 'En el sur de la Galia, en Toulouse, como federados del Imperio romano.' },
  { s: H4, p: '¿Qué ocurrió en la batalla de Vouillé (507)?', r: 'Los francos derrotaron a los visigodos, que dejaron Toulouse y establecieron su reino en Toledo.' },
  { s: H4, p: '¿Hasta cuándo duró el reino visigodo?', r: 'Hasta la invasión musulmana de 711.' },
  { s: H4, p: '¿En qué tres frentes se produjo la unificación visigoda?', r: 'Territorial, religiosa y legislativa.' },
  { s: H4, p: '¿Qué hizo Leovigildo?', r: 'En el siglo VI conquistó el reino suevo y combatió a los bizantinos.' },
  { s: H4, p: '¿Qué hizo Suintila?', r: 'Expulsó definitivamente a los bizantinos y pacificó a los vascones.' },
  { s: H4, p: '¿Quién llevó a cabo la unificación religiosa, cuándo y cómo?', r: 'Recaredo, en el III Concilio de Toledo (589): renunció al arrianismo y se convirtió al catolicismo.' },
  { s: H4, p: '¿Quién llevó a cabo la unificación legislativa y con qué obra?', r: 'Recesvinto, en el 654, con el Liber Iudiciorum o Fuero Juzgo.' },
  { s: H4, p: '¿Cómo era la monarquía visigoda?', r: 'Electiva, lo que causaba inestabilidad y luchas por el trono.' },
  { s: H4, p: '¿Qué hacía la Asamblea de Hombres Libres?', r: 'Elegía al rey y le otorgaba el poder.' },
  { s: H4, p: '¿Qué era el Officium Palatinum y quiénes lo formaban?', r: 'El órgano que ayudaba al rey a gobernar: el comes del tesoro (hacienda), los duces (delegados en las provincias), los comites de las ciudades y los gardingos (jefes militares).' },
  { s: H4, p: '¿Qué era el Aula Regia?', r: 'El Consejo Real: órgano de asesoramiento del rey formado por la alta aristocracia.' },
  { s: H4, p: '¿Qué eran los Concilios de Toledo?', r: 'Asambleas legislativas y religiosas que unían política y religión y ratificaban las decisiones del rey.' },
  { s: H4, p: '¿Qué es la ruralización visigoda?', r: 'El proceso por el que las ciudades pierden importancia y la vida se traslada al campo.' },
  { s: H4, p: '¿Quién fue Isidoro de Sevilla y qué escribió?', r: 'El gran autor de la cultura visigoda. Escribió las Etimologías, que reúnen gran parte del saber acumulado y buscan conservar la cultura romana.' },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  { s: H1, q: '¿Qué especie protagoniza el Paleolítico Inferior en la península?', opts: ['Homo sapiens', 'Homo neanderthalensis', 'Homo antecessor', 'Homo erectus'], correct: 2, exp: 'El Homo antecessor, cuyos restos se han encontrado principalmente en Atapuerca (Burgos).' },
  { s: H1, q: '¿Dónde se encuentran los yacimientos de Torralba y Ambrona?', opts: ['Burgos', 'Soria', 'Murcia', 'Asturias'], correct: 1, exp: 'Torralba y Ambrona están en Soria y son del Paleolítico Inferior.' },
  { s: H1, q: '¿Qué cultura corresponde al Paleolítico Medio?', opts: ['Magdaleniense', 'Musteriense', 'Achelense', 'Cardial'], correct: 1, exp: 'La musteriense, del Homo neanderthalensis.' },
  { s: H1, q: '¿Cuál de estos yacimientos NO es del Paleolítico Medio?', opts: ['Sima de las Palomas', 'Cova Negra', 'El Sidrón', 'Altamira'], correct: 3, exp: 'Altamira es del Paleolítico Superior. Los otros tres son del Medio.' },
  { s: H1, q: '¿Qué especie protagoniza el Paleolítico Superior?', opts: ['Homo antecessor', 'Homo neanderthalensis', 'Homo sapiens', 'Homo habilis'], correct: 2, exp: 'El Homo sapiens, desde hace unos 40.000 años.' },
  { s: H1, q: '¿Qué representa principalmente el arte rupestre franco-cantábrico?', opts: ['Escenas de caza con humanos', 'Animales', 'Figuras geométricas', 'Paisajes'], correct: 1, exp: 'Representa animales, como en Altamira. Las escenas de caza con figuras humanas son del arte levantino.' },
  { s: H1, q: '¿Cuál es la característica principal de la economía paleolítica?', opts: ['Productora', 'Depredadora', 'Comercial', 'Monetaria'], correct: 1, exp: 'Una economía depredadora, basada en la caza, la pesca y la recolección.' },
  { s: H1, q: '¿Qué indican los enterramientos paleolíticos?', opts: ['Que eran sedentarios', 'Cierta conciencia de la trascendencia', 'Que practicaban la agricultura', 'Que conocían la escritura'], correct: 1, exp: 'Los enterramientos muestran cierta conciencia de la trascendencia.' },
  { s: H1, q: '¿Qué caracteriza al arte rupestre levantino?', opts: ['Animales aislados', 'Escenas de caza y figuras humanas', 'Grandes piedras', 'Cerámica decorada'], correct: 1, exp: 'El arte levantino, del Epipaleolítico, representa escenas de caza y figuras humanas (Valltorta, Cogul).' },
  { s: H1, q: '¿En qué etapa se desarrolla el arte levantino?', opts: ['Paleolítico Medio', 'Paleolítico Superior', 'Epipaleolítico', 'Edad del Hierro'], correct: 2, exp: 'En el Epipaleolítico, la transición entre Paleolítico y Neolítico (8000-5000 a. C.).' },
  { s: H1, q: '¿En qué consiste la Revolución Neolítica?', opts: ['En el uso del fuego', 'En el desarrollo de la agricultura y la ganadería', 'En la aparición del arte', 'En el uso del hierro'], correct: 1, exp: 'Supone pasar de una economía depredadora a una productora gracias a la agricultura y la ganadería.' },
  { s: H1, q: '¿Qué consecuencia tuvo la economía productora?', opts: ['El nomadismo', 'El sedentarismo y la aparición de aldeas', 'La desaparición del arte', 'El fin de la caza'], correct: 1, exp: 'Favoreció el sedentarismo, la aparición de aldeas y una nueva organización social.' },
  { s: H1, q: '¿Cómo se decoraba la cerámica cardial?', opts: ['Con pinturas de animales', 'Con impresiones de conchas', 'Con metales', 'Con escritura'], correct: 1, exp: 'La cerámica cardial (5000-3500 a. C.) se decoraba con impresiones de conchas.' },
  { s: H1, q: '¿Qué caracteriza a la cultura de Almería?', opts: ['Los castros', 'Las viviendas circulares', 'Los dólmenes', 'La moneda'], correct: 1, exp: 'La cultura de Almería (3500-2500 a. C.) se caracteriza por sus viviendas circulares.' },
  { s: H1, q: '¿Cuál de estos NO es un tipo de megalito?', opts: ['Menhir', 'Dolmen', 'Cromlech', 'Castro'], correct: 3, exp: 'El castro es un poblado fortificado celta. Menhir, dolmen y cromlech son megalitos.' },
  { s: H1, q: '¿En qué territorio destacan las navetas, taulas y talayots?', opts: ['Canarias', 'Baleares', 'Galicia', 'Cantabria'], correct: 1, exp: 'Son construcciones megalíticas de las Islas Baleares.' },

  { s: H2, q: '¿Qué pueblo prerromano se desarrolló en el suroeste peninsular?', opts: ['Iberos', 'Celtas', 'Tartessos', 'Cartagineses'], correct: 2, exp: 'Los tartessos, en Cádiz, Huelva, Sevilla y Extremadura (siglos VIII-VI a. C.).' },
  { s: H2, q: '¿Qué rey legendario se asocia a Tartessos?', opts: ['Argantonio', 'Leovigildo', 'Viriato', 'Recaredo'], correct: 0, exp: 'Argantonio es el legendario rey de Tartessos.' },
  { s: H2, q: '¿Qué es el Tesoro del Carambolo?', opts: ['Una escultura ibera', 'Un ajuar funerario tartésico', 'Una moneda fenicia', 'Un castro celta'], correct: 1, exp: 'Es un ajuar funerario de la cultura tartésica.' },
  { s: H2, q: '¿Qué pueblo creó la Dama de Elche?', opts: ['Los celtas', 'Los tartessos', 'Los iberos', 'Los griegos'], correct: 2, exp: 'La Dama de Elche es la obra más famosa del arte ibero.' },
  { s: H2, q: '¿Cuál de estos rasgos corresponde a los iberos?', opts: ['No conocían la escritura', 'Usaban moneda', 'Vivían en castros', 'Eran indoeuropeos'], correct: 1, exp: 'Los iberos conocían la escritura y usaban moneda. Castros e indoeuropeos corresponden a los celtas.' },
  { s: H2, q: 'Layetanos y turdetanos eran pueblos…', opts: ['Celtas', 'Iberos', 'Germánicos', 'Fenicios'], correct: 1, exp: 'Los iberos no eran un único pueblo, sino varios, como layetanos y turdetanos.' },
  { s: H2, q: '¿Dónde se asentaron los celtas?', opts: ['En el sur y el este', 'En la Meseta, el norte y el noroeste', 'En las Baleares', 'En el suroeste'], correct: 1, exp: 'Los celtas se asentaron desde el siglo X a. C. en la Meseta, el norte y el noroeste.' },
  { s: H2, q: '¿Cuál era la base de la economía celta?', opts: ['El comercio marítimo', 'La ganadería y el pastoreo', 'La moneda', 'La pesca'], correct: 1, exp: 'Su economía se basaba en la ganadería y el pastoreo; destacaban en el trabajo del hierro.' },
  { s: H2, q: '¿Qué es un castro?', opts: ['Un megalito', 'Un poblado fortificado celta', 'Una colonia griega', 'Una provincia romana'], correct: 1, exp: 'Los castros eran poblados fortificados de los celtas, como los gallegos y numantinos.' },
  { s: H2, q: '¿Qué colonia fundaron los fenicios?', opts: ['Ampurias', 'Gadir', 'Rosas', 'Tarraco'], correct: 1, exp: 'Los fenicios fundaron Gadir (Cádiz). Ampurias y Rosas son griegas; Tarraco, romana.' },
  { s: H2, q: '¿Cuál de estos elementos NO difundieron los fenicios?', opts: ['El hierro', 'El torno de alfarero', 'La escritura alfabética', 'La moneda romana'], correct: 3, exp: 'Los fenicios difundieron el hierro, el torno de alfarero y la escritura alfabética.' },
  { s: H2, q: '¿Qué colonias fundaron los griegos?', opts: ['Gadir e Ibiza', 'Rosas y Ampurias', 'Carthago Nova y Toledo', 'Numancia y Tarraco'], correct: 1, exp: 'Los griegos fundaron Rosas y Ampurias.' },
  { s: H2, q: '¿De quién eran herederos los cartagineses?', opts: ['De los griegos', 'De las factorías fenicias', 'De los tartessos', 'De los celtas'], correct: 1, exp: 'Eran herederos de las factorías fenicias, especialmente de Ibiza.' },
  { s: H2, q: '¿Qué conflicto trajo a los romanos a la península?', opts: ['Las guerras cántabras', 'La Segunda Guerra Púnica', 'La batalla de Vouillé', 'La guerra del Peloponeso'], correct: 1, exp: 'La Segunda Guerra Púnica (218-201 a. C.) entre Roma y Cartago.' },

  { s: H3, q: '¿Dónde desembarcó el ejército romano en el 218 a. C.?', opts: ['Gadir', 'Ampurias', 'Tarraco', 'Carthago Nova'], correct: 1, exp: 'El desembarco en Ampurias en el 218 a. C. inicia la conquista de Hispania.' },
  { s: H3, q: '¿Qué ocurrió en el 195 a. C.?', opts: ['El inicio de la conquista', 'Las campañas de Catón contra las sublevaciones indígenas', 'Las guerras cántabras', 'La división en tres provincias'], correct: 1, exp: 'Las campañas de Catón reprimieron las sublevaciones de los pueblos indígenas.' },
  { s: H3, q: '¿Con qué episodio terminó la conquista de Hispania?', opts: ['La caída de Numancia', 'Las guerras cántabras', 'La Segunda Guerra Púnica', 'La batalla de Vouillé'], correct: 1, exp: 'Las guerras cántabras, con Augusto, terminaron en el 19 a. C. con el sometimiento de cántabros y astures.' },
  { s: H3, q: '¿Qué provincias se crearon en el 197 a. C.?', opts: ['Baetica y Lusitania', 'Hispania Citerior e Hispania Ulterior', 'Carthaginensis y Gallaecia', 'Tarraconensis y Balearica'], correct: 1, exp: 'Citerior (valle del Ebro y Levante) y Ulterior (valle del Guadalquivir).' },
  { s: H3, q: '¿Cuál era la capital de la Baetica?', opts: ['Tarraco', 'Corduba', 'Emerita Augusta', 'Bracara Augusta'], correct: 1, exp: 'Corduba. Tarraco era la capital de la Tarraconensis y Emerita Augusta, de la Lusitania.' },
  { s: H3, q: '¿Cuál era la capital de la Lusitania?', opts: ['Emerita Augusta', 'Corduba', 'Carthago Nova', 'Tarraco'], correct: 0, exp: 'Emerita Augusta (Mérida).' },
  { s: H3, q: '¿Qué provincias se crean en el Bajo Imperio (297 d. C.)?', opts: ['Citerior y Ulterior', 'Carthaginensis y Gallaecia', 'Baetica y Lusitania', 'Solo Balearica'], correct: 1, exp: 'Carthaginensis (Carthago Nova) y Gallaecia (Bracara Augusta). Balearica llega en el siglo IV.' },
  { s: H3, q: '¿Qué es la romanización?', opts: ['La conquista militar de Hispania', 'La asimilación de la cultura, lengua y formas de vida romanas por los indígenas', 'La división en provincias', 'La llegada del cristianismo'], correct: 1, exp: 'La romanización es el proceso de asimilación de la cultura romana por los pueblos indígenas.' },
  { s: H3, q: '¿Por qué la urbanización fue un medio de romanización?', opts: ['Porque las ciudades eran militares', 'Porque las ciudades difundían la cultura romana', 'Porque en ellas vivían los esclavos', 'Porque no había ciudades antes'], correct: 1, exp: 'Las ciudades se convirtieron en centros de difusión de la cultura romana.' },
  { s: H3, q: '¿Cuáles eran las principales vías romanas de Hispania?', opts: ['Vía Apia y Vía Flaminia', 'Vía Augusta y Vía de la Plata', 'Camino de Santiago y Vía Láctea', 'Vía Toledana y Vía Bética'], correct: 1, exp: 'La Vía Augusta y la Vía de la Plata conectaban las principales ciudades.' },
  { s: H3, q: '¿Qué forma de propiedad se extendió en la Hispania romana?', opts: ['El minifundio familiar', 'El latifundio trabajado por esclavos', 'La propiedad comunal', 'El feudo'], correct: 1, exp: 'Se extendió el latifundio trabajado por esclavos.' },
  { s: H3, q: '¿Qué incluía la religión romana adoptada en Hispania?', opts: ['El arrianismo', 'El culto al emperador', 'El islam', 'Los druidas'], correct: 1, exp: 'La religión romana incluía el culto al emperador. El cristianismo se extendió después, sobre todo desde el siglo III.' },

  { s: H4, q: '¿Qué pueblos germánicos invadieron la península en el 409?', opts: ['Visigodos y francos', 'Suevos, vándalos y alanos', 'Ostrogodos y lombardos', 'Bizantinos y vándalos'], correct: 1, exp: 'Suevos (Galicia), vándalos (Andalucía) y alanos (Portugal y Cartagena).' },
  { s: H4, q: '¿Dónde se instalaron los suevos?', opts: ['Andalucía', 'Galicia', 'Cartagena', 'Toledo'], correct: 1, exp: 'Los suevos se establecieron en Galicia.' },
  { s: H4, q: '¿Qué consecuencia tuvo la batalla de Vouillé (507)?', opts: ['La conversión al catolicismo', 'Los visigodos dejan Toulouse y se instalan en Toledo', 'La invasión musulmana', 'La expulsión de los bizantinos'], correct: 1, exp: 'Derrotados por los francos, los visigodos abandonaron Toulouse y establecieron su reino en Toledo.' },
  { s: H4, q: '¿Quién se convirtió al catolicismo en el III Concilio de Toledo?', opts: ['Leovigildo', 'Recaredo', 'Recesvinto', 'Suintila'], correct: 1, exp: 'Recaredo, en el 589, renunció al arrianismo: es la unificación religiosa.' },
  { s: H4, q: '¿De qué religión eran los visigodos antes de Recaredo?', opts: ['Católicos', 'Arrianos', 'Paganos', 'Musulmanes'], correct: 1, exp: 'Eran arrianos, mientras que los hispanorromanos eran católicos.' },
  { s: H4, q: '¿Qué es el Liber Iudiciorum?', opts: ['Un concilio', 'Las leyes comunes de Recesvinto (654)', 'Una obra de Isidoro de Sevilla', 'La asamblea que elegía al rey'], correct: 1, exp: 'El Liber Iudiciorum o Fuero Juzgo (654) es la unificación legislativa de Recesvinto.' },
  { s: H4, q: '¿Quién expulsó definitivamente a los bizantinos?', opts: ['Leovigildo', 'Recaredo', 'Suintila', 'Recesvinto'], correct: 2, exp: 'Suintila, ya en el siglo VII; también pacificó a los vascones. Leovigildo conquistó el reino suevo y combatió a los bizantinos.' },
  { s: H4, q: '¿Cómo era la monarquía visigoda?', opts: ['Hereditaria desde el principio', 'Electiva, lo que causaba inestabilidad', 'Absoluta y teocrática', 'Una república'], correct: 1, exp: 'El rey era elegido, lo que provocaba inestabilidad y luchas por el trono.' },
  { s: H4, q: '¿Qué órgano ayudaba al rey a gobernar?', opts: ['El Aula Regia', 'El Officium Palatinum', 'Los Concilios', 'La Asamblea de Hombres Libres'], correct: 1, exp: 'El Officium Palatinum: comes del tesoro, duces, comites de las ciudades y gardingos.' },
  { s: H4, q: '¿Qué eran los duces?', opts: ['Jefes de la Iglesia', 'Delegados del rey en las provincias', 'Recaudadores del tesoro', 'Miembros de la asamblea'], correct: 1, exp: 'Los duces eran los delegados del rey en las provincias.' },
  { s: H4, q: '¿Qué era el Aula Regia?', opts: ['El palacio de Toledo', 'El consejo de la alta aristocracia que asesoraba al rey', 'Un concilio religioso', 'La corte de justicia'], correct: 1, exp: 'El Aula Regia o Consejo Real asesoraba al rey y la formaba la alta aristocracia.' },
  { s: H4, q: '¿Qué función tenían los Concilios de Toledo?', opts: ['Solo religiosa', 'Legislativa y religiosa: unían política y religión', 'Militar', 'Económica'], correct: 1, exp: 'Eran asambleas legislativas y religiosas que ratificaban las decisiones del rey.' },
  { s: H4, q: '¿Qué fue la ruralización visigoda?', opts: ['El crecimiento de las ciudades', 'La pérdida de importancia de las ciudades', 'La llegada de campesinos germanos', 'La creación de latifundios'], correct: 1, exp: 'Durante la monarquía visigoda se aceleró la ruralización y las ciudades perdieron importancia.' },
  { s: H4, q: '¿Quién escribió las Etimologías?', opts: ['Recaredo', 'Isidoro de Sevilla', 'Catón', 'Recesvinto'], correct: 1, exp: 'Isidoro de Sevilla: una obra que reúne el saber acumulado y busca conservar la cultura romana.' },
  { s: H4, q: '¿Qué hecho puso fin al reino visigodo?', opts: ['La batalla de Vouillé', 'La invasión musulmana de 711', 'El III Concilio de Toledo', 'La llegada de los bizantinos'], correct: 1, exp: 'La invasión musulmana de 711.' },
]

export const unidad: Unidad = {
  id: 'his-t1',
  unidad: 'Tema 1',
  title: 'De la Prehistoria a la monarquía visigoda',
  shortTitle: 'Prehistoria a visigodos',
  description:
    'Paleolítico y Neolítico, pueblos prerromanos y colonizaciones, la Hispania romana y la monarquía visigoda.',
  footer: 'Prehistoria · Prerromanos · Roma · Visigodos',
  mapaRoot: 'De la Prehistoria a la monarquía visigoda',
  accent: 'volcanic',
  mapa,
  fichas,
  quiz,
  Historia,
}
