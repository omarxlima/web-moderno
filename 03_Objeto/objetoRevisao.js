//coleção dinânmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 500

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'fiat uno',
    valor: 89000,
    proprietario: {
        nome: 'Ronaldo',
        idade: 99,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 132
        }
    },
    condutores: [{
        nome: 'Pedro',
        idade: 60
    },{
        nome: 'Alice',
        idade: 15
    }],
    calcularValorSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av 21 de abril'

console.log(carro)