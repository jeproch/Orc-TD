/*References */

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

      /* remove picture for orc */
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
      /* next wave button*/
      orcDeaths = orcDeaths + 1;
      console.log("Orc Deaths" + orcDeaths);
    }
  }
}

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
window.orcDamage = orcDamage;
window.towerDamage = towerDamage;
window.newHealthBar = newHealthBar;