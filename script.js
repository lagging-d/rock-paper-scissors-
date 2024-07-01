let randomNumber = Math.floor(Math.random() * 120) + 1;


// this function returns one of the strings based on what number
// in the range of 1 - 120 was calculated and stored in randomNumber 
// variable

function getComputerChoice(randomNumber) {

    if (randomNumber <= 40 && randomNumber >= 1) {
        return "rock";
    } else if (randomNumber >= 41 && randomNumber <= 80) {
        return "paper";
    } else return "scissors";
}

getComputerChoice(randomNumber);

let humanChoice = prompt(`Do you SCISSOR? Do you ROCK? Or are you paper?`).toLowerCase();

function getHumanChoice(humanChoice) {
    if (humanChoice === `scissors` || humanChoice === `rock` || humanChoice === `paper`) {
        return humanChoice;
    } else return console.log(`The game is rock-scissors-paper!`) 
}

getHumanChoice(humanChoice);


function playRound(human, computer) {
    if (human === computer) {
        return `DRAW`;
    } else if (human === `rock` && computer === `paper` ||
            human === `paper` && computer === `scissors` ||
            human === `scissors` && computer === `rock`) {
        ++computerScore;
        return console.log(`Computer WINS`);
    } else if (human === `rock` && computer === `scissors` ||
            human === `paper` && computer === `rock` ||
            human === `scissors` && computer === `paper`) {
        ++humanScore;
        return console.log(`Human WINS`);
    }
}

const humanSelection = getHumanChoice(humanChoice);
const computerSelection = getComputerChoice(randomNumber);


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    playRound(humanSelection, computerSelection);

}