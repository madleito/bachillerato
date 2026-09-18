# Especificación: Web de Estudio — Geología 1º Bachillerato

## Contexto

Aplicación web de estudio para una alumna de 1º de Bachillerato que tiene examen de Geología (Unidad 1: Estructura de la Tierra y Tectónica de Placas). La alumna tiene tres problemas principales: los conceptos se le mezclan, no los retiene, y le resulta aburrido estudiar con apuntes tradicionales. La web debe resolver los tres problemas con cuatro herramientas de estudio integradas.

---

## Stack técnico

- **Framework**: React (single-page app, componente `.jsx`)
- **Styling**: Tailwind CSS (utility classes disponibles por defecto)
- **Librerías disponibles**: `recharts`, `lucide-react`, `lodash`, `d3`, `shadcn/ui`
- **Sin backend**: Todo el contenido está embebido en el código. No hay API, no hay base de datos, no hay localStorage.
- **Estado**: React state (`useState`, `useReducer`) para toda la interactividad
- **Idioma de la UI**: Español (castellano)

---

## Diseño y estética

### Dirección creativa
La app debe sentirse como una **revista de ciencia moderna** — editorial, limpia, con personalidad. NO debe parecer un aula virtual genérica ni una app de estudio aburrida. La idea es que estudiar con esta web sea más atractivo que releer los apuntes.

### Directrices de diseño
- **Tono visual**: Editorial científico. Colores tierra profundos (ocres, terracota, azul petróleo, gris pizarra) con acentos vibrantes puntuales (naranja volcánico, turquesa oceánico).
- **Tipografía**: Usar fuentes de Google Fonts que sean distintivas. Una display font con carácter para títulos, una serif o sans-serif elegante para cuerpo. Evitar Inter, Roboto, Arial.
- **Layout**: Generoso en espacio. Secciones bien diferenciadas. Navegación clara entre las 4 herramientas.
- **Animaciones**: Transiciones suaves entre secciones. Micro-interacciones en el quiz y las fichas (feedback visual al acertar/fallar). No abusar.
- **Responsive**: Debe funcionar bien en móvil (la alumna probablemente estudie desde el teléfono) y en desktop.

### Estructura de navegación
Header fijo con el título "Geología — Unidad 1" y 4 tabs/botones de navegación:
1. 🗺️ Mapa Conceptual
2. 📖 La Historia
3. 🃏 Fichas de Estudio
4. 🎯 Quiz

---

## Herramienta 1: Mapa Conceptual Interactivo

### Objetivo
Dar una visión global del tema entero de un vistazo. Que la alumna pueda ver cómo se relacionan todos los conceptos entre sí, sin tener que memorizar una lista lineal.

### Implementación
Un diagrama interactivo tipo árbol/red que muestre la estructura jerárquica del tema. Usar SVG o divs posicionados con conexiones visuales (líneas/flechas).

### Estructura del mapa (nodos y conexiones)

**Nodo raíz**: ESTRUCTURA DE LA TIERRA Y TECTÓNICA DE PLACAS

**Rama 1: La Tierra como sistema**
- Sistema cerrado (intercambia energía, no materia)
- Subsistemas: Geosfera, Hidrosfera, Atmósfera, Biosfera
- Motor: energía solar + calor interno

**Rama 2: Métodos de estudio del interior**
- Métodos directos:
  - Minas y simas (hasta 3.000 m)
  - Sondeos geológicos (hasta 12 km — Proyecto Mohole)
  - Volcanes (materiales de zonas profundas)
  - Orógenos (materiales de cierta profundidad afloran)
  - Limitación: solo acceden a primeros metros del manto
- Métodos indirectos:
  - Gravimétrico (anomalías en gravedad → yacimientos)
  - Temperatura (gradiente geotérmico: 3°C/100m)
  - Magnetismo terrestre (anomalías magnéticas → yacimientos de hierro)
  - Eléctrico (resistividad → aguas subterráneas, yacimientos)
  - Meteoritos (composición similar a planetesimales originales)
  - **Método sísmico** (EL MÁS IMPORTANTE — ondas P y S)

**Rama 3: Ondas sísmicas**
- Ondas P: longitudinales, 6-13 km/s, atraviesan todo (más lentas en fluidos)
- Ondas S: transversales, 3-8 km/s, NO atraviesan fluidos
- Se refractan al cambiar de medio
- Discontinuidades (donde las ondas cambian bruscamente):
  - Mohorovicic (Moho): 35-70 km (continentes) / 8-10 km (océanos) → separa corteza del manto
  - Gutenberg: 2.900 km → separa manto del núcleo externo (P bajan velocidad, S desaparecen → medio líquido)
  - Lehman: 4.900-5.150 km → separa núcleo externo del interno (P aceleran → medio sólido)

