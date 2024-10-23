pairArray = [2,4,6,9]
pairSum = 6
count = 0
low = 0
up = pairArray.length-1
pairArray.sort ((a,b)=>a-b)


while(low<up){
    curSum=pairArray[low] + pairArray[up]
    if( curSum==pairArray){
        console.log(`${pairArray[low]},${pairArray[up]}`);
        low++
        
    }else if(curSum>pairSum){
        up--


    }else if(curSum<pairSum){
        low++
    }

}
console.log(`execution time : ${count}`);
