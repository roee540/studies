const myInput = document.getElementById("input");
const defaltText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDefaultText = (text) => {
  defaltText.textContent = text;
};

const updateDebounceText = debounce((text) => {
  debounceText.innerHTML = text;
}, 500);

const updateThrottleText = throttle((text) => {
  throttleText.innerHTML = text;
}, 500);

myInput.addEventListener("input", (e) => {
  updateDefaultText(e.target.value);
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function debounce(fn, delay) {
  let id;
  return (...args) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let lastTime = 0;
  let id;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime < delay) {
      if (id) clearTimeout(id);
      id = setTimeout(() => {
        fn(...args);
      }, delay + 100);
      return;
    }
    lastTime = now;
    if (id) clearTimeout(id);
    fn(...args);
  };
}
