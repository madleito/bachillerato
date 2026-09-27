import type { ReactNode } from 'react'
import type { Ficha, Pregunta, RamaMapa, Texto, Unidad } from '../../types'
import { AI, Divider, K } from '../../components/ui'
import { Imagen } from '../../components/Imagen'

// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'contexto', label: 'Contexto y sentido', color: 'ochre',
    children: [
      { id: 'x1', label: 'Vida', detail: 'Atenas, 427-347 a. C. Familia aristocrática, parecía destinado a la política. Hacia 387 a. C. funda la Academia.' },
      { id: 'x2', label: 'Crisis de la polis', detail: 'Guerra del Peloponeso, derrota ante Esparta, Treinta Tiranos y restauración democrática. Ningún régimen le satisface.' },
      { id: 'x3', label: 'La muerte de Sócrates (399 a. C.)', detail: 'El hecho decisivo: si una ciudad legal puede ejecutar al más justo, hay que preguntarse qué saber debe orientar la política.' },
      { id: 'x4', label: 'Dirección ético-política', detail: 'Su filosofía busca responder a la crisis de la polis aclarando qué es la justicia, cómo se conoce y cómo educar a quien gobierne.' },
      { id: 'x5', label: 'Frente a los sofistas', detail: 'Para los sofistas las normas son convención e interés; para Platón el bien y la justicia tienen validez objetiva que la razón descubre.' },
      { id: 'x6', label: 'Influencias', children: [
        { id: 'x6a', label: 'Sócrates', detail: 'Definiciones universales, el diálogo como método e intelectualismo moral.' },
        { id: 'x6b', label: 'Heráclito', detail: 'El mundo sensible como ámbito del cambio.' },
        { id: 'x6c', label: 'Parménides', detail: 'El verdadero ser debe ser estable e inteligible.' },
        { id: 'x6d', label: 'Pitagorismo', detail: 'Matemáticas, armonía y el alma como realidad distinta del cuerpo.' },
      ]},
      { id: 'x7', label: 'Obra: diálogos', detail: 'Juventud (muy socrática); madurez (Fedón, Banquete, Fedro, República); vejez (Parménides, Sofista, Político, Timeo, Leyes).' },
    ],
  },
  {
    id: 'realidad', label: 'La realidad (ontología)', color: 'petrol',
    children: [
      { id: 'r1', label: 'Las Ideas o Formas (eidos)', detail: 'Realidades objetivas, inmateriales, universales, eternas e inmutables. Hacen que cada cosa sea lo que es. No son pensamientos subjetivos.' },
      { id: 'r2', label: 'Dualismo ontológico', children: [
        { id: 'r2a', label: 'Mundo sensible', detail: 'Cosas particulares; material, visible, cambiante, múltiple, temporal y corruptible. Realidad dependiente e imperfecta. Objeto de doxa.' },
        { id: 'r2b', label: 'Mundo inteligible', detail: 'Ideas universales; inmaterial, eterno, estable, necesario e inmutable. Realidad plena y fundamento. Objeto de episteme.' },
      ]},
      { id: 'r3', label: 'Participación e imitación', detail: 'Una cosa es bella porque participa de la Belleza; las cosas imitan a las Ideas, que funcionan como modelos o paradigmas, sin igualarlas nunca.' },
      { id: 'r4', label: 'La Idea de Bien', detail: 'Cima del sistema jerárquico de las Ideas. Como el Sol, hace inteligible y valiosa toda realidad (símil del Sol, República).' },
      { id: 'r5', label: 'El demiurgo (Timeo)', detail: 'Artesano racional y bueno que ordena una materia caótica preexistente (la chora) tomando las Ideas como modelo. No crea de la nada.' },
      { id: 'r6', label: 'Autocrítica', detail: 'En el «Parménides» examina las dificultades de la separación entre Ideas y cosas: la teoría no es una doctrina cerrada.' },
    ],
  },
  {
    id: 'conocimiento', label: 'El conocimiento (epistemología)', color: 'turquoise',
    children: [
      { id: 'c1', label: 'Doxa y episteme', detail: 'Del mundo sensible solo hay opinión (doxa): puede acertar pero carece de justificación. De las Ideas hay ciencia (episteme): verdadera, estable y fundada en razones.' },
      { id: 'c2', label: 'Crítica a la retórica', detail: 'El orador sofista persuade sin saber. La filosofía transforma la opinión en conocimiento mediante examen racional: diálogo y dialéctica.' },
      { id: 'c3', label: 'Símil de la línea', children: [
        { id: 'c3a', label: 'Eikasía (imaginación)', detail: 'Doxa. Sombras, reflejos e imágenes. Toma la copia por la realidad.' },
        { id: 'c3b', label: 'Pístis (creencia)', detail: 'Doxa. Seres vivos, objetos naturales y artefactos. Confianza en los sentidos.' },
        { id: 'c3c', label: 'Diánoia (pensamiento discursivo)', detail: 'Episteme. Entidades matemáticas. Parte de hipótesis y razona con figuras.' },
        { id: 'c3d', label: 'Nóesis (inteligencia)', detail: 'Episteme. Las Ideas y, finalmente, el Bien. Dialéctica: revisa las hipótesis y asciende a los principios.' },
      ]},
      { id: 'c4', label: 'Reminiscencia (anámnesis)', detail: 'Aprender es recordar. Lo sensible despierta el recuerdo de Ideas que el alma contempló antes de nacer. Fedón (lo Igual en sí) y Menón (el esclavo y la geometría).' },
      { id: 'c5', label: 'Alegoría de la caverna', detail: 'República VII. Sentido ontológico, epistemológico, educativo, ético y político. El filósofo que ve el Sol (el Bien) debe regresar.' },
    ],
  },
  {
    id: 'humano', label: 'El ser humano (antropología)', color: 'terracotta',
    children: [
      { id: 'h1', label: 'Dualismo alma-cuerpo', detail: 'Cuerpo: sensible, material, mortal. Alma: invisible, racional, afín a las Ideas. Unión accidental y transitoria.' },
      { id: 'h2', label: 'Inmortalidad del alma', detail: 'Influencia órfico-pitagórica: el alma preexiste y sobrevive a la muerte. Se vincula con la reminiscencia.' },
      { id: 'h3', label: 'Purificación', detail: 'Filosofar es liberar la razón del dominio de los apetitos. «El cuerpo, cárcel del alma» no significa que lo corporal sea malo: se educa con gimnasia.' },
      { id: 'h4', label: 'Las tres partes del alma', children: [
        { id: 'h4a', label: 'Racional', detail: 'Conocer y dirigir. Virtud: prudencia o sabiduría. En el carro: el auriga.' },
        { id: 'h4b', label: 'Irascible', detail: 'Coraje, honor y energía. Virtud: fortaleza o valor. En el carro: el caballo noble.' },
        { id: 'h4c', label: 'Concupiscible', detail: 'Deseos y placeres materiales. Virtud: templanza. En el carro: el caballo indisciplinado.' },
      ]},
      { id: 'h5', label: 'El carro alado (Fedro)', detail: 'La razón (auriga) no elimina los caballos: los coordina. Si pierde el control, el carro cae; si gobierna, el alma se eleva.' },
    ],
  },
  {
    id: 'etica', label: 'La ética', color: 'verde',
    children: [
      { id: 'e1', label: 'Intelectualismo moral', detail: 'Nadie obra mal a sabiendas: se confunde un bien aparente con el verdadero. La virtud depende del conocimiento.' },
      { id: 'e2', label: 'Conocer transforma', detail: 'Conocer el Bien no es memorizar definiciones: exige transformar a toda la persona, como la salida de la caverna.' },
      { id: 'e3', label: 'Virtudes', detail: 'Prudencia (razón), fortaleza (ánimo), templanza (acuerdo de las partes). La justicia es la armonía total: cada parte cumple su función.' },
      { id: 'e4', label: 'Felicidad', detail: 'No es satisfacer todos los deseos, sino vivir conforme a la naturaleza racional, con una unidad ordenada de la personalidad.' },
    ],
  },
  {
    id: 'politica', label: 'La política', color: 'volcanic',
    children: [
      { id: 'p1', label: 'Ética y política inseparables', detail: 'El individuo solo vive bien en una comunidad que lo eduque; ninguna ciudad es justa sin ciudadanos ordenados por dentro.' },
      { id: 'p2', label: 'Origen de la polis', detail: 'Nadie es autosuficiente. Principio de especialización funcional: cada uno, la tarea para la que está mejor capacitado.' },
      { id: 'p3', label: 'Las tres clases', children: [
        { id: 'p3a', label: 'Gobernantes filósofos', detail: 'Alma racional. Dirigen según el bien común. Prudencia. Sin propiedad ni familia privadas.' },
        { id: 'p3b', label: 'Guardianes auxiliares', detail: 'Alma irascible. Defienden la ciudad. Fortaleza. Sin propiedad ni familia privadas.' },
        { id: 'p3c', label: 'Productores', detail: 'Alma concupiscible. Actividad económica. Templanza. Conservan propiedad y familia.' },
      ]},
      { id: 'p4', label: 'Igualdad de hombres y mujeres', detail: 'Misma educación y mismas funciones si tienen las capacidades. Excepcional en su época, dentro de un sistema jerarquizado.' },
      { id: 'p5', label: 'Gobierno de los filósofos', detail: 'Gobernar es una técnica que requiere saber. El filósofo conoce el Bien y acepta el poder como servicio. Crítica a la oligarquía y a la democracia.' },
      { id: 'p6', label: 'Degeneración de los regímenes', detail: 'Aristocracia → timocracia (honor) → oligarquía (riqueza) → democracia (libertad sin límites) → tiranía.' },
      { id: 'p7', label: 'Las «Leyes»', detail: 'En la vejez, ante la dificultad de encontrar gobernantes sabios, da más peso al gobierno de las leyes.' },
    ],
  },
]

// ─── Componentes de maquetación de La Historia ───
const LI = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3">
    <span className="text-volcanic mt-1 shrink-0">▸</span>
    <span>{children}</span>
  </li>
)
const P = ({ children }: { children: ReactNode }) => (
  <p className="font-body text-lg leading-relaxed mb-4">{children}</p>
)
const H3 = ({ n, titulo, sub }: { n: number; titulo: string; sub: string }) => (
  <h3 className="font-display text-2xl md:text-3xl font-semibold text-terracotta-dark mb-6 leading-snug">
    {n}. {titulo}
    <br className="hidden md:block" />
    <span className="text-tierra-slate text-xl md:text-2xl font-normal"> {sub}</span>
  </h3>
)
const H4 = ({ children }: { children: ReactNode }) => (
  <h4 className="font-display text-xl font-semibold text-petrol mt-10 mb-3">{children}</h4>
)
const Cita = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-4 border-terracotta pl-5 py-2 my-8">
    <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">{children}</p>
  </blockquote>
)

