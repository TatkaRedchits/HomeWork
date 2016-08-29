$(function() {

    $('.tab-link').on('click', function(e) {
        e.preventDefault();
        $('.tab-link').removeClass('focus');
        $(this).addClass('focus');
        $('.tab').css('display', 'none');
        $($(this).attr('href')).css('display', 'block');
    });

});