**Rama 4: Modelo geoquímico (capas composicionales)**
- Corteza:
  - Continental: 35-70 km, heterogénea, rocas antiguas (3.800 Ma), tipo granito, menos densa
    - Niveles: sedimentarias/volcánicas (arriba) → metamórficas/plutónicas ácidas → metamórficas intensas/básicas (abajo)
  - Oceánica: 8-10 km, homogénea, rocas jóvenes (180 Ma), tipo basalto, más densa
    - Capas: sedimentos → basaltos → gabros
  - Estructura horizontal: cratones/escudos, orógenos, plataformas interiores
- Manto: entre Moho y Gutenberg, peridotitas
  - Manto superior + zona de transición + manto inferior
- Núcleo: metálico (hierro, níquel, oxígeno, azufre)

**Rama 5: Modelo geodinámico (capas dinámicas)**
- Litosfera: corteza + manto superior, rígida, fracturada en placas (50 km en océanos, 100-300 km en continentes)
- Astenosfera: sólida pero próxima a fusión, ondas sísmicas se ralentizan
- Mesosfera: hasta 2.900 km (manto inferior), células convectivas, plumas del manto
- Capa D: heterogénea, origen de penachos térmicos
- Endosfera: núcleo externo (fundido) + núcleo interno (sólido), giro diferencial → campo magnético

**Rama 6: Pruebas de la tectónica de placas**
- Deriva continental (Wegener, 1912):
  - Pruebas geológicas: correlación de estructuras a ambos lados del Atlántico
  - Pruebas paleontológicas: mismos fósiles en continentes separados
  - Pruebas paleoclimáticas: tillitas en regiones hoy tropicales → Pangea
- Tectónica de placas (Holmes, 1929):
  - Corrientes de convección térmica mueven las placas
  - Fondos oceánicos: sonar → dorsales y fosas, relación con volcanes/terremotos
  - Diferencia corteza continental vs oceánica (edad, espesor, composición)
- Magnetismo de rocas:
  - Minerales ferromagnéticos se imantan al solidificar
  - Curvas de deriva polar distintas por continente → los continentes se mueven
  - Bandas magnéticas simétricas en dorsales → expansión del fondo oceánico
- Expansión del fondo oceánico (Hess, 1960):
  - Corteza se forma en dorsales, se separa
  - Más joven cerca de dorsales, más vieja cerca de continentes
  - Zonas de subducción destruyen litosfera → corteza oceánica nunca supera 200 Ma

**Rama 7: Teoría de la tectónica de placas**
- Placas: fragmentos de litosfera, flotan sobre manto plástico
- Tipos: mayoría mixtas, 8 grandes placas + menores (Pacífica = oceánica, Arábiga = continental)
- Tipos de límites:
  - Bordes pasivos (fallas transformantes): cizalla, no crea ni destruye litosfera, sismicidad por rozamiento
  - Bordes constructivos (dorsales): tensión, magma asciende, nueva corteza oceánica, vulcanismo poco explosivo, sismicidad superficial
  - Bordes destructivos (subducción/colisión): compresión
    - Oceánica bajo continental: fosa oceánica, sismicidad intensa (plano de Benioff), actividad térmica, cordilleras orogénicas
    - Oceánica bajo oceánica: fosa + arco de islas
    - Continental vs continental: gran cordillera (ej: Himalaya), sismicidad pero NO vulcanismo
- Motor de las placas:
  - Temperatura: células de convección (columnas ascendentes calientes desde capa D, columnas descendentes frías en subducción)
  - Gravedad: litosfera oceánica densa tira del resto de la placa (slab pull) + empuje lateral desde dorsales (ridge push)

### Interactividad del mapa
- Cada nodo es clicable y expande/colapsa sus subnodos
- Al hacer clic en un nodo se muestra un tooltip o panel lateral con la explicación breve
- Colores distintos por rama temática
- Estado inicial: mostrar solo los nodos de primer nivel, que la alumna vaya expandiendo

---

## Herramienta 2: La Historia (Resumen Narrativo)

### Objetivo
Reescribir todo el contenido del tema en tono conversacional, como si alguien se lo estuviera contando. Eliminar el formato apunte académico y usar analogías, humor suave y lenguaje cercano. La idea es que al leerlo le parezca interesante, no un castigo.

### Formato
Texto largo dividido en secciones con scroll. Cada sección corresponde a un bloque del tema. Usar tipografía editorial grande y legible. Incluir emojis ocasionales como recurso visual, no como decoración gratuita.

### Contenido narrativo completo

**Sección 1: "La Tierra es como una cebolla (pero más interesante)"**

La Tierra es un sistema. ¿Qué significa eso? Que sus partes no van por libre — interactúan entre ellas y forman algo más complejo que la suma de las piezas. Y es un sistema cerrado: intercambia energía con el exterior (recibe radiación del Sol, emite calor), pero prácticamente no intercambia materia. Sí, caen meteoritos y salen naves espaciales, pero en la escala del planeta eso es despreciable.

Tiene cuatro grandes subsistemas que están constantemente influyéndose entre sí: la geosfera (la parte sólida), la hidrosfera (el agua), la atmósfera (los gases) y la biosfera (los seres vivos). ¿Qué mueve todo esto? Dos fuentes de energía: el Sol desde fuera y el calor interno de la Tierra desde dentro.

