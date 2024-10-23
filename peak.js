function findPeakElement(nums) {
    const n = nums.length;
   
    if (n === 0) return undefined; 
    if (n === 1) return nums[0];  
    function binarySearch(left, right) {
        if (left === right) {
            return nums[left];
        }
        
        const mid = Math.floor((left + right) / 2);
        
       
        if (nums[mid] > nums[mid + 1]) {
            
            return binarySearch(left, mid);
        } else {
            
            return binarySearch(mid + 1, right);
        }
    }

    return binarySearch(0, n - 1);
}

const array = [1, 3, 20, 4, 1];
const peak = findPeakElement(array);
console.log("A peak element is:", peak);
