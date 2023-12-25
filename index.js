const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
playerSelection.toLowerCase();

playRound(playerSelection, computerSelection);

// Return computer's randomized choice of rock, paper, scissors
function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function capitalizeString (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    {
        console.log(`It's a tie! Restarting round.`);
        const computerSelection = getComputerChoice();
        computerSelection.toLowerCase();
        const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
        playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        console.log(`You win! ${capitalizeString(playerSelection)} beats ${capitalizeString(computerSelection)}.`);
    }
    else {
        console.log(`You lose! ${capitalizeString(computerSelection)} beats ${capitalizeString(playerSelection)}.`);
    }
}
