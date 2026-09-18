import type { Ficha, Pregunta, RamaMapa, Unidad } from '../../types'
import { AI, Divider, K } from '../../components/ui'

// ─── Mapa conceptual ───
const mapa: RamaMapa[] = [
  {
    id: 'capas-fluidas', label: '1. Las capas fluidas de la Tierra', color: 'turquoise',
    children: [
      { id: 'cf-intro', label: 'Procesos geodinámicos externos', detail: 'Se producen en la superficie terrestre o cerca de ella, debido a la fuerza gravitatoria o a la energía procedente del Sol. Producen meteorización, transporte y sedimentación. Trasvase de materiales desde zonas elevadas a cuencas sedimentarias. Modelado del relieve. Principales agentes: lluvia, ríos, viento, mar y hielo.' },
      { id: 'cf-atmosfera', label: '1.1 Estructura y funciones de la atmósfera', children: [
        { id: 'cf-atm-fn', label: 'Funciones', children: [
          { id: 'cf-atm-fn1', label: 'Filtrar radiaciones solares', detail: 'En la ionosfera y la capa de ozono se filtran rayos X, gamma o ultravioleta.' },
          { id: 'cf-atm-fn2', label: 'Regular la temperatura del planeta', detail: 'Durante el día la atmósfera refleja alrededor de un tercio de la radiación. Por la noche, el efecto invernadero natural regula la temperatura.' },
          { id: 'cf-atm-fn3', label: 'Distribuir calor del ecuador a los polos', detail: 'A través de los vientos, amortiguando las diferencias de temperatura entre ellos.' },
          { id: 'cf-atm-fn4', label: 'Suministrar gases para respiración y fotosíntesis' },
          { id: 'cf-atm-fn5', label: 'Participar activamente en el ciclo hidrológico' },
        ]},
        { id: 'cf-atm-est', label: 'Estructura', detail: 'El 75% de los gases se concentran en la troposfera. Capas: Troposfera, Estratosfera (ozono), Mesosfera, Termosfera y Exosfera.' },
      ]},
      { id: 'cf-din-atm', label: '1.2 Dinámica atmosférica. Interacción con la geosfera', children: [
        { id: 'cf-din-vert', label: 'Movimientos verticales (convección)', detail: 'Dan lugar a la formación de borrascas (masa de aire cálido que asciende; su "vacío" es rellenado por el aire que la rodea) y anticiclones (masa de aire frío que desciende).' },
        { id: 'cf-din-hor', label: 'Movimientos horizontales (vientos)', detail: 'En superficie los vientos se mueven desde las zonas de alta presión (anticiclones) a las de baja presión (borrascas).' },
        { id: 'cf-din-acc', label: 'Acción geológica de la atmósfera', detail: 'Es consecuencia tanto de su composición como de su dinámica.' },
      ]},
      { id: 'cf-hidrosfera', label: '1.3 Estructura y funciones de la hidrosfera', children: [
        { id: 'cf-hid-dist', label: 'Distribución del agua en la Tierra', detail: 'Agua total 100%: océanos 97,5% (salada) y agua dulce 2,5%. Dentro del agua dulce: glaciares 68,7%; aguas subterráneas 30,1%; permafrost 0,8%; aguas superficiales y atmósfera 0,4%. Dentro de superficiales/atmósfera: atmósfera 9,5%, humedad del suelo 12,2%, lagos 67,4%, otros humedales 8,5%, ríos 1,6%, plantas y animales 0,8%.' },
        { id: 'cf-hid-fn', label: 'Funciones', children: [
          { id: 'cf-hid-fn1', label: 'Suaviza temperaturas en áreas costeras' },
          { id: 'cf-hid-fn2', label: 'Composición de los seres vivos', detail: 'Donde realiza otras funciones como disolución, transporte, regulador, etc.' },
          { id: 'cf-hid-fn3', label: 'Transferencia de líquido entre océanos y continentes', detail: 'El ciclo del agua: 1) Evaporación, 2) Condensación, 3) Precipitación, 4) Escorrentía superficial, 5) Infiltración, 6) Escorrentía subterránea.' },
          { id: 'cf-hid-fn4', label: 'Almacena CO₂ en disolución', detail: 'A partir de él los organismos lo fijan para formar caparazones o esqueletos.' },
          { id: 'cf-hid-fn5', label: 'Favorece el magmatismo', detail: 'Con su presencia, sobre todo en las zonas de subducción.' },
        ]},
      ]},
      { id: 'cf-din-hid', label: '1.4 Dinámica de la hidrosfera. Relación con los procesos externos', children: [
        { id: 'cf-mov', label: 'Movimientos del agua marina', children: [
          { id: 'cf-mov-ole', label: 'Oleaje', detail: 'Las olas son producidas por la acción del viento sobre la superficie del mar.' },
          { id: 'cf-mov-mar', label: 'Mareas', detail: 'Oscilaciones debidas a la atracción gravitatoria de la Luna y el Sol.' },
          { id: 'cf-mov-cor', label: 'Corrientes', detail: 'Movimientos del agua por diferencia de densidad debido a cambios en la temperatura o la salinidad — corrientes termohalinas.' },
        ]},
        { id: 'cf-acc-hid', label: 'Acción geológica de la hidrosfera', children: [
          { id: 'cf-acc-1', label: 'Relacionada con el clima y la localización', detail: 'Tipo de clima (frío, templado) y localización del agua (superficial o subterránea, continental u oceánica, etc.).' },
          { id: 'cf-acc-2', label: 'Escorrentía superficial', detail: 'Apenas supone un 0,0001% del total de la hidrosfera, pero es el principal agente erosivo y de transporte en la superficie terrestre.' },
          { id: 'cf-acc-3', label: 'Hielo glaciar', detail: 'Gran capacidad modeladora, pero su acción se reduce a las zonas polares y de montaña, donde, además, cada vez los glaciares son más reducidos.' },
          { id: 'cf-acc-4', label: 'Aguas subterráneas', detail: 'Tienen poder modelador cuando actúan sobre rocas solubles, como zonas calizas, dando lugar al modelado kárstico.' },
          { id: 'cf-acc-5', label: 'Océanos', detail: 'Concentran su actividad erosiva en el litoral debido a la acción del oleaje.' },
          { id: 'cf-acc-6', label: 'Meteorización de las rocas', detail: 'La hidrosfera también ejerce un papel importante por medio de la disolución, hidrólisis, efecto hielo-deshielo, etc.' },
        ]},
      ]},
    ],
  },
  {
    id: 'meteorizacion', label: '2. La meteorización', color: 'ochre',
    children: [
      { id: 'mt-def', label: 'Definición', detail: 'Conjunto de cambios que sufren los materiales de la litosfera en contacto con la atmósfera, la hidrosfera o la biosfera.' },
      { id: 'mt-tipos', label: 'Tipos', detail: 'Físicas y química.' },
      { id: 'mt-agentes', label: 'Agentes causantes', detail: 'Agua, hielo, viento y esfuerzos tectónicos.' },
      { id: 'mt-procesos', label: 'Procesos generales', detail: 'Descomponen las rocas volviéndolas menos compactas (facilita el transporte), las fragmentan o cambian su composición.' },
      { id: 'mt-formula', label: 'EROSIÓN = METEORIZACIÓN + TRANSPORTE' },
      { id: 'mt-dif', label: 'Meteorización diferencial', detail: 'Cuando existen litologías diferentes, cada roca es sensible a la meteorización de forma diferente.' },
      { id: 'mt-fisica', label: '2.1 Meteorización física', children: [
        { id: 'mt-f-def', label: 'Definición', detail: 'Fisuración, rotura o disgregación de las rocas. Ocurre sin que cambie su composición química. Ocurre antes que la alteración química y facilita las transformaciones químicas posteriores.' },
        { id: 'mt-f-causas', label: 'Causas', detail: 'Esfuerzos compresivos, esfuerzos de relajación, variaciones de temperatura o seres vivos.' },
        { id: 'mt-f-gel', label: 'Gelifracción o crioclastia', detail: 'Rotura de las rocas producida por el hielo. El agua se acumula en las grietas, al helarse aumenta su volumen y el hielo actúa a modo de cuña abriendo las fracturas. La repetición y la gravedad hacen que las fisuras profundicen, hasta que la roca se desmorona y cuartea.' },
        { id: 'mt-f-hal', label: 'Haloclasticidad o crecimiento de sales', detail: 'Al evaporarse el agua de las rocas en zonas costeras y áridas, las sales minerales precipitan formando pequeños cristales que presionan los granos de las rocas y los expulsan.' },
        { id: 'mt-f-ter', label: 'Termoclastia', detail: 'Disgregación de las rocas sometidas a constantes subidas y bajadas de temperatura. Los minerales se dilatan o disminuyen su volumen de forma desigual y entre los granos se forman microfracturas que terminan disgregando la roca.' },
        { id: 'mt-f-dia', label: 'Diaclasado por descompresión o lajamiento', detail: 'Actúan de forma compresiva (plegamientos o fracturaciones) y también de forma distensiva (fracturas de descompresión). Facilitan la actuación de otros procesos de erosión.' },
      ]},
      { id: 'mt-quimica', label: '2.2 Meteorización química', children: [
        { id: 'mt-q-def', label: 'Definición', detail: 'Modifica la composición de las rocas. Principales agentes: el agua, el oxígeno y el dióxido de carbono.' },
        { id: 'mt-q-hidr', label: 'Hidrólisis', detail: 'Rotura de la estructura mineral por la acción del OH⁻ y H⁺ procedentes de la disociación del agua. OH⁻ actúan como bases y H⁺ como ácidos sobre minerales y rocas. La acción del agua puede transformar los silicatos en arcillas.' },
        { id: 'mt-q-ox', label: 'Oxidación-reducción', detail: 'Oxidación: pérdida de electrones. Reducción: ganancia de electrones. En la naturaleza ocurren cuando el oxígeno o el hidrógeno se unen a minerales o rocas que contienen elementos metálicos.' },
        { id: 'mt-q-carb', label: 'Carbonatación', detail: 'Tipo de disolución en la que interviene el ion carbonato, formado cuando el agua contiene dióxido de carbono. Transforma compuestos insolubles en solubles. Importante en la alteración química de carbonatos y silicatos.' },
        { id: 'mt-q-dis', label: 'Disolución', detail: 'Separación de los iones que componen una sal en el seno del agua, como ocurre con la halita o el yeso. Los iones son transportados por separado y pueden depositarse posteriormente formando sales diferentes o iguales a las de la roca madre.' },
        { id: 'mt-q-hidrat', label: 'Hidratación', detail: 'Modificación de un mineral al introducirse agua en su estructura. Así sucede con las arcillas, cuando se hidratan y aumentan su volumen.' },
      ]},
      { id: 'mt-biosfera', label: '2.3 El papel de la biosfera en la meteorización', children: [
        { id: 'mt-b-int', label: 'Los seres vivos como agentes', detail: 'Son agentes de meteorización muy eficaces, tanto de forma física como química.' },
        { id: 'mt-b-bio', label: 'Bioclastia', detail: 'Rotura de las rocas producida por los seres vivos. Las raíces de los árboles, al introducirse en las grietas, ejercen presión por aumento de volumen al crecer y ensancharse. Los animales excavadores desgastan la roca mediante la acción zarpa.' },
        { id: 'mt-b-hum', label: 'El ser humano como agente geológico externo', detail: 'Meteorización, transporte y sedimentación pueden ser favorecidos por los seres humanos.' },
      ]},
      { id: 'mt-productos', label: '2.4 Productos resultantes de la meteorización', children: [
        { id: 'mt-p-ber', label: 'Génesis de un berrocal granítico' },
      ]},
    ],
  },
  {
    id: 'suelo', label: '3. El suelo', color: 'terracotta',
    children: [
      { id: 'su-def', label: 'Definición', detail: 'Resultado de la meteorización física, química y biológica. La capa superficial es capaz de sustentar la vegetación. Es la compleja interfase entre los cuatro subsistemas terrestres: biosfera, geosfera, atmósfera e hidrosfera.' },
      { id: 'su-perfil', label: '3.1 El perfil del suelo', children: [
        { id: 'su-h-o', label: 'Horizonte 0', detail: 'Restos vegetales.' },
        { id: 'su-h-a', label: 'Horizonte A o de lixiviación', detail: 'Gran cantidad de materia orgánica tanto viva como en descomposición.' },
        { id: 'su-h-b', label: 'Horizonte B o de acumulación', detail: 'Suele acumular óxidos y arcillas procedentes de lixiviación.' },
        { id: 'su-h-c', label: 'Horizonte C', detail: 'Fragmentos de roca madre meteorizados.' },
      ]},
      { id: 'su-factores', label: '3.2 Factores que controlan el desarrollo del suelo', detail: 'El tipo de suelo y el espesor de los horizontes depende de factores como: el clima, la roca madre, el tiempo, la acción de los seres vivos y la pendiente del terreno.' },
      { id: 'su-degr', label: '3.3 Degradación y protección del suelo', children: [
        { id: 'su-d-fact', label: 'Factores naturales de degradación', detail: 'La pendiente, vientos intensos y lluvias torrenciales fundamentalmente.' },
        { id: 'su-d-bio', label: 'Biostasia', detail: 'Períodos favorables para la formación de suelos, cálidos y lluviosos (interglaciares).' },
        { id: 'su-d-rex', label: 'Rexistasia', detail: 'Períodos de erosión acelerada (períodos áridos o glaciares).' },
        { id: 'su-d-des', label: 'Desertificación', detail: 'Aceleración de la pérdida de suelo debido a causas antrópicas.' },
      ]},
      { id: 'su-edafo', label: '3.4 La edafodiversidad', children: [
        { id: 'su-e-edaf', label: 'Edafología', detail: 'Ciencia multidisciplinar que estudia los suelos. Relaciona ramas como la Geología, Química, Biología, Física, Geografía…' },
        { id: 'su-e-div', label: 'Edafodiversidad', detail: 'Variedad de suelos que existen en un territorio. Se representa con mapas de suelos.' },
        { id: 'su-e-zon', label: 'Suelos zonales', detail: 'Suelos con horizontes bien desarrollados, relacionados con el área climática en la que se encuentran.' },
        { id: 'su-e-azon', label: 'Suelos azonales', detail: 'Suelos poco desarrollados o juveniles, que apenas tienen relación con el área climática en la que se encuentran.' },
        { id: 'su-e-uso', label: 'Variedad y uso', detail: 'Dependiendo de la escala, en una misma zona climática hay gran variedad de suelos. Esto hace que unos sean más propicios para el uso agrario, ganadero o forestal.' },
      ]},
      { id: 'su-geodiv', label: '3.4 Geodiversidad y patrimonio geológico', children: [
        { id: 'su-g-def', label: 'Geodiversidad', detail: 'Variedad de elementos y estructuras geológicas de un territorio.' },
        { id: 'su-g-pat', label: 'Patrimonio geológico', detail: 'Reconocido por la UNESCO a través de una figura de protección internacional: los Geoparques.' },
      ]},
    ],
  },
  {
    id: 'erosion', label: '4. Erosión, transporte y sedimentación', color: 'petrol',
    children: [
      { id: 'er-def', label: 'Definición de erosión', detail: 'Movilización (por el agua, el hielo o el aire) de los materiales que se producen como consecuencia de la meteorización de las rocas.' },
      { id: 'er-formula', label: 'EROSIÓN = METEORIZACIÓN + TRANSPORTE' },
      { id: 'er-ciclo', label: 'Ciclo erosivo y sedimentario', detail: 'Tienden a suavizar el relieve porque retiran de las zonas elevadas materiales que posteriormente colocan en las zonas deprimidas.' },
      { id: 'er-abr', label: 'Abrasión y corrosión', detail: 'Abrasión: desgaste homogéneo. Corrosión: desgaste selectivo que deja oquedades en la roca.' },
      { id: 'er-mec', label: 'Mecanismos de erosión', detail: 'Dependen de los agentes geológicos que actúen, del tipo de roca y del relieve existente.' },
      { id: 'er-trans', label: '4.1 Madurez de sedimentos y agentes de transporte', children: [
        { id: 'er-t-def', label: 'El transporte', detail: 'Traslado de materiales disgregados. Depende tanto del agente geológico como de las características de los materiales. Durante el transporte los materiales se desgastan, se redondean, aplanan, pulen y/o se acumulan en las cuencas sedimentarias ordenados por densidades y tamaños.' },
        { id: 'er-t-formas', label: 'Formas de transporte', children: [
          { id: 'er-t-f1', label: 'Disolución', detail: 'Los materiales viajan como iones en el seno del agua.' },
          { id: 'er-t-f2', label: 'Flotación', detail: 'Los materiales se desplazan sobre el agente de transporte.' },
          { id: 'er-t-f3', label: 'Rodadura, arrastre o saltación', detail: 'Si los materiales se desplazan en contacto con el lecho girando, deslizándose sobre él o mediante pequeños saltos con elevaciones y caídas.' },
          { id: 'er-t-f4', label: 'En suspensión', detail: 'Si las partículas van incluidas en el interior del medio material. Las arenas o los limos viajan en el seno del aire o del agua.' },
        ]},
        { id: 'er-t-ag', label: 'Agentes de transporte', children: [
          { id: 'er-t-a1', label: 'Viento', detail: 'En contacto con el suelo o por suspensión cuando el material va incluido en el aire.' },
          { id: 'er-t-a2', label: 'Ríos', detail: 'En contacto con el lecho fluvial, suspendidos dentro de la masa de agua, o en disolución (como las sales, separando los iones).' },
          { id: 'er-t-a3', label: 'Aguas del mar', detail: 'Transportan los materiales impulsados por las olas, corrientes o mareas, de la misma forma que las aguas fluviales.' },
          { id: 'er-t-a4', label: 'Hielos glaciares', detail: 'El transporte se da sobre la superficie del hielo, englobadas en el hielo o arrastrándolas sobre el lecho.' },
          { id: 'er-t-a5', label: 'Acción de la gravedad', detail: 'Responsable del transporte de los materiales por deslizamiento cuando los relieves presentan inclinación.' },
        ]},
      ]},
      { id: 'er-sedim', label: '4.2 La sedimentación y estratificación', children: [
        { id: 'er-s-def', label: 'Sedimentación', detail: 'Asentamiento de los materiales en las cuencas sedimentarias. Se produce cuando el medio de transporte pierde capacidad para seguir transportando.' },
        { id: 'er-s-est', label: 'Estratos', detail: 'Durante la sedimentación los materiales se acumulan en capas superpuestas llamadas estratos.' },
        { id: 'er-s-tipos', label: 'Tipos de sedimentación', children: [
          { id: 'er-s-t1', label: 'Deposición', detail: 'Se depositan los materiales de mayor tamaño, al disminuir la velocidad de la corriente.' },
          { id: 'er-s-t2', label: 'Decantación', detail: 'Los materiales que viajan en suspensión decantan debido a la fuerza de la gravedad.' },
          { id: 'er-s-t3', label: 'Precipitación', detail: 'Los materiales disueltos precipitan cuando aumenta mucho su concentración.' },
        ]},
      ]},
    ],
  },
  {
    id: 'gravitacionales', label: '5. Procesos gravitacionales y sus riesgos', color: 'volcanic',
    children: [
      { id: 'gr-def', label: 'Definición', detail: 'Procesos gravitacionales o movimientos en masa: movimientos descendentes de los materiales que componen una ladera debido a la acción de la gravedad. Se producen cuando la fuerza de la gravedad supera la cohesión interna de los materiales.' },
      { id: 'gr-causas', label: 'Causas que los desencadenan', children: [
        { id: 'gr-c1', label: 'Aumento de agua' },
        { id: 'gr-c2', label: 'Vibraciones' },
        { id: 'gr-c3', label: 'Debilitamiento de base' },
        { id: 'gr-c4', label: 'Eliminación de vegetación' },
      ]},
      { id: 'gr-tipos', label: 'Tipos', children: [
        { id: 'gr-t1', label: 'Desprendimientos', detail: 'Caída libre de los materiales.' },
        { id: 'gr-t2', label: 'Deslizamientos', detail: 'A partir de una o varias superficies de rotura se desliza la masa.' },
        { id: 'gr-t3', label: 'Flujos', detail: 'Los materiales se comportan como un fluido viscoso. Pueden ser de materiales finos (coladas de barro) o de materiales gruesos (derrubios).' },
      ]},
    ],
  },
  {
    id: 'aguas-sup', label: '6. Acción geológica de las aguas superficiales', color: 'turquoise',
    children: [
      { id: 'as-modelados', label: 'Modelados', detail: 'Continentales, de transición y marinos. Dominan los procesos erosivos sobre los sedimentarios: glaciares, eólicos, lacustres, fluviales, kársticos.' },
      { id: 'as-arroyada', label: '6.1 Aguas de arroyada y los torrentes', children: [
        { id: 'as-arr-1', label: 'Aguas salvajes o de arroyada', detail: 'Discurren por la superficie del terreno sin un cauce fijo. Su acción erosiva es mayor en suelos con materiales finos (arcillas y margas). Se originan cárcavas y barrancos que forman un paisaje denominado badlands.' },
        { id: 'as-arr-2', label: 'Torrentes', detail: 'Cauces permanentes, pero el caudal es intermitente. El agua recogida en las montañas se canaliza a gran velocidad y, cuando se pierde la pendiente, se depositan los materiales formando un cono de deyección o abanico aluvial.' },
        { id: 'as-arr-3', label: 'Ramblas', detail: 'Se producen cuando el contraste de pendiente es menor en regiones mediterráneas o subdesérticas.' },
      ]},
      { id: 'as-rios', label: '6.2 Acción modeladora de los ríos', children: [
        { id: 'as-rio-1', label: 'Valles en V', detail: 'Producidos por los ríos que excavan valles con perfil transversal en V.' },
        { id: 'as-rio-2', label: 'Materiales transportados', detail: 'Pueden encontrarse en el lecho del río, a ambos lados del cauce formando terrazas, o en la boca de los barrancos formando abanicos aluviales.' },
        { id: 'as-rio-3', label: 'Inundaciones', detail: 'Los desastres naturales más frecuentes y los que más víctimas y daños materiales causan.' },
      ]},
      { id: 'as-mar', label: '6.3 Acción geológica del mar: el modelado del litoral', children: [
        { id: 'as-mar-int', label: 'Límite mar-continente', detail: 'Se desarrollan playas, acantilados, estuarios, albuferas o deltas por la influencia de los agentes continentales y marinos. Las zonas costeras son los ambientes más dinámicos y cambiantes del planeta.' },
        { id: 'as-mar-fact', label: 'Factores que influyen', children: [
          { id: 'as-mar-f1', label: 'Épocas glaciares y tectónica global', detail: 'Con regresiones y transgresiones del mar.' },
          { id: 'as-mar-f2', label: 'Intensidad y dirección de oleaje y corrientes marinas' },
          { id: 'as-mar-f3', label: 'Contorno de la costa', detail: 'Modifica la erosión y sedimentación.' },
          { id: 'as-mar-f4', label: 'Tipo de rocas y sedimentos que forman el sustrato' },
          { id: 'as-mar-f5', label: 'Aportes de los ríos (sedimentación fluvial)' },
          { id: 'as-mar-f6', label: 'Impacto de la actividad humana' },
        ]},
        { id: 'as-mar-pl', label: 'Playas', detail: 'Formadas por una franja de sedimentos que ocupan la ribera entre las aguas del mar y el continente. Los sedimentos son las arenas que los ríos han dejado en la desembocadura y los restos de conchas. En la parte sumergida se forman barras y cordones litorales, y en la emergida se forman dunas debido a la acción del viento.' },
        { id: 'as-mar-ac', label: 'Acantilados', detail: 'Escarpes del litoral formados por acción directa del oleaje cuando la costa queda elevada respecto al nivel del mar. La erosión provoca un continuo retroceso. Fases: 1) Erosión debida al oleaje, 2) Socavamiento de las rocas, 3) Rocas a punto de desplomarse, 4) Plataforma de abrasión.' },
        { id: 'as-mar-al', label: 'Albuferas', detail: 'Llanuras lacustres separadas del mar por una barra. Los depósitos que se forman son de material fino y están surcados por canales.' },
        { id: 'as-mar-de', label: 'Deltas', detail: 'Se forman con materiales transportados por los ríos y depositados en la desembocadura porque el mar no tiene suficiente energía para arrastrarlos hacia el interior. Los depósitos de origen fluvial (arenosos) están intercalados con otros de origen marino (calcáreos). Se acumulan abundantes restos vegetales.' },
        { id: 'as-mar-es', label: 'Estuarios', detail: 'Producidos en la desembocadura de los ríos en mares con suficiente energía para arrastrar los depósitos hacia el interior y erosionar la desembocadura del río.' },
        { id: 'as-mar-pred', label: 'Predominio marino', detail: 'Más del 70% de la superficie terrestre se encuentra en las áreas marinas, donde predomina la sedimentación sobre la erosión.' },
        { id: 'as-mar-pf', label: 'Zonas de plataforma', detail: 'Zonas de enlace con los fondos oceánicos donde se acumulan materiales calcáreos junto con otros procedentes del continente. Áreas con relieve poco acusado y pendientes suaves. Gran importancia económica por la riqueza pesquera y los hidrocarburos que contienen.' },
        { id: 'as-mar-arr', label: 'Arrecifes', detail: 'Construcciones formadas por esqueletos de pólipos que se desarrollan sobre las plataformas.' },
        { id: 'as-mar-tal', label: 'Talud', detail: 'Área de fuerte pendiente situada al final de la plataforma; en cuyo borde se forman depósitos sedimentarios de gran potencia.' },
        { id: 'as-mar-can', label: 'Cañones submarinos', detail: 'Incisiones erosivas profundas en la plataforma y el talud, dispuestas más o menos perpendicularmente a la línea de costa.' },
        { id: 'as-mar-fo', label: 'Zonas de fondos oceánicos', detail: 'Sus sedimentos, de procedencia exclusivamente marina, son escasos y su potencia va disminuyendo a medida que se alejan del continente.' },
      ]},
      { id: 'as-karst', label: '6.4 Aguas subterráneas y modelado kárstico', children: [
        { id: 'as-k-cond', label: 'Condición', detail: 'Las aguas subterráneas sólo tienen acción modeladora si actúan sobre rocas solubles o que puedan sufrir carbonatación.' },
        { id: 'as-k-form', label: 'Formas que generan', detail: 'En terrenos carbonatados las aguas ácidas producen disolución y generan cuevas y galerías. Cuando las condiciones son favorables, los iones precipitan y se forman espeleotemas (estalactitas y estalagmitas).' },
        { id: 'as-k-pais', label: 'Paisajes kársticos', detail: 'Las aguas ácidas generan formas características en superficie y subterráneas: lapiaz o lenar, cañón, poljés, sumidero, dolina, sima, surgencia, galería, caverna, estalactitas, estalagmitas.' },
        { id: 'as-k-sens', label: 'Sensibilidad de las aguas subterráneas', detail: 'Son muy sensibles a la contaminación por lixiviados y a la sobreexplotación (puede ocasionar intrusión marina).' },
      ]},
    ],
  },
  {
    id: 'hielo', label: '7. Acción geológica del hielo', color: 'petrol',
    children: [
      { id: 'hi-def', label: 'Glaciares', detail: 'Producidos por el lento discurrir del hielo existente en las altas montañas y en las latitudes polares. Los materiales que transportan y depositan los glaciares están desordenados, poco seleccionados.' },
      { id: 'hi-mor', label: 'Morrenas', detail: 'Cuando las lenguas glaciares pierden competencia para seguir transportando el material rocoso, este se acumula formando morrenas.' },
      { id: 'hi-circos', label: 'Circos glaciares', detail: 'Depresiones en forma de anfiteatro formadas por la acción del hielo en zonas de alta montaña.' },
      { id: 'hi-valles', label: 'Valles en U', detail: 'Los hielos producen una acción erosiva intensa y generan valles con perfil transversal en U.' },
    ],
  },
  {
    id: 'viento', label: '8. Relieves generados por el viento', color: 'ochre',
    children: [
      { id: 'vi-eol', label: 'Eólicos', detail: 'Causados por el viento, que erosiona las partículas finas (arenas, limos y arcillas) pero no las piedras y fragmentos rocosos de mayor tamaño (desierto de piedras o reg).' },
      { id: 'vi-defl', label: 'Deflación', detail: 'Se produce por eliminación de la fracción arenosa, dejando el pavimento expuesto formando desiertos denominados reg.' },
      { id: 'vi-abr', label: 'Abrasión', detail: 'Sobre las superficies rocosas el viento produce mucho desgaste o abrasión: taffoni y ventifactos.' },
      { id: 'vi-dunas', label: 'Dunas', detail: 'Las arenas y limos que ha transportado el viento pueden depositarse y formar montículos de gran tamaño: las dunas.' },
      { id: 'vi-loess', label: 'Loess', detail: 'Los limos pueden cubrir grandes extensiones, muy aptas para el cultivo, formando depósitos llamados loess.' },
    ],
  },
  {
    id: 'rocas-sed', label: '9. Rocas sedimentarias', color: 'terracotta',
    children: [
      { id: 'rs-car', label: 'Características de una roca sedimentaria', detail: 'Estratificación, estructura, textura, composición.' },
      { id: 'rs-detr', label: 'Rocas sedimentarias detríticas', children: [
        { id: 'rs-d-def', label: 'Definición', detail: 'Formadas por acumulación de fragmentos rocosos. Se clasifican según el tamaño de estos fragmentos o clastos.' },
        { id: 'rs-d-con', label: 'Conglomerado', detail: 'Formados por cantos grandes. Si los cantos son redondeados se llama pudinga, y si son angulosos, brecha.' },
        { id: 'rs-d-ar', label: 'Arenisca', detail: 'Formada por arenas cementadas.' },
        { id: 'rs-d-lu', label: 'Lutita', detail: 'Formada por partículas de menor tamaño que las arenas.' },
      ]},
      { id: 'rs-org', label: 'Rocas sedimentarias organógenas', children: [
        { id: 'rs-o-def', label: 'Definición', detail: 'Resultan de la acumulación de restos orgánicos y de la actividad metabólica de seres vivos.' },
        { id: 'rs-o-carb', label: 'Carbón', detail: 'Se forma a partir de restos vegetales enterrados rápidamente que han sufrido un proceso de transformación bacteriana en condiciones reductoras. Tipos: turba, lignito, hulla, antracita.' },
        { id: 'rs-o-pet', label: 'Petróleo', detail: 'Mezcla de hidrocarburos formados a partir de plancton marino enterrado.' },
      ]},
      { id: 'rs-quim', label: 'Rocas sedimentarias químicas o bioquímicas', children: [
        { id: 'rs-q-def', label: 'Definición', detail: 'Se forman por precipitación química o por la actividad metabólica de organismos vivos.' },
        { id: 'rs-q-sil', label: 'Silíceas', detail: 'Constituidas por cuarzo microcristalino precipitado, como el sílex, la calcedonia o el ópalo.' },
        { id: 'rs-q-car', label: 'Carbonatadas', detail: 'Se producen por precipitación de carbonatos de calcio y magnesio, como las calizas y dolomías.' },
        { id: 'rs-q-ev', label: 'Evaporíticas', detail: 'Se producen por evaporación y precipitación, como el yeso, la sal gema o la silvina.' },
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
        <p className="font-body text-sm uppercase tracking-widest text-turquoise mb-3">Unidad 3 · Resumen narrativo</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-tierra-charcoal leading-tight mb-4">
          La Tierra que se reescribe por fuera
        </h2>
        <p className="font-body text-lg text-tierra-slate leading-relaxed">
          Lo que pasa en la superficie y un poco por encima de ella: cómo la atmósfera y el agua moldean el relieve, cómo se rompen y disuelven las rocas, cómo se construyen los suelos y a qué dan lugar todos esos materiales que viajan ladera abajo.
        </p>
      </header>

      {/* Sección 1 · Las capas fluidas */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          1. La Tierra tiene capas que sí se mueven<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">atmósfera e hidrosfera</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Hasta aquí hemos visto la Tierra por dentro. Ahora toca lo de fuera. Los <K>procesos geodinámicos externos</K> ocurren en la superficie terrestre o cerca de ella, y los mueven dos motores muy distintos a los que vimos en la unidad anterior: la <K>fuerza gravitatoria</K> y la <K>energía procedente del Sol</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          ¿Qué hacen estos procesos? Tres cosas: <K>meteorización</K>, <K>transporte</K> y <K>sedimentación</K>. Trasvasan materiales desde las zonas elevadas hacia las cuencas sedimentarias y van modelando el relieve. Los protagonistas son cinco agentes que conoces de toda la vida: la <K>lluvia</K>, los <K>ríos</K>, el <K>viento</K>, el <K>mar</K> y el <K>hielo</K>.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">La atmósfera y para qué sirve</h4>
        <p className="font-body text-lg leading-relaxed mb-2">
          La atmósfera tiene cinco trabajos:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Filtrar las radiaciones solares</K> en la ionosfera y la capa de ozono — rayos X, gamma o ultravioleta.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Regular la temperatura del planeta</K>: durante el día refleja alrededor de un tercio de la radiación que llega; por la noche, el efecto invernadero natural regula la temperatura.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Distribuir el calor</K> desde el ecuador a los polos a través de los vientos, amortiguando las diferencias de temperatura entre ellos.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Suministrar los gases necesarios para la <K>respiración</K> y la <K>fotosíntesis</K>.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Participar activamente en el <K>ciclo hidrológico</K>.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          Un dato importante de su estructura: <K>el 75% de los gases se concentran en la troposfera</K>, la capa más baja. Por encima quedan estratosfera, mesosfera, termosfera y exosfera.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Borrascas, anticiclones y vientos</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Cuando la atmósfera se mueve verticalmente — convección — pasa lo siguiente. Una <K>borrasca</K> es una masa de aire cálido que asciende; su "vacío" lo rellena el aire que la rodea. Un <K>anticiclón</K> es justo lo contrario: una masa de aire frío que desciende.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Cuando se mueve horizontalmente, tenemos <K>vientos</K>: en superficie van desde las zonas de alta presión (anticiclones) hacia las de baja presión (borrascas). Y la acción geológica de la atmósfera es consecuencia tanto de su composición como de su dinámica.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">La hidrosfera, casi siempre salada</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Cuando hablamos del agua del planeta hay un dato que descoloca: del total, solo el <K>2,5% es agua dulce</K>. El otro 97,5% son océanos. Y dentro del agua dulce, la mayor parte ni siquiera está accesible: <K>glaciares 68,7%</K>, <K>aguas subterráneas 30,1%</K>, permafrost 0,8%, y un 0,4% repartido entre lagos, ríos, atmósfera, humedad del suelo y demás.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Funciones de la hidrosfera:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Suaviza temperaturas en áreas costeras</K>, amortiguándolas.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Forma parte de la <K>composición de los seres vivos</K>, donde realiza funciones de disolución, transporte, regulador, etc.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Mantiene la <K>transferencia de líquido entre océanos y continentes</K> — el ciclo del agua: evaporación, condensación, precipitación, escorrentía superficial, infiltración y escorrentía subterránea.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Almacena <K>CO₂ en disolución</K>; los organismos lo fijan para formar caparazones o esqueletos.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Favorece el magmatismo</K> con su presencia, sobre todo en las zonas de subducción.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">El agua del mar también se mueve</h4>
        <p className="font-body text-lg leading-relaxed mb-2">
          Tres movimientos a tener en cuenta:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>oleaje</K>: las olas las produce el viento al actuar sobre la superficie del mar.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Las <K>mareas</K>: oscilaciones por la atracción gravitatoria de la Luna y el Sol.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Las <K>corrientes termohalinas</K>: movimientos del agua por diferencia de densidad debido a cambios de temperatura o salinidad.</span></li>
        </ul>

        <blockquote className="border-l-4 border-turquoise pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            La escorrentía superficial apenas supone un 0,0001% del total de la hidrosfera, pero es el principal agente erosivo y de transporte en la superficie terrestre.
          </p>
        </blockquote>

        <p className="font-body text-lg leading-relaxed mb-4">
          El resto de aguas también modelan, pero con sus condiciones:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>El <K>hielo glaciar</K> tiene gran capacidad modeladora, pero su acción se reduce a las zonas polares y de montaña, donde además los glaciares son cada vez más reducidos.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Las <K>aguas subterráneas</K> tienen poder modelador cuando actúan sobre rocas solubles, como las zonas calizas, dando lugar al modelado kárstico.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Los <K>océanos</K> concentran su actividad erosiva en el litoral debido a la acción del oleaje.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>En la meteorización de las rocas, la hidrosfera también ejerce un papel importante por medio de la disolución, la hidrólisis o el efecto hielo-deshielo.</span></li>
        </ul>
      </section>

      <Divider />

      {/* Sección 2 · La meteorización */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          2. Cuando las rocas se desgastan<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">la meteorización</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>meteorización</K> es el conjunto de cambios que sufren los materiales de la litosfera al entrar en contacto con la atmósfera, la hidrosfera o la biosfera. La causan cuatro agentes: <K>agua, hielo, viento y esfuerzos tectónicos</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Hay una fórmula que conviene fijar:
        </p>

        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 my-6 text-center">
          <p className="font-display text-xl md:text-2xl font-bold text-ochre-dark tracking-wide">
            EROSIÓN = METEORIZACIÓN + TRANSPORTE
          </p>
        </div>

        <p className="font-body text-lg leading-relaxed mb-4">
          La meteorización descompone las rocas, las vuelve menos compactas, las fragmenta o cambia su composición — y eso facilita después el transporte. Sin meteorización, no hay material disgregado que mover. Cada roca, además, es sensible de forma distinta: cuando hay litologías diferentes y unas se desgastan antes que otras hablamos de <K>meteorización diferencial</K>.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.1 Meteorización física</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>meteorización física</K> consiste en la <K>fisuración, rotura o disgregación</K> de las rocas, y ocurre <span className="font-bold text-terracotta-dark">sin que cambie su composición química</span>. Suele ir delante de la alteración química y le facilita el camino. La provocan esfuerzos compresivos, esfuerzos de relajación, variaciones de temperatura o seres vivos. Cuatro mecanismos:
        </p>

        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">❄️ Gelifracción o crioclastia</h5>
            <p className="font-body text-base leading-relaxed">
              El agua se acumula en las grietas de la roca, al helarse aumenta su volumen y el hielo actúa a modo de cuña, abriendo las fracturas. La repetición de este proceso y la fuerza de la gravedad hacen que las fisuras profundicen, hasta que la roca se desmorona y cuartea.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🧂 Haloclasticidad o crecimiento de sales</h5>
            <p className="font-body text-base leading-relaxed">
              Al evaporarse el agua de las rocas en zonas costeras y áridas, las sales minerales precipitan formando pequeños cristales que presionan los granos de la roca y los expulsan.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🌡️ Termoclastia</h5>
            <p className="font-body text-base leading-relaxed">
              Disgregación de las rocas sometidas a constantes subidas y bajadas de temperatura. Los minerales se dilatan o disminuyen su volumen de forma desigual y entre los granos se forman microfracturas que terminan disgregando la roca.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🪨 Diaclasado por descompresión o lajamiento</h5>
            <p className="font-body text-base leading-relaxed">
              Actúan de forma compresiva (plegamientos o fracturaciones) y también distensiva (fracturas de descompresión). Estos mecanismos facilitan, además, la actuación de otros procesos de erosión.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.2 Meteorización química</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>meteorización química</K> sí modifica la composición de las rocas. Sus principales agentes son el <K>agua</K>, el <K>oxígeno</K> y el <K>dióxido de carbono</K>. Cinco mecanismos:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Hidrólisis</K>: rotura de la estructura mineral por la acción del OH⁻ y H⁺ procedentes de la disociación del agua. Los OH⁻ actúan como bases y los H⁺ como ácidos, sobre los minerales y las rocas. La acción del agua puede transformar los <K>silicatos en arcillas</K>.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Oxidación-reducción</K>: la oxidación es la pérdida de electrones y la reducción la ganancia de los mismos. En la naturaleza estos procesos se producen generalmente cuando el oxígeno o el hidrógeno se unen a minerales o rocas que contienen elementos metálicos.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Carbonatación</K>: tipo de disolución en la que interviene el ion carbonato, formado cuando el agua contiene CO₂. Transforma compuestos insolubles en solubles. Importante en la alteración química de carbonatos y silicatos.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Disolución</K>: separación de los iones que componen una sal en el seno del agua, como ocurre con la halita o el yeso. Los iones son transportados por separado y pueden depositarse posteriormente en otros lugares formando sales diferentes o iguales a las de la roca madre.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Hidratación</K>: modificación de un mineral al introducirse agua en su estructura. Así sucede con las arcillas, cuando se hidratan y aumentan su volumen.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.3 El papel de la biosfera</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los seres vivos son agentes de meteorización muy eficaces, tanto de forma física como química.
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Bioclastia</K>: rotura de las rocas producida por seres vivos. Las raíces de los árboles, al introducirse en las grietas, ejercen presión por aumento de volumen según crecen y se ensanchan. Los animales excavadores desgastan la roca mediante la <K>acción zarpa</K>.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>El ser humano como agente geológico externo</K>: la meteorización, el transporte y la sedimentación pueden ser favorecidos por los seres humanos.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">2.4 Productos resultantes</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Como ejemplo del producto resultante de la meteorización, el PDF cita la <K>génesis de un berrocal granítico</K>.
        </p>

        <AI>
          <p>
            <strong>Sobre el berrocal granítico</strong>: tus apuntes solo lo mencionan como cabecera. Por contexto, un <em>berrocal</em> es un paisaje de bloques redondeados de granito que afloran tras la meteorización progresiva de un macizo. La gelifracción, la termoclastia y la hidrólisis ensanchan las diaclasas del granito hasta que los bloques quedan separados unos de otros y la erosión los redondea por las aristas. Un ejemplo clásico en España es la Pedriza (Sierra de Guadarrama).
          </p>
        </AI>
      </section>

      <Divider />

      {/* Sección 3 · El suelo */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          3. El suelo<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">la frontera de las cuatro esferas</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          El <K>suelo</K> es lo que queda cuando la meteorización física, química y biológica trabajan a fondo sobre una roca. Su capa superficial es capaz de sustentar vegetación, y es <K>la compleja interfase entre los cuatro subsistemas terrestres</K>: biosfera, geosfera, atmósfera e hidrosfera. En un suelo coinciden materia orgánica, minerales, aire y agua a la vez.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">3.1 El perfil del suelo</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Si cortas un suelo en vertical, ves los <K>horizontes</K>, de arriba a abajo:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Horizonte 0</K>: restos vegetales.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Horizonte A o de lixiviación</K>: gran cantidad de materia orgánica tanto viva como en descomposición.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Horizonte B o de acumulación</K>: suele acumular óxidos y arcillas procedentes de la lixiviación.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Horizonte C</K>: fragmentos de roca madre meteorizados.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">3.2 Factores que controlan su desarrollo</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          El tipo de suelo y el espesor de los horizontes dependen de cinco factores: <K>el clima, la roca madre, el tiempo, la acción de los seres vivos y la pendiente del terreno</K>.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">3.3 Degradación y protección</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los factores naturales que más influyen en la degradación son la <K>pendiente</K>, los <K>vientos intensos</K> y las <K>lluvias torrenciales</K>. Y los suelos no se forman al mismo ritmo en toda época:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Biostasia</K>: períodos favorables para la formación de suelos, cálidos y lluviosos (interglaciares).</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Rexistasia</K>: períodos de erosión acelerada (períodos áridos o glaciares).</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          Y existe la <K>desertificación</K>, que es la aceleración de la pérdida de suelo debido a causas antrópicas.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">3.4 La edafodiversidad</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          La ciencia que estudia los suelos se llama <K>edafología</K>, y es multidisciplinar: relaciona ramas como la Geología, Química, Biología, Física y Geografía.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>edafodiversidad</K> se refiere a la variedad de suelos que existen en un territorio, y se representa con mapas de suelos. Dentro de esa variedad distinguimos:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Suelos zonales</K>: suelos con horizontes bien desarrollados, relacionados con el área climática en la que se encuentran.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Suelos azonales</K>: suelos poco desarrollados o juveniles, que apenas tienen relación con el área climática en la que se encuentran.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-4">
          Dependiendo de la escala que se utilice, en una misma zona climática hay gran variedad de suelos. Esto hace que unos sean más propicios para el uso agrario, ganadero o forestal.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">3.4 Geodiversidad y patrimonio geológico</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>geodiversidad</K> es la variedad de elementos y estructuras geológicas de un territorio. El <K>patrimonio geológico</K> está reconocido por la UNESCO a través de una figura de protección internacional: los <K>Geoparques</K>.
        </p>
      </section>

      <Divider />

      {/* Sección 4 · Erosión, transporte y sedimentación */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          4. De la roca a la cuenca<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">erosión, transporte y sedimentación</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          La meteorización rompe la roca, pero los pedazos no se mueven solos. La <K>erosión</K> es la movilización (por el agua, el hielo o el aire) de los materiales que se producen como consecuencia de la meteorización de las rocas.
        </p>

        <div className="bg-tierra-cream/60 border border-ochre/30 rounded-xl px-5 py-4 my-6 text-center">
          <p className="font-display text-xl md:text-2xl font-bold text-ochre-dark tracking-wide">
            EROSIÓN = METEORIZACIÓN + TRANSPORTE
          </p>
        </div>

        <p className="font-body text-lg leading-relaxed mb-4">
          El ciclo erosivo y el sucesivo ciclo sedimentario tienden a <K>suavizar el relieve</K> porque retiran de las zonas elevadas materiales que posteriormente colocan en las zonas deprimidas.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Hay dos tipos de desgaste: la <K>abrasión</K> es el desgaste homogéneo, y la <K>corrosión</K> el desgaste selectivo que deja oquedades en la roca. Los mecanismos concretos dependen de los agentes geológicos que actúen, del tipo de roca y del relieve existente.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">4.1 Madurez de sedimentos y agentes de transporte</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          El <K>transporte</K> es el traslado de materiales disgregados. Depende tanto del agente geológico como de las características de los propios materiales. Durante el viaje los materiales se <K>desgastan</K>: pueden redondearse, aplanarse, pulirse… y al final se acumulan en las cuencas sedimentarias <K>ordenados por densidades y tamaños</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Cuatro formas de transporte:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Disolución</K>: los materiales viajan como iones en el seno del agua.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Flotación</K>: los materiales se desplazan sobre el agente de transporte.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Rodadura, arrastre o saltación</K>: si los materiales se desplazan en contacto con el lecho, girando, deslizándose sobre él o mediante pequeños saltos con elevaciones y caídas.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>En suspensión</K>: si las partículas van incluidas en el interior del medio material — las arenas o limos viajan en el seno del aire o del agua.</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-2">
          Y cinco agentes que las llevan a cabo:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Viento</K>: transporta los materiales en contacto con el suelo o por suspensión cuando van incluidos en el aire.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Ríos</K>: en contacto con el lecho fluvial, suspendidos dentro de la masa de agua, o en disolución (como las sales, separando los iones que las componen).</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Aguas del mar</K>: transportan los materiales impulsados por las olas, corrientes o mareas, de la misma forma que las aguas fluviales.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Hielos glaciares</K>: el transporte se da sobre la superficie del hielo, englobadas en él, o arrastrándolas sobre el lecho.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Acción de la gravedad</K>: responsable del transporte por deslizamiento cuando los relieves presentan inclinación.</span></li>
        </ul>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">4.2 Sedimentación y estratificación</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>sedimentación</K> es el asentamiento de los materiales en las cuencas sedimentarias. Se produce cuando el medio de transporte pierde capacidad para seguir transportando. Durante la sedimentación los materiales se acumulan en capas superpuestas llamadas <K>estratos</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Hay tres tipos:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Deposición</K>: se depositan los materiales de mayor tamaño al disminuir la velocidad de la corriente.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Decantación</K>: los materiales que viajan en suspensión decantan debido a la fuerza de la gravedad.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span><K>Precipitación</K>: los materiales disueltos precipitan cuando aumenta mucho su concentración.</span></li>
        </ul>
      </section>

      <Divider />

      {/* Sección 5 · Procesos gravitacionales */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          5. Cuando la ladera no aguanta<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">procesos gravitacionales y sus riesgos</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los <K>procesos gravitacionales</K> o movimientos en masa son movimientos descendentes de los materiales que componen una ladera debidos a la acción de la gravedad. Se producen cuando la fuerza de la gravedad <span className="font-bold text-terracotta-dark">supera la cohesión interna</span> de los materiales.
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          ¿Qué los desencadena? Cuatro causas:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Aumento de agua</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Vibraciones</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Debilitamiento de la base</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Eliminación de la vegetación</span></li>
        </ul>
        <p className="font-body text-lg leading-relaxed mb-2">
          Y se manifiestan en tres formas:
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Desprendimientos</h5>
            <p className="font-body text-base leading-relaxed">
              Se produce una caída libre de los materiales.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Deslizamientos</h5>
            <p className="font-body text-base leading-relaxed">
              A partir de una o varias superficies de rotura, la masa se desliza.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">Flujos</h5>
            <p className="font-body text-base leading-relaxed">
              Los materiales se comportan como un fluido viscoso. Pueden ser de materiales finos (<K>coladas de barro</K>) o de materiales gruesos (<K>derrubios</K>).
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Sección 6 · Aguas superficiales */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          6. El agua que esculpe el paisaje<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">acción geológica de las aguas superficiales</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los modelados de la superficie terrestre se dividen en tres grupos: <K>continentales</K>, <K>de transición</K> y <K>marinos</K>. Y dominan los procesos erosivos sobre los sedimentarios — glaciares, eólicos, lacustres, fluviales, kársticos.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.1 Aguas de arroyada y torrentes</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las <K>aguas salvajes o de arroyada</K> discurren por la superficie del terreno sin un cauce fijo. Su acción erosiva es mayor en suelos con materiales finos (arcillas y margas). Originan cárcavas y barrancos que forman un paisaje denominado <K>badlands</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los <K>torrentes</K> sí son cauces permanentes, pero el caudal es intermitente. El agua recogida en las montañas se canaliza a gran velocidad y, cuando se pierde la pendiente, se depositan los materiales formando un <K>cono de deyección</K> o <K>abanico aluvial</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las <K>ramblas</K> aparecen cuando el contraste de pendiente es menor, en regiones mediterráneas o subdesérticas.
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.2 Acción modeladora de los ríos</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los ríos excavan valles con <K>perfil transversal en V</K>. Los materiales que transportan pueden encontrarse en el lecho del río, a ambos lados del cauce formando <K>terrazas</K>, o en la boca de los barrancos formando abanicos aluviales.
        </p>

        <blockquote className="border-l-4 border-terracotta pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Las inundaciones son los desastres naturales más frecuentes y los que más víctimas y daños materiales causan.
          </p>
        </blockquote>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.3 Acción geológica del mar — el modelado del litoral</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          En el límite entre el mar y el continente se desarrollan <K>playas</K>, <K>acantilados</K>, <K>estuarios</K>, <K>albuferas</K> o <K>deltas</K> por la influencia conjunta de los agentes continentales y marinos. <span className="font-semibold">Las zonas costeras son los ambientes más dinámicos y cambiantes del planeta.</span>
        </p>
        <p className="font-body text-lg leading-relaxed mb-2">
          Los factores que influyen son seis:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Épocas glaciares y tectónica global, con regresiones y transgresiones del mar.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Intensidad y dirección del oleaje y de las corrientes marinas.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Contorno de la costa, que modifica la erosión y sedimentación.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Tipo de rocas y sedimentos que forman el sustrato.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Aportes de los ríos (sedimentación fluvial).</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Impacto de la actividad humana.</span></li>
        </ul>

        <p className="font-body text-lg leading-relaxed mb-4">
          Y las formas que aparecen son éstas:
        </p>

        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">🏖️ Playas</h5>
            <p className="font-body text-base leading-relaxed">
              Formadas por una franja de sedimentos que ocupan la ribera entre las aguas del mar y el continente. Los sedimentos son las arenas que los ríos han dejado en la desembocadura y los restos de conchas. En la parte sumergida se forman <K>barras y cordones litorales</K>, y en la emergida se forman <K>dunas</K> debido a la acción del viento.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">🪨 Acantilados</h5>
            <p className="font-body text-base leading-relaxed mb-3">
              Escarpes del litoral formados por acción directa del oleaje cuando la costa queda elevada respecto al nivel del mar. La erosión provoca un retroceso continuo, en cuatro fases:
            </p>
            <ol className="font-body text-base leading-relaxed space-y-1.5 list-decimal pl-5">
              <li>Erosión debida al oleaje.</li>
              <li>Socavamiento de las rocas.</li>
              <li>Rocas a punto de desplomarse.</li>
              <li>Plataforma de abrasión.</li>
            </ol>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">🌊 Albuferas</h5>
            <p className="font-body text-base leading-relaxed">
              Llanuras lacustres separadas del mar por una barra. Los depósitos que se forman son de material fino y están surcados por canales.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">🌀 Deltas</h5>
            <p className="font-body text-base leading-relaxed">
              Se forman con materiales transportados por los ríos y depositados en la desembocadura porque <span className="font-bold">el mar no tiene suficiente energía para arrastrarlos hacia el interior</span>. Los depósitos de origen fluvial (arenosos) están intercalados con otros de origen marino (calcáreos), y se acumulan abundantes restos vegetales.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">⛵ Estuarios</h5>
            <p className="font-body text-base leading-relaxed">
              Justo el caso opuesto al delta. Producidos en la desembocadura de los ríos en mares con <span className="font-bold">suficiente energía para arrastrar los depósitos hacia el interior y erosionar la desembocadura</span> del río.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-turquoise pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Más del 70% de la superficie terrestre se encuentra en las áreas marinas, donde predomina la sedimentación sobre la erosión.
          </p>
        </blockquote>

        <p className="font-body text-lg leading-relaxed mb-4">
          Y hacia mar adentro, bajo la superficie, encontramos:
        </p>

        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">Zonas de plataforma</h5>
            <p className="font-body text-base leading-relaxed">
              Zonas de enlace con los fondos oceánicos donde se acumulan materiales calcáreos junto con otros procedentes del continente. Áreas con <K>relieve poco acusado</K> y <K>pendientes suaves</K>. Tienen gran <K>importancia económica</K> por la riqueza pesquera y los hidrocarburos que contienen. Sobre ellas pueden formarse <K>arrecifes</K>: construcciones de esqueletos de pólipos.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">Talud y cañones submarinos</h5>
            <p className="font-body text-base leading-relaxed">
              El <K>talud</K> es un área de fuerte pendiente situada al final de la plataforma; en su borde se forman depósitos sedimentarios de gran potencia. Y atravesándolo, los <K>cañones submarinos</K>: incisiones erosivas profundas en la plataforma y el talud, dispuestas más o menos perpendicularmente a la línea de costa.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">Zonas de fondos oceánicos</h5>
            <p className="font-body text-base leading-relaxed">
              Sus sedimentos, de procedencia exclusivamente marina, son escasos, y su potencia va disminuyendo a medida que se alejan del continente.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">6.4 Aguas subterráneas y modelado kárstico</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Las <K>aguas subterráneas</K> sólo tienen acción modeladora si actúan sobre <K>rocas solubles</K> o que puedan sufrir carbonatación. En terrenos carbonatados, las aguas ácidas producen disolución y generan <K>cuevas y galerías</K>. Cuando las condiciones son favorables, los iones precipitan y se forman <K>espeleotemas</K> (estalactitas y estalagmitas).
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          En paisajes kársticos, las aguas ácidas generan formas características en superficie y subterráneas: <K>lapiaz</K> o lenar, <K>cañón</K>, <K>poljés</K>, <K>sumidero</K>, <K>dolina</K>, <K>sima</K>, <K>surgencia</K>, <K>galería</K>, <K>caverna</K>, <K>estalactitas</K> y <K>estalagmitas</K>.
        </p>

        <div className="bg-terracotta/5 border-l-4 border-terracotta rounded-r-xl p-5 my-6">
          <p className="font-body text-base leading-relaxed mb-2">
            <span className="font-display text-base font-bold text-terracotta-dark">⚠️ Sensibilidad de las aguas subterráneas</span>
          </p>
          <ul className="font-body text-base leading-relaxed space-y-2 pl-1">
            <li className="flex gap-3"><span className="text-terracotta mt-1 shrink-0">▹</span><span>Contaminación por <K>lixiviados</K>.</span></li>
            <li className="flex gap-3"><span className="text-terracotta mt-1 shrink-0">▹</span><span><K>Sobreexplotación</K>, que puede ocasionar <K>intrusión marina</K>.</span></li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* Sección 7 · Acción del hielo */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          7. La acción del hielo<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">glaciares y huellas glaciares</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los <K>glaciares</K> son el lento discurrir del hielo existente en las altas montañas y en las latitudes polares. Una pista clave para distinguir un sedimento glaciar de uno fluvial: los materiales que transportan y depositan los glaciares están <K>desordenados, poco seleccionados</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Tres formas asociadas al hielo:
        </p>

        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🪨 Morrenas</h5>
            <p className="font-body text-base leading-relaxed">
              Cuando las lenguas glaciares pierden competencia para seguir transportando el material rocoso, este se acumula formando morrenas.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🏔️ Circos glaciares</h5>
            <p className="font-body text-base leading-relaxed">
              Depresiones en forma de anfiteatro formadas por la acción del hielo en zonas de alta montaña.
            </p>
          </div>

          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-petrol mb-2">🟦 Valles en U</h5>
            <p className="font-body text-base leading-relaxed">
              Los hielos producen una acción erosiva intensa y generan valles con <K>perfil transversal en U</K>. Si lo comparas con los valles fluviales del apartado anterior (perfil en V), te queda fácil distinguir uno del otro.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Sección 8 · Relieves del viento */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          8. El viento que talla<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">relieves eólicos</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Los relieves <K>eólicos</K> los causa el viento, que erosiona las partículas finas (<K>arenas, limos y arcillas</K>) pero <span className="font-bold">no las piedras y fragmentos rocosos de mayor tamaño</span> — esos quedan formando un <K>desierto de piedras</K> o <K>reg</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          La <K>deflación</K> se produce por eliminación de la fracción arenosa, dejando el pavimento expuesto y formando esos desiertos de tipo reg. Sobre las superficies rocosas, en cambio, el viento produce mucho desgaste o <K>abrasión</K> — y de ahí salen formas tan curiosas como los <K>taffoni</K> y los <K>ventifactos</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Y donde el viento deposita lo que ha transportado:
        </p>
        <ul className="font-body text-lg leading-relaxed space-y-3 pl-1 mb-4">
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Las arenas y limos pueden depositarse formando montículos de gran tamaño: las <K>dunas</K>.</span></li>
          <li className="flex gap-3"><span className="text-volcanic mt-1 shrink-0">▸</span><span>Los limos pueden cubrir grandes extensiones, <K>muy aptas para el cultivo</K>, formando depósitos llamados <K>loess</K>.</span></li>
        </ul>
      </section>

      <Divider />

      {/* Sección 9 · Rocas sedimentarias */}
      <section>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-petrol mb-6 leading-snug">
          9. Rocas sedimentarias<br className="hidden md:block" />
          <span className="text-tierra-slate text-xl md:text-2xl font-normal">el resultado final del ciclo</span>
        </h3>
        <p className="font-body text-lg leading-relaxed mb-4">
          Toda meteorización, transporte y sedimentación termina formando rocas. Las <K>rocas sedimentarias</K> se reconocen por cuatro características: <K>estratificación</K>, <K>estructura</K>, <K>textura</K> y <K>composición</K>.
        </p>
        <p className="font-body text-lg leading-relaxed mb-4">
          Y se clasifican en tres grandes grupos según su origen:
        </p>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Detríticas</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Están formadas por <K>acumulación de fragmentos rocosos</K>. Se clasifican según el tamaño de estos fragmentos o <K>clastos</K>.
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-ochre-dark mb-2">Conglomerado</h5>
            <p className="font-body text-base leading-relaxed">
              Formado por <K>cantos grandes</K>. Si los cantos son <K>redondeados</K> se llama <K>pudinga</K>, y si son <K>angulosos</K>, <K>brecha</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-ochre-dark mb-2">Arenisca</h5>
            <p className="font-body text-base leading-relaxed">
              Formada por <K>arenas cementadas</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-ochre-dark mb-2">Lutita</h5>
            <p className="font-body text-base leading-relaxed">
              Formada por <K>partículas de menor tamaño que las arenas</K>.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Organógenas</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Resultan de la <K>acumulación de restos orgánicos</K> y de la actividad metabólica de seres vivos.
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-volcanic-dark mb-2">Carbón</h5>
            <p className="font-body text-base leading-relaxed mb-2">
              Se forma a partir de <K>restos vegetales enterrados rápidamente</K> que han sufrido un proceso de <K>transformación bacteriana en condiciones reductoras</K>.
            </p>
            <p className="font-body text-base leading-relaxed">
              Tipos: <K>turba</K>, <K>lignito</K>, <K>hulla</K> y <K>antracita</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-volcanic-dark mb-2">Petróleo</h5>
            <p className="font-body text-base leading-relaxed">
              Mezcla de <K>hidrocarburos</K> formados a partir de <K>plancton marino enterrado</K>.
            </p>
          </div>
        </div>

        <h4 className="font-display text-xl font-semibold text-terracotta-dark mt-10 mb-3">Químicas o bioquímicas</h4>
        <p className="font-body text-lg leading-relaxed mb-4">
          Se forman por <K>precipitación química</K> o por la <K>actividad metabólica de organismos vivos</K>.
        </p>
        <div className="space-y-5 mb-4">
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">Silíceas</h5>
            <p className="font-body text-base leading-relaxed">
              Constituidas por <K>cuarzo microcristalino precipitado</K>, como el <K>sílex</K>, la <K>calcedonia</K> o el <K>ópalo</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">Carbonatadas</h5>
            <p className="font-body text-base leading-relaxed">
              Se producen por <K>precipitación de carbonatos de calcio y magnesio</K>, como las <K>calizas</K> y <K>dolomías</K>.
            </p>
          </div>
          <div className="bg-tierra-cream/60 rounded-xl p-5 md:p-6">
            <h5 className="font-display text-lg font-semibold text-turquoise-dark mb-2">Evaporíticas</h5>
            <p className="font-body text-base leading-relaxed">
              Se producen por <K>evaporación y precipitación</K>, como el <K>yeso</K>, la <K>sal gema</K> o la <K>silvina</K>.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-ochre pl-5 py-2 my-8">
          <p className="font-display text-xl md:text-2xl text-tierra-charcoal italic leading-snug">
            Y con esto se cierra el círculo: el agua, el viento y el hielo arrancan, transportan y depositan, y los materiales acaban convertidos en estas rocas que un día volverán a meteorizarse.
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
  { s: '1. Las capas fluidas de la Tierra', p: '¿Dónde se producen los procesos geodinámicos externos y por qué?', r: 'En la superficie terrestre o cerca de ella, debido a la fuerza gravitatoria o a la energía procedente del Sol.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué tres procesos producen los agentes geológicos externos?', r: 'Meteorización, transporte y sedimentación.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Cuáles son los principales agentes geológicos externos?', r: 'La lluvia, los ríos, el viento, el mar y el hielo.' },
  { s: '1. Las capas fluidas de la Tierra', p: 'Nombra al menos 4 funciones de la atmósfera.', r: 'Filtrar radiaciones solares (rayos X, gamma, UV); regular la temperatura del planeta; distribuir calor del ecuador a los polos por los vientos; suministrar gases para la respiración y la fotosíntesis; participar en el ciclo hidrológico.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Cómo regula la atmósfera la temperatura del planeta?', r: 'De día refleja alrededor de un tercio de la radiación; de noche, el efecto invernadero natural regula la temperatura.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué porcentaje de los gases atmosféricos se concentra en la troposfera?', r: 'El 75% de los gases.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Cuáles son las capas de la atmósfera, de abajo a arriba?', r: 'Troposfera, Estratosfera (con la capa de ozono), Mesosfera, Termosfera y Exosfera.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué son los movimientos verticales (convección) de la atmósfera y qué generan?', r: 'Movimientos en los que el aire asciende o desciende. Generan borrascas y anticiclones.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué es una borrasca?', r: 'Una masa de aire cálido que asciende; su "vacío" es rellenado por el aire que la rodea.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué es un anticiclón?', r: 'Una masa de aire frío que desciende.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿En qué dirección se mueven los vientos en superficie?', r: 'Desde las zonas de alta presión (anticiclones) a las de baja presión (borrascas).' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué porcentaje del agua de la Tierra es agua dulce?', r: 'El 2,5%. El resto (97,5%) son océanos.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Dónde se concentra la mayor parte del agua dulce?', r: 'En glaciares (68,7%) y en aguas subterráneas (30,1%).' },
  { s: '1. Las capas fluidas de la Tierra', p: 'Nombra al menos 3 funciones de la hidrosfera.', r: 'Suaviza temperaturas en áreas costeras; entra en la composición de los seres vivos; transferencia de líquido entre océanos y continentes (ciclo del agua); almacena CO₂ en disolución; favorece el magmatismo en zonas de subducción.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Cuáles son las 6 fases del ciclo del agua?', r: 'Evaporación, condensación, precipitación, escorrentía superficial, infiltración y escorrentía subterránea.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Para qué fijan los organismos el CO₂ disuelto en el agua?', r: 'Para formar caparazones o esqueletos.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Cómo se producen las olas (oleaje)?', r: 'Por la acción del viento sobre la superficie del mar.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué provoca las mareas?', r: 'La atracción gravitatoria de la Luna y el Sol.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué son las corrientes termohalinas?', r: 'Movimientos del agua marina por diferencia de densidad debida a cambios en la temperatura o la salinidad.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Qué porcentaje del total de la hidrosfera supone la escorrentía superficial y por qué es importante?', r: 'Apenas un 0,0001%, pero es el principal agente erosivo y de transporte en la superficie terrestre.' },
  { s: '1. Las capas fluidas de la Tierra', p: '¿Cuándo tienen las aguas subterráneas poder modelador?', r: 'Cuando actúan sobre rocas solubles (como las calizas), dando lugar al modelado kárstico.' },

  { s: '2. La meteorización', p: '¿Qué es la meteorización?', r: 'Conjunto de cambios que sufren los materiales de la litosfera en contacto con la atmósfera, la hidrosfera o la biosfera.' },
  { s: '2. La meteorización', p: '¿Cuáles son los agentes causantes de la meteorización?', r: 'Agua, hielo, viento y esfuerzos tectónicos.' },
  { s: '2. La meteorización', p: 'Completa: EROSIÓN = ____ + ____', r: 'EROSIÓN = METEORIZACIÓN + TRANSPORTE.' },
  { s: '2. La meteorización', p: '¿Qué es la meteorización diferencial?', r: 'La que se produce cuando existen litologías diferentes y cada roca es sensible a la meteorización de forma distinta.' },
  { s: '2. La meteorización', p: '¿Qué es la meteorización física?', r: 'Fisuración, rotura o disgregación de las rocas. Ocurre sin que cambie su composición química.' },
  { s: '2. La meteorización', p: '¿Qué es la gelifracción o crioclastia?', r: 'Rotura de las rocas producida por el hielo: el agua se acumula en grietas, al helarse aumenta su volumen y el hielo actúa a modo de cuña abriendo las fracturas.' },
  { s: '2. La meteorización', p: '¿Qué es la haloclasticidad o crecimiento de sales?', r: 'Al evaporarse el agua de las rocas en zonas costeras y áridas, las sales precipitan formando cristales que presionan los granos y los expulsan.' },
  { s: '2. La meteorización', p: '¿Qué es la termoclastia?', r: 'Disgregación de las rocas por subidas y bajadas de temperatura: los minerales se dilatan/contraen de forma desigual y forman microfracturas.' },
  { s: '2. La meteorización', p: '¿Qué es el diaclasado por descompresión o lajamiento?', r: 'Acción compresiva (plegamientos o fracturaciones) y distensiva (fracturas de descompresión) que facilita otros procesos de erosión.' },
  { s: '2. La meteorización', p: '¿Qué es la meteorización química y cuáles son sus principales agentes?', r: 'La que modifica la composición de las rocas. Sus agentes principales son el agua, el oxígeno y el dióxido de carbono.' },
  { s: '2. La meteorización', p: '¿Qué es la hidrólisis?', r: 'Rotura de la estructura mineral por el OH⁻ y H⁺ procedentes de la disociación del agua. Puede transformar los silicatos en arcillas.' },
  { s: '2. La meteorización', p: '¿En qué consiste la oxidación-reducción en la naturaleza?', r: 'Oxidación: pérdida de electrones. Reducción: ganancia. Ocurren cuando el oxígeno o el hidrógeno se unen a minerales o rocas que contienen elementos metálicos.' },
  { s: '2. La meteorización', p: '¿Qué es la carbonatación?', r: 'Tipo de disolución en la que interviene el ion carbonato (formado cuando el agua contiene CO₂). Transforma compuestos insolubles en solubles. Importante en carbonatos y silicatos.' },
  { s: '2. La meteorización', p: '¿Qué es la disolución como meteorización química?', r: 'Separación de los iones que componen una sal en el seno del agua, como ocurre con la halita o el yeso.' },
  { s: '2. La meteorización', p: '¿Qué es la hidratación?', r: 'Modificación de un mineral al introducirse agua en su estructura. Las arcillas se hidratan y aumentan su volumen.' },
  { s: '2. La meteorización', p: '¿Qué es la bioclastia?', r: 'Rotura de las rocas producida por seres vivos: las raíces de los árboles ejercen presión al crecer en las grietas; los animales excavadores desgastan la roca con la acción zarpa.' },

  { s: '3. El suelo', p: '¿Qué es el suelo?', r: 'Resultado de la meteorización física, química y biológica. Es la compleja interfase entre los cuatro subsistemas terrestres: biosfera, geosfera, atmósfera e hidrosfera.' },
  { s: '3. El suelo', p: '¿Cuáles son los horizontes del suelo de arriba a abajo y qué contienen?', r: 'Horizonte 0 (restos vegetales), Horizonte A o de lixiviación (materia orgánica viva y en descomposición), Horizonte B o de acumulación (óxidos y arcillas de lixiviación), Horizonte C (fragmentos de roca madre meteorizados).' },
  { s: '3. El suelo', p: '¿De qué factores depende el desarrollo del suelo?', r: 'El clima, la roca madre, el tiempo, la acción de los seres vivos y la pendiente del terreno.' },
  { s: '3. El suelo', p: '¿Cuáles son los factores naturales que influyen en la degradación del suelo?', r: 'La pendiente, los vientos intensos y las lluvias torrenciales fundamentalmente.' },
  { s: '3. El suelo', p: '¿Qué es la biostasia?', r: 'Períodos favorables para la formación de suelos: cálidos y lluviosos (interglaciares).' },
  { s: '3. El suelo', p: '¿Qué es la rexistasia?', r: 'Períodos de erosión acelerada (períodos áridos o glaciares).' },
  { s: '3. El suelo', p: '¿Qué es la desertificación?', r: 'Aceleración de la pérdida de suelo debida a causas antrópicas.' },
  { s: '3. El suelo', p: '¿Qué es la edafodiversidad?', r: 'Variedad de suelos que existen en un territorio. Se representa con mapas de suelos.' },
  { s: '3. El suelo', p: 'Diferencia entre suelos zonales y azonales.', r: 'Zonales: con horizontes bien desarrollados y relacionados con el área climática. Azonales: poco desarrollados o juveniles, sin relación con el área climática.' },
  { s: '3. El suelo', p: '¿Qué es la geodiversidad y qué son los Geoparques?', r: 'Geodiversidad: variedad de elementos y estructuras geológicas de un territorio. Geoparques: figura de protección internacional reconocida por la UNESCO para el patrimonio geológico.' },

  { s: '4. Erosión, transporte y sedimentación', p: '¿Qué es la erosión?', r: 'Movilización (por el agua, el hielo o el aire) de los materiales que se producen como consecuencia de la meteorización de las rocas.' },
  { s: '4. Erosión, transporte y sedimentación', p: '¿Por qué los ciclos erosivo y sedimentario suavizan el relieve?', r: 'Porque retiran de las zonas elevadas materiales que posteriormente colocan en las zonas deprimidas.' },
  { s: '4. Erosión, transporte y sedimentación', p: 'Diferencia entre abrasión y corrosión.', r: 'Abrasión: desgaste homogéneo. Corrosión: desgaste selectivo que deja oquedades en la roca.' },
  { s: '4. Erosión, transporte y sedimentación', p: 'Nombra las 4 formas de transporte.', r: 'Disolución, flotación, rodadura/arrastre/saltación, y en suspensión.' },
  { s: '4. Erosión, transporte y sedimentación', p: '¿Cómo viajan los materiales en suspensión?', r: 'Las partículas (arenas o limos) van incluidas en el seno del medio material (aire o agua).' },
  { s: '4. Erosión, transporte y sedimentación', p: 'Nombra los 5 agentes de transporte.', r: 'Viento, ríos, aguas del mar, hielos glaciares y acción de la gravedad.' },
  { s: '4. Erosión, transporte y sedimentación', p: '¿Qué es la sedimentación?', r: 'Asentamiento de los materiales en las cuencas sedimentarias. Se produce cuando el medio de transporte pierde capacidad para seguir transportando.' },
  { s: '4. Erosión, transporte y sedimentación', p: '¿Qué son los estratos?', r: 'Capas superpuestas en las que se acumulan los materiales durante la sedimentación.' },
  { s: '4. Erosión, transporte y sedimentación', p: 'Diferencia entre deposición, decantación y precipitación.', r: 'Deposición: se depositan los materiales de mayor tamaño al disminuir la velocidad. Decantación: los materiales en suspensión decantan por la gravedad. Precipitación: los materiales disueltos precipitan al aumentar mucho su concentración.' },

  { s: '5. Procesos gravitacionales', p: '¿Qué son los procesos gravitacionales o movimientos en masa?', r: 'Movimientos descendentes de los materiales que componen una ladera por la gravedad, cuando ésta supera la cohesión interna de los materiales.' },
  { s: '5. Procesos gravitacionales', p: 'Nombra 4 causas que pueden desencadenar un proceso gravitacional.', r: 'Aumento de agua, vibraciones, debilitamiento de la base y eliminación de la vegetación.' },
  { s: '5. Procesos gravitacionales', p: 'Diferencia entre desprendimientos, deslizamientos y flujos.', r: 'Desprendimientos: caída libre de los materiales. Deslizamientos: la masa se desliza sobre una o varias superficies de rotura. Flujos: el material se comporta como un fluido viscoso (coladas de barro = finos; derrubios = gruesos).' },

  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son las aguas de arroyada y qué paisaje forman?', r: 'Aguas salvajes que discurren sin cauce fijo. Su acción es mayor en suelos finos (arcillas y margas). Originan cárcavas y barrancos: paisaje de badlands.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son los torrentes y qué forman al perder pendiente?', r: 'Cauces permanentes con caudal intermitente. Al perder pendiente forman un cono de deyección o abanico aluvial.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son las ramblas?', r: 'Cauces que se producen cuando el contraste de pendiente es menor en regiones mediterráneas o subdesérticas.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué perfil tienen los valles excavados por los ríos?', r: 'Perfil transversal en V.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Cuál es el desastre natural más frecuente?', r: 'Las inundaciones, que son también las que más víctimas y daños materiales causan.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué formas se desarrollan en el límite mar-continente?', r: 'Playas, acantilados, estuarios, albuferas o deltas, por la influencia de los agentes continentales y marinos.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿De qué están formadas las playas y qué se forma en sus partes sumergida y emergida?', r: 'Franja de sedimentos: arenas que han dejado los ríos en la desembocadura más restos de conchas. Sumergida: barras y cordones litorales. Emergida: dunas (por el viento).' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son los acantilados y cuáles son las fases de su retroceso?', r: 'Escarpes del litoral formados por acción directa del oleaje en costa elevada. Fases: 1) erosión por oleaje, 2) socavamiento de las rocas, 3) rocas a punto de desplomarse, 4) plataforma de abrasión.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son las albuferas?', r: 'Llanuras lacustres separadas del mar por una barra. Sus depósitos son de material fino y están surcados por canales.' },
  { s: '6. Acción geológica de las aguas superficiales', p: 'Diferencia entre delta y estuario.', r: 'Delta: el mar no tiene suficiente energía para arrastrar los depósitos del río, que se acumulan en la desembocadura. Estuario: el mar sí tiene energía suficiente para arrastrar los depósitos al interior y erosionar la desembocadura.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué porcentaje de la superficie terrestre está en áreas marinas y qué predomina allí?', r: 'Más del 70% de la superficie terrestre. En las áreas marinas predomina la sedimentación sobre la erosión.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son las zonas de plataforma y por qué importan económicamente?', r: 'Zonas de enlace con los fondos oceánicos donde se acumulan materiales calcáreos y otros del continente. Relieve poco acusado, pendientes suaves. Importancia económica por la riqueza pesquera y los hidrocarburos que contienen.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son los arrecifes?', r: 'Construcciones formadas por esqueletos de pólipos que se desarrollan sobre las plataformas.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué es el talud?', r: 'Área de fuerte pendiente situada al final de la plataforma; en su borde se forman depósitos sedimentarios de gran potencia.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué son los cañones submarinos?', r: 'Incisiones erosivas profundas en la plataforma y el talud, dispuestas más o menos perpendicularmente a la línea de costa.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Cómo son los sedimentos de los fondos oceánicos?', r: 'De procedencia exclusivamente marina, escasos, y su potencia disminuye a medida que se alejan del continente.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿Qué genera el agua ácida en terrenos carbonatados?', r: 'Disolución que origina cuevas y galerías. Cuando los iones precipitan se forman espeleotemas (estalactitas y estalagmitas).' },
  { s: '6. Acción geológica de las aguas superficiales', p: 'Nombra al menos 5 formas características de un paisaje kárstico.', r: 'Lapiaz o lenar, cañón, poljés, sumidero, dolina, sima, surgencia, galería, caverna, estalactitas, estalagmitas.' },
  { s: '6. Acción geológica de las aguas superficiales', p: '¿A qué son muy sensibles las aguas subterráneas?', r: 'A la contaminación por lixiviados y a la sobreexplotación (puede ocasionar intrusión marina).' },

  { s: '7. Acción del hielo', p: '¿Qué son los glaciares y cómo son los materiales que transportan?', r: 'Lento discurrir del hielo en altas montañas y latitudes polares. Los materiales que transportan y depositan están desordenados y poco seleccionados.' },
  { s: '7. Acción del hielo', p: '¿Qué son las morrenas?', r: 'Acumulaciones de material rocoso que se forman cuando las lenguas glaciares pierden competencia para seguir transportando.' },
  { s: '7. Acción del hielo', p: '¿Qué son los circos glaciares?', r: 'Depresiones en forma de anfiteatro formadas por la acción del hielo en zonas de alta montaña.' },
  { s: '7. Acción del hielo', p: '¿Qué perfil tienen los valles glaciares?', r: 'Perfil transversal en U.' },

  { s: '8. Relieves del viento', p: '¿Qué partículas erosiona el viento y cuáles no?', r: 'Erosiona partículas finas (arenas, limos y arcillas). No erosiona piedras y fragmentos rocosos de mayor tamaño (forman el desierto de piedras o reg).' },
  { s: '8. Relieves del viento', p: '¿Qué es la deflación?', r: 'Eliminación de la fracción arenosa por el viento, dejando el pavimento expuesto y formando desiertos llamados reg.' },
  { s: '8. Relieves del viento', p: '¿Qué son los taffoni y los ventifactos?', r: 'Formas de abrasión que el viento produce sobre superficies rocosas.' },
  { s: '8. Relieves del viento', p: '¿Qué son las dunas y qué es el loess?', r: 'Dunas: montículos formados por arenas y limos depositados por el viento. Loess: depósitos de limos que cubren grandes extensiones, muy aptos para el cultivo.' },

  { s: '9. Rocas sedimentarias', p: '¿Qué características definen una roca sedimentaria?', r: 'Estratificación, estructura, textura y composición.' },
  { s: '9. Rocas sedimentarias', p: '¿Qué son las rocas sedimentarias detríticas y cómo se clasifican?', r: 'Están formadas por acumulación de fragmentos rocosos. Se clasifican según el tamaño de estos fragmentos o clastos.' },
  { s: '9. Rocas sedimentarias', p: '¿Qué es un conglomerado y qué diferencia una pudinga de una brecha?', r: 'Conglomerado: roca formada por cantos grandes. Pudinga: cantos redondeados. Brecha: cantos angulosos.' },
  { s: '9. Rocas sedimentarias', p: 'Diferencia entre arenisca y lutita.', r: 'Arenisca: formada por arenas cementadas. Lutita: formada por partículas de menor tamaño que las arenas.' },
  { s: '9. Rocas sedimentarias', p: '¿Qué son las rocas sedimentarias organógenas?', r: 'Rocas que resultan de la acumulación de restos orgánicos y de la actividad metabólica de seres vivos.' },
  { s: '9. Rocas sedimentarias', p: '¿Cómo se forma el carbón y qué tipos existen?', r: 'A partir de restos vegetales enterrados rápidamente que sufren transformación bacteriana en condiciones reductoras. Tipos: turba, lignito, hulla y antracita.' },
  { s: '9. Rocas sedimentarias', p: '¿Cómo se forma el petróleo?', r: 'Mezcla de hidrocarburos formados a partir de plancton marino enterrado.' },
  { s: '9. Rocas sedimentarias', p: '¿Cómo se forman las rocas químicas o bioquímicas?', r: 'Por precipitación química o por la actividad metabólica de organismos vivos.' },
  { s: '9. Rocas sedimentarias', p: '¿Qué son las rocas silíceas y qué ejemplos hay?', r: 'Constituidas por cuarzo microcristalino precipitado, como el sílex, la calcedonia o el ópalo.' },
  { s: '9. Rocas sedimentarias', p: '¿Qué son las rocas carbonatadas y qué ejemplos hay?', r: 'Se producen por precipitación de carbonatos de calcio y magnesio, como las calizas y dolomías.' },
  { s: '9. Rocas sedimentarias', p: '¿Qué son las rocas evaporíticas y qué ejemplos hay?', r: 'Se producen por evaporación y precipitación, como el yeso, la sal gema o la silvina.' },
]

// ─── Quiz ───
const quiz: Pregunta[] = [
  { s: '1. Las capas fluidas de la Tierra', q: '¿A qué se deben los procesos geodinámicos externos?', opts: ['Solo al calor interno de la Tierra', 'A la fuerza gravitatoria o a la energía solar', 'A la rotación terrestre', 'A las corrientes de convección del manto'], correct: 1, exp: 'Los procesos geodinámicos externos se producen en la superficie terrestre o cerca de ella, debido a la fuerza gravitatoria o a la energía procedente del Sol.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Cuáles son los principales agentes geológicos externos?', opts: ['Magma, lava y cenizas', 'Lluvia, ríos, viento, mar y hielo', 'Placas, fallas y pliegues', 'Convección, presión y temperatura'], correct: 1, exp: 'Los principales agentes geológicos externos son la lluvia, los ríos, el viento, el mar y el hielo.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué porcentaje de los gases atmosféricos se concentra en la troposfera?', opts: ['25%', '50%', '75%', '95%'], correct: 2, exp: 'El 75% de los gases atmosféricos se concentran en la troposfera.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Cuál de estas NO es una función de la atmósfera?', opts: ['Filtrar las radiaciones solares', 'Distribuir calor del ecuador a los polos', 'Suministrar gases para respiración y fotosíntesis', 'Generar el campo magnético terrestre'], correct: 3, exp: 'Las funciones de la atmósfera son filtrar radiaciones, regular la temperatura, distribuir calor, suministrar gases y participar en el ciclo hidrológico. El campo magnético no se genera en la atmósfera.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Cómo regula la atmósfera la temperatura por la noche?', opts: ['Por convección de borrascas', 'Por el efecto invernadero natural', 'Reflejando un tercio de la radiación', 'Por los vientos polares'], correct: 1, exp: 'Durante el día la atmósfera refleja alrededor de un tercio de la radiación; por la noche, el efecto invernadero natural regula la temperatura.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué es una borrasca?', opts: ['Una masa de aire frío que desciende', 'Una masa de aire cálido que asciende', 'Una corriente marina superficial', 'Una zona de alta presión atmosférica'], correct: 1, exp: 'Una borrasca es una masa de aire cálido que asciende; su "vacío" es rellenado por el aire que la rodea.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Cómo se mueven los vientos en superficie?', opts: ['De zonas de baja presión a zonas de alta presión', 'De zonas de alta presión a zonas de baja presión', 'Siempre del ecuador a los polos', 'Siempre de norte a sur'], correct: 1, exp: 'En superficie los vientos se mueven desde las zonas de alta presión (anticiclones) a las de baja presión (borrascas).' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué porcentaje del agua de la Tierra es agua dulce?', opts: ['0,5%', '2,5%', '10%', '25%'], correct: 1, exp: 'El 2,5% del agua de la Tierra es agua dulce; el 97,5% son océanos.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Dónde se concentra la mayor parte del agua dulce del planeta?', opts: ['En los ríos y lagos', 'En la atmósfera', 'En glaciares y aguas subterráneas', 'En la humedad del suelo'], correct: 2, exp: 'La mayor parte del agua dulce está en glaciares (68,7%) y en aguas subterráneas (30,1%).' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué causa el oleaje?', opts: ['La atracción gravitatoria de la Luna', 'Diferencias de salinidad', 'La acción del viento sobre la superficie del mar', 'Movimientos sísmicos'], correct: 2, exp: 'Las olas son producidas por la acción del viento sobre la superficie del mar.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué causa las mareas?', opts: ['El viento sobre la superficie del mar', 'La atracción gravitatoria de la Luna y el Sol', 'Diferencias de temperatura del agua', 'La rotación terrestre'], correct: 1, exp: 'Las mareas son oscilaciones debidas a la atracción gravitatoria de la Luna y el Sol.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué son las corrientes termohalinas?', opts: ['Movimientos del agua por el viento', 'Movimientos del agua por diferencia de densidad debida a temperatura o salinidad', 'Mareas de gran amplitud', 'Movimientos por atracción lunar'], correct: 1, exp: 'Las corrientes termohalinas son movimientos del agua por diferencia de densidad debida a cambios en la temperatura o la salinidad.' },
  { s: '1. Las capas fluidas de la Tierra', q: '¿Qué porcentaje del total de la hidrosfera supone la escorrentía superficial?', opts: ['0,0001%', '1%', '10%', '25%'], correct: 0, exp: 'La escorrentía superficial apenas supone un 0,0001% del total de la hidrosfera, pero es el principal agente erosivo y de transporte.' },

  { s: '2. La meteorización', q: '¿Qué es la meteorización?', opts: ['Movilización de materiales por el agua o el aire', 'Conjunto de cambios que sufren los materiales de la litosfera en contacto con la atmósfera, hidrosfera o biosfera', 'Proceso de formación de magma', 'Movimiento de las placas tectónicas'], correct: 1, exp: 'La meteorización es el conjunto de cambios que sufren los materiales de la litosfera en contacto con la atmósfera, la hidrosfera o la biosfera.' },
  { s: '2. La meteorización', q: 'Completa: EROSIÓN = METEORIZACIÓN + ___', opts: ['Sedimentación', 'Transporte', 'Hidrólisis', 'Disolución'], correct: 1, exp: 'EROSIÓN = METEORIZACIÓN + TRANSPORTE.' },
  { s: '2. La meteorización', q: '¿Cuál NO es un agente causante de la meteorización?', opts: ['Agua', 'Hielo', 'Viento', 'Calor interno de la Tierra'], correct: 3, exp: 'Los agentes causantes de la meteorización son agua, hielo, viento y esfuerzos tectónicos. El calor interno está asociado a procesos internos.' },
  { s: '2. La meteorización', q: '¿Qué es la gelifracción?', opts: ['Rotura por sales que precipitan', 'Rotura por el hielo que actúa como cuña al congelarse el agua en grietas', 'Rotura por subidas y bajadas de temperatura', 'Rotura por raíces de árboles'], correct: 1, exp: 'La gelifracción o crioclastia es la rotura por el hielo: el agua en las grietas se hiela, aumenta su volumen y actúa como cuña.' },
  { s: '2. La meteorización', q: '¿En qué zonas es típica la haloclasticidad?', opts: ['Glaciares', 'Zonas costeras y áridas', 'Selvas tropicales', 'Zonas volcánicas'], correct: 1, exp: 'La haloclasticidad ocurre cuando el agua se evapora en zonas costeras y áridas; las sales precipitan formando cristales que presionan los granos.' },
  { s: '2. La meteorización', q: '¿Qué es la termoclastia?', opts: ['Rotura por raíces', 'Rotura por sales', 'Disgregación por subidas y bajadas de temperatura', 'Disgregación por hielo'], correct: 2, exp: 'La termoclastia es la disgregación de las rocas sometidas a constantes subidas y bajadas de temperatura.' },
  { s: '2. La meteorización', q: '¿Qué transformación produce típicamente la hidrólisis?', opts: ['Calizas → mármol', 'Silicatos → arcillas', 'Granitos → basaltos', 'Arcillas → silicatos'], correct: 1, exp: 'La hidrólisis rompe la estructura mineral por OH⁻ y H⁺ del agua, y puede transformar los silicatos en arcillas.' },
  { s: '2. La meteorización', q: '¿Qué tipo de meteorización es la carbonatación?', opts: ['Tipo de meteorización física', 'Tipo de disolución (química) en la que interviene el ion carbonato', 'Acción de los seres vivos', 'Acción del viento'], correct: 1, exp: 'La carbonatación es un tipo de disolución en la que interviene el ion carbonato (formado cuando el agua contiene CO₂).' },
  { s: '2. La meteorización', q: '¿Qué le ocurre a las arcillas durante la hidratación?', opts: ['Se transforman en silicatos', 'Se hidratan y aumentan su volumen', 'Se disuelven completamente', 'Se evaporan'], correct: 1, exp: 'La hidratación es la modificación de un mineral al introducirse agua en su estructura. Las arcillas se hidratan y aumentan su volumen.' },
  { s: '2. La meteorización', q: '¿Qué es la bioclastia?', opts: ['Acción química de las plantas sobre el suelo', 'Rotura de las rocas por seres vivos (raíces y animales excavadores)', 'Formación de carbón a partir de vegetales', 'Acción del viento sobre la vegetación'], correct: 1, exp: 'La bioclastia es la rotura de las rocas por seres vivos: raíces que ejercen presión y animales excavadores con la acción zarpa.' },

  { s: '3. El suelo', q: '¿Qué horizonte del suelo contiene óxidos y arcillas procedentes de lixiviación?', opts: ['Horizonte 0', 'Horizonte A', 'Horizonte B', 'Horizonte C'], correct: 2, exp: 'El horizonte B o de acumulación suele acumular óxidos y arcillas procedentes de lixiviación.' },
  { s: '3. El suelo', q: '¿Qué horizonte se denomina "de lixiviación" y tiene gran cantidad de materia orgánica?', opts: ['Horizonte 0', 'Horizonte A', 'Horizonte B', 'Horizonte C'], correct: 1, exp: 'El horizonte A o de lixiviación tiene gran cantidad de materia orgánica tanto viva como en descomposición.' },
  { s: '3. El suelo', q: '¿Cuál NO es un factor que controle el desarrollo del suelo?', opts: ['Clima', 'Roca madre', 'Pendiente del terreno', 'Velocidad de rotación de la Tierra'], correct: 3, exp: 'Los factores son el clima, la roca madre, el tiempo, la acción de los seres vivos y la pendiente del terreno.' },
  { s: '3. El suelo', q: '¿Qué es la rexistasia?', opts: ['Período favorable para la formación de suelos (cálido y lluvioso)', 'Período de erosión acelerada (períodos áridos o glaciares)', 'Pérdida de suelo por causas antrópicas', 'Variedad de suelos en un territorio'], correct: 1, exp: 'La rexistasia son los períodos de erosión acelerada (períodos áridos o glaciares).' },
  { s: '3. El suelo', q: '¿Qué es la biostasia?', opts: ['Períodos áridos de erosión acelerada', 'Períodos favorables para la formación de suelos: cálidos y lluviosos (interglaciares)', 'La pérdida de suelo por agricultura', 'Una técnica de protección del suelo'], correct: 1, exp: 'La biostasia son períodos favorables para la formación de suelos, cálidos y lluviosos (interglaciares).' },
  { s: '3. El suelo', q: '¿Qué son los suelos zonales?', opts: ['Suelos sin desarrollar', 'Suelos con horizontes bien desarrollados, relacionados con el área climática', 'Suelos solo de zonas tropicales', 'Suelos artificiales'], correct: 1, exp: 'Los suelos zonales tienen horizontes bien desarrollados, relacionados con el área climática en la que se encuentran.' },
  { s: '3. El suelo', q: '¿Qué son los Geoparques?', opts: ['Reservas de animales protegidos', 'Figura de protección internacional reconocida por la UNESCO para el patrimonio geológico', 'Parques temáticos sobre geología', 'Yacimientos de fósiles excavados'], correct: 1, exp: 'Los Geoparques son una figura de protección internacional reconocida por la UNESCO para el patrimonio geológico.' },

  { s: '4. Erosión, transporte y sedimentación', q: '¿Cuál NO es una forma de transporte?', opts: ['Disolución', 'Flotación', 'Suspensión', 'Cementación'], correct: 3, exp: 'Las formas de transporte son disolución, flotación, rodadura/arrastre/saltación, y en suspensión. La cementación no es una forma de transporte.' },
  { s: '4. Erosión, transporte y sedimentación', q: '¿Cuál NO es un agente de transporte?', opts: ['Viento', 'Hielos glaciares', 'Acción de la gravedad', 'Gradiente geotérmico'], correct: 3, exp: 'Los agentes de transporte son el viento, los ríos, las aguas del mar, los hielos glaciares y la acción de la gravedad.' },
  { s: '4. Erosión, transporte y sedimentación', q: '¿Qué es la abrasión?', opts: ['Desgaste selectivo que deja oquedades', 'Desgaste homogéneo', 'Tipo de transporte por arrastre', 'Sedimentación de gruesos'], correct: 1, exp: 'La abrasión es el desgaste homogéneo. La corrosión es el desgaste selectivo que deja oquedades.' },
  { s: '4. Erosión, transporte y sedimentación', q: '¿Qué es la corrosión?', opts: ['Desgaste homogéneo', 'Desgaste selectivo que deja oquedades en la roca', 'Tipo de meteorización química', 'Forma de transporte'], correct: 1, exp: 'La corrosión es el desgaste selectivo que deja oquedades en la roca, frente a la abrasión que es el desgaste homogéneo.' },
  { s: '4. Erosión, transporte y sedimentación', q: '¿Qué tipo de sedimentación se produce cuando los materiales disueltos aumentan mucho su concentración?', opts: ['Deposición', 'Decantación', 'Precipitación', 'Suspensión'], correct: 2, exp: 'En la precipitación los materiales disueltos precipitan al aumentar mucho su concentración.' },
  { s: '4. Erosión, transporte y sedimentación', q: '¿Cómo se ordenan los materiales en las cuencas sedimentarias durante el transporte?', opts: ['Por color', 'Por densidad y tamaño', 'Por forma únicamente', 'No se ordenan, se mezclan'], correct: 1, exp: 'Durante el transporte los materiales se desgastan y se acumulan en las cuencas sedimentarias ordenados por densidades y tamaños.' },
  { s: '4. Erosión, transporte y sedimentación', q: '¿Qué son los estratos?', opts: ['Tipos de glaciares', 'Capas superpuestas en las que se acumulan los materiales durante la sedimentación', 'Bordes entre placas', 'Capas internas del suelo'], correct: 1, exp: 'Durante la sedimentación los materiales se acumulan en capas superpuestas llamadas estratos.' },

  { s: '5. Procesos gravitacionales', q: '¿Cuál NO es una causa que desencadene un proceso gravitacional?', opts: ['Aumento de agua', 'Vibraciones', 'Eliminación de la vegetación', 'Aumento del campo magnético'], correct: 3, exp: 'Las causas son aumento de agua, vibraciones, debilitamiento de la base y eliminación de la vegetación.' },
  { s: '5. Procesos gravitacionales', q: '¿Qué es un desprendimiento?', opts: ['Movimiento como fluido viscoso', 'Caída libre de los materiales', 'Deslizamiento sobre superficies de rotura', 'Convección de la ladera'], correct: 1, exp: 'En un desprendimiento se produce una caída libre de los materiales.' },
  { s: '5. Procesos gravitacionales', q: 'Una colada de barro es un ejemplo de:', opts: ['Desprendimiento', 'Deslizamiento', 'Flujo de materiales finos', 'Saltación'], correct: 2, exp: 'Los flujos pueden ser de materiales finos (coladas de barro) o gruesos (derrubios). Se comportan como un fluido viscoso.' },
  { s: '5. Procesos gravitacionales', q: '¿Cuándo se produce un proceso gravitacional?', opts: ['Cuando aumenta el campo magnético', 'Cuando la fuerza de la gravedad supera la cohesión interna de los materiales', 'Cuando hay una erupción volcánica', 'Cuando hay subducción'], correct: 1, exp: 'Los procesos gravitacionales se producen cuando la fuerza de la gravedad supera la cohesión interna de los materiales.' },

  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué son los badlands?', opts: ['Tipos de suelos agrícolas', 'Paisaje de cárcavas y barrancos formado por aguas de arroyada en suelos finos', 'Zonas de inundación de los ríos', 'Tipo de roca sedimentaria'], correct: 1, exp: 'Las aguas de arroyada originan cárcavas y barrancos en suelos con materiales finos (arcillas y margas), formando un paisaje denominado badlands.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué forman los torrentes al perder pendiente?', opts: ['Un cono de deyección o abanico aluvial', 'Un delta', 'Un acantilado', 'Una rambla'], correct: 0, exp: 'Cuando los torrentes pierden pendiente se depositan los materiales formando un cono de deyección o abanico aluvial.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿En qué regiones se producen las ramblas?', opts: ['Regiones polares', 'Regiones tropicales', 'Regiones mediterráneas o subdesérticas', 'Regiones de alta montaña'], correct: 2, exp: 'Las ramblas se producen cuando el contraste de pendiente es menor en regiones mediterráneas o subdesérticas.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué perfil tienen los valles excavados por los ríos?', opts: ['Perfil en U', 'Perfil en V', 'Perfil rectangular', 'Perfil semicircular'], correct: 1, exp: 'Los valles fluviales tienen perfil transversal en V; los glaciares dan perfil en U.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Cuál es el desastre natural más frecuente?', opts: ['Terremotos', 'Inundaciones', 'Erupciones volcánicas', 'Movimientos en masa'], correct: 1, exp: 'Las inundaciones son los desastres naturales más frecuentes y los que más víctimas y daños materiales causan.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿De qué están formadas las playas?', opts: ['Solo restos de conchas', 'Una franja de sedimentos: arenas dejadas por los ríos en la desembocadura más restos de conchas', 'Lava enfriada por el mar', 'Sedimentos exclusivamente marinos'], correct: 1, exp: 'Las playas son una franja de sedimentos formada por las arenas que los ríos han dejado en la desembocadura y los restos de conchas.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Cuál NO es una fase del retroceso de un acantilado?', opts: ['Erosión debida al oleaje', 'Socavamiento de las rocas', 'Plataforma de abrasión', 'Subducción de la costa'], correct: 3, exp: 'Las fases son: 1) erosión por oleaje, 2) socavamiento, 3) rocas a punto de desplomarse, 4) plataforma de abrasión.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Por qué se forma un delta?', opts: ['Porque el río excava un cañón', 'Porque el mar no tiene suficiente energía para arrastrar los materiales hacia el interior', 'Por la acción del viento sobre las arenas', 'Por procesos gravitacionales submarinos'], correct: 1, exp: 'Los deltas se forman porque el mar no tiene suficiente energía para arrastrar hacia el interior los materiales depositados por los ríos.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Cuál es la diferencia entre un delta y un estuario?', opts: ['Un delta es marino y un estuario es fluvial', 'En el delta el mar no tiene energía para arrastrar los depósitos; en el estuario sí, y además erosiona la desembocadura', 'No hay diferencia, son sinónimos', 'El delta se da en zonas frías y el estuario en zonas cálidas'], correct: 1, exp: 'En el delta los materiales se acumulan porque el mar no tiene energía. En el estuario el mar sí tiene energía suficiente para arrastrar los depósitos al interior y erosionar la desembocadura.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué porcentaje de la superficie terrestre se encuentra en áreas marinas?', opts: ['Más del 30%', 'Más del 50%', 'Más del 70%', 'Más del 90%'], correct: 2, exp: 'Más del 70% de la superficie terrestre se encuentra en áreas marinas, donde predomina la sedimentación sobre la erosión.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué son los arrecifes?', opts: ['Volcanes submarinos', 'Construcciones formadas por esqueletos de pólipos sobre las plataformas', 'Zonas de fuerte pendiente', 'Cañones submarinos'], correct: 1, exp: 'Los arrecifes son construcciones formadas por esqueletos de pólipos que se desarrollan sobre las plataformas.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué es el talud?', opts: ['Una llanura submarina', 'Un área de fuerte pendiente al final de la plataforma con depósitos sedimentarios de gran potencia', 'Un tipo de cañón submarino', 'Un arrecife profundo'], correct: 1, exp: 'El talud es un área de fuerte pendiente situada al final de la plataforma; en su borde se forman depósitos sedimentarios de gran potencia.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué son los cañones submarinos?', opts: ['Volcanes submarinos extintos', 'Incisiones erosivas profundas en plataforma y talud, dispuestas perpendicularmente a la costa', 'Tipos de arrecifes', 'Llanuras submarinas'], correct: 1, exp: 'Los cañones submarinos son incisiones erosivas profundas en la plataforma y el talud, dispuestas más o menos perpendicularmente a la línea de costa.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué condición necesitan las aguas subterráneas para tener acción modeladora?', opts: ['Estar a gran profundidad', 'Actuar sobre rocas solubles o que puedan sufrir carbonatación', 'Tener salinidad alta', 'Encontrarse en zonas costeras'], correct: 1, exp: 'Las aguas subterráneas sólo tienen acción modeladora si actúan sobre rocas solubles o que puedan sufrir carbonatación.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Qué generan las aguas ácidas en terrenos carbonatados?', opts: ['Volcanes', 'Cuevas, galerías y espeleotemas (estalactitas y estalagmitas)', 'Acantilados', 'Ramblas'], correct: 1, exp: 'En terrenos carbonatados las aguas ácidas producen disolución y generan cuevas y galerías. Cuando los iones precipitan se forman espeleotemas (estalactitas y estalagmitas).' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿Cuál NO es una forma típica de un paisaje kárstico?', opts: ['Dolina', 'Lapiaz', 'Morrena', 'Sumidero'], correct: 2, exp: 'Las formas kársticas son lapiaz, cañón, poljés, sumidero, dolina, sima, surgencia, galería, caverna, estalactitas y estalagmitas. La morrena es una forma glaciar.' },
  { s: '6. Acción geológica de las aguas superficiales', q: '¿A qué riesgo expone la sobreexplotación de aguas subterráneas en zonas costeras?', opts: ['A la formación de dolinas', 'A la intrusión marina', 'A erupciones volcánicas', 'A inundaciones'], correct: 1, exp: 'Las aguas subterráneas son muy sensibles a la sobreexplotación, que puede ocasionar intrusión marina.' },

  { s: '7. Acción del hielo', q: '¿Qué perfil tienen los valles glaciares?', opts: ['Perfil en V', 'Perfil en U', 'Perfil cilíndrico', 'Perfil escalonado'], correct: 1, exp: 'Los hielos producen una acción erosiva intensa y generan valles con perfil transversal en U.' },
  { s: '7. Acción del hielo', q: '¿Qué son las morrenas?', opts: ['Tipos de glaciares', 'Acumulaciones de material rocoso que forman las lenguas glaciares al perder competencia', 'Depresiones en forma de anfiteatro', 'Hielos polares'], correct: 1, exp: 'Cuando las lenguas glaciares pierden competencia para seguir transportando, el material se acumula formando morrenas.' },
  { s: '7. Acción del hielo', q: '¿Cómo son los materiales transportados por los glaciares?', opts: ['Bien clasificados por tamaño', 'Desordenados, poco seleccionados', 'Solo arenas finas', 'Solo grandes bloques'], correct: 1, exp: 'Los materiales que transportan y depositan los glaciares están desordenados, poco seleccionados.' },
  { s: '7. Acción del hielo', q: '¿Qué son los circos glaciares?', opts: ['Lenguas de hielo en valles', 'Depresiones en forma de anfiteatro formadas por la acción del hielo en alta montaña', 'Grietas en glaciares', 'Acumulaciones de morrena'], correct: 1, exp: 'Los circos glaciares son depresiones en forma de anfiteatro formadas por la acción del hielo en zonas de alta montaña.' },

  { s: '8. Relieves del viento', q: '¿Qué partículas erosiona principalmente el viento?', opts: ['Bloques grandes', 'Arenas, limos y arcillas', 'Cantos rodados', 'Solo arcillas'], correct: 1, exp: 'El viento erosiona partículas finas (arenas, limos y arcillas), pero no las piedras y fragmentos rocosos de mayor tamaño.' },
  { s: '8. Relieves del viento', q: '¿Qué es la deflación?', opts: ['Sedimentación de arenas por el viento', 'Eliminación de la fracción arenosa por el viento, dejando el pavimento expuesto', 'Tipo de duna en movimiento', 'Acción química del viento'], correct: 1, exp: 'La deflación se produce por eliminación de la fracción arenosa, dejando el pavimento expuesto y formando desiertos llamados reg.' },
  { s: '8. Relieves del viento', q: '¿Qué es el loess?', opts: ['Un tipo de duna móvil', 'Un depósito de limos en grandes extensiones, muy apto para el cultivo', 'Una roca erosionada por el viento', 'Un sedimento marino'], correct: 1, exp: 'Los limos transportados por el viento pueden cubrir grandes extensiones formando depósitos llamados loess, muy aptos para el cultivo.' },
  { s: '8. Relieves del viento', q: '¿Qué son los taffoni y los ventifactos?', opts: ['Tipos de dunas', 'Formas de abrasión que el viento produce sobre superficies rocosas', 'Tipos de loess', 'Sedimentos marinos'], correct: 1, exp: 'Sobre las superficies rocosas el viento produce mucho desgaste o abrasión, generando taffoni y ventifactos.' },

  { s: '9. Rocas sedimentarias', q: '¿Cómo se llama el conglomerado formado por cantos redondeados?', opts: ['Brecha', 'Pudinga', 'Arenisca', 'Lutita'], correct: 1, exp: 'Los conglomerados están formados por cantos grandes. Si los cantos son redondeados se llama pudinga; si son angulosos, brecha.' },
  { s: '9. Rocas sedimentarias', q: '¿Cómo se llama el conglomerado formado por cantos angulosos?', opts: ['Pudinga', 'Brecha', 'Arenisca', 'Lutita'], correct: 1, exp: 'Si los cantos del conglomerado son angulosos, la roca se llama brecha.' },
  { s: '9. Rocas sedimentarias', q: '¿De qué está formada una arenisca?', opts: ['De cantos grandes redondeados', 'De arenas cementadas', 'De partículas más pequeñas que las arenas', 'De carbonatos precipitados'], correct: 1, exp: 'La arenisca está formada por arenas cementadas.' },
  { s: '9. Rocas sedimentarias', q: '¿Qué es una lutita?', opts: ['Una roca formada por cantos grandes', 'Una roca formada por arenas cementadas', 'Una roca formada por partículas de menor tamaño que las arenas', 'Una roca evaporítica'], correct: 2, exp: 'La lutita está formada por partículas de menor tamaño que las arenas.' },
  { s: '9. Rocas sedimentarias', q: '¿Cuál NO es un tipo de carbón?', opts: ['Turba', 'Lignito', 'Dolomía', 'Antracita'], correct: 2, exp: 'Los tipos de carbón son turba, lignito, hulla y antracita. La dolomía es una roca carbonatada.' },
  { s: '9. Rocas sedimentarias', q: '¿Cómo se forma el carbón?', opts: ['Por precipitación química', 'A partir de plancton marino enterrado', 'A partir de restos vegetales enterrados rápidamente con transformación bacteriana en condiciones reductoras', 'Por evaporación de salmueras'], correct: 2, exp: 'El carbón se forma a partir de restos vegetales enterrados rápidamente que han sufrido un proceso de transformación bacteriana en condiciones reductoras.' },
  { s: '9. Rocas sedimentarias', q: '¿Cómo se forma el petróleo?', opts: ['Por precipitación química', 'A partir de plancton marino enterrado', 'Por evaporación de salmueras', 'Por transformación bacteriana de vegetales'], correct: 1, exp: 'El petróleo es una mezcla de hidrocarburos formada a partir de plancton marino enterrado.' },
  { s: '9. Rocas sedimentarias', q: '¿Qué tipo de roca es el yeso?', opts: ['Detrítica', 'Organógena', 'Evaporítica', 'Silícea'], correct: 2, exp: 'El yeso es una roca evaporítica, formada por evaporación y precipitación, junto con la sal gema y la silvina.' },
  { s: '9. Rocas sedimentarias', q: '¿De qué tipo son las calizas y dolomías?', opts: ['Detríticas', 'Carbonatadas (precipitación de carbonatos de calcio y magnesio)', 'Silíceas', 'Organógenas'], correct: 1, exp: 'Las rocas carbonatadas se producen por precipitación de carbonatos de calcio y magnesio: calizas y dolomías.' },
  { s: '9. Rocas sedimentarias', q: '¿Cuál NO es un ejemplo de roca silícea?', opts: ['Sílex', 'Calcedonia', 'Ópalo', 'Hulla'], correct: 3, exp: 'Las rocas silíceas son sílex, calcedonia y ópalo. La hulla es un tipo de carbón (organógena).' },
  { s: '9. Rocas sedimentarias', q: '¿Cuáles son las características que definen una roca sedimentaria?', opts: ['Color, dureza, brillo, densidad', 'Estratificación, estructura, textura, composición', 'Foliación, esquistosidad, brillo', 'Magmatismo, metamorfismo, sedimentación'], correct: 1, exp: 'Las características de una roca sedimentaria son estratificación, estructura, textura y composición.' },
]

export const unidad: Unidad = {
  id: 'geo-u3',
  unidad: 'Unidad 3',
  title: 'Procesos Geológicos Externos',
  shortTitle: 'Procesos Externos',
  description: 'Capas fluidas, meteorización, suelo, erosión, transporte, sedimentación, modelado del relieve y rocas sedimentarias.',
  footer: 'Meteorización · Erosión · Modelado del relieve',
  mapaRoot: 'Procesos Geológicos Externos',
  accent: 'turquoise',
  mapa,
  fichas,
  quiz,
  Historia,
}
