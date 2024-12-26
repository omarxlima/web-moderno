//arrow function 02
//this associado a um contexto léxico


function Pessoa(){
    this.idade = 0

  setInterval(()=> {
    this.idade ++
    console.log(this.idade)
  }, 1000)
}


 new Pessoa
