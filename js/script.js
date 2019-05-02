/* =====================================
            Preloader
======================================*/

$(window).on('load', function () { //calls when whole side is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});