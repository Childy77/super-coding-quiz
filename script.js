const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
        
    });

    function resetState() {
        nextButton.classList.add("hide");
        while (answerButtonsElement.firstChild)
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }

    nextButton.classList.remove("hide")

}

function setStatusClass(element, correct) {
clearStatusClass(element)
if (correct) {
    element.classList.add("correct")
} else {
    element.classList.add("wrong")
}
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
       question: "Is JavaScrpit the same as Java?",
       answers: [
        { text: "Yes", correct: true },
        { text: "No", correct: false}
       ]
    },
    {
        question: "What is the DOM?",
        answers: [
            {text: "Direct Over seer", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Diverse oriental rug", correct: false},
            {text: "Dairy object milk", correct: false},
        ]
    }    
    {
        question: "Which is not an element?",
        answers: [
            {text: "main", correct: false},
            {text: "header", correct: false},
            {text: "google", correct: true},
            {text: "section", correct: false},
        ]
    }    
    {
        question: "What is it calles to store multiple values in a single variable?",
        answers: [
            {text: "String", correct: false},
            {text: "Function", correct: false},
            {text: "Variable", correct: false},
            {text: "Array", correct: true},
        ]
    }    
    {
        question: "What is and API?",
        answers: [
            {text: "Application Programming Interfaces", correct: true},
            {text: "All points in", correct: false},
            {text: "Any person intersted", correct: false},
            {text: "Array points inward", correct: false},
        ]
    }    
]
