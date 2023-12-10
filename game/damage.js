/*References */
const Move_ORC_BTN = document.getElementById("move-orc-btn");
const NEXT_WAVE_BTN = document.getElementById("next-wave-btn");
const waveCompleteDiv = document.getElementById("wave-complete-div");

const healthBar = document.getElementById("health-bar");

/* Default values */
let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30;
let orcMaxHealth = orcHealth;
let orcAlive = true;
let waveCounter = 0;
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

      healthBar.style.width = (orcHealth * 100) / orcMaxHealth + "%";

      console.log("Orc health:", orcHealth); // Log orc health for debugging

      if (orcHealth <= 0) {
        orcAlive = false;
        console.log("Orc dead");
        clearInterval(atTowerInterval);
        orcCanvas.classList.add("hide");
        NEXT_WAVE_BTN.classList.remove("hide");
        alert("Wave " + waveCounter + " complete");
        waveCounter += 1;
        waveComplete = true;
        orcHealth = 30;
      } else if (orcHealth >= 0) {
        orcAlive = true;
      }

      if (orcAlive === false) {
        console.log(orcAlive);
      } else if (orcAlive === true) {
        atTowerInterval = setInterval(function () {
          console.log(orcAlive);
          if (parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)) {
            orcHealth -= 10;
            towerHealth -= 10;

            console.log("Orc health:", orcHealth); // Log orc health for debugging

            if (orcHealth <= 0) {
              orcAlive = false;
              console.log("Orc dead");
              clearInterval(atTowerInterval);
            }
          }
        }, 500);
      }
    }
  }, 500);
}

function checkWave() {
  checkWaveint = setInterval(function () {
    if (waveComplete === true) {
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
      waveCompleteDiv.classList.remove("hide");
    } else {
      orcCanvas.classList.remove("hide");
      NEXT_WAVE_BTN.classList.add("hide");
      waveCompleteDiv.classList.add("hide");
    }
  }, 500);
}

NEXT_WAVE_BTN.addEventListener("click", function () {
  orcCanvas.classList.remove("hide");
  NEXT_WAVE_BTN.classList.add("hide");
  startMovement = true;
  window.startMovement = startMovement;
  window.resetOrc = resetOrc;
  orcAlive = true;
  orcHealth = 30 + 1 * waveCounter;
  healthBar.style.width = (orcHealth * 100) / orcMaxHealth + "%";
  waveCompleteDiv.classList.add("hide");
});
