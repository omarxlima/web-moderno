const fs = require('fs')

const produto = {
    nome: "celular",
    preco: 1549.99,
    desconto: 0.10
}


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})