export function debounce(callback, delay, immediate = false) {
  let timeout = null;

  return function (...args) {
    const shouldCallImmediately = !timeout && immediate;

    if (shouldCallImmediately) {
      callback.apply(this, args);
    }
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      !immediate && callback.apply(this, args);
      timeout = null;
    }, delay);
  };
}
