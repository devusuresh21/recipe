
function longestSubstringWithoutRepeating(s) {
    let start = 0; 
    let maxLength = 0;  
    let longestSubstring = '';  
    const charSet = new Set(); 

    
    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
           
            charSet.delete(s[start]);
            start++;
        }
        
        charSet.add(s[end]);
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = s.substring(start, end + 1);
        }
    }

    return longestSubstring;
}

const str1 = "java"; 
const str2 = "css";     
const str3 = "javascript";  

console.log(`Longest substring without repeating characters in "${str1}" is: "${longestSubstringWithoutRepeating(str1)}"`);
console.log(`Longest substring without repeating characters in "${str2}" is: "${longestSubstringWithoutRepeating(str2)}"`);
console.log(`Longest substring without repeating characters in "${str3}" is: "${longestSubstringWithoutRepeating(str3)}"`);
