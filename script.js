var menuAberto = false;
function AbrirEFecharMenu() { 
    var naverElement = window.document.querySelector('.naver');
    if (menuAberto) {
        naverElement.style.left = "-100%";
        naverElement.style.transition = "0.5s";
        menuAberto = false;
    } else {
        naverElement.style.left = "0";
        naverElement.style.transition = "1.1s";
        menuAberto = true;
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

