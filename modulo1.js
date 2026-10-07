// Módulo 1 — Class 01: Introduction of the course
const modulo1 = [
    {
        question: "¿Cuál es la meta central del curso de Science Communication presentada en la Clase 01?",
        options: [
            "Que el estudiante pueda diseñar protocolos experimentales, tanto en formato cuantitativo como cualitativo",
            "Que el estudiante pueda traducir artículos especializados, tanto en formato académico como periodístico",
            "Que el estudiante pueda dominar la teoría de los medios masivos, tanto en formato impreso como audiovisual",
            "Que el estudiante pueda comunicar de forma efectiva resultados científicos, tanto en formato oral como escrito"
        ],
        correctAnswer: 3,
        explanation: "La meta declarada es que el estudiante comunique resultados científicos de manera efectiva en formatos oral y escrito. Estudiar teoría de medios masivos, diseñar protocolos experimentales o traducir artículos son actividades que pueden apoyar el proceso, pero no son la meta central del curso."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles de los siguientes son objetivos explícitos del curso?",
        options: [
            "Aprender la estructura básica de las presentaciones científicas escritas y orales",
            "Preparar editores que gestionen la indexación de revistas académicas",
            "Formar periodistas científicos que trabajen de manera profesional en medios",
            "Desarrollar la confianza necesaria para compartir y discutir ideas de investigación"
        ],
        correctAnswer: [0, 3],
        explanation: "El curso busca que el estudiante conozca la estructura de las presentaciones científicas y que gane confianza para compartir y discutir ideas de investigación. Formar periodistas profesionales o editores de revistas indexadas no figura entre los objetivos del curso."
    },
    {
        question: "Seleccione dos respuestas. ¿Qué habilidades menciona el curso como parte de lo que el estudiante debe adquirir al explorar temas de investigación?",
        options: [
            "Trabajo en equipo",
            "Pensamiento crítico y toma de decisiones racional",
            "Diseño gráfico publicitario",
            "Administración de bases de datos"
        ],
        correctAnswer: [0, 1],
        explanation: "Entre los objetivos se incluye adquirir habilidades para explorar temas de investigación, el trabajo en equipo, la toma racional de decisiones y el pensamiento crítico. El diseño gráfico publicitario y la administración de bases de datos son competencias ajenas a los objetivos planteados."
    },
    {
        question: "Según los objetivos del curso, desarrollar habilidades clave para escribir artículos científicos de manera efectiva implica principalmente:",
        options: [
            "Omitir la información y reemplazarla con opiniones personales",
            "Copiar la información y organizarla según la fuente original",
            "Resumir la información y sistematizarla de forma eficaz",
            "Ampliar la información y adornarla con vocabulario técnico"
        ],
        correctAnswer: 2,
        explanation: "El objetivo establece que escribir artículos científicos de forma efectiva supone resumir y sistematizar la información. Ampliar con vocabulario técnico, copiar de la fuente u omitir datos para incluir opiniones contradice el principio de síntesis y sistematización."
    },
    {
        question: "¿Qué actividad relacionada con la literatura científica forma parte de los objetivos del curso?",
        options: [
            "Recopilar y traducir literatura que provenga de una región, una universidad o una revista específica",
            "Recopilar y clasificar literatura que describa una técnica, un software o un instrumento específico",
            "Recopilar y archivar literatura que abarque un periodo, una editorial o un idioma de publicación específico",
            "Recopilar y analizar literatura que aborde una pregunta, un problema o un área de investigación específica"
        ],
        correctAnswer: 3,
        explanation: "El curso busca que el estudiante reúna y analice literatura orientada a una pregunta, problema o área de investigación concreta. Archivar, traducir o clasificar fuentes por criterios formales (periodo, región, instrumento) no equivale a analizarlas en función de un problema de investigación."
    },
    {
        question: "¿Cómo se distribuye la evaluación del curso entre sus tres grandes componentes?",
        options: [
            "40 % evaluaciones formativas, 20 % examen parcial (midterm) y 40 % examen final",
            "30 % evaluaciones formativas, 40 % examen parcial (midterm) y 30 % examen final",
            "40 % evaluaciones formativas, 30 % examen parcial (midterm) y 30 % examen final",
            "50 % evaluaciones formativas, 25 % examen parcial (midterm) y 25 % examen final"
        ],
        correctAnswer: 2,
        explanation: "La diapositiva de evaluación asigna 40 % a lo formativo y 30 % a cada uno de los exámenes (midterm y final). Las otras combinaciones alteran el peso de los componentes y no coinciden con la distribución del curso."
    },
    {
        question: "¿Qué porcentaje de la nota total vale cada una de las dos evaluaciones formativas (Formative 1 y Formative 2)?",
        options: [
            "40 % cada una, para sumar el 80 % del componente formativo",
            "10 % cada una, para sumar el 20 % del componente formativo",
            "20 % cada una, para sumar el 40 % del componente formativo",
            "30 % cada una, para sumar el 60 % del componente formativo"
        ],
        correctAnswer: 2,
        explanation: "El componente formativo vale 40 % y se divide en dos partes iguales de 20 %. Los otros valores no suman el 40 % que corresponde a la parte formativa del curso."
    },
    {
        question: "¿Qué elementos integran cada una de las evaluaciones formativas del curso?",
        options: [
            "Tareas (homework), proyecto de investigación y asistencia",
            "Lecturas obligatorias, examen escrito y asistencia a tutorías",
            "Tareas (homework), examen oral y participación en foros virtuales",
            "Informes de laboratorio, proyecto de investigación y exposición oral"
        ],
        correctAnswer: 0,
        explanation: "Tanto Formative 1 como Formative 2 incluyen homework, Research Project y asistencia. El examen oral, los foros virtuales, los informes de laboratorio o la asistencia a tutorías no están definidos como componentes formativos en la diapositiva."
    },
    {
        question: "¿Qué unidad del sílabo ocupa el mayor número de semanas?",
        options: [
            "La Unidad 1, sobre Science Communication (7 semanas)",
            "La Unidad 2, sobre la estructura de la investigación científica y su aplicabilidad (7 semanas)",
            "La Unidad 3, sobre habilidades escritas y orales de la comunicación científica (7 semanas)",
            "Todas las unidades se distribuyen en la misma cantidad de semanas"
        ],
        correctAnswer: 1,
        explanation: "La Unidad 2, que trata la estructura de la investigación científica y su aplicabilidad, dura 7 semanas, más que las otras. Atribuir esa duración a la unidad de Science Communication o a la de habilidades escritas y orales es incorrecto, y las unidades no tienen igual duración."
    },
    {
        question: "¿Cuántas semanas dura la Unidad 1 del sílabo, dedicada a Science Communication?",
        options: [
            "7 semanas",
            "3 semanas",
            "4 semanas",
            "5 semanas"
        ],
        correctAnswer: 2,
        explanation: "La Unidad 1 dura 4 semanas. Las 5 semanas corresponden a la unidad de habilidades escritas y orales, y las 7 semanas a la de estructura de la investigación científica."
    },
    {
        question: "¿Qué unidad aborda las habilidades escritas y orales de la comunicación científica, y cuánto dura?",
        options: [
            "La Unidad 3, con una duración de 7 semanas",
            "La Unidad 3, con una duración de 5 semanas",
            "La Unidad 1, con una duración de 4 semanas",
            "La Unidad 2, con una duración de 7 semanas"
        ],
        correctAnswer: 1,
        explanation: "Las habilidades escritas y orales corresponden a la Unidad 3, que dura 5 semanas. Asignarle 7 semanas confunde su duración con la de la unidad sobre estructura de la investigación; los demás planteamientos corresponden a unidades con distinto contenido."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de las siguientes actividades aparecen en el sílabo del curso?",
        options: [
            "Pasantía obligatoria en un medio de comunicación",
            "Lecturas (reading)",
            "Tarea semanal (weekly assignment)",
            "Proyecto final (final project)"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El sílabo lista la tarea semanal, las lecturas, el proyecto final, el examen parcial y el examen final como actividades. Una pasantía obligatoria en un medio de comunicación no forma parte de la planificación del curso."
    },
    {
        question: "¿En qué días y horarios se dictan las clases del curso?",
        options: [
            "Martes y jueves, de 09h00 a 11h00",
            "Martes y viernes, de 09h00 a 11h00",
            "Martes y jueves, de 11h00 a 13h00",
            "Lunes y miércoles, de 09h00 a 11h00"
        ],
        correctAnswer: 0,
        explanation: "Las clases se dictan martes y jueves de 09h00 a 11h00. Los demás horarios cambian la franja horaria o los días de dictado."
    },
    {
        question: "¿Cuál es el horario de tutorías del curso?",
        options: [
            "Martes, de 09h00 a 10h00",
            "Martes, de 12h00 a 13h00",
            "Jueves, de 11h00 a 12h00",
            "Jueves, de 12h00 a 13h00"
        ],
        correctAnswer: 3,
        explanation: "La tutoría se ofrece los jueves de 12h00 a 13h00, inmediatamente después de la clase. Los demás planteamientos modifican el día o la hora."
    },
    {
        question: "¿En qué periodo se desarrolla el curso?",
        options: [
            "Del 2 de septiembre al 19 de diciembre de 2025",
            "Del 5 de agosto al 3 de diciembre de 2025",
            "Del 12 de agosto al 28 de noviembre de 2025",
            "Del 12 de agosto al 3 de diciembre de 2025"
        ],
        correctAnswer: 3,
        explanation: "El cronograma establece que el curso va del 12 de agosto al 3 de diciembre de 2025. Las demás fechas alteran el inicio, el cierre o ambos."
    },
    {
        question: "¿Quién es el profesor del curso presentado en la Clase 01?",
        options: [
            "Andrés Tirado, Ph.D.",
            "Lawrence Steinman, Ph.D.",
            "Sara Brownell, Ph.D.",
            "Edward Hall, Ph.D."
        ],
        correctAnswer: 0,
        explanation: "El curso está a cargo de Andrés Tirado, Ph.D. Los otros nombres corresponden a autores citados en otros materiales (Brownell y Steinman en el artículo del Módulo 7, y Hall en proxémica), no al docente."
    },
    {
        question: "¿En qué área obtuvo el profesor su Ph.D. en la Universidad Complutense de Madrid?",
        options: [
            "Comunicación Audiovisual, Publicidad y Relaciones Públicas",
            "Comunicación Social, Periodismo y Divulgación Científica",
            "Liderazgo Democrático, Gobernanza y Comunicación Política",
            "Estudios Avanzados en Educación Social y Pedagogía"
        ],
        correctAnswer: 0,
        explanation: "Su doctorado es en Comunicación Audiovisual, Publicidad y Relaciones Públicas. Liderazgo Democrático y Comunicación Política y Estudios Avanzados en Educación Social son sus másteres, y Comunicación Social es su licenciatura."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles de los siguientes son másteres cursados por el profesor?",
        options: [
            "Máster en Estudios Avanzados en Educación Social",
            "Máster en Metodología de la Investigación Cuantitativa",
            "Máster en Periodismo Científico y Divulgación",
            "Máster en Liderazgo Democrático y Comunicación Política"
        ],
        correctAnswer: [0, 3],
        explanation: "El profesor posee un máster en Liderazgo Democrático y Comunicación Política y otro en Estudios Avanzados en Educación Social. Los másteres en periodismo científico o en metodología cuantitativa no constan en su formación."
    },
    {
        question: "¿Qué título de pregrado y en qué universidad obtuvo el profesor?",
        options: [
            "Licenciatura en Relaciones Públicas, en la Universidad Complutense de Madrid",
            "Licenciatura en Educación Social, en la Universidad Central del Ecuador",
            "Licenciatura en Comunicación Social, en la Universidad Central del Ecuador",
            "Licenciatura en Comunicación Social, en la Universidad Complutense de Madrid"
        ],
        correctAnswer: 2,
        explanation: "Su pregrado es la Licenciatura en Comunicación Social, cursada en la Universidad Central del Ecuador. La Complutense de Madrid corresponde a sus estudios de posgrado, y la educación social aparece solo en un máster."
    },
    {
        question: "¿Qué diplomado cursó el profesor en el marco de OEA-FLACSO?",
        options: [
            "Diplomado en Educación Social de las Américas",
            "Diplomado en Procesos Electorales de las Américas",
            "Diplomado en Comunicación Científica de las Américas",
            "Diplomado en Liderazgo Democrático de las Américas"
        ],
        correctAnswer: 1,
        explanation: "Su estudio complementario con OEA-FLACSO es el Diplomado en Procesos Electorales de las Américas. Los demás títulos combinan el nombre de otros estudios suyos con una denominación que no corresponde."
    },
    {
        question: "¿Cuál es el tema central del artículo de Fyfe (2023), listado en la bibliografía?",
        options: [
            "El papel de las revistas científicas en la difusión del conocimiento científico",
            "La comunicación asertiva como estrategia en la enseñanza y el aprendizaje",
            "El uso de inteligencia artificial en la escritura de trabajos de estudiantes universitarios",
            "La comunicación de resultados de investigación a los participantes de un estudio"
        ],
        correctAnswer: 2,
        explanation: "Fyfe (2023), publicado en AI & Society, trata la asignación de inteligencia artificial para la escritura estudiantil. Los demás planteamientos corresponden a Domínguez (2022), Álava et al. (2022) y Melvin et al. (2020) respectivamente."
    },
    {
        question: "¿Qué tema aborda el trabajo de Álava, Vélez, Parrales y Castillo (2022) incluido en la bibliografía?",
        options: [
            "La comunicación asertiva y su aporte al proceso de enseñanza y aprendizaje",
            "La comunicación persuasiva y su aporte al proceso de formación política",
            "La comunicación científica y su aporte al proceso de divulgación en medios",
            "La comunicación no verbal y su aporte al proceso de aprendizaje de idiomas"
        ],
        correctAnswer: 0,
        explanation: "Álava y colaboradores (2022) estudian la comunicación asertiva en la enseñanza y el aprendizaje, publicado en Polo del Conocimiento. Los otros enfoques (persuasiva, científica, no verbal) corresponden a otras lecturas del curso o no coinciden con este trabajo."
    },
    {
        question: "¿Qué tema trata el artículo de Domínguez (2022) de la Revista Cubana de Educación Superior?",
        options: [
            "El rol de las revistas científicas en la difusión del conocimiento científico",
            "El rol de los medios masivos en la fijación de la agenda sobre inmigración",
            "El rol de la inteligencia artificial en la redacción de trabajos finales",
            "El rol de los participantes en la evaluación de resultados de investigación"
        ],
        correctAnswer: 0,
        explanation: "Domínguez (2022) analiza las revistas científicas y su papel en la difusión del conocimiento. La agenda sobre inmigración corresponde a Tirado-Espín et al., la comunicación a participantes a Melvin et al. y la inteligencia artificial a Fyfe."
    },
    {
        question: "¿Qué contenido presenta el trabajo de Malik y Dhiman (2022) en el Journal of Media & Management?",
        options: [
            "Las tendencias actuales y la visión futura de la comunicación científica en la India",
            "Las tendencias actuales y la visión futura de la divulgación científica en Ecuador",
            "Las tendencias actuales y la visión futura de los medios sobre migración en España",
            "Las tendencias actuales y la visión futura de la enseñanza de la escritura con IA"
        ],
        correctAnswer: 0,
        explanation: "El título de Malik y Dhiman (2022) es «Science Communication in India: Current Trends and Future Vision». Los demás planteamientos cambian el país o el tema central del trabajo."
    },
    {
        question: "¿Cuál es el enfoque del estudio de Melvin y colaboradores (2020) citado en la bibliografía?",
        options: [
            "Un análisis crítico del discurso mediático sobre inmigración dirigido a investigadores",
            "Una evaluación formativa de expectativas de participantes e investigadores sobre la diseminación",
            "Una revisión sistemática de la comunicación asertiva en el contexto educativo",
            "Una descripción de tendencias de la divulgación científica dirigida a editores"
        ],
        correctAnswer: 1,
        explanation: "Melvin et al. (2020) realizaron una evaluación formativa sobre las expectativas y preferencias de participantes e investigadores al comunicar y diseminar resultados. Los demás planteamientos describen estudios distintos de la bibliografía o de otras clases."
    },
    {
        question: "¿Qué combina el trabajo de Tirado-Espín y colaboradores (2020) sobre inmigración?",
        options: [
            "Framing, análisis crítico del discurso y frecuencia en los medios, mediante un estudio correlacional de encuestas poblacionales",
            "Agenda-setting, análisis crítico del discurso y frecuencia en los medios, mediante un estudio descriptivo de investigaciones en revistas científicas",
            "Framing, análisis de contenido y frecuencia en las redes, mediante un estudio experimental de audiencias en medios digitales",
            "Agenda-setting, entrevistas a profundidad y frecuencia en el parlamento, mediante un estudio explicativo de políticas migratorias"
        ],
        correctAnswer: 1,
        explanation: "El trabajo se titula «Agenda-setting e inmigración: análisis crítico del discurso y frecuencia en los medios», y se presenta como estudio descriptivo de investigaciones en revistas científicas (2015-2020). Los demás planteamientos cambian la teoría, la técnica o el tipo de estudio."
    },
    {
        question: "¿Qué elemento del curso se identifica con el apartado «Final Project: Research lines»?",
        options: [
            "La tarea semanal, que se asigna a partir de líneas de investigación",
            "El examen final, que se elabora a partir de líneas de investigación",
            "La tutoría de los jueves, que se organiza a partir de líneas de investigación",
            "El proyecto final, que se orienta a partir de líneas de investigación"
        ],
        correctAnswer: 3,
        explanation: "La diapositiva titulada Final Project muestra las líneas de investigación (Research lines) que orientan el proyecto final. El examen final, la tarea semanal o la tutoría no se asocian a esas líneas."
    }
];

window.modulo1 = modulo1;