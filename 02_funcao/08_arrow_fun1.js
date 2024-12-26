//arrow function 01
//this associado a um contexto

//funcao normal

let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  //funçao de uma linha - retur


console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá!'
}

ola = () => 'Olá!'
