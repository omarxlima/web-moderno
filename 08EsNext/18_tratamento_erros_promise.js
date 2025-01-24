const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }
        return resolve(valor)
    })
}

funcionarOuNao('Testando...', 0.5)
            .then(valor => console.log(valor))
            .catch(err => console.log('Deu erro!'))