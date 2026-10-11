let currentModuleData = [];
let currentQuestionIndex = 0;
let userAnswers = {}; // Guarda las respuestas del usuario
let questionStates = {}; // Guarda el estado: 'correct', 'incorrect', 'partial'
let currentShuffledOptions = []; // Opciones mezcladas de la pregunta actual

const DOM = {
    moduleSelect: document.getElementById('moduleSelect'),
    loadModuleBtn: document.getElementById('loadModuleBtn'),
    quizContainer: document.getElementById('quizContainer'),
    questionNumber: document.getElementById('questionNumber'),
    questionTypeBadge: document.getElementById('questionTypeBadge'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    feedbackBox: document.getElementById('feedbackBox'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackText: document.getElementById('feedbackText'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    checkBtn: document.getElementById('checkBtn'),
    gridContainer: document.getElementById('gridContainer'),
    restartBtn: document.getElementById('restartBtn')
};

// Utilidad para mezclar arreglos (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

DOM.loadModuleBtn.addEventListener('click', () => {
    const selectedModule = DOM.moduleSelect.value;
    if (window[selectedModule] && window[selectedModule].length > 0) {
        currentModuleData = window[selectedModule];
        startQuiz();
    } else {
        alert("El módulo seleccionado no está cargado o está vacío.");
    }
});

DOM.restartBtn.addEventListener('click', startQuiz);
DOM.prevBtn.addEventListener('click', () => { navigate(-1); });
DOM.nextBtn.addEventListener('click', () => { navigate(1); });
DOM.checkBtn.addEventListener('click', checkAnswer);

function startQuiz() {
    userAnswers = {};
    questionStates = {};
    currentQuestionIndex = 0;
    DOM.quizContainer.classList.remove('hidden');
    buildNavigationGrid();
    loadQuestion(currentQuestionIndex);
}

function buildNavigationGrid() {
    DOM.gridContainer.innerHTML = '';
    currentModuleData.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'grid-btn';
        btn.textContent = index + 1;
        btn.addEventListener('click', () => { loadQuestion(index); });
        DOM.gridContainer.appendChild(btn);
    });
}

function updateNavigationGrid() {
    const buttons = DOM.gridContainer.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'grid-btn';
        if (i === currentQuestionIndex) buttons[i].classList.add('active');
        if (questionStates[i]) buttons[i].classList.add(questionStates[i]);
    }
}

function loadQuestion(index) {
    currentQuestionIndex = index;
    const qData = currentModuleData[index];
    const isMultiple = Array.isArray(qData.correctAnswer);
    
    DOM.questionNumber.textContent = `Pregunta ${index + 1} de ${currentModuleData.length}`;
    DOM.questionTypeBadge.textContent = isMultiple ? "Selección Múltiple" : "Selección Única";
    DOM.questionText.innerHTML = qData.question;
    
    DOM.optionsContainer.innerHTML = '';
    DOM.feedbackBox.classList.add('hidden');
    DOM.checkBtn.classList.remove('hidden');
    
    // Preparar opciones mezcladas pero rastreando su índice original
    let optionsWithMeta = qData.options.map((text, originalIndex) => ({ text, originalIndex }));
    
    // Solo mezclar si la pregunta no ha sido evaluada aún, para mantener consistencia visual si el usuario regresa
    if (!userAnswers[index]) {
        currentShuffledOptions = shuffleArray(optionsWithMeta);
    } else {
        // Si ya hay respuesta, idealmente deberíamos haber guardado el shuffle state. 
        // Para simplificar, si ya contestó, remezclamos y marcamos lo que seleccionó.
        currentShuffledOptions = shuffleArray(optionsWithMeta);
    }

    currentShuffledOptions.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        
        const input = document.createElement('input');
        input.type = isMultiple ? 'checkbox' : 'radio';
        input.name = `question_${index}`;
        input.value = opt.originalIndex; // El valor real siempre es el índice original

        // Restaurar selección previa si existe
        if (userAnswers[index]) {
            if (isMultiple && userAnswers[index].includes(opt.originalIndex)) input.checked = true;
            if (!isMultiple && userAnswers[index] === opt.originalIndex) input.checked = true;
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(opt.text));
        DOM.optionsContainer.appendChild(label);
    });

    DOM.prevBtn.disabled = (index === 0);
    DOM.nextBtn.disabled = (index === currentModuleData.length - 1);
    
    // Renderizar KaTeX si hay fórmulas
    renderMathInElement(DOM.questionText, { delimiters: [{left: "$", right: "$", display: false}] });
    renderMathInElement(DOM.optionsContainer, { delimiters: [{left: "$", right: "$", display: false}] });

    // Si la pregunta ya fue evaluada, mostrar resultados
    if (questionStates[index]) {
        DOM.checkBtn.classList.add('hidden');
        showFeedback(index);
    }

    updateNavigationGrid();
}

function checkAnswer() {
    const qData = currentModuleData[currentQuestionIndex];
    const isMultiple = Array.isArray(qData.correctAnswer);
    const inputs = DOM.optionsContainer.querySelectorAll('input');
    
    let selected = [];
    inputs.forEach(input => {
        if (input.checked) selected.push(parseInt(input.value));
    });

    if (selected.length === 0) return; // No hacer nada si no seleccionó nada

    // Guardar respuestas del usuario
    userAnswers[currentQuestionIndex] = isMultiple ? selected : selected[0];

    // Evaluar
    let state = 'incorrect';
    if (isMultiple) {
        const correctAnswers = qData.correctAnswer.sort();
        const userSelected = selected.sort();
        
        const isPerfect = JSON.stringify(correctAnswers) === JSON.stringify(userSelected);
        const hasSomeCorrect = userSelected.some(val => correctAnswers.includes(val));
        const hasIncorrect = userSelected.some(val => !correctAnswers.includes(val));

        if (isPerfect) state = 'correct';
        else if (hasSomeCorrect && !hasIncorrect) state = 'partial'; // Seleccionó algunas correctas, sin errores
        else state = 'incorrect';
    } else {
        if (selected[0] === qData.correctAnswer) state = 'correct';
    }

    questionStates[currentQuestionIndex] = state;
    DOM.checkBtn.classList.add('hidden');
    showFeedback(currentQuestionIndex);
    updateNavigationGrid();
}

function showFeedback(index) {
    const qData = currentModuleData[index];
    const state = questionStates[index];
    const isMultiple = Array.isArray(qData.correctAnswer);
    const correctTarget = isMultiple ? qData.correctAnswer : [qData.correctAnswer];

    // Colorear opciones
    const labels = DOM.optionsContainer.querySelectorAll('label');
    labels.forEach(label => {
        const input = label.querySelector('input');
        const val = parseInt(input.value);
        input.disabled = true; // Deshabilitar edición

        if (input.checked) {
            if (correctTarget.includes(val)) label.classList.add('correct');
            else label.classList.add('incorrect');
        } else {
            if (correctTarget.includes(val)) label.classList.add('missed');
        }
    });

    // Mostrar caja de explicación
    DOM.feedbackBox.className = `feedback-box ${state}`;
    if (state === 'correct') DOM.feedbackTitle.textContent = "¡Respuesta Correcta!";
    else if (state === 'partial') DOM.feedbackTitle.textContent = "Respuesta Incompleta.";
    else DOM.feedbackTitle.textContent = "Respuesta Incorrecta.";
    
    DOM.feedbackText.innerHTML = qData.explanation;
    renderMathInElement(DOM.feedbackText, { delimiters: [{left: "$", right: "$", display: false}] });
}

function navigate(direction) {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < currentModuleData.length) {
        loadQuestion(newIndex);
    }
}