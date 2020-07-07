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
let guessCount = 4;
// set event listeners to update state and DOM

function handleGuess() {
  const userGuessed = Number(userInput.value);

  function guessMatch() {
    finalResults.textContent = "You guessed right!"
  }

  function noGuessesLeft() {
    finalResults.textContent = "Wrong again... and you're out of guesses! You Lose!";
  }

  function wrongGuess() {
    guessCount--;
    if (guessCount <= 0) {
      noGuessesLeft();
    }
  }

  function showResults(wrongNumber) {
   
  }
}