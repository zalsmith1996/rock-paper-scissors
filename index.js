let playerWins = 0;
let computerWins = 0;

const body = document.querySelector('html');

let scoreDiv = document.createElement('div');
scoreDiv.classList.add('scores');
scoreDiv.textContent = `Player Wins: ${playerWins}
Computer Wins: ${computerWins}`;
let gameOutput = document.createElement('div');
gameOutput.classList.add('output');


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
body.append(scoreDiv);
body.append(gameOutput);
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
        gameOutput.textContent = `It's a tie!`;
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        gameOutput.textContent = `You win! ${capitalizeString(playerSelection)} beats ${capitalizeString(computerSelection)}.`;
        playerWins++;
        scoreDiv.textContent = `Player Wins: ${playerWins}
                                Computer Wins: ${computerWins}`;
    }
    else {
        gameOutput.textContent = `You lose! ${capitalizeString(computerSelection)} beats ${capitalizeString(playerSelection)}.`;
        computerWins++;
        scoreDiv.textContent = `Player Wins: ${playerWins}
                                Computer Wins: ${computerWins}`;
    }
    
    if (playerWins == 5) {
        gameOutput.textContent = 'You won! You beat the computer 5 times.';
        playerWins = 0;
        computerWins = 0;
    }

    if (computerWins == 5) {
        gameOutput.textContent = 'The Computer wins! They beat you 5 times.';
        playerWins = 0;
        computerWins = 0;
    }
}

function game(playerSelection) {       
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

}
