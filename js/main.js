let date = new Date().getFullYear();

document.getElementById("year").innerHTML = `${date}`;

let humanScore = 0;
let computerScore = 0;

const selection = Array.from(document.querySelectorAll('.select'));
const message = document.getElementById('.message');
const scorePlayer = document.querySelector('.user.score');
const scoreComputer = document.querySelector('.computer.score');

selection.forEach((box) =>
    box.addEventListener('click', () => {
        if (humanScore >= 5 || computerScore >= 5) {
            return;
        }
        const humanSelection = box.classList[1].toUpperCase();
        playGame(humanSelection);
    })
);

