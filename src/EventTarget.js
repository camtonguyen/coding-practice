class EventTarget {
  constructor() {
    this.eventsMap = {}; // initialize an object to store events and their callbacks
  }

  addEventListener(type, callback) {
    // check if the event type is already in the eventsMap
    if (!this.eventsMap[type]) {
      // if not, create an array to store the callbacks
      this.eventsMap[type] = [callback];
    } else {
      // if it exists, add the callback to the array
      if (!this.eventsMap[type].includes(callback)) {
        this.eventsMap[type].push(callback);
      }
    }
  }

  removeEventListener(type, callback) {
    // check if the event type is in the eventsMap
    if (this.eventsMap[type]) {
      // find the index of the callback in the array
      const index = this.eventsMap[type].indexOf(callback);
      // if found, remove the callback from the array
      if (index !== -1) {
        this.eventsMap[type].splice(index, 1);
        // if the array is empty after removal, delete the key from the eventsMap
        if (this.eventsMap[type].length === 0) {
          delete this.eventsMap[type];
        }
      }
    }
  }

  dispatchEvent(type) {
    // check if the event type is in the eventsMap
    if (this.eventsMap[type]) {
      // if so, call each callback with the event object
      this.eventsMap[type].forEach((callback) => callback());
    }
  }
}
