/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
//callback functions, fn
const plusone = n => n + 1;
const plusI = (n, i) => n + i;
const constant = () => 42;

//mapping function (incorprates anonymous and callback function)
var map = function (arr, fn) {
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }
    return returnedArray;
};


const modifyArray1 = map([1, 2, 3], plusone);
const modifyArray2 = map([1, 2, 3], plusI);
const modifyArray3 = map([10, 20, 30], constant);



console.log(modifyArray1);
console.log(modifyArray2);
console.log(modifyArray3);





