/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1;

    while (low < high) {
    let middle = Math.floor((low + high) / 2);
    
    if (nums[middle] > nums[high]) {
        low = middle + 1;
    } else {
        high = middle;  
    }
    }
  return nums[low];
      
};


