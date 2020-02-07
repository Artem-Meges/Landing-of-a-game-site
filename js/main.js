$(function(){

    $('.header-slider').slick({
       dots: true,
       arrows: false,
       dotsClass: 'header-dots',
    });

    $('.header-inner__search-icon').on('click', function(){
        $('.header-inner__input').slideToggle();
    })

    
});