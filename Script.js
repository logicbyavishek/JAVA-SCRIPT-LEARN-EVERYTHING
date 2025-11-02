// // 11. Allow only 3 attempts to enter correct password
// // If user gets it right early, stop. If not → “Account locked”

// let oldPassword = "Password@log";

// function checkPassword() {
//     let Password = prompt("Enter Your Password");
//     if (Password === null) return console.error(" Access not granted -->You pressed Cancel Button Bhai");
//     if (Password === "") return console.error("Access not granted -->   You enter nothing ");

//     return Password;
// }

// for(let i=1; i<4 ; i++){
//     let Password =checkPassword();
//     if(oldPassword===Password){
//         console.log("You're logged in");
//         break;
//     }
//     if(i===3){
//         console.log("Account Locked");
//         break;        
//     }
// }
//
// 
// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// function checkprompt() {
//     let userInput = prompt("Enter Your Input types Yes - for continue & Stop for stop");
//     if (userInput === null){
//         console.error(" Access not granted -->You pressed Cancel Button Bhai");
//         return null;
//     }
//     if (userInput === ""){
//         console.error("Access not granted -->   You enter nothing ");
//         return "";
//     }

//     return userInput;
// }

// let count = 0 ;

// while(true){
//     let userInput = checkprompt();
//     if(userInput===null) continue;  //early return pattern
//     if(userInput.toLocaleLowerCase()==="yes"){      //Case-Insensitive Check
//         count++;
//     }else if(userInput.toLocaleLowerCase()==="stop"){
//         console.log(" You type stop and now exist the loop");
//         break;   // user type "stop" confirm and exit loop
//     }
// }
// console.log(`You types yes ${count} times`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// console.log("Print those number divisible by 7 from 1 to 50");
// for(let i = 1 ; i<=50 ; i++){
//     if(i%7===0){
//         console.log(i);
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;
for(let i = 1; i<=30 ; i++){
    if(i%2!==0){
        sum+=i;
    }
}
console.log(`sum of all odd numbers from 1 to 30 is ${sum}`);
