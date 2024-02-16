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
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  // If not a tie and player doesn't win, computer wins
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

// Functions being put to use
const playerChoice = "rock"; // This assumes a player's choice is rock
const computerChoice = getComputerChoice(); // This gets computer's choice
console.log("Computer's choice:", computerChoice);
console.log(playRound(playerChoice, computerChoice));
