/**
 * Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
 * possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que voce
 * esta desenvolvendo no momento é a de somar o total das despesas.
 * Crie uma função que receba um array de produtos e retorne oo total das despesas
 */

function despesasTotais(elementos) {
    const despesas = p => p.preco
    return elementos.map(despesas).reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entetenimento", preco: 150},
    
]))

//resolução 2

function despesasTotais2(itens) {
    var total = 0

    for(let item of itens)
        total += item.preco

    return total
}

console.log(despesasTotais2([
    {nome: "Galaxy s20", categoria: "Eletronicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletronicos", preco: 30999.90},

]))