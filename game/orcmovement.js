let orcCanvas = document.querySelector('.orc canvas'); // If you want to use the class
let Move_ORC_BTN = document.getElementById("move-orc-btn")
let orcPath = document.querySelector('.orc-path canvas')

orcCanvas.style.left = '85vw'
orcPath.style.left = '30vw'

Move_ORC_BTN.addEventListener('click', function() {
    console.log(orcCanvas.style.left)

    let currentLeft = parseInt(orcCanvas.style.left);
    let CurrentPath = parseInt(orcPath.style.left)

    // Adjust the left value, for example, increase it by 10vw
    currentLeft -= 0.25;
    
    // Set the updated left value
    orcCanvas.style.left = currentLeft + 'vw';

    if (currentLeft <= CurrentPath) {
        alert('oor')
    }
})