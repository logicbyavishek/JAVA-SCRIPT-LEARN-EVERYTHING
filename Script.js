// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
console.log("<<<<<============== QUESTION NUMBER 6 ============>>>>>");

function checkNumber() {
    let age = prompt("Enter Your Age");
    if (age === null) return console.warn("You pressed Cancel Button Bhai");
    age = age.trim();
    if (age === "") return console.warn("Bhai, kuch likhle space mat de!");
    if (isNaN(age)) return console.warn("Bhai, number de de!");
    console.log("Confirmed, ye number hai:", Number(age));
    return Number(age);
}

let age = checkNumber();
let msg = age>18?`${age} Not Eligible`:`${age} Eligible `;
console.log(msg);
