import type { Ficha, Pregunta, RamaMapa, Unidad } from '../../types'
import { AI, Divider, K } from '../../components/ui'
import { Galeria, Imagen } from '../../components/Imagen'

/** Atajo para las rutas de imagen de esta unidad. */
const img = (nombre: string) => `bio-u2/${nombre}.webp`

// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'generales', label: 'Características y clasificación', color: 'ochre',
    children: [
      { id: 'c1', label: 'Composición', detail: 'Formados fundamentalmente por C, H y O; algunos tienen también N, P y S. También se llaman azúcares o hidratos de carbono.' },
      { id: 'c2', label: 'Fórmula general', detail: 'Los más sencillos (monosacáridos) responden a la fórmula Cn(H₂O)n. Son polialcoholes con un grupo aldehído o un grupo cetona.' },
      { id: 'c3', label: 'Funciones', children: [
        { id: 'c3a', label: 'Energética', detail: 'Es la principal. Ejemplo: la glucosa.' },
        { id: 'c3b', label: 'De reserva', detail: 'Almidón (vegetales) y glucógeno (animales y hongos).' },
        { id: 'c3c', label: 'Estructural', detail: 'Celulosa y quitina.' },
        { id: 'c3d', label: 'Reconocimiento celular', detail: 'Glúcidos de la membrana.' },
        { id: 'c3e', label: 'Lubricante', detail: 'Proteoglicanos.' },
      ]},
      { id: 'c4', label: 'Clasificación', children: [
        { id: 'c4a', label: 'Osas (monosacáridos)', detail: 'Aldosas y cetosas. No hidrolizables.' },
        { id: 'c4b', label: 'Ósidos · Holósidos', detail: 'Solo monosacáridos: oligosacáridos (de 2 a 10, como los disacáridos) y polisacáridos (homo y heteropolisacáridos).' },
        { id: 'c4c', label: 'Ósidos · Heterósidos', detail: 'Monosacáridos unidos a sustancias no glucídicas: glucolípidos, glucoproteínas…' },
      ]},
    ],
  },
  {
    id: 'propiedades', label: 'Monosacáridos: propiedades e isomería', color: 'terracotta',
    children: [
      { id: 'p1', label: 'Propiedades', detail: 'No hidrolizables (son monómeros). Sólidos, cristalinos, blancos, solubles y dulces. Tienen poder reductor, presentan isomería y actividad óptica, y forman enlaces intra e intermoleculares.' },
      { id: 'p2', label: 'Poder reductor', detail: 'El grupo carbonilo (aldehído) puede oxidarse a carboxilo y reducir el medio: Cu²⁺ → Cu⁺. Es la base de la prueba de Fehling.' },
      { id: 'p3', label: 'Isómeros', detail: 'Igual fórmula molecular pero distinta fórmula desarrollada, y por tanto distinta estructura y propiedades.' },
      { id: 'p4', label: 'Carbono asimétrico', detail: 'El que está unido a cuatro sustituyentes distintos. Con n carbonos asimétricos hay 2ⁿ estereoisómeros posibles.' },
      { id: 'p5', label: 'Tipos de isomería', children: [
        { id: 'p5a', label: 'De función', detail: 'Aldosas frente a cetosas: gliceraldehído y dihidroxiacetona (C₃H₆O₃), glucosa y fructosa (C₆H₁₂O₆).' },
        { id: 'p5b', label: 'Enantiómeros', detail: 'Imágenes especulares no superponibles: formas D y L (D-glucosa y L-glucosa).' },
        { id: 'p5c', label: 'Epímeros', detail: 'Se diferencian en la posición del OH de un solo carbono asimétrico: la manosa es epímero de la glucosa en C-2 y la galactosa en C-4.' },
        { id: 'p5d', label: 'Isomería óptica', detail: 'Sus disoluciones desvían el plano de la luz polarizada: formas dextrógiras (+) y levógiras (−).' },
      ]},
    ],
  },
  {
    id: 'tipos', label: 'Clasificación de los monosacáridos', color: 'petrol',
    children: [
      { id: 't1', label: 'Según el grupo carbonilo', detail: 'Aldosas (grupo aldehído) y cetosas (grupo cetona).' },
      { id: 't2', label: 'Según el nº de carbonos', detail: 'Triosas, tetrosas, pentosas, hexosas y heptosas. Se combinan: aldotriosa, cetopentosa, aldohexosa…' },
      { id: 't3', label: 'Triosas (3 C)', detail: 'Gliceraldehído (aldotriosa) y dihidroxiacetona (cetotriosa): intermediarios metabólicos.' },
      { id: 't4', label: 'Pentosas (5 C)', detail: 'Ribosa (ARN, OH en el C-2) y desoxirribosa (ADN, solo H en el C-2), ambas aldopentosas. Ribulosa (cetopentosa): fija el CO₂ en la fotosíntesis.' },
      { id: 't5', label: 'Hexosas (6 C)', detail: 'Glucosa (aldohexosa, principal biomolécula energética), galactosa (aldohexosa, forma la lactosa) y fructosa (cetohexosa, azúcar de la fruta y la miel, forma la sacarosa).' },
    ],
  },
  {
    id: 'ciclica', label: 'Estructura en disolución', color: 'turquoise',
    children: [
      { id: 'e1', label: 'Fischer y Haworth', detail: 'En estado sólido son lineales (proyección de Fischer, inestable). En disolución, como en los seres vivos, adoptan forma cíclica (proyección de Haworth).' },
      { id: 'e2', label: 'Cómo se cierra el anillo', detail: 'Enlace intramolecular entre el carbono del grupo aldehído o cetona y el OH del carbono asimétrico más alejado de él.' },
      { id: 'e3', label: 'Hemiacetal y hemicetal', detail: 'Hemiacetal si interviene un aldehído (aldopentosas, aldohexosas); hemicetal si interviene una cetona (cetohexosas).' },
      { id: 'e4', label: 'Furanosas y piranosas', detail: 'Furanosas: anillo de 5 lados, derivado del furano (cetohexosas y aldopentosas). Piranosas: anillo de 6, derivado del pirano (aldohexosas).' },
      { id: 'e5', label: 'Carbono anomérico', detail: 'Al ciclar, el carbono del carbonilo se vuelve asimétrico: C-1 en las aldosas, C-2 en las cetosas. Origina dos anómeros: α (OH en posición trans respecto al CH₂OH) y β (cis).' },
      { id: 'e6', label: 'Nombre completo', detail: 'Anómero (α o β) – enantiómero (D o L) – nombre – tipo de ciclo. Ejemplo: α-D-glucopiranosa, β-D-fructofuranosa.' },
    ],
  },
  {
    id: 'derivados', label: 'Derivados y enlace O-glucosídico', color: 'verde',
    children: [
      { id: 'd1', label: 'Ácidos urónicos', detail: 'Por oxidación del OH terminal. Ejemplo: ácido glucurónico.' },
      { id: 'd2', label: 'Polialcoholes', detail: 'Por reducción del grupo carbonilo. Ejemplo: glicerina (glicerol).' },
      { id: 'd3', label: 'Desoxiazúcares', detail: 'Se sustituye un OH por un H. Ejemplo: desoxirribosa.' },
      { id: 'd4', label: 'Aminoazúcares', detail: 'Se sustituye un OH por un grupo amino. Ejemplos: glucosamina, N-acetil-glucosamina.' },
      { id: 'd5', label: 'Enlace O-glucosídico', detail: 'Se forma entre dos grupos –OH con desprendimiento de una molécula de H₂O. Es la base de los disacáridos y polisacáridos.' },
      { id: 'd6', label: 'Monocarbonílico', detail: 'Solo interviene un carbono anomérico: el disacárido conserva el poder reductor (maltosa).' },
      { id: 'd7', label: 'Dicarbonílico', detail: 'Intervienen los dos carbonos anoméricos: el disacárido pierde el poder reductor (sacarosa).' },
    ],
  },
  {
    id: 'disacaridos', label: 'Disacáridos', color: 'volcanic',
    children: [
      { id: 'x0', label: 'Propiedades', detail: 'Solubles, cristalizables, blancos y dulces. Tienen poder reductor solo si el enlace es monocarbonílico. Se rompen por hidrólisis con enzimas específicas (lactasa…).' },
      { id: 'x1', label: 'Sacarosa', detail: 'α-D-glucopiranosil (1→2) β-D-fructofuranósido. Azúcar de caña y remolacha. Reserva en células vegetales. NO reductora.' },
      { id: 'x2', label: 'Lactosa', detail: 'β-D-galactopiranosil (1→4) α-D-glucopiranosa. Azúcar de la leche. Reductora.' },
      { id: 'x3', label: 'Maltosa', detail: 'α-D-glucopiranosil (1→4) α-D-glucopiranosa. Azúcar de malta, en semillas en germinación. Procede de la hidrólisis del almidón.' },
      { id: 'x4', label: 'Isomaltosa', detail: 'α-D-glucopiranosil (1→6) α-D-glucopiranosa. Procede de la hidrólisis del almidón y el glucógeno (sus ramificaciones).' },
      { id: 'x5', label: 'Celobiosa', detail: 'β-D-glucopiranosil (1→4) β-D-glucopiranosa. No se halla libre: forma parte de la celulosa. Difícil de hidrolizar.' },
    ],
  },
  {
    id: 'polisacaridos', label: 'Polisacáridos', color: 'ochre',
    children: [
      { id: 'y0', label: 'Propiedades', detail: 'Macromoléculas de n monosacáridos unidos por enlace O-glucosídico (se desprenden n−1 moléculas de agua). No son dulces ni cristalinos, son insolubles o forman coloides, y no tienen poder reductor.' },
      { id: 'y1', label: 'De reserva (enlaces α, ramificados)', children: [
        { id: 'y1a', label: 'Almidón', detail: 'Reserva vegetal. Amilosa (α 1→4, helicoidal) + amilopectina (α 1→4 y α 1→6, ramificada cada 12 glucosas). Con lugol toma color violeta.' },
        { id: 'y1b', label: 'Glucógeno', detail: 'Reserva en animales (hígado y músculo) y hongos. Como la amilopectina, pero mucho más ramificado.' },
      ]},
      { id: 'y2', label: 'Estructurales (enlaces β, lineales)', children: [
        { id: 'y2a', label: 'Celulosa', detail: 'β-D-glucopiranosa (1→4), en unidades de celobiosa. Pared de la célula vegetal. Cadenas lineales unidas por puentes de H: 60-70 cadenas = micela; 20-30 micelas = microfibrilla; varias microfibrillas = fibra.' },
        { id: 'y2b', label: 'Quitina', detail: 'N-acetil-β-D-glucosamina (1→4), en unidades de quitobiosa. Exoesqueleto de artrópodos y pared de los hongos.' },
      ]},
      { id: 'y3', label: 'Heteropolisacáridos', detail: 'Más de un tipo de monosacárido. Hemicelulosa y pectina (pared vegetal), agar-agar (algas rojas; medio de cultivo), mucopolisacáridos como el ácido hialurónico, la condroitina y la heparina (anticoagulante).' },
    ],
  },
  {
    id: 'heterosidos', label: 'Heterósidos e identificación', color: 'petrol',
    children: [
      { id: 'h1', label: 'Glucolípidos', detail: 'Glúcido + lípido (ceramida): cerebrósidos y gangliósidos. En la cara externa de la membrana: reconocimiento celular, receptores.' },
      { id: 'h2', label: 'Glucoproteínas', detail: 'Glúcido + proteína. Sanguíneas (protrombina, inmunoglobulinas), hormonas (LH, FSH), de membrana (receptores, antígenos de rechazo de trasplantes, grupos sanguíneos A, B, 0). Mucinas: lubricación.' },
      { id: 'h3', label: 'Peptidoglicanos', detail: 'Pared bacteriana. Polímeros de N-acetilglucosamina y ácido N-acetilmurámico β(1→4) unidos por péptidos.' },
      { id: 'h4', label: 'Proteoglucanos', detail: 'Una «proteína núcleo» con muchas cadenas de mucopolisacáridos. Matriz extracelular; lubricantes y viscosos.' },
      { id: 'h5', label: 'Prueba de Fehling', detail: 'Detecta glúcidos reductores. Positivo: precipitado rojo ladrillo (Cu₂O). Negativo: sigue azul. La sacarosa da negativo.' },
      { id: 'h6', label: 'Prueba del lugol', detail: 'Detecta almidón: color violeta. Al calentar se decolora y al enfriar vuelve.' },
    ],
  },
]

// ─── La Historia ───
const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3">
    <span className="text-volcanic mt-1 shrink-0">▸</span>
    <span>{children}</span>
  </li>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-lg leading-relaxed mb-4">{children}</p>
)
const H3 = ({ n, titulo, sub }: { n: number; titulo: string; sub: string }) => (
  <h3 className="font-display text-2xl md:text-3xl font-semibold text-ochre-dark mb-6 leading-snug">
    {n}. {titulo}
    <br className="hidden md:block" />
    <span className="text-tierra-slate text-xl md:text-2xl font-normal"> {sub}</span>
  </h3>
)
const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">{children}</h4>
)
const Caja = ({ titulo, children }: { titulo: string; children: React.ReactNode }) => (
  <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
    <h5 className="font-display text-lg font-semibold text-petrol mb-2">{titulo}</h5>
    <div className="font-body text-base leading-relaxed">{children}</div>
  </div>
)
const Formula = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 my-6 text-center">
    <p className="font-display text-xl md:text-2xl font-bold text-ochre-dark tracking-wide">{children}</p>
  </div>
)

