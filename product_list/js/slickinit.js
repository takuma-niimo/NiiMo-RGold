$(document).ready(function(){
  $('.slider1').slick({
    autoplay: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '12%',
    arrows: false,
    asNavFor: '.nav1'
  });

  $('.nav1').slick({
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider1',
    centerMode: true,
    centerPadding: '20%',
    infinite: true,
    focusOnSelect: true
  });

  $('.slider2').slick({
    autoplay: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '12%',
    arrows: false,
    asNavFor: '.nav2'
  });

  $('.nav2').slick({
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider2',
    centerMode: true,
    centerPadding: '20%',
    infinite: true,
    focusOnSelect: true
  });
});
