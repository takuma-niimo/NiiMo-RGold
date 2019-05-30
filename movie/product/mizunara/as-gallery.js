$(document).ready(function(){
  $('.slider1').slick({
    // autoplay: true,
    prevArrow: '<img src="./img/slick-left-arrow.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./img/slick-right-arrow.png" class="slide-arrow next-arrow">',
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '50px',
    arrows: true,
    // asNavFor: '.nav1'
  });

  // $('.nav1').slick({
  //   swipeToSlide: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider1',
  //   centerMode: true,
  //   centerPadding: '20%',
  //   infinite: true,
  //   focusOnSelect: true
  // });
});
