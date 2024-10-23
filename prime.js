
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function sumOfPrimes(limit) {
    let sum = 0;

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}


const limit = 10; 
console.log("Sum of all prime numbers up to " + limit + " is: " + sumOfPrimes(limit));
