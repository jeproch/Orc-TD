//currency's name is Orc coins

import { waveCounter, orcHealth } from "./damage.js";

let balancePar = document.getElementById("balance-p");
let upgradesPage = document.getElementById("upgrades-menu");
let balanceMsg = "Balance: ";

let hpMultiplier = 1;
let dpsMultiplier = 1;

let hpUgradeCounter = 0;
let dpsUpgradeCounter = 0;

let UPGRADES_BTN = document.getElementById("upgrades-btn");
let HP_upgrade_BUTTON = document.getElementById("hp-upgrade-btn");
let DPS_upgrade_BUTTON = document.getElementById("dps-upgrade-btn");

let gamePage = document.getElementById("game");
let BACK_BTN = document.getElementById("back-to-menu-from-upgrades");

let orcCoins = 1000000; //localStorage.getItem("orcCoinsLocal") || waveCounter;

document.addEventListener("DOMContentLoaded", function () {
  upgradesPage.classList.add("hide");
  balancePar.textContent = balanceMsg + orcCoins;
  HP_upgrade_BUTTON.innerText = "HP level: " + hpUgradeCounter;
  DPS_upgrade_BUTTON.innerHTML = "DPS level: " + dpsUpgradeCounter;
});

UPGRADES_BTN.addEventListener("click", function () {
  gamePage.classList.add("hide");
  upgradesPage.classList.remove("hide");
});

BACK_BTN.addEventListener("click", function () {
  gamePage.classList.remove("hide");
  upgradesPage.classList.add("hide");
});

HP_upgrade_BUTTON.addEventListener("click", function () {
  if (orcCoins >= 10) {
    orcCoins -= 10;
    localStorage.setItem("orcCoinsLocal", orcCoins);
    balancePar.textContent = balanceMsg + orcCoins;
    hpUgradeCounter++;
    HP_upgrade_BUTTON.innerText = "HP level: " + hpUgradeCounter;
  } else {
    alert("insufficient currency need 10");
  }
});

DPS_upgrade_BUTTON.addEventListener("click", function () {
  if (orcCoins >= 10) {
    orcCoins -= 10;
    localStorage.setItem("orcCoinsLocal", orcCoins);
    balancePar.textContent = balanceMsg + orcCoins;
    dpsUpgradeCounter++;
    DPS_upgrade_BUTTON.innerHTML = "DPS level: " + dpsUpgradeCounter;
  } else {
    alert("insufficient currency need 10");
  }
});

export { hpMultiplier as hpMultiplier };
export { dpsMultiplier as dpsMultiplier };
