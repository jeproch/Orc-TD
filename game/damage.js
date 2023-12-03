/*References */

const Move_ORC_BTN = document.getElementById("move-orc-btn");
const NEXT_WAVE_BTN = document.getElementById("next-wave-btn");

const healthBar = document.getElementById("health-bar");

/* Default values */
let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30;
let orcAlive = true;
let waveCounter = 1;
let waveComplete = false;
let resetOrc = false;
let startMovement = false;
let orcDeaths = 0;

let isAtEnd = window.isAtEnd;

let towerLevel = 1;
let orcDamage = 10;
let towerDamage = 20;
let damageInterval;
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");

let checkdamageinterval;
let atTowerInterval;
let checkWaveint;
let resetOrcInt;

Move_ORC_BTN.addEventListener("click", function () {
  dps();
  checkWave();
  resetOrcFunc();
});

function dps() {
  atTowerInterval = setInterval(function () {
    if (parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)) {
      orcHealth -= 10;
      towerHealth -= 10;
      console.log(
        "Orc health" + orcHealth + "-" + "tower health" + towerHealth
      );

      healthBar.style.width = orcHealth + "%";

      if (orcHealth <= 0) {
        orcAlive = false;
      }

      if (orcAlive === false) {
        clearInterval(atTowerInterval);
        console.log("orc is dead" + " Health: " + orcHealth);
        orcCanvas.classList.add("hide");

        alert("Wave " + waveCounter + " complete");
        waveCounter = waveCounter + 1;
        waveComplete = true;
      }
    }
  }, 500);
}

function checkWave() {
  checkWaveint = setInterval(function () {
    console.log(resetOrc);

    if (waveComplete === true) {
      console.log("wave complete");
      resetOrc = true;
      waveComplete = false;
      clearInterval(checkWaveint);
    }
  }, 500);
}

function resetOrcFunc() {
  resetOrcInt = setInterval(function () {
    if (resetOrc === true) {
      orcCanvas.classList.add("hide");
      clearInterval(resetOrcInt);
      orcCanvas.style.left = "85vw";
      NEXT_WAVE_BTN.classList.remove("hide");
    }
  }, 500);
}

NEXT_WAVE_BTN.addEventListener("click", function () {
  orcCanvas.classList.remove("hide");
  NEXT_WAVE_BTN.classList.add("hide");
  startMovement = true;
  window.startMovement = startMovement;
  window.resetOrc = resetOrc;
  console.log(waveCounter);
  waveCounter++;
  orcHealth = 30 + 1 * waveCounter;
  healthBar.style.width = orcHealth + "%";
});
