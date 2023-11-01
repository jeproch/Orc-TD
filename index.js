//Check if user is on mobile

document.addEventListener('DOMContentLoaded', function() {
    var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (isMobile === true) {
        window.location.href = './mobileFail/mobile.html'
    } else {
      alert('This website uses cookies to store data');
    }
})
