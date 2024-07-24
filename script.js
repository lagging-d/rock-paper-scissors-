const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnContainer = document.querySelector(".btnContainer");
const resultContainer = document.querySelector(".resultContainer");

// this function returns one of the strings based on what number
// in the range of 1 - 120 was calculated and stored in randomNumber 
// variable

function getComputerChoice() {

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
    let clickCount = 0;

    btnContainer.addEventListener(`click`, (event) => {
        let target = event.target;
        ++clickCount;
        console.log(clickCount);

        switch(target.id) {
            case `rock`:
                playRound(`rock`, getComputerChoice());
                break;
            case `paper`:
                playRound(`paper`, getComputerChoice());
                break;
            case `scissors`:
                playRound(`scissors`, getComputerChoice());
                break;
        }
    })

    function playRound(human, computer) {


        if (human === computer) {
            const draw = document.createElement(`div`);
            draw.textContent = `DRAW!`;
            resultContainer.appendChild(draw);
        } else if (human === `rock` && computer === `paper` ||
                human === `paper` && computer === `scissors` ||
                human === `scissors` && computer === `rock`) {
            ++computerScore;
            const compWin = document.createElement(`div`);
            compWin.textContent = `Computer WINS!`;
            resultContainer.appendChild(compWin);
        } else if (human === `rock` && computer === `scissors` ||
                human === `paper` && computer === `rock` ||
                human === `scissors` && computer === `paper`) {
            ++humanScore;
            const humanWin = document.createElement(`div`);
            humanWin.textContent = `Human WINS!`;
            resultContainer.appendChild(humanWin);
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