//currency's name is Orc coins

import { waveCounter } from "./damage.js"; //DO NOT REMOVE THIS

let balancePar = document.getElementById("balance-p");
let upgradesPage = document.getElementById("upgrades-menu");
let balanceMsg = "Balance: ";

var hpMultiplier = parseFloat(
  localStorage.getItem("hpUpgradeCounterLocal") || 1
);
var dpsMultiplier = parseFloat(
  localStorage.getItem("dpsUpgradeCounterLocal") || 1
);

let hpUgradeCounter = localStorage.getItem("hpUpgradeCounterLocal") || 0;
let dpsUpgradeCounter = localStorage.getItem("dpsUpgradeCounterLocal") || 0;

let UPGRADES_BTN = document.getElementById("upgrades-btn");
let HP_upgrade_BUTTON = document.getElementById("hp-upgrade-btn");
let DPS_upgrade_BUTTON = document.getElementById("dps-upgrade-btn");

let gamePage = document.getElementById("game");
let BACK_BTN = document.getElementById("back-to-menu-from-upgrades");

let orcCoins = localStorage.getItem("orcCoinsLocal") || waveCounter;

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
    setHpAsLocal();
    hpMultiplier = hpUgradeCounter;
    console.log(hpMultiplier);
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
    setDpsAsLocal();
    DPS_upgrade_BUTTON.innerHTML = "DPS level: " + dpsUpgradeCounter;
  } else {
    alert("insufficient currency need 10");
  }
});

function setHpAsLocal() {
  hpUgradeCounter++;
  localStorage.setItem("hpUpgradeCounterLocal", hpUgradeCounter);
}

function setDpsAsLocal() {
  dpsUpgradeCounter++;
  localStorage.setItem("dpsUpgradeCounterLocal", dpsUpgradeCounter);
}

export { hpMultiplier as hpMultiplier };
export { dpsMultiplier as dpsMultiplier };
