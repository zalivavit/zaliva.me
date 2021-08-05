window.addEventListener('load', function() {
    let headerOpenBtn = document.querySelector('.header__toggle-btn');
    let headerCloseBtn = document.querySelector('.header__nav-btn');
    let headerMenu = document.querySelector('.header__nav');

    headerOpenBtn.addEventListener('click', function() {
        headerMenu.classList.add('active');
    });

    headerCloseBtn.addEventListener('click', function() {
        headerMenu.classList.remove('active');
    });

/*    $('.banner__items').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4000
    });*/

    $('.banner__items').flickity({
        cellAlign: 'center',
        freeScroll: true,
        wrapAround: true,
        fullscreen: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false
    });
});
