//currency's name is Orc coins

import { waveCounter } from "./damage.js";
import { orcHealth } from "./damage.js";

let balancePar = document.getElementById("balance-p");
let upgradesPage = document.getElementById("upgrades-menu");

let UPGRADES_BTN = document.getElementById("upgrades-btn");
let gamePage = document.getElementById("game");
let BACK_BTN = document.getElementById("back-to-menu-from-upgrades");

let orcCoins = waveCounter;

document.addEventListener("DOMContentLoaded", function () {
  upgradesPage.classList.add("hide");
  balancePar.textContent = "Balance: " + orcCoins;
});

UPGRADES_BTN.addEventListener("click", function () {
  gamePage.classList.add("hide");
  upgradesPage.classList.remove("hide");
});

BACK_BTN.addEventListener("click", function () {
  gamePage.classList.remove("hide");
  upgradesPage.classList.add("hide");
});
