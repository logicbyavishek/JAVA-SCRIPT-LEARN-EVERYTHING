// Type Coercion in JavaScript

// 1. String Coercion
let str1 = 'Hello' + 5; // 'Hello5'
let str2 = 'The answer is ' + true; // 'The answer is true'
let str3 = '10'+2; // '102'
console.log(str1);
console.log(str2);
console.log(str3);


// 2. Number Coercion
let num1 = '10' - 2; // 8
let num2 = '5' * '4'; // 20
console.log(num1);
console.log(num2);

// 3. Boolean Coercion
let bool1 = !!'non-empty string'; // true
let bool2 = !!0; // false
console.log(bool1);
console.log(bool2);