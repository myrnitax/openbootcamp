const boton = document.querySelector(".click-button")

console.log(boton)

boton.addEventListener("click", () => {
    alert("Click en el boton")
})

$(".click-button").click('click', function() {
    console.log("Hola, estoy utilizando JQuery");
})