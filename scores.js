// DOM element
var scoresListElement = document.getElementById("scores-list");

// Fetch high scores and populate the table
function fetchHighScores() {
  // Here, you can fetch the high scores using your preferred method (e.g., API call, local storage, etc.)
  var highScores = [
    { initials: "HO", score: 100 },
    { initials: "CD", score: 80 },
    { initials: "EF", score: 60 }
  ];

  // Clear the scores list
  scoresListElement.innerHTML = "";

  // Add each high score to the table
  highScores.forEach(function(score) {
    var row = document.createElement("tr");
    var initialsCell = document.createElement("td");
    var scoreCell = document.createElement("td");
    initialsCell.textContent = score.initials;
    scoreCell.textContent = score.score;
    row.appendChild(initialsCell);
    row.appendChild(scoreCell);
    scoresListElement.appendChild(row);
  });
}

// Fetch and display high scores on page load
fetchHighScores();
