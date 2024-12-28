/**
 * Escreva uma função que receba um valor booleano ou numerico. Se o parametro fornecido for booleano, o
 * retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornara true. Se o parametro for
 * numérico, o retorno será o inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parametro de entrada
 * não for de nenhum dos tipos acima retorne "booleano ou numeros esperados, mas o parametro é do tipo ..""
 */

function inverso(valor) {
    const tipo = typeof valor

    if(tipo == "boolean") {
        return !valor
    }else if (tipo == "number"){
        return -valor
    }else{
        return `boleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))