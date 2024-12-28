/**
 * Escreva uma função que receba dois parametros. O primeiro parametro é o elemento que repetirá, enquanto
 * que o segundo será o número de vezes que haverá repetição. U array será retornado.
 */

function repetir(item, quantidade) {
    let resultado = []
    for (let index = 0; index < quantidade; index++) {
        resultado.push(item)
    }
    return resultado
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))