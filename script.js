'use strict';

let message = document.querySelector('.message');
let checkBtn = document.querySelector('.check');

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

checkBtn.addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    message.textContent = 'Enter a number!';

    //when user wins
  } else if (guess == secretNumber) {
    message.textContent = 'Correct Guess!';
    document.querySelector('body').style.backgroundColor = 'green';
    let number = (document.querySelector('.number').textContent = secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

let againBtn = document.querySelector('.again');

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';

  //   checkBtn.addEventListener('click', () => {
  //     const guess = document.querySelector('.guess').value;

  //     if (!guess) {
  //       message.textContent = 'Enter a number!';

  //       //when user wins
  //     } else if (guess == secretNumber) {
  //       message.textContent = 'Correct Guess!';
  //       document.querySelector('body').style.backgroundColor = 'green';
  //       let number = (document.querySelector('.number').textContent =
  //         secretNumber);

  //       if (score > highscore) {
  //         highscore = score;
  //         document.querySelector('.highscore').textContent = highscore;
  //       }

  //       //when guess is too high
  //     } else if (guess > secretNumber) {
  //       if (score > 1) {
  //         message.textContent = 'Too High!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         message.textContent = 'You Lost!';
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('body').style.backgroundColor = 'red';
  //       }
  //     } else if (guess < secretNumber) {
  //       if (score > 1) {
  //         message.textContent = 'Too Low!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         message.textContent = 'You Lost!';
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('body').style.backgroundColor = 'red';
  //       }
  //     }
  //   });
});
