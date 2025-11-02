// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let oldPassword = "Password@log";

function checkPassword() {
    let Password = prompt("Enter Your Password");
    if (Password === null) return console.error(" Access not granted -->You pressed Cancel Button Bhai");
    if (Password === "") return console.error("Access not granted -->   You enter nothing ");

    return Password;
}

for(let i=1; i<4 ; i++){
    let Password =checkPassword();
    if(oldPassword==Password){
        console.log("You're logged in");
        break;
    }
    if(i===3){
        console.log("Account Locked");
        break;        
    }
}