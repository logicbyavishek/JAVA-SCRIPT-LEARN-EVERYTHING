// create a new list item <li>New Task </li> and add it to end of a <ul>.
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New Task";
ul.appendChild(li);