"use strict";

let newGame = document.querySelector(".btn--new");
let RollDice = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let tarning = document.querySelector(".dice");
let current = document.querySelectorAll(".current-score");
let allscore = document.querySelectorAll(".score");
let player_1 = document.querySelector(".player--0");
let player_2 = document.querySelector(".player--1");
let message = document.querySelectorAll(".name");
tarning.classList.add("hide");
let c = 0;

newGame.addEventListener("click", function () {
  for (let index = 0; index < allscore.length; index++) {
    allscore[index].textContent = 0;
    current[index].textContent = 0;
  }
  tarning.classList.add("hide");
});

RollDice.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6 + 1);

  switch (dice) {
    case 1:
      current[c].textContent = 0;
      tarning.classList.remove("hide");
      tarning.src = "dice-1.png";
      if (c == 0) {
        c = 1;
        player_1.classList.remove("player--active");
        player_2.classList.add("player--active");
      } else {
        c = 0;
        player_1.classList.add("player--active");
        player_2.classList.remove("player--active");
      }
      break;
    case 2:
      current[c].textContent = Number(current[c].textContent) + dice;
      tarning.classList.remove("hide");
      tarning.src = "dice-2.png";
      break;
    case 3:
      current[c].textContent = Number(current[c].textContent) + dice;
      tarning.classList.remove("hide");
      tarning.src = "dice-3.png";
      break;
    case 4:
      current[c].textContent = Number(current[c].textContent) + dice;
      tarning.classList.remove("hide");
      tarning.src = "dice-4.png";
      break;
    case 5:
      current[c].textContent = Number(current[c].textContent) + dice;
      tarning.classList.remove("hide");
      tarning.src = "dice-5.png";
      break;
    case 6:
      current[c].textContent = Number(current[c].textContent) + dice;
      tarning.classList.remove("hide");
      tarning.src = "dice-6.png";
      break;
  }
});

hold.addEventListener("click", function () {
  allscore[c].textContent =
    Number(allscore[c].textContent) + Number(current[c].textContent);

  current[c].textContent = 0;

  if (allscore[c].textContent >= 100) {
    message[c].textContent = `You won the game!`;
  }

  if (c == 0) {
    c = 1;
    player_1.classList.remove("player--active");
    player_2.classList.add("player--active");
  } else {
    c = 0;
    player_1.classList.add("player--active");
    player_2.classList.remove("player--active");
  }
});
