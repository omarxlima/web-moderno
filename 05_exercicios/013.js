/**
 * crie uma função que receba um array de elementos e retorne um array somente com os numeros presentes no array recebido como parâmetro
 */

function filtrarNumeros(elementos) {
    return elementos.filter(item => typeof item === "number")
}

console.log(filtrarNumeros(["javascript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["a", "c"]))

//resolução 2

function filtrarNumeros2(array) {
    const result = []
    for(let item of array)
        if (typeof item === "number") {
            result.push(item)
        }
        return result
}

console.log(filtrarNumeros(["javascript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["a", "c"]))