const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',

]

//retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json) //converte um texto pra objeto
const apenasPreco = produto =>produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)