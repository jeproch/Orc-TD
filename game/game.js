document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu')
    mainMenu.classList.remove('hide')

    const gameMenu = document.getElementById('game')
    gameMenu.classList.add('hide')
})

let START_BTN = document.getElementById('start-btn')

START_BTN.addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu')
    mainMenu.classList.add('hide')

    const gameMenu = document.getElementById('game')
    gameMenu.classList.remove('hide')

    // Set the body background image to the image in the .game container
    document.body.style.backgroundImage = `url('${gameMenu.querySelector('.background-image').src}')`;
})

/*

const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs here
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(changeBackground, 5000); // Change every 5 seconds (5000 milliseconds)

*/