function vote(age){
    if(age>=18){
        console.log("eligible for vote");
        
    }else{
        console.log("not eligible");
        
    }
}

vote(52)



function vote(age){
    return age>=18?"eligible":"not eligible"
}
console.log( vote(8));
