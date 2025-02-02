// ES8: Object.values/Object.entries (uma matriz)

const obj = {a:1, b:2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


//Melhorias na Notação Literal

const nome = 'Karl'
const pessoa = {
    nome,
    ola(){
        return 'Oi pessoal!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class 

class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())