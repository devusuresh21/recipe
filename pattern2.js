// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(let i=1;i<=4;i++){
    let line ='';
    for(let j=1;j<=4;j++){
        line += j+' ';
}
console.log(line);
}


//           *
//        *     *
//     *     *     *
//  *     *      *     *



for(let row=1;row<=4;row++){
    let line = ""
    for(space=3;space>row;space--){
        line += " " 
        
    }for(col=1;col<=row;col++){
        line += "* "
    }
    console.log(line);
    
}








//               1,4    *      2,5          row+col==5; col-row==3; row==4------> *     

//          2,3     *       *
//      3,2    *                 *  3,6

//  4,1    *   *    *    *   *   *   *  4,7



for(row=1;row<=4;row++){
    let line = " "
    for(col=1;col<=7;col++){
        if(row ==4 || row+col == 5 || col-row ==3){
            line += "*"
        }else{
            line += " "
        }
    }
    console.log(line);
    
}