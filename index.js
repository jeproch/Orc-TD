//Check if user is on mobile

document.addEventListener('DOMContentLoaded', function() {
    var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (isMobile === true) {
        window.location.href = 'mobile.html'
    } else {
      console.log('is pc')
    }
})

//Start the game

function startButton() {
  console.log('start')
  window.location.href = "./game/game.html" 
}
