//nao aceita repetição / nao indexada

const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Palmeiras').add('Corinthias')
times.add('São Paulo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)