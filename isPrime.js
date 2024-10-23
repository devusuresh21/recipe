const prompt = require('prompt-sync')({sigint: true});
const input = prompt("enter a  value");
 
var num = Number(input)

isPrime = true
for(i=0;i<=num;i++){
    if(num%2==0){
      isPrime = false
    }
    
}
console.log(isPrime?`${num} is prime`:`${num}  is not prime`);
