const prompt = require('prompt-sync')({sigint: true});

const year = parseInt(prompt("Enter a year:"));


if (year % 100 === 0) {
    console.log(`${year} is a century year.`);
} else {
    console.log(`${year} is not a century year.`);
}


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
