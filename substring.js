function longestUniqueSubstring(s) {
    let start = 0; 
    let maxLength = 0; 
    let longestSubstring = ''; 
    let charSet = new Set(); 

    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]); 
            start++; 
        }

        charSet.add(s[end]); 

        let currentLength = end - start + 1; 
        if (currentLength > maxLength) {
            maxLength = currentLength; 
            longestSubstring = s.substring(start, end + 1); 
        }
    }

    return longestSubstring;
}

const inputString = "pwwkew";
const result = longestUniqueSubstring(inputString);
console.log("Longest substring without repeating characters:", result);