function Historia() {
  return (
    <article className="page-enter max-w-2xl mx-auto">
      <header className="mb-12 md:mb-16">
        <p className="font-body text-sm uppercase tracking-widest text-ochre-dark mb-3">Unidad 2 · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          El combustible y el andamio
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          Los glúcidos son a la vez la gasolina de la célula y parte de su estructura. Una misma pieza —
          la glucosa — sirve para quemarla y obtener energía, para guardarla en forma de almidón o
          glucógeno, o para construir la celulosa de un árbol. Todo depende de cómo se unan las piezas.
        </p>
      </header>

      {/* 1 · Características */}
      <section>
        <H3 n={1} titulo="Qué son los glúcidos" sub="características, funciones y clasificación" />
        <P>
          Los glúcidos están formados fundamentalmente por <K>C, H y O</K>; algunos tienen también N, P y
          S. Se les llama también <K>azúcares</K> o <K>hidratos de carbono</K>. Los más sencillos, los
          monosacáridos, responden a la fórmula:
        </P>
        <Formula>Cn(H₂O)n</Formula>
        <P>
          Químicamente son <K>polialcoholes</K> — cadenas con muchos grupos –OH — que contienen además un
          grupo <K>aldehído</K> o un grupo <K>cetona</K>. Esa diferencia, aldehído o cetona, es la primera
          gran división de los glúcidos.
        </P>
        <Imagen
          src={img('grupos-funcionales')}
          alt="Grupo aldehído y grupo cetona"
          pie="El grupo carbonilo (C=O): aldehído si está en un extremo de la cadena, cetona si está en medio."
        />
        <AI>
          <p>
            El nombre «hidratos de carbono» sale de esa fórmula, Cn(H₂O)n: parece carbono con agua
            pegada. Pero es solo una coincidencia numérica — en la molécula no hay agua como tal. Sirve
            para recordar la fórmula, no para entender la estructura.
          </p>
        </AI>

        <H4>Para qué sirven</H4>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Energética</K>: es su función principal. La glucosa es el ejemplo típico.</LI>
          <LI><K>De reserva</K>: almidón y glucógeno, que guardan glucosa para más adelante.</LI>
          <LI><K>Estructural</K>: celulosa y quitina.</LI>
          <LI><K>Reconocimiento celular</K>: los glúcidos de la membrana.</LI>
          <LI><K>Lubricante</K>: los proteoglicanos.</LI>
        </ul>

        <H4>Cómo se clasifican</H4>
        <P>
          La división básica es entre <K>osas</K> (monosacáridos: una sola unidad, no se pueden romper en
          otras más pequeñas) y <K>ósidos</K> (formados por varias unidades). Los ósidos se dividen a su
          vez en <K>holósidos</K>, que solo contienen monosacáridos, y <K>heterósidos</K>, que llevan
          además otras sustancias no glucídicas.
        </P>
        <Imagen
          src={img('clasificacion-osas-osidos')}
          alt="Esquema de clasificación de los glúcidos en osas y ósidos"
          pie="Osas: aldosas y cetosas. Ósidos: holósidos (oligosacáridos y polisacáridos) y heterósidos."
        />
      </section>

      <Divider />

      {/* 2 · Propiedades */}
      <section>
        <H3 n={2} titulo="Los monosacáridos" sub="las piezas básicas y sus propiedades" />
        <P>
          Los monosacáridos son los glúcidos más sencillos. Las células pueden usarlos{' '}
          <K>directamente</K> como fuente de energía mediante la oxidación celular; los ósidos, en cambio,
          tienen que ser hidrolizados antes.
        </P>
        <P>
          Están formados por una única cadena de <K>3, 5 o 6 carbonos</K>. Cada carbono lleva un grupo –OH
          y un H, salvo uno que tiene el grupo carbonilo: <K>aldehído si es terminal</K>, <K>cetona si está
          en medio</K>. En estado sólido forman cadenas lineales, pero en disolución — que es como están
          en los seres vivos — adoptan una configuración <K>cíclica</K>.
        </P>
        <Imagen
          src={img('glucosa-lineal-ciclica')}
          alt="La glucosa en forma lineal y en forma cíclica, con modelo tridimensional"
          pie="La glucosa: forma lineal y forma cíclica. En los seres vivos predomina la cíclica."
        />

        <H4>Sus propiedades</H4>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>No pueden hidrolizarse</K>: son los monómeros.</LI>
          <LI>Son <K>sólidos, cristalinos, blancos, solubles y dulces</K>.</LI>
          <LI>Tienen <K>poder reductor</K>.</LI>
          <LI>Presentan <K>isomería</K> y <K>actividad óptica</K>.</LI>
          <LI>Forman <K>enlaces intramoleculares</K> — por eso ciclan — e <K>intermoleculares</K>, que originan di y polisacáridos.</LI>
        </ul>

        <H4>El poder reductor</H4>
        <P>
          El grupo carbonilo — sobre todo el aldehído — puede <K>oxidarse a carboxilo</K>, y al hacerlo
          reduce a otra sustancia del medio. Es exactamente lo que ocurre en la célula: el carbono del
          monosacárido pasa de reducido a oxidado, se liberan CO₂, H₂O y <K>energía</K>. Las reacciones
          de oxidación son <K>exotérmicas</K>.
        </P>
        <P>
          En el laboratorio se aprovecha con el cobre: el monosacárido reduce el <K>Cu²⁺ a Cu⁺</K>, y ese
          cambio se ve a simple vista. Es la base de la prueba de Fehling, que aparece al final del tema.
        </P>
        <Imagen
          src={img('fehling-esquema')}
          alt="Reacción de Fehling positiva y negativa"
          pie="Fehling positivo (el azúcar reduce el cobre y aparece un precipitado rojizo) frente a negativo (se queda azul)."
        />
      </section>

      <Divider />

      {/* 3 · Isomería */}
      <section>
        <H3 n={3} titulo="Misma fórmula, distinta molécula" sub="la isomería" />
        <P>
          Dos moléculas son <K>isómeros</K> cuando tienen igual fórmula molecular pero distinta fórmula
          desarrollada: los mismos átomos, colocados de otra manera. Y como cambia la estructura, cambian
          las propiedades.
        </P>

        <H4>Isomería de función: aldosas y cetosas</H4>
        <P>
          El gliceraldehído y la dihidroxiacetona tienen la misma fórmula, <K>C₃H₆O₃</K>, pero uno es un
          aldehído y la otra una cetona. Lo mismo pasa con la glucosa y la fructosa, ambas{' '}
          <K>C₆H₁₂O₆</K>.
        </P>
        <Galeria
          imagenes={[
            { src: img('gliceraldehido-dihidroxiacetona'), alt: 'Gliceraldehído y dihidroxiacetona', pie: 'Gliceraldehído (aldotriosa) y dihidroxiacetona (cetotriosa)' },
            { src: img('glucosa-fructosa-isomeria-funcion'), alt: 'D-glucosa y D-fructosa', pie: 'D-glucosa (aldohexosa) y D-fructosa (cetohexosa)' },
          ]}
          pie="Isomería de función: mismo número de átomos, pero con grupo aldehído en un caso y cetona en el otro."
        />

        <H4>El carbono asimétrico</H4>
        <P>
          La isomería espacial aparece gracias a los <K>carbonos asimétricos</K>: los que están unidos a{' '}
          <K>cuatro sustituyentes distintos</K>. Cada uno puede disponerlos de dos maneras en el espacio,
          así que el número de estereoisómeros crece muy deprisa:
        </P>
        <Formula>n.º de estereoisómeros = 2ⁿ</Formula>
        <P>donde n es el número de carbonos asimétricos.</P>
        <Imagen
          src={img('carbono-asimetrico')}
          alt="Simetría espacial del gliceraldehído"
          pie="El gliceraldehído es el monosacárido más simple con un carbono asimétrico: sus dos formas son imágenes especulares."
        />

        <H4>Enantiómeros: D y L</H4>
        <P>
          Los <K>enantiómeros</K> son imágenes especulares entre sí, como tu mano derecha y tu mano
          izquierda: iguales, pero no superponibles. Son las formas <K>D</K> y <K>L</K>.
        </P>
        <Galeria
          imagenes={[
            { src: img('d-l-gliceraldehido'), alt: 'D-gliceraldehído y L-gliceraldehído', pie: 'D- y L-gliceraldehído' },
            { src: img('enantiomeros-espejo'), alt: 'Enantiómeros frente a un espejo', pie: 'Un enantiómero es el reflejo del otro' },
          ]}
        />
        <Imagen
          src={img('d-l-glucosa')}
          alt="D-glucosa y L-glucosa en proyección de Fischer"
          pie="D-glucosa y L-glucosa: todos los OH de los carbonos asimétricos cambian de lado."
        />
        <AI>
          <p>
            Cómo distinguir D de L en una proyección de Fischer: mira el <strong>carbono asimétrico más
            alejado del grupo carbonilo</strong> (el penúltimo). Si su –OH está a la{' '}
            <strong>derecha</strong>, es D; si está a la <strong>izquierda</strong>, es L. En los seres
            vivos predominan casi siempre las formas D.
          </p>
        </AI>

        <H4>Epímeros</H4>
        <P>
          Los <K>epímeros</K> se diferencian en la posición del –OH de <K>un solo carbono asimétrico</K>.
          La D-manosa es epímero de la D-glucosa en el C-2, y la D-galactosa lo es en el C-4.
        </P>
        <Imagen
          src={img('epimeros')}
          alt="D-manosa, D-glucosa y D-galactosa"
          pie="Epímeros de la glucosa: la manosa cambia solo el C-2; la galactosa, solo el C-4."
        />
        <P>Todas las D-aldosas y D-cetosas se pueden ordenar en un árbol, según el número de carbonos:</P>
        <Galeria
          imagenes={[
            { src: img('d-aldosas'), alt: 'Las D-aldosas de 3 a 6 carbonos', pie: 'D-aldosas de 3 a 6 carbonos' },
            { src: img('d-cetosas'), alt: 'Las D-cetosas', pie: 'D-cetosas' },
          ]}
        />

        <H4>Isomería óptica: dextrógiras y levógiras</H4>
        <P>
          Por tener carbonos asimétricos, los monosacáridos son <K>ópticamente activos</K>: sus
          disoluciones desvían el plano de la luz polarizada. Si lo desvían a la derecha son{' '}
          <K>dextrógiros (+)</K>; si lo desvían a la izquierda, <K>levógiros (−)</K>.
        </P>
        <Imagen
          src={img('luz-polarizada')}
          alt="Desviación de la luz polarizada por una disolución de azúcar"
          pie="La luz polarizada vibra en un solo plano; al atravesar la disolución, ese plano gira."
        />
        <AI>
          <p>
            Trampa clásica de examen: <strong>D/L y +/− no son lo mismo</strong>. D y L describen la
            estructura (dónde está un –OH); + y − describen un comportamiento medido en el laboratorio
            (hacia dónde gira la luz). Una molécula D puede ser levógira: la D-fructosa, por ejemplo, es
            levógira (−).
          </p>
        </AI>
      </section>

      <Divider />

      {/* 4 · Clasificación */}
      <section>
        <H3 n={4} titulo="Los monosacáridos que hay que conocer" sub="clasificación y ejemplos" />
        <P>
          Se clasifican combinando dos criterios: el <K>grupo carbonilo</K> (aldosa o cetosa) y el{' '}
          <K>número de carbonos</K> (triosa, tetrosa, pentosa, hexosa, heptosa). Así salen nombres como
          aldotriosa, cetopentosa o aldohexosa.
        </P>

        <div className="overflow-x-auto my-6">
          <table className="w-full min-w-[28rem] border-collapse font-body text-base">
            <thead>
              <tr className="bg-tierra-cream">
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">Carbonos</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">Aldosas</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">Cetosas</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-tierra-sand px-3 py-2.5 font-semibold">3 C · triosas</td><td className="border border-tierra-sand px-3 py-2.5">Gliceraldehído</td><td className="border border-tierra-sand px-3 py-2.5">Dihidroxiacetona</td></tr>
              <tr className="bg-tierra-cream/40"><td className="border border-tierra-sand px-3 py-2.5 font-semibold">5 C · pentosas</td><td className="border border-tierra-sand px-3 py-2.5">Ribosa y desoxirribosa</td><td className="border border-tierra-sand px-3 py-2.5">Ribulosa</td></tr>
              <tr><td className="border border-tierra-sand px-3 py-2.5 font-semibold">6 C · hexosas</td><td className="border border-tierra-sand px-3 py-2.5">Glucosa y galactosa</td><td className="border border-tierra-sand px-3 py-2.5">Fructosa</td></tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-5 mb-4">
          <Caja titulo="Triosas (3 C)">
            El <K>gliceraldehído</K> y la <K>dihidroxiacetona</K> son intermediarios metabólicos.
          </Caja>
          <Caja titulo="Pentosas (5 C)">
            La <K>ribosa</K> forma parte del <K>ARN</K> y tiene un –OH en el carbono 2. La{' '}
            <K>desoxirribosa</K> forma parte del <K>ADN</K> y en el carbono 2 tiene únicamente un H — de ahí
            «desoxi»: le falta un oxígeno. Ambas son aldopentosas. La <K>ribulosa</K>, una cetopentosa, fija
            el CO₂ en la fotosíntesis.
          </Caja>
          <Caja titulo="Hexosas (6 C)">
            La <K>glucosa</K> es la principal biomolécula energética; libre se encuentra en la uva. La{' '}
            <K>galactosa</K> forma, unida a la glucosa, la <K>lactosa</K>, el azúcar de la leche. La{' '}
            <K>fructosa</K> es el azúcar de la fruta y de la miel, y forma, unida a la glucosa, la{' '}
            <K>sacarosa</K>. Glucosa y galactosa tienen grupo aldehído; la fructosa, grupo cetona.
          </Caja>
        </div>
        <Imagen
          src={img('ribosa-desoxirribosa')}
          alt="D-ribosa y 2-desoxi-D-ribosa"
          pie="Ribosa (ARN) y desoxirribosa (ADN): la única diferencia está en el carbono 2."
        />
        <P>
          Por funciones, en resumen: <K>estructural</K> (ribosa y desoxirribosa, en los ácidos nucleicos de
          todas las células), <K>energética</K> (glucosa en el citoplasma y fructosa en frutos y semen) e{' '}
          <K>intermediarios metabólicos</K> (gliceraldehído, dihidroxiacetona, ribulosa).
        </P>
      </section>

      <Divider />

      {/* 5 · Ciclación */}
      <section>
        <H3 n={5} titulo="Cuando la cadena se muerde la cola" sub="la estructura en disolución" />
        <P>
          Hay dos formas de dibujar un monosacárido. La <K>proyección de Fischer</K> es lineal y
          corresponde a una forma inestable. La <K>proyección de Haworth</K> es un anillo, y es la forma
          en la que están en los seres vivos.
        </P>
        <Imagen
          src={img('glucosa-lineal-haworth')}
          alt="Glucosa en proyección de Fischer y en proyección de Haworth"
          pie="La misma glucosa en proyección de Fischer (izquierda) y ciclada en proyección de Haworth (derecha)."
        />

        <H4>Cómo se cierra el anillo</H4>
        <P>
          El monosacárido forma un <K>enlace intramolecular</K> entre el carbono que tiene el grupo
          aldehído o cetona y el <K>carbono asimétrico más alejado</K> de él. Ese enlace recibe un nombre
          distinto según el grupo que intervenga:
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Hemiacetal</K>, cuando interviene un aldehído (aldopentosas y aldohexosas).</LI>
          <LI><K>Hemicetal</K>, cuando interviene una cetona (cetohexosas).</LI>
        </ul>
        <Galeria
          imagenes={[
            { src: img('hemiacetal'), alt: 'Aldehído más alcohol da hemiacetal', pie: 'Aldehído + alcohol → hemiacetal' },
            { src: img('hemicetal'), alt: 'Cetona más alcohol da hemicetal', pie: 'Cetona + alcohol → hemicetal' },
          ]}
        />

        <H4>Furanosas y piranosas</H4>
        <P>
          El anillo resultante puede tener cinco o seis vértices, y se nombra por parecido con dos
          moléculas: el <K>furano</K> (5) y el <K>pirano</K> (6).
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Furanosas</K>: derivadas del furano. Cetohexosas y aldopentosas.</LI>
          <LI><K>Piranosas</K>: derivadas del pirano. Aldohexosas.</LI>
        </ul>
        <Imagen src={img('furano-pirano')} alt="Anillos de furano y pirano" pie="Furano (5 vértices) y pirano (6 vértices)." />
        <Imagen
          src={img('ciclacion-aldosas')}
          alt="Ciclación de la D-glucosa"
          pie="Ciclación de una aldosa: el C-1 (aldehído) se une al –OH del C-5 y se forma un anillo de pirano."
        />

        <H4>El carbono anomérico: α y β</H4>
        <P>
          Al cerrarse el anillo pasa algo importante: el carbono que tenía el carbonilo se convierte en un
          nuevo <K>carbono asimétrico</K>, el <K>carbono anomérico</K> — el C-1 en las aldosas, el C-2 en
          las cetosas. Su –OH puede quedar de dos maneras, y así aparecen dos <K>anómeros</K>:
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>α</K>: el –OH del carbono anomérico queda en posición <K>trans</K> respecto al CH₂OH (en lados opuestos del anillo).</LI>
          <LI><K>β</K>: queda en posición <K>cis</K> (en el mismo lado).</LI>
        </ul>
        <Imagen
          src={img('alfa-beta-glucopiranosa')}
          alt="α-D-glucopiranosa y β-D-glucopiranosa"
          pie="α-D-glucopiranosa y β-D-glucopiranosa: solo cambia la posición del –OH del carbono 1."
        />
        <Galeria
          imagenes={[
            { src: img('ciclacion-glucosa-alfa-beta'), alt: 'La D-glucosa abierta da lugar a α y β-D-glucopiranosa', pie: 'De la forma abierta salen los dos anómeros' },
            { src: img('mutarrotacion'), alt: 'Paso entre α y β-glucopiranosa a través de la forma abierta', pie: 'En disolución, α y β se interconvierten pasando por la forma abierta' },
          ]}
        />

        <H4>Las cetosas y las pentosas también ciclan</H4>
        <P>
          En la fructosa, una cetohexosa, el carbono anomérico es el <K>C-2</K>, y se forma un{' '}
          <K>hemicetal</K> con un anillo de furano: una furanosa.
        </P>
        <Galeria
          imagenes={[
            { src: img('ciclacion-cetosas'), alt: 'Ciclación de la D-fructosa', pie: 'Ciclación de una cetosa (D-fructosa)' },
            { src: img('fructosa-alfa-beta'), alt: 'α y β-D-fructofuranosa', pie: 'α- y β-D-fructofuranosa' },
          ]}
        />
        <Imagen
          src={img('ribosa-furanosa-piranosa')}
          alt="La D-ribosa puede formar ribofuranosas y ribopiranosas"
          pie="La D-ribosa puede ciclar como furanosa o como piranosa, en distintas proporciones. En los ácidos nucleicos aparece como furanosa."
        />

        <H4>El nombre completo</H4>
        <P>El nombre de todo monosacárido ciclado tiene que indicar, en este orden:</P>
        <ol className="font-body text-lg leading-relaxed space-y-2 pl-1 mb-4">
          <li><span className="font-semibold text-ochre-dark">1.</span> El tipo de anómero: <K>α o β</K>.</li>
          <li><span className="font-semibold text-ochre-dark">2.</span> El enantiómero: <K>D o L</K>.</li>
          <li><span className="font-semibold text-ochre-dark">3.</span> El nombre de la molécula: glucosa, galactosa…</li>
          <li><span className="font-semibold text-ochre-dark">4.</span> El tipo de ciclo: <K>furanosa o piranosa</K>.</li>
        </ol>
        <Formula>α-D-glucopiranosa · β-D-fructofuranosa · α-D-ribofuranosa</Formula>
      </section>

      <Divider />

      {/* 6 · Derivados */}
      <section>
        <H3 n={6} titulo="Retocar un monosacárido" sub="moléculas derivadas" />
        <P>Cambiando un solo grupo de un monosacárido se obtienen moléculas nuevas con funciones propias:</P>
        <div className="space-y-5 mb-4">
          <Caja titulo="Ácidos urónicos">
            Por <K>oxidación</K> del grupo –OH terminal. Ejemplo: el ácido glucurónico, que forma parte de
            algunos heteropolisacáridos.
          </Caja>
          <Caja titulo="Polialcoholes">
            Por <K>reducción</K> del grupo carbonilo. Ejemplo: la glicerina.
          </Caja>
          <Caja titulo="Desoxiazúcares">
            Se <K>sustituye un –OH por un H</K>. Ejemplo: la desoxirribosa.
          </Caja>
          <Caja titulo="Aminoazúcares">
            Se <K>sustituye un –OH por un grupo amino</K>. Ejemplos: la glucosamina y la N-acetil-glucosamina,
            que es la pieza de la quitina.
          </Caja>
        </div>
        <Galeria
          imagenes={[
            { src: img('derivados-monosacaridos'), alt: 'Polialcoholes y aminoazúcares', pie: 'Polialcoholes y aminoazúcares' },
            { src: img('n-acetilglucosamina'), alt: 'β-D-N-acetilglucosamina', pie: 'N-acetil-glucosamina: la unidad de la quitina' },
          ]}
        />
      </section>

      <Divider />

      {/* 7 · Enlace y disacáridos */}
      <section>
        <H3 n={7} titulo="Unir las piezas" sub="el enlace O-glucosídico y los disacáridos" />
        <P>
          Para unir dos monosacáridos se forma un enlace entre dos grupos –OH, uno de cada uno, y se
          desprende una <K>molécula de agua</K>. Es el <K>enlace O-glucosídico</K>, y es la base de la
          formación de todos los disacáridos y polisacáridos.
        </P>
        <Formula>–OH + HO– → –O– + H₂O</Formula>
        <Galeria
          imagenes={[
            { src: img('enlace-glucosidico-3d'), alt: 'Enlace glucosídico entre los carbonos 1 y 4', pie: 'Enlace glucosídico entre los carbonos 1 y 4' },
            { src: img('formacion-enlace-glucosidico'), alt: 'Formación del enlace O-glucosídico con liberación de agua', pie: 'Al formarse el enlace se libera una molécula de agua' },
          ]}
        />
        <P>
          Para romperlo hace falta la reacción inversa, la <K>hidrólisis</K>, y enzimas específicas que
          intervienen en la digestión, como la <K>lactasa</K>, que degrada la lactosa.
        </P>
        <Imagen src={img('lactasa')} alt="La lactasa hidroliza la lactosa en galactosa y glucosa" pie="La lactasa rompe la lactosa en galactosa y glucosa." />

        <H4>Monocarbonílico o dicarbonílico</H4>
        <P>La pregunta clave de este apartado es qué carbonos intervienen en el enlace, porque de eso depende el poder reductor:</P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Monocarbonílico</K>: solo interviene <K>un carbono anomérico</K>. El otro queda libre, así que el disacárido <span className="font-bold text-terracotta-dark">mantiene el poder reductor</span>. Ejemplo: maltosa.</LI>
          <LI><K>Dicarbonílico</K>: intervienen <K>los dos carbonos anoméricos</K>. El disacárido <span className="font-bold text-terracotta-dark">pierde el poder reductor</span>. Ejemplo: sacarosa.</LI>
        </ul>
        <Galeria
          imagenes={[
            { src: img('enlace-monocarbonilico'), alt: 'Disacárido reductor con enlace monocarbonílico', pie: 'Reductor: queda libre el –OH hemiacetálico de uno de los monosacáridos' },
            { src: img('enlace-dicarbonilico'), alt: 'Disacárido no reductor con enlace dicarbonílico', pie: 'No reductor: los dos –OH hemiacetálicos están en el enlace' },
          ]}
        />

        <H4>Cómo se nombran</H4>
        <P>
          En los monocarbonílicos, el primer monosacárido termina en <K>-osil</K> y el segundo conserva
          la terminación <K>-osa</K>, con los carbonos del enlace entre paréntesis. En los dicarbonílicos
          el segundo termina en <K>-ósido</K>:
        </P>
        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 my-6 space-y-2 text-center">
          <p className="font-body text-base md:text-lg"><span className="font-semibold">Maltosa</span> · α-D-glucopiranosil (1→4) α-D-glucopiranos<strong>a</strong></p>
          <p className="font-body text-base md:text-lg"><span className="font-semibold">Sacarosa</span> · α-D-glucopiranosil (1→2) β-D-fructofuranós<strong>ido</strong></p>
        </div>
        <P>
          Los disacáridos son <K>solubles, cristalizables, blancos y dulces</K>, y tienen poder reductor
          solo los de enlace monocarbonílico.
        </P>

        <H4>Los cinco disacáridos</H4>
        <div className="overflow-x-auto my-6">
          <table className="w-full min-w-[36rem] border-collapse font-body text-sm md:text-base">
            <thead>
              <tr className="bg-tierra-cream">
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">Disacárido</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">Enlace</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">Dónde está</th>
                <th className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold">¿Reductor?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-tierra-sand px-3 py-2 font-semibold">Sacarosa</td><td className="border border-tierra-sand px-3 py-2">glucosa α(1→2)β fructosa</td><td className="border border-tierra-sand px-3 py-2">Caña y remolacha; reserva vegetal</td><td className="border border-tierra-sand px-3 py-2 text-terracotta-dark font-semibold">No</td></tr>
              <tr className="bg-tierra-cream/40"><td className="border border-tierra-sand px-3 py-2 font-semibold">Lactosa</td><td className="border border-tierra-sand px-3 py-2">galactosa β(1→4) glucosa</td><td className="border border-tierra-sand px-3 py-2">Leche; reserva animal</td><td className="border border-tierra-sand px-3 py-2 text-turquoise-dark font-semibold">Sí</td></tr>
              <tr><td className="border border-tierra-sand px-3 py-2 font-semibold">Maltosa</td><td className="border border-tierra-sand px-3 py-2">glucosa α(1→4) glucosa</td><td className="border border-tierra-sand px-3 py-2">Malta, semillas en germinación; hidrólisis del almidón</td><td className="border border-tierra-sand px-3 py-2 text-turquoise-dark font-semibold">Sí</td></tr>
              <tr className="bg-tierra-cream/40"><td className="border border-tierra-sand px-3 py-2 font-semibold">Isomaltosa</td><td className="border border-tierra-sand px-3 py-2">glucosa α(1→6) glucosa</td><td className="border border-tierra-sand px-3 py-2">Cebada germinada; hidrólisis del almidón</td><td className="border border-tierra-sand px-3 py-2 text-turquoise-dark font-semibold">Sí</td></tr>
              <tr><td className="border border-tierra-sand px-3 py-2 font-semibold">Celobiosa</td><td className="border border-tierra-sand px-3 py-2">glucosa β(1→4) glucosa</td><td className="border border-tierra-sand px-3 py-2">No libre: forma la celulosa</td><td className="border border-tierra-sand px-3 py-2 text-turquoise-dark font-semibold">Sí</td></tr>
            </tbody>
          </table>
        </div>
        <Imagen
          src={img('sacarosa-color')}
          alt="Sacarosa: α-D-glucosa unida a β-D-fructosa"
          pie="Sacarosa: α-D-glucopiranosa (verde) unida a β-D-fructofuranosa (naranja) por sus dos carbonos anoméricos."
        />
        <Galeria
          imagenes={[
            { src: img('sacarosa'), alt: 'Sacarosa', pie: 'Sacarosa' },
            { src: img('lactosa'), alt: 'Lactosa', pie: 'Lactosa' },
            { src: img('maltosa'), alt: 'Maltosa', pie: 'Maltosa (α 1→4)' },
            { src: img('isomaltosa'), alt: 'Isomaltosa', pie: 'Isomaltosa (α 1→6)' },
            { src: img('celobiosa'), alt: 'Celobiosa', pie: 'Celobiosa (β 1→4)' },
          ]}
          pie="Maltosa e isomaltosa forman parte del almidón y el glucógeno; la celobiosa, de la celulosa."
        />
        <AI>
          <p>
            Maltosa y celobiosa son las dos glucosa + glucosa unidas por (1→4). <strong>Lo único que las
            separa es α frente a β</strong>, y esa diferencia decide nada menos que si el polímero es
            comida (almidón, α) o madera (celulosa, β). Tenemos amilasas que rompen los enlaces α entre
            glucosas, pero no celulasas para los β: por eso digerimos el pan y no el papel. (Ojo: no es
            que no podamos romper ningún enlace β — la lactasa rompe el β(1→4) de la lactosa. Lo que nos
            falta es la enzima concreta de la celulosa.)
          </p>
        </AI>
      </section>

      <Divider />

      {/* 8 · Polisacáridos de reserva */}
      <section>
        <H3 n={8} titulo="Guardar glucosa para después" sub="polisacáridos y homopolisacáridos de reserva" />
        <P>
          Los <K>polisacáridos</K> son macromoléculas formadas por muchos monosacáridos unidos por enlace
          O-glucosídico. Si se unen n monosacáridos, se desprenden <K>n − 1 moléculas de agua</K>. Pueden
          ser cadenas lineales o ramificadas.
        </P>
        <P>
          Sus propiedades son las contrarias a las de los monosacáridos: <K>no son dulces</K>,{' '}
          <K>no cristalizan</K>, son <K>insolubles o forman coloides</K> con el agua y{' '}
          <K>no tienen poder reductor</K>, porque todos sus carbonos anoméricos están ocupados en enlaces.
        </P>
        <P>
          Se dividen en <K>homopolisacáridos</K> (un solo tipo de monosacárido) y{' '}
          <K>heteropolisacáridos</K> (varios). Y entre los homopolisacáridos hay una regla muy útil:
        </P>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-ochre/5 border border-ochre/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-ochre-dark mb-2">De reserva</p>
            <p className="font-body text-base leading-relaxed">Enlaces <K>α</K>, cadenas <K>ramificadas</K>: almidón y glucógeno.</p>
          </div>
          <div className="bg-petrol/5 border border-petrol/20 rounded-xl p-5">
            <p className="font-body text-xs uppercase tracking-widest text-petrol-dark mb-2">Estructurales</p>
            <p className="font-body text-base leading-relaxed">Enlaces <K>β</K>, cadenas <K>lineales</K>: celulosa y quitina.</p>
          </div>
        </div>

        <H4>El almidón</H4>
        <P>
          Es el polisacárido de <K>reserva vegetal</K>, en los tejidos de reserva de las plantas. Es un
          polímero de <K>α-D-glucopiranosa</K> con enlaces α, más débiles y fáciles de hidrolizar. Lo
          hidrolizan las <K>amilasas</K>, que liberan glucosa, maltosa y fragmentos con ramas. Tiene dos
          componentes:
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Amilosa</K>: enlaces α(1→4). Una sucesión de maltosas que se enrolla en hélice.</LI>
          <LI><K>Amilopectina</K>: enlaces α(1→4) y α(1→6). Formada por maltosa e isomaltosa, con una <K>ramificación cada 12 glucosas</K>.</LI>
        </ul>
        <Imagen
          src={img('amilopectina-ramificacion')}
          alt="Amilopectina: cadena con enlaces α-1,4 y ramificación α-1,6"
          pie="La cadena avanza con enlaces α(1→4); en los puntos de ramificación aparece un enlace α(1→6)."
        />
        <Galeria
          imagenes={[
            { src: img('amilosa-helice'), alt: 'Estructura helicoidal de la amilosa', pie: 'Amilosa: hélice sin ramificar' },
            { src: img('amilopectina-helice'), alt: 'Estructura ramificada de la amilopectina', pie: 'Amilopectina: hélice con ramificaciones' },
          ]}
        />
        <P>
          En las células vegetales el almidón se acumula en <K>granos</K>, con una forma característica de
          cada especie:
        </P>
        <Imagen
          src={img('granos-almidon-microscopio')}
          alt="Granos de almidón al microscopio"
          pie="Granos de almidón a 400 aumentos: se ven las estrías semicirculares de crecimiento."
        />
        <Galeria
          columnas={3}
          imagenes={[
            { src: img('granos-almidon-patata'), alt: 'Granos de almidón de patata', pie: 'Patata' },
            { src: img('granos-almidon-maiz'), alt: 'Granos de almidón de maíz', pie: 'Maíz' },
            { src: img('granos-almidon-calabaza'), alt: 'Granos de almidón de calabaza', pie: 'Calabaza' },
          ]}
        />

        <H4>El glucógeno</H4>
        <P>
          Es el polisacárido de reserva en <K>animales</K> — en el <K>hígado y los músculos</K> — y en los{' '}
          <K>hongos</K>. Es también un polímero de α-D-glucopiranosa con maltosa e isomaltosa, parecido a
          la amilopectina, pero <K>mucho más ramificado</K>. Se localiza en el citoplasma, dentro de
          gránulos.
        </P>
        <Galeria
          imagenes={[
            { src: img('glucogeno-estructura'), alt: 'Estructura ramificada del glucógeno', pie: 'Glucógeno: muy ramificado' },
            { src: img('glucogeno-higado-musculo'), alt: 'El glucógeno se almacena en el hígado y el músculo', pie: 'Se almacena en hígado y músculo' },
          ]}
        />
        <AI>
          <p>
            ¿Para qué tantas ramas? Cada rama tiene un extremo libre por el que las enzimas pueden empezar a
            soltar glucosas. Más ramas significa más puntos de ataque a la vez, y por tanto glucosa
            disponible más deprisa: justo lo que necesita un músculo que se pone a correr.
          </p>
        </AI>
      </section>

      <Divider />

      {/* 9 · Estructurales */}
      <section>
        <H3 n={9} titulo="Construir con azúcar" sub="homopolisacáridos estructurales" />
        <H4>La celulosa</H4>
        <P>
          Es el principal componente de la <K>pared de las células vegetales</K>. Es un polímero de{' '}
          <K>β-D-glucopiranosa</K> con enlaces <K>β(1→4)</K>, organizado en unidades de celobiosa y{' '}
          <K>sin ramificar</K>. Los enlaces β son muy estables, así que es insoluble y muy resistente. Solo
          la hidrolizan las <K>celulasas</K>.
        </P>
        <P>
          Su fuerza viene de cómo se agrupa. Las cadenas son lineales y se unen entre sí por{' '}
          <K>puentes de hidrógeno</K>, y a partir de ahí se van formando estructuras cada vez mayores:
        </P>
        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-5 my-6 space-y-2 font-body text-base md:text-lg">
          <p><K>60-70 cadenas</K> → una micela</p>
          <p><K>20-30 micelas</K> → una microfibrilla</p>
          <p><K>varias microfibrillas</K> → una fibra</p>
          <p><K>capas de fibras alternadas</K> → el entramado de la pared</p>
        </div>
        <Imagen
          src={img('celulosa-puentes-hidrogeno')}
          alt="Cadenas de celulosa unidas por puentes de hidrógeno"
          pie="Cadenas paralelas de celulosa unidas por puentes de hidrógeno."
        />
        <Galeria
          imagenes={[
            { src: img('celulosa-fibras'), alt: 'De la molécula de celulosa a la fibra de la pared vegetal', pie: 'De las moléculas a la fibra y la pared' },
            { src: img('pared-celular-celulosa'), alt: 'Microfibrillas de celulosa en la pared celular', pie: 'Microfibrillas en la pared celular' },
          ]}
        />
        <Imagen src={img('algodon')} alt="Fruto de algodón abierto" pie="Algodón: fibras de celulosa." />

        <H4>La quitina</H4>
        <P>
          Forma el <K>exoesqueleto de los artrópodos</K> y la pared de las células de los{' '}
          <K>hongos</K>. Es un polímero de <K>N-acetil-β-D-glucosamina</K> con enlaces β(1→4), organizado en
          unidades de <K>quitobiosa</K>. Como en la celulosa, sus enlaces β(1→4) son muy difíciles de
          hidrolizar.
        </P>
        <Galeria
          imagenes={[
            { src: img('quitina-exoesqueleto'), alt: 'Quitina en el exoesqueleto de un escarabajo', pie: 'Capas de quitina en el exoesqueleto' },
            { src: img('quitina-enlace-beta'), alt: 'Enlace β-1,4 entre unidades de N-acetilglucosamina', pie: 'Enlace β(1→4) entre dos N-acetilglucosaminas' },
          ]}
        />
      </section>

      <Divider />

      {/* 10 · Hetero */}
      <section>
        <H3 n={10} titulo="Mezclas y combinaciones" sub="heteropolisacáridos y heterósidos" />
        <P>
          Los <K>heteropolisacáridos</K> están formados por más de un tipo de monosacárido. Los que hay que
          conocer:
        </P>
        <div className="space-y-5 mb-4">
          <Caja titulo="Hemicelulosa">
            Formada, entre otros, por glucosa, galactosa y fructosa. Se localiza en las{' '}
            <K>paredes vegetales</K>.
          </Caja>
          <Caja titulo="Pectina">Otro componente de la <K>pared celular</K> vegetal.</Caja>
          <Caja titulo="Agar-agar">
            Un <K>mucílago</K>, mezcla de agaropectina y agarosa, que absorbe agua. Forma parte de la pared
            de las <K>algas rojas</K>. Es difícil de digerir y se usa como <K>medio de cultivo</K> en
            microbiología, laxante y espesante.
          </Caja>
        </div>
        <Galeria
          imagenes={[
            { src: img('pared-celular-capas'), alt: 'Capas de la pared celular vegetal con celulosa, hemicelulosa y pectina', pie: 'Pared vegetal: celulosa, hemicelulosa y pectina' },
            { src: img('pectina'), alt: 'Estructura de la pectina', pie: 'Pectina' },
          ]}
        />
        <Galeria
          imagenes={[
            { src: img('alga-roja'), alt: 'Alga roja', pie: 'Alga roja, de donde se obtiene el agar' },
            { src: img('agar-placa-petri'), alt: 'Placa de Petri con agar', pie: 'Agar como medio de cultivo' },
          ]}
        />

        <H4>Los mucopolisacáridos</H4>
        <P>
          Son polisacáridos <K>lineales</K> de origen animal, de composición variada. Están en la matriz
          extracelular del tejido cartilaginoso, las articulaciones, el líquido sinovial o el humor vítreo.
          Suelen asociarse a proteínas formando <K>proteoglicanos</K>, y son <K>lubricantes y viscosos</K>.
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Ácido hialurónico</K>: N-acetil-glucosamina + ácido glucurónico. Tejido conectivo, humor vítreo, líquido sinovial y cubiertas del óvulo.</LI>
          <LI><K>Condroitina</K>: composición parecida. Huesos y cartílagos.</LI>
          <LI><K>Heparina</K>: hígado, pulmones y paredes arteriales. Es <K>anticoagulante</K>.</LI>
        </ul>
        <Galeria
          columnas={3}
          imagenes={[
            { src: img('acido-hialuronico'), alt: 'Ácido hialurónico', pie: 'Ácido hialurónico' },
            { src: img('condroitina'), alt: 'Sulfatos de condroitina', pie: 'Condroitina' },
            { src: img('heparina'), alt: 'Heparina', pie: 'Heparina' },
          ]}
        />

        <H4>Los heterósidos</H4>
        <P>
          Son glúcidos unidos a otra molécula no glucídica, llamada <K>aglucón</K>:
        </P>
        <div className="space-y-5 mb-4">
          <Caja titulo="Glucolípidos">
            El aglucón es un lípido (<K>ceramida</K>). Hay <K>cerebrósidos</K> (con galactosa o glucosa) y{' '}
            <K>gangliósidos</K> (con un oligosacárido ramificado). Están en la <K>cara externa de la
            membrana</K>: reconocimiento celular, receptores de moléculas, punto de unión de virus y
            bacterias.
          </Caja>
          <Caja titulo="Glucoproteínas">
            El aglucón es una proteína. Hay glucoproteínas <K>sanguíneas</K> (protrombina,
            inmunoglobulinas), <K>hormonas</K> (LH y FSH) y de <K>membrana</K> (receptores, reconocimiento
            celular, antígenos que causan el rechazo de los trasplantes). También son glucoproteínas las{' '}
            <K>mucinas</K>, que lubrican, y los antígenos de los <K>grupos sanguíneos A, B y 0</K>.
          </Caja>
          <Caja titulo="Peptidoglicanos">
            Forman la <K>pared bacteriana</K>. Polímeros de N-acetilglucosamina y ácido N-acetilmurámico
            unidos por enlaces β(1→4).
          </Caja>
          <Caja titulo="Proteoglucanos">
            Una <K>proteína núcleo</K> a la que se unen cadenas de mucopolisacáridos. Son componentes de la{' '}
            <K>matriz extracelular</K>.
          </Caja>
        </div>
        <Galeria
          imagenes={[
            { src: img('glucoproteina'), alt: 'Glucoproteína: cadena glucídica unida a una proteína', pie: 'Glucoproteína' },
            { src: img('glucolipido'), alt: 'Glucolípido', pie: 'Glucolípido' },
          ]}
        />
        <Imagen
          src={img('membrana-glucocalix')}
          alt="Membrana plasmática con glucolípidos y glucoproteínas en su cara externa"
          pie="Glucolípidos y glucoproteínas en la cara externa de la membrana plasmática."
        />
        <Galeria
          imagenes={[
            { src: img('peptidoglicano'), alt: 'Estructura del peptidoglicano', pie: 'Peptidoglicano de la pared bacteriana' },
            { src: img('proteoglucano'), alt: 'Proteoglucano', pie: 'Proteoglucano' },
          ]}
        />
      </section>

      <Divider />

      {/* 11 · Identificación */}
      <section>
        <H3 n={11} titulo="Cómo se detectan en el laboratorio" sub="Fehling y lugol" />
        <H4>Prueba de Fehling: glúcidos reductores</H4>
        <P>
          Sirve para identificar glúcidos con <K>poder reductor</K>. Se usan dos reactivos: el{' '}
          <K>Fehling A</K> (sulfato de cobre, CuSO₄, en agua destilada) y el <K>Fehling B</K> (tartrato
          de sodio y potasio con NaOH).
        </P>
        <ol className="font-body text-lg leading-relaxed space-y-2 pl-1 mb-4">
          <li><span className="font-semibold text-ochre-dark">1.</span> Se toman 3 ml de la muestra.</li>
          <li><span className="font-semibold text-ochre-dark">2.</span> Se añade 1 ml de Fehling A y 1 ml de Fehling B: el líquido se vuelve de un <K>azul intenso</K>.</li>
          <li><span className="font-semibold text-ochre-dark">3.</span> Se calienta al baño María o en el mechero.</li>
          <li><span className="font-semibold text-ochre-dark">4.</span> <K>Positivo</K>: color <K>rojo ladrillo</K> y un precipitado. <K>Negativo</K>: se queda azul o azul verdoso.</li>
        </ol>
        <Imagen
          src={img('fehling-reaccion')}
          alt="Un aldehído reduce el Cu2+ y precipita óxido de cobre"
          pie="El aldehído se oxida a ácido y el Cu²⁺ se reduce, precipitando Cu₂O (rojo ladrillo)."
        />
        <Galeria
          columnas={3}
          imagenes={[
            { src: img('fehling-inicio'), alt: 'Tubo de ensayo azul al inicio de la reacción', pie: 'Inicio: azul' },
            { src: img('fehling-positivo'), alt: 'Tubo con precipitado rojo de óxido de cobre', pie: 'Positivo: rojo ladrillo' },
            { src: img('fehling-tubos'), alt: 'Glucosa y fructosa positivas, sacarosa negativa', pie: 'Glucosa y fructosa (+), sacarosa (−)' },
          ]}
          pie="La sacarosa da negativo: su enlace es dicarbonílico y no le queda poder reductor."
        />

        <H4>Prueba del lugol: el almidón</H4>
        <P>
          El <K>lugol</K> es una disolución de yodo y yoduro potásico. En contacto con el{' '}
          <K>almidón</K> toma un color <K>violeta</K>. Si se calienta, el color desaparece; al enfriarse,
          vuelve.
        </P>
        <Galeria
          imagenes={[
            { src: img('prueba-lugol'), alt: 'Muestra más lugol da reacción positiva violeta', pie: 'Muestra + lugol → violeta' },
            { src: img('lugol-calor'), alt: 'Al calentar se decolora y al enfriar vuelve el color', pie: 'Al calentar se decolora; al enfriar, vuelve' },
          ]}
        />
        <AI>
          <p>
            ¿Por qué desaparece el color con el calor? El yodo se mete dentro de la hélice de la amilosa, y
            es esa hélice la que da el violeta. Al calentar, la hélice se deshace y el yodo se sale: se
            pierde el color. Al enfriarse, la hélice se vuelve a formar y atrapa otra vez al yodo.
          </p>
        </AI>
      </section>
    </article>
  )
}

