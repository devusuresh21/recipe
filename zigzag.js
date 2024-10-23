
function convertZigZag(s, numRows) {
  
    if (numRows === 1 || numRows >= s.length) return s;
    const rows = new Array(Math.min(numRows, s.length)).fill('');

    let currentRow = 0;  
    let goingDown = false; 
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        
    
        currentRow += goingDown ? 1 : -1;
    }
    return rows.join('');
}

const str1 = "string";
const numRows1 = 3;  
const numRows2 = 4;  

console.log(`ZigZag conversion of "${str1}" with ${numRows1} rows is: "${convertZigZag(str1, numRows1)}"`);
console.log(`ZigZag conversion of "${str1}" with ${numRows2} rows is: "${convertZigZag(str1, numRows2)}"`);
