/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for (let index = 0; index < nums.length; index++) {
       init = fn(init, nums[index]);
    }
    return init;
};

const nums = [1,2,3,4,];
const fn = function sum(accum, curr) {return accum + curr};
const init = 0;

const result = reduce(nums, fn, init)
console.log(result) // Saída: 10

//Utilizando reduce

// const result = nums.reduce(fn, init);
// console.log(result)