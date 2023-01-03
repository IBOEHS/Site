(function($){
  "user strict";

  $(document).on('ready',function() {
    background();
  });

  $(window).on("load", function() {
    //preloader
    $(".preload").delay(300).animate({
      "opacity" : "0"
      }, 300, function() {
      $(".preload").css("display","none");
    });
    // init Isotope
    var $grid = $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
    });
    $grid.imagesLoaded().progress( function() {
      $grid.masonry();
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.filter-button-group').on( 'click', 'button', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });

  });

  // Product-slider 
  // sponsor-slider 
  $('.sponsor-slider').owlCarousel({
   loop:true,
   margin: 0,
   smartSpeed: 1000,
   dots: false,
   nav: true,
   navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
   responsiveClass:true,
   responsive:{
     0:{
       items: 1,
       autoplay: true
     },
     575:{
      items: 2,
      autoplay: true
      },
     992:{
       items:3,
       autoplay: true
       
     }
   }
 });



})(jQuery);