// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userInput = document.getElementById('number-goes-here');
const submitButton = document.getElementById('press-button');
const guessesLeft = document.getElementById('guesses-left');
const userGuessedInput = document.getElementById('user-guessed');
const finalResults = document.getElementById('final-results');
const resetButton = document.getElementById('reset-button');
const interactArea = document.getElementById('interact-area');
const endGameText = document.getElementById('end-game-text');
const winsLossesText = document.getElementById('wins-losses');
const guessMessageArea = document.getElementById('guess-message');
// initialize state
let correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);
let guessCount = 4;
let gameWins = 0;
let gameLosses = 0;
handleGuessUpdate();
// set event listeners to update state and DOM

function resetCorrectNumber() {
  correctNumber = Math.ceil(Math.random() * 20);
  console.log(correctNumber);
}

function handleGuessUpdate() {
  guessesLeft.textContent = `${guessCount} guesses left...`;
}

function disableGame() {
  interactArea.classList.add("hidden");
  guessMessageArea.classList.add("hidden");
}

function enableGame() {
  interactArea.classList.remove("hidden");
  guessMessageArea.classList.remove("hidden");
}

function handleGuess() {
  const userGuessed = Number(userInput.value);

  const comparisonResult = compareNumbers(userGuessed, correctNumber);
  console.log(comparisonResult);

  function guessMatch() {
    gameWins++;
    console.log(gameWins);
    endGameText.textContent = "You guessed right! You win!"; 
    winsLossesText.textContent = `Wins: ${gameWins} Losses: ${gameLosses}`;
    disableGame();
  }
    
  function wrongGuess() {
    guessCount--;
    if (guessCount <= 0) {
      noGuessesLeft();
    }
  }
  
  function noGuessesLeft() {
    gameLosses++;
    console.log(gameLosses);
    endGameText.textContent = "Wrong again... and you're out of guesses! You Lose!";
    winsLossesText.textContent = `Wins: ${gameWins} Losses: ${gameLosses}`;
    disableGame();
  }
  
  function handleDisplay(result) {
    guessesLeft.textContent = `${guessCount} guesses left...`;
    userGuessedInput.textContent = `Your guess was too ${result}`;
  }

  //function handleResults(comparisonResult) {
    if (comparisonResult === 0) {
      guessMatch();
      // Lab instructions for match. You win the game.
    } else if (comparisonResult === 1) {
        wrongGuess();
        handleDisplay('high');
        // Result for a guess that's too high
    } else if (comparisonResult === -1) {
        wrongGuess();
        handleDisplay('low');
        // Result for a guess that's too low
    }
  //}
    
  //handleResults();
}

submitButton.addEventListener('click', handleGuess);

const resetTheGame = () => {
  const doReset = window.confirm('Would you like to play again?');

  if (doReset === true) {
      //document.location.reload();
      guessCount = 4;
      endGameText.textContent = "";
      resetCorrectNumber();
      enableGame();

  } else {
      return false;
  }
};
resetButton.addEventListener('click', resetTheGame);