
var swiper = new Swiper('.slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    }
  });