**Sección 2: "¿Cómo sabemos lo que hay ahí abajo?"**

Nadie ha viajado al centro de la Tierra (perdón, Julio Verne). Lo más profundo que hemos llegado con un sondeo son unos 12 km, en el Proyecto Mohole. Y la Tierra tiene un radio de 6.371 km. Es como intentar conocer el interior de una sandía habiendo pinchado solo la cáscara.

Los **métodos directos** — minas (hasta 3 km), sondeos, volcanes que escupen material de las profundidades, y montañas donde afloran rocas originadas a profundidad — nos dan información real pero muy limitada. Solo llegamos a los primeros metros del manto.

Así que necesitamos **métodos indirectos**, que son como hacer de detective:
- El **método gravimétrico** detecta anomalías en la gravedad. Si debajo de ti hay un yacimiento de mineral muy denso, la gravedad ahí será ligeramente mayor de lo esperado. Útil para encontrar yacimientos.
- La **temperatura** aumenta 3°C cada 100 metros de profundidad (gradiente geotérmico). Pero ojo: aunque en el núcleo las temperaturas son brutales, el material no está del todo fundido porque la presión es tan enorme que mantiene las cosas en estado sólido o semifundido.
- El **magnetismo terrestre** existe porque el núcleo externo (metálico y líquido) rota a distinta velocidad que el interno. Esto crea un campo magnético. Las variaciones locales de ese campo (anomalías magnéticas) nos dicen si hay rocas ricas en hierro debajo.
- El **método eléctrico** mide la resistividad de las rocas usando electrodos. Muy preciso hasta 1.000 m, luego pierde fiabilidad. Perfecto para encontrar aguas subterráneas.
- Los **meteoritos** son como cápsulas del tiempo. Vienen del cinturón de asteroides y tienen una composición parecida a los planetesimales que formaron la Tierra, así que nos cuentan de qué está hecho el interior.
- Y el campeón indiscutible: el **método sísmico**. Es el que más información nos ha dado, y merece su propia sección.

**Sección 3: "Las ondas que lo cuentan todo"**

Cuando hay un terremoto, en el punto donde se produce (el hipocentro o foco) se generan dos tipos de ondas que viajan por el interior de la Tierra:

Las **ondas P** (primarias) son las más rápidas (6 a 13 km/s). Son longitudinales — las partículas vibran en la misma dirección en que viaja la onda, como un muelle que se comprime y se estira. Pueden atravesar cualquier medio: sólido, líquido, gas. Pero en los fluidos van más lentas.

Las **ondas S** (secundarias) son más lentas (3 a 8 km/s). Son transversales — las partículas vibran perpendiculares a la dirección de la onda, como cuando agitas una cuerda. El dato clave: NO se propagan por medios fluidos. Si las ondas S desaparecen en algún punto, es que ahí hay algo líquido.

Estas ondas cambian de velocidad y dirección (se refractan) al pasar de un material a otro. Analizando esos cambios desde muchos sismógrafos repartidos por el mundo, hemos podido mapear el interior entero de la Tierra.

Los puntos donde las ondas cambian bruscamente se llaman **discontinuidades**, y son las fronteras entre capas:
- **Mohorovicic (Moho)**: a 35-70 km en continentes, 8-10 km en océanos. Aquí P y S aceleran. Separa la corteza del manto.
- **Gutenberg**: a 2.900 km. Las P bajan velocidad y las S desaparecen por completo. Esto significa que pasamos a un medio líquido. Separa el manto del núcleo externo.
- **Lehman**: a 4.900-5.150 km. Las P aceleran de nuevo — volvemos a un medio sólido. Separa el núcleo externo del interno.

**Sección 4: "Las capas de la Tierra — versión composición"**

Hay dos formas de dividir la Tierra en capas: por composición (modelo geoquímico) y por comportamiento mecánico (modelo geodinámico). Primero la composición.

La **corteza** es la capa más externa y la más fina. Pero no toda la corteza es igual:
- La **corteza continental** es gruesa (35-70 km), variada y vieja. Sus rocas más antiguas tienen 3.800 millones de años. Está hecha de materiales menos densos, tipo granito. Si la cortas en vertical, arriba encuentras rocas sedimentarias y volcánicas, en medio metamórficas con plutónicas ácidas (diorita), y abajo rocas muy metamorfizadas con ígneas básicas (gabro).
- La **corteza oceánica** es delgada (8-10 km), homogénea y joven — nunca supera los 180 millones de años (ya veremos por qué). Más densa, tipo basalto. Tiene tres capas simples: sedimentos arriba, basaltos en medio, gabros abajo.

El **manto** va desde la Moho hasta Gutenberg. Está hecho de peridotitas. Se divide en manto superior (con una zona de transición) y manto inferior. Mismo material, pero propiedades físicas diferentes según la profundidad.

El **núcleo** es metálico: hierro y níquel, con algo de oxígeno y azufre.

**Sección 5: "Las capas de la Tierra — versión dinámica"**

