const prompt = require('prompt-sync')({sigint: true});
const a = parseFloat(prompt("Enter the length of side a:"));
const b = parseFloat(prompt("Enter the length of side b:"));
const c = parseFloat(prompt("Enter the length of side c:"));

if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log("Not a triangle");
} else {
    
    if (a === b && b === c) {
        console.log("Equilateral");
    } else if (a === b || b === c || a === c) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}
