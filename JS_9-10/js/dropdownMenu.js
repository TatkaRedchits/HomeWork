$(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown(200);
        },
        function(){
            $(this).children('.submenu').slideUp(200);
        }
    );

    $(".main-menu a").mouseenter(function() {
        $(this).animate({
            backgroundColor: "#5d0e11"
        }, 200 );
    });

    $(".main-menu a").mouseleave(function() {
        $(this).animate({
            backgroundColor: "#333"
        }, 200 );
    });

});