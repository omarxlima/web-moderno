/**
 * Crie uma função que receba uma array e retorne o primeiro e o útimo elemento desse array como um novo array
 */



function receberPrimeiroEUltimoElemento(itens){
    const primeiro = itens.shift()
    const ultimo = itens.pop()

    return [primeiro, ultimo]
}

console.log(receberPrimeiroEUltimoElemento([7,14, "ola"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))