Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0;i < this.length; i++) {
       if(callback(this[i], i, this)) {
        newArray.push(this[i])
       }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2500, fragil:true},
    {nome: 'Ipad', preco: 5000, fragil:true},
    {nome: 'Copo de vidro', preco: 15, fragil:true},
    {nome: 'Copo de plastico', preco: 12, fragil:false},
]



const frageis = p => p.fragil 
const caros = p => p.preco >= 500

resultado = produtos.filter2(frageis).filter2(caros)

console.log(resultado)