document.addEventListener("DOMContentLoaded", function () {
let questions = [
    {
        prompt: "In which HTML element do we put the JavaScript?",
        options: ["<js>", "<javaScript>", "<scripting>", "<script>"],
        correctAnswer: "<script>",
    },
    {
        prompt: "Where is the correct place to insert JavaScript?",
        options: [
        "The <head> section",
        "The <footer> section",
        "The <body> section",
        "Both the <head> and the <body> sections",
        ],
        correctAnswer: "Both the <head> and the <body> sections",
    },
    {
        prompt: "What is the correct way to write a JavaScript array?",
        options: [
        'var colors = ["red", "green", "blue"]',
        'var colors = (1:"red", 2:"green", 3:"blue")',
        'var colors = 1 = ("red", "green", "blue")',
        'var colors = "red", "green", "blue"',
        ],
        correctAnswer: 'var colors = ["red", "green", "blue"]',
    },
    {
        prompt: "How do you declare a JavaScript variable?",
        options: [
        "variable carName;",
        "var carName;",
        "call carName;",
        "v carName;",
        ],
        correctAnswer: "var carName;",
    },
    {
        prompt: "What will the following code return: Boolean(10 > 9)?",
        options: ["true", "false", "NaN", "Equal"],
        correctAnswer: "true",
    },
    ];

let questionsEl = document.getElementById("questions");
let timerEl = document.getElementById("timer");
let choicesEl = document.getElementById("options");
let submitBtn = document.getElementById("submit-score");
let startBtn = document.getElementById("start");
let nameEl = document.getElementById("initials");
let feedbackEl = document.getElementById("feedback");
let firstScreenEl = document.getElementById("first-screen");
let endScreenEl = document.getElementById("quiz-end");

questionsEl.style.display = "none";
endScreenEl.style.display = "none";

let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

function quizStart() {
    firstScreenEl.style.display = "none";
    questionsEl.style.display = "";
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    getQuestion();
}

function getQuestion() {
    if (currentQuestionIndex < questions.length) {
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("question-list");
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(function (choice, i) {
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = questionClick;
    choicesEl.appendChild(choiceBtn);
    });
    } else {
    quizEnd();
    }
}

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
    time -= 10;
    if (time < 0) {
    time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
    feedbackEl.style.color = "red";
    } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    }
    feedbackEl.classList.remove("hide");
    setTimeout(function () {
    feedbackEl.classList.add("hide");
    }, 1000);

    currentQuestionIndex++;
    getQuestion();
}

function quizEnd() {
    clearInterval(timerId);
    questionsEl.style.display = "none";
    endScreenEl.style.display = "";
    let finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
}

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
    quizEnd();
    }
}

function saveHighscore() {
    let name = nameEl.value.trim();
    if (name !== "") {
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    let newScore = { score: time, name: name };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscore.html";
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
    saveHighscore();
    }
}

startBtn.addEventListener('click', quizStart);
submitBtn.addEventListener('click', saveHighscore);
nameEl.addEventListener('keyup', checkForEnter);
});