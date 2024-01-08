import { dpsMultiplier, hpMultiplier } from "./currency.js";
import { orcHealthAdvances, orcDamageAdvances } from "./orc_development.js";

/*References */
const Move_ORC_BTN = document.getElementById("move-orc-btn");

//Introduce a multiplier to make the orc harder to defeat so that upgrades may be brought into play

var waveCounter = localStorage.getItem("waveCounterLocal") || 0;

//More references
const healthBar = document.getElementById("health-bar");
const towerHealthBar = document.getElementById("tower-health-bar");
let towerSpanHealthPerc = document.getElementById("health-text");

//Get a reference to the orc
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");
let waveCounterEl = document.getElementById("wave-counter-p");

waveCounterEl.textContent = "Waves Complete: " + waveCounter;

let currentLeft = 85;
let currentPath = 22;
let viewWidth = "vw";
orcPath.style.left = currentPath + viewWidth;

/* Default values */
let towerHealth = 100 + hpMultiplier; // For starting out, upgrades will increase this health
let towerMaxHealth = towerHealth;

let towerDamage = 20 + dpsMultiplier;

let damageInterval;
let listenIsAtEndInt;
let moveInterval;

let waveActive = false;

let orcHealth;
let orcMaxHealth;
let orcDamage;

document.addEventListener("DOMContentLoaded", function () {
  drawOrcHealthBar();
  drawTowerHealthBar();
  console.log(orcHealthAdvances);

  // Perform other operations
  let orcHealth = 30 + orcHealthAdvances;
  if (isNaN(orcHealth)) {
    orcHealth = 30 + orcHealthAdvances;
  }
  let orcMaxHealth = orcHealth;

  let orcDamage = 10 + orcDamageAdvances;

  if (isNaN(orcDamage)) {
    orcDamage = 10 + orcDamageAdvances;
  }

  // Log orcHealth after the calculation
  console.log(orcHealth);
  //Log orcDamage after the calculation
  console.log(orcDamage);
});

Move_ORC_BTN.addEventListener("click", function () {
  //decrease current left to work with the same variable
  waveActive = true;
  isAtEnd();
  startWave();
  drawOrcHealthBar();
  currentLeft = 85;
  console.log(towerHealth);
  towerMaxHealth = towerHealth;

  orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Unact.png")`;

  removeButtonVisibilityInWave();

  moveInterval = setInterval(function () {
    currentLeft -= 5;
    console.log(currentLeft);

    if (currentLeft <= 22) {
      clearInterval(moveInterval);
    }
  }, 500);

  towerHealthPercentage();
});

function startWave() {
  if (waveActive === true) {
    // Update orcHealth indirectly, for example, by modifying properties
    // inside the orcHealth object (if it's an object)
    orcHealth = 30 + orcHealthAdvances;
    orcMaxHealth = orcHealth;
    console.log(orcMaxHealth);
    towerMaxHealth = 100 + hpMultiplier * 2; // Update towerMaxHealth
    towerHealth = towerMaxHealth; // Reset towerHealth to full
    drawOrcHealthBar();
    drawTowerHealthBar();
  }
}

function isAtEnd() {
  listenIsAtEndInt = setInterval(function () {
    if (currentLeft <= 22) {
      clearInterval(listenIsAtEndInt);
      attackTower();
    }
  }, 500);
}

function drawOrcHealthBar() {
  healthBar.style.width = (orcHealth * 100) / orcMaxHealth + "%";
}

function drawTowerHealthBar() {
  let percentage = Math.floor((towerHealth / towerMaxHealth) * 100);
  towerHealthBar.style.width = percentage + "%";
}

function attackTower() {
  console.log("dpsMultiplier in attackTower:", dpsMultiplier);
  towerDamage = 20 + dpsMultiplier;
  damageInterval = setInterval(function () {
    orcDamage = 10 + orcDamageAdvances;
    orcHealth -= towerDamage; //tower damage is what the tower does to opponents
    towerHealth -= orcDamage;
    console.log("this is the orc damage inside the attack function", orcDamage);
    drawOrcHealthBar();
    drawTowerHealthBar();
    towerHealthPercentage();

    if (orcHealth <= 0 || towerHealth <= 0) {
      console.log("The tower or Orc has died");
      console.log("Tower health: " + towerHealth + " Orc health: " + orcHealth);

      waveActive = false;

      if (orcHealth <= 0) {
        orcIsDead();
      } else if (towerHealth < 0) {
        towerIsDead();
      } //This if statement helps to catch exceptions so that the health bar is drawn accurrately

      drawOrcHealthBar(); //In some cases the orc does not show a depleted health bar when it's health property
      //is at or lower than 0 so recalling the function helps show that it is indeed dead
      drawTowerHealthBar();

      clearInterval(damageInterval);
    }
  }, 500);
}

function orcIsDead() {
  orcHealth = 0;
  clearInterval(damageInterval);
  showDeadOrc();
  restoreButtonVisibilityInWave();
  incrementWave();
}

function towerIsDead() {
  towerHealth = 0;
  console.log("Wave lost");
  clearInterval(damageInterval);
  restoreButtonVisibilityInWave();
}

function showDeadOrc() {
  orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Dead.png")`;
  //orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Act.png")`;
}

function incrementWave() {
  waveCounter++;
  console.log("Wave counter: " + waveCounter);
  waveCounterEl.textContent = "Waves Complete: " + waveCounter;
  //localStorage.setItem("myKey", myVariable);
  localStorage.setItem("waveCounterLocal", waveCounter);
}

function removeButtonVisibilityInWave() {
  Move_ORC_BTN.classList.add("hide");
}

function restoreButtonVisibilityInWave() {
  Move_ORC_BTN.classList.remove("hide");
}

function towerHealthPercentage() {
  //this will edit the span element in the html's innertext/textcontent
  let percentage = Math.floor((towerHealth / towerMaxHealth) * 100);
  towerSpanHealthPerc.textContent = "Health: " + percentage + "%";

  if (percentage < 0) {
    percentage = 0;
    towerSpanHealthPerc.textContent = "Health: " + percentage + "%";
  }
}

export { waveCounter as waveCounter };
