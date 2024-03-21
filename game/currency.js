//currency's name is Orc coins

let waveCounter = localStorage.getItem("waveCounterLocal");
let balancePar = document.getElementById("balance-p");
let balanceMsg = "Balance: ";

var hpMultiplier = parseFloat(
  localStorage.getItem("hpUpgradeCounterLocal") || 1
);
var dpsMultiplier = parseFloat(
  localStorage.getItem("dpsUpgradeCounterLocal") || 1
);

if (isNaN(dpsMultiplier)) {
  // Handle the case where the value is not a valid number
  console.error(
    "Invalid value for dpsUpgradeCounterLocal:",
    localStorage.getItem("dpsUpgradeCounterLocal")
  );
  dpsMultiplier = 1; // Set a default value or take appropriate action
}

let hpUgradeCounter = localStorage.getItem("hpUpgradeCounterLocal") || 0;
let dpsUpgradeCounter = localStorage.getItem("dpsUpgradeCounterLocal") || 0;

let UPGRADES_BTN = document.getElementById("upgrades-btn");
let HP_upgrade_BUTTON = document.getElementById("hp-upgrade-btn");
let DPS_upgrade_BUTTON = document.getElementById("dps-upgrade-btn");

let errorDiv = document.getElementById("errors-div");
let errorParagraph = document.getElementById("error-display");

let gamePage = document.getElementById("game");
let upgradesPage = document.getElementById("upgrades-menu");
let BACK_BTN = document.getElementById("back-to-menu-from-upgrades");

let orcCoins =
  parseInt(localStorage.getItem("orcCoinsLocal"));

function setLocalStorage() {
  localStorage.setItem("orcCoinsLocal", localStorage.getItem("orcCoinsLocal"));
  balancePar.textContent = balanceMsg + localStorage.getItem("orcCoinsLocal");
}

document.addEventListener("DOMContentLoaded", function () {
  upgradesPage.classList.add("hide");
  errorDiv.classList.add("hide");
  setLocalStorage();
  localStorage.setItem("orcCoinsLocal", localStorage.getItem("orcCoinsLocal"));
  if (localStorage.getItem("orcCoinsLocal") === 0) {
    balancePar.textContent = balanceMsg + "0";
  }
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
  errorDiv.classList.add("hide");
});

HP_upgrade_BUTTON.addEventListener("click", function () {
  //console.log("Fixed variable" + orcCoins); *DISPLAYS 35 When it should be 30*
  //console.log("Reference to variable" + localStorage.getItem("orcCoinsLocal")); *Displays 30 correctly*
  if (localStorage.getItem("orcCoinsLocal") >= 10) {
    orcCoins = localStorage.getItem("orcCoinsLocal") - 10;
    localStorage.setItem("orcCoinsLocal", orcCoins);
    console.log(orcCoins)

    balancePar.textContent = balanceMsg + localStorage.getItem("orcCoinsLocal"); //see what is the value here
    console.log("In the hp upgrade true event listener " + orcCoins);
    setHpAsLocal();
    setLocalStorage()
    hpMultiplier = hpUgradeCounter;
    HP_upgrade_BUTTON.innerText = "HP level: " + hpUgradeCounter;
  } else {
    //alert("insufficient currency need 10" + "you have" + orcCoins);
    //console.log(orcCoins);
    errorDiv.classList.remove("hide");
    errorParagraph.textContent =
      "Insufficient currency. You need 10 and you have " +
      localStorage.getItem("orcCoinsLocal");
  }
});

DPS_upgrade_BUTTON.addEventListener("click", function () {
  if (localStorage.getItem("orcCoinsLocal") >= 10) {
    //orcCoins -= 10;
    orcCoins = localStorage.getItem("orcCoinsLocal") - 10;
    localStorage.setItem("orcCoinsLocal", orcCoins);
    console.log(orcCoins)

    balancePar.textContent = balanceMsg + localStorage.getItem("orcCoinsLocal");
    setDpsAsLocal();
    setLocalStorage()
    DPS_upgrade_BUTTON.innerHTML = "DPS level: " + dpsUpgradeCounter;
  } else {
    //alert("insufficient currency need 10" + "you have" + orcCoins);
    //console.log(orcCoins);
    errorDiv.classList.remove("hide");
    errorParagraph.textContent =
      "Insufficient currency. You need 10 and you have " +
      localStorage.getItem("orcCoinsLocal");
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
