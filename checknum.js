// check number is in given array or not

array =[10,20,2,25,36,96]
let searchKey=1
let isFound=false;

for(let num of array){
    if(searchKey==num){
        isFound=true;
        break;


}

}
console.log(isFound?"found":"not found");