Este modelo no mira de qué están hechas las capas, sino cómo se comportan mecánicamente. Y es fundamental para entender la tectónica de placas.

La **litosfera** es la capa rígida exterior: incluye toda la corteza más la parte superior del manto. Está fracturada en placas que se mueven. En los océanos llega hasta 50 km de profundidad; en los continentes, hasta 100-300 km.

La **astenosfera** está justo debajo. Es sólida, pero tan cerca del punto de fusión que se comporta de forma plástica — se deforma lentamente. Las ondas sísmicas se ralentizan aquí. Sobre ella "flotan" las placas litosféricas.

La **mesosfera** llega hasta 2.900 km (es el manto inferior). Aquí se forman las células de convección: material caliente sube desde la frontera con el núcleo y material frío baja en las zonas de subducción. También están las plumas del manto — chorros de material caliente que suben.

La **capa D** está en la base del manto, justo sobre el núcleo. Es heterogénea y ahí nacen los penachos térmicos.

La **endosfera** es el núcleo: externo (fundido) e interno (sólido). El núcleo externo gira a distinta velocidad que el interno, y ese giro diferencial genera el campo magnético terrestre.

**Sección 6: "Las pruebas del gran movimiento"**

En 1912, Alfred Wegener propuso que los continentes se mueven. Le dijeron que estaba loco. Tenía razón.

Sus pruebas de la **deriva continental**:
- **Geológicas**: si juntas Sudamérica y África, las estructuras geológicas (cratones, cinturones montañosos) encajan como piezas de puzle.
- **Paleontológicas**: los mismos fósiles aparecen en continentes que hoy están separados por océanos enteros. Los bichos no cruzaron nadando.
- **Paleoclimáticas**: se encuentran tillitas (rocas glaciares) en regiones que hoy son tropicales. Esas rocas se formaron cuando esos continentes estaban en latitudes polares.

Wegener propuso que todos formaban un supercontinente, **Pangea**, que se fragmentó.

El problema de Wegener: no supo explicar QUÉ movía los continentes. Eso lo resolvió Arthur Holmes en 1929 con las **corrientes de convección** del manto.

Las pruebas definitivas vinieron del estudio de los **fondos oceánicos** (gracias al sonar) y del **magnetismo natural de las rocas**:
- Se descubrieron dorsales oceánicas (cordilleras submarinas) y fosas oceánicas, y que los volcanes y terremotos se concentran en esos bordes.
- Los minerales de hierro en las rocas se imantan cuando el magma se solidifica, quedando "congelada" la orientación del campo magnético de ese momento. Al medir esto en rocas de distintas edades y continentes, se obtienen curvas de deriva polar que no coinciden entre sí → los continentes se mueven.
- En el fondo oceánico, las anomalías magnéticas forman bandas simétricas a ambos lados de las dorsales → el fondo se está expandiendo desde las dorsales.

Harry Hess (1960) propuso la **expansión del fondo oceánico**: la corteza se crea en las dorsales, se separa, y se destruye en las zonas de subducción. Por eso la corteza oceánica nunca tiene más de 200 millones de años — está en constante reciclaje.

**Sección 7: "Las placas y sus choques"**

Las placas litosféricas son fragmentos de litosfera de tamaño muy variable que encajan como un puzle gigante. La mayoría son mixtas (tienen parte continental y oceánica). Hay 8 grandes y varias menores. Dato: la placa del Pacífico es solo oceánica, la Arábiga es solo continental.

Se mueven flotando sobre la astenosfera plástica, y donde se encuentran (los bordes) es donde pasa la acción geológica.

**Tres tipos de bordes**:

1. **Bordes pasivos (fallas transformantes)**: Las placas se deslizan lateralmente una junto a otra. No se crea ni se destruye litosfera, pero el rozamiento genera terremotos. Ejemplo clásico: la Falla de San Andrés.

2. **Bordes constructivos (dorsales)**: Las placas se separan. El magma sube por la grieta, se solidifica y forma nueva corteza oceánica. Hay vulcanismo poco explosivo (magma basáltico muy fluido) y terremotos superficiales poco intensos. Las dorsales son cordilleras submarinas de unos 3 km de altura y 60.000 km de longitud total — una por océano.

3. **Bordes destructivos (subducción y colisión)**: Las placas chocan. Tres variantes:
   - **Oceánica bajo continental**: La oceánica (más densa y delgada) se mete debajo. Se forma una fosa oceánica, terremotos intensos que siguen un plano inclinado (plano de Benioff), actividad volcánica, y cordilleras (como los Andes).
   - **Oceánica bajo oceánica**: Una subduce bajo la otra, formando una fosa y un arco de islas volcánicas (como Japón).
   - **Continental contra continental**: Ninguna subduce fácilmente (ambas son poco densas). Se forma una cordillera enorme por compresión (como el Himalaya). Hay sismicidad pero NO vulcanismo.

**Sección 8: "¿Qué mueve todo esto?"**

El motor tiene dos componentes:

