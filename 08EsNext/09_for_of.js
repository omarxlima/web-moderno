for(let letra of "Karl") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

for(let i in assuntosEcma) {
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {abordado:true}],
    ['Set', {abordado: true}],
    ['Promise', { abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}

for(let[ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const letras = new Set(['a', 'e', 'i', 'o', 'u'])

for(let letra of letras){
    console.log(letra)
}