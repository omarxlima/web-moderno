console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

carros = ['Palio', 'Gol', 'Bmw']
console.log(carros[0])
console.log(carros[1])
console.log(carros[2])
console.log(carros[3]) //undefined

//adicionando
carros[3] = 'Uno'
carros.push('Hb20') //adiciona
carros[9] = 'Creta'
console.log(carros.length)
carros.sort() //altera o array, ordenando
console.log(carros)

//excluindo

delete carros[1]
console.log(carros[1])
console.log(carros[2])

// aprovados.splice(1,2)
//adicionando itens sem excluir
aprovados.splice(1,0, 'Elemento1', 'Elemento2') //adicionar e remover elementos

console.log(aprovados)


