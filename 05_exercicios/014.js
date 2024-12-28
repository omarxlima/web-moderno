/**
 * Desenvilva uma funcao que recebe como parametro um objeto e retorne um array de arrays, em que cada
 * elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
 */

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({nome: "Maria", profissao: "Desenvolvedora de software"}))
console.log(objetoParaArray({codigo: 111111, preco: 12000}))

//resolução 2

function objetoParaArray2(objeto) {
    const resultado = []
    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])

    return resultado
}

// console.log(objetoParaArray2({nome: "Maria", profissao: "Desenvolvedora de software"}))
// console.log(objetoParaArray2({codigo: 111111, preco: 12000}))


