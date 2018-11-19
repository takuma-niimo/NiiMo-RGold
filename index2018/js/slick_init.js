var $win = $(window);
var w = window.innerWidth;
const breakpointPcTablet = 960;

// Start slideshow when open site
$(document).ready(function(){
    $('.product-slide').slick({
        autoplay: true,
        fade: true
    });

    $('.keyvisual').slick({
        autoplay: true
    });

    // slideshow at ranking
    if (w <= breakpointPcTablet) {
        $('.ranking-slider').slick({
            infinite: false,
            slidesToShow: 2.5,
            slidesToScroll: 1
        });
    }
});

$(function() {
    $win.on('load resize', function() {
        var w2 = window.innerWidth;

        if (w > breakpointPcTablet && w2 <= breakpointPcTablet) {
            // Toggle on slideshow@ranking when window size less than 960px
            $('.ranking-slider').slick({
                infinite: false,
                slidesToShow: 2.5,
                slidesToScroll: 1
            });

        } else if (w <= breakpointPcTablet && w2 > breakpointPcTablet) {
            // Toggle off slideshow@ranking
            $('.ranking-slider').slick('unslick');
        }
        w = w2;
    });
});
