const prompt = require('prompt-sync')({sigint: true});


const num = prompt("enter the limit");
console.log("ascending:");

for(i=1;i<=num;i++){
    console.log(i);
    

}
console.log("descending :");

for(i=num;i>0;i--){
    console.log(i);
    
}