'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23;
*/
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
    }

    // When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose!!';
    }
  }
});
