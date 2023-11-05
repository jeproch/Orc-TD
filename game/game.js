let START_BTN = document.getElementById('start-btn')
const bodyEl = document.getElementById("body")
const MENU_BTN = document.getElementById('menu-btn')
const gameMenu = document.getElementById('game')
const menuMenu = document.getElementById('menu')
const MENU_BACK_BTN = document.getElementById('menu-back-btn')

document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu')
    mainMenu.classList.remove('hide')

    gameMenu.classList.add('hide')
    bodyEl.classList.remove("black-background")

    menuMenu.classList.add('hide')

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

MENU_BTN.addEventListener('click', function() {
    console.log('Menu')
    gameMenu.classList.add('hide')
    menuMenu.classList.remove('hide')
})

MENU_BACK_BTN.addEventListener('click', function() {
    gameMenu.classList.remove('hide')
    menuMenu.classList.add('hide')
})


