$(function(){
  var pagetop = $('#page_top');
  pagetop.hide();

  // Show the button when 100px scroll down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  // Scroll up to Top
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
