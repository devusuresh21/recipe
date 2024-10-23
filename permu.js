
function generatePermutations(str) {
    let results = [];

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

 
    function permute(arr, start) {
        if (start === arr.length - 1) {
            results.push(arr.join(''));
        } else {
            for (let i = start; i < arr.length; i++) {
                swap(arr, start, i);
                permute(arr, start + 1);
                swap(arr, start, i); 
            }
        }
    }

    let arr = str.split('');
    permute(arr, 0);

    return results;
}


const inputString = "sun";
const permutations = generatePermutations(inputString);
console.log("Permutations of '" + inputString + "':", permutations);
