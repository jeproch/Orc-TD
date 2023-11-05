let START_BTN = document.getElementById('start-btn')
const bodyEl = document.getElementById("body")


document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu')
    mainMenu.classList.remove('hide')

    const gameMenu = document.getElementById('game')
    gameMenu.classList.add('hide')
    bodyEl.classList.remove("black-background")

})


START_BTN.addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu')
    mainMenu.classList.add('hide')

    const gameMenu = document.getElementById('game')
    gameMenu.classList.remove('hide')

    // Set the body background image to the image in the .game container
    document.body.style.backgroundImage = `url('${gameMenu.querySelector('.background-image').src}')`;
    bodyEl.classList.add("black-background")
})


