array = [10,80,85,96,35,12,100,78,12,36,40,45]

console.log("numbre greater than 50");

// for(let num in array){
//     if(array[num] > 50){
//         console.log(array[num]);
//     } 
// }

const newArray =array.filter(num=>num>50)
console.log(newArray);


// print all odd numbers

console.log("odd numbers");
const oddArray = array.filter(num=>num%2!=0)
console.log(oddArray);


// even numbers

console.log("even numbers");
const evenArray = array.filter(num=>num%2==0)
console.log(evenArray);


// squares of each number
console.log("squares of each number");
const squareArray = array.map(num=>num**2)
console.log(squareArray);

// using foreach
console.log("squares using forEach");

array.forEach(num => console.log(num**2))


// print array greter tha n50 and decrement value by 1

console.log(array.map(num=>num>50?num-1:num+1));

// print least num
console.log(`least num ${array.reduce((a,b)=>a<b?a:b)}`)

// print greatest num
console.log(`greatest num ${array.reduce((a,b)=>a>b?a:b)}`)

// sum of num
console.log(`sum of num ${array.reduce((a,b)=>a+b,0)}`)