//T2 : Select all <li> elements and change their text using a loop .

let li = document.querySelectorAll("li");
li.forEach(function(val){
    console.log(val.textContent)
})