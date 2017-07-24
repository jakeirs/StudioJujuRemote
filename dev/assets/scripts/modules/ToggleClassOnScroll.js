import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ToggleClassOnScroll {
  constructor(selector, classToAdd, offset) {
    this.itemToAddClass = document.querySelector(selector);
    this.classToAdd = classToAdd;
    this.offset = offset;
    this.createWaypoints();
  }
  
  createWaypoints() {
    
    var that = this,
      currentItem = this.itemToAddClass;
    new Waypoint({
      element: currentItem,
      handler: function() {
        currentItem.classList.toggle(that.classToAdd);
      },
      offset: that.offset,
    }); 
  }  
}

export default ToggleClassOnScroll;