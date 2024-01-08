// In orc_development.js
let orcHealthAdvances; // Declare the variable outside the event listener
let orcDamageAdvances;

document.addEventListener("DOMContentLoaded", function () {
  orcHealthAdvances = parseFloat(localStorage.getItem("waveCounterLocal")) || 0;
  orcDamageAdvances = parseFloat(localStorage.getItem("waveCounterLocal")) || 0;
});

export { orcHealthAdvances };
export { orcDamageAdvances };
