array = [10,20,20,56,89,41,41,21,21,26]

for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i] == array[j]){
            console.log(array[i] + " is duplicate");
            break
    }
}
}
