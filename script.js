const CHOICES = ["Rock", "Paper", "Scissors"];
let score = [0, 0]; // [0] holds the player's score, [1] holds the computer's score

function playRound(e) {
    initializeRound();
    let playerSelection = this.value;
    let computerSelection = getComputerChoice();
    compButtons[CHOICES.indexOf(computerSelection)].classList.add('chosen');
    checkRoundOutcome(playerSelection, computerSelection);
    checkScore();
}

function initializeRound() {
    for (let i = 0; i < CHOICES.length; i++) {
        compButtons[i].classList.remove('chosen');
    }
    if (smileyContainer.firstElementChild) smileyContainer.removeChild(smileyContainer.firstElementChild);
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function checkRoundOutcome(playerSelection, computerSelection) {
    let result = CHOICES.indexOf(playerSelection) - CHOICES.indexOf(computerSelection);
    if (result === 1 || result === -2) {
        smileyContainer.appendChild(smiley);
        feedback.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        score[0]++;
    } else if (result === -1 || result === 2) {
        smileyContainer.appendChild(sadey);
        feedback.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        score[1]++;
    } else {
        smileyContainer.appendChild(neutraley);
        feedback.textContent = `It's a tie. ${playerSelection} = ${computerSelection}.`;
    }
}

function checkScore() {
    if (score[0] === 5) {
        feedback.textContent = `${feedback.textContent}  Congrats! You won ${score[0]} : ${score[1]}`;
        cleanUp();
    }
    if (score[1] === 5) {
        feedback.textContent = `${feedback.textContent}  Sorry, mate, you lost ${score[0]} : ${score[1]}.`
        cleanUp();
    }
}

function cleanUp() {
    body.appendChild(newGameBtn);
    playerButtons.forEach(button => button.removeEventListener('click', playRound));
    playerChoicesContainer.classList.toggle('working');
}

function startNewGame() {
    playerButtons.forEach(button => button.addEventListener('click', playRound));
    body.removeChild(newGameBtn);
    playerChoicesContainer.classList.toggle('working');
    for (let i = 0; i < CHOICES.length; i++) {
        compButtons[i].classList.remove('chosen');
    }
    score[0] = 0;
    score[1] = 0;
    smileyContainer.removeChild(smileyContainer.firstElementChild);
    feedback.textContent = '';
}


const playerChoicesContainer = document.querySelector('.working');

const playerButtons = document.querySelectorAll('.left button');
playerButtons.forEach(button => button.addEventListener('click', playRound));

const feedback = document.querySelector('.feedback');

const smileyContainer = document.querySelector('.smiley-container');

const smiley = document.createElement('img');
smiley.src = 'images/smiley.png';
smiley.classList.add('all-smileys');

const sadey = document.createElement('img');
sadey.src = 'images/sadey.png';
sadey.classList.add('all-smileys');

const neutraley = document.createElement('img');
neutraley.src = 'images/neutraley.png';
neutraley.classList.add('all-smileys');

const newGameBtn = document.createElement('button');
newGameBtn.textContent = 'New game';
newGameBtn.classList.add('newGameButton');
newGameBtn.addEventListener('click', startNewGame);

const body = document.querySelector('body');

const compButtons = document.querySelectorAll('.right .choices button');