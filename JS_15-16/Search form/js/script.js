$(function() {

    $("#search-result").submit(function(e) {
        e.preventDefault();

        $('body').after('<div class="results-block"></div>');

        var searchText = $("#search-text").val();

        $.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q="+searchText+"&image_type=photo", function(data){            

            $.each(data.hits, function(i, item) {
                $("<img/>").attr("src", item.webformatURL).appendTo(".results-block");
            });
                
           
        });


    });

});