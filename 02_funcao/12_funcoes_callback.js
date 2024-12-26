//funções de callback
//padrao de projeto observer = callback

//passa a função e ele chama de volta

const fabricantes = ["mercedes", "audi", "Bmw"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

//pode ser chamada varias vezes ou uma unica vez
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) {
  console.log(fabricante)
})