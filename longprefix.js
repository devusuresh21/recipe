
function longestCommonPrefix(strs) {
   
    if (strs.length === 0) return '';
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
           
            if (prefix === '') return '';
        }
    }

    return prefix;
}

const strs1 = ["flower", "flow", "flight"]; 
const strs2 = ["dog", "racecar", "car"];    
const strs3 = ["interspecies", "interstellar", "interstate"];

console.log(`Longest common prefix of ["flower", "flow", "flight"] is: "${longestCommonPrefix(strs1)}"`);
console.log(`Longest common prefix of ["dog", "racecar", "car"] is: "${longestCommonPrefix(strs2)}"`);
console.log(`Longest common prefix of ["interspecies", "interstellar", "interstate"] is: "${longestCommonPrefix(strs3)}"`);
