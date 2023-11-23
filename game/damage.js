/*References */

const Move_ORC_BTN = document.getElementById("move-orc-btn");

/* Default values */
let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30;
let orcAlive = true;
let waveCounter = 1;
let waveComplete = false;
let orcDeaths = 0;

let isAtEnd = window.isAtEnd;

let towerLevel = 1;
let orcDamage = 10;
let towerDamage = 20;
let damageInterval;
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");
let checkdamageinterval;

Move_ORC_BTN.addEventListener("click", function () {
  console.log("dps");

  checkdamageinterval = setInterval(function () {
    while (isAtEnd === true) {
      console.log("isatend");
    }
  }, 500);
});

/*

function dps() {
  //per second
  if (parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)) {
    // The orc has reached the tower, so it can do damage.
    towerHealth = towerHealth - orcDamage;
    orcHealth = orcHealth - towerDamage;

    // Update the health bar width
    const healthBar = document.getElementById("health-bar");

    if (healthBar) {
      healthBar.style.width = orcHealth + "%";
    }

    console.log(towerHealth);
    console.log(orcHealth);

    if (towerHealth <= 0) {
      clearInterval(damageInterval);
      //console.log(towerHealth)
      alert("wave " + waveCounter + " lost");
    }

    if (orcHealth <= 0) {
      clearInterval(damageInterval);
      orcAlive = false;

      /* remove picture for orc 
      let elementToRemoveOrc = document.getElementById("orc");
      if (elementToRemoveOrc) {
        const parentElementGame = document.getElementById("game");
        parentElementGame.removeChild(elementToRemoveOrc);
      }
    }

    if (orcAlive === false) {
      alert("wave " + waveCounter + "completed");
      waveComplete = true;
    }

    if (waveComplete === true) {
      /* next wave button
      NEXT_WAVE_BTN.classList.remove("hide");
      orcDeaths = orcDeaths + 1;
      console.log("Orc Deaths" + orcDeaths);
    }
  }
}

NEXT_WAVE_BTN.addEventListener("click", function () {
  function createOrc() {
    const orcContainer = document.getElementById("game");

    // Remove existing orc element
    const existingOrc = document.getElementById("orc");
    if (existingOrc) {
      orcContainer.removeChild(existingOrc);
    }

    const newOrc = document.createElement("div");
    newOrc.id = "orc";
    newOrc.className = "orc";
    newOrc.style.left = "85vw";
    newOrc.style.backgroundImage =
      'url("../game/game images/Orcs/Orc 1 - Unact.png")';

    const newHealthBar = document.createElement("div");
    newHealthBar.className = "health-bar";
    newHealthBar.style.width = orcHealth + "%";
    newHealthBar.style.backgroundColor = "green";

    newOrc.appendChild(newHealthBar);

    orcContainer.appendChild(newOrc);
  }

  // Call the createOrc function
  createOrc();
});

function increaseWave() {
  waveCounter += 1;
  waveComplete = false;
}

damageInterval = setInterval(function () {
  dps();
}, 1000);

window.dps = dps;
window.towerHealth = towerHealth;
window.orcHealth = orcHealth;

/* Take default values and make them larger in external file */
/*
window.orcDamage = orcDamage;
window.towerDamage = towerDamage;
window.newHealthBar = newHealthBar;
*/
