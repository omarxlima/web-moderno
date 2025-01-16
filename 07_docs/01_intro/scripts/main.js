//example01

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Olá mundo!";

// alert("olá!")

//example 02

// document.querySelector("html").addEventListener("click", function(){
//     alert("Pare de me cutucar!")
// })

// document.querySelector("html").addEventListener("click", () => {
//     alert("Pare de me cutucar")
// })

// const myImage = document.querySelector('img')

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src")
//     if(mySrc === "images/icon.png"){
//         myImage.setAttribute("src", "images/firefox.jpeg")
//     }else {
//         myImage.setAttribute("src", "images/icon.png")
//     }
// }

//example 03

// let myButton = document.querySelector("button")
// let myHeading = document.querySelector("h1")

// function setUserName() {
//     const myName = prompt("Por favor, digite o seu nome:")
//     localStorage.setItem("name", myName)
//     myHeading.textContent = `Bem vindo! ${myName}`
// }

// if(!localStorage.getItem("name")){
//     setUserName()
// }else{
//     const storedName = localStorage.getItem("name")
//     myHeading.textContent = `Bem vindo, ${storedName}`
// }

// myButton.onclick = () => {
//     setUserName()
// }

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome:");
    
    // Verificar se o nome não é nulo ou vazio
    if (myName && myName.trim() !== "") {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Bem-vindo, ${myName}!`;
    } else {
        // Caso o nome não seja válido, não altere o conteúdo
        alert("Nome inválido. Por favor, digite um nome.");
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem-vindo, ${storedName}!`;
}

myButton.onclick = () => {
    setUserName();
};
