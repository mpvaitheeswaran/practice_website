$(document).ready(function() {

    var $window = $(window);

    $('.parallax-img').each(function() {
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {
        // Y position fo background image 
        var yPos =  ($(window).scrollTop() - $bgobj.position().top) *0.2;
        var bgp = '50% ' + yPos + 'px';
        // Move the background
        $bgobj.css("background-position", bgp);
      });
    });
    });