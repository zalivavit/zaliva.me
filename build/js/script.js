$(document).ready(function() {
    $('.slider-items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<img src="img/slick-items/next.svg" class="next-arrow">',
        prevArrow: '<img src="img/slick-items/prev.svg" class="prev-arrow">',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.header-burger').click(function(event) {
        $('.header-burger').toggleClass('active');
        $(".main-nav").toggleClass('visible');
    });

    $('.campaign-tab').click(function() {
        $('.campaign-image').hide();
        $('.campaign-tab').removeClass('active');
        $(this).addClass('active');
        var attr_name = $(this).attr('data-list');
        $('.'+attr_name).show();
    });
})