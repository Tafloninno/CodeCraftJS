const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random() * possibleChoices.length)

   if(randomNumber === 1){
    computerChoice = 'rock'
   }
   if(randomNumber === 2){
    computerChoice = 'paper'
   }
   if(randomNumber === 3){
    computerChoice = 'sciccors'
   }

   computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!'
    }
    if(computerChoice === 'paper' && userChoice === 'sciccors'){
        result = 'You win!'
    }
    if(computerChoice === 'sciccors' && userChoice === 'rock'){
        result = 'You win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lost!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lost!'
    }
    if(computerChoice === 'sciccors' && userChoice === 'paper'){
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}