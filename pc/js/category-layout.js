jQuery(document).ready(
function() {
    jQuery('table').each(
        function(){
            var txt = jQuery(this).html();
            jQuery(this).html(txt.replace(/fitin=128:128/g,"fitin=250:250"));
        }
    );
})
