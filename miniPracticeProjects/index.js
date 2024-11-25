const rockButton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const results = document.querySelector("#results");

function getComputerChoice(){
    let randomNumber = Math.random() * 10;
    if (randomNumber > 0 && randomNumber <= 3 ){
        console.log("Rock");
        return ("Rock");
    }
    else if (randomNumber <=7 && randomNumber > 3){
        console.log("Paper");
        return ("Paper");
    }
    else{
        console.log("Scissor");
        return ("Scissor");
    }
}

/*function getHumanChoice(answer){
    answer = prompt("Enter Rock, Paper or Scissor as answer: ")
    console.log(answer);
    return answer;
}*/


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    console.log(humanChoice);
    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        results.textContent = `It's a tie! Human: ${humanScore}, Computer: ${computerScore}`;
    }
    else if ((humanChoice == "Rock" && computerChoice == "Scissor") ||
    (humanChoice == "Scissor" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice ==  "Rock") ) {
        humanScore += 1;
        results.textContent = `Yay!! you gained 1 score! Human: ${humanScore}, Computer: ${computerScore}`;
    }
    else if ((computerChoice == "Paper" && humanChoice == "Rock") ||
    (computerChoice == "Rock" && humanChoice == "Scissor") ||
    (computerChoice == "Scissor" && humanChoice == "Paper")){
        computerScore += 1;
        results.textContent = `You lost 1 score! Human: ${humanScore}, Computer: ${computerScore}`;
    }
    else{
        results.textContent = "Wrong choice"
    }
}


rockButton.addEventListener("click", () => playRound("Rock"));
paperbutton.addEventListener("click", () => playRound("Paper"));
scissorButton.addEventListener("click", () => playRound("Scissor"));
