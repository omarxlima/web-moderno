
const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}


const caminho = path.join(__dirname, '_dados.txt')
lerArquivo(caminho)
            .then(conteudo => conteudo.split('\n'))
            .then(linhas => linhas.join(', ')) //[1] segundo arquivo || quantos linhas tenho nesse arquivo .length || separar por virgula
            .then(conteudo => `O valor final é : ${conteudo}`)
            .then(console.log)