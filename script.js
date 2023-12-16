/* Step 1 : Computer's Choice  */

function getComputerChoice() {
    let computerChoice = "";
    const availableChoice = ["ROCK", "PAPER", "SCISSORS"]
    const randomIndex = Math.floor(Math.random() * availableChoice.length);
    computerChoice = availableChoice[randomIndex];
    return computerChoice
}

/* Step 2 : Define who is the winner */

function winnerIs(playerSelection, computerSelection) {
    let messageToDisplay = ``;
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection){
        messageToDisplay = `It's a TIE !!`
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection === "PAPER"){
        messageToDisplay = `You WIN this round !! ${playerSelection} beats ${computerSelection}`;
    } else {
        messageToDisplay = `Computer WIN this round !! ${computerSelection} beats ${playerSelection}`;
    }
    return messageToDisplay
}


/* Step 3 : Game with user's input | "best-of-five game that keeps score and reports a winner or loser at the end"*/

function game(){
    let userPoints = 0;
    let computerPoints = 0;
    let roundNumber = 1;
    while (roundNumber <= 5){
        console.log("User points : ",userPoints,"   Computer points : ",computerPoints,"     Round : ", roundNumber);

        let computerChoose = getComputerChoice();
        let userChoice = prompt("Please, choose between 'ROCK', 'PAPER' or 'SCISSORS").toUpperCase();
        console.log(`You choose ${userChoice} and computer choose ${computerChoose}`)
        
        whoWinMessage = winnerIs(userChoice, computerChoose);
        console.log(whoWinMessage);

        console.log("")
        console.log("")
        
        if (whoWinMessage == `You WIN this round !! ${userChoice} beats ${computerChoose}`) {
            userPoints += 1;
        } else if(whoWinMessage == `Computer WIN this round !! ${computerChoose} beats ${userChoice}`) {
            computerPoints += 1;
        }else {
            //do nothing;
        }
        
        roundNumber += 1
    }

    console.log("User points : ",userPoints,"   Computer points : ",computerPoints)
    if (userPoints == computerPoints){
        console.log("IT'S A TIE GAME")
    } else if (userPoints > computerPoints) {
        console.log("YOU WIN THE GAME")
    } else {
        console.log("COMPUTER WINS")
    }
}

game()