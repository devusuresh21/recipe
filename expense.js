let expense =[230,171,236,596,874,123,10,98563]

// least expense

let least = expense[0]

for(let num of expense){
    if(num < least){
        least = num
}


}
console.log(`least expense is ${least}`);

// most expense

let highexpense =[230,171,236,596,874,123,10,98563]

// least expense

let most = highexpense[0]

for(let num of highexpense){
    if(num > most){
        most = num
}


}
console.log(`high expense is ${most}`);

// total expense

var sum = 0
for(let num of highexpense){
    sum += num
}
console.log(`sum of array is ${sum}`);
