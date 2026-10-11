// Módulo 2 — Class 02: Communication parts and other concepts
const modulo2 = [
    {
        question: "Según la Clase 02, ¿cómo se define el proceso de comunicación?",
        options: [
            "Como un proceso que consiste en el almacenamiento de datos por parte de una o más personas",
            "Como un proceso que consiste en el intercambio de mensajes entre dos o más personas",
            "Como un proceso que consiste en la emisión de órdenes desde una persona hacia un grupo",
            "Como un proceso que consiste en la traducción de textos entre dos o más lenguas"
        ],
        correctAnswer: 1,
        explanation: "La clase define la comunicación como el intercambio de mensajes entre dos o más personas. Emitir órdenes en un solo sentido, almacenar datos o traducir textos no capturan el carácter de intercambio que caracteriza al proceso."
    },
    {
        question: "¿Cómo caracteriza la clase a la comunicación en relación con los procesos de la vida?",
        options: [
            "Como una actividad transversal a todos los procesos de la vida, entendida como un acto voluntario",
            "Como una actividad exclusiva de los procesos sociales, entendida como un acto involuntario",
            "Como una actividad exclusiva de los procesos científicos, entendida como un acto voluntario",
            "Como una actividad transversal a todos los procesos de la vida, entendida como un acto reflejo"
        ],
        correctAnswer: 0,
        explanation: "La comunicación se presenta como actividad transversal a la vida y como acto voluntario. Limitarla a los procesos sociales o científicos, o considerarla involuntaria o refleja, contradice la definición de la diapositiva."
    },
    {
        question: "¿Cómo replican los seres humanos el proceso de comunicación según la clase?",
        options: [
            "A través de la tecnología, los sistemas informáticos y otros medios",
            "A través de la imitación, la repetición y otros hábitos de aprendizaje",
            "A través de la escritura, la imprenta y otros soportes de papel exclusivamente",
            "A través de la memoria, la intuición y otros procesos puramente biológicos"
        ],
        correctAnswer: 0,
        explanation: "La diapositiva indica que los humanos replican el proceso mediante tecnología y sistemas informáticos. Los hábitos de aprendizaje, los soportes exclusivamente de papel o los procesos puramente biológicos no se mencionan como esa réplica tecnológica."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles de las siguientes son características de la comunicación según la clase?",
        options: [
            "Generalmente ocurre de manera cíclica (se retroalimenta), aunque puede ser unidireccional",
            "Es un intercambio de información entre seres vivos o sistemas cibernéticos que los imitan",
            "Solo ocurre cuando se utiliza un lenguaje verbal articulado entre seres humanos",
            "Siempre es unidireccional, pues el receptor nunca modifica el mensaje original"
        ],
        correctAnswer: [0, 1],
        explanation: "La clase señala que la comunicación se da entre seres vivos (o sistemas cibernéticos que los imitan) y que suele ser cíclica, aunque puede ser unidireccional. Restringirla al lenguaje verbal o declararla siempre unidireccional ignora la comunicación no verbal y la retroalimentación."
    },
    {
        question: "¿Cuál es, casi siempre, el propósito de la comunicación según la clase?",
        options: [
            "Provocar una respuesta deseada en el interlocutor o los interlocutores",
            "Evitar una discusión generada entre el interlocutor o los interlocutores",
            "Verificar una hipótesis planteada por el emisor o los emisores",
            "Registrar un hecho observado por el interlocutor o los interlocutores"
        ],
        correctAnswer: 0,
        explanation: "Aunque los propósitos pueden ser muy variados, casi siempre se busca provocar una respuesta deseada en el interlocutor. Verificar hipótesis, solo registrar hechos o evitar discusiones no definen ese propósito general."
    },
    {
        question: "¿Por qué se considera la comunicación un proceso fundamental según la clase?",
        options: [
            "Porque no existe tecnología que modifique la comunicación, ni con sus pares ni con el exterior",
            "Porque solo ciertas formas de vida complejas se comunican, con sus pares y con el exterior",
            "Porque toda forma de vida humana se comunica de un modo único, con sus pares y con la tecnología",
            "Porque no existe forma de vida que no se comunique, de un modo u otro, con sus pares y con el exterior"
        ],
        correctAnswer: 3,
        explanation: "La clase afirma que no hay forma de vida que no se comunique de alguna manera, por lo que es un proceso fundamental. Reducirlo a lo humano o a seres complejos, o negar la influencia de la tecnología, contradice la diapositiva sobre la importancia de la comunicación."
    },
    {
        question: "Según la clase, ¿qué papel cumple la tecnología respecto a la comunicación?",
        options: [
            "Amplifica, caracteriza o modula la comunicación pero solo dentro de espacios cercanos y presenciales",
            "Sustituye, restringe o limita la comunicación y supera solo distancias espaciales, nunca temporales",
            "Amplifica, caracteriza o modula la comunicación y supera grandes distancias espaciales e incluso temporales",
            "Reemplaza, anula o elimina la comunicación humana y supera las distancias gracias a la automatización"
        ],
        correctAnswer: 2,
        explanation: "La tecnología ha diseñado mecanismos para amplificar, caracterizar o modular la comunicación, superando distancias espaciales e incluso temporales. Los demás planteamientos la presentan como sustituto, limitante o confinada a lo presencial."
    },
    {
        question: "¿Qué criterio distingue la comunicación verbal de la no verbal?",
        options: [
            "Si se utiliza o no un receptor humano (una audiencia)",
            "Si se utiliza o no un canal tecnológico (un dispositivo)",
            "Si se utiliza o no un código lingüístico (un lenguaje)",
            "Si se utiliza o no un contexto formal (una institución)"
        ],
        correctAnswer: 2,
        explanation: "La clasificación depende de si se emplea un código lingüístico. La presencia de tecnología, de un receptor humano o de un contexto formal no distingue entre comunicación verbal y no verbal."
    },
    {
        question: "¿Qué tipo de signos emplea la comunicación verbal?",
        options: [
            "Distancias y espacios entre las personas",
            "Palabras y signos lingüísticos articulados",
            "Gestos y movimientos corporales intencionales",
            "Micromovimientos y posturas del cuerpo"
        ],
        correctAnswer: 1,
        explanation: "La comunicación verbal usa palabras y signos lingüísticos articulados. Los gestos, las distancias y los micromovimientos pertenecen a la comunicación no verbal (lenguaje corporal, proxémica y kinésica)."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles de las siguientes formas de comunicación se citan como no verbales en la clase?",
        options: [
            "La kinésica, centrada en los movimientos corporales",
            "La semántica, centrada en el significado de las palabras",
            "La retórica, centrada en la estructura del discurso oral",
            "La proxémica, centrada en la distancia y el espacio corporal"
        ],
        correctAnswer: [0, 3],
        explanation: "La clase menciona el lenguaje corporal, la kinésica y la proxémica como no verbales. La retórica y la semántica se vinculan con el uso del lenguaje verbal, por lo que no son comunicación no verbal."
    },
    {
        question: "Según la clase, ¿qué resulta de desarrollar el conocimiento sobre el cuerpo como herramienta de comunicación?",
        options: [
            "Un aumento en la rapidez y en la percepción que el individuo tiene de su entorno laboral",
            "Un aumento en la eficiencia y en la percepción que el individuo tiene de sí mismo",
            "Una reducción en la eficiencia y en la percepción que el individuo tiene de sí mismo",
            "Una reducción en la expresividad y en la percepción que el individuo tiene de los demás"
        ],
        correctAnswer: 1,
        explanation: "La clase afirma que desarrollar este conocimiento aumenta la eficiencia y también la percepción que el individuo tiene de sí mismo. Los demás planteamientos invierten el efecto o desplazan la percepción hacia otros aspectos."
    },
    {
        question: "¿Qué cumple la danza o el juego respecto al cuerpo como herramienta de comunicación?",
        options: [
            "Hacen que las personas sustituyan palabras y expresiones",
            "Hacen que las personas oculten emociones y actitudes",
            "Hacen que las personas limiten gestos y movimientos",
            "Hacen que las personas desarrollen capacidades y aptitudes"
        ],
        correctAnswer: 3,
        explanation: "La diapositiva indica que, a través de la danza o el juego, el cuerpo permite desarrollar capacidades y aptitudes. Ocultar emociones, reemplazar palabras o restringir gestos no se plantea como finalidad."
    },
    {
        question: "¿Qué se señala sobre los gestos o movimientos de manos y brazos en la comunicación no verbal?",
        options: [
            "Pueden ser una sustitución de los pensamientos o emociones conscientes",
            "Pueden ser una traducción de los pensamientos o emociones escritos",
            "Pueden ser una distracción de los pensamientos o emociones expresados",
            "Pueden ser una guía de los pensamientos o emociones subconscientes"
        ],
        correctAnswer: 3,
        explanation: "La clase indica que gestos y movimientos de manos o brazos pueden orientar sobre pensamientos o emociones subconscientes. Los demás planteamientos cambian su función por sustitución, distracción o traducción."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de las siguientes capacidades se atribuyen al juego en la clase?",
        options: [
            "Restringir la imaginación a patrones fijos de conducta",
            "Poner a prueba habilidades y destrezas",
            "Ofrecer perspectivas diferentes de la realidad",
            "Permitir que las personas muestren su verdadera esencia"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El juego ofrece diferentes perspectivas de la realidad, muestra la verdadera esencia de las personas (la imaginación infantil es infinita) y pone a prueba habilidades. Limitar la imaginación a patrones fijos contradice lo expuesto."
    },
    {
        question: "¿Quién realizó, en 1979, estudios sobre los micromovimientos corporales que dieron origen a la kinésica?",
        options: [
            "Birdwhistell",
            "Edward Hall",
            "Andrés Tirado",
            "Erving Goffman"
        ],
        correctAnswer: 0,
        explanation: "Birdwhistell (1979) estudió los micromovimientos corporales partiendo de la interacción y la cibernética, lo que se conoce como kinésica. Hall se asocia a la proxémica, Goffman a la teoría del «frente personal» y Tirado es el profesor del curso."
    },
    {
        question: "¿Qué estudia la kinésica según la clase?",
        options: [
            "Las expresiones del lenguaje, cuyo significado lo otorga la gramática",
            "Los micromovimientos del cuerpo, cuyo significado lo otorga la biología",
            "Los micromovimientos del cuerpo, cuyo significado lo otorga la cultura",
            "Las distancias entre los cuerpos, cuyo significado lo otorga la cultura"
        ],
        correctAnswer: 2,
        explanation: "La kinésica analiza los micromovimientos corporales y el significado que les otorga la cultura. Estudiar las distancias es propio de la proxémica; el significado no lo otorga la gramática ni la biología, sino la cultura."
    },
    {
        question: "¿Cuántos kinemas se mencionan, aproximadamente, en el estudio de la kinésica?",
        options: [
            "Entre 5 y 6 kinemas",
            "Entre 50 y 60 kinemas",
            "Entre 150 y 160 kinemas",
            "Entre 500 y 600 kinemas"
        ],
        correctAnswer: 1,
        explanation: "La clase habla de kine y kinemas, que se estiman entre 50 y 60. Las demás cifras son incorrectas."
    },
    {
        question: "¿Qué escuela profundizó en el estudio de la comunicación no verbal, incluyendo la kinésica y la proxémica?",
        options: [
            "La Escuela de Chicago",
            "La Escuela de Palo Alto",
            "La Escuela de Mánchester",
            "La Escuela de Frankfurt"
        ],
        correctAnswer: 1,
        explanation: "La Escuela de Palo Alto profundizó el estudio de la comunicación no verbal. Frankfurt, Chicago y Mánchester son otras escuelas, pero no se asocian a este desarrollo en la clase."
    },
    {
        question: "¿Qué estudia la proxémica según la clase?",
        options: [
            "Los gestos de manos y brazos como forma de regular las interacciones sociales",
            "Los micromovimientos corporales como forma de regular las interacciones sociales",
            "La distancia y el espacio corporal como forma de regular las interacciones sociales",
            "La distancia y el espacio corporal como forma de reducir las interferencias del canal"
        ],
        correctAnswer: 2,
        explanation: "La proxémica estudia la distancia y el espacio corporal para regular interacciones sociales. Los micromovimientos son objeto de la kinésica; reducir interferencias del canal y analizar gestos no corresponden a su definición."
    },
    {
        question: "¿Qué clasificación de distancias propone Edward Hall (1987) en el estudio de la proxémica?",
        options: [
            "Distancia personal, familiar y laboral",
            "Distancia social, cultural y pública",
            "Distancia íntima, social y pública",
            "Distancia íntima, personal y colectiva"
        ],
        correctAnswer: 2,
        explanation: "Hall (1987) propone distancia íntima, social y pública. Las otras combinaciones mezclan términos que no forman la clasificación de la diapositiva."
    },
    {
        question: "¿Con qué planteamiento se asocia a Erving Goffman en la clase, en relación con la proxémica?",
        options: [
            "La teoría de la «distancia íntima», entendida como espacio de contacto físico",
            "La teoría del «frente personal», entendida como actuación natural o intencional",
            "La teoría de los «kinemas», entendida como unidad mínima de movimiento",
            "La teoría del «marco de la noticia», entendida como selección de la información"
        ],
        correctAnswer: 1,
        explanation: "Goffman se vincula con la teoría del «frente personal», actuación natural o intencional. Los kinemas pertenecen a Birdwhistell, las distancias a Hall, y el marco de la noticia pertenece a las teorías de medios."
    },
    {
        question: "¿Cuál es el orden de los elementos del ciclo de la comunicación presentado en el diagrama de la clase?",
        options: [
            "Fuente, mensaje, canal, codificación, receptor, decodificación y retroalimentación",
            "Fuente, mensaje, codificación, canal, decodificación, receptor y retroalimentación",
            "Receptor, mensaje, codificación, canal, decodificación, fuente y retroalimentación",
            "Fuente, codificación, mensaje, canal, decodificación, receptor y retroalimentación"
        ],
        correctAnswer: 1,
        explanation: "El diagrama circular ordena: Source, Message, Encoding, Channel, Decoding, Receiver y Feedback. Los demás planteamientos invierten la relación entre mensaje y codificación, entre canal y codificación, o intercambian los roles de fuente y receptor."
    },
    {
        question: "¿Cómo se define la fuente (source) en el proceso de comunicación?",
        options: [
            "Quien regula el acto comunicativo supervisando, filtrando y aprobando un mensaje",
            "Quien registra el acto comunicativo archivando, clasificando y difundiendo un mensaje",
            "Quien recibe el acto comunicativo interpretando, decodificando y respondiendo un mensaje",
            "Quien inicia el acto comunicativo creando, codificando y transmitiendo un mensaje"
        ],
        correctAnswer: 3,
        explanation: "La fuente inicia el acto comunicativo y es quien crea, codifica y transmite el mensaje. Interpretar y decodificar es función del receptor; regular o archivar no son tareas de la fuente."
    },
    {
        question: "¿Qué debe tener la fuente respecto a la construcción del mensaje?",
        options: [
            "La capacidad de elaborar un mensaje y retenerlo de forma que sea confidencial",
            "La capacidad de interpretar un mensaje y transmitirlo de forma que esté disponible",
            "La capacidad de elaborar un mensaje y transmitirlo de forma que sea incuestionable",
            "La capacidad de elaborar un mensaje y transmitirlo de forma que esté disponible"
        ],
        correctAnswer: 3,
        explanation: "La fuente debe poder elaborar un mensaje y transmitirlo de modo que quede disponible para el receptor. Hacerlo incuestionable, interpretarlo en lugar de elaborarlo o retenerlo como confidencial no corresponde a su función."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles son factores que influyen en la eficacia de la fuente (emisor) según la clase?",
        options: [
            "Persuasión, para lograr que el receptor haga suyo el contenido del mensaje",
            "Atractivo, pues mientras más atractiva sea su imagen, más efectivo será el mensaje",
            "Anonimato, para lograr que el receptor desconozca el origen del mensaje",
            "Credibilidad ante el receptor, influida por personalidad, posición y experiencia"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "La clase destaca credibilidad, atractivo y persuasión (emocional o racional) como factores del emisor. El anonimato no figura entre ellos y resta credibilidad."
    },
    {
        question: "¿Qué factores determinan la credibilidad de la fuente ante el receptor?",
        options: [
            "La personalidad, la posición en la entidad y la experiencia",
            "La edad, la nacionalidad y la profesión académica",
            "El atractivo, la persuasión y la puntualidad del emisor",
            "La velocidad, la frecuencia y el volumen de voz"
        ],
        correctAnswer: 0,
        explanation: "La credibilidad depende de la personalidad, la posición dentro de la entidad y la experiencia. El atractivo y la persuasión son características distintas; edad, nacionalidad, velocidad o volumen no se señalan como determinantes."
    },
    {
        question: "¿Qué implica la persuasión como característica de la fuente?",
        options: [
            "Ser lo bastante autoritario, con jerarquía o sanciones, para que el receptor acate el contenido del mensaje",
            "Ser lo bastante persuasivo, emocional o racionalmente, para que el receptor haga suyo el contenido del mensaje",
            "Ser lo bastante insistente, con frecuencia o intensidad, para que el receptor repita el contenido del mensaje",
            "Ser lo bastante breve, con síntesis o claridad, para que el receptor memorice el contenido del mensaje"
        ],
        correctAnswer: 1,
        explanation: "La persuasión consiste en convencer al receptor, emocional o racionalmente, de modo que adopte el contenido como propio. La insistencia, la autoridad impuesta o la brevedad no implican convencimiento."
    },
    {
        question: "¿Cómo se define el mensaje en el proceso de comunicación?",
        options: [
            "Como el conjunto de reglas que el emisor aplica para transformar ideas con un lenguaje",
            "Como la información o enunciado que el emisor envía al receptor a través de un canal",
            "Como el medio físico que el emisor usa para llegar al receptor a través de un código",
            "Como la reacción que el receptor devuelve al emisor a través de un canal"
        ],
        correctAnswer: 1,
        explanation: "El mensaje es la información o enunciado verbal que el emisor envía al receptor a través de un canal. El medio físico es el canal, las reglas pertenecen al código y la reacción es la retroalimentación."
    },
    {
        question: "¿Qué requiere un mensaje para poder construirse y transmitirse?",
        options: [
            "Un sistema de datos (cifras, tablas) y un software o programa",
            "Un sistema de signos (letras, caracteres) y un código o lenguaje",
            "Un sistema de medios (televisión, internet) y un anunciante o patrocinador",
            "Un sistema de normas (leyes, reglamentos) y un tribunal o institución"
        ],
        correctAnswer: 1,
        explanation: "El mensaje necesita un sistema de signos y un código o lenguaje (español, inglés, portugués). Normas, medios o datos numéricos no son requisitos generales del mensaje."
    },
    {
        question: "¿De qué maneras puede transmitirse un mensaje según la clase?",
        options: [
            "De forma oral, por escrito o mediante imágenes",
            "De forma oral, por escrito o mediante exclusivamente símbolos matemáticos",
            "De forma oral, solo en presencia física o mediante imágenes",
            "De forma escrita, solo en idiomas formales o mediante imágenes"
        ],
        correctAnswer: 0,
        explanation: "La clase indica que el mensaje se transmite oralmente, por escrito o a través de imágenes. Los demás planteamientos introducen restricciones que no se plantean."
    },
    {
        question: "Seleccione tres respuestas. ¿Cuáles de las siguientes son cualidades que debe cumplir un mensaje según la clase?",
        options: [
            "Oportunidad: entregarse cuando sea útil y necesario, ni antes ni después",
            "Claridad: ser comprensible y sin ambigüedades",
            "Objetividad y veracidad: ser verdadero, auténtico e imparcial",
            "Complejidad: emplear un lenguaje especializado e inaccesible"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Los mensajes deben ser claros, precisos, objetivos y veraces, oportunos e interesantes. La complejidad inaccesible contradice la claridad exigida."
    },
    {
        question: "¿Qué exige la cualidad de precisión (accuracy) del mensaje?",
        options: [
            "Que la información transmitida sea inmediata y repetida",
            "Que la información transmitida sea breve y atractiva",
            "Que la información transmitida sea amplia y especializada",
            "Que la información transmitida sea completa y exacta"
        ],
        correctAnswer: 3,
        explanation: "La precisión exige que la información sea completa y exacta, para que los receptores no desconfíen. La brevedad, la especialización o la repetición no garantizan exactitud."
    },
    {
        question: "¿Qué cualidad del mensaje se relaciona con provocar una reacción positiva en el receptor?",
        options: [
            "Que sea impersonal",
            "Que sea extenso",
            "Que sea reservado",
            "Que sea interesante"
        ],
        correctAnswer: 3,
        explanation: "La clase señala que un mensaje debe ser interesante para generar una reacción positiva en el receptor. Que sea impersonal, extenso o reservado no se asocia a esta cualidad."
    },
    {
        question: "¿Qué es el código en el proceso de comunicación?",
        options: [
            "Un medio físico, es decir, una vía de transmisión que sirve para trasladar el mensaje",
            "Un intercambio de roles, es decir, un proceso circular que sirve para retroalimentar el mensaje",
            "Un entorno extralingüístico, es decir, un contexto situacional que sirve para enmarcar el mensaje",
            "Una forma de cifrado, es decir, un sistema de significados que sirve para traducir el mensaje"
        ],
        correctAnswer: 3,
        explanation: "El código es un sistema de significados que permite traducir el mensaje. El medio físico es el canal, el entorno extralingüístico es el contexto y el intercambio de roles corresponde a la retroalimentación."
    },
    {
        question: "¿Qué condición es evidente en el código de la comunicación verbal?",
        options: [
            "Se requiere un canal escrito para transmitir el mensaje al receptor",
            "Se requiere un idioma compartido para transmitir el mensaje al receptor",
            "Se requiere un contexto formal para transmitir el mensaje al receptor",
            "Se requiere un emisor experto para transmitir el mensaje al receptor"
        ],
        correctAnswer: 1,
        explanation: "En la comunicación verbal, el código es un idioma que debe ser compartido. Un canal escrito, un contexto formal o un emisor experto no son requisitos del código."
    },
    {
        question: "¿Cómo define la clase a un código?",
        options: [
            "Como un conjunto de personas que se organizan según ciertos roles y son identificables socialmente",
            "Como un conjunto de elementos que se combinan según ciertas reglas y son interpretables semánticamente",
            "Como un conjunto de canales que se activan según ciertas redes y son alcanzables tecnológicamente",
            "Como un conjunto de mensajes que se emiten según ciertos horarios y son verificables históricamente"
        ],
        correctAnswer: 1,
        explanation: "Un código es un conjunto de elementos combinados según reglas y semánticamente interpretables. Los demás planteamientos cambian el tipo de elementos o la condición que los define."
    },
    {
        question: "¿Qué ejemplo de código primitivo menciona la clase?",
        options: [
            "El que asocia un aplauso con la aprobación del grupo, a partir de la convención social",
            "El que asocia un gruñido con el riesgo de mordida, a partir de la experiencia pasada",
            "El que asocia una señal luminosa con el cambio de turno, a partir de la norma escrita",
            "El que asocia un silbido con la llegada de alimento, a partir del instinto biológico"
        ],
        correctAnswer: 1,
        explanation: "El ejemplo es el gruñido asociado al riesgo de mordida, basado en experiencia previa. Las demás situaciones no se citan como ejemplo de código primitivo."
    },
    {
        question: "¿En qué consiste la codificación (encoding)?",
        options: [
            "En el proceso por el cual el receptor responde al emisor con un mensaje nuevo",
            "En el proceso por el cual el emisor selecciona el canal más adecuado para el receptor",
            "En el proceso por el cual el emisor convierte sus ideas en signos físicos para el receptor",
            "En el proceso por el cual el receptor transforma el código simbólico del emisor en ideas"
        ],
        correctAnswer: 2,
        explanation: "La codificación es la conversión de ideas en signos físicos por parte del emisor; puede hacerse con imágenes, gestos o sonidos. Transformar el código en ideas es decodificar, y elegir el canal o responder son otros elementos del proceso."
    },
    {
        question: "¿En qué consiste la decodificación (decoding)?",
        options: [
            "En la interpretación de símbolos mediante la cual el receptor transforma el código simbólico en ideas",
            "En la transmisión de símbolos mediante la cual el canal transforma el código en ondas sonoras",
            "En la conversión de ideas mediante la cual el emisor transforma los signos en un código simbólico",
            "En la repetición de símbolos mediante la cual el receptor transforma el código en memoria"
        ],
        correctAnswer: 0,
        explanation: "La decodificación es la interpretación de símbolos por el receptor, que transforma el código en ideas. La conversión de ideas en signos es codificación, y los demás procesos no son decodificación."
    },
    {
        question: "¿Qué es el canal en la comunicación?",
        options: [
            "La vía por la cual se originan datos, mensajes o información; es la persona que emite",
            "La vía por la cual se interpretan datos, mensajes o información; es el sistema de signos utilizado",
            "La vía por la cual se transmiten datos, mensajes o información; es el medio físico utilizado",
            "La vía por la cual se evalúan datos, mensajes o información; es el entorno que rodea"
        ],
        correctAnswer: 2,
        explanation: "El canal es el medio físico a través del cual se transmiten los mensajes (ondas sonoras, tinta sobre papel, impulsos químicos). El sistema de signos es el código, quien emite es la fuente y el entorno es el contexto."
    },
    {
        question: "¿Cuáles son ejemplos de canal citados en la clase?",
        options: [
            "Los códigos lingüísticos, los significados compartidos y los roles del emisor",
            "Las ideas del emisor, las reglas gramaticales y las emociones del receptor humano",
            "Las ondas sonoras de la voz, la tinta sobre el papel y los impulsos químicos entre células",
            "Las ondas luminosas, las palabras interpretadas y las respuestas del receptor"
        ],
        correctAnswer: 2,
        explanation: "La clase ejemplifica el canal con ondas sonoras, tinta sobre papel e impulsos químicos entre células. Ideas, gramática, significados compartidos o roles no son medios físicos."
    },
    {
        question: "¿Qué caracteriza a los canales personales?",
        options: [
            "Permiten una comunicación más directa entre emisor y receptor y mayor interacción durante el proceso",
            "Permiten una comunicación unilateral entre emisor y receptor y menor interacción durante el proceso",
            "Se dirigen a un solo destinatario y los mensajes suelen ser confidenciales",
            "Se dirigen a un gran número de destinatarios y los mensajes suelen no ser personalizados"
        ],
        correctAnswer: 0,
        explanation: "Los canales personales permiten comunicación directa y mayor interacción. Dirigirse a muchos destinatarios sin personalizar caracteriza a los impersonales, y la comunicación unilateral y poco interactiva no corresponde a los personales."
    },
    {
        question: "¿Qué caracteriza a los canales impersonales?",
        options: [
            "Se dirigen a un gran número de destinatarios y los mensajes no suelen ser personalizados",
            "Permiten una interacción constante y directa y los mensajes suelen ser inmediatos",
            "Se dirigen a un destinatario específico y los mensajes suelen ser personalizados",
            "Se dirigen a un grupo reducido y los mensajes suelen ser privados"
        ],
        correctAnswer: 0,
        explanation: "Los canales impersonales llegan a muchos destinatarios con mensajes no personalizados. Dirigirse a un destinatario específico o permitir interacción constante describe a los personales o bidireccionales."
    },
    {
        question: "¿Qué ejemplos menciona la clase como canales de una sola vía (one-way)?",
        options: [
            "Los foros de discusión, los chats grupales y las videollamadas para interactuar con una audiencia reducida",
            "Las conversaciones cara a cara, las llamadas telefónicas y las reuniones para intercambiar mensajes con una persona",
            "Los medios de comunicación, el auge de las nuevas tecnologías y la aparición de internet para difundir mensajes a una gran audiencia",
            "Las tutorías personales, los correos individuales y las cartas para comunicar mensajes con una sola persona"
        ],
        correctAnswer: 2,
        explanation: "Los medios y la internet se citan como canales que difunden mensajes a una gran audiencia. Las conversaciones, llamadas, chats o tutorías son interactivos y caben mejor en la comunicación bidireccional."
    },
    {
        question: "¿Cuándo se habla de un canal bidireccional?",
        options: [
            "Cuando la comunicación se realiza entre dos personas únicamente de forma escrita",
            "Cuando la comunicación permite una interacción constante y directa entre emisor y receptor",
            "Cuando la comunicación difunde mensajes hacia una gran audiencia sin respuesta",
            "Cuando la comunicación depende de dos mensajes idénticos enviados de forma simultánea"
        ],
        correctAnswer: 1,
        explanation: "Un canal bidireccional permite interacción constante y directa entre emisor y receptor. Difundir mensajes sin respuesta es unidireccional; limitarse a lo escrito o a dos mensajes idénticos no define el concepto."
    },
    {
        question: "¿Cuáles son los tres mensajes que se distinguen en el proceso de comunicación?",
        options: [
            "El mensaje escrito, el mensaje hablado y el mensaje gestual",
            "El mensaje personal, el mensaje impersonal y el mensaje bidireccional",
            "El mensaje pensado o proyectado, el mensaje transmitido y el mensaje recibido",
            "El mensaje inicial, el mensaje intermedio y el mensaje final de cada interlocutor"
        ],
        correctAnswer: 2,
        explanation: "Se distinguen el mensaje pensado/proyectado (el que el emisor intenta transmitir), el transmitido (el que está en el canal) y el recibido (el decodificado y comprendido). Las otras categorías mezclan formas del mensaje o tipos de canal."
    },
    {
        question: "¿Cuál de estos mensajes es el que se encuentra realmente en el canal de comunicación?",
        options: [
            "El mensaje decodificado por el receptor",
            "El mensaje recibido",
            "El mensaje transmitido",
            "El mensaje pensado o proyectado"
        ],
        correctAnswer: 2,
        explanation: "El mensaje transmitido es el que se encuentra realmente en el canal. El mensaje proyectado es el que el emisor intenta transmitir; el recibido (o decodificado) es el que comprende el receptor."
    },
    {
        question: "En una comunicación efectiva, ¿cómo deberían ser los tres mensajes (pensado, transmitido y recibido), y qué ocurre en la práctica?",
        options: [
            "Deberían ser idénticos, pero en la práctica rara vez lo son",
            "Deberían ser distintos, pero en la práctica casi siempre coinciden",
            "Deberían ser idénticos, y en la práctica siempre lo son por la codificación",
            "Deberían ser complementarios, y en la práctica coinciden por la retroalimentación"
        ],
        correctAnswer: 0,
        explanation: "En la comunicación efectiva los tres mensajes serían idénticos, pero rara vez lo son, por ejemplo cuando el emisor usa signos ambiguos al codificar. Los demás planteamientos niegan la discrepancia o cambian lo esperado."
    },
    {
        question: "¿Qué función cumple el receptor en la comunicación?",
        options: [
            "Realiza un proceso idéntico al de la fuente: cifra y emite los signos que esta usó",
            "Realiza un proceso inverso al de la fuente: descifra e interpreta los signos que esta usó",
            "Realiza un proceso paralelo al de la fuente: transmite y amplifica los signos que esta usó",
            "Realiza un proceso previo al de la fuente: selecciona y valida los signos que esta usará"
        ],
        correctAnswer: 1,
        explanation: "El receptor decodifica el mensaje, lo cual es un proceso inverso al de la fuente. Cifrar, transmitir o seleccionar signos antes de emitirlos corresponde a tareas de la fuente."
    },
    {
        question: "¿Qué tipo de entidades pueden ser receptores según la clase?",
        options: [
            "Únicamente seres vivos capaces de reconocer el mensaje y responder con gestos",
            "Únicamente dispositivos capaces de almacenar mensajes y responder de forma automática",
            "Únicamente seres humanos capaces de comprender el lenguaje verbal y responder con palabras",
            "Seres humanos, seres vivos o dispositivos capaces de decodificar, interpretar y responder"
        ],
        correctAnswer: 3,
        explanation: "La clase indica que el receptor puede ser un ser humano, un ser vivo o un dispositivo con capacidad de decodificar, interpretar y responder. Los demás planteamientos lo restringen a un solo tipo."
    },
    {
        question: "¿Qué es la comunicación asertiva, según la clase?",
        options: [
            "La que permite una comunicación estricta entre individuos y un mensaje impositivo",
            "La que permite una comunicación efectiva entre individuos y un mensaje claro",
            "La que permite una comunicación rápida entre individuos y un mensaje breve",
            "La que permite una comunicación reservada entre individuos y un mensaje ambiguo"
        ],
        correctAnswer: 1,
        explanation: "La comunicación asertiva hace posible que la comunicación sea efectiva y el mensaje claro. Imponer, reservar o solo abreviar el mensaje no son rasgos de la asertividad."
    },
    {
        question: "Seleccione dos respuestas. ¿Cuáles de los siguientes beneficios se atribuyen a la comunicación asertiva?",
        options: [
            "Promueve el respeto al priorizar los derechos propios por encima de los de los demás",
            "Mejora la autoestima al reforzar la confianza para expresar ideas con claridad y respeto",
            "Evita el conflicto al impedir la expresión de opiniones y necesidades diferentes",
            "Facilita relaciones saludables al expresar pensamientos y sentimientos con claridad"
        ],
        correctAnswer: [1, 3],
        explanation: "Los beneficios de la asertividad incluyen relaciones saludables, prevención y resolución de conflictos mediante la expresión adecuada de opiniones, respeto mutuo que considera derechos propios y ajenos, y mejor autoestima. Silenciar opiniones o priorizar solo los derechos propios contradice esos beneficios."
    },
    {
        question: "¿Cómo se define el contexto en la comunicación?",
        options: [
            "Como el entorno extralingüístico donde se desarrolla el acto comunicativo",
            "Como el sistema de signos donde se codifica el acto comunicativo",
            "Como el medio físico donde se transmite el acto comunicativo",
            "Como el entorno lingüístico donde se desarrolla el acto comunicativo"
        ],
        correctAnswer: 0,
        explanation: "El contexto es el entorno extralingüístico en que ocurre el acto comunicativo. Un entorno lingüístico, el medio físico (canal) o el sistema de signos (código) son elementos distintos."
    },
    {
        question: "¿Qué distingue a los contextos situacionales de los temáticos?",
        options: [
            "Los situacionales son los referentes, constituidos por el tema o la materia, y los temáticos son los momentos políticos o históricos",
            "Los situacionales son los momentos políticos o históricos, y los temáticos son los referentes, constituidos por el tema o la materia",
            "Los situacionales son los roles de emisor y receptor, y los temáticos son los mensajes transmitidos",
            "Los situacionales son los canales de comunicación, y los temáticos son los códigos o lenguajes compartidos"
        ],
        correctAnswer: 1,
        explanation: "Los contextos situacionales aluden a momentos políticos o históricos; los temáticos (referentes) corresponden al tema o materia tratada. Invertirlos o asimilarlos a canales, códigos, roles o mensajes es incorrecto."
    },
    {
        question: "¿Qué ocurre con los roles en la retroalimentación (feedback)?",
        options: [
            "El emisor y el receptor comparten un solo rol, lo que impide distinguir el papel del canal",
            "El emisor desaparece tras el mensaje inicial, lo que deja al receptor como único participante",
            "El emisor y el receptor mantienen un rol fijo, lo que siempre vuelve claro el papel de cada uno",
            "El emisor y el receptor cambian sucesivamente de rol, lo que a veces vuelve poco claro el papel de cada uno"
        ],
        correctAnswer: 3,
        explanation: "En la retroalimentación hay intercambio de mensajes, emisor y receptor alternan roles y a veces su papel no queda claro. Los roles no son fijos, no se fusionan en uno solo ni desaparece el emisor."
    },
    {
        question: "¿Cuáles son los tres niveles del modelo jerárquico de comunicación verbal interpersonal presentado en la clase?",
        options: [
            "Procesamiento sintáctico del habla, interpretación literal, y evaluación y cierre de relaciones",
            "Procesamiento interactivo del habla, retroalimentación inmediata, y selección y difusión de mensajes",
            "Procesamiento interactivo del habla, comprensión mutua, y establecimiento y mantenimiento de relaciones",
            "Comprensión mutua, persuasión del receptor, y establecimiento y medición de resultados"
        ],
        correctAnswer: 2,
        explanation: "El modelo (Jiang, Zheng y Lu, 2021) plantea tres niveles: procesamiento interactivo del habla, comprensión mutua y establecimiento y mantenimiento de relaciones. Los demás planteamientos alteran uno o más niveles."
    },
    {
        question: "¿Qué nivel del modelo jerárquico se centra en crear una representación mental común y predecir intenciones, creencias y acciones del interlocutor?",
        options: [
            "El establecimiento y mantenimiento de relaciones",
            "La retroalimentación circular",
            "El procesamiento interactivo del habla",
            "La comprensión mutua"
        ],
        correctAnswer: 3,
        explanation: "La comprensión mutua se centra en la representación mental compartida y en predecir intenciones, creencias y acciones. El procesamiento del habla es la base fundamental del lenguaje, y la dimensión relacional se refiere a vínculos como la confianza."
    },
    {
        question: "¿Qué nivel del modelo jerárquico enfatiza la dimensión social de la comunicación verbal, con ejemplos como el vínculo emocional, la confianza y la cooperación?",
        options: [
            "La codificación y decodificación del mensaje",
            "El procesamiento interactivo del habla",
            "La comprensión mutua entre los interlocutores",
            "El establecimiento y mantenimiento de relaciones"
        ],
        correctAnswer: 3,
        explanation: "Ese nivel enfatiza la dimensión social, donde la calidad de la comunicación y la cercanía impactan la efectividad. El procesamiento del habla es fundamental y la comprensión mutua se refiere a representaciones compartidas."
    },
    {
        question: "¿Qué examina el nivel de procesamiento interactivo del habla del modelo jerárquico?",
        options: [
            "Cómo la sociedad construye y regula la cercanía entre los participantes, como base de la confianza",
            "Cómo el cerebro humano se adapta y evoluciona en respuesta al habla, como base de la comunicación verbal",
            "Cómo el receptor interpreta y valora la credibilidad de la fuente, como base de la asertividad",
            "Cómo el emisor selecciona y transmite el mensaje por el canal, como base de la persuasión"
        ],
        correctAnswer: 1,
        explanation: "Este nivel estudia el procesamiento fundamental del lenguaje hablado y cómo el cerebro se adapta y evoluciona frente al habla. Los demás planteamientos describen el nivel relacional, el canal o la credibilidad de la fuente."
    },
    {
        question: "¿Qué tema trata el video de García (2021) incluido en la clase?",
        options: [
            "Cómo la comunicación digital ayuda a superar distancias geográficas",
            "Cómo la comunicación no verbal ayuda a ser mejores personas",
            "Cómo la comunicación asertiva ayuda a resolver conflictos laborales",
            "Cómo la comunicación persuasiva ayuda a ganar elecciones políticas"
        ],
        correctAnswer: 1,
        explanation: "El video, de TEDx Talks (2021), se titula «Cómo la comunicación no verbal nos ayudará a ser mejores personas». Los demás temas corresponden a otras lecturas o no se tratan en el video."
    },
    {
        question: "¿Qué estudios de referencia aparecen vinculados con la comunicación no verbal y su relación con el aprendizaje en la clase?",
        options: [
            "Cardete et al. (2020) sobre comunicación no verbal, y Álava et al. (2022) sobre realidad virtual en el aprendizaje de idiomas",
            "Walker (2023) sobre comunicación no verbal, y Gruber y Kaplan-Rakowski (2022) sobre comunicación verbal y no verbal en realidad virtual",
            "Walker (2023) sobre comunicación asertiva, y Gruber y Kaplan-Rakowski (2022) sobre persuasión en campañas políticas",
            "Jiang et al. (2021) sobre comunicación no verbal, y Calua et al. (2021) sobre realidad virtual en aulas"
        ],
        correctAnswer: 1,
        explanation: "Walker (2023) trata la comunicación no verbal y Gruber y Kaplan-Rakowski (2022) la comunicación verbal y no verbal en realidad virtual para el aprendizaje de lenguas. Los demás planteamientos atribuyen temas a referencias equivocadas."
    },
    {
        question: "¿Qué analiza el trabajo de Cardete Quintero y colaboradores (2020) citado en la clase?",
        options: [
            "La comunicación persuasiva en política: emisor, canal y retroalimentación en los casos de Podemos y Vox",
            "La comunicación no verbal en política: emisor, mensaje y contexto en los casos de Podemos y Ciudadanos",
            "La comunicación asertiva en educación: emisor, mensaje y contexto en los casos de docentes y estudiantes",
            "La comunicación persuasiva en política: emisor, mensaje y contexto en los casos de Podemos y Ciudadanos"
        ],
        correctAnswer: 3,
        explanation: "Cardete et al. (2020) estudian la comunicación persuasiva en política (emisor, mensaje y contexto) en Podemos y Ciudadanos, en España. Los demás planteamientos cambian el tipo de comunicación, el escenario o los elementos analizados."
    },
    {
        question: "¿Qué trabajo de 2021 sobre comunicación asertiva aparece en las referencias de la Clase 02?",
        options: [
            "Calua, Delgado y López (2021), un estudio experimental sobre la comunicación persuasiva en el contexto político",
            "Jiang, Zheng y Lu (2021), una revisión sistemática de la comunicación asertiva en el contexto educativo",
            "Calua, Delgado y López (2021), una revisión sistemática de la comunicación asertiva en el contexto educativo",
            "Calua, Delgado y López (2021), una revisión sistemática de la comunicación no verbal en realidad virtual"
        ],
        correctAnswer: 2,
        explanation: "Calua, Delgado y López (2021) publicaron una revisión sistemática sobre comunicación asertiva en el contexto educativo. Jiang et al. (2021) proponen el modelo jerárquico de comunicación verbal, y los demás planteamientos alteran el tema o el tipo de estudio."
    }
];

window.modulo2 = modulo2;