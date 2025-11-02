//5. a> print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"
// b> ask user for a number and say if its  positive or negative  use prompt() and a condition
console.log("<<<<<==============QUESTION NUMBER 5 <A> ============>>>>>");
for(let i=1 ; i<=10 ; i++){
    if(i%2===0){
        console.log(`even number = ${i}`);
    }
    console.log(`Odd number = ${i}`);    
}

console.log("<<<<<==============QUESTION NUMBER 5 <B> ============>>>>>");

function checkNumber() {
    let num = prompt("Enter a number");
    if (num === null) return console.warn("You pressed Cancel Button Bhai");
    num = num.trim();
    if (num === "") return console.warn("Bhai, kuch likhle space mat de!");
    if (isNaN(num)) return console.warn("Bhai, number de de!");
    console.log("Confirmed, ye number hai:", Number(num));
    return Number(num);
}

let num = checkNumber();
let msg = num>0?`${num} This is a Possitive Number`:num===0?`${num} you press zero`:`${num} This is a Negative Number`;
console.log(msg);
