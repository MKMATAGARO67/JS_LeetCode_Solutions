/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let uniqueNums = ([...new Set(nums)]).sort();
    let minNum = Math.min(...uniqueNums)

    return minNum;
};
