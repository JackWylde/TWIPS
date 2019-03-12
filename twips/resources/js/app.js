require('./bootstrap');

(function($) {
    "use strict"; // Start of use strict

    $('#button').on('click', function () {
        $('#background-opacity').toggleClass('active');
    });

    $('#background-opacity').on('click', function () {
        $('#background-opacity').removeClass('active');
    });

    $(window).resize(function () {
        if ($(document).width() > 768) {
            $('#background-opacity').removeClass('active');
        }
    });


})(jQuery); // End of use strict
