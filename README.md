# Rock-Paper-Scissors-1
This is the first JavaScript Project from The-Odin-Project.
The game is based on a simple grade-school-game "ROCK PAPER SCISSORS" 
The game is played against the computer in the console (the version with a GUI will be available later on).

Below you will find the pseudocode/algorithm of the project (note that those will be found in the code as well as comments). 

Paper > Rock | Rock > Scissors | Scissors > Paper

--- x --- 

Pseudocode / Algorithm. 

Step 1 : Computer's Choice 

- CREATE a function getComputerChoice without parameters. 
- CREATE a variable computerChoice of type string that starts with null value. 
- SET choice between "Rock", "Paper" or "Scissors". 
- MAKE computer choose randomly between choices 
- STORE random choice in computerChoice
- RETURN computerChoice. 

Step 2 : Define who is the winner 

- CREATE a function winnerIs with two parameters : playerSelection and computerSelection. 
- CREATE variable messageToDisplay ot type string that starts with null value. 
- SET playerSelection to uppercase (makes it case-insensitive for the user to input any variation of his choice)
- DEFINE rules : 
    * IF (playerSelection is paper AND computerSelection is rock) OR (playerSelection is rock AND computerSelection is scissors) OR (playerSelection is scissors AND computerSelection is paper)
    THEN STORE "playerSelection wins message" in variable messageToDisplay
    * ELSE IF playerSelection EQUAL TO computerSelection
    THEN STORE "computerSelection wins message" in variable messageToDisplay
    * ELSE STORE "tie message" in variable messageToDisplay
- RETURN messageToDisplay

Step 3 : Game with user's input | "best-of-five game that keeps score and reports a winner or loser at the end"

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

- IF userPoint is greater than computerPoint 
THEN DISPLAY "user won game message"
ELSE DISPLAY "computer won game message"

