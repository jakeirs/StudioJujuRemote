import ToggleClassOnScroll from './modules/ToggleClassOnScroll';
import SetHeight from './modules/SetHeight';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

document.addEventListener('DOMContentLoaded', function(event) {
  // Toggled class in header
  var logoAnimated = new ToggleClassOnScroll( '.logo-navbar', 'logo-navbar--is-visible', '0' ),
      navbarSticky = new ToggleClassOnScroll( '#navbar', 'navbar--fixed', '0' ),
      navRemovePadding = new ToggleClassOnScroll( '#nav', 'nav--no-padding', '0' );

// set height to .wrap-navbar prevent immediatelly fill the gap after #navbar gets sticky      
var setHeightWrapNavbar = new SetHeight('.wrap-navbar');
})





