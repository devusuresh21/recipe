function isAnagram(s, t) {
   
    if (s.length !== t.length) {
        return false;
    }

 
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}


console.log(isAnagram("dear", "read")); 
console.log(isAnagram("rat", "cat")); 
