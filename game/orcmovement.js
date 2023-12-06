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

document.addEventListener("DOMContentLoaded", function () {
  // Start with inactive images for orc and tower
  orcCanvas.style.backgroundImage =
    'url("../game/game images/Orcs/Orc 1 - Unact.png")';
  towerCanvas.style.backgroundImage = 'url("assets/Castle unactive.png")';

  currentPath = 22;

  currentLeft = 85;
  orcCanvas.style.left = currentLeft + viewWidth;
  orcPath.style.left = currentPath + viewWidth;
});

function checkAfterReset() {
  newInterval = setInterval(function () {
    console.log("check after reset");
    if (window.startMovement === true) {
      moveOrc();

      currentLeft = 85;
      clearInterval(newInterval);
    }
  }, 500);
}

function moveOrc() {
  let moveInterval = setInterval(function () {
    currentLeft -= 5; //change to 1

    console.log(currentLeft);

    orcCanvas.style.left = currentLeft + viewWidth;

    if (currentLeft <= 22 /* 22 is the value of currentpath */) {
      clearInterval(moveInterval);

      isAtEnd = true;
      towerCanvas.style.backgroundImage = 'url("assets/Castle active.png")';

      console.log(isAtEnd);
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
  }, 500);

  orcCanvas.classList.add("smooth-transition");
}

Move_ORC_BTN.addEventListener("click", function () {
  moveOrc();
  changeImageOrc();
  checkAfterReset();

  console.log(orcPath.style.left);
});

let currentIndexOrc = 0;

window.isAtEnd = isAtEnd;
