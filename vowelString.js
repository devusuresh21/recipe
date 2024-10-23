function reverseVowels(s) {
    const vowels = "aeiouAEIOU"; 
    let arr = s.split(''); 
    let i = 0, j = arr.length - 1;

    while (i < j) {

        if (!vowels.includes(arr[i])) {
            i++;
            continue;
        }
        if (!vowels.includes(arr[j])) {
            j--;
            continue;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr.join(''); 
}

console.log(reverseVowels("hello"));    
console.log(reverseVowels("leetcode"));  
