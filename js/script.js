// Navbar fade effect
// Set the initial opacity of the navbar to 0
$('#navbar').css({
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out'
  });

// Add an event listener to the window object for the scroll event
$(window).on('scroll', function() {
  // Calculate the distance from the top of the page to the current scroll position
  const distanceFromTop = $(window).scrollTop();

  // Get the height of the viewport
  const viewportHeight = $(window).height();

  // Calculate the height at which the navbar should start fading in and out
  const fadeHeight = 50;

  // Calculate the opacity of the navbar based on the current scroll position
  let opacity = 0;
  if (distanceFromTop > fadeHeight) {
    opacity = (distanceFromTop - fadeHeight) / fadeHeight;
    if (opacity > 1) {
      opacity = 1;
    }
  }
  
  // Set the opacity of the navbar
  $('#navbar').css('opacity', opacity);
});

// Header fade effect
$(window).scroll(function() {
    $('.wrapper').each(function() {
      // Get the position of the element on the page
      var imagePos = $(this).offset().top;
  
      // Get the height of the viewport
      var windowHeight = $(window).height();
  
      // Get the current position of the top of the viewport
      var topOfWindow = $(window).scrollTop();
  
      // Define the distance from the top of the viewport at which the fade-in effect should trigger
      var triggerPoint = 150;
  
      // If the top of the element is within the distance from the top of the viewport to trigger the effect
      if (imagePos < topOfWindow + windowHeight - triggerPoint) {
        $(this).fadeIn(1000);
      } else {
        $(this).fadeOut(1000);
      }
    });
  });
  
  