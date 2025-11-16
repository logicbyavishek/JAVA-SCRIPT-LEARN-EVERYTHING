//Level 1 – Basic Function, Array & Object Code Tasks (Easy)
/*
1. Write a function `sayHello()` that prints `"Hello
JavaScript"`.
2. Create a function `add(a, b)` that returns their sum
and log the result.
3. Write a function with a default parameter `name =
"Guest"` that prints `"Hi <name>"`.
4. Use rest parameters to make a function that adds
unlimited numbers.
5. Create an IIFE that prints `"I run instantly!"`.
6. Make a nested function where the inner one prints a
variable from the outer one.
7. Create an array of 5 fruits. Add one at the end and
remove one from the beginning.
8. Use a `for` loop to print all elements of an array.
9. Create an object `person` with keys `name`, `age`,
and `city`, and print each key’s value.
10. Use `setTimeout()` to log `"Time’s up!"` after 2
seconds.
*/
//1.
// function sayHello(){
//     console.log("Hello JavaScript");
// }

// sayHello();

//2.
// function add(a,b){
//     return a+b ;
// }
// console.log(add(5,10));

//3.
// function Guest(name = "Guest"){
//     console.log("Hi " + name);
// }
// Guest();

//4.
// function addNumbers(...numbers){
//     return numbers.reduce((acc, val) => acc + val, 0);
// }
// console.log(addNumbers(1,2,3,4,5));

//5.
// (function(){
//     console.log("I run instantly!");
// })();
//6. Make a nested function where the inner one prints a variable from the outer one.

// function nested(){
//     let a = 10 ;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// nested();

//7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruits = ["apple", "banana", "mango", "grape", "orange"];
// console.log(fruits);
// fruits.push("kiwi");
// fruits.shift();
// console.log(fruits);

//8. Use a `for` loop to print all elements of an array.

// let colors = ["red", "blue", "green", "yellow", "purple"];
// for(let i =0 ; i<colors.length ; i++){
//     console.log(colors[i]);
// }

// colors.forEach(function(val){
//     console.log(val);
// })

//9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

let person = {
    name: "John",
    age: 30,
    city: "New York"
}

for(let key in person){
    console.log(key ,":",person[key]);
}