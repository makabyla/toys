jQuery(function(){
    initNav();
    initGalleryAction();
});

function initNav(){
    $('.js-nav-open').click(function(e) {
        e.stopPropagation();
        $('body').toggleClass('nav-active');
    });
    $('.js-close-nav').click(function(e) {
        e.stopPropagation();
        $('body').removeClass('nav-active');
    });
}
function initGalleryAction(){
    if($('.gallery').length){
        $('.gallery').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
        });
    }

    if($('.flesh-gallery').length){
        $('.flesh-gallery').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
        });
    }
}