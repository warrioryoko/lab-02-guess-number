export function compareNumbers(guess, correctNumber) {
  if (guess === correctNumber) {
    // instructions say to return 0 for an identical match
    return 0;
  } else if (guess > correctNumber) {
    // return 1 for a guess higher than the random number
    return 1;
  } else if (guess < correctNumber) {
    // return -1 for a guess lower than the random number
    return -1;
  } else {
    alert('somehow you managed to get a value that is not a number...');
  }
}

