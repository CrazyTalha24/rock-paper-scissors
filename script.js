let totalHumanScore = 0;
let totalComputerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= (1 / 3)) {
        return 'ROCK';
    } else if (computerChoice <= (2 / 3)) {
        return 'PAPER';
    } else {
        return 'SCISSORS'
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playGame('ROCK'));
paper.addEventListener('click', () => playGame('PAPER'));
scissors.addEventListener('click', () => playGame('SCISSORS'));



function playGame(humanChoice) {
    const computerChoice = getComputerChoice();

    let resultMessage = `Your ${humanChoice} vs Computer's ${computerChoice}. `;

    if ((humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')) {

        resultMessage += 'You won this Round!';

        totalHumanScore++;

    } else if (humanChoice === computerChoice) {
        resultMessage += 'This Round is a Draw!';
    } else {
        resultMessage += 'You lost this Round!';

        totalComputerScore++;
    }

    updateScore();
    checkWinner();

    const message = document.querySelector('#message');
    message.textContent = resultMessage;
}

function updateScore() {
    const humanScore = document.querySelector('#humanScore');
    const computerScore = document.querySelector('#computerScore');

    humanScore.textContent = totalHumanScore;
    computerScore.textContent = totalComputerScore;
}

function checkWinner() {
    const message = document.querySelector('#message');

    if (totalHumanScore >= 5) {
        message.textContent = 'Congrats! You Won!';
        disableButtons();
        resetGame();
    } else if (totalComputerScore >= 5) {
        message.textContent = 'You Lost the Game!';
        disableButtons();
        resetGame();
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled= true;
}

function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled= false;
}

function resetGame() {
    const reset = document.createElement('button');
    reset.innerHTML = 'Reset';
    reset.setAttribute('id', 'reset');

    const buttons = document.querySelector('#buttons');

    buttons.appendChild(reset);


    reset.addEventListener('click', () => {
        totalHumanScore = 0;
        totalComputerScore = 0;
        updateScore();
        message.textContent = '';
        buttons.removeChild(reset);
        enableButtons();
    })


}