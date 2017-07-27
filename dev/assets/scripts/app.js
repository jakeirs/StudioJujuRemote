import ToggleClassOnScroll from './modules/ToggleClassOnScroll';
// import SetHeight from './modules/SetHeight';
import glitchEffectButtons from './modules/GlitchEffectButtons';
import waypointsSticky from './vendor/waypoints.sticky';


document.addEventListener('DOMContentLoaded', function(event) {
  // toggled class in header
  var logoAnimated = new ToggleClassOnScroll( '.logo-navbar', 'logo-navbar--is-visible', '0' ),
      navRemovePadding = new ToggleClassOnScroll( '#nav', 'nav--no-padding', '0' );

  // activate glitch effect on buttons' hover
  glitchEffectButtons();

  // sticky navbar
  var stickyNavbar = new Waypoint.Sticky({
    element: document.querySelector('#navbar'),
    stuckClass: 'navbar--fixed'
  })

});









