const aprovados = ['Alice', 'Aldo', 'Daniel', 'Marques']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibiraprovados)