/* 
Desenvolva uma função que recebe dois paramentros, um é a quantidade de horas trabalhadas por um funcionario
por mes, e quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a RS X", em que X 
é quanto o funcionário ganhou no mês 
*/

function calcularSalario(horasTrabalhadas, SalarioHora) {
    return  `Salário igual a R$ ${horasTrabalhadas * SalarioHora}`   
}

console.log(calcularSalario(150, 40.5))