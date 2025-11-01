//Build a Calculator using switch case
function Calculator(a,b,operator){
    switch(operator){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        case '%':
            return a%b;
            break;
        default:
            return "Inavilid Operator";
    }
}
alert("Welcome to the Calculator");
var a = prompt("Enter first number");
var b = prompt("Enter second number");
var operator = prompt("Enter operator (+, -, *, /, %)");
var result = Calculator(Number(a), Number(b), operator);
console.log("The result is: " + result);