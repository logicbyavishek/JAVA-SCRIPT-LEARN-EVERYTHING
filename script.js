const input = document.getElementById("searchInput");

let timer;

input.addEventListener("input", function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log("hello");
  }, 1000);
});
