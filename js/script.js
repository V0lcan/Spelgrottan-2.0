// Set the initial opacity of the navbar to 0
$('#navbar').css({
    opacity: 0,
    transition: 'opacity 0.6s ease-in-out'
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