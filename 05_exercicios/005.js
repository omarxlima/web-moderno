/**
 * Crie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo.
 */

function maiorOuIgual(num1, num2) {
    if(typeof num1 != typeof num2) return false
    return num1 >= num2
}

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5,1))

