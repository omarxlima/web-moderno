const sequencia = {
    _valor: 1, //convenção, dita como privada
    //javascript não aceita sobrecarga, somente no get e set ele entente
    get valor() { return this._valor ++}, 
    set valor(valor) {
        if(valor > this._valor){//fazer uma validação (por exemplo)
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)