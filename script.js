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

let humanChoice = prompt(`Do you SCISSOR? Do you ROCK? Or are you paper?`).toLowerCase();

function getHumanChoice(humanChoice) {
    if (humanChoice === `scissor` || humanChoice === `rock` || humanChoice === `paper`) {
        return humanChoice;
    } else return `The game is rock-scissors-paper!`  
}

let humanScore = 0;
let computerScore = 0;

