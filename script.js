console.log('Hello World!');


function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= (1 / 3)) {
        computerChoice = 'ROCK';
    } else if (computerChoice <= (2 / 3)) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS'
    }

    return computerChoice;

}


function getHumanChoice() {
    let humanChoice;
    const validChoices = ['ROCK', 'PAPER', 'SCISSORS'];

    do {
        humanChoice = prompt('Enter your Move:').toUpperCase();
    } while (!validChoices.includes(humanChoice));

    return humanChoice;

}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || (humanChoice === 'PAPER' && computerChoice === 'ROCK') || (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
            console.log(`Your ${humanChoice} beats the computer's ${computerChoice}. You Won the Round!`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log(`${humanChoice} draws with ${computerChoice}. This Round is a Draw!`);
        } else {
            console.log(`Computer's ${computerChoice} beats your ${humanChoice}. You Lost the Round!`);
            computerScore++;
        }

    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1}: Human Score - ${humanScore}, Computer Score - ${computerScore}`);
    }

    
    if (humanScore > computerScore) {
        console.log('Congrats! You won the Game!')
    } else if (humanScore < computerScore) {
        console.log('You lost the Game!')
    } else {
        console.log('The Game is a Draw!')
    }

}


playGame();