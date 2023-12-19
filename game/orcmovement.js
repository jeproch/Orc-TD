let orcPath = document.querySelector(".orc-path canvas");
let orcCanvas = document.querySelector(".orc");
let Move_ORC_BTN = document.getElementById("move-orc-btn");
let isAtEnd = false;
let towerCanvas = document.querySelector(".tower");
let moveInterval; // Declare moveInterval in the global scope
let resetOrcInt;
let newInterval;

let currentLeft;
let currentPath;
let viewWidth = "vw";

let currentIndexOrc = 0;

let orcLeft;

document.addEventListener("DOMContentLoaded", function () {
  // Start with inactive images for orc and tower
  orcCanvas.style.backgroundImage =
    'url("../game/assets/Orcs/Orc 1 - Unact.png")';

  towerCanvas.style.backgroundImage = 'url("assets/Castle unactive.png")';

  currentPath = 22;
  currentLeft = 85;

  orcCanvas.style.left = currentLeft + viewWidth;
  orcPath.style.left = currentPath + viewWidth;
});

Move_ORC_BTN.addEventListener("click", function () {
  moveOrc();
  changeImageOrc();
});

function moveOrc() {
  //This function is to just move the orc

  //Let's define an interval to continuously move the orc

  moveInterval = setInterval(function () {
    currentLeft -= 5;
    console.log(currentLeft);
    orcCanvas.style.left = currentLeft + viewWidth;
    orcPath.style.left = currentPath + viewWidth;

    //Let's break out of the infinite loop

    if (currentLeft <= 22) {
      //console.log("Exceeded path");
      clearInterval(moveInterval);
    }
  }, 500);
}

function changeImageOrc() {
  let changeimageinterval = setInterval(function () {
    if (currentIndexOrc === 0) {
      orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Act.png")`;
      currentIndexOrc = 1;
    } else {
      orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Unact.png")`;
      currentIndexOrc = 0;
    }

    if (currentLeft <= 22) {
      //console.log("Exceeded path");
      clearInterval(changeimageinterval);
      orcCanvas.style.backgroundImage = `url("../game/assets/Orcs/Orc 1 - Unact.png")`;
    }
  }, 500);

  orcCanvas.classList.add("smooth-transition");
}