**Temperatura**: El interior de la Tierra está caliente (calor residual + desintegración radiactiva). Ese calor se transmite por convección: material caliente sube desde la capa D hasta la base de la litosfera en columnas ascendentes, y material frío baja en las zonas de subducción. Son las células de convección del manto.

**Gravedad**: Cuando la litosfera oceánica se enfría y se vuelve más densa que el material de debajo, se hunde. Al hacerlo, tira del resto de la placa como si fuera una manta que se cae de la cama (slab pull). Además, desde las dorsales hay un empuje lateral: la nueva corteza "empuja" la vieja hacia los lados (ridge push).

---

## Herramienta 3: Fichas de Estudio

### Objetivo
Tarjetas tipo flashcard con pregunta por delante y respuesta por detrás. La alumna intenta responder mentalmente y luego voltea la ficha para comprobar. Esto fuerza la recuperación activa (retrieval practice), que es el método más eficaz para fijar información en memoria.

### Mecánica
- Mostrar una ficha a la vez con la pregunta visible
- Botón para voltear y ver la respuesta
- Botones "Lo sabía ✅" / "No lo sabía ❌" para autoevalución
- Contador de progreso (X de Y fichas)
- Al terminar, resumen de aciertos/fallos con opción de repasar solo las falladas
- Opción de barajar las fichas

### Set completo de fichas (40 fichas)

1. **P**: ¿Qué tipo de sistema es la Tierra y qué implica? **R**: Sistema cerrado. Intercambia energía con el exterior pero no materia (despreciando meteoritos y naves).

2. **P**: ¿Cuáles son los 4 subsistemas de la Tierra? **R**: Geosfera, hidrosfera, atmósfera y biosfera.

3. **P**: ¿Cuáles son las dos fuentes de energía que mueven los subsistemas terrestres? **R**: La energía solar (externa) y el calor interno de la Tierra.

4. **P**: ¿Cuál es la profundidad máxima alcanzada por un sondeo geológico? **R**: 12 km (Proyecto Mohole).

5. **P**: ¿Por qué los volcanes son un método directo de estudio del interior terrestre? **R**: Porque expulsan materiales que proceden de zonas profundas de la Tierra.

6. **P**: ¿Qué limitación tienen TODOS los métodos directos? **R**: Solo tienen acceso a los primeros metros del manto.

7. **P**: ¿Qué estudia el método gravimétrico? **R**: Las anomalías (diferencias entre valores teóricos y reales) en la aceleración de la gravedad, útiles para localizar yacimientos minerales.

8. **P**: ¿Qué tres factores producen cambios en la aceleración de la gravedad? **R**: 1) El valor del radio terrestre (latitud), 2) la altitud, y 3) la masa de los materiales bajo el punto de observación.

9. **P**: ¿Qué es el gradiente geotérmico y cuál es su valor? **R**: Es el aumento de temperatura con la profundidad: 3°C por cada 100 metros.

10. **P**: ¿Por qué el material del interior terrestre no está fundido a pesar de las altas temperaturas? **R**: Porque la presión es tan elevada que mantiene los materiales en estado sólido o semifundido.

11. **P**: ¿Por qué la Tierra tiene campo magnético? **R**: Porque el núcleo externo (metálico y líquido) rota a distinta velocidad que el núcleo interno (metálico y sólido).

12. **P**: ¿Para qué sirve el método eléctrico y cuál es su limitación? **R**: Sirve para localizar yacimientos metálicos y aguas subterráneas (midiendo la resistividad eléctrica). Pierde precisión a partir de 1.000 metros.

13. **P**: ¿Por qué los meteoritos nos informan sobre el interior terrestre? **R**: Porque son planetesimales que no formaron un planeta y tienen composición similar a los que originaron la Tierra.

14. **P**: ¿Por qué el método sísmico es el más importante de los métodos indirectos? **R**: Porque es el que más datos ha aportado sobre la estructura interna y la composición del planeta, al estudiar cómo se propagan las ondas sísmicas.

15. **P**: Diferencia entre ondas P y ondas S (velocidad, tipo de vibración, propagación). **R**: P: 6-13 km/s, longitudinales, atraviesan cualquier medio (más lentas en fluidos). S: 3-8 km/s, transversales, NO se propagan en medios fluidos.

16. **P**: ¿Qué son las discontinuidades sísmicas? **R**: Zonas donde las ondas sísmicas se reflejan y refractan, indicando cambios de composición o estado físico entre capas.

17. **P**: ¿A qué profundidad está la discontinuidad de Mohorovicic y qué separa? **R**: 35-70 km (continentes) y 8-10 km (océanos). Separa la corteza del manto. Las ondas P y S aumentan su velocidad.

18. **P**: ¿A qué profundidad está la discontinuidad de Gutenberg y qué separa? **R**: 2.900 km. Separa el manto del núcleo externo. Las P disminuyen velocidad y las S dejan de transmitirse (medio líquido).

19. **P**: ¿A qué profundidad está la discontinuidad de Lehman y qué separa? **R**: 4.900-5.150 km. Separa el núcleo externo del interno. Las P aumentan velocidad (medio sólido).

