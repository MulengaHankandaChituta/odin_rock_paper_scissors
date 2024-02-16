function getComputerChoice() {
  // Array of possible choices
  let choices = ["rock", "paper", "scissors"];

  // Randomly select computer's choice
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  return computerChoice;
}

// function being put to use
console.log(getComputerChoice());
