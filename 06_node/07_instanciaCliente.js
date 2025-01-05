
const contadorA = require('./05_instanciaUnica')
const contadorB = require('./05_instanciaUnica')

const contadorC = require('./06_instanciaNova')()
const contadorD = require('./06_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)