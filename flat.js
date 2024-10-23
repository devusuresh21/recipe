array = [
    [10,80],[85,96],[35,12],[100,78],[12,36],[40,45]
]

const flattenArray=array.flat()
console.log(flattenArray)

// no greater than 50
console.log(flattenArray.filter(num=>num>50));

// square

console.log(flattenArray.map(num=>num**2));
// highest num

console.log(flattenArray.reduce((a,b)=>a>b?a:b));

