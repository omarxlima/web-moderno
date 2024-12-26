//pessoa 123 -> {..}
const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'} // só pode atribuir uma vez constante

Object.freeze(pessoa) //congelar o objeto
pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)