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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice (rock, paper, or scissors):"
    ).toLowerCase();
    const computerSelection = getComputerChoice();

    console.log("Round " + (i + 1) + ":");
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }

    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);
    console.log("-------------------");
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry! You lost the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