20. **P**: ¿Cómo sabemos que el núcleo externo es líquido? **R**: Porque las ondas S (que no se propagan en fluidos) desaparecen al llegar a la discontinuidad de Gutenberg (2.900 km).

21. **P**: Diferencias entre corteza continental y oceánica (al menos 4). **R**: Continental: 35-70 km, heterogénea, rocas hasta 3.800 Ma, menos densa (tipo granito). Oceánica: 8-10 km, homogénea, rocas hasta 180 Ma, más densa (tipo basalto).

22. **P**: ¿Cuáles son las tres capas verticales de la corteza continental (de arriba a abajo)? **R**: 1) Rocas sedimentarias, volcánicas y plutónicas ácidas (granito). 2) Metamorfismo intermedio e ígneas intermedias (diorita). 3) Rocas muy metamorfizadas e ígneas básicas (gabro).

23. **P**: ¿Cuáles son las tres capas de la corteza oceánica? **R**: 1) Capa de sedimentos. 2) Capa de basaltos (solidificados en dorsales). 3) Gabros (composición similar al basalto pero solidificación más lenta).

24. **P**: ¿De qué material está formado el manto? **R**: Peridotitas.

25. **P**: ¿Qué composición tiene el núcleo? **R**: Metálico: hierro, níquel, oxígeno y azufre.

26. **P**: ¿Qué es la litosfera y qué incluye? **R**: Capa rígida más superficial que comprende la corteza y el manto superior. Está fracturada en placas litosféricas. 50 km en océanos, 100-300 km en continentes.

27. **P**: ¿Qué es la astenosfera y por qué es importante? **R**: Capa sólida próxima al punto de fusión (plástica). Sobre ella "flotan" y se desplazan las placas litosféricas. Las ondas sísmicas reducen su velocidad al atravesarla.

28. **P**: ¿Qué ocurre en la mesosfera? **R**: Se forman células convectivas: material caliente asciende desde el límite con el núcleo y fragmentos de litosfera fría descienden en zonas de subducción. Contiene plumas del manto.

29. **P**: ¿Qué genera el campo magnético terrestre según el modelo geodinámico? **R**: El giro diferencial del núcleo externo (líquido) respecto al interno (sólido) en la endosfera.

30. **P**: ¿Quién propuso la deriva continental y en qué año? **R**: Alfred Wegener en 1912.

31. **P**: Nombra los tres tipos de pruebas de la deriva continental. **R**: Geológicas (estructuras coinciden a ambos lados del Atlántico), paleontológicas (mismos fósiles en continentes separados) y paleoclimáticas (tillitas en zonas hoy tropicales).

32. **P**: ¿Qué es Pangea? **R**: El supercontinente que según Wegener reunía todos los continentes antes de su fragmentación.

33. **P**: ¿Qué mecanismo propuso Holmes (1929) para explicar el movimiento de las placas? **R**: Las corrientes de convección térmica en el manto.

34. **P**: ¿Cómo demuestra el paleomagnetismo que los continentes se mueven? **R**: Las curvas de deriva polar obtenidas en distintos continentes no coinciden entre sí, lo que indica que los continentes han cambiado de posición.

35. **P**: ¿Qué evidencia del fondo oceánico apoya la expansión? **R**: Las anomalías magnéticas forman bandas paralelas y simétricas a ambos lados de las dorsales → la corteza se forma en la dorsal y se separa.

36. **P**: ¿Por qué la corteza oceánica nunca supera los 200 Ma de antigüedad? **R**: Porque se crea continuamente en las dorsales y se destruye en las zonas de subducción. Está en constante reciclaje.

37. **P**: ¿Qué son los bordes pasivos y qué ejemplo famoso hay? **R**: Zonas donde las placas se deslizan lateralmente (esfuerzos de cizalla). No se crea ni destruye litosfera, pero hay sismicidad por rozamiento. Son las fallas transformantes (ej: San Andrés).

38. **P**: ¿Qué ocurre en un borde constructivo? **R**: Las placas se separan (esfuerzos de tensión), el magma asciende y solidifica formando nueva corteza oceánica. Se dan en las dorsales oceánicas. Vulcanismo poco explosivo, sismicidad superficial.

39. **P**: Describe los tres tipos de bordes destructivos y sus resultados. **R**: 1) Oceánica bajo continental: fosa, sismicidad (plano de Benioff), vulcanismo, cordilleras (Andes). 2) Oceánica bajo oceánica: fosa + arco de islas (Japón). 3) Continental vs continental: cordillera sin vulcanismo (Himalaya).

40. **P**: ¿Cuáles son las dos fuerzas que mueven las placas y cómo actúan? **R**: 1) Temperatura: convección del manto (columnas calientes suben, frías bajan). 2) Gravedad: la litosfera oceánica densa tira de la placa al hundirse (slab pull) y la nueva corteza empuja desde las dorsales (ridge push).

---

## Herramienta 4: Quiz Interactivo

