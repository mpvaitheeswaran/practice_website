$(document).ready(function() {

    var $window = $(window);

    $('.parallax-img').each(function() {
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / 10);
        // Put together the final background position (bgp)
        var bgp = '50% ' + yPos + 'px';
        // Move the background
        $bgobj.css("background-position", bgp);
        console.log($bgobj.data('speed'))
      });
    });
    });