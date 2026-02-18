`use strict`;

const getSecretNumber = function () {
  return Math.trunc(Math.random() * 10 + 1);
};
const getGuessNumber = function () {
  return Number(document.querySelector(`.guess`).value);
};
const setScoreGame = function (score) {
  document.querySelector(`.score`).textContent = score;
};
const setHighScore = function (highScore) {
  document.querySelector(`.highscore`).textContent = highScore;
};
const setMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const setWidthNumber = function (number) {
  document.querySelector(`.number`).style.width = number;
};
const setSecretNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};
const setBackgroundColor = function (setBackgroundColor) {
  document.querySelector(`body`).style.backgroundColor = setBackgroundColor;
};

let secretNumber = getSecretNumber();
let scoreGame = 10;
let highScore = 0;
setScoreGame(scoreGame);
// setHighScore();
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = getGuessNumber();

  if (!guess) {
    setMessage(`No number yet`);
  } else if (guess === secretNumber) {
    setMessage(`The number is correct`);
    setSecretNumber(secretNumber);
    setBackgroundColor(`#60b347`);
    setWidthNumber(`30rem`);
    if (scoreGame > highScore) {
      highScore = scoreGame;
      setHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (scoreGame > 1) {
      scoreGame--;
      setScoreGame(scoreGame);
      setMessage(guess > secretNumber ? `Too high` : `Too low`);
    } else {
      scoreGame = 0;
      setScoreGame(scoreGame);
      setMessage(`You are lose`);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function again() {
  scoreGame = 10;
  secretNumber = getSecretNumber();
  setScoreGame(scoreGame);
  setMessage(`Start guessing...`);
  setSecretNumber(`?`);
  setBackgroundColor(`#222`);
  setWidthNumber(`15rem`);
  document.querySelector(`.guess`).value = ``;
});
