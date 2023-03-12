"use strict";

let currentPlayer = 0;
let hasEndedGame = false;
let dice = document.querySelector(".dice");

function RollDice() {
  if (!hasEndedGame) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${randomNumber}.png`;

    if (randomNumber == 1) {
      ChangePlayer();
    } else {
      document.querySelector(`#current--${currentPlayer}`).innerHTML =
        parseInt(
          document.querySelector(`#current--${currentPlayer}`).innerHTML
        ) + randomNumber;
    }
  }
}

function ChangePlayer() {
  document.querySelector(`#current--${currentPlayer}`).innerHTML = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");

  if (currentPlayer == 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }

  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--active");
}

function Winning() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--winner");
  hasEndedGame = true;
}

function HoldPoints() {
  if (!hasEndedGame) {
    document.querySelector(`#score--${currentPlayer}`).innerHTML =
      parseInt(document.querySelector(`#score--${currentPlayer}`).innerHTML) +
      parseInt(document.querySelector(`#current--${currentPlayer}`).innerHTML);

    if (
      parseInt(document.querySelector(`#score--${currentPlayer}`).innerHTML) >=
      100
    ) {
      Winning();
    } else {
      ChangePlayer();
    }
  }
}

function NewGame() {
  document.querySelector(`#score--0`).innerHTML = 0;
  document.querySelector(`#current--0`).innerHTML = 0;
  document.querySelector(`#score--1`).innerHTML = 0;
  document.querySelector(`#current--1`).innerHTML = 0;
  currentPlayer = 0;
  hasEndedGame = false;
}
