export function throttle(callback, delay) {
  let timeout = null;
  let lastTimeExec = 0;
  function executeFunction(context, args) {
    lastTimeExec = Date.now();
    callback.apply(context, args);
  }
  function throttler(...args) {
    const now = Date.now();
    const timeSinceLastExec = now - lastTimeExec;
    const remainingTime = delay - timeSinceLastExec;

    if (timeSinceLastExec >= delay) {
      executeFunction(this, args);
    } else {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => executeFunction(this, args), remainingTime);
    }
  }
  throttler.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };
  return throttler;
}
