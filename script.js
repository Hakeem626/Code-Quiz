// DOM elements
var startButton = document.getElementById("start-btn");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var feedbackElement = document.getElementById("feedback");
var timeLeftElement = document.getElementById("time-left");

// Quiz variables
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;

// Event listener for start button
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
  startButton.disabled = true;
  startTimer();
  showQuestion();
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Function to display the current question
function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Clear previous choices
  choicesElement.innerHTML = "";

  // Create and append answer choice buttons
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("data-index", i);
    choiceButton.addEventListener("click", handleAnswer);
    choicesElement.appendChild(choiceButton);
  }
}
// Function to handle user's answer
function handleAnswer(event) {
  var selectedChoice = event.target;
  var selectedAnswerIndex = parseInt(selectedChoice.getAttribute("data-index"));
  var currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswerIndex === currentQuestion.correctAnswer) {
    feedbackElement.textContent = "Correct!";
    score++;
  } else {
    feedbackElement.textContent = "Wrong!";
    timeLeft -= 10; // Subtract 10 seconds for an incorrect answer
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if all questions are answered
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  questionElement.textContent = "Quiz Over!";
  choicesElement.innerHTML = "";
  feedbackElement.textContent = "";

  // Prompt for initials and save score
  var initials = prompt("Enter your initials:");
  saveScore(initials, score);
}

// Function to save the score
function saveScore(initials, score) {
  // Save the initials and score using your preferred method (e.g., local storage, API call, etc.)
  console.log("Initials: " + initials);
  console.log("Score: " + score);
}

// Questions
var questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Rome", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Which programming language is used for web development?",
      choices: ["JavaScript", "Python", "Java", "C++"],
      correctAnswer: 0
    },
    {
        question: "What is an Array?",
        choices: ["Variable", "Data structure", "HTML", "Java"],
        correctAnswer: 1
    },
    {
        question: "What state does NOT border Mexico?",
        choices: ["California", "Texas", "Utah", "Arizona"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of New York?",
        choices: ["New York", "Los Angeles", "Buffalo", "Albany"],
        correctAnswer: 3
      },
    {
        question: `Who wrote the book "A song of Ice and Fire?"`,
        choices: ["Stephen King", "George RRM", "JK Rowling", "CS Lewis"],
        correctAnswer: 1
      },
    {
        question: "What year was Donald Trump born?",
        choices: ["1946", "1940", "1850", "1955"],
        correctAnswer: 0
      },
    {
        question: "Who won the 2010 NBA Finals?",
        choices: ["Nuggets", "Spurs", "Clippers", "Lakers"],
        correctAnswer: 3
      },
    {
        question: "What element was named after a Roman god?",
        choices: ["Hydrogen", "Titanium", "Mercury", "Carbon"],
        correctAnswer: 0
      },
    {
        question: "The ocean covers ___ if the Earth's surface?",
        choices: ["58", "72", "71", "1/2"],
        correctAnswer: 2
      },
];