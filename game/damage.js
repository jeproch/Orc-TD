let towerHealth = 100; // For starting out, upgrades will increase this health
let orcHealth = 30;
let orcAlive = true;
let waveCounter = 1;

let towerLevel = 1;
let orcDamage = 10;
let towerDamage = 20;
let damageInterval;
let orcCanvas = document.querySelector('.orc');
let orcPath = document.querySelector('.orc-path canvas');

function dps() { //per second
    if (parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)) {
        // The orc has reached the tower, so it can do damage.
        towerHealth = towerHealth - orcDamage;
        orcHealth = orcHealth - towerDamage;

        // Update the health bar width
        const healthBar = document.getElementById("health-bar");
        healthBar.style.width = orcHealth + "%";

        console.log(towerHealth)
        console.log(orcHealth)

        if (towerHealth <= 0) {
            console.log('dead');
            clearInterval(damageInterval);
            //console.log(towerHealth)
        }

        
        if (orcHealth <= 0 ) {
            console.log('orc dead')
            clearInterval(damageInterval)
            orcAlive = false;
            console.log('remove picture')

            /* remove picture for orc */ 
            let elementToRemoveOrc = document.getElementById('orc')
            if (elementToRemoveOrc) {
                const parentElementGame = document.getElementById('game')
                parentElementGame.removeChild(elementToRemoveOrc)
            }
        }  
        
        if (orcAlive === false) {
            alert('wave 1 completed')
        }
    }
}

damageInterval = setInterval(function() {
    dps();
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    console.log(dps)
})

window.dps = dps;
window.towerHealth = towerHealth;