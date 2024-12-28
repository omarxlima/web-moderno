/**
 *  Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
 * apenas modificando-o, mas, em essencia, o objeto continua o mesmo, ou seja a sua referencia de memoria é a mesma
 * Num projeto que voce esta trabalhando, voce foi designado a regatorar diversas funções para que façam copias
 * de objetos e manipulem dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações
 * devido a referência dos objetos. Abaixo, está a descrição de uma dessas funções.
 * 
 * Você escreverá uma função que recebe um objeto como primeiro parametro e, como segundo paramentro, o nome da propriedade
 * contida nesse objeto. Em seguida, retorne uma copia desse objeto sem a propriedade especificada no segundo paramentro
 */

function removerPropriedade(objeto, propriedade) {
    const copia = Object.assign({}, objeto) //cria uma cópia superficial do objeto
    delete copia[propriedade]

    return copia
}

console.log(removerPropriedade({a:1, b: 2}, "a"))
console.log(removerPropriedade({id:20, nome: "caneta", descricao: "Não preenchido"}, "descricao"))