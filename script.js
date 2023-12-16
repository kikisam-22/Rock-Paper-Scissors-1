/* Step 1 : Computer's Choice 

- CREATE a function getComputerChoice without parameters. 
- CREATE a variable computerChoice of type string that starts with "" value. 
- SET choice between "Rock", "Paper" or "Scissors". 
- MAKE computer choose randomly between choices 
- STORE random choice in computerChoice
- RETURN computerChoice. */

function getComputerChoice() {
    let computerChoice = "";
    const availableChoice = ["ROCK", "PAPER", "SCISSORS"]
    const randomIndex = Math.floor(Math.random() * availableChoice.length);
    computerChoice = availableChoice[randomIndex];
    return computerChoice
}

/* Step 2 : Define who is the winner 

- CREATE a function winnerIs with two parameters : playerSelection and computerSelection. 
- CREATE variable messageToDisplay ot type string that starts with null value. 
- SET playerSelection to uppercase (makes it case-insensitive for the user to input any variation of his choice)
- DEFINE rules : 
    * IF (playerSelection is paper AND computerSelection is rock) OR (playerSelection is rock AND computerSelection is scissors) OR (playerSelection is scissors AND computerSelection is paper)
    THEN STORE "playerSelection wins message" in variable messageToDisplay
    * ELSE IF playerSelection EQUAL TO computerSelection
    THEN STORE "computerSelection wins message" in variable messageToDisplay
    * ELSE STORE "tie message" in variable messageToDisplay
- RETURN messageToDisplay */

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

/* TESTING winnerIs function code
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(winnerIs(playerSelection, computerSelection));*/

/* Step 3 : Game with user's input | "best-of-five game that keeps score and reports a winner or loser at the end"

- CREATE a function game without parameters. 
- CREATE a variable userChoice as string with "" value
- OBTAIN user's choice and STORE It in userChoice
- CREATE a variable userPoints as interger with initial value 0 
- CREATE a variable computerPoints as integer with initial value 0 
- CREATE a variable roundNumber as integer with initial value 1 
- WHILE initial value is less than 5 : 
    * DISPLAY computerPoints, userPoints, and roundNumber
    * CALL winnerIS function with userChoice and getComputerChoice as parameters 
        $ DISPLAY messageToDisplay
    * IF message is "playerSelection wins message" 
    THEN UPDATE value of userPoInt + 1 
    ELSE IF message is "computerSelection wins message" 
    THEN UPDATE value of computerPoint + 1
    ELSE do nothing
    * UPDATE value of roundNumber + 1 

- IF UserPoints equals to computerPoints 
THEN DISPLAY "tie game message"
ELSE IF userPoint is greater than computerPoint 
THEN DISPLAY "user won game message"
ELSE DISPLAY "computer won game message" */

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