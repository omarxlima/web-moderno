//usando a notação literal

const obj1 = {}
console.log(obj1)

//Object em JS -- funçao construtora
console.log(typeof Object, typeof new Object)

//Funções construtoras
function Produto(nome,preco, desc) {
    this.nome = nome //atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase /30) * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 5000, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//objec.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"info" : "sou um JSON"}')
console.log(fromJSON)