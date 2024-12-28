/**
 * Desenvolva uma funçao que receba dois numeros inteiros não negativos (maiores ou iguais a zero) e realize a 
 * multiplicação deles. Porém, não utilize o operador de multiplicação
 */

function multiplicacao(num1, num2) {
   let resultado = 0

   for (let index = 0; index < num2; index++) {
   resultado += num1
}
return resultado
}

console.log(multiplicacao(5,5))
console.log(multiplicacao(0,7))