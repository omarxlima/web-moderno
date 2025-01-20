

function simpleArraySum(arr) {
    let resultado = 0;
    for (let index = 0; index < arr.length; index++) {
        resultado += arr[index]    
    }
    return resultado
}

let arr = [1, 2, 3];
console.log(simpleArraySum(arr)); //Saída: 6