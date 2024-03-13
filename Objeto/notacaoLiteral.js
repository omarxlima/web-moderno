const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //não é mais necessário esse tipo de duplicidade
const obj2 = { a, b, c}
console.log(obj1, obj2)

//criar um atributo através de uma variável

const nomeAttr = 'nota'
const valorAttr = 7.5

const obj3 = {}
obj3[nomeAttr] = valorAttr

console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)

const obj5 = {
    falar1: function() {
        //..
    },
    falar2() {

    }
}
console.log(obj5)