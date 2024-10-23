const limit = 8;
let a = 0, b = 1;
let output = '';

while (a <= limit) {
    output += a + ' '; 
    let next = a + b; 
    a = b; 
    b = next; 
}


console.log(output);
