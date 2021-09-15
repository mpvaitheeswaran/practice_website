 // For scrolling animation
 $(document).ready(function(){
    $('.fadeInLeft').viewportChecker({
      classToAdd: 'animate__animated animate__fadeInLeft animate__fast',
      classToRemove : 'invisible',
      offset: 100, 
      repeat: false
    });
    $('.fadeInRight').viewportChecker({
        classToAdd: 'animate__animated animate__fadeInRight animate__fast',
        classToRemove : 'invisible',
        offset: 100, 
        repeat: false
      });
    $('.fadeInDown').viewportChecker({
        classToAdd: 'animate__animated animate__fadeInDown animate__fast',
        classToRemove : 'invisible',
        offset: 100, 
        repeat: false
    });
    $('.zoomIn').viewportChecker({
        classToAdd: 'animate__animated animate__zoomIn animate__fast',
        classToRemove : 'invisible',
        offset: 100, 
        repeat: false
    });
    $('.backInDown').viewportChecker({
        classToAdd: 'animate__animated animate__backInDown animate__fast',
        classToRemove : 'invisible',
        offset: 100, 
        repeat: false
    });
    $('.fadeInUp').viewportChecker({
        classToAdd: 'animate__animated animate__fadeInUp animate__fast',
        classToRemove : 'invisible',
        offset: 100, 
        repeat: false
    });
    $('.count').viewportChecker({
        classToAdd: 'animate__animated animate__fadeInUp animate__fast',
        classToRemove : 'invisible',
        offset: 100, 
        repeat: false,
        callbackFunction: function(elem, action){
            animateValue('teachersCount', 0, 18, 2000);
            animateValue('kidsCount', 0, 351, 2000);
            animateValue('parentsCount', 0, 564, 2000);
            animateValue('awardCount', 0, 300, 2000);
        }
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