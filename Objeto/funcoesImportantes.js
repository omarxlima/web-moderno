const pessoa = {
    nome: 'Alice',
    idade: 10,
    peso: 30
}

// console.log(Object.keys(pessoa)) //pegar as chaves de um objeto
// console.log(Object.values(pessoa)) //pegar os valores de um objeto
// console.log(Object.entries(pessoa)) //pegar chave valor de um objeto

Object.entries(pessoa).forEach(([chave, valor]) => { //desistruturando os elementos de um array
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/03/2024'
}) //ficara ou nao visivel, primeiro o target
pessoa.dataNascimento = '01/01/2010' //nao aceita sobrescrita, funciona como freeze

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object.assign (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}

const obj = Object.assign(dest,o1, o2) //concatena com o dest e sobrescreve 
console.log(dest)

Object.freeze(obj)
obj.c = 1324
console.log(obj)