const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //nao pode atribuir mais nada
pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //Raikkonen

const algunsPilotos = pilotos.slice(2) //novo array com um pedaço do array
console.log(algunsPilotos)