$(function() {


    $('input[tooltip]').on('focus', function(e) {
        $(this.parentElement).addClass('focus');  
    });

    $('input[tooltip]').on('blur', function(e) {
        $(this.parentElement).removeClass('focus');  
    });

    $('input[tooltip]').each(function() {
        $(this).after('<span class="title">' + $(this).attr('tooltip') + '</span>');
    })

    $('input[tooltip]').on('mouseover', function(e) {
        $(this).next().css('display', 'inline-block');  
    });

    $('input[tooltip]').on('mouseout', function(e) {
        $(this).next().css('display', 'none');  
    });

    $('.btn-help').on('click', function(e) {
        $('.title').css('display', 'inline-block');
    });  
});