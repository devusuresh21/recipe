a1 = [1,2,6,5,8,4]
a2 = [2,5,1,4,36,5,1]
count = 0
for(let a of a1){
    for(let b of a2){
        count++
    
    if(a==b){
        console.log(a);
        
        break
    }
}
}console.log(`execution time: ${count}`);

