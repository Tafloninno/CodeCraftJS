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
   const randomNumber = Math.floor(Math.random() * 3) + 1

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
function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw';
    } else if (
        (computerChoice === 'rock' && userChoice === 'scissors') ||
        (computerChoice === 'paper' && userChoice === 'rock') ||
        (computerChoice === 'scissors' && userChoice === 'paper')
    ) {
        result = 'You lost!';
    } else {
        result = 'You win!';
    }

    resultDisplay.innerHTML = result;
}