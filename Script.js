// Java Script prepare memory before running code. It moves all declarations to the top this is called hoisting.

// In Java Script var variables are hoisted and initialized with undefined. while let and const are hoisted but not initialized. 
// So accessing them before declaration will throw ReferenceError.

console.log(a); // undefined
var a = 10;
/* Output: undefined
var a ;
a = 10;

a is declared but not initialize then var a; this is gop in top of the code , and we are not assign any value to a so it is 
undefined. so our output is undefined.

let and const hoisting example:
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
/* Output: ReferenceError: Cannot access 'b' before initialization
Here b is hoisted but not initialized. So accessing it before declaration throws ReferenceError.
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
/* Output: ReferenceError: Cannot access 'c' before initialization
Here c is hoisted but not initialized. So accessing it before declaration throws ReferenceError.

*/
