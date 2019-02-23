$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '5px',
    // arrows: false,
    arrows: true
  });
});
