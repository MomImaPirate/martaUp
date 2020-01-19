$(function(){
    $('.header-slider').slick({
        dots: true,
        dotsClass: 'header-dots',
        infinite: true,
        arrows: false,
        vertical: true,
        autoplay: 1500,
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});