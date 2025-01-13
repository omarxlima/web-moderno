const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá mundo!";

alert("olá!")


// document.querySelector("html").addEventListener("click", function(){
//     alert("Pare de me cutucar!")
// })

document.querySelector("html").addEventListener("click", () => {
    alert("Pare de me cutucar")
})