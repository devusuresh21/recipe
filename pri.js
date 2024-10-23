const prompt = require('prompt-sync')({sigint: true});
const lower = parseInt(prompt("Enter the lower bound number:"));
const upper = parseInt(prompt("Enter the upper bound number:"));

console.log(`Prime numbers between ${lower} and ${upper} are:`);
const isPrime = (num) => {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
};
for (let i = lower; i <= upper; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