/** Tabla con cabecera y filas, envuelta para desplazarse en horizontal en el móvil. */
function Tabla({ cabecera, filas, minimo = '32rem' }: { cabecera: string[]; filas: ReactNode[][]; minimo?: string }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse font-body text-sm md:text-base" style={{ minWidth: minimo }}>
        <thead>
          <tr className="bg-tierra-cream">
            {cabecera.map(c => (
              <th key={c} className="border border-tierra-sand px-3 py-2.5 text-left font-display font-semibold text-tierra-charcoal">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-tierra-cream/40' : ''}>
              {fila.map((celda, j) => (
                <td key={j} className={`border border-tierra-sand px-3 py-2.5 align-top ${j === 0 ? 'font-semibold' : ''}`}>
                  {celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── La Historia ───
function Historia() {
  return (
    <article className="page-enter max-w-2xl mx-auto">
      <header className="mb-12 md:mb-16">
        <p className="font-body text-sm uppercase tracking-widest text-terracotta mb-3">Platón · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          Salir de la caverna
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          La filosofía de Platón es un conjunto en el que cada parte remite a las demás. Su idea de la
          realidad explica qué puede conocerse; su teoría del conocimiento decide quién está preparado para
          gobernar; y su reflexión sobre el alma sirve tanto para entender la virtud de cada persona como la
          justicia de la ciudad. Se estudia por partes, pero sin perder de vista lo que las une.
        </p>
      </header>

      {/* 1 · Contexto */}
      <section>
        <H3 n={1} titulo="Por qué filosofa Platón" sub="contexto y sentido de su obra" />
        <P>
          Platón nació en Atenas en <K>427 a. C.</K> y murió en <K>347 a. C.</K> Venía de una familia
          aristocrática y parecía destinado a la política, pero lo que vivió convirtió esa vocación en una
          reflexión filosófica sobre la <K>justicia</K>. Atenas atravesó la Guerra del Peloponeso, la
          derrota ante Esparta, el gobierno oligárquico de los <K>Treinta Tiranos</K> y la restauración de
          la democracia. Ninguno de esos regímenes le ofreció un modelo de ciudad satisfactorio.
        </P>
        <P>
          El hecho decisivo fue la <K>condena a muerte de Sócrates en 399 a. C.</K> Si una ciudad
          legalmente constituida podía ejecutar al hombre que Platón consideraba más justo, había que
          preguntarse qué clase de saber debía orientar la política.
        </P>
        <Cita>
          Platón no construye primero una metafísica y después le añade una política. Busca una respuesta a
          la crisis de la polis, y solo puede encontrarla aclarando qué es la justicia, qué significa
          conocerla y cómo educar a quien vaya a gobernar.
        </Cita>
        <P>
          Por eso su obra tiene una clara <K>dirección ético-política</K>. Y por eso se enfrenta a los{' '}
          <K>sofistas</K>, para quienes las normas dependen de convenciones, intereses y opiniones. Platón
          sostiene lo contrario: el bien y la justicia tienen una <K>validez objetiva</K> que la razón puede
          descubrir.
        </P>

        <H4>De quién aprende</H4>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Sócrates</K>: la búsqueda de definiciones universales, el diálogo como método y el intelectualismo moral.</LI>
          <LI><K>Heráclito</K>: el mundo sensible como ámbito del cambio.</LI>
          <LI><K>Parménides</K>: la exigencia de que el verdadero ser sea estable e inteligible.</LI>
          <LI><K>El pitagorismo</K>: la importancia de las matemáticas, la armonía y el alma como realidad distinta del cuerpo.</LI>
        </ul>
        <P>
          Platón intenta reunir estas herencias: acepta con Heráclito que las cosas sensibles cambian, pero
          sostiene con Parménides que el conocimiento es posible porque existen realidades permanentes: las{' '}
          <K>Ideas o Formas</K>.
        </P>

        <H4>Cómo escribe</H4>
        <P>
          Escribió en forma de <K>diálogo</K>, no como un tratado que expone un sistema cerrado. Sócrates
          protagoniza muchas obras y conduce la conversación con preguntas, refutaciones y nuevos intentos.
          Suelen distinguirse tres etapas:
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Juventud</K>: diálogos todavía muy socráticos.</LI>
          <LI><K>Madurez</K>: «Fedón», «Banquete», «Fedro» y «República».</LI>
          <LI><K>Vejez</K>: «Parménides», «Sofista», «Político», «Timeo» y «Leyes», donde revisa y matiza formulaciones anteriores.</LI>
        </ul>
        <P>Hacia <K>387 a. C.</K> fundó la <K>Academia</K>, dedicada a la investigación y la educación filosófica, matemática y política.</P>
      </section>

      <Divider />

      {/* 2 · Realidad */}
      <section>
        <H3 n={2} titulo="Dos mundos" sub="la realidad y la teoría de las Ideas" />
        <P>
          La experiencia nos muestra muchas cosas particulares que nacen, cambian y desaparecen: caballos
          distintos, acciones más o menos justas, círculos dibujados con más o menos precisión. Un círculo
          trazado a mano siempre tiene pequeñas irregularidades. Y sin embargo podemos juzgarlo imperfecto,
          porque lo comparamos con <K>la forma exacta del círculo</K>, que ningún dibujo realiza del todo.
        </P>
        <P>
          Platón llama <K>Idea o Forma</K> (<em>eidos</em>) a esa realidad universal que hace que cada cosa sea
          lo que es. Atención al término: <span className="font-bold text-terracotta-dark">«idea» no
          significa aquí un pensamiento ni una imagen mental</span>. Las Ideas son realidades{' '}
          <K>objetivas, inmateriales, universales, eternas e inmutables</K>. La Idea de justicia no cambia
          cuando cambian las opiniones sobre lo justo. Las cosas existen en un lugar y un tiempo; las Ideas,
          no. Por eso Platón les atribuye el <K>ser en sentido pleno</K>.
        </P>

        <Tabla
          cabecera={['Mundo sensible', 'Mundo inteligible']}
          minimo="26rem"
          filas={[
            ['Cosas particulares y fenómenos físicos', 'Ideas o Formas universales'],
            ['Material, visible, accesible a los sentidos', 'Inmaterial, inteligible, accesible a la razón'],
            ['Cambiante, múltiple, temporal y corruptible', 'Eterno, estable, necesario e inmutable'],
            ['Realidad dependiente e imperfecta', 'Realidad plena y fundamento'],
            ['Objeto de opinión o doxa', 'Objeto de ciencia o episteme'],
          ]}
        />

        <H4>Participación e imitación</H4>
        <P>
          ¿Cómo se relacionan los dos mundos? Con dos nociones. Por <K>participación</K>: una cosa es bella
          porque participa de la Belleza, y una acción es justa en la medida en que realiza, de forma
          limitada, la Justicia. Por <K>imitación</K>: las Ideas son <K>modelos o paradigmas</K> que las cosas
          intentan reproducir sin igualarlos nunca del todo.
        </P>
        <P>
          Y un matiz importante: la separación de las Ideas no es una distancia física, como si estuvieran
          en otro lugar. Significa que su ser y su verdad <K>no dependen</K> de que existan cosas sensibles
          que las realicen.
        </P>

        <H4>La Idea de Bien</H4>
        <P>
          Las Ideas no son un montón desordenado: forman un <K>sistema jerárquico</K> en cuya cima está la{' '}
          <K>Idea de Bien</K>. El Bien no es una cosa buena más, sino el principio que hace inteligible y
          valiosa toda la realidad. En la «República» Platón lo compara con el <K>Sol</K>: igual que el Sol
          hace visibles las cosas y favorece la vida, el Bien hace que las Ideas puedan conocerse y da orden
          y sentido a lo real.
        </P>
        <P>
          Esta comparación une saber y conducta: conocer de verdad algo exige entender qué lugar ocupa dentro
          del orden orientado por el Bien.
        </P>
        <P>
          Platón es consciente de las dificultades. En el «<K>Parménides</K>» examina problemas de la
          separación entre Ideas y cosas y de cómo participan unas de otras. La teoría de las Ideas no es una
          doctrina cerrada: es el núcleo de una investigación.
        </P>

        <H4>El demiurgo</H4>
        <P>
          En el «<K>Timeo</K>» Platón ofrece una explicación mítica del origen del cosmos. Rechaza que el
          orden pueda salir solo del azar. Si el universo es inteligible, en su origen tiene que haber una
          acción ordenadora: el <K>demiurgo</K>, un artesano racional y bueno que organiza una{' '}
          <K>materia preexistente y caótica — la <em>chora</em> —</K> tomando las Ideas como modelo.
        </P>
        <P>
          Importante: el demiurgo <span className="font-bold text-terracotta-dark">no crea de la nada</span>,
          ordena lo que ya existe. El resultado es el <K>cosmos</K>, palabra que significa a la vez mundo y
          orden. Es bello porque reproduce un modelo inteligible, pero no perfecto, por la resistencia de la
          materia.
        </P>
        <AI>
          <p>
            Para la EvAU conviene tener clara la diferencia con el Dios cristiano, que aparece en Agustín y
            Tomás de Aquino: el Dios cristiano <strong>crea de la nada</strong> (<em>ex nihilo</em>); el
            demiurgo platónico <strong>ordena una materia que ya estaba ahí</strong>. Es un artesano, no un
            creador.
          </p>
        </AI>
      </section>

      <Divider />

      {/* 3 · Conocimiento */}
      <section>
        <H3 n={3} titulo="De la opinión a la ciencia" sub="el conocimiento" />
        <P>
          A los dos mundos les corresponden dos formas de conocer. Del mundo sensible, cambiante e
          imperfecto, solo puede haber <K>opinión o doxa</K>. De las Ideas, estables y universales, puede
          haber <K>ciencia o episteme</K>.
        </P>
        <P>
          Una opinión puede ser verdadera o falsa, cambia con facilidad y no suele tener una justificación
          suficiente. El saber es verdadero, estable y está <K>fundado en razones</K>. No basta con acertar:{' '}
          <span className="font-bold text-terracotta-dark">conocer es poder explicar por qué algo es como es</span>.
        </P>
        <P>
          De aquí sale la crítica a la <K>retórica sofística</K>. Un orador hábil puede conseguir que la
          asamblea apruebe una guerra sin saber si beneficia a la ciudad: su discurso persuade, pero eso no
          demuestra que sepa. La filosofía no busca convencer, sino transformar la opinión en conocimiento
          mediante el examen racional. Por eso el <K>diálogo</K> y la <K>dialéctica</K> son esenciales:
          obligan a justificar, descubren contradicciones y avanzan de los casos particulares a los principios
          universales.
        </P>

        <H4>El símil de la línea</H4>
        <P>
          En el <K>libro VI de la «República»</K>, Platón representa los grados de realidad y de conocimiento
          con una línea dividida en dos segmentos — mundo visible y doxa, mundo inteligible y episteme —, y
          cada uno dividido otra vez. Salen <K>cuatro niveles</K>, de la mayor oscuridad a la máxima claridad.
          No son conocimientos aislados, sino <K>etapas de una misma subida</K>.
        </P>
        <Imagen
          src="filo-platon/simil-linea.webp"
          alt="Símil de la línea: imaginación, creencia, pensamiento discursivo e inteligencia"
          pie="El símil de la línea relaciona los grados del conocimiento con los niveles de realidad."
        />
        <Tabla
          cabecera={['Grado', 'Ámbito', 'Objeto', 'Alcance']}
          filas={[
            [<>Eikasía<br /><span className="font-normal text-tierra-slate">imaginación</span></>, 'Doxa', 'Sombras, reflejos e imágenes', 'Lo más inseguro: toma la copia por la realidad'],
            [<>Pístis<br /><span className="font-normal text-tierra-slate">creencia</span></>, 'Doxa', 'Seres vivos, objetos naturales y artefactos', 'Confía en la experiencia sensible'],
            [<>Diánoia<br /><span className="font-normal text-tierra-slate">pensamiento discursivo</span></>, 'Episteme', 'Entidades matemáticas', 'Parte de hipótesis y razona con figuras'],
            [<>Nóesis<br /><span className="font-normal text-tierra-slate">inteligencia</span></>, 'Episteme', 'Las Ideas y, finalmente, el Bien', 'Dialéctica: comprende principios y relaciones'],
          ]}
        />
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI>La <K>eikasía</K> se dirige a imágenes: una pintura, tu cara en un espejo, el reflejo de un árbol en el río. Es el nivel de quien confunde la representación con lo representado.</LI>
          <LI>La <K>pístis</K> ya mira los objetos físicos y no sus copias, pero sigue dependiendo de los sentidos. Estas dos son <K>opinión</K>.</LI>
          <LI>La <K>diánoia</K>, propia de las matemáticas, trabaja con objetos inteligibles y demuestra, pero parte de hipótesis que no examina y se apoya en figuras sensibles.</LI>
          <LI>La <K>nóesis</K> es el conocimiento filosófico: la dialéctica revisa las hipótesis, asciende a principios cada vez más universales y culmina en la <K>Idea de Bien</K>.</LI>
        </ul>
        <P>
          Subir no es despreciar lo anterior: la experiencia pone en marcha la investigación y las matemáticas
          educan la mente para lo abstracto. Pero la filosofía no se detiene ni en las apariencias ni en los
          supuestos matemáticos.
        </P>

        <H4>La reminiscencia</H4>
        <P>
          ¿Cómo llega el alma a las Ideas si solo tiene delante cosas sensibles? Con la doctrina de la{' '}
          <K>anámnesis o reminiscencia</K>. Si aprender fuera buscar algo totalmente desconocido, no sabríamos
          qué buscar ni lo reconoceríamos al encontrarlo. Platón responde que <K>aprender es, en cierto
          sentido, recordar</K>. Lo sensible despierta el reconocimiento de modelos universales que no vienen
          de los sentidos.
        </P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI>En el «<K>Fedón</K>», ver cosas aproximadamente iguales nos lleva a pensar en <K>lo Igual en sí</K>. Como ningún objeto es perfectamente igual a otro, los objetos no pueden ser el origen de nuestra noción de igualdad perfecta.</LI>
          <LI>En el «<K>Menón</K>», Sócrates guía con preguntas a un <K>esclavo sin formación</K> hasta que reconstruye una demostración geométrica. Enseñar no es meter contenidos en una mente vacía: es ayudar a que la razón descubra por sí misma.</LI>
        </ul>
        <P>
          La explicación mítica añade que el alma contempló las Ideas antes de unirse al cuerpo y las olvidó
          al nacer; la educación reactiva ese saber. Dicho sin mito: la razón aporta principios universales
          con los que reconoce y organiza lo que percibe.
        </P>

        <H4>La alegoría de la caverna</H4>
        <P>
          El comienzo del <K>libro VII de la «República»</K> reúne todo en un relato. Unos prisioneros viven
          encadenados desde niños al fondo de una caverna, mirando a una pared. A su espalda arde un fuego, y
          entre el fuego y ellos pasan personas llevando objetos cuyas sombras se proyectan en la pared. Como
          no conocen otra cosa, <K>toman las sombras por la realidad</K>.
        </P>
        <P>
          Si liberan a uno y lo obligan a volverse, la luz le hace daño y lo confunde. La subida hacia fuera es
          difícil, pero sus ojos se acostumbran poco a poco: primero ve sombras y reflejos, luego los objetos,
          después los astros y, al final, <K>el Sol</K>.
        </P>
        <Imagen
          src="filo-platon/alegoria-caverna.webp"
          alt="Ilustración de la alegoría de la caverna, con los prisioneros, el fuego y la salida al exterior"
          pie="La salida de la caverna representa el proceso de educación y acceso a la verdad."
        />
        <Tabla
          cabecera={['Elemento del relato', 'Significado filosófico']}
          minimo="26rem"
          filas={[
            ['Prisioneros encadenados', 'La condición inicial de quienes viven entre opiniones recibidas'],
            ['Sombras de la pared', 'Imágenes y apariencias tomadas por la realidad'],
            ['Objetos y fuego del interior', 'Cosas sensibles y saber limitado al mundo visible'],
            ['Liberación y ascenso', 'Educación dialéctica: dolorosa transformación de la mirada'],
            ['Exterior y objetos verdaderos', 'Mundo inteligible y conocimiento de las Ideas'],
            ['Sol', 'Idea de Bien: fuente de inteligibilidad y orientación'],
            ['Regreso a la caverna', 'Responsabilidad política del filósofo educado'],
          ]}
        />
        <P>La caverna tiene cinco sentidos a la vez, y conviene saber enumerarlos:</P>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Ontológico</K>: distingue grados de realidad.</LI>
          <LI><K>Epistemológico</K>: representa el paso de la opinión al saber.</LI>
          <LI><K>Educativo</K>: la liberación exige guía, esfuerzo y habituación.</LI>
          <LI><K>Ético</K>: conocer cambia la forma de vivir.</LI>
          <LI><K>Político</K>: quien ha contemplado el Bien debe regresar.</LI>
        </ul>
        <P>
          Al volver, el filósofo ve peor en la oscuridad y resulta ridículo; incluso pueden atacarlo quienes
          prefieren sus certezas — una clara alusión a la <K>muerte de Sócrates</K>. Pero el regreso es
          decisivo: la filosofía <span className="font-bold text-terracotta-dark">no autoriza a retirarse a
          contemplar en privado</span>. Los mejores deben gobernar aunque no lo deseen, porque comprenden el
          bien común. El saber termina en una <K>obligación política</K>.
        </P>
      </section>

      <Divider />

      {/* 4 · Ser humano */}
      <section>
        <H3 n={4} titulo="Un alma con dos caballos" sub="el ser humano" />
        <P>
          El dualismo de la realidad se repite en el ser humano. El <K>cuerpo</K> pertenece al mundo sensible:
          material, visible, cambiante y mortal. El <K>alma</K> es invisible, racional y afín al mundo
          inteligible. En el «Fedón», Platón dice que el alma puede conocer las Ideas precisamente porque
          comparte con ellas la inmaterialidad y la estabilidad. El cuerpo da sensaciones, pero también
          necesidades, placeres y temores que pueden perturbar la investigación.
        </P>
        <P>
          La unión de alma y cuerpo es <K>accidental y transitoria</K>. Por influencia{' '}
          <K>órfico-pitagórica</K>, Platón sostiene que el alma <K>preexiste</K> al nacimiento y{' '}
          <K>sobrevive</K> a la muerte. La inmortalidad se une así a la reminiscencia: si conocer es recordar,
          el alma tuvo que contemplar las Ideas antes de su vida corporal.
        </P>
        <P>
          De ahí la <K>purificación</K>: filosofar es liberar poco a poco la razón del dominio de los apetitos.
          La expresión «el cuerpo es una cárcel del alma»{' '}
          <span className="font-bold text-terracotta-dark">no significa que lo corporal sea malo</span> — la
          educación platónica incluye gimnasia. Lo que hay que evitar es que los deseos gobiernen a la persona.
        </P>

        <H4>Las tres partes del alma</H4>
        <P>
          La oposición alma-cuerpo no basta para explicar los conflictos interiores. Alguien hambriento desea
          comer algo que sabe que le hace daño: el apetito empuja, la razón frena. Otras veces uno se indigna
          ante una injusticia y pone esa energía al servicio de lo que la razón ve correcto. En la «República»
          y el «Fedro», Platón distingue tres dimensiones del alma: <K>racional</K>, <K>irascible</K> y{' '}
          <K>concupiscible</K>. No son piezas separadas, sino <K>tendencias</K> que cooperan o se enfrentan.
        </P>
        <Imagen
          src="filo-platon/carro-alado.webp"
          alt="El mito del carro alado: auriga con un caballo obediente y otro desobediente"
          pie="En el mito del carro alado, la razón debe conducir y armonizar las fuerzas del alma."
        />
        <P>
          En el mito del <K>carro alado</K>, el alma es un carro conducido por un <K>auriga</K>, la razón. Un{' '}
          <K>caballo noble</K> y obediente es la parte irascible: coraje, energía, deseo de reconocimiento. El
          otro, <K>indisciplinado</K>, es la parte concupiscible: placeres y bienes materiales. El auriga{' '}
          <span className="font-bold text-terracotta-dark">no tiene que eliminar a los caballos, sino
          coordinarlos</span>. Si pierde el control, el carro cae; si gobierna con ayuda del caballo noble, el
          alma se eleva.
        </P>
        <Tabla
          cabecera={['Parte del alma', 'Tendencia', 'Virtud', 'En el «Fedro»']}
          filas={[
            ['Racional', 'Conocer y dirigir', 'Prudencia o sabiduría', 'Auriga'],
            ['Irascible', 'Coraje, honor y energía', 'Fortaleza o valor', 'Caballo noble'],
            ['Concupiscible', 'Deseos y placeres materiales', 'Templanza (bajo la razón)', 'Caballo indisciplinado'],
          ]}
        />
        <P>
          La excelencia no consiste en suprimir dos partes y quedarse con la razón, sino en <K>establecer un
          orden</K>: la razón gobierna porque conoce el bien del conjunto; el ánimo se hace su aliado; los
          apetitos aceptan límites. Cuando cada parte cumple su función, aparece la <K>justicia</K>. La
          estructura del alma es el puente entre la antropología, la ética y la política.
        </P>
      </section>

      <Divider />

      {/* 5 · Ética */}
      <section>
        <H3 n={5} titulo="Nadie obra mal a sabiendas" sub="la ética" />
        <P>
          Platón continúa el <K>intelectualismo moral</K> de Sócrates: nadie obra mal a sabiendas, sino porque
          confunde un <K>bien aparente</K> con el <K>bien verdadero</K>. Toda acción busca algo que parece
          conveniente, pero el deseo o la opinión pueden equivocarse. Por eso la <K>virtud depende del
          conocimiento</K>.
        </P>
        <P>
          Un ladrón roba porque identifica la riqueza con el bien y cree que tener más lo hará feliz; ignora que
          la injusticia desordena su alma. Quien se venga confunde el bien con devolver el daño y reproduce la
          injusticia. Al revés, quien comprende el Bien puede renunciar a una ganancia deshonesta o contener la
          venganza aunque le cueste: no por obedecer una norma externa, sino porque entiende que obrar bien
          realiza su propio bien.
        </P>
        <P>
          Esto no reduce la moral a memorizar definiciones. Conocer el bien exige{' '}
          <K>transformar a toda la persona</K>, como la salida de la caverna: la educación forma hábitos,
          disciplina los deseos, fortalece el ánimo y prepara la inteligencia.
        </P>

        <H4>Las virtudes</H4>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>Prudencia o sabiduría</K>: de la razón. Discernir qué conviene al conjunto.</LI>
          <LI><K>Fortaleza</K>: del ánimo. Mantener lo que la razón ve correcto, incluso ante el miedo o el dolor.</LI>
          <LI><K>Templanza</K>: el acuerdo de las partes para que los deseos acepten la dirección racional.</LI>
          <LI><K>Justicia</K>: <span className="font-bold text-terracotta-dark">no es de una parte</span>. Es la armonía total cuando cada una hace su función sin imponerse a las demás.</LI>
        </ul>
        <P>
          La persona justa no es solo quien cumple normas: tiene un <K>orden interior</K>. Por eso actúa de
          forma estable y no según el impulso, el miedo o la ambición. Y la <K>felicidad</K> no consiste en
          satisfacer todos los deseos, sino en vivir conforme a la naturaleza racional, con una personalidad
          unificada y ordenada.
        </P>
      </section>

      <Divider />

      {/* 6 · Política */}
      <section>
        <H3 n={6} titulo="La ciudad justa" sub="la política" />
        <P>
          Para Platón <K>ética y política son inseparables</K>. Nadie vive bien sin una comunidad que lo eduque,
          y ninguna ciudad es justa si sus ciudadanos — sobre todo sus gobernantes — no tienen orden interior.
          La «República» estudia la justicia en la ciudad porque allí aparece ampliada y es más fácil ver la
          misma estructura que luego se descubre en el alma.
        </P>
        <P>
          La <K>polis</K> nace porque nadie es autosuficiente: necesitamos alimento, vivienda, protección y
          organización. De ahí el <K>principio de especialización funcional</K>: cada persona debe hacer la
          tarea para la que está mejor capacitada y recibir la educación correspondiente. La justicia{' '}
          <span className="font-bold text-terracotta-dark">no es que todos hagan lo mismo</span>, sino que cada
          parte contribuya bien al conjunto.
        </P>
        <Tabla
          cabecera={['Alma', 'Grupo de la ciudad', 'Función', 'Virtud']}
          minimo="36rem"
          filas={[
            ['Racional', 'Gobernantes filósofos', 'Dirigir según el conocimiento del bien común', 'Prudencia o sabiduría'],
            ['Irascible', 'Guardianes auxiliares', 'Defender la ciudad y mantener el orden', 'Fortaleza o valor'],
            ['Concupiscible', 'Productores', 'Agricultura, artesanía, comercio', 'Templanza'],
            ['Armonía del conjunto', 'Ciudad justa', 'Cada grupo cumple su función bajo la razón', 'Justicia'],
          ]}
        />
        <P>
          Los <K>productores</K> conservan <K>propiedad y familia privadas</K>. Los guardianes protegen la
          ciudad, y entre los más capaces se elige a los gobernantes filósofos. En estos dos grupos Platón
          propone la <K>comunidad de bienes</K> y la <K>supresión de la familia privada</K>. La finalidad no es
          económica, sino <K>moral</K>: que la riqueza, los intereses familiares o el afán de poder no desvíen a
          quienes deben servir al bien común.
        </P>
        <P>
          Además, <K>mujeres y hombres</K> deben recibir la <K>misma educación</K> y pueden desempeñar las
          mismas funciones si tienen las capacidades. Es algo excepcional en su época, aunque dentro de un
          sistema muy jerarquizado. La posición social no debería depender del nacimiento ni del sexo, sino de
          la naturaleza que cada cual muestre durante la educación.
        </P>

        <H4>Por qué gobiernan los filósofos</H4>
        <P>
          Porque <K>gobernar es una técnica que requiere saber</K>, como la medicina o la navegación. La mayoría
          puede expresar deseos, pero eso no significa que sepa qué hace justa a una ciudad. El filósofo, tras
          una educación larga, comprende el orden de las Ideas y orienta las decisiones hacia el Bien. Además,
          es el <K>menos ansioso de mandar</K>: acepta el poder como un servicio, no como una oportunidad de
          enriquecerse.
        </P>
        <P>
          Es una respuesta a la <K>oligarquía</K>, que confunde riqueza con excelencia, y a la{' '}
          <K>democracia</K>, que corre el riesgo de identificar libertad con ausencia de límites y de dejar
          decisiones técnicas en manos de una mayoría sin preparación, manipulable por los demagogos.
        </P>

        <H4>Cómo se degradan los regímenes</H4>
        <P>La «República» describe una degradación que reproduce el desorden progresivo del alma:</P>
        <ol className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li><span className="font-semibold text-terracotta-dark">1. Aristocracia</span> — gobierno de los mejores y más sabios. La forma justa.</li>
          <li><span className="font-semibold text-terracotta-dark">2. Timocracia</span> — predomina el ánimo y la búsqueda del honor militar.</li>
          <li><span className="font-semibold text-terracotta-dark">3. Oligarquía</span> — la riqueza pasa a ser el criterio del poder.</li>
          <li><span className="font-semibold text-terracotta-dark">4. Democracia</span> — reacción a la desigualdad; valora libertad e igualdad, pero puede perder todo principio de autoridad.</li>
          <li><span className="font-semibold text-terracotta-dark">5. Tiranía</span> — un líder promete proteger al pueblo y acaba sometiéndolo a sus propios apetitos.</li>
        </ol>
        <P>
          En sus obras tardías, sobre todo las «<K>Leyes</K>», Platón reconoce lo difícil que es encontrar
          gobernantes verdaderamente sabios y da más importancia al <K>gobierno de las leyes</K>. Pero mantiene
          su principio: la autoridad debe expresar la razón, el Estado debe hacer mejores a los ciudadanos y la
          justicia es condición de la vida feliz.
        </P>
      </section>

      <Divider />

      {/* Cierre */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-terracotta-dark mb-6 leading-snug">
          Todo encaja
          <br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal"> la unidad del pensamiento platónico</span>
        </h3>
        <P>
          La filosofía de Platón puede leerse como un recorrido desde la crisis de la ciudad hasta la formación
          del gobernante justo. Las <K>Ideas</K> garantizan que la verdad y la justicia no dependan de la
          opinión dominante. La <K>dialéctica</K> permite subir hasta ese orden. El <K>alma</K> debe
          reproducirlo haciendo que la razón gobierne, y la <K>ciudad</K>, organizarse igual. La{' '}
          <K>educación</K> hace el tránsito entre todos estos niveles.
        </P>
        <Tabla
          cabecera={['Problema', 'Respuesta básica', 'Nexo con los demás']}
          minimo="36rem"
          filas={[
            ['Realidad', 'Las Ideas explican el ser y la unidad de las cosas sensibles.', 'Sin realidad estable no habría verdad objetiva ni criterio de justicia.'],
            ['Conocimiento', 'La razón asciende de la doxa a la episteme por reminiscencia y dialéctica.', 'Conocer el Bien orienta la vida y legitima el gobierno.'],
            ['Ser humano', 'El alma conoce y debe ordenar sus partes racional, irascible y concupiscible.', 'La estructura del alma es el modelo de la ciudad.'],
            ['Moral', 'La virtud es orden del alma; la justicia, que cada parte cumpla su función.', 'Autogobierno individual y gobierno justo tienen la misma estructura.'],
            ['Política', 'La educación forma y selecciona a quienes producen, protegen y gobiernan.', 'La polis justa hace posible la vida buena y obliga al filósofo a volver a la caverna.'],
          ]}
        />
        <Cita>
          La línea, la caverna y el carro alado no son adornos: dicen lo mismo desde ángulos distintos. La vida
          humana se mueve entre la apariencia y la verdad, entre el desorden de los deseos y el orden del Bien.
        </Cita>

        <H4>Vocabulario imprescindible</H4>
        <Tabla
          cabecera={['Término', 'Significado']}
          minimo="26rem"
          filas={[
            ['Idea o eidos', 'Forma o esencia universal e inteligible; aquello por lo que una cosa es lo que es.'],
            ['Participación', 'Relación por la que una realidad sensible posee de modo limitado la forma de una Idea.'],
            ['Doxa', 'Opinión sobre lo sensible. Puede acertar, pero no tiene la justificación estable de la ciencia.'],
            ['Episteme', 'Conocimiento racional de lo inteligible y de sus fundamentos.'],
            ['Anámnesis', 'Reminiscencia: aprender como reconocimiento de verdades que el alma no recibe de los sentidos.'],
            ['Dialéctica', 'Investigación racional que examina hipótesis, busca definiciones y asciende hacia el Bien.'],
            ['Justicia', 'Orden en el que cada parte cumple su función bajo la dirección de la razón.'],
          ]}
        />

        <H4>Qué diálogo para cada tema</H4>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <LI><K>«República»</K>: justicia, alma, ciudad, educación, símiles del Sol y la línea, y alegoría de la caverna.</LI>
          <LI><K>«Fedón»</K>: Ideas, reminiscencia, alma e inmortalidad.</LI>
          <LI><K>«Menón»</K>: paradoja del aprendizaje y reminiscencia.</LI>
          <LI><K>«Fedro»</K>: carro alado, eros y ascenso del alma.</LI>
          <LI><K>«Banquete»</K>: educación del deseo y la Belleza en sí.</LI>
          <LI><K>«Timeo»</K>: el demiurgo y el orden del cosmos.</LI>
          <LI><K>«Parménides»</K>: dificultades de la teoría de las Ideas.</LI>
          <LI><K>«Leyes»</K>: revisión de la política ideal y papel de la legislación.</LI>
        </ul>
      </section>
    </article>
  )
}

// ─── Secciones (compartidas por fichas, quiz y textos) ───
const F1 = '1. Contexto'
const F2 = '2. La realidad'
const F3 = '3. El conocimiento'
const F4 = '4. El ser humano'
const F5 = '5. La ética'
const F6 = '6. La política'

// ─── Fichas de estudio ───
const fichas: Ficha[] = [
  { s: F1, p: '¿Cuándo nació y murió Platón, y dónde?', r: 'En Atenas, en 427 a. C.; murió en 347 a. C.' },
  { s: F1, p: '¿Qué acontecimientos políticos vivió Atenas en tiempos de Platón?', r: 'La Guerra del Peloponeso, la derrota ante Esparta, el gobierno oligárquico de los Treinta Tiranos y la restauración de la democracia.' },
  { s: F1, p: '¿Cuál fue el hecho decisivo que orientó la filosofía de Platón?', r: 'La condena a muerte de Sócrates en 399 a. C.: si una ciudad legal podía ejecutar al más justo, había que preguntarse qué saber debía orientar la política.' },
  { s: F1, p: '¿Qué dirección general tiene la obra de Platón?', r: 'Ético-política: busca responder a la crisis de la polis aclarando qué es la justicia, cómo se conoce y cómo educar a quien gobierne.' },
  { s: F1, p: '¿En qué se opone Platón a los sofistas?', r: 'Para los sofistas las normas dependen de convenciones, intereses y opiniones; para Platón el bien y la justicia tienen validez objetiva que la razón descubre.' },
  { s: F1, p: '¿Qué toma Platón de Sócrates?', r: 'La búsqueda de definiciones universales, el diálogo como método y el intelectualismo moral.' },
  { s: F1, p: '¿Qué toma Platón de Heráclito y de Parménides?', r: 'De Heráclito, el mundo sensible como ámbito del cambio. De Parménides, la exigencia de que el verdadero ser sea estable e inteligible.' },
  { s: F1, p: '¿Qué toma Platón del pitagorismo?', r: 'La importancia de las matemáticas, la armonía y la concepción del alma como realidad distinta del cuerpo.' },
  { s: F1, p: '¿Cómo concilia Platón a Heráclito y Parménides?', r: 'Acepta que las cosas sensibles cambian, pero sostiene que el conocimiento es posible porque existen realidades permanentes: las Ideas.' },
  { s: F1, p: '¿En qué forma escribió Platón y quién suele protagonizar sus obras?', r: 'En forma de diálogo, no como tratado. Sócrates protagoniza muchas y conduce la conversación con preguntas y refutaciones.' },
  { s: F1, p: 'Nombra los diálogos de la etapa de madurez.', r: '«Fedón», «Banquete», «Fedro» y «República».' },
  { s: F1, p: 'Nombra los diálogos de la etapa de vejez.', r: '«Parménides», «Sofista», «Político», «Timeo» y «Leyes».' },
  { s: F1, p: '¿Qué fundó Platón y cuándo?', r: 'La Academia, hacia 387 a. C., dedicada a la investigación y la educación filosófica, matemática y política.' },

  { s: F2, p: '¿Qué es una Idea o Forma (eidos) para Platón?', r: 'La realidad universal que hace que cada cosa sea lo que es. Objetiva, inmaterial, universal, eterna e inmutable.' },
  { s: F2, p: '¿Por qué «Idea» no significa en Platón un pensamiento?', r: 'Porque las Ideas no son contenidos mentales ni imágenes subjetivas, sino realidades objetivas que existen independientemente de que las pensemos.' },
  { s: F2, p: 'Pon el ejemplo del círculo para explicar las Ideas.', r: 'Un círculo trazado a mano siempre es imperfecto; podemos juzgarlo así porque lo comparamos con la forma exacta del círculo, que ningún dibujo realiza del todo.' },
  { s: F2, p: 'Enumera las características del mundo sensible.', r: 'Cosas particulares; material, visible, cambiante, múltiple, temporal y corruptible; realidad dependiente e imperfecta; objeto de doxa.' },
  { s: F2, p: 'Enumera las características del mundo inteligible.', r: 'Ideas universales; inmaterial, eterno, estable, necesario e inmutable; realidad plena y fundamento; objeto de episteme.' },
  { s: F2, p: '¿Qué es la participación?', r: 'La relación por la que una cosa sensible posee de modo limitado la forma de una Idea: una cosa es bella porque participa de la Belleza.' },
  { s: F2, p: '¿Qué es la imitación?', r: 'Las Ideas funcionan como modelos o paradigmas que las cosas sensibles intentan reproducir sin igualarlos nunca.' },
  { s: F2, p: '¿La separación entre Ideas y cosas es una distancia física?', r: 'No. Significa que el ser y la verdad de las Ideas no dependen de que existan cosas sensibles que las realicen.' },
  { s: F2, p: '¿Qué lugar ocupa la Idea de Bien?', r: 'La cima del sistema jerárquico de las Ideas. Es el principio que hace inteligible y valiosa toda la realidad.' },
  { s: F2, p: 'Explica la comparación entre el Bien y el Sol.', r: 'Igual que el Sol hace visibles las cosas y favorece la vida, el Bien hace que las Ideas puedan conocerse y da orden y sentido a lo real.' },
  { s: F2, p: '¿En qué diálogo examina Platón las dificultades de su propia teoría de las Ideas?', r: 'En el «Parménides».' },
  { s: F2, p: '¿Qué es el demiurgo y en qué diálogo aparece?', r: 'En el «Timeo»: un artesano racional y bueno que ordena una materia caótica preexistente tomando las Ideas como modelo.' },
  { s: F2, p: '¿El demiurgo crea el mundo de la nada?', r: 'No. Ordena una materia que ya existía, la chora. No es un creador, sino un artesano.' },
  { s: F2, p: '¿Qué significa «cosmos»?', r: 'A la vez mundo y orden. El universo es bello porque reproduce un modelo inteligible, pero no es perfecto por la resistencia de la materia.' },

  { s: F3, p: 'Diferencia entre doxa y episteme.', r: 'Doxa: opinión sobre lo sensible; puede acertar, pero cambia y no está justificada. Episteme: ciencia de las Ideas; verdadera, estable y fundada en razones.' },
  { s: F3, p: '¿Basta con acertar para conocer?', r: 'No. Conocer significa poder explicar por qué algo es como es.' },
  { s: F3, p: '¿Por qué critica Platón la retórica de los sofistas?', r: 'Porque persuade sin saber: un orador puede lograr que se apruebe una guerra sin saber si beneficia a la ciudad. El éxito de la persuasión no demuestra conocimiento.' },
  { s: F3, p: '¿Por qué son esenciales el diálogo y la dialéctica?', r: 'Porque obligan a justificar las afirmaciones, descubren contradicciones y avanzan de los casos particulares a los principios universales.' },
  { s: F3, p: '¿Dónde aparece el símil de la línea?', r: 'En el libro VI de la «República».' },
  { s: F3, p: 'Nombra los cuatro grados del símil de la línea, de menor a mayor.', r: 'Eikasía (imaginación), pístis (creencia), diánoia (pensamiento discursivo) y nóesis (inteligencia).' },
  { s: F3, p: '¿Qué grados de la línea son doxa y cuáles episteme?', r: 'Doxa: eikasía y pístis. Episteme: diánoia y nóesis.' },
  { s: F3, p: '¿Cuál es el objeto de la eikasía? Pon ejemplos.', r: 'Sombras, reflejos e imágenes: una pintura, la cara en un espejo, el reflejo de un árbol en el río. Toma la copia por la realidad.' },
  { s: F3, p: '¿Cuál es el objeto de la pístis?', r: 'Seres vivos, objetos naturales y artefactos. Confía en la experiencia sensible.' },
  { s: F3, p: '¿Qué caracteriza a la diánoia?', r: 'Es propia de las matemáticas: trabaja con objetos inteligibles y demuestra, pero parte de hipótesis que no examina y se apoya en figuras sensibles.' },
  { s: F3, p: '¿Qué caracteriza a la nóesis?', r: 'Es el conocimiento filosófico: la dialéctica revisa las hipótesis, asciende a principios cada vez más universales y culmina en la Idea de Bien.' },
  { s: F3, p: '¿Qué es la anámnesis o reminiscencia?', r: 'La doctrina según la cual aprender es recordar: lo sensible despierta el reconocimiento de Ideas que el alma contempló antes de nacer.' },
  { s: F3, p: '¿Qué ejemplo de reminiscencia da el «Fedón»?', r: 'Ver cosas aproximadamente iguales nos lleva a pensar en lo Igual en sí, que ningún objeto sensible realiza perfectamente.' },
  { s: F3, p: '¿Qué ejemplo de reminiscencia da el «Menón»?', r: 'Sócrates guía con preguntas a un esclavo sin formación hasta que reconstruye una demostración geométrica.' },
  { s: F3, p: '¿Qué muestra la escena del esclavo en el «Menón» sobre la enseñanza?', r: 'Que enseñar no es meter contenidos en una mente vacía, sino ayudar a que la razón descubra relaciones por sí misma.' },
  { s: F3, p: '¿Dónde aparece la alegoría de la caverna?', r: 'Al comienzo del libro VII de la «República».' },
  { s: F3, p: 'En la caverna, ¿qué representan las sombras de la pared?', r: 'Las imágenes y apariencias tomadas por la realidad.', img: 'filo-platon/alegoria-caverna.webp' },
  { s: F3, p: 'En la caverna, ¿qué representa el Sol?', r: 'La Idea de Bien, fuente de inteligibilidad y orientación.' },
  { s: F3, p: 'En la caverna, ¿qué representa el regreso del liberado?', r: 'La responsabilidad política del filósofo educado, que debe volver a gobernar.' },
  { s: F3, p: 'Nombra los cinco sentidos de la alegoría de la caverna.', r: 'Ontológico (grados de realidad), epistemológico (de la opinión al saber), educativo (guía y esfuerzo), ético (conocer cambia la vida) y político (el filósofo debe volver).' },
  { s: F3, p: '¿A quién alude el filósofo que es atacado al volver a la caverna?', r: 'A Sócrates, condenado a muerte por la ciudad.' },

  { s: F4, p: '¿Cómo son el cuerpo y el alma según Platón?', r: 'El cuerpo es material, visible, cambiante y mortal (mundo sensible). El alma es invisible, racional y afín al mundo inteligible.' },
  { s: F4, p: '¿Por qué puede el alma conocer las Ideas, según el «Fedón»?', r: 'Porque comparte con ellas la inmaterialidad y la estabilidad.' },
  { s: F4, p: '¿Cómo es la unión de alma y cuerpo?', r: 'Accidental y transitoria.' },
  { s: F4, p: '¿De qué tradición toma Platón la inmortalidad del alma?', r: 'De la órfico-pitagórica: el alma preexiste al nacimiento y sobrevive a la muerte.' },
  { s: F4, p: '¿Qué relación hay entre inmortalidad y reminiscencia?', r: 'Si conocer es recordar las Ideas, el alma tuvo que contemplarlas antes de su vida corporal.' },
  { s: F4, p: '¿Qué significa «el cuerpo es una cárcel del alma»?', r: 'No que lo corporal sea malo (la educación incluye gimnasia), sino que los deseos no deben gobernar a la persona ni apartar al alma de conocer y ordenar.' },
  { s: F4, p: 'Nombra las tres partes del alma y su tendencia.', r: 'Racional (conocer y dirigir), irascible (coraje, honor y energía) y concupiscible (deseos y placeres materiales).' },
  { s: F4, p: '¿Qué virtud corresponde a cada parte del alma?', r: 'Racional: prudencia o sabiduría. Irascible: fortaleza o valor. Concupiscible: templanza.' },
  { s: F4, p: 'En el mito del carro alado, ¿qué representa cada elemento?', r: 'El auriga, la razón; el caballo noble y obediente, la parte irascible; el caballo indisciplinado, la parte concupiscible.', imgRespuesta: 'filo-platon/carro-alado.webp' },
  { s: F4, p: '¿En qué diálogo aparece el mito del carro alado?', r: 'En el «Fedro».' },
  { s: F4, p: '¿Debe el auriga eliminar a los caballos?', r: 'No: debe coordinarlos y dirigirlos. Si pierde el control, el carro cae; si gobierna con ayuda del caballo noble, el alma se eleva.' },
  { s: F4, p: '¿En qué consiste la excelencia del alma?', r: 'No en suprimir partes, sino en establecer un orden: la razón gobierna, el ánimo es su aliado y los apetitos aceptan límites.' },

  { s: F5, p: '¿Qué es el intelectualismo moral?', r: 'La tesis de que nadie obra mal a sabiendas: se obra mal por confundir un bien aparente con el verdadero. La virtud depende del conocimiento.' },
  { s: F5, p: 'Explica con el ejemplo del ladrón el intelectualismo moral.', r: 'El ladrón roba porque identifica la riqueza con el bien y cree que tener más lo hará feliz; ignora que la injusticia desordena su alma.' },
  { s: F5, p: '¿Conocer el bien es memorizar definiciones?', r: 'No: exige transformar a toda la persona, como la salida de la caverna. La educación forma hábitos, disciplina deseos y prepara la inteligencia.' },
  { s: F5, p: '¿En qué consiste la prudencia?', r: 'Virtud de la razón: discernir qué conviene al conjunto.' },
  { s: F5, p: '¿En qué consiste la fortaleza?', r: 'Virtud del ánimo: mantener lo que la razón reconoce como correcto, incluso ante el miedo o el dolor.' },
  { s: F5, p: '¿En qué consiste la templanza?', r: 'El acuerdo de las partes para que los deseos acepten la dirección de la razón.' },
  { s: F5, p: '¿A qué parte del alma corresponde la justicia?', r: 'A ninguna en concreto: es la armonía total que surge cuando cada parte cumple su función sin imponerse a las demás.' },
  { s: F5, p: '¿En qué consiste la felicidad según Platón?', r: 'No en satisfacer todos los deseos, sino en vivir conforme a la naturaleza racional y alcanzar una unidad ordenada de la personalidad.' },

  { s: F6, p: '¿Por qué ética y política son inseparables para Platón?', r: 'Porque el individuo solo vive bien en una comunidad que lo eduque, y ninguna ciudad es justa si sus ciudadanos y gobernantes no tienen orden interior.' },
  { s: F6, p: '¿Por qué nace la polis?', r: 'Porque ningún individuo es autosuficiente: necesitamos alimento, vivienda, protección y organización, lo que exige cooperación y división del trabajo.' },
  { s: F6, p: '¿Qué es el principio de especialización funcional?', r: 'Cada persona debe realizar la tarea para la que está mejor capacitada y recibir la educación correspondiente.' },
  { s: F6, p: 'Nombra las tres clases sociales y su función.', r: 'Gobernantes filósofos (dirigir según el bien común), guardianes auxiliares (defender la ciudad) y productores (actividad económica).' },
  { s: F6, p: 'Relaciona cada clase social con una parte del alma y una virtud.', r: 'Gobernantes: racional, prudencia. Guardianes: irascible, fortaleza. Productores: concupiscible, templanza.' },
  { s: F6, p: '¿Qué clases tienen propiedad y familia privadas?', r: 'Solo los productores. Guardianes y gobernantes viven en comunidad de bienes y sin familia privada.' },
  { s: F6, p: '¿Para qué suprime Platón la propiedad y la familia en guardianes y gobernantes?', r: 'Con finalidad moral, no económica: que la riqueza, los intereses familiares o el afán de poder no los desvíen del bien común.' },
  { s: F6, p: '¿Qué dice Platón sobre mujeres y hombres?', r: 'Deben recibir la misma educación y pueden desempeñar las mismas funciones si tienen las capacidades. Algo excepcional en su época.' },
  { s: F6, p: '¿Por qué deben gobernar los filósofos?', r: 'Porque gobernar es una técnica que requiere saber, como la medicina; el filósofo conoce el Bien y acepta el poder como servicio, no como enriquecimiento.' },
  { s: F6, p: '¿Qué critica Platón de la oligarquía y de la democracia?', r: 'La oligarquía confunde riqueza y excelencia. La democracia puede identificar libertad con ausencia de límites y dejarse manipular por demagogos.' },
  { s: F6, p: 'Ordena la degradación de los regímenes políticos.', r: 'Aristocracia → timocracia → oligarquía → democracia → tiranía.' },
  { s: F6, p: '¿Qué es la timocracia?', r: 'El régimen en el que predomina el ánimo y la búsqueda del honor militar.' },
  { s: F6, p: '¿Cómo surge la tiranía?', r: 'Del exceso democrático: un líder promete proteger al pueblo y termina sometiéndolo a sus propios apetitos.' },
  { s: F6, p: '¿Qué cambia en las «Leyes» respecto a la «República»?', r: 'Platón reconoce la dificultad de encontrar gobernantes sabios y da más importancia al gobierno de las leyes.' },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  { s: F1, q: '¿En qué año murió Sócrates?', opts: ['427 a. C.', '399 a. C.', '387 a. C.', '347 a. C.'], correct: 1, exp: 'Sócrates fue condenado a muerte en 399 a. C. Platón nació en 427 y murió en 347; fundó la Academia hacia 387.' },
  { s: F1, q: '¿Qué hecho transformó la vocación política de Platón en filosofía?', opts: ['La fundación de la Academia', 'La condena a muerte de Sócrates', 'La victoria de Atenas', 'Su viaje a Egipto'], correct: 1, exp: 'Si una ciudad legal podía ejecutar al más justo, había que preguntarse qué saber debía orientar la política.' },
  { s: F1, q: '¿Qué dirección tiene la obra de Platón?', opts: ['Puramente metafísica', 'Ético-política', 'Científico-natural', 'Religiosa'], correct: 1, exp: 'Busca responder a la crisis de la polis: la metafísica y la teoría del conocimiento están al servicio de la pregunta por la justicia.' },
  { s: F1, q: 'Para los sofistas, las normas…', opts: ['Tienen validez objetiva', 'Dependen de convenciones, intereses y opiniones', 'Son dictadas por los dioses', 'Se deducen de las matemáticas'], correct: 1, exp: 'Frente a ellos, Platón sostiene que el bien y la justicia tienen validez objetiva que la razón descubre.' },
  { s: F1, q: '¿De quién toma Platón la exigencia de que el verdadero ser sea estable?', opts: ['Heráclito', 'Parménides', 'Pitágoras', 'Protágoras'], correct: 1, exp: 'De Parménides. De Heráclito toma la visión del mundo sensible como ámbito del cambio.' },
  { s: F1, q: '¿Qué NO toma Platón del pitagorismo?', opts: ['La importancia de las matemáticas', 'La armonía', 'El alma distinta del cuerpo', 'El relativismo moral'], correct: 3, exp: 'El relativismo es propio de los sofistas. Del pitagorismo toma las matemáticas, la armonía y la concepción del alma.' },
  { s: F1, q: '¿Cuál de estos diálogos es de la etapa de madurez?', opts: ['Leyes', 'República', 'Timeo', 'Sofista'], correct: 1, exp: 'Madurez: Fedón, Banquete, Fedro y República. Leyes, Timeo y Sofista son de la vejez.' },
  { s: F1, q: '¿Qué institución fundó Platón?', opts: ['El Liceo', 'La Academia', 'El Jardín', 'La Stoa'], correct: 1, exp: 'Fundó la Academia hacia 387 a. C.' },

  { s: F2, q: '¿Qué son las Ideas para Platón?', opts: ['Pensamientos de la mente humana', 'Realidades objetivas, inmateriales, universales, eternas e inmutables', 'Palabras del lenguaje', 'Objetos físicos perfectos'], correct: 1, exp: 'Las Ideas no son pensamientos subjetivos, sino realidades objetivas que hacen que cada cosa sea lo que es.' },
  { s: F2, q: '¿Qué es objeto de doxa?', opts: ['El mundo inteligible', 'El mundo sensible', 'La Idea de Bien', 'Las matemáticas puras'], correct: 1, exp: 'Del mundo sensible solo hay opinión (doxa); del inteligible, ciencia (episteme).' },
  { s: F2, q: '¿Cuál de estas características es del mundo sensible?', opts: ['Eterno', 'Inmutable', 'Corruptible', 'Necesario'], correct: 2, exp: 'El mundo sensible es cambiante, múltiple, temporal y corruptible. Eterno, inmutable y necesario describen el inteligible.' },
  { s: F2, q: '«Una cosa es bella porque ___ de la Belleza.»', opts: ['Crea', 'Participa', 'Se aleja', 'Deriva'], correct: 1, exp: 'La participación es la relación por la que una cosa sensible posee de modo limitado la forma de una Idea.' },
  { s: F2, q: 'Decir que las Ideas funcionan como modelos o paradigmas es hablar de…', opts: ['Participación', 'Imitación', 'Reminiscencia', 'Dialéctica'], correct: 1, exp: 'Con la imitación Platón destaca que las cosas intentan reproducir las Ideas sin igualarlas nunca.' },
  { s: F2, q: '¿Qué significa la «separación» de las Ideas?', opts: ['Que están en otro lugar del universo', 'Que su ser y su verdad no dependen de las cosas sensibles', 'Que no se pueden conocer', 'Que cada Idea está aislada de las demás'], correct: 1, exp: 'No es una distancia física: significa que las Ideas no dependen de que existan ejemplares sensibles.' },
  { s: F2, q: '¿Qué ocupa la cima de la jerarquía de las Ideas?', opts: ['La Idea de Belleza', 'La Idea de Bien', 'La Idea de Justicia', 'El demiurgo'], correct: 1, exp: 'La Idea de Bien es el principio que hace inteligible y valiosa toda la realidad.' },
  { s: F2, q: '¿Con qué compara Platón la Idea de Bien en la «República»?', opts: ['Con el fuego', 'Con el Sol', 'Con el mar', 'Con un artesano'], correct: 1, exp: 'Igual que el Sol hace visibles las cosas, el Bien hace que las Ideas sean conocidas.' },
  { s: F2, q: '¿Qué hace el demiurgo del «Timeo»?', opts: ['Crea el mundo de la nada', 'Ordena una materia caótica preexistente tomando las Ideas como modelo', 'Destruye el mundo sensible', 'Crea las Ideas'], correct: 1, exp: 'El demiurgo es un artesano: ordena la chora, que ya existía, imitando las Ideas. No crea de la nada.' },
  { s: F2, q: '¿Cómo se llama la materia preexistente que ordena el demiurgo?', opts: ['Eidos', 'Chora', 'Doxa', 'Polis'], correct: 1, exp: 'La chora es la materia preexistente y caótica que el demiurgo organiza.' },
  { s: F2, q: '¿En qué diálogo examina Platón las dificultades de la teoría de las Ideas?', opts: ['República', 'Parménides', 'Menón', 'Banquete'], correct: 1, exp: 'En el «Parménides» revisa problemas de la separación y la participación.' },

  { s: F3, q: '¿Qué diferencia a la episteme de la doxa?', opts: ['Que la episteme es más rápida', 'Que la episteme es verdadera, estable y fundada en razones', 'Que la doxa trata de las Ideas', 'Que la doxa siempre es falsa'], correct: 1, exp: 'La doxa puede acertar, pero cambia y carece de justificación; la episteme es estable y fundada en razones.' },
  { s: F3, q: '¿Por qué el éxito de un orador no demuestra que sepa?', opts: ['Porque los oradores mienten siempre', 'Porque persuadir no es lo mismo que conocer', 'Porque la asamblea no vota', 'Porque la retórica es una ciencia'], correct: 1, exp: 'Un orador puede persuadir sin saber si lo que defiende beneficia a la ciudad.' },
  { s: F3, q: '¿En qué libro de la «República» está el símil de la línea?', opts: ['Libro IV', 'Libro VI', 'Libro VII', 'Libro X'], correct: 1, exp: 'El símil de la línea está en el libro VI; la alegoría de la caverna, al comienzo del VII.' },
  { s: F3, q: '¿Cuál es el grado más bajo del conocimiento en el símil de la línea?', opts: ['Pístis', 'Eikasía', 'Diánoia', 'Nóesis'], correct: 1, exp: 'La eikasía (imaginación), que se dirige a sombras y reflejos.' },
  { s: F3, q: '¿Qué grado de conocimiento corresponde a las matemáticas?', opts: ['Eikasía', 'Pístis', 'Diánoia', 'Nóesis'], correct: 2, exp: 'La diánoia o pensamiento discursivo: parte de hipótesis y razona con figuras.' },
  { s: F3, q: '¿Cuál es el objeto de la nóesis?', opts: ['Los reflejos', 'Los objetos físicos', 'Las entidades matemáticas', 'Las Ideas y, finalmente, el Bien'], correct: 3, exp: 'La nóesis, mediante la dialéctica, asciende hasta la Idea de Bien.' },
  { s: F3, q: 'Ver tu cara reflejada en un espejo corresponde a…', opts: ['Eikasía', 'Pístis', 'Diánoia', 'Nóesis'], correct: 0, exp: 'La eikasía se dirige a imágenes: pinturas, reflejos en espejos o en el agua.' },
  { s: F3, q: '¿Qué limitación tiene la diánoia?', opts: ['Solo conoce sombras', 'Parte de hipótesis que no examina y usa figuras sensibles', 'No es racional', 'No alcanza ningún objeto inteligible'], correct: 1, exp: 'Trabaja con objetos inteligibles, pero parte de hipótesis sin examinarlas y se apoya en figuras.' },
  { s: F3, q: '¿Qué afirma la teoría de la reminiscencia?', opts: ['Que conocer es percibir', 'Que aprender es recordar', 'Que el alma nace vacía', 'Que las Ideas se inventan'], correct: 1, exp: 'La anámnesis sostiene que aprender es recordar Ideas que el alma contempló antes de nacer.' },
  { s: F3, q: '¿En qué diálogo Sócrates guía a un esclavo hasta una demostración geométrica?', opts: ['Fedón', 'Menón', 'Fedro', 'Timeo'], correct: 1, exp: 'En el «Menón». En el «Fedón», el ejemplo es lo Igual en sí.' },
  { s: F3, q: 'En la alegoría de la caverna, ¿qué representa el Sol?', opts: ['El filósofo', 'La Idea de Bien', 'El fuego', 'La polis'], correct: 1, exp: 'El Sol es la Idea de Bien, fuente de inteligibilidad y orientación.' },
  { s: F3, q: 'En la caverna, los objetos y el fuego del interior representan…', opts: ['Las Ideas', 'Las cosas sensibles y el saber limitado al mundo visible', 'El Bien', 'La dialéctica'], correct: 1, exp: 'Son las cosas sensibles. Las sombras son las apariencias; el exterior, el mundo inteligible.' },
  { s: F3, q: '¿Qué sentido de la caverna expresa la obligación de volver?', opts: ['Ontológico', 'Epistemológico', 'Político', 'Estético'], correct: 2, exp: 'El sentido político: quien ha contemplado el Bien debe regresar a gobernar.' },
  { s: F3, q: 'Observa la ilustración: ¿qué representa la subida de los prisioneros hacia la luz?', opts: ['La muerte', 'La educación y el acceso a la verdad', 'El trabajo de los productores', 'La guerra'], correct: 1, exp: 'La liberación y el ascenso son la educación dialéctica, una dolorosa transformación de la mirada.', img: 'filo-platon/alegoria-caverna.webp' },

  { s: F4, q: '¿Cómo es la unión entre alma y cuerpo según Platón?', opts: ['Esencial y definitiva', 'Accidental y transitoria', 'Imposible', 'Solo simbólica'], correct: 1, exp: 'La unión es accidental y transitoria: el alma preexiste y sobrevive al cuerpo.' },
  { s: F4, q: '¿De qué tradición procede la inmortalidad del alma en Platón?', opts: ['Sofística', 'Órfico-pitagórica', 'Atomista', 'Estoica'], correct: 1, exp: 'Bajo la influencia órfico-pitagórica, el alma preexiste y sobrevive a la muerte.' },
  { s: F4, q: '«El cuerpo es una cárcel del alma» significa que…', opts: ['Todo lo corporal es malo', 'Los deseos no deben gobernar a la persona', 'Hay que evitar el ejercicio físico', 'El alma no puede conocer'], correct: 1, exp: 'No implica que lo corporal sea malo (la educación incluye gimnasia): lo que hay que evitar es que los apetitos dominen.' },
  { s: F4, q: '¿Qué parte del alma busca coraje, honor y energía?', opts: ['Racional', 'Irascible', 'Concupiscible', 'Vegetativa'], correct: 1, exp: 'La irascible. La racional conoce y dirige; la concupiscible busca placeres materiales.' },
  { s: F4, q: '¿Qué virtud corresponde a la parte racional?', opts: ['Fortaleza', 'Templanza', 'Prudencia o sabiduría', 'Justicia'], correct: 2, exp: 'Racional: prudencia. Irascible: fortaleza. Concupiscible: templanza.' },
  { s: F4, q: 'En el mito del carro alado, el caballo indisciplinado representa…', opts: ['La razón', 'La parte irascible', 'La parte concupiscible', 'El cuerpo'], correct: 2, exp: 'El caballo indisciplinado es el apetito (concupiscible); el noble, el ánimo (irascible); el auriga, la razón.' },
  { s: F4, q: 'Observa la imagen: ¿qué virtud debe tener la parte del alma que representa el caballo desobediente?', opts: ['Prudencia', 'Fortaleza', 'Templanza', 'Justicia'], correct: 2, exp: 'El caballo desobediente es la parte concupiscible (apetitiva), y su virtud es la templanza: aceptar la dirección de la razón.', img: 'filo-platon/carro-alado.webp' },
  { s: F4, q: '¿En qué diálogo aparece el mito del carro alado?', opts: ['República', 'Fedro', 'Timeo', 'Leyes'], correct: 1, exp: 'El carro alado está en el «Fedro».' },
  { s: F4, q: '¿Cuál es la tarea del auriga?', opts: ['Eliminar a los caballos', 'Coordinar y dirigir a los caballos', 'Dejarse llevar', 'Obedecer al caballo noble'], correct: 1, exp: 'La razón no suprime las otras partes: las coordina. Si pierde el control, el carro cae.' },

  { s: F5, q: '¿Qué afirma el intelectualismo moral?', opts: ['Que la virtud depende de la voluntad', 'Que nadie obra mal a sabiendas', 'Que el mal no existe', 'Que la moral es convención'], correct: 1, exp: 'Se obra mal por confundir un bien aparente con el verdadero: la virtud depende del conocimiento.' },
  { s: F5, q: 'Según Platón, el ladrón roba porque…', opts: ['Es malvado por naturaleza', 'Confunde la riqueza con el bien', 'Lo obliga la ciudad', 'No tiene alma'], correct: 1, exp: 'Identifica la riqueza con el bien y cree que lo hará feliz; ignora que la injusticia desordena su alma.' },
  { s: F5, q: '¿A qué parte del alma corresponde la justicia?', opts: ['A la racional', 'A la irascible', 'A la concupiscible', 'A ninguna: es la armonía del conjunto'], correct: 3, exp: 'La justicia no es de una parte: surge cuando cada una cumple su función sin imponerse a las demás.' },
  { s: F5, q: '¿Qué es la templanza?', opts: ['El valor ante el miedo', 'El acuerdo de las partes para que los deseos acepten la razón', 'El conocimiento del Bien', 'La obediencia a las leyes'], correct: 1, exp: 'La templanza es el acuerdo que permite que los deseos acepten la dirección racional.' },
  { s: F5, q: '¿En qué consiste la felicidad para Platón?', opts: ['En satisfacer todos los deseos', 'En vivir conforme a la naturaleza racional, con un alma ordenada', 'En acumular riqueza', 'En el honor militar'], correct: 1, exp: 'No es satisfacer todos los deseos, sino alcanzar una unidad ordenada de la personalidad.' },

  { s: F6, q: '¿Por qué nace la polis?', opts: ['Por un pacto entre iguales', 'Porque ningún individuo es autosuficiente', 'Por mandato divino', 'Por la guerra'], correct: 1, exp: 'Nadie es autosuficiente: necesitamos cooperación y división del trabajo.' },
  { s: F6, q: 'El principio de especialización funcional dice que…', opts: ['Todos deben hacer lo mismo', 'Cada persona debe hacer la tarea para la que está mejor capacitada', 'Solo los ricos gobiernan', 'Los oficios se heredan'], correct: 1, exp: 'Cada uno realiza la tarea para la que está mejor capacitado y recibe la educación correspondiente.' },
  { s: F6, q: '¿Qué clase social se corresponde con el alma irascible?', opts: ['Gobernantes filósofos', 'Guardianes auxiliares', 'Productores', 'Esclavos'], correct: 1, exp: 'Guardianes: irascible y fortaleza. Gobernantes: racional y prudencia. Productores: concupiscible y templanza.' },
  { s: F6, q: '¿Qué clase conserva propiedad y familia privadas?', opts: ['Los gobernantes', 'Los guardianes', 'Los productores', 'Todas'], correct: 2, exp: 'Solo los productores. Guardianes y gobernantes viven en comunidad de bienes.' },
  { s: F6, q: '¿Con qué finalidad suprime Platón la propiedad de los gobernantes?', opts: ['Económica', 'Moral: que nada los desvíe del bien común', 'Militar', 'Religiosa'], correct: 1, exp: 'La finalidad es moral: impedir que la riqueza o los intereses familiares desvíen a quienes deben servir al bien común.' },
  { s: F6, q: '¿Qué defiende Platón sobre las mujeres?', opts: ['Que no deben educarse', 'Que pueden recibir la misma educación y funciones que los hombres', 'Que solo pueden ser productoras', 'Que deben gobernar siempre'], correct: 1, exp: 'Mujeres y hombres deben recibir la misma educación y pueden desempeñar las mismas funciones si tienen las capacidades.' },
  { s: F6, q: '¿Por qué deben gobernar los filósofos?', opts: ['Porque son ricos', 'Porque gobernar es una técnica que requiere saber', 'Porque los elige la asamblea', 'Porque son los más fuertes'], correct: 1, exp: 'Gobernar es como la medicina: requiere conocimiento. El filósofo conoce el Bien y acepta el poder como servicio.' },
  { s: F6, q: '¿Qué régimen es la forma justa de gobierno?', opts: ['Democracia', 'Aristocracia (gobierno de los mejores)', 'Oligarquía', 'Timocracia'], correct: 1, exp: 'La aristocracia, entendida como gobierno de los mejores y más sabios.' },
  { s: F6, q: '¿Qué régimen surge cuando la riqueza pasa a ser el criterio del poder?', opts: ['Timocracia', 'Oligarquía', 'Democracia', 'Tiranía'], correct: 1, exp: 'La oligarquía. La timocracia se basa en el honor militar.' },
  { s: F6, q: '¿De qué régimen surge la tiranía?', opts: ['De la aristocracia', 'De la timocracia', 'De la oligarquía', 'De la democracia'], correct: 3, exp: 'Del exceso democrático surge la tiranía: un líder promete proteger al pueblo y acaba sometiéndolo.' },
  { s: F6, q: '¿Cuál es el orden correcto de degradación?', opts: ['Aristocracia → oligarquía → timocracia → tiranía → democracia', 'Aristocracia → timocracia → oligarquía → democracia → tiranía', 'Democracia → aristocracia → oligarquía → tiranía → timocracia', 'Timocracia → aristocracia → democracia → oligarquía → tiranía'], correct: 1, exp: 'Aristocracia, timocracia, oligarquía, democracia y tiranía.' },
  { s: F6, q: '¿Qué cambia en las «Leyes»?', opts: ['Abandona la idea de justicia', 'Da más peso al gobierno de las leyes', 'Defiende la tiranía', 'Suprime la educación'], correct: 1, exp: 'Reconoce la dificultad de encontrar gobernantes sabios y concede más importancia a las leyes.' },
]

// ─── Textos para comentario ───
const textos: Texto[] = [
  {
    id: 'caverna-1', s: F3, obra: '«República», libro VII', ref: '514a-515c',
    fragmento: 'Imagina a unos hombres en una morada subterránea en forma de caverna, con una larga entrada abierta a la luz. Están allí desde niños, encadenados por las piernas y el cuello, de modo que no pueden moverse ni mirar más que hacia delante. Por detrás y por encima de ellos brilla la luz de un fuego, y entre el fuego y los prisioneros hay un camino elevado a lo largo del cual se ha levantado un pequeño muro. […] Unos hombres pasan a lo largo del muro llevando toda clase de objetos. […] Semejantes a nosotros, esos prisioneros no han visto de sí mismos ni de los demás otra cosa que las sombras que el fuego proyecta sobre la pared de la caverna. […] Tales hombres no tendrían por real otra cosa que las sombras de los objetos.',
    tema: 'La situación inicial del ser humano: vive encerrado en el mundo sensible y toma las apariencias por la realidad.',
    ideas: [
      'Los prisioneros representan la condición humana de partida: «semejantes a nosotros».',
      'Solo pueden ver sombras, que son copias de copias: el grado más bajo de realidad y de conocimiento (eikasía).',
      'Como no conocen otra cosa, confunden las sombras con la realidad: el problema no es solo la ignorancia, sino no saber que se ignora.',
    ],
    relacion: 'Es el comienzo de la alegoría de la caverna, que reúne toda la filosofía platónica. El interior de la caverna es el mundo sensible y el ámbito de la doxa; las sombras corresponden a la eikasía del símil de la línea. Anticipa la educación como liberación y la crítica a quienes viven entre opiniones recibidas, como la asamblea ateniense que condenó a Sócrates.',
    terminos: ['mundo sensible', 'doxa', 'eikasía', 'apariencia'],
  },
  {
    id: 'caverna-2', s: F3, obra: '«República», libro VII', ref: '515c-516b',
    fragmento: 'Si a uno lo liberaran y lo obligaran de pronto a levantarse, a volver el cuello y a caminar mirando hacia la luz, sentiría dolor y, deslumbrado, no podría ver aquellas cosas cuyas sombras veía antes. […] Necesitaría acostumbrarse para poder ver las cosas de arriba. Primero distinguiría con más facilidad las sombras; luego, las imágenes de los hombres y de las cosas reflejadas en el agua, y después las cosas mismas. […] Por último, creo, podría ver el sol, no ya su imagen en el agua, sino el sol mismo en su propio lugar, y contemplarlo tal como es.',
    tema: 'La educación como ascenso progresivo y doloroso desde las apariencias hasta la Idea de Bien.',
    ideas: [
      'La liberación no es espontánea: al prisionero «lo obligan», lo que supone un guía.',
      'El ascenso produce dolor y confusión: cambiar la mirada cuesta.',
      'Es gradual: sombras, reflejos, cosas, y finalmente el sol. Cada nivel prepara el siguiente.',
      'El término del camino es contemplar el sol «en su propio lugar»: la Idea de Bien.',
    ],
    relacion: 'Los pasos del ascenso reproducen los grados del símil de la línea, de la eikasía a la nóesis. Muestra el sentido educativo de la alegoría y conecta con la dialéctica como camino hacia el Bien y con la reminiscencia: el guía no introduce el saber, ayuda a verlo.',
    terminos: ['educación', 'dialéctica', 'Idea de Bien', 'nóesis'],
  },
  {
    id: 'caverna-3', s: F3, obra: '«República», libro VII', ref: '517b-c',
    fragmento: 'Hay que comparar la región que se manifiesta por medio de la vista con la morada-prisión, y la luz del fuego que hay en ella con el poder del sol. Si comparas la subida y la contemplación de las cosas de arriba con el ascenso del alma hacia la región inteligible, no errarás respecto de mi pensamiento. […] En el ámbito de lo cognoscible, lo último que se percibe, y con dificultad, es la Idea del Bien; pero, una vez percibida, hay que concluir que es la causa de todas las cosas rectas y bellas.',
    tema: 'La interpretación de la alegoría: la caverna es el mundo sensible y el exterior es el mundo inteligible, presidido por la Idea de Bien.',
    ideas: [
      'El propio Platón da la clave: la caverna es el mundo visible y el ascenso, el del alma hacia lo inteligible.',
      'La Idea de Bien es lo último y lo más difícil de conocer.',
      'Una vez conocida, se descubre que es la causa de todo lo recto y lo bello: el fundamento de lo real y de lo valioso.',
    ],
    relacion: 'Une ontología y epistemología: a cada grado de realidad le corresponde un grado de conocimiento. Conecta con el símil del Sol y con la ética y la política: quien conoce el Bien sabe orientar su vida y la ciudad.',
    terminos: ['mundo inteligible', 'Idea de Bien', 'alma', 'ontología'],
  },
  {
    id: 'caverna-4', s: F6, obra: '«República», libro VII', ref: '516e-517a',
    fragmento: 'Si este hombre descendiera de nuevo y ocupara su antiguo asiento, ¿no se le llenarían los ojos de tinieblas al venir de pronto del sol? […] ¿No provocaría la risa de los demás, y no dirían de él que por haber subido arriba ha vuelto con los ojos estropeados, y que no vale la pena intentar siquiera la subida? Y si pudieran echar mano a quien intentara desatarlos y conducirlos hacia arriba, ¿no lo matarían?',
    tema: 'El regreso del filósofo a la caverna y el rechazo que sufre por parte de quienes siguen encadenados.',
    ideas: [
      'El filósofo vuelve: no se queda contemplando en privado.',
      'Al volver ve peor en la oscuridad y resulta ridículo a ojos de los demás.',
      'Los prisioneros prefieren sus certezas y pueden llegar a matar a quien intenta liberarlos.',
    ],
    relacion: 'Es la dimensión política de la alegoría: quien conoce el Bien tiene la obligación de gobernar. La alusión a la muerte de Sócrates es clara y conecta con el contexto de Platón y con su crítica a la democracia ateniense.',
    terminos: ['filósofo gobernante', 'bien común', 'sentido político'],
  },
  {
    id: 'linea', s: F3, obra: '«República», libro VI', ref: '509d-511e',
    fragmento: 'Toma una línea cortada en dos segmentos desiguales, uno para el género de lo visible y otro para el de lo inteligible, y vuelve a cortar cada segmento en la misma proporción. […] En lo visible, una sección son las imágenes: las sombras, luego los reflejos en el agua y en todo lo que es compacto, liso y brillante. En la otra, pon aquello de lo que estas son imágenes: los animales que nos rodean, las plantas y todo lo fabricado. […] A estos cuatro segmentos corresponden cuatro afecciones del alma: la inteligencia a la más alta, el pensamiento discursivo a la segunda, a la tercera la creencia y a la última la imaginación.',
    tema: 'Los grados de la realidad y los grados del conocimiento que les corresponden.',
    ideas: [
      'La realidad se divide en visible e inteligible, y cada parte se subdivide otra vez: cuatro niveles.',
      'Lo visible abarca las imágenes (sombras, reflejos) y las cosas de las que son imagen (seres vivos y objetos).',
      'A cada nivel de realidad le corresponde un modo de conocer: imaginación, creencia, pensamiento discursivo e inteligencia.',
    ],
    relacion: 'Es la base teórica de la alegoría de la caverna, que cuenta en forma de relato lo que la línea expone de forma esquemática. Muestra el dualismo ontológico y la distinción doxa-episteme.',
    terminos: ['eikasía', 'pístis', 'diánoia', 'nóesis', 'doxa', 'episteme'],
  },
  {
    id: 'sol', s: F2, obra: '«República», libro VI', ref: '508b-509b',
    fragmento: 'El sol no solo proporciona a las cosas visibles la capacidad de ser vistas, sino también la generación, el crecimiento y el alimento, sin ser él mismo generación. […] Del mismo modo, a las cosas cognoscibles no solo les viene del Bien el ser conocidas, sino también el existir y la esencia, aunque el Bien no es esencia, sino algo que está todavía más allá de la esencia en dignidad y en poder.',
    tema: 'La Idea de Bien como fundamento del conocimiento y del ser de las demás Ideas.',
    ideas: [
      'El sol cumple dos funciones en lo visible: hace ver las cosas y les da vida.',
      'Por analogía, el Bien hace que las Ideas puedan conocerse y también que existan.',
      'El Bien está «más allá de la esencia»: no es una Idea más, sino su principio.',
    ],
    relacion: 'Explica por qué la Idea de Bien está en la cima de la jerarquía de las Ideas. En la caverna, el Sol representa precisamente el Bien, y en la línea es el término de la nóesis. Fundamenta que conocer el Bien sea necesario para gobernar.',
    terminos: ['Idea de Bien', 'analogía', 'esencia', 'jerarquía de las Ideas'],
  },
  {
    id: 'demiurgo', s: F2, obra: '«Timeo»', ref: '29e-30a',
    fragmento: 'Era bueno, y en quien es bueno nunca nace envidia alguna. Libre de ella, quiso que todo llegara a ser lo más semejante posible a sí mismo. […] Queriendo que todas las cosas fueran buenas y, en la medida de lo posible, que nada fuera malo, tomó todo cuanto era visible, que no estaba en reposo sino que se movía de manera discordante y desordenada, y lo condujo del desorden al orden.',
    tema: 'El origen del cosmos como obra de un artesano bueno que ordena una materia desordenada.',
    ideas: [
      'El demiurgo es bueno y quiere que todo se le parezca: bueno en la medida de lo posible.',
      'No crea de la nada: toma algo que ya existía y se movía sin orden.',
      'Su acción consiste en llevar esa materia del desorden al orden.',
    ],
    relacion: 'Aplica la teoría de las Ideas a la cosmología: el demiurgo ordena la materia (chora) tomando las Ideas como modelo. El mundo es un cosmos, un orden, porque imita un modelo inteligible. Conviene contrastarlo con la creación ex nihilo del Dios cristiano.',
    terminos: ['demiurgo', 'chora', 'cosmos', 'modelo'],
  },
  {
    id: 'menon', s: F3, obra: '«Menón»', ref: '81c-d',
    fragmento: 'Siendo el alma inmortal y habiendo nacido muchas veces, y habiendo visto todas las cosas, tanto las de aquí como las del Hades, no hay nada que no haya aprendido. […] Como toda la naturaleza está emparentada y el alma lo ha aprendido todo, nada impide que quien recuerde una sola cosa —eso que los hombres llaman aprender— descubra por sí mismo todas las demás, si es valeroso y no desfallece en la búsqueda. Porque buscar y aprender no son, en suma, otra cosa que recordar.',
    tema: 'La teoría de la reminiscencia: aprender es recordar lo que el alma ya conoció.',
    ideas: [
      'El alma es inmortal y ya lo ha visto todo antes de esta vida.',
      'Lo que llamamos aprender es en realidad recordar.',
      'Basta recordar una cosa para ir descubriendo las demás, porque todo está relacionado; pero exige esfuerzo y constancia.',
    ],
    relacion: 'Une antropología y epistemología: la inmortalidad del alma hace posible la reminiscencia, y la reminiscencia explica cómo conocemos las Ideas a partir de lo sensible. Justo después, Sócrates lo demuestra con el esclavo y la geometría.',
    terminos: ['anámnesis', 'inmortalidad del alma', 'Ideas'],
  },
  {
    id: 'fedon', s: F4, obra: '«Fedón»', ref: '79c-80b',
    fragmento: 'Cuando el alma se sirve del cuerpo para examinar algo, por la vista, el oído o cualquier otro sentido, es arrastrada por el cuerpo hacia lo que nunca permanece igual, y ella misma anda errante, se turba y se marea como si estuviera ebria. […] Pero cuando examina las cosas por sí misma, se dirige hacia lo puro, lo que siempre es, lo inmortal y lo que se mantiene igual. […] El alma es lo más semejante a lo divino, inmortal, inteligible, uniforme e indisoluble; y el cuerpo, a lo humano, mortal, multiforme, no inteligible y que nunca permanece idéntico.',
    tema: 'El dualismo antropológico: el alma es afín a las Ideas y el cuerpo, al mundo sensible.',
    ideas: [
      'A través de los sentidos el alma es arrastrada hacia lo cambiante y se confunde.',
      'Por sí misma, mediante la razón, se dirige hacia lo que siempre es: las Ideas.',
      'El alma se parece a lo divino e inmortal; el cuerpo, a lo mortal y cambiante.',
    ],
    relacion: 'El dualismo alma-cuerpo reproduce el dualismo ontológico entre mundo inteligible y mundo sensible. Fundamenta la inmortalidad del alma y la purificación: filosofar es liberar la razón del dominio del cuerpo.',
    terminos: ['dualismo antropológico', 'alma', 'purificación', 'inmortalidad'],
  },
  {
    id: 'carro', s: F4, obra: '«Fedro»', ref: '246a-b',
    fragmento: 'Sea el alma semejante a una fuerza natural compuesta de una pareja de caballos alados y un auriga. […] En nuestro caso, el auriga conduce una pareja de caballos: uno de ellos es bello y bueno, y de una raza semejante; el otro, de la raza y condición contrarias. Por eso, en nosotros, la conducción resulta necesariamente difícil y penosa.',
    tema: 'La estructura tripartita del alma y la dificultad de ordenarla.',
    ideas: [
      'El alma se compara con un carro alado: un auriga y dos caballos.',
      'Los caballos son distintos: uno noble y obediente, el otro de naturaleza contraria.',
      'Por eso gobernar el alma es difícil: la razón debe dirigir fuerzas que tiran en direcciones distintas.',
    ],
    relacion: 'El auriga es la parte racional, el caballo noble la irascible y el díscolo la concupiscible. Esta estructura es la base de la ética (cada parte con su virtud, y la justicia como armonía) y de la política (cada parte con una clase social).',
    terminos: ['alma tripartita', 'racional', 'irascible', 'concupiscible'],
  },
  {
    id: 'justicia-alma', s: F5, obra: '«República», libro IV', ref: '441d-e',
    fragmento: 'Seremos justos del mismo modo en que la ciudad es justa. […] La ciudad era justa porque cada uno de los tres linajes que hay en ella hacía lo suyo. […] Así, cada uno de nosotros será justo, y hará lo suyo, cuando cada una de las partes de su alma haga lo suyo. ¿Y no corresponde a lo racional mandar, puesto que es sabio y tiene a su cargo el cuidado de toda el alma, y a lo irascible ser su servidor y aliado?',
    tema: 'La justicia como armonía: cada parte del alma, igual que cada clase de la ciudad, cumple su función.',
    ideas: [
      'La justicia del individuo es análoga a la de la ciudad.',
      'La ciudad es justa cuando cada clase «hace lo suyo».',
      'El alma es justa cuando cada parte hace lo suyo: la razón manda y la parte irascible es su aliada.',
    ],
    relacion: 'Es el núcleo del paralelismo alma-ciudad: une la antropología (alma tripartita), la ética (virtudes y justicia) y la política (tres clases sociales y principio de especialización funcional).',
    terminos: ['justicia', 'armonía', 'alma tripartita', 'especialización funcional'],
  },
  {
    id: 'intelectualismo', s: F5, obra: '«Protágoras»', ref: '358c-d',
    fragmento: 'Nadie que sepa o crea que hay otras cosas mejores que las que hace, y que están a su alcance, sigue haciendo esas si puede hacer las mejores. […] Nadie va voluntariamente hacia el mal ni hacia lo que cree que es malo.',
    tema: 'El intelectualismo moral: nadie obra mal a sabiendas.',
    ideas: [
      'Quien sabe qué es lo mejor, y puede hacerlo, lo hace.',
      'Nadie elige el mal voluntariamente: quien obra mal lo hace por ignorancia, confundiendo un bien aparente con el verdadero.',
    ],
    relacion: 'Es la herencia socrática en la ética de Platón: la virtud depende del conocimiento. Por eso la educación, entendida como transformación de toda la persona, es la clave de la vida moral y de la política. Para Platón, conocer el Bien exige salir de la caverna.',
    terminos: ['intelectualismo moral', 'virtud', 'bien aparente', 'Sócrates'],
  },
  {
    id: 'filosofos-reyes', s: F6, obra: '«República», libro V', ref: '473c-d',
    fragmento: 'A menos que los filósofos reinen en las ciudades, o que los que ahora se llaman reyes y gobernantes filosofen de manera genuina y adecuada, y que coincidan en una misma persona el poder político y la filosofía, […] no habrá fin de los males para las ciudades ni, creo, tampoco para el género humano.',
    tema: 'La necesidad de que gobiernen los filósofos.',
    ideas: [
      'Poder político y filosofía deben coincidir en una misma persona.',
      'Hay dos caminos: que los filósofos gobiernen o que los gobernantes se hagan filósofos.',
      'Sin esa unión, los males de las ciudades no tendrán fin.',
    ],
    relacion: 'Gobernar es una técnica que requiere conocer el Bien, y solo la dialéctica lleva hasta él. Conecta con el regreso del filósofo a la caverna y con la crítica a la democracia y a la retórica de los sofistas.',
    terminos: ['filósofo gobernante', 'bien común', 'aristocracia'],
  },
  {
    id: 'tirania', s: F6, obra: '«República», libro VIII', ref: '564a',
    fragmento: 'La libertad excesiva no parece conducir a otra cosa que a una excesiva esclavitud, tanto para el individuo como para la ciudad. […] Es natural, entonces, que la tiranía no surja de ningún otro régimen que de la democracia: de la libertad extrema, la esclavitud más completa y más cruel.',
    tema: 'La degeneración de la democracia en tiranía.',
    ideas: [
      'El exceso de libertad desemboca en su contrario: la esclavitud.',
      'Vale tanto para el individuo como para la ciudad.',
      'Por eso la tiranía nace precisamente de la democracia.',
    ],
    relacion: 'Forma parte de la degradación de los regímenes (aristocracia, timocracia, oligarquía, democracia, tiranía), que reproduce el desorden progresivo del alma cuando los apetitos dejan de estar gobernados por la razón.',
    terminos: ['democracia', 'tiranía', 'degeneración de los regímenes'],
  },
]

export const unidad: Unidad = {
  id: 'filo-platon',
  unidad: 'Unidad 1',
  title: 'Platón',
  shortTitle: 'Platón',
  description:
    'Las Ideas y el mundo sensible, el símil de la línea, la caverna, la reminiscencia, el alma tripartita, la ética y la ciudad justa.',
  footer: 'Realidad · Conocimiento · Alma · Ética · Política',
  mapaRoot: 'Platón: realidad, conocimiento, ser humano, ética y política',
  accent: 'terracotta',
  mapa,
  fichas,
  quiz,
  Historia,
  // Ordenados por apartado del tema; dentro de cada uno se respeta el orden de arriba.
  textos: [...textos].sort((x, y) => x.s.localeCompare(y.s, 'es', { numeric: true })),
  textosAviso:
    'Los fragmentos no vienen en los apuntes: son traducciones propias de los pasajes clásicos de cada diálogo, condensadas (los […] marcan cortes), con su referencia estándar. El comentario de cada uno está construido solo con lo que explican los apuntes.',
}
