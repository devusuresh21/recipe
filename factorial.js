const prompt = require('prompt-sync')({sigint: true});
const num = parseFloat(prompt("enter a  value"));
 
// var num = Number(input)

var fact = 1;


for(let i=1; i <= num; i++){
    fact *= i
}
console.log(`factorial of ${num} is ` + fact);

