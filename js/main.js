var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        // when window width is >= 320px
        540: {
            slidesPerView: 2,
        },
}});

let menuButton = document.querySelector('.menu-button');
let menu  = document.querySelector('.header');
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});