/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length;
    const totalSums = nums.reduce((acc,val) => acc + val, 0);
    const answer = new Array(n);
    
    let leftSum = 0;

    for(let i=0; i<n; i++){
        const rightSum = totalSums - nums[i] - leftSum;
        answer[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }

    return answer;
};


