// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
let oldPassword = "Password@log";

function checkPassword() {
    let Password = prompt("Enter Your Password");
    if (Password === null) return console.warn(" Access not granted -->You pressed Cancel Button Bhai");
    if (Password === "") return console.warn("Access not granted -->   You enter nothing ");
    if(oldPassword===Password){
        console.log("Password Matched succesfully Access Granted");
        console.log("=== WELCOME🙌 ===");
    }else{
        console.log("Incorrect Password Access Denied");
    }
}

checkPassword();