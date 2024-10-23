let i=10

console.log(`befor lopp , i = ${i}`);
    
for( let i=1;i<=5;i++){
    console.log(`befor lopp , i = ${i}`);
    
}

console.log(`befor lopp , i = ${i}`);
//output
// befor lopp , i = 10
// befor lopp , i = 1
// befor lopp , i = 2
// befor lopp , i = 3
// befor lopp , i = 4
// befor lopp , i = 5
// befor lopp , i = 10
    //var will execute the whole program that is itsa global variable


    //let will only excute within the loop 

var x=10

    console.log(`befor lopp , i = ${i}`);
        
    for( var x=1;i<=5;i++){
        console.log(`befor lopp , i = ${i}`);
        
    }
    
    console.log(`befor lopp , i = ${i}`);
    // output   
//     befor lopp , i = 10
// befor lopp , i = 1
// befor lopp , i = 2
// befor lopp , i = 3
// befor lopp , i = 4
// befor lopp , i = 5
// befor lopp , i = 6