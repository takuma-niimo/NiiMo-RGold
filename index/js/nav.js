$(function() {
    var $nav   = $('#navArea');
    var $btn   = $('.navToggle');
    var $mask  = $('#navMask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
        if ( ! $nav.hasClass( open ) ) {
            $nav.addClass( open );
        } else {
            $nav.removeClass( open );
        }
    });
    // mask close
    $mask.on('click', function() {
        $nav.removeClass( open );
    });
});

