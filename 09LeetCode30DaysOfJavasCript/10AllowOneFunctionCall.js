/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let chamado = false;
    let resultado;
    return function(...args){
        if(!chamado) {
            resultado = fn(...args);
            chamado = true;
            return resultado;
        }
        return undefined;
    }
};


let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log( onceFn(2,3,6)); // returns undefined without calling fn
 
