const quaseArray = {0: 'Pedro', 1: 'João', 3: 'Maria'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Pedro', 'João', 'Maria']
console.log(quaseArray.toString(), meuArray)