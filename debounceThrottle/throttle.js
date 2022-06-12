const _throttle = (fn, delay) => {
  let lastTime = 0;

  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
};

const handleMouse = _throttle((e) => console.log(e.screenX, e.screenY), 1000);

document.body.addEventListener("mousemove", (e) => handleMouse(e));
