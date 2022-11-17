const CHOICES = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    if (!CHOICES.includes(playerSelection)) {
        return "Are you taking the piss?"
    }
    
    if (playerSelection === computerSelection) {
        console.log(`It's a tie. ${playerSelection} = ${computerSelection}.`);
        return null;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors" //
        || playerSelection === "Paper" && computerSelection === "Rock" //
        || playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 0;
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return 1;
}

function game() {
    let score = [0, 0]; // index 0 represents the player's score, index 1 represents the computer's score
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Your choice: ");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
        if (!validate(playerSelection)) {
            console.log("You can only choose 'Rock' / 'Paper' 'Scissors'.")
            i--;
            continue;
        }
        let winner = playRound(playerSelection, getComputerChoice());
        if (winner !==null) {
            score[winner]++;
        }
    }
    outputScore(score);
}

function outputScore(score){
    if(score[0] == score[1]) {
        console.log(`The final score is a draw. ${score[0]} : ${score[1]}.`);
    } else if(score[0] < score[1]) {
        console.log(`Sorry, mate, you lost ${score[0]} : ${score[1]}.`);
    } else {
        console.log(`Congrats! You won ${score[0]} : ${score[1]}.`);
    }
}

function validate(playerSelection) {
    return CHOICES.includes(playerSelection);
}

game();