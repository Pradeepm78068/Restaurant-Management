const questions = [
    {
        question: "What does 'var' do in JavaScript?",
        options: ["Declares a variable", "Defines a function", "Creates an object", "None of the above"],
        answer: 0
    },
    {
        question: "Which method is used to parse a JSON string in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "parse()"],
        answer: 0
    },
    {
        question: "What is the result of 3 + 2 + '5' in JavaScript?",
        options: ["'35'", "'55'", "7", "Error"],
        answer: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Google", "Apple"],
        answer: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "Both // and /* */"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question-text").textContent = question.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("next-button").classList.add("hidden");
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.classList.remove("hidden");
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        displayQuestion();
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("next-button").classList.remove("hidden");
    displayQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
});
