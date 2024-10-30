(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();
  
  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();
  // $('.owl-prev::before').hover(function () {
  //   $('.owl-prev::before').toggleClass('owl-prev--active')
  // })
  $('.clients__slider').slick({
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    arrows: false,
    appendArrows: $('.clients__slider-arrows'),
    // responsive:
    //   [
    //     {
    //       breakpoint: 1650,
    //       settings: {
    //         slidesToShow: 1
    //       }
    //     },
    //     {
    //       breakpoint: 1050,
    //       settings: {
    //         slidesToShow: 1,
    //         draggable: true
    //       }
    //     },
    //     {
    //       breakpoint: 750,
    //       settings: {
    //         slidesToShow: 1
    //       }
    //     }
    //   ]

  })
  $('.clients__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.clients__slider').slick('slickPrev')
  })
  $('.clients__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.clients__slider').slick('slickNext')
  })
})(jQuery);
