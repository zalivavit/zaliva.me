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

    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000
    });
});
