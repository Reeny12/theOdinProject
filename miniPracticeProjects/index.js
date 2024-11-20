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

function getHumanChoice(answer){
    answer = prompt("Enter Rock, Paper or Scissor as answer: ")
    console.log(answer);
    return answer;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        console.log("It's a tie!!!");
    }
    else if ((humanChoice == "Rock" && computerChoice == "Scissor") ||
    (humanChoice == "Scissor" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice ==  "Rock") ) {
        humanScore += 1;
        console.log("Yay!! you gained 1 score.");
    }
    else if ((computerChoice == "Paper" && humanChoice == "Rock") ||
    (computerChoice == "Rock" && humanChoice == "Scissor") ||
    (computerChoice == "Scissor" && humanChoice == "Paper")){
        computerScore += 1;
        console.log("You lost 1 score");
    }
    else{
        console.log("Wrong choice");
    }

    let scores = `Human: ${humanScore}, Computer: ${computerScore}`;
    console.log(scores);
    return scores;
}

//playRound();
function playGame(round){
    round = 0;
    for (i = 0; i <= 2; i++){
        round += 1;
        playRound();
    }
}

playGame();