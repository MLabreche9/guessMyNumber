'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number');

    // When Player Wins
  } else if (guess === number) {
    //document.querySelector('.message').textContent = 'Correct Number!!';
    displayMessage('Correct Number!!');

    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is different than secret number
  } else if (guess !== number) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > number ? 'Too high!!' : 'Too Low';
      displayMessage(guess > number ? 'Too high!!' : 'Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lose!!';
      displayMessage('You Lose!!');
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#c92a2a';
    }
  }

  /*//When Guess is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';

      document.querySelector('body').style.backgroundColor = '#c92a2a';

      document.querySelector('.number').style.width = '0rem';
    }

    // When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose!!';

      document.querySelector('body').style.backgroundColor = '#c92a2a';

      document.querySelector('.number').style.width = '0rem';
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
