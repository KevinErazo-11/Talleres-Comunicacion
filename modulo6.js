// Módulo 6 — Class 06: Types of research
const modulo6 = [
    {
        question: "¿Qué criterios de clasificación de los tipos de investigación se presentan en la clase?",
        options: [
            "El nivel de conocimiento, el grado de experimentación y las características de medida",
            "El nivel de formación, el grado de cooperación y las características de la institución",
            "El nivel de financiamiento, el grado de publicación y las características del autor",
            "El nivel de dificultad, el grado de originalidad y las características del tema"
        ],
        correctAnswer: 0,
        explanation: "La clase clasifica la investigación por nivel de conocimiento (exploratoria, descriptiva, correlacional, explicativa), grado de experimentación (experimental, cuasiexperimental) y características de medida (paradigma cualitativo o cuantitativo)."
    },
    {
        question: "¿Cuáles son los tipos de investigación por nivel de conocimiento presentados en la clase?",
        options: [
            "Descriptivos, cualitativos, correlacionales y cuantitativos",
            "Exploratorios, descriptivos, experimentales y explicativos",
            "Exploratorios, cuasiexperimentales, correlacionales y explicativos",
            "Exploratorios, descriptivos, correlacionales y explicativos"
        ],
        correctAnswer: 3,
        explanation: "Por nivel de conocimiento se clasifican en exploratorios, descriptivos, correlacionales y explicativos. Lo experimental y cuasiexperimental pertenece al grado de experimentación, y lo cualitativo y cuantitativo a las características de medida."
    },
    {
        question: "¿Qué tipos de investigación se clasifican por grado de experimentación?",
        options: [
            "Cualitativa y cuantitativa",
            "Experimental y cuasiexperimental",
            "Correlacional y explicativa",
            "Exploratoria y descriptiva"
        ],
        correctAnswer: 1,
        explanation: "El grado de experimentación distingue entre investigación experimental y cuasiexperimental. Cualitativa y cuantitativa son paradigmas de medida, y los demás son niveles de conocimiento."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son características del estudio exploratorio?",
        options: [
            "Son estudios novedosos, poco explorados",
            "Se usan para estudiar un problema sin una definición clara",
            "Sus resultados no pueden generalizarse",
            "Se usan para demostrar relaciones causales mediante manipulación de variables"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Los estudios exploratorios son novedosos, poco explorados, no generalizan sus resultados y se usan para problemas sin una definición clara. Demostrar relaciones causales manipulando variables es propio de la investigación experimental."
    },
    {
        question: "¿Qué prioriza el estudio exploratorio según la clase?",
        options: [
            "Las cifras de población total",
            "Los modelos estadísticos predictivos",
            "Las mediciones de laboratorio",
            "Las opiniones de las personas"
        ],
        correctAnswer: 3,
        explanation: "El estudio exploratorio da prioridad a las opiniones de las personas."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son métodos primarios del estudio exploratorio, en los que se estudia un problema en profundidad?",
        options: [
            "Entrevistas",
            "Grupos focales",
            "Ensayos clínicos aleatorizados",
            "Encuestas"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Los métodos primarios incluyen encuestas, entrevistas, grupos focales y observación. Los ensayos clínicos aleatorizados son un diseño experimental."
    },
    {
        question: "¿Qué son los métodos secundarios en el estudio exploratorio?",
        options: [
            "Investigaciones sobre bases de datos propias, como registros estadísticos y archivos de datos",
            "Investigaciones realizadas en campo, como encuestas, entrevistas y grupos focales",
            "Investigaciones con grupos de control, como ensayos aleatorizados y pruebas de laboratorio",
            "Investigaciones previamente publicadas, como estudios de caso y referencias en línea y bibliográficas"
        ],
        correctAnswer: 3,
        explanation: "Los métodos secundarios usan investigaciones ya publicadas, como estudios de caso y referencias en línea y bibliográficas. Los primarios son encuestas, entrevistas, grupos focales y observación."
    },
    {
        question: "¿De dónde proviene la naturaleza del estudio descriptivo?",
        options: [
            "De su propio método: experimentar",
            "De su propio objetivo: predecir",
            "De su propio diseño: manipular",
            "De su propio nombre: describir"
        ],
        correctAnswer: 3,
        explanation: "La naturaleza del estudio descriptivo viene de su nombre: describir."
    },
    {
        question: "¿Qué enfatizan los estudios descriptivos, a diferencia de los demás?",
        options: [
            "El «por qué», mientras que otros buscan el «qué»",
            "El «qué», mientras que otros buscan el «por qué»",
            "El «cuándo», mientras que otros buscan el «dónde»",
            "El «cuánto», mientras que otros buscan el «cómo»"
        ],
        correctAnswer: 1,
        explanation: "Los estudios descriptivos enfatizan el «qué», a diferencia de los otros que buscan el «por qué»."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son características del estudio descriptivo?",
        options: [
            "Sus datos no pueden generalizarse ni determinan causa y efecto",
            "Analiza sectores de la población",
            "Determina relaciones de causa y efecto mediante manipulación de variables",
            "Es cuantitativo e identifica diversos componentes de un fenómeno"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "El estudio descriptivo analiza sectores de la población, es cuantitativo, identifica componentes de un fenómeno y no permite generalizar ni determinar causa y efecto."
    },
    {
        question: "¿Cuál es la técnica más usada en el estudio descriptivo?",
        options: [
            "El experimento, con un grupo de control",
            "La entrevista, con una muestra pequeña",
            "El estudio de caso, con un sujeto único",
            "La encuesta, con una muestra grande"
        ],
        correctAnswer: 3,
        explanation: "Las encuestas son la técnica más usada en este tipo de investigación, con una muestra grande."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son métodos mencionados para el estudio descriptivo?",
        options: [
            "Estudios de caso, con análisis profundo de los fenómenos de estudio",
            "Cualitativo, que no involucra números y cuantitativo, con cifras, datos y cantidades",
            "Experimentación, con manipulación de la variable independiente",
            "Observación, que no influye en ninguna variable"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Los métodos del estudio descriptivo incluyen observación, enfoques cualitativos y cuantitativos, estudios de caso y encuestas. La manipulación de la variable independiente es propia de la investigación experimental."
    },
    {
        question: "¿Qué busca estudiar el estudio correlacional?",
        options: [
            "Opiniones y percepciones, preguntándose qué piensa cada quién",
            "Descripciones y frecuencias, preguntándose cuántos hay",
            "Procesos y significados, preguntándose cómo se vive",
            "Causas y efectos, preguntándose qué causa qué"
        ],
        correctAnswer: 3,
        explanation: "El estudio correlacional se ocupa de causas y efectos: ¿qué causa qué? Los demás planteamientos se asocian al estudio exploratorio, al descriptivo y al enfoque cualitativo."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles son aplicaciones del estudio correlacional con respecto a los efectos?",
        options: [
            "Los efectos negativos se potencian",
            "Los efectos negativos se previenen",
            "Los efectos positivos se eliminan",
            "Los efectos positivos se potencian"
        ],
        correctAnswer: [1, 3],
        explanation: "En el estudio correlacional, los efectos positivos se potencian y los negativos se previenen. Eliminar los positivos o potenciar los negativos contradice ese uso."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son advertencias sobre las correlaciones señaladas en la clase?",
        options: [
            "Los hechos correlacionados no necesariamente están relacionados",
            "Cualquiera de los dos hechos correlacionados puede causar al otro",
            "Los hechos correlacionados siempre demuestran una relación causal directa",
            "Los hechos correlacionados pueden tener una causa común"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "La clase advierte que correlación no implica relación, que puede haber una causa común y que cualquiera de los dos hechos puede causar al otro; además, las causas son complejas. Afirmar que siempre implican causalidad directa es un error."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son los métodos del estudio correlacional según la clase?",
        options: [
            "Observación, donde el investigador no influye en el fenómeno de estudio",
            "Archivo de datos, usando estudios previos",
            "Ensayo con asignación aleatoria y manipulación de variables",
            "Encuestas, definiendo el universo y el tipo de muestra"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "El estudio correlacional emplea observación (sin influir en el fenómeno, en un entorno público), encuestas (definiendo universo y tipo de muestra) y archivos de datos con estudios previos. La asignación aleatoria con manipulación corresponde a la investigación experimental."
    },
    {
        question: "¿Para qué se usan los estudios explicativos según la clase?",
        options: [
            "Para medir un tema con cifras exactas",
            "Para explicar un tema en detalle",
            "Para comprobar un tema con experimentos",
            "Para generalizar un tema a la población"
        ],
        correctAnswer: 1,
        explanation: "Según la clase, los estudios explicativos se usan para explicar un tema en detalle."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son características del estudio explicativo según la clase?",
        options: [
            "Sus datos son concluyentes y permiten generalizar a toda la población",
            "Son el preámbulo de una investigación mayor",
            "Sus datos no son concluyentes",
            "De ellos se generan preguntas de investigación"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Según la diapositiva, los estudios explicativos son el preámbulo de una investigación mayor, sus datos no son concluyentes, generan preguntas de investigación y aportan nuevas perspectivas al fenómeno. Afirmar datos concluyentes y generalizables contradice lo expuesto."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son métodos asociados al estudio explicativo en la clase?",
        options: [
            "Grupos focales",
            "Estudios de caso",
            "Entrevistas",
            "Ensayos de laboratorio con grupo control"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "El estudio explicativo se asocia con entrevistas, grupos focales y estudios de caso. Los ensayos de laboratorio con grupo de control corresponden a la investigación experimental."
    },
    {
        question: "¿Cómo se caracteriza la investigación cuasiexperimental respecto a la selección del sujeto de estudio?",
        options: [
            "El sujeto de estudio se selecciona al azar y se asigna aleatoriamente a un grupo",
            "El sujeto de estudio se selecciona por conveniencia del autor y se modifica durante el estudio",
            "El sujeto de estudio no se selecciona al azar, sino que se encuentra o está establecido previamente",
            "El sujeto de estudio se selecciona por sorteo y se mantiene constante en todo el estudio"
        ],
        correctAnswer: 2,
        explanation: "En la investigación cuasiexperimental el sujeto no se elige aleatoriamente, sino que se encuentra o se establece previamente."
    },
    {
        question: "¿Qué metodología caracteriza a la investigación cuasiexperimental y qué datos registra?",
        options: [
            "Es descriptiva y registra datos cualitativos y cuantitativos",
            "Es explicativa y registra datos solo cualitativos",
            "Es experimental y registra datos solo cuantitativos",
            "Es exploratoria y registra datos de opinión"
        ],
        correctAnswer: 0,
        explanation: "La metodología cuasiexperimental se caracteriza por ser descriptiva y registra datos cualitativos y cuantitativos."
    },
    {
        question: "¿Cuál es el orden de las etapas de la investigación cuasiexperimental presentadas en la clase?",
        options: [
            "Desarrollo del estudio, selección del grupo de estudio, análisis de resultados y conclusiones",
            "Selección del grupo de estudio, desarrollo del estudio, análisis de resultados y conclusiones",
            "Selección del grupo de estudio, análisis de resultados, desarrollo del estudio y conclusiones",
            "Selección del grupo de estudio, desarrollo del estudio, conclusiones y análisis de resultados"
        ],
        correctAnswer: 1,
        explanation: "Las etapas son: selección del grupo de estudio, desarrollo del estudio, análisis de resultados y conclusiones."
    },
    {
        question: "¿Cómo se define la investigación experimental en la clase?",
        options: [
            "Cualquier investigación con enfoque cualitativo en la que un conjunto de variables se interpreta subjetivamente mientras el otro conjunto se mide como objeto del experimento",
            "Cualquier investigación con enfoque observacional en la que un conjunto de variables se describe sin cambios mientras el otro conjunto se ignora como objeto del estudio",
            "Cualquier investigación con enfoque científico en la que un conjunto de variables se mantiene constante mientras el otro conjunto se mide como objeto del experimento",
            "Cualquier investigación con enfoque bibliográfico en la que un conjunto de variables se recopila de fuentes mientras el otro conjunto se mide como objeto del estudio"
        ],
        correctAnswer: 2,
        explanation: "La investigación experimental mantiene constante un conjunto de variables mientras se mide el otro como objeto del experimento."
    },
    {
        question: "¿Cuándo se considera exitosa una investigación experimental?",
        options: [
            "Cuando hay un cambio en la hipótesis debido a la manipulación de los instrumentos",
            "Cuando hay un cambio en la variable independiente debido a la manipulación de la variable dependiente",
            "Cuando hay un cambio en la muestra debido a la manipulación de los investigadores",
            "Cuando hay un cambio en la variable dependiente debido a la manipulación de la variable independiente"
        ],
        correctAnswer: 3,
        explanation: "Una investigación experimental es exitosa cuando la manipulación de la variable independiente produce un cambio en la variable dependiente."
    },
    {
        question: "¿En qué se basa la investigación experimental para probar o refutar una hipótesis?",
        options: [
            "En la opinión de expertos",
            "En el análisis estadístico",
            "En la revisión bibliográfica",
            "En la observación subjetiva"
        ],
        correctAnswer: 1,
        explanation: "La investigación experimental se basa en el análisis estadístico para probar o refutar una hipótesis y se considera una prueba de laboratorio."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de las siguientes características corresponden al paradigma cualitativo?",
        options: [
            "Se basa en la fenomenología",
            "Se basa en el positivismo y busca distancia con el fenómeno",
            "Es subjetivo y hay intervención del investigador",
            "Enfatiza el proceso y busca validez: profunda y real"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "El paradigma cualitativo se basa en la fenomenología, la observación, la subjetividad, la intervención del investigador, el énfasis en el proceso y la validez (profunda y real). El positivismo y la distancia con el fenómeno corresponden al paradigma cuantitativo."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de las siguientes características corresponden al paradigma cuantitativo?",
        options: [
            "Enfatiza los resultados y busca seguridad: replicable",
            "Se basa en la fenomenología y en la intervención del investigador",
            "Es objetivo y mantiene distancia con el fenómeno de estudio",
            "Se basa en el positivismo y en métricas"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "El paradigma cuantitativo se basa en positivismo y métricas, es objetivo, mantiene distancia con el fenómeno, enfatiza resultados y busca seguridad (replicabilidad). La fenomenología y la intervención del investigador son del paradigma cualitativo."
    },
    {
        question: "¿Qué tipo de validez busca el paradigma cualitativo y qué busca el cuantitativo?",
        options: [
            "Ambos buscan ser válidos (profundos y reales) mediante la observación",
            "El cualitativo busca ser seguro (replicable); el cuantitativo busca ser válido (profundo y real)",
            "Ambos buscan ser seguros (replicables) mediante métricas",
            "El cualitativo busca ser válido (profundo y real); el cuantitativo busca ser seguro (replicable)"
        ],
        correctAnswer: 3,
        explanation: "El cualitativo se orienta a la validez: profunda y real; el cuantitativo a la seguridad: replicable."
    },
    {
        question: "¿Qué énfasis tiene cada paradigma de investigación?",
        options: [
            "Ambos enfatizan los resultados por igual",
            "El cualitativo enfatiza el proceso; el cuantitativo enfatiza los resultados",
            "Ambos enfatizan el proceso por igual",
            "El cualitativo enfatiza los resultados; el cuantitativo enfatiza el proceso"
        ],
        correctAnswer: 1,
        explanation: "El paradigma cualitativo enfatiza el proceso y el cuantitativo los resultados."
    },
    {
        question: "¿Cuál es el orden de las seis etapas de la organización de la investigación presentadas en la clase?",
        options: [
            "Tema, búsqueda de información, análisis de datos, formulación del problema, operacionalización del problema y factibilidad de la investigación",
            "Tema, búsqueda de información, formulación del problema, análisis de datos, factibilidad de la investigación y operacionalización del problema",
            "Búsqueda de información, tema, análisis de datos, formulación del problema, operacionalización del problema y factibilidad de la investigación",
            "Tema, formulación del problema, búsqueda de información, análisis de datos, operacionalización del problema y factibilidad de la investigación"
        ],
        correctAnswer: 0,
        explanation: "Las etapas son: 1) tema, 2) búsqueda de información, 3) análisis de datos, 4) formulación del problema, 5) operacionalización del problema y 6) factibilidad de la investigación."
    },
    {
        question: "¿Para qué se usa el método booleano según la clase?",
        options: [
            "Para obtener datos más cualitativos sobre un tema subjetivo",
            "Para obtener muestras más grandes sobre un tema general",
            "Para obtener hipótesis más amplias sobre un tema variable",
            "Para obtener resultados más exactos sobre un tema específico"
        ],
        correctAnswer: 3,
        explanation: "El método booleano se usa para obtener resultados más exactos sobre un tema específico en la búsqueda de información."
    },
    {
        question: "¿Cómo funciona el método booleano en cuanto a los descriptores y al sistema numérico?",
        options: [
            "Se determinan descriptores únicos y generales, y se usa un sistema decimal (0-9)",
            "Se determinan descriptores fijos y variables, y se usa un sistema ternario (0-1-2)",
            "Se determinan descriptores fijos y variables, y se usa un sistema binario (0-1)",
            "Se determinan descriptores aleatorios y ocultos, y se usa un sistema binario (A-B)"
        ],
        correctAnswer: 2,
        explanation: "El método booleano determina descriptores fijos y variables, y es un sistema binario (0-1)."
    },
    {
        question: "¿Cuál es la fórmula del método booleano para calcular el número de combinaciones según los descriptores?",
        options: [
            "2n, donde n es el número de descriptores; por ejemplo, 2 × 5 = 10",
            "n!, donde n es el número de descriptores; por ejemplo, 5! = 120",
            "2^n, donde n es el número de descriptores; por ejemplo, 2^5 = 32",
            "n^2, donde n es el número de descriptores; por ejemplo, 5^2 = 25"
        ],
        correctAnswer: 2,
        explanation: "El número de combinaciones es 2^n; con 5 descriptores resultan 2^5 = 32. Las demás fórmulas no corresponden al sistema binario."
    },
    {
        question: "Si se usan 4 descriptores en el método booleano, ¿cuántas combinaciones resultan?",
        options: [
            "16 combinaciones",
            "32 combinaciones",
            "12 combinaciones",
            "8 combinaciones"
        ],
        correctAnswer: 0,
        explanation: "Con la fórmula 2^n y n = 4, resultan 2^4 = 16 combinaciones. Con 3 descriptores serían 8 y con 5 serían 32."
    },
    {
        question: "Seleccione tres respuestas. ¿Qué incluye el paso de definir el problema al formular un problema de investigación?",
        options: [
            "Estudiar únicamente problemas en el sentido negativo del término",
            "Observar y leer para conocer los problemas que valen la pena investigar",
            "Discutir un tema específico",
            "Hablar con expertos y con los involucrados"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Definir el problema implica discutir un tema específico, observar y leer, y hablar con expertos e involucrados. No solo hay que estudiar problemas en el sentido negativo del término."
    },
    {
        question: "Seleccione tres respuestas. ¿Qué incluye el paso de delimitar el problema?",
        options: [
            "Ampliar el problema a todos los casos posibles",
            "Precisar el lugar y/o el tiempo del problema",
            "Especificar con claridad lo que se va a estudiar",
            "Especificar la acción que se produce y los actores involucrados"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Delimitar el problema implica especificar con claridad qué se estudiará, la acción y los actores (organismos, personas, organizaciones, ecosistemas, países) y el lugar o tiempo. Ampliarlo a todos los casos posibles es lo contrario a delimitar."
    },
    {
        question: "¿Qué es la formulación de las preguntas de investigación (RQ) y las hipótesis, según la clase?",
        options: [
            "La parte en que el investigador genera un presupuesto que luego será aprobado o rechazado tras la evaluación y el cálculo de gastos",
            "La parte en que el investigador genera un tema que luego será elegido o descartado tras la búsqueda y la lectura de fuentes",
            "La parte en que el investigador genera una conclusión que luego será publicada o archivada tras la revisión y la edición de resultados",
            "La parte en que el investigador genera un supuesto que luego será confirmado o rechazado tras la experimentación y el análisis de resultados"
        ],
        correctAnswer: 3,
        explanation: "Las hipótesis son supuestos que luego se confirman o rechazan tras la experimentación y el análisis de resultados."
    },
    {
        question: "Seleccione tres respuestas. ¿Qué requisitos tiene la formulación de hipótesis según la clase?",
        options: [
            "Realizar una investigación preliminar sobre el tema",
            "Tener un sustento teórico con referencias bibliográficas",
            "Evitar toda referencia a estudios previos",
            "Medir las variables dependiente e independiente"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Para formular hipótesis se realiza una investigación preliminar, se justifica con resultados de otras investigaciones, se requiere sustento teórico con referencias, se mide la variable dependiente e independiente y la hipótesis es respuesta a teorías o estudios previos. Evitar los estudios previos contradice estos requisitos."
    },
    {
        question: "En el ejemplo «en una historia de pandemia, el encuadre noticioso negativo causará mayor experiencia de emociones negativas», ¿cuáles son la variable independiente (VI) y la dependiente (VD)?",
        options: [
            "VI: pandemia; VD: espectadores",
            "VI: emociones; VD: encuadre noticioso",
            "VI: espectadores; VD: encuadre noticioso",
            "VI: encuadre noticioso; VD: emociones"
        ],
        correctAnswer: 3,
        explanation: "El encuadre noticioso (new frame) es la variable que se manipula (VI) y las emociones son la variable que cambia (VD)."
    },
    {
        question: "En el ejemplo «los padres primerizos con mayor educación están más relajados en el parto», ¿cuál es la variable dependiente (VD) señalada en la clase?",
        options: [
            "La edad de los padres",
            "El tiempo de parto",
            "La educación",
            "La actitud"
        ],
        correctAnswer: 3,
        explanation: "La clase señala como variable dependiente la actitud (relajación)."
    },
    {
        question: "En el tema de posicionamiento de marca del vino de mortiño «La Carmela», ¿qué tipo de preguntas se formulan al preguntarse por las causas del problema?",
        options: [
            "Preguntas sobre si el problema ocurre en otros lugares",
            "Preguntas sobre por qué se debería comprar el producto y qué características tiene",
            "Preguntas sobre qué ocurriría al aplicar la solución propuesta",
            "Preguntas sobre cómo contribuye el producto al cuidado ambiental"
        ],
        correctAnswer: 1,
        explanation: "Al preguntarse por las causas del problema se formulan preguntas como por qué comprar el producto y qué características tiene."
    },
    {
        question: "En el mismo tema, ¿qué tipo de pregunta se formula al preguntarse por las consecuencias del problema?",
        options: [
            "¿Por qué deberían comprar el producto?",
            "¿Por qué elegir «La Carmela» sobre otros vinos orgánicos?",
            "¿Cómo contribuye este producto al cuidado del medio ambiente?",
            "¿Qué características tiene el producto?"
        ],
        correctAnswer: 2,
        explanation: "Al pensar en las consecuencias del problema en algún ámbito se pregunta cómo contribuye el producto al cuidado ambiental."
    },
    {
        question: "¿Qué tipo de pregunta se formula al pensar en una solución al problema en el ejemplo del vino «La Carmela»?",
        options: [
            "¿Por qué los consumidores deberían elegir «La Carmela» frente a otros vinos orgánicos?",
            "¿Promover los componentes del vino generará ventas y contribuirá al cuidado ambiental?",
            "¿Cuáles son las características del producto que permiten su comercialización?",
            "¿Por qué los vinos orgánicos se han vuelto populares en los últimos años?"
        ],
        correctAnswer: 1,
        explanation: "Al pensar en una solución, se pregunta qué ocurriría si se aplicara y cómo afectaría al problema; por ejemplo, si promover los componentes del vino generará ventas y contribuirá al cuidado ambiental."
    },
    {
        question: "¿Qué tipo de investigación se origina al preguntarse si el problema ocurre en otros lugares, en el ejemplo del vino «La Carmela»?",
        options: [
            "Una investigación comparativa, con una pregunta como: ¿por qué los vinos orgánicos se han vuelto populares en los últimos años?",
            "Una investigación comparativa, con una pregunta como: ¿por qué elegir «La Carmela» frente a otros vinos orgánicos?",
            "Una investigación longitudinal, con una pregunta como: ¿por qué elegir «La Carmela» frente a otros vinos orgánicos?",
            "Una investigación exploratoria, con una pregunta como: ¿por qué elegir «La Carmela» frente a sus propias ventas pasadas?"
        ],
        correctAnswer: 1,
        explanation: "Preguntarse si el problema ocurre en otros lugares da lugar a preguntas para una investigación comparativa. Preguntarse si el problema ocurrió antes lleva a una investigación longitudinal."
    },
    {
        question: "¿Qué tipo de investigación se origina al preguntarse si el problema actual ocurrió antes o si un problema pasado ocurre hoy?",
        options: [
            "Una investigación transversal",
            "Una investigación longitudinal",
            "Una investigación cuasiexperimental",
            "Una investigación comparativa"
        ],
        correctAnswer: 1,
        explanation: "Preguntarse si el problema ocurrió antes, o si uno pasado ocurre hoy, origina preguntas para una investigación longitudinal. En el ejemplo, los vinos orgánicos se han vuelto populares en los últimos años."
    },
    {
        question: "Seleccione tres respuestas. ¿Qué aspectos considera la factibilidad de la investigación?",
        options: [
            "Los recursos disponibles: personales, equipo y economía",
            "El cronograma",
            "Las fuentes",
            "La popularidad del tema en las redes sociales"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "La factibilidad considera las fuentes, el cronograma (schedule) y los recursos disponibles (personales, equipo para desarrollar la investigación y economía). La popularidad en redes sociales no se menciona."
    },
    {
        question: "¿Qué obra de Pawar (2020) se cita en las referencias de la clase?",
        options: [
            "«Type of research and type research design»",
            "«Booleansearchv1.2: herramienta para la búsqueda de booleanas»",
            "«Los paradigmas en la investigación científica»",
            "«Research methodology tools and techniques»"
        ],
        correctAnswer: 0,
        explanation: "Pawar (2020) es «Type of research and type research design», en Social Research Methodology. Pandey y Pandey (2021) escribieron sobre herramientas y técnicas de metodología; Mejía-Rivas (2022) sobre paradigmas; Blanco y Cardona (2022) sobre la herramienta booleana."
    },
    {
        question: "¿Qué obra de Mejía-Rivas (2022) se cita en las referencias de la clase?",
        options: [
            "«Type of research and type research design»",
            "«Research methodology tools and techniques»",
            "«Los paradigmas en la investigación científica»",
            "«Agenda-setting e inmigración: análisis crítico del discurso»"
        ],
        correctAnswer: 2,
        explanation: "Mejía-Rivas (2022), de la Revista Ciencia Agraria, trata sobre los paradigmas en la investigación científica."
    },
    {
        question: "¿Qué obra de Blanco Vanegas y Cardona Toro (2022) se cita en las referencias de la clase?",
        options: [
            "«Los paradigmas en la investigación científica»",
            "«Research methodology tools and techniques»",
            "«Cómo redactar un artículo científico»",
            "«Booleansearchv1.2: herramienta para la búsqueda de booleanas aplicables a los motores especializados en la investigación científica»"
        ],
        correctAnswer: 3,
        explanation: "Blanco Vanegas y Cardona Toro (2022) son autores de Booleansearchv1.2, una herramienta para búsquedas booleanas en motores de investigación científica."
    }
];

window.modulo6 = modulo6;