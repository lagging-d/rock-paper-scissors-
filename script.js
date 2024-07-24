const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnContainer = document.querySelector(".btnContainer");

btnContainer.addEventListener(`click`, (event) => {
    let target = event.target;

    switch(target.id) {
        case `rock`:
            playRound(`rock`, getComputerChoice())
    }
})

function getComputerChoice() {


// this function returns one of the strings based on what number
// in the range of 1 - 120 was calculated and stored in randomNumber 
// variable

    let randomNumber = Math.floor(Math.random() * 120) + 1;

    if (randomNumber <= 40 && randomNumber >= 1) {
        return "rock";
    } else if (randomNumber >= 41 && randomNumber <= 80) {
        return "paper";
    } else return "scissors";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(human, computer) {


        if (human === computer) {
            return console.log(`DRAW`);
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
        } else return console.log(`INVALID`)
    }

    //playRound(getHumanChoice(), getComputerChoice());
    //playRound(getHumanChoice(), getComputerChoice());
    //playRound(getHumanChoice(), getComputerChoice());
    //playRound(getHumanChoice(), getComputerChoice());
    //playRound(getHumanChoice(), getComputerChoice());
  
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
}

playGame();