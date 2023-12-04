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
                options: ["true", "false", "NaN", "Equal||"],
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













function questionStart() {
    timerID = setInterval(
        clockTick,
        1000
    );
    timerE1.textContent = time;
    let introPageE1 = document.getElementById(
        "first-screen"
    );

    questionStartE1.setAttribute(
        "class",
        "hide"
    );
    questionsE1.removeAttribute(
        "class"
    );
    getQuestion();
}



