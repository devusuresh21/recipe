
const products = [
    [1, 'hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 0],
    [5, 'tiger', 20, 30],
    [6, 'unibic', 60, 20],
    [7, 'good day', 70, 20]
];

const prompt = require('prompt-sync')({sigint: true});
const input = prompt('enter search key:')
const outputArray = products.filter(item=>item[1].includes(input))
console.log(outputArray.length>0?outputArray.map(item=>item[1]):"no products are available");

