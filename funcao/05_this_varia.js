//this pode variar
//forma de referenciar o objeto atual 
//acessar ao dono do codigo executado naquele contexto

//função arrow - mais enxuta

const f3 = () => console.log(this === window)
document.getElementsByName('body')[0].onclick = f3

