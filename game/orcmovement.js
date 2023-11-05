let orcCanvas = document.querySelector('.orc'); // If you want to use the class
let Move_ORC_BTN = document.getElementById("move-orc-btn")
let orcPath = document.querySelector('.orc-path canvas')

document.addEventListener('DOMContentLoaded', function() {
    //Start with unactive image 
    orcCanvas.style.backgroundImage = 'url("../game/game images/Orcs/Orc 1 - Unact.png")';
})

orcCanvas.style.left = '85vw'
orcPath.style.left = '30vw'

let currentIndex = 0;

function changeImageOrc() {
    //orcCanvas.style.backgroundImage = `url(${images[currentIndex]})`
    currentIndex = currentIndex + 1
    if (currentIndex > 1) {
     currentIndex = 0;
    }

    if (currentIndex === 0) {
        orcCanvas.style.backgroundImage =  `url("../game/game images/Orcs/Orc 1 - Act.png")`
    } else if (currentIndex === 1) {
        orcCanvas.style.backgroundImage = `url("../game/game images/Orcs/Orc 1 - Unact.png")`
    }
    console.log(currentIndex)
}

let moveInterval;

function moveOrc() {
    let currentLeft = parseInt(orcCanvas.style.left);
    let CurrentPath = parseInt(orcPath.style.left)

   // Adjust the left value, for example, increase it by 10vw
   currentLeft -= 0.05;
   
   // Set the updated left value
   orcCanvas.style.left = currentLeft + 'vw';

   if (currentLeft <= CurrentPath) {
       clearInterval(moveInterval)
   }
}

Move_ORC_BTN.addEventListener('click', function() {
   
    changeImageOrc() 
    moveOrc()
 
    moveInterval = setInterval(function() {
       moveOrc()
    }, 500) //moveOrc, 500
 
    setInterval(changeImageOrc, 500);
    console.log(currentIndex)
 })
 
