/*References */
const Move_ORC_BTN = document.getElementById("move-orc-btn");
const NEXT_WAVE_BTN = document.getElementById("next-wave-btn");
const waveCompleteDiv = document.getElementById("wave-complete-div");

const healthBar = document.getElementById("health-bar");

//Get a reference to the orc
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");

let currentLeft = 85;
let currentPath = 22;
let viewWidth = "vw";
orcPath.style.left = currentPath + viewWidth;

/* Default values */
let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30;
let orcMaxHealth = orcHealth;

let towerLevel = 1;
let orcDamage = 10;
let towerDamage = 20;

let damageInterval;
let listenIsAtEndInt;
let moveInterval;

document.addEventListener("DOMContentLoaded", function () {
  drawHealthBar();
  console.log("dps");
});

Move_ORC_BTN.addEventListener("click", function () {
  //decrease current left to work with the same variable
  isAtEnd();

  moveInterval = setInterval(function () {
    currentLeft -= 5;
  }, 500);
});

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
    orcHealth -= 10;
    towerHealth -= 10;
    drawHealthBar();

    if (orcHealth <= 0 || towerHealth <= 0) {
      console.log("The tower or Orc has died");
      console.log("Tower health: " + towerHealth + " Orc health: " + orcHealth);

      clearInterval(damageInterval);
    }
  }, 500);
}
