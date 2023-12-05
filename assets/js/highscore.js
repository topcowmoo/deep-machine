let scoresBtn = document.querySelector("#view-high-scores");

// Function to print highscores
function printHighscores() {
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach (function(score) {
        let liTag = document.createElement("li");
            liTag.textContent = score.name + " - " + score.score;
        let olE1 = document.getElementById("highscores");
        olE1.appendChild(liTag);
    });
}

// Function to clear highscores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// Event listener
document.getElementById("clear") .onclick = clearHighscores;

// Call to display highscores
printHighscores();