/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = [];
    for(let index = 0; index < arr.length; index += 1){
        returnedArray[index] = fn(arr[index], index);
    }
    return returnedArray;
};


// Exemplo de uso
const arr = [1, 2, 3], fn = function plusone(n) {return n + 1}

const result = map(arr, fn);
console.log(result); // Saída: [2, 3, 4]

//Utilizando map

// const result = arr.map(fn)
// console.log(result)