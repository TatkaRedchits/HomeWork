(function ($) {

    $.fn.slider = function(options) {

        var defaults = {
            imgWidth: 100,
            quantity: 5,
            margin: 25
        };

        var settings = $.extend(defaults, options);

        var carouselWidth = (defaults.imgWidth + defaults.margin) * defaults.quantity - defaults.margin;

        var carouselHider = $('<div class="carousel-hider">').prependTo('.carousel-wrapper');
        carouselHider.css('width', carouselWidth + 'px');

        carouselHider.append(this);

        this.find('.carousel-element').css('marginRight', defaults.margin + 'px');
        this.find('.carousel-img').css('width', defaults.imgWidth + 'px');

        var leftBtn = $('<a href="#" class="carousel-btn-left">‹</a>').insertBefore('.carousel-hider');

        var rightBtn = $('<a href="#" class="carousel-btn-right">›</a>').insertAfter('.carousel-hider');

        var elementsList = this;

        var pixelOffset = defaults.imgWidth + defaults.margin;
        var currentLeftValue = 0;
        var elementsCount = this.find('li').length;
        var minOffset = - ((elementsCount - defaults.quantity) * pixelOffset);
        var maxOffset = 0;

        leftBtn.click(function() {
            if (currentLeftValue != maxOffset) {
                currentLeftValue += pixelOffset;
                elementsList.animate({
                    left: currentLeftValue + 'px'
                }, 500);
            }
        });

        rightBtn.click(function() {
            if (currentLeftValue != minOffset) {
                currentLeftValue -= pixelOffset;
                elementsList.animate({
                    left: currentLeftValue + 'px'
                }, 500);
            }
        });

        return this;
    };

})(jQuery);