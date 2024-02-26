let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Array of possible choices
  let choices = ["rock", "paper", "scissors"];

  // Randomly select computer's choice
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  return computerChoice;
}
document.addEventListener("DOMContentLoaded", function () {
  // Function to get computer's choice
  function getComputerChoice() {
    // Array of possible choices
    let choices = ["rock", "paper", "scissors"];

    // Randomly select computer's choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    return computerChoice;
  }

  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case insensitivity
    playerSelection = playerSelection.toLowerCase();

    //  Define the winning scenarios
    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    // The code below checkss if it's a tie
    if (playerSelection === computerSelection) {
      return "It's a tie";
    }

    // The code below checks if a player wins
    if (winConditions[playerSelection] === computerSelection) {
      displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
      // If not a tie and player doesn't win, computer wins
      displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
  }

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButtton = document.getElementById("scissors");

  rockButton.addEventListener("click", handleButtonClick);
  paperButton.addEventListener("click", handleButtonClick);
  scissorsButtton.addEventListener("click", handleButtonClick);

  // Function to handle button clicks
  function handleButtonClick(event) {
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();

    const roundInfo = document.createElement("p");
    roundInfo.textContent = "Round " + (playerScore + computerScore + 1) + ":";
    document.getElementById("results").appendChild(roundInfo);

    const playerChoiceInfo = document.createElement("p");
    playerChoiceInfo.textContent = "You chose: " + playerSelection;
    document.getElementById("results").appendChild(playerChoiceInfo);

    const computerChoiceInfo = document.createElement("p");
    computerChoiceInfo.textContent = "Computer chose: " + computerSelection;
    document.getElementById("results").appendChild(computerChoiceInfo);

    playRound(playerSelection, computerSelection);
  }

  // Function to display result in the results div
  function displayResult(message) {
    const resultInfo = document.createElement("p");
    resultInfo.textContent = message;
    document.getElementById("results").appendChild(resultInfo);
  }
  // Function to announce the winner
  function announceWinner() {
    if (playerScore > computerScore) {
      displayResult("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      displayResult("Sorry! You lost the game!");
    } else {
      displayResult("It's a tie game!");
    }
  }
});
