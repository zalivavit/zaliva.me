window.addEventListener('load', function () {
    let headerOpenBtn = document.querySelector('.header__toggle-btn');
    let headerCloseBtn = document.querySelector('.header__nav-btn');
    let headerMenu = document.querySelector('.header__nav');

    headerOpenBtn.addEventListener('click', function () {
        headerMenu.classList.add('active');
    });

    headerCloseBtn.addEventListener('click', function () {
        headerMenu.classList.remove('active');
    });
});

new Swiper('.home-banner__wrapper', {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }
});