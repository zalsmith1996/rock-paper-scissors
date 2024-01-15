let playerWins = 0;
let computerWins = 0;

const body = document.querySelector('html');

let selectionDiv = document.createElement('div');
selectionDiv.classList.add('playerButtons');
let rock = document.createElement('button');
rock.id = 'rock';
rock.textContent = 'Rock';
let paper = document.createElement('button');
paper.id = 'paper';
paper.textContent = 'Paper';
let scissors = document.createElement('button');
scissors.id = 'scissors'
scissors.textContent = 'Scissors';
selectionDiv.append(rock);
selectionDiv.append(paper);
selectionDiv.append(scissors);
body.append(selectionDiv);

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', e => {
        game(e.target.id);
    });
}


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
        console.log(`It's a tie!`);
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

function game(playerSelection) {
    //for (let i = 0; i < 5; i++) {}
        
    const computerSelection = getComputerChoice();
    //const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
    //playerSelection.toLowerCase();


    playRound(playerSelection, computerSelection);
    

    //if (playerWins === computerWins) {
    //    console.log("It's a tie!");
    //}
    //else if
    //    (playerWins > computerWins) {
    //        console.lose("You win!");
    //}
    //else {
    //    console.log("You lose!");
    //}
}
