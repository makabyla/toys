jQuery(function(){
    initGalleryAction();
});

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