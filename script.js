const input = document.getElementById("throttle-input");

function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function sayHello() {
  console.log("hello");
}

input.addEventListener("input", throttle(sayHello, 1000));
