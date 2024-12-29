/**
 * Numa aplicação web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
 * pretende-se adicionar a funcionalidade de calcular a média de um conjunto de numeros informados pelo usuario
 * Com o intuito de realizar esse calculo, crie uma função que receba um array com uma quantidade indeterminada de numeros e retorne
 * a media simples desses numeros.
 */

function calcularMedia(array) {
    const quantidadeDeNumeros = array.length
    let somaTotal = 0
   array.forEach(element => {
        somaTotal += element
   });

   return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia([0,10]))
console.log(calcularMedia([1,2,3,4,5]))