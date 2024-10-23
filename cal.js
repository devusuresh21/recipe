const prompt = require('prompt-sync')({sigint: true});
const salary = parseFloat(prompt("enter the salary"));
const exepense1 =parseFloat(prompt("enter the first expense"));
const exepense2 =parseFloat(prompt("enter the second expense"));
let totalSalary;

totalSalary=salary*2

console.log(`total salary is:${totalSalary}`);
expense=salary-exepense1
console.log(`expense iof first month:${expense}`)
expenses=salary-exepense2

console.log(`expense of second month:${expenses}`);

totalExpense=exepense1 + exepense2
console.log(`total expense:${totalExpense}`);

