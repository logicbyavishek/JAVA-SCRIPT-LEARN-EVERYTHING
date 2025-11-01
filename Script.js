// typeof Operator
console.log(typeof 10); // number
console.log(typeof 'Hello'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof { name: 'John', age: 30 }); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof function() {}); // function
console.log(typeof Symbol('id')); // symbol

// Dynamic Typing
let data = 42; // Initially a number
console.log(typeof data); // number
data = 'Now I am a string'; // Now a string
console.log(typeof data); // string
data = true; // Now a boolean
console.log(typeof data); // boolean