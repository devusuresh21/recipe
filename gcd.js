
const prompt = require('prompt-sync')({sigint: true});
const num1 = parseInt(prompt("enter first number"));
const num2 = parseInt(prompt("enter first number"));

// var num1 = Number(input1)
// var num2 = Number(input2)

var gcd =1
if(num1<num2){
    for(let i=1;i<=num1;i++){
        if(num1%i==0 || num2%i ==0){
            gcd = i
        }
    }
    console.log(`gcd od (${num1},${num2})=${gcd}`);

}else{
    for(let i=1;i<=num2;i++){
        if(num1%i==0 || num2%i ==0){
            gcd = i
        }
    }
    console.log(`gcd od (${num1},${num2})=${gcd}`);
}


