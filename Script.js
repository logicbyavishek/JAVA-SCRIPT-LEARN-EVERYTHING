//TRUTHY VS FALSY
// FALSY VALUES
// 0 "" null undefined NaN Document.all this aare falsy rest all are truthy values
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(Document.all)); // false

// TRUTHY VALUES
console.log(Boolean(1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(-5)); // true
console.log(Boolean(" ")); // true
console.log(Boolean(function(){})); // true

