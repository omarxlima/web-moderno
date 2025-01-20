/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
        const key = String(args);
        if(key in cache){
            return cache[key]
        }
        const resultado = fn(...args);
        cache[key] = resultado;
        return resultado;
    }
}



  let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 
