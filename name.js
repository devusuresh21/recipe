name=["mini","tony","mili","tijo","daisy"]

// find mini or not
console.log(name.includes("mini")) // true

console.log(name.some(a=>a="mini"?"yes":"no"));

// display index of tony
console.log(name.indexOf("tony")) 
console.log(name.indexOf("daisy")) 

// remove tony from array
name.splice(name.indexOf("tony"),1);
console.log(name);
