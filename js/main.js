let date = new Date().getFullYear();
document.getElementById("year").innerHTML = `${date}`;

let humanScore = 0;
let computerScore = 0;

const selection = Array.from(document.querySelectorAll('.select'));
const message = document.getElementById('message');
const scorePlayer = document.querySelector('.player.score');
const scoreComputer = document.querySelector('.computer.score');

selection.forEach((box) =>
    box.addEventListener('click', () => {
        if (humanScore >= 5 || computerScore >= 5) {
            return;
        }
        const humanSelection = box.id.toUpperCase();
        playGame(humanSelection);
    })
);

function getComputerSelection() {
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

/*
function getHumanSelection() {
    let validSelection = ['ROCK', 'PAPER', 'SCISSORS'];
    let selection = "";

    while (!validSelection.includes(selection)) {
        selection = prompt("Choose ROCK, PAPER, or SCISSORS:").toUpperCase();
    }

    return selection;
}
*/

function playRound(humanSelection, computerSelection) {
    const winningCombinations = {
        ROCK: 'SCISSORS',
        PAPER: 'ROCK',
        SCISSORS: 'PAPER'
    };

    let result;

    if (humanSelection === computerSelection) {
        result = `You Tied! Human: ${humanSelection} Computer: ${computerSelection}`;
    } else if (winningCombinations[humanSelection] === computerSelection) {
        humanScore++;
        result = `You Win! Human: ${humanSelection} Computer: ${computerSelection}`;
    } else {
        computerScore++;
        result = `You Lose! Human: ${humanSelection} Computer: ${computerSelection}`;
    }

    return result;
}

function playGame(playerSelect){
    const humanSelection = playerSelect;
    const computerSelection = getComputerSelection();

    let roundResult = playRound(humanSelection, computerSelection);

    scorePlayer.textContent = humanScore;
    scoreComputer.textContent = computerScore;
    message.textContent = roundResult;

    if (humanScore >= 5 && computerScore < 5) {
        message.textContent = 'Game Over. You Win!';
    } else if (humanScore < 5 && computerScore >= 5) {
        message.textContent = 'Game Over. You Lose!';
    } else if (humanScore === 5 && computerScore === 5){
        message.textContent = 'Game Over. You Tied!';
    }
}
