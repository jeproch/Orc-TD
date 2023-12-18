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
  checkWave();
  resetOrcFunc();

  waveCompleteDiv.classList.add("hide");
});

function attackTower() {
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
    waveCompleteDiv.classList.remove("hide");
    alert("Wave " + waveCounter + " complete");
    waveCounter += 1;
    waveComplete = true;
    resetOrc = true; // Set resetOrc to true when the orc dies
  } else if (!orcHealth <= 0) {
    resetOrc = false;
  }
}

function moveOrc() {
  console.log(orcAlive);
  if (parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)) {
    attackTower();
  }
}

function startDpsInterval() {
  atTowerInterval = setInterval(moveOrc, 500);
}

// Call this function to start the interval
startDpsInterval();

function checkWave() {
  checkWaveint = setInterval(function () {
    if (waveComplete === true) {
      resetOrcFunc();
      clearInterval(atTowerInterval); // Clear the current interval
      clearInterval(checkWaveint);
    }
  }, 500);
}

function resetOrcFunc() {
  // Show/hide elements based on the resetOrc flag
  if (resetOrc === true) {
    NEXT_WAVE_BTN.classList.remove("hide");
    waveCompleteDiv.classList.remove("hide");
    orcCanvas.classList.add("hide");

    // Reset necessary variables for the next wave
    orcAlive = true;
    orcHealth = 30 + 1 * waveCounter;
    healthBar.style.width = (orcHealth * 100) / orcMaxHealth + "%";
    orcCanvas.style.left = "85vw"; // Reset orc position
  } else {
    orcCanvas.classList.remove("hide");

    waveCompleteDiv.classList.add("hide");
  }
}

NEXT_WAVE_BTN.addEventListener("click", function () {
  // Reset necessary variables for the next wave
  orcAlive = true;
  orcHealth = 30 + 1 * waveCounter;
  healthBar.style.width = (orcHealth * 100) / orcMaxHealth + "%";
  orcCanvas.classList.remove("hide");

  waveComplete = false; // Reset waveComplete to false
  startMovement = true;
  window.startMovement = startMovement;
  window.resetOrc = resetOrc;
  resetOrc = false;

  waveCompleteDiv.classList.add("hide");

  // Start the interval again for the next wave
  startDpsInterval();
});

showOrcHealthInt = setInterval(function () {
  console.log(orcHealth);
  if (orcHealth <= 0) {
    NEXT_WAVE_BTN.classList.remove("hide");
  }
}, 1000);
