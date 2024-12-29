/**
 *  A fim de manter o calendario anual ajustado com o movimento de traslação da Terra, criou-se os anos
 * bissextos, que tem 366 dias em vez dos 365 presentes nos anos normais.
 * 
 * Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser multiplo de 100
 * exceto se for também múltiplo de 400.
 * 
 * com isso em mente, desenvolva uma função que recebe um número correspondente a uma ano e retorna se ele é 
 * bissexto ou não.
 */


function anoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 ==0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2100))