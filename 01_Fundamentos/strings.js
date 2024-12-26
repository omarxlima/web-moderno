const escola = "Cod3r"
console.log(escola.charAt(4)) //caracter
console.log(escola.charCodeAt(3)) //codigo do caractere
console.log(escola.indexOf('3')) //index do caractere
console.log(escola.substring(1))
console.log(escola.substring(0 , 3))


console.log('Escola ' .concat(escola) .concat("!")) //concatenar
console.log('Escola ' + escola + "!") //concatenar

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))