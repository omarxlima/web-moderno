/**
 * Crie uma funçao que receba quatro numeros como parametro(numero, minimo, maximo,inclusivo) e 
 * retorne se o parametro numero (o primeiro) está entre o nimimo e maximo. Quando o parametro
 * inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo
 * ou a máximo. Caso o parametro inclusivo não seja informado, seu valor padrão deverá ser false,
 * portanto, a lógica será inclusiva, não considerando se o numero é igual a minimo ou máximo
 */

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3,150,3))
console.log(estaEntre(3,150,3,true))