
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//client http
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario  = (func, funcAtual) => {
    return func.salario < funcAtual ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)


    //mullher chinesa com menor salario

    const func = funcionarios
                .filter(chineses)
                .filter(mulheres)
                .reduce(menorSalario)

                console.log(func)

})
