const UPGRADES_BTN = document.getElementById("upgrades-btn");
const upgrades_menu = document.getElementById("upgrades-menu");
const BACK_FROM_UPGRADES_BTN = document.getElementById(
  "back-to-menu-from-upgrades"
);

const gameMenu = document.getElementById("game");

//Get references to the actual section being displayed

UPGRADES_BTN.addEventListener("click", function () {
  console.log(upgrades_menu);
  gameMenu.classList.add("hide");
  upgrades_menu.classList.remove("hide");
});

BACK_FROM_UPGRADES_BTN.addEventListener("click", function () {
  gameMenu.classList.remove("hide");
  upgrades_menu.classList.add("hide");
});
