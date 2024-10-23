// const prompt = require('prompt-sync')({sigint: true});
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter an operator (+, -, *, /):");
// let result;

// if (operator === '+') {
//     result = num1 + num2;
// } else if (operator === '-') {
//     result = num1 - num2;
// } else if (operator === '*') {
//     result = num1 * num2;
// } else if (operator === '/') {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error: Division by zero is not allowed.";
//     }
// } else {
//     result = "Invalid operator. Please use +, -, *, or /.";
// }
// console.log("Result: " + result);

const prompt = require('prompt-sync')({sigint: true});
const num1 = parseFloat(prompt("enter first number: "));
const num2 = parseFloat(prompt("enter second number: "));
const operator = prompt("enter operator (+, -, *, /)");
let result;

if(operator === '+'){
    result = num1 + num2
}else if(operator === "-"){
    result = num1 - num2
}else if(operator === "*"){
    result = num1 * num2
}else if(operator === "/"){
    if(num2 != 0){
        result = num1 / num2
    }
    else{
        result = "division by zero is not possible"
    }
}else{
    result = "invalid operator"
}
console.log("Result: " + result);


