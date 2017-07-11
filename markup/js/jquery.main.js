jQuery(function(){
    initNav();
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