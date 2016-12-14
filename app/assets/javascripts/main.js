;(function(){
  // 'use strict';

  var owlCrouselFeatureSlide = function() {
    $('#product-screenshots .owl-carousel-center').owlCarousel({
      center: true,
      items:2,
      loop:false,
      margin:10,
      nav: true,
      dots: true,
      autoHeight: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:4
        },
        1000:{
          items:4
        }
      }
    });
    $('body').on('click', '#product-screenshots .owl-carousel-center .owl-item', function(){
      var $this = $(this),
      index = $this.index();
      $('#product-screenshots .owl-carousel-center .owl-dots > div').eq(index).trigger('click');
    });
  };



// Window Scroll
  var windowScroll = function() {
    $(window).scroll(function(event){
      var navigation = $('#navigation'),
      scrlTop = $(this).scrollTop();
      if ( scrlTop > 500 && scrlTop <= 2000 ) {
        navigation.addClass('navbar-fixed-top');
      } else if ( scrlTop <= 500) {
        if ( navigation.hasClass('navbar-fixed-top') ) {
          navigation.addClass('navbar-fixed-top');
          setTimeout(function(){
            navigation.removeClass('navbar-fixed-top');
          }, 100 );
        }
      }
    });
  };

  var navActive = function() {

    $('#navigation > ul').on('click', 'li', function(){
      $('#navigation > ul li').each(function(index, el) {
        $(el).removeClass('active')
      })
      $(this).addClass('active');
    })
  };


  $(function(){
    owlCrouselFeatureSlide();
    windowScroll();
    navActive();
  });

}())
