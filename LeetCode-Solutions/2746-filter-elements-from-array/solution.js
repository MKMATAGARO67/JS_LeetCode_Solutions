/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const greaterThan10 = n => n > 10;
const firstIndex = (n, i) => i === 0;
const plusOne = n => n + 1;


var filter = function(arr, fn) {
    let filteredArr = [];

    for(let i =0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};

const passValues1 = filter([0,10,20,30], greaterThan10);
const passValues2 = filter([1,2,3], firstIndex);
const passValues3 = filter([-2,-1,0,1,2], plusOne);

console.log(passValues1)
console.log(passValues2)
console.log(passValues3)
