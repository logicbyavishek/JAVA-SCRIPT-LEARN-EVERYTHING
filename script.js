const input = document.getElementById("debounce-input");
const output = document.getElementById("output");

// Debounce function
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Action to perform
function sayHello() {
  output.textContent = "hello";
  console.log("hello");
}

// Debounced listener
input.addEventListener("input", debounce(sayHello, 1000));
