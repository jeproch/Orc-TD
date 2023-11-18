let numberOfOrcsInWave = 1; // You can adjust this number as needed

/* Default values */
let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30;
let orcAlive = true;
let waveCounter = 1;
let waveComplete = false;
let orcDeaths = 0;

let towerLevel = 1;
let orcDamage = 10;
let towerDamage = 20;
let damageInterval;
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");
let newHealthBar;

function increaseWave() {
  waveCounter += 1;
  waveComplete = false;
}

function dps() {
  //per second
  if (
    orcCanvas &&
    parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)
  ) {
    // The orc has reached the tower, so it can do damage.
    towerHealth = towerHealth - orcDamage;
    orcHealth = orcHealth - towerDamage;

    // Update the health bar width
    const healthBar = document.getElementById("health-bar");

    if (healthBar) {
      healthBar.style.width = orcHealth + "%";
    }

    if (towerHealth <= 0) {
      clearInterval(damageInterval);
      //console.log(towerHealth)
      alert("wave " + waveCounter + " lost");
    }

    if (orcHealth <= 0) {
      clearInterval(damageInterval);
      orcAlive = false;

      /* remove picture for orc */
      let elementToRemoveOrc = document.getElementById("orc");
      if (elementToRemoveOrc) {
        const parentElementGame = document.getElementById("game");
        parentElementGame.removeChild(elementToRemoveOrc);
      }
    }

    if (orcAlive === false) {
      alert("wave " + waveCounter + " completed");
      waveComplete = true;
    }

    if (waveComplete === true) {
      /* create new orcs for the next wave */
      for (let i = 0; i < numberOfOrcsInWave; i++) {
        createOrc();
      }

      orcDeaths = orcDeaths + 1;
    }
  }
}

if (
  orcCanvas &&
  parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)
) {
  dps();
  damageInterval = setInterval(function () {
    dps();
  }, 1000);
}

//if orc reaches tower, then start dps

window.dps = dps;
window.towerHealth = towerHealth;
window.orcHealth = orcHealth;

/* Take default values and make them larger in external file */
window.orcDamage = orcDamage;
window.towerDamage = towerDamage;
window.newHealthBar = newHealthBar;

// Function to create an orc element
function createOrc() {
  const orcContainer = document.getElementById("game");
  const newOrc = document.createElement("div");
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

  // Move the new orc element
  moveOrc(newOrc);
}
