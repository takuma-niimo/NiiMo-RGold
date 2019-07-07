jQuery(document).ready(
function() {
    jQuery('#sCSLContainer .sCSLBox01, #sCSLContainer .sCSLBox02').each(
        function(){
            var txt = jQuery(this).html();
            jQuery(this).html(txt.replace(/fitin=90:90/g,"fitin=500:500"));
        }
    );
})
