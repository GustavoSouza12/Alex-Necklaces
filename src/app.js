jQuery(function($) {
    $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 400) {
      $('.slogan').addClass('redColor');
    } else if ($(this).scrollTop() <= 399) {
      $('.slogan').removeClass('redColor' );
    }
})})
 