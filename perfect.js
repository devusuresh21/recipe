const prompt = require('prompt-sync')({sigint: true});
const number = parseInt(prompt("Enter a number to check if it is a perfect number:"), 10);
if (isNaN(number) || number <= 0) {
    console.error("Please enter a valid positive number.");
} else {
   
    let sum = 0;

   
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

  
    if (sum === number) {
        console.log(`${number} is a perfect number.`);
    } else {
        console.log(`${number} is not a perfect number.`);
    }
}
