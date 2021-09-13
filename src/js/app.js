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
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
animateValue('awardCount', 0, 350, 2000);