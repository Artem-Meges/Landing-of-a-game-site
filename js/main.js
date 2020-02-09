$(function(){

    $('.header-slider').slick({
       dots: true,
       arrows: false,
       dotsClass: 'header-dots',
       fade: true,
       speed: 700,
       autoplay: true
    });

    $('.header-inner__search-icon').on('click', function(){
        $('.header-inner__input').slideToggle();
    });

    $('.platforms__slider').slick({
        speed: 700
    });

    $('.soon__slider').slick({
        centerMode: true,
        slidesToShow: 1, 
        variableWidth: true,
        speed: 700
    })

});
