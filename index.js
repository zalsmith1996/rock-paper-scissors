let playerWins = 0;
let computerWins = 0;

game(); 

// Return computer's randomized choice of rock, paper, scissors
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection)
    {
        console.log(`It's a tie! Scores remain unchanged.`);
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        console.log(`You win! ${capitalizeString(playerSelection)} beats ${capitalizeString(computerSelection)}.`);
        playerWins++;
    }
    else {
        console.log(`You lose! ${capitalizeString(computerSelection)} beats ${capitalizeString(playerSelection)}.`);
        computerWins++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
        playerSelection.toLowerCase();

        playRound(playerSelection, computerSelection);
    }

    if (playerWins === computerWins) {
        console.log("After 5 rounds, it's a tie!");
    }
    else if
        (playerWins > computerWins) {
            console.lose("After 5 rounds, you win!");
    }
    else {
        console.log("After 5 rounds, you lose!");
    }
}
