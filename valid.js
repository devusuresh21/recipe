function isValidNumber(str) {
  
    const numberRegex = /^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    return numberRegex.test(str);
}

const test1 = "123";        
const test2 = "-123.45";    
const test3 = "3.14e10";    
const test4 = "abc";        
const test5 = "1e";        
console.log(`"${test1}" is a valid number:`, isValidNumber(test1));
console.log(`"${test2}" is a valid number:`, isValidNumber(test2));
console.log(`"${test3}" is a valid number:`, isValidNumber(test3));
console.log(`"${test4}" is a valid number:`, isValidNumber(test4));
console.log(`"${test5}" is a valid number:`, isValidNumber(test5));
