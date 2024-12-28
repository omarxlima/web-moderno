/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o simbolo "+" na
 * quantidade especificada no parâmetro.
 */

function simboloMais(numero) {
    let resultado = ''
    for (let index = 0; index < numero; index++) {
       resultado += '+'
    }
    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))