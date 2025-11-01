// Temporal Dead Zone (TDZ)
/*
TDZ means when let and const are used in hoisting concept then rhey are throw error , this is a refference error, because they
are not initialized. so we can not access them before initialization. the line we initialize them  1st line to the line we 
initialize them is called their temporal dead zone.
*/

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;