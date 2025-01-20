/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    let quantidadeDeArgumentos = 0;
    for (let index = 0; index < args.length; index++) {
            quantidadeDeArgumentos++;
    }
    return quantidadeDeArgumentos
};



/**
 * argumentsLength(1, 2, 3); // 3
 */


console.log(argumentsLength({}, null, "3")) // Saída: 3

