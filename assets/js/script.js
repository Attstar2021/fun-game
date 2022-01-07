

const displayResult = document.getElementById('results');
const compChoice = document.getElementById('comp');
const userChoice = document.getElementById('player');
const possibleChoices = document.querySelectorAll('Choices');

possibleChoices.forEach(possibleChoice => possibleChoices.addEventListener)('click', e => 
{
    userChoice = e.target.id;
    ranNum = Math.floor(Math.random()* 3) + 1;
    generateComputerChoice();
    compareChoice()
    compChoice.innerHTML =comp;
    userChoice.innerHTML = player;
    displayResult.innerHTML = results;
})

function generateComputerChoice(){
    if (ranNum == 0){
        compareChoice = 'rock';
    } if (ranNum == 1){
        compareChoice = 'paper';
    } if (ranNum == 2){
        compareChoice = 'scissors';
    }
}