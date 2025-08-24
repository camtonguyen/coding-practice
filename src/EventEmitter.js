class EventEmitter {
  constructor() {
    this.events = {}; // initialize an empty object to store events & listeners
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; // if the event doesn't exist, create an empty array for it
    }
    this.events[eventName].push(callback); // add the callback to the event's array
    return {
      release: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback
        ); // remove the callback from the event's array
      },
    };
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return; // if the event doesn't exist, return
    }
    this.events[eventName].forEach((callback) => callback.apply(this, args)); // call each callback with the arguments
  }
}

const emitter = new EventEmitter();

const sub = emitter.subscribe('test', () => {
  console.log('test');
});

emitter.emit('test');
