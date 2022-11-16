// Detalles del código:
// funciones anónimas
// ternary operator
// textContent vs value
// equal operator == vs ===


'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessField = document.querySelector('.guess')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')
const highscoreField = document.querySelector('.highscore')
const scoreField = document.querySelector('.score')
const body = document.querySelector('body')

const displayMessage = function (message) {
  messageField.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessField.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberField.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    numberField.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreField.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreField.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreField.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  displayMessage('Start guessing...');
  scoreField.textContent = score;
  numberField.textContent = '?';
  guessField.value = '';

  body.style.backgroundColor = '#222';
  numberField.style.width = '15rem';
});


