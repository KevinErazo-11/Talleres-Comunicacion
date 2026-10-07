// Módulo 5 — Class 06: Parts of scientific research
const modulo5 = [
    {
        question: "Según la clase, ¿qué es un artículo científico?",
        options: [
            "Un documento escrito que resume los resultados publicados de varias investigaciones",
            "Un documento oral que expone los resultados preliminares de una investigación",
            "Un documento escrito que describe los resultados originales de una investigación",
            "Un documento legal que registra los resultados patentables de una investigación"
        ],
        correctAnswer: 2,
        explanation: "La clase define el artículo científico como un documento escrito que describe resultados originales de una investigación. Resumir investigaciones ajenas corresponde a una revisión, y las presentaciones orales o los registros de patentes son formatos distintos."
    },
    {
        question: "¿Cómo se describe la estructura del artículo científico?",
        options: [
            "Tiene una estructura definida, aunque algunos editores proponen ligeros cambios de orden y de secciones en el esquema general",
            "Tiene una estructura definida, aunque todos los editores exigen cambios radicales de orden y de secciones en el esquema general",
            "Tiene una estructura libre, aunque algunos editores proponen ligeros cambios de formato y de estilo en el esquema general",
            "Tiene una estructura variable, aunque algunos autores proponen ligeros cambios de contenido y de extensión en el esquema general"
        ],
        correctAnswer: 0,
        explanation: "El artículo tiene una estructura definida y solo algunos editores introducen ligeros cambios en el orden y las secciones. No es libre ni cambia radicalmente según cada editor."
    },
    {
        question: "¿Qué precisa la clase sobre el carácter del artículo científico como informe?",
        options: [
            "Es un informe periodístico, escrito y difundido, que expone y describe noticias recientes, entrevistas o declaraciones basadas en testimonios",
            "Es un informe técnico, escrito y archivado, que expone y describe opiniones personales, hipótesis o suposiciones basadas en intuiciones",
            "Es un informe original, escrito y publicado, que expone y describe resultados experimentales, nuevo conocimiento o experiencias basadas en hechos conocidos",
            "Es un informe comercial, escrito y distribuido, que expone y describe productos, servicios o marcas basados en estudios de mercado"
        ],
        correctAnswer: 2,
        explanation: "El artículo es un informe original, escrito y publicado que expone resultados experimentales, nuevo conocimiento o experiencias basadas en hechos conocidos."
    },
    {
        question: "Respecto a los resultados de un artículo científico, ¿qué se afirma en la clase?",
        options: [
            "Deben ser válidos y fiables, aunque no necesariamente experimentales, pues también pueden ser teóricos",
            "Deben ser válidos y fiables, y siempre experimentales, pues los teóricos no son publicables",
            "Deben ser comerciales y aplicables, aunque no necesariamente originales, pues pueden ser repetidos",
            "Deben ser novedosos y espectaculares, aunque no necesariamente verificables, pues pueden ser hipotéticos"
        ],
        correctAnswer: 0,
        explanation: "Los resultados deben ser válidos y fiables, pero pueden ser teóricos y no solo experimentales. Exigir resultados siempre experimentales, solo espectaculares o comerciales contradice la diapositiva."
    },
    {
        question: "¿Qué significa que un artículo científico sea «original»?",
        options: [
            "Que cada artículo reproduce con exactitud los resultados de una investigación anterior",
            "Que cada artículo reúne en una sola publicación los resultados de varias investigaciones",
            "Que cada artículo comunica por primera vez los resultados de una investigación",
            "Que cada artículo traduce al idioma local los resultados de una investigación extranjera"
        ],
        correctAnswer: 2,
        explanation: "Un artículo es original cuando comunica por primera vez los resultados de una investigación. Reproducir, traducir o recopilar investigaciones no cumple ese criterio."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles de las siguientes son características de extensión y presentación del artículo científico según la clase?",
        options: [
            "Suele ocupar, en promedio, 70 a 80 páginas de un libro",
            "Se acompaña de gráficos, tablas y, ocasionalmente, fotografías y dibujos",
            "Suele ocupar, en promedio, 7 a 8 páginas de una revista",
            "Se acompaña de novelas gráficas y, siempre, videos y animaciones"
        ],
        correctAnswer: [1, 2],
        explanation: "El artículo ocupa en promedio entre 7 y 8 páginas de una revista, con gráficos, tablas y, a veces, fotografías o dibujos, según las normas de la revista. Las extensiones de libro y los videos obligatorios no se mencionan."
    },
    {
        question: "En cuanto a los autores o firmantes del artículo, ¿qué indica la clase?",
        options: [
            "Normalmente no superan los diez; el primero es el director del trabajo y quien aparece en último lugar se entiende como el autor principal",
            "Normalmente no superan los seis; el primero es el autor principal y quien aparece en último lugar se entiende como el investigador que dirige el trabajo",
            "Normalmente no superan los seis; el último es el autor principal y quien aparece en primer lugar se entiende como el investigador que dirige el trabajo",
            "Normalmente superan los diez; el primero es el autor principal y quien aparece en último lugar se entiende como el editor de la revista"
        ],
        correctAnswer: 1,
        explanation: "No suelen superarse los seis autores: el primero es el autor principal y el último se entiende como quien dirige el trabajo. Los demás planteamientos cambian la cantidad o invierten esos roles."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de los siguientes rasgos describen al artículo científico como documento?",
        options: [
            "Es formal, público, controlado y ordenado",
            "Es informal, privado y flexible en su orden",
            "Debe cumplir criterios clave de redacción",
            "Tiene rigor científico y carácter lógico"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "El artículo es un documento formal, público, controlado y ordenado, con criterios de redacción, rigor científico y carácter lógico. Ser informal, privado o flexible contradice esas características."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de los siguientes son criterios de redacción del artículo científico?",
        options: [
            "Ser extenso y ornamentado, con lenguaje coloquial",
            "Ser claro y preciso, con lenguaje y vocabulario científico",
            "Tener un estilo formal",
            "Ser breve y conciso, y compatible con la ética"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Debe ser claro, preciso, formal, breve, conciso y compatible con la ética, con lenguaje científico. Un estilo extenso, ornamentado y coloquial contradice esos criterios."
    },
    {
        question: "¿Cuál es el orden general de las secciones del artículo científico?",
        options: [
            "Título y autores, introducción, resumen, materiales y métodos, resultados, discusión y conclusiones, referencias, agradecimientos y otros",
            "Título y autores, resumen, introducción, materiales y métodos, resultados, referencias, discusión y conclusiones, agradecimientos y otros",
            "Título y autores, resumen, introducción, resultados, materiales y métodos, discusión y conclusiones, referencias, agradecimientos y otros",
            "Título y autores, resumen, introducción, materiales y métodos, resultados, discusión y conclusiones, referencias, agradecimientos y otros"
        ],
        correctAnswer: 3,
        explanation: "El orden es: 1) título y autores, 2) resumen, 3) introducción (estado del arte), 4) materiales y métodos, 5) resultados, 6) discusión y conclusiones, 7) referencias, 8) agradecimientos y 9) otros."
    },
    {
        question: "¿Qué elemento se incluye dentro de la introducción en el esquema general, marcado con un asterisco?",
        options: [
            "El estado del arte",
            "La hipótesis de trabajo",
            "La lista de agradecimientos",
            "La descripción del diseño experimental"
        ],
        correctAnswer: 0,
        explanation: "El esquema señala el estado del arte (State of Art) como parte de la introducción. El diseño pertenece a materiales y métodos y los agradecimientos a una sección posterior."
    },
    {
        question: "¿Qué secciones se agrupan en una misma etapa del esquema general, en la sexta posición?",
        options: [
            "Los resultados y la discusión",
            "La introducción y las conclusiones",
            "Las conclusiones y las referencias",
            "La discusión y las conclusiones"
        ],
        correctAnswer: 3,
        explanation: "En el esquema general la sexta posición agrupa discusión y conclusiones; los resultados forman una sección previa, y las referencias son la séptima."
    },
    {
        question: "¿Qué secciones componen el modelo IMRaD?",
        options: [
            "Resumen, métodos, resultados y discusión",
            "Introducción, resultados, discusión y métodos",
            "Introducción, métodos, resultados y diseño",
            "Introducción, materiales y métodos, resultados y discusión"
        ],
        correctAnswer: 3,
        explanation: "IMRaD significa Introduction, Material and Methods, Results and Discussion. Incluir el resumen corresponde a AIMRaD y cambiar el orden corresponde a IRDaM."
    },
    {
        question: "¿En qué se diferencia el modelo AIMRaD del modelo IMRaD?",
        options: [
            "Incluye la bibliografía (References) al inicio",
            "Incluye el resumen (Abstract) al inicio",
            "Incluye la hipótesis (Hypothesis) en el medio",
            "Incluye los agradecimientos (Acknowledgments) al final"
        ],
        correctAnswer: 1,
        explanation: "AIMRaD añade el Abstract al inicio de la estructura IMRaD. Los agradecimientos o la bibliografía no definen esa variante."
    },
    {
        question: "¿Cuál es el orden de las secciones del modelo IRDaM?",
        options: [
            "Introducción, resultados, discusión y materiales y métodos",
            "Resumen, introducción, materiales y métodos, resultados y discusión",
            "Introducción, discusión, resultados y materiales y métodos",
            "Introducción, materiales y métodos, resultados y discusión"
        ],
        correctAnswer: 0,
        explanation: "IRDaM ubica la introducción, los resultados y la discusión primero, y deja materiales y métodos al final. El orden clásico es el del modelo IMRaD."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son características del título de un artículo científico?",
        options: [
            "Debe ser corto, conciso y claro",
            "Debe redactarse antes de iniciar la investigación y no modificarse",
            "Puede ser informativo o indicativo",
            "Se recomienda escribirlo después de redactar el núcleo del trabajo"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "El título debe ser corto, conciso y claro, se recomienda escribirlo tras el núcleo del trabajo (introducción, métodos, resultados y discusión) y puede ser informativo o indicativo. Redactarlo al inicio sin modificarlo contradice la recomendación."
    },
    {
        question: "¿Cuál es la diferencia entre un título informativo y uno indicativo?",
        options: [
            "El informativo puede incluir parte de los resultados; el indicativo solo señala el tema del trabajo",
            "El indicativo puede incluir parte de los resultados; el informativo solo señala el tema del trabajo",
            "El informativo incluye al autor principal; el indicativo incluye a la institución de afiliación",
            "El informativo se redacta antes del trabajo; el indicativo se redacta después de la revisión de pares"
        ],
        correctAnswer: 0,
        explanation: "Según los ejemplos, «Alta incidencia de infartos de miocardio en fumadores» es informativo (incluye parte del resultado) e «Incidencia de infarto de miocardio en fumadores» es indicativo (solo señala el tema)."
    },
    {
        question: "¿Qué se describe debajo del título en un artículo científico?",
        options: [
            "Los agradecimientos, el financiamiento y la dedicatoria",
            "Los objetivos, la hipótesis y la metodología",
            "Los autores, los datos informativos y la afiliación",
            "El resumen, las palabras clave y la bibliografía"
        ],
        correctAnswer: 2,
        explanation: "Bajo el título se describen los autores, los datos informativos y la afiliación. El resumen, los objetivos o los agradecimientos corresponden a otras secciones."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son características del resumen (abstract) de un artículo científico?",
        options: [
            "Incluye las referencias bibliográficas completas",
            "Aclara el problema investigado y su objetivo",
            "Permite al lector identificar el contenido básico del trabajo",
            "Informa de todas las secciones, incluidos los resultados y las conclusiones"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El resumen permite identificar el contenido básico, reporta todas las secciones (incluidos resultados y conclusiones) y deja claro el problema y el objetivo, pero no debe incluir referencias bibliográficas."
    },
    {
        question: "¿Qué debe declarar el resumen sobre la investigación?",
        options: [
            "Los principales fracasos y los datos brutos de la investigación",
            "Las principales citas y la historia de la investigación",
            "Los principales agradecimientos y el financiamiento de la investigación",
            "Los principales objetivos y el alcance de la investigación"
        ],
        correctAnswer: 3,
        explanation: "El resumen debe indicar los objetivos principales y el alcance de la investigación. Los agradecimientos, las citas o los datos brutos no se atribuyen al resumen."
    },
    {
        question: "¿Qué pregunta responde la introducción de un artículo científico?",
        options: [
            "¿Qué se encontró en el estudio?",
            "¿Qué significan los hallazgos del estudio?",
            "¿Por qué se ha hecho este trabajo?",
            "¿Cómo se realizó el estudio?"
        ],
        correctAnswer: 2,
        explanation: "La introducción responde por qué se hizo el trabajo; el cómo corresponde a materiales y métodos, el qué se encontró a resultados y el significado a la discusión."
    },
    {
        question: "Seleccione tres respuestas. ¿Qué debe incluir la introducción de un artículo científico?",
        options: [
            "Los agradecimientos a los revisores editoriales",
            "Los trabajos previos sobre el tema y los aspectos poco claros",
            "El interés de la investigación dentro del contexto científico",
            "Un último párrafo que resuma el objetivo del estudio"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "La introducción expone el interés de la investigación, incluye trabajos previos y aspectos poco claros, y usa el último párrafo para resumir el objetivo. Los agradecimientos van en una sección posterior y no a los revisores editoriales."
    },
    {
        question: "¿Cómo se relacionan el objetivo general, los objetivos específicos y las preguntas de investigación (RQ) en el diseño de la hipótesis?",
        options: [
            "El objetivo general se desglosa en variables, y cada variable se asocia a un objetivo específico",
            "Los objetivos específicos se agrupan en un objetivo general, y cada pregunta se asocia a una conclusión",
            "El objetivo general se desglosa en objetivos específicos, y cada objetivo específico se asocia a una pregunta de investigación (RQ)",
            "El objetivo general se desglosa en preguntas de investigación, y cada pregunta se asocia a una hipótesis nula"
        ],
        correctAnswer: 2,
        explanation: "El esquema muestra un objetivo general que se desglosa en objetivos específicos (1, 2), cada uno con su pregunta de investigación (RQ1, RQ2)."
    },
    {
        question: "En el ejemplo de la clase, ¿qué se propone como objetivo general?",
        options: [
            "Analizar la influencia de los encuadres noticiosos en las emociones de los periodistas españoles respecto a la inmigración, contrastando medios impresos y digitales",
            "Analizar la influencia de los encuadres noticiosos en la percepción de la población juvenil española respecto a la inmigración, contrastando métodos tradicionales y técnicas neurocientíficas",
            "Analizar la influencia de los mensajes políticos en la intención de voto de la población juvenil española respecto a la migración, contrastando sondeos y debates",
            "Analizar la influencia de las redes sociales en la percepción de la población adulta ecuatoriana respecto a la economía, contrastando encuestas y entrevistas"
        ],
        correctAnswer: 1,
        explanation: "El ejemplo analiza la influencia de los encuadres noticiosos en la percepción de los jóvenes españoles sobre la inmigración, comparando métodos de investigación tradicionales con técnicas neurocientíficas."
    },
    {
        question: "¿Qué pregunta de investigación (RQ1) se plantea en el ejemplo del objetivo específico?",
        options: [
            "¿Cuáles son las emociones que experimentan los sujetos nacionales al leer una noticia de migración con un encuadre negativo frente a uno positivo?",
            "¿Cuál es el nivel de conocimiento que tienen los sujetos nacionales sobre la migración y sus causas históricas?",
            "¿Cuáles son las actitudes que expresan los sujetos nacionales al votar por leyes de migración con un enfoque restrictivo?",
            "¿Cuál es el número de noticias que publican los medios nacionales sobre la migración con un encuadre positivo?"
        ],
        correctAnswer: 0,
        explanation: "RQ1 pregunta por las emociones que experimentan los sujetos al leer una noticia sobre migración con encuadre negativo frente a positivo. Se apoya en Cachón (2016), que analizó el papel mediador de las emociones empáticas y el transporte narrativo."
    },
    {
        question: "¿Qué pregunta responde la sección de materiales y métodos?",
        options: [
            "¿Qué se concluyó del estudio?",
            "¿Quién financió el estudio?",
            "¿Por qué se hizo el estudio?",
            "¿Cómo se hizo el estudio?"
        ],
        correctAnswer: 3,
        explanation: "Esta sección responde cómo se hizo el estudio, con el detalle suficiente para que otro autor pueda repetirlo."
    },
    {
        question: "¿Qué nivel de detalle debe tener la sección de materiales y métodos?",
        options: [
            "El suficiente para que otro autor pueda resumir el estudio y citar los resultados de forma literal",
            "El suficiente para que otro autor pueda repetir el estudio y verificar los resultados de forma independiente",
            "El suficiente para que otro autor pueda mejorar el estudio y modificar los resultados de forma directa",
            "El mínimo para que otro autor pueda reconocer el estudio y difundir los resultados de forma popular"
        ],
        correctAnswer: 1,
        explanation: "Debe ser lo bastante detallada para que otro investigador repita el estudio y verifique de manera independiente los resultados."
    },
    {
        question: "¿Cuál es el orden de los apartados de materiales y métodos propuesto en la clase?",
        options: [
            "Diseño, población, entorno, intervenciones y análisis estadístico",
            "Población, diseño, entorno, intervenciones y análisis estadístico",
            "Diseño, entorno, población, análisis estadístico e intervenciones",
            "Diseño, población, intervenciones, entorno y análisis estadístico"
        ],
        correctAnswer: 0,
        explanation: "La clase organiza materiales y métodos en: 1) diseño, 2) población, 3) entorno, 4) intervenciones y 5) análisis estadístico."
    },
    {
        question: "¿Qué se indica en el apartado «diseño» de materiales y métodos?",
        options: [
            "La muestra y los criterios de selección de los participantes",
            "El tipo de estudio, por ejemplo aleatorizado, controlado, de casos, ensayo clínico o longitudinal",
            "Los instrumentos de medición y las pruebas piloto utilizados",
            "El hábitat y lugar donde se desarrolla el estudio"
        ],
        correctAnswer: 1,
        explanation: "El diseño indica el tipo de estudio (aleatorizado, controlado, de casos, ensayo clínico, longitudinal). El lugar corresponde a entorno, la muestra a población y los instrumentos a intervenciones."
    },
    {
        question: "¿Qué se describe en el apartado «población» de materiales y métodos?",
        options: [
            "Las técnicas y los instrumentos de medición",
            "Los métodos estadísticos utilizados",
            "El hábitat y el lugar del estudio",
            "La muestra y los criterios de selección"
        ],
        correctAnswer: 3,
        explanation: "La población incluye la muestra y los criterios de selección. Hábitat y lugar pertenecen al entorno, las técnicas a las intervenciones y los métodos estadísticos al análisis estadístico."
    },
    {
        question: "¿Qué se describe en el apartado «entorno» de materiales y métodos?",
        options: [
            "Las técnicas, los instrumentos y las unidades",
            "La muestra y los criterios de selección",
            "Los métodos estadísticos y el análisis de datos",
            "El hábitat o lugar donde se realiza el estudio"
        ],
        correctAnswer: 3,
        explanation: "El entorno se refiere al hábitat o lugar donde se desarrolla el estudio."
    },
    {
        question: "¿Qué incluye el apartado «intervenciones» de materiales y métodos?",
        options: [
            "Los métodos estadísticos, los programas de análisis y los gráficos",
            "Las técnicas, instrumentos y unidades de medición, pruebas piloto, aparatos y tecnología",
            "El tipo de estudio, los criterios de inclusión y los sujetos de muestra",
            "El lugar del estudio, los permisos institucionales y el calendario"
        ],
        correctAnswer: 1,
        explanation: "Las intervenciones abarcan técnicas, instrumentos y unidades de medición, pruebas piloto, aparatos y tecnología. El diseño, el lugar y los métodos estadísticos son otros apartados."
    },
    {
        question: "¿Qué se indica en el apartado «análisis estadístico» de materiales y métodos?",
        options: [
            "Los resultados obtenidos y cómo se interpretaron en la discusión",
            "Los métodos estadísticos utilizados y cómo se analizaron los datos",
            "Los criterios de selección y cómo se reclutaron los participantes",
            "Los instrumentos utilizados y cómo se calibraron los equipos"
        ],
        correctAnswer: 1,
        explanation: "El análisis estadístico indica los métodos estadísticos empleados y cómo se analizaron los datos."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles son las dos funciones de la sección de resultados?",
        options: [
            "Justificar la importancia del estudio frente a trabajos previos",
            "Interpretar los resultados en relación con el conocimiento actual del tema",
            "Presentar la evidencia que respalda esos resultados mediante figuras, tablas o el propio texto",
            "Expresar los resultados de los experimentos descritos en materiales y métodos"
        ],
        correctAnswer: [2, 3],
        explanation: "Los resultados expresan lo obtenido en los experimentos y presentan la evidencia que los respalda mediante figuras, tablas o texto. Interpretar y contextualizar es función de la discusión, y justificar la importancia corresponde a la introducción."
    },
    {
        question: "Seleccione tres respuestas. ¿Qué se hace en la discusión de un artículo científico?",
        options: [
            "Presentar por primera vez los datos experimentales",
            "Relacionar los resultados con los objetivos, las preguntas de investigación y las hipótesis",
            "Interpretar, valorar, comentar y contextualizar los resultados",
            "Explicar los hallazgos en relación con el conocimiento actual"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "La discusión interpreta, valora, comenta y contextualiza los resultados respecto a objetivos, preguntas e hipótesis y explica los hallazgos frente al conocimiento actual. Presentar los datos por primera vez es función de los resultados."
    },
    {
        question: "¿Con qué se inicia la discusión según la clase?",
        options: [
            "Con la respuesta a la pregunta de la introducción, con la evidencia que presentan los resultados corroborantes",
            "Con las conclusiones generales, con las proyecciones que presentan los posibles beneficios",
            "Con la lista de referencias, con los autores que presentan las fuentes más recientes",
            "Con la descripción de la muestra, con los criterios que presentan los métodos de selección"
        ],
        correctAnswer: 0,
        explanation: "La discusión comienza respondiendo la pregunta de la introducción con la evidencia aportada por los resultados que la corroboran."
    },
    {
        question: "¿Cómo se recomienda tratar los resultados anómalos en la discusión?",
        options: [
            "Destacarlos solo en el resumen, y esperar a que los revisores editoriales ofrezcan una explicación",
            "Destacarlos y comentarlos con claridad, dándoles una explicación lo más coherente posible o diciendo simplemente que eso es lo encontrado",
            "Repetir el experimento hasta obtener los resultados esperados, y publicar solo estos últimos",
            "Omitirlos para no restar consistencia al estudio, o atribuirlos sin evidencia a errores de los participantes"
        ],
        correctAnswer: 1,
        explanation: "Los resultados anómalos deben destacarse y comentarse con claridad, con una explicación consistente o aclarando que es lo hallado. Omitirlos o manipularlos contradice la integridad científica."
    },
    {
        question: "¿Qué se recomienda evitar en la discusión?",
        options: [
            "Extraer más conclusiones de las que permiten los resultados, aunque sean menos espectaculares de lo esperado",
            "Especular o teorizar con imaginación y lógica, aunque despierte el interés del lector",
            "Responder a la pregunta de la introducción con la evidencia de los resultados",
            "Comentar los resultados anómalos con una explicación consistente"
        ],
        correctAnswer: 0,
        explanation: "La discusión permite especular y teorizar con imaginación y lógica, pero se debe evitar extraer más conclusiones de las que los resultados permiten."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles son las dos funciones de las referencias bibliográficas?",
        options: [
            "Describir los instrumentos de medición utilizados en el estudio",
            "Testificar y autenticar los datos previos del trabajo",
            "Proporcionar referencias relevantes para el tema de estudio",
            "Reconocer a quienes colaboraron con el estudio"
        ],
        correctAnswer: [1, 2],
        explanation: "Las referencias dan testimonio y autentican los datos previos del trabajo y aportan referencias relevantes para el tema. Describir instrumentos corresponde a métodos y reconocer colaboradores a los agradecimientos."
    },
    {
        question: "¿Cómo deben citarse las referencias y qué vigencia es ideal para la bibliografía consultada?",
        options: [
            "Según las normas de la revista o editorial científica elegida, con una vigencia ideal de los últimos 5 años de publicación",
            "Según las preferencias de cada autor del artículo, con una vigencia ideal de los últimos 20 años de publicación",
            "Según el orden alfabético del título de cada obra, con una vigencia ideal de los últimos 2 años de publicación",
            "Según las normas de la universidad de los autores, con una vigencia ideal de los últimos 10 años de publicación"
        ],
        correctAnswer: 0,
        explanation: "Las citas siguen la normativa de la revista o editorial elegida, y la actualidad del artículo se determina por la bibliografía, idealmente de los últimos 5 años."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son características de la sección de agradecimientos?",
        options: [
            "Permite mencionar a personas, grupos o instituciones que ayudaron con el estudio o la preparación del documento",
            "Debe diferenciarse del financiamiento y de la dedicatoria",
            "Es una sección opcional al final del artículo",
            "Debe dirigirse principalmente a los revisores editoriales y a la revista"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Los agradecimientos son opcionales, reconocen a quienes ayudaron y deben diferenciarse del financiamiento y la dedicatoria. No deben dirigirse a quienes participan evidentemente en el proceso editorial (comités de ética, revisores editoriales, la revista, los autores)."
    },
    {
        question: "¿A quiénes no deben dirigirse los agradecimientos?",
        options: [
            "A las personas evidentemente involucradas en la lectura de la investigación o el proceso editorial, como lectores, bibliotecas, bases de datos o buscadores",
            "A las personas evidentemente involucradas en el financiamiento de la investigación o el proceso editorial, como patrocinadores, becarios o universidades",
            "A las personas evidentemente involucradas en la ejecución de la investigación o el proceso editorial, como comités de ética, revisores editoriales, la revista o los autores",
            "A las personas ajenas a la ejecución de la investigación o al proceso editorial, como familiares, amigos, colegas o instituciones de apoyo"
        ],
        correctAnswer: 2,
        explanation: "No deben darse agradecimientos a quienes participan evidentemente en la ejecución o en el proceso editorial. Los financiadores se mencionan en la sección de financiamiento, y quienes ayudaron sin estar involucrados sí pueden recibirlos."
    },
    {
        question: "¿Dónde se recomienda indicar el financiamiento de un artículo científico?",
        options: [
            "En la sección de dedicatoria del artículo, con el nombre de la persona, la fecha del proyecto y el parentesco",
            "En la sección de fuentes de financiamiento de la revista, con el nombre de la institución, el código del proyecto y lo financiado",
            "En la sección de referencias bibliográficas, con el nombre del editor, el volumen de la revista y el año",
            "En la sección de conflicto de intereses, con el nombre del evaluador, el código del manuscrito y la decisión"
        ],
        correctAnswer: 1,
        explanation: "La mayoría de las revistas tienen una sección de financiamiento donde se anota la institución, el código del proyecto y lo financiado. Repetirlo en los agradecimientos es redundante, salvo que la revista no tenga sección de fuentes de financiamiento."
    },
    {
        question: "¿Qué es la dedicatoria y en qué trabajos es frecuente?",
        options: [
            "Una declaración honorífica del autor a una persona o entidad, frecuente en artículos científicos pero no usada en trabajos de grado y tesis",
            "Una declaración financiera del autor a una persona o entidad, frecuente en trabajos de grado y tesis pero no usada en informes técnicos",
            "Una declaración ética del autor a una persona o entidad, frecuente en artículos científicos y también usada en tesis",
            "Una declaración honorífica del autor a una persona o entidad, frecuente en trabajos de grado y tesis pero no usada en artículos científicos"
        ],
        correctAnswer: 3,
        explanation: "La dedicatoria es una declaración honorífica a una persona o entidad que, en general, no participó del trabajo; es frecuente en trabajos de grado y tesis, pero no en artículos científicos."
    },
    {
        question: "¿Cuándo existe un conflicto de intereses en un manuscrito?",
        options: [
            "Cuando un participante (autor, revisor o editor) tiene deudas con la revista que pueden impedir la revisión del texto",
            "Cuando un participante (autor, revisor o editor) tiene discrepancias con las normas que pueden retrasar la publicación",
            "Cuando un participante (autor, revisor o editor) tiene vínculos con actividades que pueden influir inapropiadamente en su juicio",
            "Cuando un participante (autor, revisor o editor) tiene dudas con el diseño que pueden requerir una nueva muestra"
        ],
        correctAnswer: 2,
        explanation: "Hay conflicto de intereses cuando alguien involucrado en la redacción, revisión o publicación tiene vínculos con actividades que pueden influir inapropiadamente en su juicio."
    },
    {
        question: "Seleccione dos respuestas. ¿Qué otras razones pueden originar un conflicto de intereses, según la clase?",
        options: [
            "La rivalidad académica o la pasión intelectual",
            "El uso de métodos estadísticos avanzados",
            "La falta de financiamiento externo",
            "Las relaciones personales"
        ],
        correctAnswer: [0, 3],
        explanation: "Además de los vínculos con actividades que influyen en el juicio, el conflicto puede surgir por relaciones personales, rivalidad académica o pasión intelectual. El financiamiento externo o los métodos estadísticos no se mencionan."
    },
    {
        question: "¿De qué depende, en parte, la confianza pública en la revisión por pares y la credibilidad de los artículos publicados?",
        options: [
            "De cuán bien se maneje el conflicto de intereses durante la redacción, la revisión por pares y la toma de decisiones de los editores",
            "De cuán prestigiosa sea la universidad durante la redacción, la revisión por pares y el pago de los derechos",
            "De cuán rápido se publique el artículo durante la redacción, la revisión por pares y la difusión en los medios",
            "De cuán extensa sea la bibliografía durante la redacción, la revisión por pares y la edición de las tablas"
        ],
        correctAnswer: 0,
        explanation: "La confianza pública en la revisión por pares y la credibilidad de lo publicado dependen en parte de cómo se maneje el conflicto de intereses."
    },
    {
        question: "¿Qué obra de Cargill y O'Connor (2021) aparece en las referencias?",
        options: [
            "«Cómo redactar un artículo científico»",
            "«How to write and publish a scientific paper»",
            "«Writing scientific research articles: Strategy and steps»",
            "«How to cheat on your final paper: Assigning AI for student writing»"
        ],
        correctAnswer: 2,
        explanation: "Cargill y O'Connor (2021) es «Writing scientific research articles: Strategy and steps» (Wiley). Los otros títulos pertenecen a Gastel y Day, Codina y Apablaza, y Fyfe."
    },
    {
        question: "¿Qué obra de Gastel y Day (2022) aparece en las referencias?",
        options: [
            "«How to write and publish a scientific paper»",
            "«Cómo redactar un artículo científico»",
            "«Writing scientific research articles: Strategy and steps»",
            "«Research methodology tools and techniques»"
        ],
        correctAnswer: 0,
        explanation: "Gastel y Day (2022), Bloomsbury, es «How to write and publish a scientific paper». Los demás títulos corresponden a otros autores."
    },
    {
        question: "¿Qué obra de Codina y Apablaza Campos (2022) aparece en las referencias?",
        options: [
            "«How to write and publish a scientific paper»",
            "«Los paradigmas en la investigación científica»",
            "«Cómo redactar un artículo científico»",
            "«Type of research and type research design»"
        ],
        correctAnswer: 2,
        explanation: "Codina y Apablaza Campos (2022) escribieron «Cómo redactar un artículo científico»."
    },
    {
        question: "¿Qué trabajo se presenta como ejemplo de resumen (abstract) en la clase?",
        options: [
            "Melvin et al. (2020), sobre la comunicación de resultados de investigación a los participantes",
            "Vite Cevallos, Townsend Valencia y Carvajal Romero (2020), sobre Big Data e Internet de las Cosas en la producción de banano orgánico",
            "Fyfe (2023), sobre el uso de inteligencia artificial en la escritura de trabajos estudiantiles",
            "Tirado-Espín et al. (2020), sobre agenda-setting e inmigración en revistas científicas desde 2015"
        ],
        correctAnswer: 1,
        explanation: "El ejemplo de abstract corresponde al artículo de Vite Cevallos et al. (2020) en la Revista Universidad y Sociedad, sobre Big Data e Internet de las Cosas en la producción de banano orgánico."
    }
];

window.modulo5 = modulo5;