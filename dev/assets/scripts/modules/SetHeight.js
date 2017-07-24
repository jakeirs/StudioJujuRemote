class SetHeight {
  constructor(selector) {
    this.itemToSetHeight = document.querySelector(selector);
    this.height = window.getComputedStyle(this.itemToSetHeight).getPropertyValue('height');
    this.setHeight();
  }
  setHeight() {
    this.itemToSetHeight.style.height = this.height;
  }
}

export default SetHeight;