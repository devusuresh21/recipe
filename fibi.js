const prompt = require('prompt-sync')({sigint: true});
const numberOfTerms = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:"));


let n1 = 0, n2 = 1, nextTerm;

console.log("Fibonacci Sequence:");

for (let i = 1; i <= numberOfTerms; i++) {
    console.log(n1); 
    nextTerm = n1 + n2; 
    n1 = n2; 
    n2 = nextTerm; 
}













































