// input  4 5 6       7 8 9
// output 11 10 9     17 16 15


let input = [4 ,5, 6]
let output = []
var sum =0
for(let num of input){
    sum += num

}

for(let num of input){
    output.push(sum-num)
}
console.log(
    `input:${input}
    output:${output}`
);
