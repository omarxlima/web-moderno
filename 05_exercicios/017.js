/**
 * Escreva uma função que receba um array de números e retornará a soma de todos os numeros desse array.
 */

function somarNumeros(array) {
    let soma = 0
    array.forEach(function(numero){
        return soma += numero
    });
    return soma
}

console.log(somarNumeros([10,10,10]))

//resolução 2

function somarNumeros2(array) {
    const soma = array.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}

console.log(somarNumeros2([15,15,15,15]))