### Objetivo
Test tipo examen con preguntas de opción múltiple. Feedback inmediato por pregunta. Gamificado con puntuación, barra de progreso y resultado final. Más dinámico que las fichas porque tiene respuestas concretas entre las que elegir.

### Mecánica
- 20 preguntas de opción múltiple (4 opciones cada una)
- Preguntas presentadas de una en una
- Al seleccionar una respuesta: feedback visual inmediato (verde si acierta, rojo si falla, mostrando la correcta)
- Breve explicación tras cada respuesta (1-2 frases)
- Barra de progreso
- Puntuación final con mensaje motivacional según resultado
- Botón para reiniciar con preguntas barajadas
- Las opciones dentro de cada pregunta también se barajan

### Set completo de preguntas

**Q1**: ¿Qué tipo de sistema es la Tierra?
- a) Abierto ❌
- b) Cerrado ✅
- c) Aislado ❌
- d) Semiabierto ❌
- *Explicación*: La Tierra intercambia energía con el exterior (radiación solar) pero no materia de forma significativa.

**Q2**: ¿Cuál de estos NO es un método directo de estudio del interior terrestre?
- a) Volcanes ❌
- b) Sondeos geológicos ❌
- c) Método gravimétrico ✅
- d) Minas y simas ❌
- *Explicación*: El método gravimétrico es indirecto — se basa en cálculos sobre anomalías de la gravedad, no en observación directa.

**Q3**: ¿Cuál es el valor del gradiente geotérmico?
- a) 1°C cada 100 m ❌
- b) 3°C cada 100 m ✅
- c) 5°C cada 100 m ❌
- d) 3°C cada 1.000 m ❌
- *Explicación*: La temperatura aumenta 3°C por cada 100 metros de profundidad.

**Q4**: ¿Qué tipo de ondas sísmicas NO se propagan por medios fluidos?
- a) Ondas P ❌
- b) Ondas S ✅
- c) Ambas se propagan por fluidos ❌
- d) Ninguna se propaga por fluidos ❌
- *Explicación*: Las ondas S son transversales y no pueden transmitirse en medios fluidos. Las P sí, aunque más lentamente.

**Q5**: ¿Qué discontinuidad separa la corteza del manto?
- a) Gutenberg ❌
- b) Lehman ❌
- c) Mohorovicic ✅
- d) Conrad ❌
- *Explicación*: La discontinuidad de Mohorovicic (Moho) se encuentra a 35-70 km en continentes y 8-10 km en océanos.

**Q6**: ¿Cómo sabemos que el núcleo externo es líquido?
- a) Porque las ondas P desaparecen ❌
- b) Porque las ondas S desaparecen en la discontinuidad de Gutenberg ✅
- c) Porque la temperatura es demasiado alta ❌
- d) Por el estudio de meteoritos ❌
- *Explicación*: Las ondas S no se propagan en fluidos. Al llegar a 2.900 km (Gutenberg) desaparecen, indicando un medio líquido.

**Q7**: ¿Cuál es la roca principal del manto?
- a) Granito ❌
- b) Basalto ❌
- c) Peridotita ✅
- d) Gabro ❌
- *Explicación*: El manto está formado básicamente de peridotitas, tanto en el manto superior como en el inferior.

**Q8**: La corteza oceánica es más _____ y más _____ que la continental.
- a) Gruesa y antigua ❌
- b) Delgada y joven ✅
- c) Delgada y antigua ❌
- d) Gruesa y joven ❌
- *Explicación*: La oceánica tiene 8-10 km (vs 35-70 km) y nunca supera 180 Ma (vs 3.800 Ma).

**Q9**: ¿Qué capa del modelo geodinámico es rígida y está fracturada en placas?
- a) Astenosfera ❌
- b) Mesosfera ❌
- c) Litosfera ✅
- d) Endosfera ❌
- *Explicación*: La litosfera (corteza + manto superior) es rígida y está dividida en placas litosféricas que se mueven sobre la astenosfera.

**Q10**: ¿Sobre qué capa "flotan" las placas litosféricas?
- a) Mesosfera ❌
- b) Endosfera ❌
- c) Capa D ❌
- d) Astenosfera ✅
- *Explicación*: La astenosfera es sólida pero plástica (próxima al punto de fusión), permitiendo que las placas se desplacen sobre ella.

**Q11**: ¿Quién propuso la deriva continental?
- a) Holmes ❌
- b) Hess ❌
- c) Wegener ✅
- d) Lehman ❌
- *Explicación*: Alfred Wegener propuso en 1912 que los continentes se habían movido desde un supercontinente llamado Pangea.

**Q12**: ¿Qué son las tillitas y qué prueban?
- a) Fósiles marinos que prueban la existencia de océanos antiguos ❌
- b) Rocas volcánicas que prueban la actividad magmática pasada ❌
- c) Rocas de origen glaciar que prueban que los continentes estuvieron en otras latitudes ✅
- d) Minerales magnéticos que prueban la inversión de los polos ❌
- *Explicación*: Las tillitas son rocas glaciares encontradas en regiones hoy tropicales, evidencia paleoclimática de la deriva continental.

