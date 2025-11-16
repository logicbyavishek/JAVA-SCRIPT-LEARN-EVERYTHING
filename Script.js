//Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
    // function runTwice(fn){
    //     fn();
    //     fn();
    // }
    // runTwice(function(){
    //     console.log("Hello Avi (-:");
    // })

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable. 

    // function purefunction(a,b){
    //     console.log(a+b);
    // }
    // purefunction(2,3);
    // purefunction(2,3);
    // let global = 1 ;
    // function impure(a){
    //     global++;
    //     console.log(a+global);
    // }
    // impure(2);
    // impure(2);

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

    // function abcd({name,age}){
    //     console.log(name, age);
    // }
    // abcd({name:"Avi", age:22});

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue). Important

    // console.log(this); //-- if we log this in global area then it's returns window in browser .
    // let a = ()=>{
    //     console.log(this);
    // }
    // a(); // -- if we log this in arrow function then it returns window in browser.
    
    // let obj = {
    //     name: "Avi",
    //     fnc : function(){
    //         console.log(this); // -- if we log this in normal function method of object then it returns the object itself.
    //     },
    //     fnc2 : ()=>{
    //         console.log(this); // -- if we log this in arrow function method of object then it returns window in browser. beacause arrow function doesn't have its own this. this refers the parent obj and obj written in global space and in global space this refers window in browser.
    //     }
    // }
    // obj.fnc();
    // obj.fnc2(); // -- Important 

    // let obj11 = {
    //     name: "Avi",
    //     fnc : function(){
    //         let a = ()=>{
    //             console.log(this); // -- here this refers to obj because arrow function doesn't have its own this so it refers to parent obj which is normal function and in normal function this refers to the object itself.
    //         }
    //         a(); // -- Important
    //     },
    // }
    // obj11.fnc();

    // let obj1 = {
    //     name: "Avi",
    //     fnc : function(){
    //         function fnc2(){
    //             console.log(this); // -- normally we write function under obj then this value is object we all know  but here fnc2 is written inside the function then fnc2 rebind this and here this refers to window in browser.
    //         }
    //         fnc2(); // -- Important
    //     },
    // }
    // obj1.fnc();
    

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let newarr = arr.map(function(val){
        return val*val;
    })
    console.log(newarr);
// 6. Use `filter()` to get only even numbers from an array.
// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// 10. Create a nested object (`user → address → city`) and access the city name inside it.