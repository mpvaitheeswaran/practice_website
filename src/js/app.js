$(document).ready(function(){
    $(".owl-carousel-header").owlCarousel({
        navigation : false, // Show next and prev buttons
        animateOut: 'fadeOut',
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true
    });
    $(".owl-carousel-feedback").owlCarousel({
        items : 1, 
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true
    });
   
  });