Array.prototype.forEach2 = function(callback) { 
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) //valor atual, indice, array completo
    }
}



const aprovados = ['Alice', 'Aldo', 'Daniel', 'Marques']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

