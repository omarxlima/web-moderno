const produtos = [
    {nome: 'Notebook', preco: 2500, fragil:true},
    {nome: 'Ipad', preco: 5000, fragil:true},
    {nome: 'Copo de vidro', preco: 15, fragil:true},
    {nome: 'Copo de plastico', preco: 12, fragil:false},
]

// console.log(produtos.filter(function(p){
//     return p.preco > 10
// }))

const frageis = p => p.fragil 
const caros = p => p.preco >= 500

resultado = produtos.filter(frageis).filter(caros)

console.log(resultado)