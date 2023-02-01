let playerScore = 0
let computerScore = 0
let roundWinner = ''
const choices = ['rock','paper','scis']
let icon, playerChoice

const leftResult = document.querySelector('.left-result')
const rightResult = document.querySelector('.right-result')
const letSign = document.querySelector('.left-sign')
const rightSign = document.querySelector('.right-sign')
const resultTitle = document.querySelector('.result-h2')
const resultDesc = document.querySelector('.result-p')
const endGame = document.querySelector('.endgame')
const endGameDesc = document.querySelector('.endgame-desc')
const resetBtn = document.querySelector('.reset')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scis = document.getElementById('scis')

rock.addEventListener('click', ()=>handlePlay('rock'))
paper.addEventListener('click', ()=>handlePlay('paper'))
scis.addEventListener('click', ()=>handlePlay('scis'))
resetBtn.addEventListener('click',()=> reset())

function reset(){
    playerScore = 0
    computerScore = 0
    roundWinner = ''
    endGame.style.display = 'none'
    resultTitle.textContent = 'Chose your weapon'
    resultDesc.textContent = 'Fist to score 5 points wins the game'
    leftResult.textContent = 'Player: 0'
    rightResult.textContent = 'Computer: 0'
}

function getComputerChoices(){
    return choices[Math.floor(Math.random()*3)]
}

function handlePlay(playerChoice){
    const computerChoice = getComputerChoices()
    getIcon(computerChoice)
    getIcon(playerChoice)
    updateScore(playerChoice,computerChoice)
    updateResultTitle()
    updateResultDesc( getIcon(computerChoice),getIcon(playerChoice))
    getResult()
}

function getResult(){
    if(computerScore===5)endGameDesc.textContent = "Computer has won the game"
    if(playerScore===5)endGameDesc.textContent = "Player has won the game"
    if(computerScore===5||playerScore===5)endGame.style.display = 'block'
    
}

function updateResultDesc(icon1,icon2){
    resultDesc.textContent = `Player get the ${icon1} versus the ${icon2} of the computer`
}

function getIcon(choice){
    switch(choice){
        case 'rock': 
            icon = '✊';
            break;
        case 'scis': 
            icon = '✌';
            break;
        case 'paper': 
            icon = '✋';
            break;
    }
    return icon
}

function updateResultTitle(){
    switch(roundWinner){
        case 'tie':
            resultTitle.textContent = 'This is a tie game';
            break;
        case 'player':
            resultTitle.textContent = 'Player win the game';
            break;
        case 'computer':
            resultTitle.textContent = 'Computer win the game';
            break;
    }
}

function updateScore(playerChoice,computerChoice){
    if (playerChoice === computerChoice) {
        roundWinner = 'tie'
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scis') ||
        (playerChoice === 'scis' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerChoice === 'rock' && playerChoice === 'scis') ||
        (computerChoice === 'scis' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    
    leftResult.textContent = `Player: ${playerScore}`
    rightResult.textContent = `Computer: ${computerScore}`
}
