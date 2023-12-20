/*References */
const Move_ORC_BTN = document.getElementById("move-orc-btn");
const NEXT_WAVE_BTN = document.getElementById("next-wave-btn");

//Introduce a multiplier to make the orc harder to defeat so that upgrades may be brought into play

let waveCounter = localStorage.getItem("waveCounterLocal") || 0;

//More references
const healthBar = document.getElementById("health-bar");

//Get a reference to the orc
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");
let waveCounterEl = document.getElementById("wave-counter-p");

waveCounterEl.textContent = "Waves Complete: " + waveCounter;

/* 
<div class="wave-counter" id="wave-counter">
        <p id="wave-counter-p">Waves Completeted:</p>
      </div>
*/

let currentLeft = 85;
let currentPath = 22;
let viewWidth = "vw";
orcPath.style.left = currentPath + viewWidth;

/* Default values */
let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30; //These are base values and are bound to change with progress and upgrades
let orcMaxHealth = orcHealth;

let towerLevel = 1;
let orcDamage = 10;
let towerDamage = 20;

let damageInterval;
let listenIsAtEndInt;
let moveInterval;

let waveActive = false;

document.addEventListener("DOMContentLoaded", function () {
  drawHealthBar();
});

Move_ORC_BTN.addEventListener("click", function () {
  //decrease current left to work with the same variable
  waveActive = true;
  isAtEnd();
  startWave();
  currentLeft = 85;

  orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Unact.png")`;
  console.log(startWave());

  removeButtonVisibilityInWave();

  moveInterval = setInterval(function () {
    currentLeft -= 5;
    console.log(currentLeft);

    if (currentLeft <= 22) {
      clearInterval(moveInterval);
    }
  }, 500);
});

function startWave() {
  if (waveActive === true) {
    orcHealth = 30;
    towerHealth = 100;
    drawHealthBar();
  }
}

function isAtEnd() {
  listenIsAtEndInt = setInterval(function () {
    if (currentLeft <= 22) {
      clearInterval(listenIsAtEndInt);
      console.log("ISATEND INTERVAL SATISFIED");
      attackTower();
    }
  }, 500);
}

function drawHealthBar() {
  healthBar.style.width = (orcHealth * 100) / orcMaxHealth + "%";
}

function attackTower() {
  damageInterval = setInterval(function () {
    orcHealth -= towerDamage; //tower damage is what the tower does to opponents
    towerHealth -= orcDamage;
    drawHealthBar();

    if (orcHealth <= 0 || towerHealth <= 0) {
      console.log("The tower or Orc has died");
      console.log("Tower health: " + towerHealth + " Orc health: " + orcHealth);

      waveActive = false;

      if (orcHealth < 0) {
        orcHealth = 0;
        showDeadOrc();
        restoreButtonVisibilityInWave();
        incrementWave();
      } else if (towerHealth < 0) {
        towerHealth = 0;
        console.log("Wave lost");
      } //This if statement helps to catch exceptions so that the health bar is drawn accurrately

      drawHealthBar(); //In some cases the orc does not show a depleted health bar when it's health property
      //is at or lower than 0 so recalling the function helps show that it is indeed dead

      clearInterval(damageInterval);
    }
  }, 500);
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
