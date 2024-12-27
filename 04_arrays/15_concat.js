//concatenar varios arrays

const filhas = ['Maria', 'Joaquina']
const filhos = ['Igor', 'Joaquin']

const todos = filhas.concat(filhos, 'Cicrano')
console.log(todos, filhas, filhos)

console.log(['a', 'b'].concat([1,2], [3,4], 5, [[6,7]]))