**Q13**: ¿Qué demuestran las bandas magnéticas simétricas a ambos lados de las dorsales?
- a) Que los polos magnéticos cambian ❌
- b) Que el fondo oceánico se expande desde las dorsales ✅
- c) Que los continentes se hunden ❌
- d) Que el manto es homogéneo ❌
- *Explicación*: Las bandas simétricas muestran que la corteza se forma en la dorsal y se separa hacia ambos lados, registrando las inversiones del campo magnético.

**Q14**: ¿En qué tipo de borde se crea nueva litosfera?
- a) Bordes destructivos ❌
- b) Bordes pasivos ❌
- c) Bordes constructivos ✅
- d) Zonas de subducción ❌
- *Explicación*: En los bordes constructivos (dorsales oceánicas) el magma asciende y forma nueva corteza oceánica al solidificarse.

**Q15**: ¿Qué ocurre cuando chocan dos placas continentales?
- a) Una subduce bajo la otra ❌
- b) Se forma una fosa oceánica ❌
- c) Se forma una gran cordillera con sismicidad pero sin vulcanismo ✅
- d) Se forma un arco de islas ❌
- *Explicación*: Ambas son poco densas para subducir, así que se comprimen formando cordilleras como el Himalaya. Hay terremotos pero no volcanes.

**Q16**: ¿Qué es el plano de Benioff?
- a) La superficie de una dorsal oceánica ❌
- b) El plano inclinado donde se localizan los terremotos en una zona de subducción ✅
- c) La frontera entre el manto superior e inferior ❌
- d) El límite entre la litosfera y la astenosfera ❌
- *Explicación*: En las zonas de subducción, los terremotos se distribuyen a lo largo de un plano inclinado que sigue la placa que se hunde.

**Q17**: ¿Qué tipo de placa es la placa del Pacífico?
- a) Continental ❌
- b) Mixta ❌
- c) Oceánica ✅
- d) Subducida ❌
- *Explicación*: La placa del Pacífico es solo oceánica. La mayoría de las demás son mixtas.

**Q18**: ¿Cuál es la diferencia entre el modelo geoquímico y el geodinámico?
- a) El geoquímico clasifica por estado físico, el geodinámico por composición ❌
- b) El geoquímico clasifica por composición, el geodinámico por comportamiento mecánico ✅
- c) Son dos nombres para el mismo modelo ❌
- d) El geodinámico solo estudia el núcleo ❌
- *Explicación*: El geoquímico divide en corteza/manto/núcleo (composición). El geodinámico divide en litosfera/astenosfera/mesosfera/endosfera (comportamiento mecánico).

**Q19**: ¿Qué mecanismo principal mueve las placas litosféricas?
- a) Solo la rotación de la Tierra ❌
- b) La atracción lunar ❌
- c) Convección del manto + gravedad (slab pull y ridge push) ✅
- d) Solo el viento solar ❌
- *Explicación*: Las células de convección del manto y la fuerza gravitatoria (tirón de la placa que subduce + empuje desde las dorsales) son los dos motores.

**Q20**: ¿Por qué la corteza oceánica nunca supera los 200 millones de años?
- a) Porque se funde por el calor del Sol ❌
- b) Porque se erosiona con el agua del mar ❌
- c) Porque se crea en las dorsales y se destruye en las zonas de subducción ✅
- d) Porque los meteoritos la destruyen periódicamente ❌
- *Explicación*: La corteza oceánica se recicla constantemente: nace en las dorsales y se destruye al subducir bajo otra placa.

---

## Notas técnicas para Claude Code

1. **Todo el contenido académico** está en este spec. No necesitas buscar información adicional. Úsalo tal cual.
2. **Single file React (.jsx)**. Todo en un solo archivo. CSS con Tailwind utilities. No crear archivos separados para CSS o JS.
3. **No localStorage, no sessionStorage**. Todo el estado en React hooks.
4. **Google Fonts**: Importar con `<link>` en un wrapper o `@import` en un bloque `<style>`. Elegir fuentes con carácter (sugerencias: Fraunces para display, Source Serif 4 para cuerpo — pero Claude Code puede elegir otras que encajen con la estética editorial).
5. **Mapa conceptual**: Puede implementarse con SVG, con divs posicionados + líneas SVG, o con D3. Lo importante es que sea navegable y no un muro de texto. Los nodos deben ser expandibles/colapsables.
6. **Fichas**: Implementar animación de volteo (CSS transform rotateY). El set completo de 40 fichas está arriba.
7. **Quiz**: Las 20 preguntas están arriba con sus opciones y explicaciones. Barajar preguntas y opciones al iniciar.
8. **La Historia**: Es texto largo con buen styling editorial. Secciones con headings, párrafos generosos, buena legibilidad. Puede incluir highlighting de términos clave.
9. **Mobile-first**: La alumna probablemente use el móvil. Asegurar que todo funcione bien en pantallas pequeñas.
10. **Performance**: Con 40 fichas y 20 preguntas, no debería haber problemas, pero mantener el JSX limpio y evitar re-renders innecesarios.
