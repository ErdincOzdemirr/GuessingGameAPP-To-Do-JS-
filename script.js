// Generate a random number
const targetNumber = Math.floor(Math.random() * 100) + 1;

// User guess counter
let guessCount = 0;

const guessSubmit = document.getElementById("guessSubmit");
const guessInput = document.getElementById("guessInput");
const message = document.querySelector(".message");

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  guessCount++;

  if (userGuess === targetNumber) {
    message.textContent = `Congratulations! You guessed it in ${guessCount} tries.`;
    message.style.color = "green";
    gameOver();
  } else if (guessCount === 10) {
    message.textContent = `Sorry, you've run out of guesses. The correct answer was ${targetNumber}.`;
    message.style.color = "red";
    gameOver();
  } else {
    message.textContent = `Wrong guess. You have ${
      10 - guessCount
    } guesses left.`;
    message.style.color = "red";
    guessInput.value = "";
  }
}

function gameOver() {
  guessInput.disabled = true;
  guessSubmit.disabled = true;
}
