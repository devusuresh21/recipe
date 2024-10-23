nestedArray = [
    [10,20],[1,2],[2,6],[25,12],[10,9]
]

for(let a of nestedArray){
    for(let num of a){
        if( num<10 ){
            console.log(num);

        }
       

        
        
    }
}


// square of each number in above array

console.log(`square of number`);
for(let a of nestedArray){
    for(let num of a){
        console.log(num*num)
}
}


// sum of number


sum=0
for(let a of nestedArray){
    for(let num of a){
       sum+= num
}
}console.log(`sum of number : ${sum}`);