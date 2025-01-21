// setTimeout(function(){
//     console.log('Executando callback...')
//     setTimeout(function(){
//         console.log('Executando callback 2...')
//             setTimeout(function(){
//                 console.log('Executando callback3...')
//             },2000)
//     }, 2000)

// },2000) //2 segundos


function espararPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

espararPor()
        .then(() => espararPor())
        .then(espararPor)