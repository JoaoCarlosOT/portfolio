var menuAberto = false;
function AbrirEFecharMenu() { 
    var naverElement = window.document.querySelector('.naver');
    if (menuAberto) {
        naverElement.style.left = "-100%";
        naverElement.style.transition = ".2s";
        menuAberto = false;
    } else {
        naverElement.style.left = "0";
        naverElement.style.transition = ".2s";
        menuAberto = true;
    }
}

window.addEventListener('scroll', function() {
    var button = document.getElementById('butao-main');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        button.style.visibility = "visible";
        button.style.transition = ".4s";
    } else {
        button.style.visibility = "hidden";
        button.style.transition = ".4s";
    }
});