// ─── Secciones (compartidas por fichas y quiz) ───
const S1 = '1. Características y clasificación'
const S2 = '2. Propiedades de los monosacáridos'
const S3 = '3. Isomería'
const S4 = '4. Tipos de monosacáridos'
const S5 = '5. Estructura cíclica'
const S6 = '6. Derivados'
const S7 = '7. Enlace O-glucosídico y disacáridos'
const S8 = '8. Polisacáridos de reserva'
const S9 = '9. Polisacáridos estructurales'
const S10 = '10. Heteropolisacáridos y heterósidos'
const S11 = '11. Identificación'

// ─── Fichas de estudio ───
const fichas: Ficha[] = [
  { s: S1, p: '¿Qué elementos forman los glúcidos?', r: 'Fundamentalmente C, H y O. Algunos tienen también N, P y S.' },
  { s: S1, p: '¿Qué otros nombres reciben los glúcidos?', r: 'Azúcares o hidratos de carbono.' },
  { s: S1, p: '¿Cuál es la fórmula general de los monosacáridos?', r: 'Cn(H₂O)n.' },
  { s: S1, p: '¿Qué son químicamente los monosacáridos?', r: 'Polialcoholes que contienen un grupo aldehído o un grupo cetona.' },
  { s: S1, p: 'Diferencia entre grupo aldehído y grupo cetona.', r: 'Ambos son grupos carbonilo (C=O). Aldehído si está en un extremo de la cadena; cetona si está en medio.', imgRespuesta: img('grupos-funcionales') },
  { s: S1, p: 'Nombra las 5 funciones de los glúcidos con un ejemplo de cada una.', r: 'Energética (glucosa); de reserva (almidón y glucógeno); estructural (celulosa y quitina); reconocimiento celular (glúcidos de membrana); lubricante (proteoglicanos).' },
  { s: S1, p: '¿Cuál es la principal función de los glúcidos?', r: 'La energética.' },
  { s: S1, p: 'Diferencia entre osas y ósidos.', r: 'Osas: monosacáridos, no hidrolizables. Ósidos: formados por varias unidades, se pueden hidrolizar.' },
  { s: S1, p: 'Diferencia entre holósidos y heterósidos.', r: 'Holósidos: solo contienen monosacáridos (oligosacáridos y polisacáridos). Heterósidos: monosacáridos unidos a sustancias no glucídicas.' },
  { s: S1, p: '¿Cuántos monosacáridos tiene un oligosacárido?', r: 'De 2 a 10. Los disacáridos son oligosacáridos.' },

  { s: S2, p: '¿Por qué las células pueden usar los monosacáridos directamente y los ósidos no?', r: 'Los monosacáridos se oxidan directamente para obtener energía; los ósidos tienen que ser hidrolizados antes.' },
  { s: S2, p: '¿Cuántos carbonos tienen los monosacáridos más comunes?', r: '3, 5 o 6.' },
  { s: S2, p: '¿Qué forma tienen los monosacáridos en estado sólido y en disolución?', r: 'Sólido: cadena lineal. En disolución (como en los seres vivos): forma cíclica.' },
  { s: S2, p: 'Enumera las propiedades físicas de los monosacáridos.', r: 'Sólidos, cristalinos, blancos, solubles y dulces.' },
  { s: S2, p: '¿Se pueden hidrolizar los monosacáridos? ¿Por qué?', r: 'No: son los monómeros, las unidades más sencillas.' },
  { s: S2, p: '¿En qué consiste el poder reductor de los monosacáridos?', r: 'El grupo carbonilo (aldehído) puede oxidarse a carboxilo y, al hacerlo, reduce a otra sustancia del medio (por ejemplo, Cu²⁺ a Cu⁺).' },
  { s: S2, p: '¿Qué se libera al oxidarse un monosacárido en la célula?', r: 'CO₂, H₂O y energía. Las reacciones de oxidación son exotérmicas.' },
  { s: S2, p: '¿Qué dos tipos de enlaces forman los monosacáridos y qué originan?', r: 'Intramoleculares, que originan las formas cíclicas; e intermoleculares, que originan di y polisacáridos.' },

  { s: S3, p: '¿Qué son los isómeros?', r: 'Moléculas con igual fórmula molecular pero distinta fórmula desarrollada, y por tanto distinta estructura y propiedades.' },
  { s: S3, p: '¿Qué es un carbono asimétrico?', r: 'El que está unido a cuatro sustituyentes distintos.' },
  { s: S3, p: '¿Cuántos estereoisómeros hay con n carbonos asimétricos?', r: '2ⁿ.' },
  { s: S3, p: 'Nombra los tipos de isomería de los monosacáridos.', r: 'Isomería de función (aldosas y cetosas); isomería espacial o estereoisomería (enantiómeros y epímeros); isomería óptica (dextrógiras y levógiras).' },
  { s: S3, p: '¿Qué es la isomería de función? Pon dos ejemplos.', r: 'Misma fórmula, pero una es aldosa y la otra cetosa. Gliceraldehído y dihidroxiacetona (C₃H₆O₃); glucosa y fructosa (C₆H₁₂O₆).', imgRespuesta: img('glucosa-fructosa-isomeria-funcion') },
  { s: S3, p: '¿Qué son los enantiómeros?', r: 'Isómeros que son imágenes especulares entre sí, no superponibles: las formas D y L.', imgRespuesta: img('d-l-glucosa') },
  { s: S3, p: '¿Cómo se distingue la forma D de la L en la proyección de Fischer?', r: 'Por el –OH del carbono asimétrico más alejado del carbonilo: a la derecha, D; a la izquierda, L.' },
  { s: S3, p: '¿Qué son los epímeros?', r: 'Isómeros que se diferencian en la posición del –OH de un solo carbono asimétrico.' },
  { s: S3, p: '¿De qué carbono es epímero la manosa respecto a la glucosa? ¿Y la galactosa?', r: 'La manosa, del C-2. La galactosa, del C-4.', imgRespuesta: img('epimeros') },
  { s: S3, p: '¿Por qué los monosacáridos son ópticamente activos?', r: 'Por tener carbonos asimétricos: sus disoluciones desvían el plano de la luz polarizada.' },
  { s: S3, p: 'Diferencia entre formas dextrógiras y levógiras.', r: 'Dextrógiras (+): desvían la luz polarizada a la derecha. Levógiras (−): a la izquierda.' },
  { s: S3, p: '¿Es lo mismo D que dextrógiro?', r: 'No. D/L describe la estructura (posición de un –OH); +/− describe hacia dónde gira la luz. Una molécula D puede ser levógira, como la D-fructosa.' },

  { s: S4, p: '¿Qué dos criterios se combinan para clasificar los monosacáridos?', r: 'El grupo carbonilo (aldosa o cetosa) y el número de carbonos (triosa, tetrosa, pentosa, hexosa, heptosa).' },
  { s: S4, p: 'Nombra una aldotriosa y una cetotriosa. ¿Qué función tienen?', r: 'Gliceraldehído (aldotriosa) y dihidroxiacetona (cetotriosa). Son intermediarios metabólicos.' },
  { s: S4, p: 'Diferencia entre ribosa y desoxirribosa.', r: 'La ribosa forma parte del ARN y tiene un –OH en el C-2. La desoxirribosa forma parte del ADN y en el C-2 solo tiene un H.', imgRespuesta: img('ribosa-desoxirribosa') },
  { s: S4, p: '¿Qué monosacárido fija el CO₂ en la fotosíntesis? ¿De qué tipo es?', r: 'La ribulosa, una cetopentosa.' },
  { s: S4, p: '¿Qué tipo de monosacárido es la glucosa y qué función tiene?', r: 'Aldohexosa. Es la principal biomolécula energética; libre se encuentra en la uva.' },
  { s: S4, p: '¿Qué tipo de monosacárido es la galactosa y dónde aparece?', r: 'Aldohexosa. Forma, unida a la glucosa, la lactosa (azúcar de la leche), y algunos polisacáridos.' },
  { s: S4, p: '¿Qué tipo de monosacárido es la fructosa y dónde aparece?', r: 'Cetohexosa. Es el azúcar de la fruta y la miel, y forma, unida a la glucosa, la sacarosa.' },
  { s: S4, p: 'Clasifica los monosacáridos por su función, con ejemplos.', r: 'Estructural: ribosa y desoxirribosa (ARN y ADN). Energética: glucosa (citoplasma) y fructosa (frutos y semen). Intermediarios metabólicos: gliceraldehído, dihidroxiacetona, ribulosa.' },

  { s: S5, p: 'Diferencia entre proyección de Fischer y de Haworth.', r: 'Fischer: forma lineal, inestable. Haworth: forma cíclica (anillo), la que tienen en los seres vivos.', imgRespuesta: img('glucosa-lineal-haworth') },
  { s: S5, p: '¿Entre qué átomos se forma el enlace que cierra el anillo?', r: 'Entre el carbono del grupo aldehído o cetona y el –OH del carbono asimétrico más alejado de él.' },
  { s: S5, p: 'Diferencia entre hemiacetal y hemicetal.', r: 'Hemiacetal: interviene un aldehído (aldopentosas, aldohexosas). Hemicetal: interviene una cetona (cetohexosas).' },
  { s: S5, p: '¿Qué son las furanosas y qué monosacáridos las forman?', r: 'Anillos de 5 vértices derivados del furano. Cetohexosas y aldopentosas.', imgRespuesta: img('furano-pirano') },
  { s: S5, p: '¿Qué son las piranosas y qué monosacáridos las forman?', r: 'Anillos de 6 vértices derivados del pirano. Aldohexosas.' },
  { s: S5, p: '¿Qué es el carbono anomérico?', r: 'El carbono del antiguo grupo carbonilo, que al ciclar se vuelve asimétrico. Es el C-1 en las aldosas y el C-2 en las cetosas.' },
  { s: S5, p: 'Diferencia entre los anómeros α y β.', r: 'α: el –OH del carbono anomérico está en posición trans respecto al CH₂OH. β: en posición cis.', imgRespuesta: img('alfa-beta-glucopiranosa') },
  { s: S5, p: '¿Cuál es el carbono anomérico de la fructosa y qué anillo forma?', r: 'El C-2. Forma un hemicetal con anillo de furano: una fructofuranosa.' },
  { s: S5, p: '¿Qué cuatro datos debe indicar el nombre de un monosacárido ciclado, y en qué orden?', r: '1) Anómero (α o β); 2) enantiómero (D o L); 3) nombre de la molécula; 4) tipo de ciclo (furanosa o piranosa). Ej.: α-D-glucopiranosa.' },

  { s: S6, p: '¿Cómo se obtienen los ácidos urónicos? Pon un ejemplo.', r: 'Por oxidación del –OH terminal. Ejemplo: ácido glucurónico.' },
  { s: S6, p: '¿Cómo se obtienen los polialcoholes? Pon un ejemplo.', r: 'Por reducción del grupo carbonilo. Ejemplo: la glicerina.' },
  { s: S6, p: '¿Qué es un desoxiazúcar? Pon un ejemplo.', r: 'Un monosacárido en el que se sustituye un –OH por un H. Ejemplo: la desoxirribosa.' },
  { s: S6, p: '¿Qué es un aminoazúcar? Pon ejemplos.', r: 'Un monosacárido en el que se sustituye un –OH por un grupo amino. Glucosamina y N-acetil-glucosamina.' },

  { s: S7, p: '¿Cómo se forma el enlace O-glucosídico?', r: 'Entre dos grupos –OH de dos monosacáridos, con desprendimiento de una molécula de H₂O.', imgRespuesta: img('formacion-enlace-glucosidico') },
  { s: S7, p: '¿Qué reacción rompe el enlace O-glucosídico?', r: 'La hidrólisis, catalizada por enzimas específicas como la lactasa.' },
  { s: S7, p: 'Diferencia entre enlace monocarbonílico y dicarbonílico.', r: 'Monocarbonílico: interviene un solo carbono anomérico; el disacárido mantiene el poder reductor. Dicarbonílico: intervienen los dos; lo pierde.' },
  { s: S7, p: '¿Por qué la sacarosa no tiene poder reductor?', r: 'Porque su enlace es dicarbonílico (1→2): los dos carbonos anoméricos están ocupados en el enlace.' },
  { s: S7, p: 'Enumera las propiedades de los disacáridos.', r: 'Solubles, cristalizables, blancos y dulces. Poder reductor solo si el enlace es monocarbonílico.' },
  { s: S7, p: 'Nombre completo de la sacarosa. ¿Dónde se encuentra?', r: 'α-D-glucopiranosil (1→2) β-D-fructofuranósido. Azúcar de caña y remolacha; reserva energética vegetal.', imgRespuesta: img('sacarosa') },
  { s: S7, p: 'Nombre completo de la lactosa. ¿Dónde se encuentra?', r: 'β-D-galactopiranosil (1→4) α-D-glucopiranosa. Azúcar de la leche.', imgRespuesta: img('lactosa') },
  { s: S7, p: 'Nombre completo de la maltosa. ¿De dónde procede?', r: 'α-D-glucopiranosil (1→4) α-D-glucopiranosa. Azúcar de malta; de la hidrólisis del almidón.', imgRespuesta: img('maltosa') },
  { s: S7, p: 'Nombre completo de la isomaltosa.', r: 'α-D-glucopiranosil (1→6) α-D-glucopiranosa. Procede de la hidrólisis del almidón y otros polisacáridos.', imgRespuesta: img('isomaltosa') },
  { s: S7, p: 'Nombre completo de la celobiosa. ¿Dónde se encuentra?', r: 'β-D-glucopiranosil (1→4) β-D-glucopiranosa. No se halla libre: forma parte de la celulosa.', imgRespuesta: img('celobiosa') },
  { s: S7, p: '¿Qué diferencia estructural hay entre maltosa y celobiosa?', r: 'Ambas son glucosa (1→4) glucosa, pero la maltosa tiene enlace α y la celobiosa β.' },
  { s: S7, p: 'En los disacáridos monocarbonílicos, ¿cómo terminan los nombres de cada monosacárido?', r: 'El primero en -osil y el segundo en -osa. En los dicarbonílicos, el segundo termina en -ósido.' },

  { s: S8, p: '¿Cuántas moléculas de agua se desprenden al unir n monosacáridos?', r: 'n − 1.' },
  { s: S8, p: 'Enumera las propiedades de los polisacáridos.', r: 'No son dulces, no cristalizan, son insolubles o forman coloides y no tienen poder reductor.' },
  { s: S8, p: '¿Por qué los polisacáridos no tienen poder reductor?', r: 'Porque todos sus carbonos anoméricos están ocupados en enlaces.' },
  { s: S8, p: 'Diferencia entre homopolisacáridos y heteropolisacáridos.', r: 'Homopolisacáridos: un solo tipo de monosacárido. Heteropolisacáridos: varios tipos.' },
  { s: S8, p: '¿Qué tipo de enlace y de cadena tienen los homopolisacáridos de reserva y los estructurales?', r: 'Reserva: enlaces α, cadenas ramificadas (almidón, glucógeno). Estructurales: enlaces β, cadenas lineales (celulosa, quitina).' },
  { s: S8, p: '¿Qué es el almidón y dónde se encuentra?', r: 'El polisacárido de reserva vegetal, polímero de α-D-glucopiranosa. En los tejidos de reserva de las plantas.' },
  { s: S8, p: '¿Qué dos moléculas forman el almidón?', r: 'Amilosa y amilopectina.' },
  { s: S8, p: 'Diferencia entre amilosa y amilopectina.', r: 'Amilosa: enlaces α(1→4), sin ramificar, en hélice (sucesión de maltosas). Amilopectina: α(1→4) y α(1→6), ramificada cada 12 glucosas (maltosa e isomaltosa).', imgRespuesta: img('amilopectina-ramificacion') },
  { s: S8, p: '¿Qué enzimas hidrolizan el almidón y qué producen?', r: 'Las amilasas. Producen glucosa, maltosa y fragmentos con ramas.' },
  { s: S8, p: '¿Qué es el glucógeno y dónde se encuentra?', r: 'El polisacárido de reserva animal (hígado y músculo) y de los hongos. Se localiza en gránulos del citoplasma.' },
  { s: S8, p: '¿En qué se diferencia el glucógeno de la amilopectina?', r: 'En que está mucho más ramificado.' },

  { s: S9, p: '¿Qué es la celulosa y dónde se encuentra?', r: 'Un polímero de β-D-glucopiranosa β(1→4) en unidades de celobiosa, sin ramificar. Principal componente de la pared de la célula vegetal.' },
  { s: S9, p: '¿Qué mantiene unidas las cadenas de celulosa?', r: 'Puentes de hidrógeno entre cadenas lineales paralelas.', imgRespuesta: img('celulosa-puentes-hidrogeno') },
  { s: S9, p: 'Describe la organización de la celulosa desde la cadena hasta la pared.', r: '60-70 cadenas forman una micela; 20-30 micelas, una microfibrilla; varias microfibrillas, una fibra; capas de fibras alternadas forman el entramado de la pared.' },
  { s: S9, p: '¿Qué enzimas hidrolizan la celulosa?', r: 'Las celulasas.' },
  { s: S9, p: '¿Qué es la quitina y dónde se encuentra?', r: 'Un polímero de N-acetil-β-D-glucosamina β(1→4) en unidades de quitobiosa. Exoesqueleto de artrópodos y pared de los hongos.', imgRespuesta: img('quitina-enlace-beta') },

  { s: S10, p: 'Nombra heteropolisacáridos de la pared vegetal.', r: 'Hemicelulosa y pectina.' },
  { s: S10, p: '¿Qué es el agar-agar y para qué se usa?', r: 'Un mucílago (agaropectina + agarosa) de la pared de las algas rojas que absorbe agua. Se usa como medio de cultivo en microbiología, laxante y espesante.', imgRespuesta: img('agar-placa-petri') },
  { s: S10, p: '¿Qué son los mucopolisacáridos y dónde se encuentran?', r: 'Polisacáridos lineales de origen animal, lubricantes y viscosos. En la matriz extracelular del cartílago, articulaciones, líquido sinovial, humor vítreo…' },
  { s: S10, p: '¿De qué está formado el ácido hialurónico y dónde está?', r: 'De N-acetil-glucosamina y ácido glucurónico. En el tejido conectivo, humor vítreo, líquido sinovial y cubiertas del óvulo.' },
  { s: S10, p: '¿Qué mucopolisacárido es anticoagulante y dónde está?', r: 'La heparina. En hígado, pulmones y paredes arteriales.' },
  { s: S10, p: '¿Dónde está la condroitina?', r: 'En huesos y cartílagos.' },
  { s: S10, p: '¿Qué es un heterósido? ¿Qué es el aglucón?', r: 'Un glúcido unido a otra molécula no glucídica, que se llama aglucón.' },
  { s: S10, p: '¿Qué son los glucolípidos y qué funciones tienen?', r: 'Glúcido + lípido (ceramida): cerebrósidos y gangliósidos. En la cara externa de la membrana: reconocimiento celular, receptores y punto de unión de virus y bacterias.' },
  { s: S10, p: 'Pon ejemplos de glucoproteínas.', r: 'Sanguíneas (protrombina, inmunoglobulinas), hormonas (LH, FSH), de membrana (receptores, antígenos de rechazo de trasplantes, grupos sanguíneos A, B, 0) y mucinas.' },
  { s: S10, p: '¿Qué son los peptidoglicanos y dónde están?', r: 'Polímeros de N-acetilglucosamina y ácido N-acetilmurámico β(1→4). Forman la pared bacteriana.' },
  { s: S10, p: '¿Qué son los proteoglucanos?', r: 'Una proteína núcleo con cadenas de mucopolisacáridos unidas. Componentes de la matriz extracelular.' },

  { s: S11, p: '¿Qué detecta la prueba de Fehling?', r: 'Glúcidos con poder reductor.' },
  { s: S11, p: '¿Qué contienen los reactivos Fehling A y B?', r: 'Fehling A: sulfato de cobre (CuSO₄). Fehling B: tartrato de sodio y potasio con NaOH.' },
  { s: S11, p: '¿Cómo se ve un Fehling positivo y uno negativo?', r: 'Positivo: rojo ladrillo con precipitado (Cu₂O). Negativo: se queda azul o azul verdoso.', imgRespuesta: img('fehling-tubos') },
  { s: S11, p: '¿Qué detecta el lugol y de qué color da positivo?', r: 'El almidón. Toma color violeta.' },
  { s: S11, p: '¿Qué ocurre si se calienta el almidón teñido con lugol?', r: 'Se decolora; al enfriarse vuelve el color violeta.', imgRespuesta: img('lugol-calor') },
  { s: S11, p: '¿De qué está hecho el lugol?', r: 'De yodo y yoduro potásico.' },

  // ── Identificación visual de estructuras ──
  { s: S7, p: 'Identifica el disacárido de la imagen · A', r: 'Sacarosa: glucosa y fructosa (anillo de 5) unidas α(1→2). No reductora.', img: img('sacarosa-sin-nombre') },
  { s: S7, p: 'Identifica el disacárido de la imagen · B', r: 'Celobiosa: dos glucosas unidas β(1→4). Unidad de la celulosa.', img: img('celobiosa-sin-nombre') },
  { s: S7, p: 'Identifica el disacárido de la imagen · C', r: 'Isomaltosa: dos glucosas unidas α(1→6), fácil de reconocer por el CH₂ en el enlace.', img: img('isomaltosa-sin-nombre') },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  { s: S1, q: '¿Qué elementos forman fundamentalmente los glúcidos?', opts: ['C, H y N', 'C, H y O', 'C, O y P', 'C, H, O y S'], correct: 1, exp: 'Los glúcidos están formados fundamentalmente por C, H y O; algunos tienen también N, P y S.' },
  { s: S1, q: '¿Cuál es la fórmula general de los monosacáridos?', opts: ['CnH2nOn+1', 'Cn(H₂O)n', 'CnHnOn', 'Cn(OH)n'], correct: 1, exp: 'Los monosacáridos responden a la fórmula Cn(H₂O)n.' },
  { s: S1, q: '¿Qué son químicamente los monosacáridos?', opts: ['Ácidos grasos con un grupo amino', 'Polialcoholes con un grupo aldehído o cetona', 'Ésteres de glicerina', 'Cadenas de aminoácidos'], correct: 1, exp: 'Son polialcoholes que contienen el grupo aldehído o el grupo cetona.' },
  { s: S1, q: '¿Cuál es la principal función de los glúcidos?', opts: ['Estructural', 'Energética', 'Catalítica', 'Hormonal'], correct: 1, exp: 'Su principal función es energética; algunos se acumulan como reserva.' },
  { s: S1, q: '¿Qué pareja de glúcidos tiene función de reserva?', opts: ['Celulosa y quitina', 'Almidón y glucógeno', 'Ribosa y desoxirribosa', 'Heparina y condroitina'], correct: 1, exp: 'El almidón (vegetal) y el glucógeno (animal) son los polisacáridos de reserva. Celulosa y quitina son estructurales.' },
  { s: S1, q: '¿Qué glúcidos tienen función lubricante?', opts: ['Los monosacáridos', 'Los proteoglicanos', 'Los disacáridos', 'El almidón'], correct: 1, exp: 'Los proteoglicanos tienen función lubricante.' },
  { s: S1, q: 'Los heterósidos están formados por…', opts: ['Solo monosacáridos', 'Monosacáridos y sustancias no glucídicas', 'Solo disacáridos', 'Polisacáridos ramificados'], correct: 1, exp: 'Los heterósidos llevan monosacáridos unidos a otras sustancias no glucídicas. Los holósidos solo tienen monosacáridos.' },
  { s: S1, q: '¿Cuántos monosacáridos forman un oligosacárido?', opts: ['1', 'De 2 a 10', 'De 10 a 100', 'Más de 1000'], correct: 1, exp: 'Los oligosacáridos tienen de 2 a 10 monosacáridos.' },

  { s: S2, q: '¿Por qué la célula puede usar los monosacáridos directamente como fuente de energía?', opts: ['Porque son insolubles', 'Porque no necesitan ser hidrolizados', 'Porque tienen enlaces β', 'Porque no tienen carbono'], correct: 1, exp: 'Los monosacáridos se oxidan directamente; los ósidos necesitan ser hidrolizados antes.' },
  { s: S2, q: '¿Qué forma tienen los monosacáridos en disolución, como en los seres vivos?', opts: ['Lineal', 'Cíclica', 'Helicoidal', 'Ramificada'], correct: 1, exp: 'En estado sólido son lineales, pero en disolución adoptan configuración cíclica.' },
  { s: S2, q: '¿Cuál de estas NO es una propiedad de los monosacáridos?', opts: ['Son dulces', 'Son solubles', 'Son hidrolizables', 'Tienen poder reductor'], correct: 2, exp: 'Los monosacáridos NO pueden hidrolizarse: son los monómeros.' },
  { s: S2, q: '¿En qué consiste el poder reductor de un monosacárido?', opts: ['En que se reduce a alcohol', 'En que su carbonilo se oxida a carboxilo reduciendo a otra sustancia', 'En que cede agua', 'En que forma enlaces β'], correct: 1, exp: 'El carbonilo (aldehído) puede oxidarse a carboxilo y así reducir el medio, por ejemplo el Cu²⁺ a Cu⁺.' },
  { s: S2, q: 'Las reacciones de oxidación de los monosacáridos son…', opts: ['Endotérmicas', 'Exotérmicas', 'Reversibles sin energía', 'Imposibles en la célula'], correct: 1, exp: 'La oxidación libera CO₂, H₂O y energía: son reacciones exotérmicas.' },

  { s: S3, q: '¿Qué son los isómeros?', opts: ['Moléculas con distinta fórmula molecular', 'Moléculas con igual fórmula molecular y distinta fórmula desarrollada', 'Moléculas idénticas', 'Polímeros de glucosa'], correct: 1, exp: 'Los isómeros tienen igual fórmula molecular pero distinta estructura, y por tanto distintas propiedades.' },
  { s: S3, q: '¿Qué es un carbono asimétrico?', opts: ['Un carbono con un doble enlace', 'Un carbono unido a cuatro sustituyentes distintos', 'El carbono del grupo carbonilo', 'Un carbono sin hidrógenos'], correct: 1, exp: 'Carbono asimétrico es el que está unido a cuatro sustituyentes distintos.' },
  { s: S3, q: 'Una aldohexosa tiene 4 carbonos asimétricos. ¿Cuántos estereoisómeros posibles tiene?', opts: ['4', '8', '16', '32'], correct: 2, exp: 'El número de estereoisómeros es 2ⁿ: 2⁴ = 16.' },
  { s: S3, q: 'La glucosa y la fructosa son un ejemplo de isomería…', opts: ['Óptica', 'De función', 'Anomérica', 'Epimérica'], correct: 1, exp: 'Ambas son C₆H₁₂O₆, pero la glucosa es aldosa y la fructosa cetosa: isomería de función.' },
  { s: S3, q: '¿Qué son los enantiómeros?', opts: ['Isómeros que difieren en un solo carbono', 'Isómeros que son imágenes especulares', 'Isómeros α y β', 'Isómeros de función'], correct: 1, exp: 'Los enantiómeros son imágenes especulares no superponibles: las formas D y L.' },
  { s: S3, q: 'En la proyección de Fischer, una molécula es D si…', opts: ['El –OH del C-1 está a la derecha', 'El –OH del carbono asimétrico más alejado del carbonilo está a la derecha', 'Desvía la luz a la derecha', 'Todos los –OH están a la derecha'], correct: 1, exp: 'Se mira el carbono asimétrico más alejado del grupo carbonilo: con el –OH a la derecha es D; a la izquierda, L.' },
  { s: S3, q: '¿Qué molécula es epímero de la glucosa en el C-4?', opts: ['Manosa', 'Galactosa', 'Fructosa', 'Ribosa'], correct: 1, exp: 'La galactosa es epímero de la glucosa en el C-4; la manosa lo es en el C-2.' },
  { s: S3, q: '¿Qué son los epímeros?', opts: ['Isómeros que se diferencian en un solo carbono asimétrico', 'Imágenes especulares', 'Anómeros α y β', 'Un aldehído y una cetona'], correct: 0, exp: 'Los epímeros se diferencian en la posición del –OH de un solo carbono asimétrico.' },
  { s: S3, q: 'Una sustancia dextrógira…', opts: ['Tiene el –OH a la derecha', 'Desvía la luz polarizada a la derecha', 'Es siempre D', 'No tiene carbonos asimétricos'], correct: 1, exp: 'Dextrógira (+) significa que desvía el plano de la luz polarizada hacia la derecha. No es lo mismo que D.' },
  { s: S3, q: '¿Es cierto que toda molécula D es dextrógira?', opts: ['Sí, siempre', 'No: D/L es estructura y +/− es desviación de la luz', 'Solo en las cetosas', 'Solo en disolución'], correct: 1, exp: 'D/L describe la posición de un –OH; +/− se mide en el laboratorio. La D-fructosa, por ejemplo, es levógira.' },
  { s: S3, q: '¿Qué tipo de isomería muestra la imagen?', opts: ['Epímeros', 'Enantiómeros', 'Anómeros', 'Isomería de función'], correct: 1, exp: 'D-glucosa y L-glucosa son imágenes especulares: enantiómeros.', img: img('d-l-glucosa') },

  { s: S4, q: '¿Qué es la ribulosa?', opts: ['Una aldopentosa del ARN', 'Una cetopentosa que fija CO₂ en la fotosíntesis', 'Una aldohexosa energética', 'Un disacárido'], correct: 1, exp: 'La ribulosa es una cetopentosa que fija el CO₂ en la fotosíntesis.' },
  { s: S4, q: '¿Qué diferencia hay entre ribosa y desoxirribosa?', opts: ['El número de carbonos', 'La desoxirribosa tiene solo H en el C-2', 'La ribosa es una cetosa', 'La desoxirribosa es una hexosa'], correct: 1, exp: 'La ribosa tiene un –OH en el C-2; la desoxirribosa solo un H. La ribosa está en el ARN y la desoxirribosa en el ADN.' },
  { s: S4, q: '¿Qué tipo de monosacárido es la fructosa?', opts: ['Aldopentosa', 'Aldohexosa', 'Cetohexosa', 'Cetotriosa'], correct: 2, exp: 'La fructosa es una cetohexosa: 6 carbonos y grupo cetona.' },
  { s: S4, q: '¿Qué tipo de monosacárido es el gliceraldehído?', opts: ['Aldotriosa', 'Cetotriosa', 'Aldopentosa', 'Cetohexosa'], correct: 0, exp: 'El gliceraldehído es una aldotriosa; la dihidroxiacetona es una cetotriosa.' },
  { s: S4, q: '¿Qué monosacárido forma parte de la lactosa junto a la glucosa?', opts: ['Fructosa', 'Galactosa', 'Ribosa', 'Manosa'], correct: 1, exp: 'La galactosa forma, unida a la glucosa, la lactosa, azúcar de la leche.' },
  { s: S4, q: '¿Cuál es la función de la ribosa y la desoxirribosa?', opts: ['Energética', 'Estructural: forman el ARN y el ADN', 'De reserva', 'Lubricante'], correct: 1, exp: 'Tienen función estructural: forman parte de los ácidos nucleicos de todas las células.' },

  { s: S5, q: '¿Qué proyección representa los monosacáridos cíclicos?', opts: ['Fischer', 'Haworth', 'Lewis', 'Newman'], correct: 1, exp: 'La proyección de Haworth representa el anillo; la de Fischer, la forma lineal e inestable.' },
  { s: S5, q: 'El anillo de un monosacárido se forma entre el carbono carbonílico y…', opts: ['El C-2 siempre', 'El –OH del carbono asimétrico más alejado', 'El grupo CH₂OH', 'Otro monosacárido'], correct: 1, exp: 'El enlace intramolecular une el carbono del aldehído o cetona con el –OH del carbono asimétrico más alejado de él.' },
  { s: S5, q: '¿Qué enlace se forma al ciclar una cetohexosa?', opts: ['Hemiacetal', 'Hemicetal', 'O-glucosídico', 'Peptídico'], correct: 1, exp: 'Cuando interviene una cetona se forma un hemicetal; con un aldehído, un hemiacetal.' },
  { s: S5, q: '¿Qué monosacáridos forman piranosas?', opts: ['Aldohexosas', 'Cetohexosas', 'Aldopentosas', 'Triosas'], correct: 0, exp: 'Las piranosas (anillo de 6) las forman las aldohexosas. Cetohexosas y aldopentosas forman furanosas.' },
  { s: S5, q: '¿Cuántos vértices tiene el anillo de una furanosa?', opts: ['4', '5', '6', '7'], correct: 1, exp: 'La furanosa deriva del furano, anillo de 5 vértices; la piranosa, del pirano, de 6.' },
  { s: S5, q: '¿Cuál es el carbono anomérico de una aldosa?', opts: ['C-1', 'C-2', 'C-5', 'C-6'], correct: 0, exp: 'En las aldosas el carbono anomérico es el C-1; en las cetosas, el C-2.' },
  { s: S5, q: 'En el anómero α, el –OH del carbono anomérico está…', opts: ['En cis respecto al CH₂OH', 'En trans respecto al CH₂OH', 'Siempre arriba', 'Sustituido por H'], correct: 1, exp: 'En el anómero α está en posición trans respecto al CH₂OH; en el β, en cis.' },
  { s: S5, q: 'En la imagen, ¿cuál de las dos moléculas es la β?', opts: ['La de la izquierda', 'La de la derecha', 'Las dos', 'Ninguna'], correct: 1, exp: 'En la β-D-glucopiranosa (derecha) el –OH del C-1 queda hacia arriba, en el mismo lado que el CH₂OH (cis).', img: img('alfa-beta-glucopiranosa-sin-nombre') },
  { s: S5, q: '¿Cuál es el orden correcto del nombre de un monosacárido ciclado?', opts: ['Nombre – ciclo – D/L – α/β', 'α/β – D/L – nombre – ciclo', 'D/L – α/β – ciclo – nombre', 'Ciclo – nombre – α/β – D/L'], correct: 1, exp: 'Anómero, enantiómero, nombre y ciclo: α-D-glucopiranosa.' },
  { s: S5, q: '¿Qué tipo de anillo forma la fructosa?', opts: ['Piranosa, por hemiacetal', 'Furanosa, por hemicetal', 'Piranosa, por hemicetal', 'No cicla'], correct: 1, exp: 'La fructosa (cetohexosa) forma un hemicetal con anillo de furano.' },

  { s: S6, q: '¿Cómo se obtiene un ácido urónico?', opts: ['Reduciendo el carbonilo', 'Oxidando el –OH terminal', 'Sustituyendo un –OH por H', 'Sustituyendo un –OH por NH₂'], correct: 1, exp: 'Los ácidos urónicos se forman por oxidación del grupo –OH terminal.' },
  { s: S6, q: 'La desoxirribosa es un…', opts: ['Aminoazúcar', 'Desoxiazúcar', 'Ácido urónico', 'Polialcohol'], correct: 1, exp: 'Es un desoxiazúcar: se ha sustituido un –OH por un H.' },
  { s: S6, q: '¿Qué derivado se obtiene al sustituir un –OH por un grupo amino?', opts: ['Un polialcohol', 'Un aminoazúcar', 'Un ácido urónico', 'Un desoxiazúcar'], correct: 1, exp: 'Se obtienen los aminoazúcares, como la glucosamina.' },
  { s: S6, q: 'La glicerina es un…', opts: ['Polialcohol', 'Aminoazúcar', 'Ácido urónico', 'Disacárido'], correct: 0, exp: 'La reducción del grupo carbonilo origina polialcoholes como la glicerina.' },

  { s: S7, q: '¿Qué se libera al formarse un enlace O-glucosídico?', opts: ['CO₂', 'Una molécula de H₂O', 'Energía en forma de ATP', 'Un grupo amino'], correct: 1, exp: 'El enlace se forma entre dos –OH con desprendimiento de una molécula de agua.' },
  { s: S7, q: 'Un disacárido con enlace monocarbonílico…', opts: ['No tiene poder reductor', 'Mantiene el poder reductor', 'No es soluble', 'No se puede hidrolizar'], correct: 1, exp: 'En el monocarbonílico solo interviene un carbono anomérico; el otro queda libre y conserva el poder reductor.' },
  { s: S7, q: '¿Qué disacárido NO tiene poder reductor?', opts: ['Maltosa', 'Lactosa', 'Sacarosa', 'Celobiosa'], correct: 2, exp: 'La sacarosa tiene enlace dicarbonílico (1→2): sus dos carbonos anoméricos están ocupados.' },
  { s: S7, q: '¿Qué enzima hidroliza la lactosa?', opts: ['Amilasa', 'Lactasa', 'Celulasa', 'Maltasa'], correct: 1, exp: 'La lactasa rompe la lactosa en galactosa y glucosa.' },
  { s: S7, q: '¿Cuál es el nombre completo de la maltosa?', opts: ['α-D-glucopiranosil (1→4) α-D-glucopiranosa', 'β-D-glucopiranosil (1→4) β-D-glucopiranosa', 'α-D-glucopiranosil (1→2) β-D-fructofuranósido', 'α-D-glucopiranosil (1→6) α-D-glucopiranosa'], correct: 0, exp: 'La maltosa es α-D-glucopiranosil (1→4) α-D-glucopiranosa. Las otras son la celobiosa, la sacarosa y la isomaltosa.' },
  { s: S7, q: '¿Qué enlace tiene la isomaltosa?', opts: ['α(1→4)', 'α(1→6)', 'β(1→4)', 'α(1→2)'], correct: 1, exp: 'La isomaltosa tiene enlace α(1→6), el de las ramificaciones del almidón y el glucógeno.' },
  { s: S7, q: '¿Qué disacárido forma parte de la celulosa?', opts: ['Maltosa', 'Celobiosa', 'Sacarosa', 'Lactosa'], correct: 1, exp: 'La celobiosa, β-D-glucopiranosil (1→4) β-D-glucopiranosa, es la unidad de la celulosa.' },
  { s: S7, q: '¿Qué monosacáridos forman la sacarosa?', opts: ['Dos glucosas', 'Glucosa y galactosa', 'Glucosa y fructosa', 'Fructosa y galactosa'], correct: 2, exp: 'La sacarosa resulta de la unión de α-D-glucopiranosa y β-D-fructofuranosa.' },
  { s: S7, q: 'La terminación «-ósido» en el nombre de un disacárido indica…', opts: ['Que es reductor', 'Que el enlace es dicarbonílico', 'Que es un polisacárido', 'Que tiene enlace β'], correct: 1, exp: 'En los dicarbonílicos el segundo monosacárido termina en -ósido (β-D-fructofuranósido en la sacarosa).' },
  { s: S7, q: '¿Qué distingue a la maltosa de la celobiosa?', opts: ['El número de glucosas', 'El tipo de enlace: α en la maltosa, β en la celobiosa', 'Los carbonos del enlace', 'El poder reductor'], correct: 1, exp: 'Ambas son glucosa (1→4) glucosa: la maltosa con enlace α y la celobiosa con enlace β.' },
  { s: S7, q: '¿Qué disacárido muestra la imagen?', opts: ['Maltosa', 'Lactosa', 'Sacarosa', 'Isomaltosa'], correct: 2, exp: 'Una glucopiranosa (anillo de 6) unida a una fructofuranosa (anillo de 5): es la sacarosa.', img: img('sacarosa-sin-nombre') },
  { s: S7, q: 'Observa la imagen: ¿qué enlace une los dos monosacáridos?', opts: ['α(1→4)', 'α(1→6)', 'β(1→4)', 'α(1→2)'], correct: 1, exp: 'El enlace sale del CH₂ (C-6) de la segunda glucosa: es un α(1→6). Es la isomaltosa.', img: img('isomaltosa-sin-nombre') },
  { s: S7, q: 'El azúcar de la leche es…', opts: ['La sacarosa', 'La lactosa', 'La maltosa', 'La celobiosa'], correct: 1, exp: 'La lactosa, β-D-galactopiranosil (1→4) α-D-glucopiranosa, es el azúcar de la leche.' },

  { s: S8, q: 'Al unirse 100 monosacáridos en un polisacárido, ¿cuántas moléculas de agua se liberan?', opts: ['100', '99', '101', '50'], correct: 1, exp: 'Con n monosacáridos se desprenden n − 1 moléculas de agua: 99.' },
  { s: S8, q: '¿Por qué los polisacáridos no tienen poder reductor?', opts: ['Porque son insolubles', 'Porque todos sus carbonos anoméricos están ocupados', 'Porque tienen enlaces β', 'Porque son muy grandes'], correct: 1, exp: 'Han perdido el poder reductor por estar ocupados todos los carbonos anoméricos.' },
  { s: S8, q: 'Los homopolisacáridos de reserva tienen…', opts: ['Enlaces β y cadenas lineales', 'Enlaces α y cadenas ramificadas', 'Enlaces β y cadenas ramificadas', 'Enlaces peptídicos'], correct: 1, exp: 'Reserva: enlaces α y ramificados (almidón, glucógeno). Estructurales: enlaces β y lineales.' },
  { s: S8, q: '¿Qué enlaces tiene la amilopectina?', opts: ['Solo α(1→4)', 'α(1→4) y α(1→6)', 'β(1→4)', 'α(1→2)'], correct: 1, exp: 'La amilopectina tiene enlaces α(1→4) en la cadena y α(1→6) en las ramificaciones.' },
  { s: S8, q: '¿Cada cuántas glucosas se ramifica la amilopectina?', opts: ['Cada 2', 'Cada 12', 'Cada 100', 'No se ramifica'], correct: 1, exp: 'La amilopectina tiene ramificaciones cada 12 glucosas.' },
  { s: S8, q: '¿Qué componente del almidón no está ramificado?', opts: ['La amilopectina', 'La amilosa', 'El glucógeno', 'La isomaltosa'], correct: 1, exp: 'La amilosa solo tiene enlaces α(1→4): es una sucesión de maltosas, en hélice y sin ramas.' },
  { s: S8, q: '¿Qué enzimas hidrolizan el almidón?', opts: ['Celulasas', 'Amilasas', 'Lactasas', 'Quitinasas'], correct: 1, exp: 'Las amilasas hidrolizan el almidón y dan glucosa, maltosa y fragmentos con ramas.' },
  { s: S8, q: '¿Dónde se almacena el glucógeno?', opts: ['En la pared vegetal', 'En el hígado y los músculos', 'En el exoesqueleto', 'En la sangre'], correct: 1, exp: 'El glucógeno es la reserva de animales (hígado y músculo) y hongos.' },
  { s: S8, q: '¿En qué se diferencia el glucógeno de la amilopectina?', opts: ['Tiene enlaces β', 'Está mucho más ramificado', 'No tiene glucosa', 'Es lineal'], correct: 1, exp: 'Ambos tienen α(1→4) y α(1→6), pero el glucógeno está mucho más ramificado.' },

  { s: S9, q: '¿Qué monosacárido y qué enlace forman la celulosa?', opts: ['α-D-glucosa, α(1→4)', 'β-D-glucosa, β(1→4)', 'Fructosa, β(1→2)', 'N-acetilglucosamina, β(1→4)'], correct: 1, exp: 'La celulosa es un polímero de β-D-glucopiranosa unida por enlaces β(1→4), en unidades de celobiosa.' },
  { s: S9, q: '¿Qué mantiene unidas las cadenas de celulosa entre sí?', opts: ['Enlaces iónicos', 'Puentes de hidrógeno', 'Enlaces disulfuro', 'Enlaces α(1→6)'], correct: 1, exp: 'Las cadenas lineales se unen por puentes de hidrógeno.' },
  { s: S9, q: '¿Cuántas cadenas de celulosa forman una micela?', opts: ['2-3', '20-30', '60-70', 'Más de 1000'], correct: 2, exp: '60-70 cadenas forman una micela; 20-30 micelas, una microfibrilla.' },
  { s: S9, q: '¿Qué enzimas hidrolizan la celulosa?', opts: ['Amilasas', 'Celulasas', 'Lactasas', 'Lipasas'], correct: 1, exp: 'La celulosa la hidrolizan las celulasas.' },
  { s: S9, q: '¿De qué monómero está formada la quitina?', opts: ['β-D-glucosa', 'N-acetil-β-D-glucosamina', 'Ácido glucurónico', 'Galactosa'], correct: 1, exp: 'La quitina es un polímero de N-acetil-β-D-glucosamina β(1→4), en unidades de quitobiosa.' },
  { s: S9, q: '¿Dónde se encuentra la quitina?', opts: ['En la pared vegetal', 'En el exoesqueleto de artrópodos y la pared de los hongos', 'En el hígado', 'En la pared bacteriana'], correct: 1, exp: 'La quitina forma el exoesqueleto de los artrópodos y la pared de los hongos.' },

  { s: S10, q: '¿Qué es un heteropolisacárido?', opts: ['Un polisacárido con un solo tipo de monosacárido', 'Un polisacárido con más de un tipo de monosacárido', 'Un glúcido unido a una proteína', 'Un disacárido'], correct: 1, exp: 'Los heteropolisacáridos están constituidos por más de un tipo de monosacárido.' },
  { s: S10, q: '¿De qué organismos se obtiene el agar-agar?', opts: ['Hongos', 'Algas rojas', 'Bacterias', 'Artrópodos'], correct: 1, exp: 'El agar-agar forma parte de la pared de ciertas algas rojas.' },
  { s: S10, q: '¿Para qué se usa el agar en microbiología?', opts: ['Como antibiótico', 'Como medio de cultivo', 'Como colorante', 'Como desinfectante'], correct: 1, exp: 'Se usa como medio de cultivo, además de laxante y espesante.' },
  { s: S10, q: '¿Qué mucopolisacárido es anticoagulante?', opts: ['Ácido hialurónico', 'Condroitina', 'Heparina', 'Pectina'], correct: 2, exp: 'La heparina, presente en hígado, pulmones y paredes arteriales, es anticoagulante.' },
  { s: S10, q: '¿De qué está formado el ácido hialurónico?', opts: ['Glucosa y fructosa', 'N-acetil-glucosamina y ácido glucurónico', 'Galactosa y glucosa', 'Solo glucosa'], correct: 1, exp: 'Es un polímero de N-acetil-glucosamina y ácido glucurónico.' },
  { s: S10, q: '¿Dónde se encuentra la condroitina?', opts: ['En huesos y cartílagos', 'En la pared vegetal', 'En la sangre', 'En la membrana bacteriana'], correct: 0, exp: 'La condroitina está en huesos y cartílagos.' },
  { s: S10, q: '¿Qué es el aglucón?', opts: ['Un tipo de monosacárido', 'La parte no glucídica de un heterósido', 'Una enzima', 'Un polisacárido de reserva'], correct: 1, exp: 'Los heterósidos son glúcidos unidos a otra molécula, el aglucón.' },
  { s: S10, q: 'En los glucolípidos, el aglucón es…', opts: ['Una proteína', 'Una ceramida (lípido)', 'Un ácido nucleico', 'Un ion'], correct: 1, exp: 'En los glucolípidos el aglucón es un lípido, la ceramida.' },
  { s: S10, q: '¿Dónde están los peptidoglicanos?', opts: ['En la pared vegetal', 'En la pared bacteriana', 'En el exoesqueleto', 'En el cartílago'], correct: 1, exp: 'Los peptidoglicanos forman la pared bacteriana.' },
  { s: S10, q: '¿Qué heterósidos son responsables de los grupos sanguíneos A, B y 0?', opts: ['Glucolípidos', 'Glucoproteidos', 'Peptidoglicanos', 'Mucopolisacáridos'], correct: 1, exp: 'Los antígenos de los grupos sanguíneos A, B, 0 son glucoproteidos.' },

  { s: S11, q: '¿Qué detecta la prueba de Fehling?', opts: ['Almidón', 'Glúcidos con poder reductor', 'Proteínas', 'Lípidos'], correct: 1, exp: 'Fehling detecta glúcidos con poder reductor; el lugol, almidón.' },
  { s: S11, q: '¿Qué color indica un Fehling positivo?', opts: ['Azul', 'Violeta', 'Rojo ladrillo', 'Verde'], correct: 2, exp: 'Positivo: rojo ladrillo con precipitado (Cu₂O). Negativo: sigue azul.' },
  { s: S11, q: 'En la imagen, ¿por qué el tercer tubo (sacarosa) se queda azul?', opts: ['Porque no tiene glucosa', 'Porque su enlace dicarbonílico le quita el poder reductor', 'Porque no se ha calentado', 'Porque es un polisacárido'], correct: 1, exp: 'La sacarosa no tiene poder reductor: su enlace (1→2) ocupa los dos carbonos anoméricos. Glucosa y fructosa sí reducen el cobre.', img: img('fehling-tubos') },
  { s: S11, q: '¿Qué sustancia contiene el reactivo Fehling A?', opts: ['Yodo', 'Sulfato de cobre', 'Hidróxido de sodio', 'Tartrato'], correct: 1, exp: 'Fehling A es sulfato de cobre (CuSO₄); Fehling B, tartrato de sodio y potasio con NaOH.' },
  { s: S11, q: '¿Qué color toma el almidón con el lugol?', opts: ['Rojo ladrillo', 'Violeta', 'Amarillo', 'Verde'], correct: 1, exp: 'El almidón en contacto con el lugol toma color violeta.' },
  { s: S11, q: '¿Qué le ocurre al almidón teñido con lugol si se calienta?', opts: ['Se vuelve rojo', 'Se decolora, y al enfriar recupera el color', 'Precipita', 'No cambia'], correct: 1, exp: 'Al calentar se decolora; al enfriar vuelve el violeta.' },
]

export const unidad: Unidad = {
  id: 'bio-u2',
  unidad: 'Unidad 2',
  title: 'Los glúcidos',
  shortTitle: 'Los glúcidos',
  description:
    'Monosacáridos, isomería, formas cíclicas, enlace O-glucosídico, disacáridos, polisacáridos de reserva y estructurales, y cómo se identifican.',
  footer: 'Monosacáridos · Disacáridos · Polisacáridos',
  mapaRoot: 'Los glúcidos',
  accent: 'ochre',
  mapa,
  fichas,
  quiz,
  Historia,
}
