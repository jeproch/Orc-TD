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
let orcCanvas = document.querySelector(".orc");
let orcPath = document.querySelector(".orc-path canvas");
let newHealthBar;

function increaseWave() {
  waveCounter += 1;
  waveComplete = false;
}

let checkEndInterval = setInterval(function () {
  if (isAtEnd === true) {
    let damageInterval = setInterval(function () {
      if (isAtEnd === true) {
        dps();
      }

      console.log("damage");
    }, 500);
  }

  function dps() {
    //per second
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
      console.log("orc dead");
    }
    if (orcAlive === false) {
      alert("wave " + waveCounter + " completed");
      waveComplete = true;
    }
  }
}, 100);

document.addEventListener("DOMContentLoaded", function () {
  console.log("dps file");
});
