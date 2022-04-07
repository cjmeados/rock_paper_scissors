        
let choices = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

let personChoice;
let resultFromPlayRound;
function playRound(personChoice, computerPlay) {
    if (personChoice === 'rock') {
        if (computerPlay === 'Scissors') {
            resultFromPlayRound = 'You win! Your Rock crushes their scissors.';
        } else if (computerPlay === 'Paper') {
            resultFromPlayRound = 'You lost! Their paper covers your rock.';
        } else if (computerPlay === 'Rock') {
            resultFromPlayRound = 'Two rocks?! It\'s a tie!';
        }
    }
    else if (personChoice === 'paper') {
        if (computerPlay === 'Scissors') {
            resultFromPlayRound = 'You lost! Scissors beats paper.';     
        } else if (computerPlay === 'Rock') {
            resultFromPlayRound = 'You win! Paper beats rock.';
        } else if (computerPlay === 'Paper') { 
            resultFromPlayRound = 'Two papers?! It\'s a tie!';
        } 
    } 
    else if (personChoice === 'scissors') {
        if (computerPlay === 'Rock') {
            resultFromPlayRound = 'You lost! Rock beats scissors.';
        } else if (computerPlay === 'Paper') {
            resultFromPlayRound = 'You win! Scissors beats paper.';
        } else {
            resultFromPlayRound = 'A pair of pair of scissors ?! It\'s a tie!';
        }
    }
} 

let w =0;
let l = 0;
let winTally = document.getElementById('winTally');
let loseTally = document.getElementById('loseTally');
let finalResult = document.querySelector('#finalResult');
function incrementWin() {
    winTally.textContent = ++w;
}
function incrementLose() {
    loseTally.textContent = ++l;
}
function checkResult() {
    if (resultFromPlayRound.includes('win!')) {
        incrementWin();
    } else if (resultFromPlayRound.includes('lost!')) {
        incrementLose();
    }
}
function checkForFive() {
    if (w>=5) {
        finalResult.textContent = 'You beat the computer!'
    } else if (l>=5) {
        finalResult.textContent = 'The computer beat you!'
    }
}
const rockButtonPlayRound = document.querySelector('#rockbtn');
rockButtonPlayRound.addEventListener('click', () => {
    playRound('rock', computerPlay());
    document.getElementById('results').textContent = resultFromPlayRound;
    checkResult();
    checkForFive();
    
});

const paperButtonPlayRound = document.querySelector('#paperbtn');
paperButtonPlayRound.addEventListener('click', () => {
    playRound('paper', computerPlay());
    document.getElementById('results').textContent = resultFromPlayRound;
    checkResult();
    checkForFive();
    
});

const scissorsButtonPlayRound = document.querySelector('#scissorsbtn');
scissorsButtonPlayRound.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    document.getElementById('results').textContent = resultFromPlayRound;
    checkResult();
    checkForFive();

});


