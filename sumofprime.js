
const limit = 100;
let a = 0;
let b = 1;
let sumOfEvenNumbers = 0;
let output = '';
while (a <= limit) {
    
    output += a + ' ';
    if (a % 2 === 0) {
        sumOfEvenNumbers += a;
    }
    const next = a + b;
    a = b;
    b = next;
}
console.log("Fibonacci sequence up to " + limit + ": " + output);
console.log("Sum of even numbers in the sequence: " + sumOfEvenNumbers);
