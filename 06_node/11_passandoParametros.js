// argumento variavel

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa Semana ${nome}!`)
}