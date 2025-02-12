//map (flexibilidade)

const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)