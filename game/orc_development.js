import { waveCounter } from "./damage.js";


const Move_ORC_BTN = document.getElementById("move-orc-btn");

// In orc_development.js
let orcHealthAdvances; // Declare the variable outside the event listener
let orcDamageAdvances;

document.addEventListener("DOMContentLoaded", function () {
  orcHealthAdvances = parseFloat(localStorage.getItem("waveCounterLocal")) || 0;
  orcDamageAdvances = parseFloat(localStorage.getItem("waveCounterLocal")) || 0;
});

Move_ORC_BTN.addEventListener("click", function () {
  if (orcDamageAdvances < waveCounter) {
    orcDamageAdvances = waveCounter;
  }

  if (orcHealthAdvances < waveCounter) {
    orcHealthAdvances = waveCounter;
  }
});

export { orcHealthAdvances };
export { orcDamageAdvances };
