// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userInput = document.getElementById('number-goes-here');
const submitButton = document.getElementById('press-button');
const guessesLeft = document.getElementById('guesses-left');
const userGuessedInput = document.getElementById('user-guessed');
const finalResults = document.getElementById('final-results');
const resetButton = document.getElementById('reset-button');
// initialize state
const correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);
let guessCount = 4;
// set event listeners to update state and DOM

function handleGuess() {
  const userGuessed = Number(userInput.value);

  const comparisonResult = compareNumbers(userGuessed, correctNumber);
  console.log(comparisonResult);

  function guessMatch() {
    finalResults.textContent = "You guessed right! You win!"
  }
    
  function wrongGuess() {
    guessCount--;
    if (guessCount <= 0) {
      noGuessesLeft();
      setTimeout(resetTheGame(), 3000);
    }
  }
  
  function noGuessesLeft() {
    finalResults.textContent = "Wrong again... and you're out of guesses! You Lose!";
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
      document.location.reload();
  } else {
      return false;
  }
};
resetButton.addEventListener('click', resetTheGame);