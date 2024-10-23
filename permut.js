function nextPermutation(nums) {
    const n = nums.length;
    let k = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            k = i;
            break;
        }
    }
    if (k === -1) {
        return nums.sort((a, b) => a - b);
    }

   
    let l = -1;
    for (let i = n - 1; i > k; i--) {
        if (nums[i] > nums[k]) {
            l = i;
            break;
        }
    }
    
  
    [nums[k], nums[l]] = [nums[l], nums[k]];


    let left = k + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
}


const array = [1, 2, 3];
const nextPerm = nextPermutation(array);
console.log("The next greater permutation is:", nextPerm);
