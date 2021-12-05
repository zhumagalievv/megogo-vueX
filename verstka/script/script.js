$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        // fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function(){
    $('.widget__sliders').slick({
        slidesToShow: 6,
        adaptiveHeight: true,
        infinite: false,
    });
});