var str = "malayalam"
console.log(`total length ${str}:${str.length}`);

// convert to capital letters
console.log(str.toUpperCase());

// covert to lowercase
console.log(str.toLowerCase());

// convert to substring
console.log(str.substring(0, 2));
console.log(str.slice(0, -1));

// str is start with "M"
console.log(str.startsWith("M"));
console.log(str.startsWith("m"));

// str is ends with "m"
console.log(str.endsWith("M"));

// total charecter count 
console.log(str.length);

// total charecter count after trim
console.log(str.trim().length);