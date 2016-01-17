$(document).ready(function () {
     $('.menuTrigger').click( function () {
        $('.panel').toggleClass('isOpen');
       $('.wrapper').toggleClass('pushed');
    });

    $('.openSubPanel').click( function() {
        $(this).next('.subPanel').addClass('isOpen');
    });

    $('.closeSubPanel').click( function() {
        $('.subPanel').removeClass('isOpen');
    });

    $('.closePanel').click( function() {
        $('.panel').removeClass('isOpen');
        $('.wrapper').removeClass('pushed');
    });
 });

$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});
