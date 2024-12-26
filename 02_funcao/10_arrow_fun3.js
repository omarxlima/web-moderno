//arrow function 03
//this associado a um contexto léxico

let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //arrow function -- objeto nao consegue mudar a referencia
comparaComThisArrow(module.exports)

