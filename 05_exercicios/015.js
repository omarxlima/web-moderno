/**
 * Elabore uma função que receba um array de números e retorne uma array que tenha todos os números que são
 * pares e que também tenha índices pares.
 */

function receberSomenteParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) =>{
        const numeroPar = numero % 2 == 0
        const indicePar = indice % 2 == 0

        return numeroPar && indicePar
    })
}

console.log(receberSomenteParesDeIndicesPares([1,2,3,4]))
console.log(receberSomenteParesDeIndicesPares([10,701,22,43]))