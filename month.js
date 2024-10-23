let month = 2; 
let year = 2024; 

let daysInMonth;

if (month === 2) {
   
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}

console.log("Number of days: " + daysInMonth);
