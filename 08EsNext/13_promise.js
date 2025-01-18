let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    // cumprirPromessa({
    //     x:3,
    //     y:4
    // }) //sempre devolve um valor
    cumprirPromessa([
        'Maria', 'João', 'Pedro'
    ])
})

console.log(typeof p)

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

function letraMinuscula(l){
    return l.toLowerCase()
}

p.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(letraMinuscula => console.log(letraMinuscula))