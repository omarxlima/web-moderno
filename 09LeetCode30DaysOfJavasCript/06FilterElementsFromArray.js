/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 * 
 */

var filter = function(arr, fn) {
    const filteredArr = []
    for (let index = 0; index < arr.length; index++) {
        // filteredArr[index] = fn(arr[index], index)
        if(fn(arr[index], index)){
            filteredArr.push(arr[index])
        }
    }
    return filteredArr
}

const arr = [0,10,20,30], fn = function greatThan10(n){return n > 10 };
const result = filter(arr, fn)
console.log(result) // Saída: [20, 30]

//Utilizando filter

// const result = arr.filter(fn);
// console.log(result);



