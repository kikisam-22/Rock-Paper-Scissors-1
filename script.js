let userPoints = 0;
let computersPoints = 0;
let roundWinner = "";


/* Step 1 : Computer's Choice  */

function getComputerChoice() {
    let computerChoice = "";
    const availableChoice = ["ROCK", "PAPER", "SCISSORS"]
    const randomIndex = Math.floor(Math.random() * 3);
    return computerChoice = availableChoice[randomIndex];
     
}

/* Step 2 : Define who is the winner */

function winnerIs(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        roundWinner = "Tie";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection === "PAPER"){
        roundWinner = "Player";
        userPoints++;
    } else {
        roundWinner = "Computer";
        computersPoints++;
    }
}

/* End of game function */

function endOfGame(){
    if (userPoints === 5 || computersPoints === 5){
        endMessage.classList.remove("hidden");
        showWinnerGame()
    } 
}


// UI 

const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
const roundResult = document.querySelector("#round-result");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const divResult = document.querySelector("#results");
const endMessage = document.querySelector("#end-message");
const messageToDisplay = document.querySelector(".message");
const restartButton = document.querySelector("#restartBtn");



rockButton.addEventListener('click', () => grabSelection("ROCK"));
paperButton.addEventListener('click', () => grabSelection("PAPER"));
scissorsButton.addEventListener('click', () => grabSelection("SCISSORS"));
restartButton.addEventListener('click', () => restartGame() )






function grabSelection(playerChoose){
    const computerChoose = getComputerChoice();
    winnerIs(playerChoose, computerChoose);
    updateSelection(playerChoose, computerChoose);
    updateResult();
    endOfGame();
}

function updateSelection(playerChoose, computerChoose) {
    switch (playerChoose) {
        case "ROCK":
            playerChoice.textContent = "🪨";
            break;
        case "PAPER":
            playerChoice.textContent = "📄"
            break;
        case "SCISSORS":
            playerChoice.textContent = "✄"
            break;
        default:
            ""
    }

    switch (computerChoose) {
        case "ROCK":
            computerChoice.textContent = "🪨";
            break;
        case "PAPER":
            computerChoice.textContent = "📄"
            break;
        case "SCISSORS":
            computerChoice.textContent = "✄"
            break;
        default:
            ""
    }
}

function updateResult(){
    if (roundWinner== "Tie"){
        roundResult.textContent = "It's a Tie";
    } else if (roundWinner=="Player"){
        roundResult.textContent = "You won this round"
    } else if (roundWinner == "Computer"){
        roundResult.textContent = "Computer won this round"
    }
    playerPoints.textContent = `Player Points : ${userPoints}`;
    computerPoints.textContent = `Computer Points : ${computersPoints}`;
}

function showWinnerGame(){
    if (userPoints == 5){;
        messageToDisplay.textContent = "YOU WON THIS GAME!";
    } else if (computersPoints == 5) {
        messageToDisplay.textContent = "COMPUTER WON THIS GAME!";
    }
}


function restartGame(){
    playerChoice.textContent = "?";
    computerChoice.textContent = "?";
    userPoints = 0;
    computersPoints = 0;
    playerPoints.textContent = `Player Points : ${userPoints}`;
    computerPoints.textContent = `Computer Points : ${computersPoints}`
    roundResult.textContent = "";
    messageToDisplay.textContent = "";
    endMessage.classList.add("hidden")
}