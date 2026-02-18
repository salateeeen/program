`use strict`;

const querySelectorClass = function (Class) {
  return document.querySelector(`.${Class}`);
};

const querySelectorID = function (ID) {
  return document.querySelector(`#${ID}`);
};

const initialValueText = function (Class) {
  Class.textContent = 0;
};
const setValueText = function (Class, value) {
  Class.textContent = value;
};
const getValueText = function (Class) {
  return Class.textContent;
};
const addClass = function (Class, added) {
  Class.classList.add(`${added}`);
};

const removeClass = function (Class, removed) {
  Class.classList.remove(`${removed}`);
};
const atClick = function (Class, fun) {
  Class.addEventListener(`click`, fun);
};

const player1 = querySelectorClass(`player--0`);
const scoreID1 = querySelectorID(`score--0`);
const currentScoreID1 = querySelectorID(`current--0`);
const nameID1 = querySelectorID(`name--0`);

const player2 = querySelectorClass(`player--1`);
const scoreID2 = querySelectorID(`score--1`);
const currentScoreID2 = querySelectorID(`current--1`);
const nameID2 = querySelectorID(`name--1`);

const btnRoll = querySelectorClass(`btn--roll`);
const btnNew = querySelectorClass(`btn--new`);
const btnHold = querySelectorClass(`btn--hold`);

const getDicePng = querySelectorClass(`dice`);
addClass(getDicePng, `hidden`);

initialValueText(scoreID1);
initialValueText(scoreID2);
setValueText(nameID1, `sultan`);
setValueText(nameID2, `omar`);

let sumRandomNum1 = 0;
let sumRandomNum2 = 0;
let activePlayer = Math.trunc(Math.random() * 2) + 1;
let playing = true;

const Switch = function (currentScoreID, active) {
  initialValueText(currentScoreID);
  activePlayer = active;
};
const setSrcPng = function () {
  if (playing) {
    const randomNum = Math.trunc(Math.random() * 6 + 1);
    getDicePng.src = `dice-${randomNum}.png`;
    removeClass(getDicePng, `hidden`);

    if (randomNum != 1)
      if (activePlayer == 1) {
        addClass(player1, `player--active`);
        removeClass(player2, `player--active`);
        setValueText(currentScoreID1, (sumRandomNum1 += randomNum));
      } else {
        addClass(player2, `player--active`);
        removeClass(player1, `player--active`);
        setValueText(currentScoreID2, (sumRandomNum2 += randomNum));
      }
    else {
      if (activePlayer == 1) {
        sumRandomNum1 = 0;
        Switch(currentScoreID1, 2);
      } else if (activePlayer == 2) {
        sumRandomNum2 = 0;
        Switch(currentScoreID2, 1);
      }
    }
  }
};
atClick(btnRoll, setSrcPng);
let totalNum1 = 0;
let totalNum2 = 0;

const win = function (total) {
  if (total >= 15) {
    playing = false;
    addClass(getDicePng, `hidden`);
    if (activePlayer == 1) {
      addClass(player1, `player--winner`);
    } else {
      addClass(player2, `player--winner`);
    }
  }
};

const setBtnHold = function () {
  if (playing) {
    if (activePlayer == 1) {
      totalNum1 += sumRandomNum1;
      setValueText(scoreID1, totalNum1);
      win(totalNum1);
      sumRandomNum1 = 0;
      Switch(currentScoreID1, 2);
    } else if (activePlayer == 2) {
      totalNum2 += sumRandomNum2;
      setValueText(scoreID2, totalNum2);
      win(totalNum2);
      sumRandomNum2 = 0;
      Switch(currentScoreID2, 1);
    }
  }
};
atClick(btnHold, setBtnHold);

const newGame = function () {
  playing = true;
  initialValueText(currentScoreID1);
  initialValueText(currentScoreID2);
  initialValueText(scoreID1);
  initialValueText(scoreID2);
  removeClass(player1, `player--winner`);
  removeClass(player2, `player--winner`);
  removeClass(player1, `player--active`);
  removeClass(player2, `player--active`);
  activePlayer = Math.trunc(Math.random() * 2) + 1;

  totalNum1 = 0;
  totalNum2 = 0;
};
atClick(btnNew, newGame);
