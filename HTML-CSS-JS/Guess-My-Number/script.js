'use strict';
// document.querySelector('.message').textContent = 'Start Music...';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 49;
// document.querySelector('.score').textContent = 78;
// document.querySelector('.highscore').textContent = 100;

// document.querySelector('.guess').value = 29;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretnumber);
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displaymessage('No number');
  } else if (guess == secretnumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displaymessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =  guess < secretnumber ? 'To Low' : 'To High';
      displaymessage(guess < secretnumber ? 'To Low' : 'To High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displaymessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  // console.log(secretnumber);
  score = 20;
  // document.querySelector('.message').textContent = 'Start Guessing';
  displaymessage('Start Guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
