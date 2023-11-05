let orcCanvas = document.querySelector('.orc'); // If you want to use the class
let Move_ORC_BTN = document.getElementById("move-orc-btn")
let orcPath = document.querySelector('.orc-path canvas')
const images = [
    "../game/game images/Orcs/Orc 1 - Unact.png",
    "../game/game images/Orcs/Orc 1 - Act.png"
]

document.addEventListener('DOMContentLoaded', function() {
    //Start with unactive image 
    orcCanvas.style.backgroundImage = 'url("../game/game images/Orcs/Orc 1 - Unact.png")';
})

orcCanvas.style.left = '85vw'
orcPath.style.left = '30vw'

let currentIndex = 0;

function changeImageOrc() {
    orcCanvas.style.backgroundImage = `url(${images[currentIndex]})`
    currentIndex = currentIndex + 1
    if (currentIndex >= 1) {
     currentIndex = 0;
    }
}

Move_ORC_BTN.addEventListener('click', function() {
   let currentLeft = parseInt(orcCanvas.style.left);
   let CurrentPath = parseInt(orcPath.style.left)

   // Adjust the left value, for example, increase it by 10vw
   currentLeft -= 0.25;
   
   // Set the updated left value
   orcCanvas.style.left = currentLeft + 'vw';

   if (currentLeft <= CurrentPath) {
       alert('oor')
   }

   setInterval(changeImageOrc, 500);
   console.log(currentIndex)
})

export function main() {
    console.log('')
}