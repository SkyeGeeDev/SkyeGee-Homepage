function getComputerChoice(){
    let choice = parseInt(Math.floor(Math.random() * 3) + 1);

    if (choice === 1){
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



function playRound(playerSelection) {

    playerSelection = prompt('Please select: rock, paper, or scissors').toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection){
        console.log('Tie Game.')
    } else if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log(`You lost. ${computerSelection} beats ${playerSelection}`);
        } else if (computerSelection === 'scissors') {
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        }
    } else if (playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log(`You lost. ${computerSelection} beats ${playerSelection}`);
        } else if (computerSelection === 'rock') {
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        }
    } else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log(`You lost. ${computerSelection} beats ${playerSelection}`);
        } else if (computerSelection === 'paper') {
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        }
    } else {
        console.log('Invalid input. Please try again.')
    }
}
