//$(Selector).accion() ejemplo: $("li").hide()

// $("li").hide()

//podemos usar cuando queramos jquery pero es mejor pasar el 
//docuent ready desde un comienzo para no tener problemas 
//de api find por no estar toda cargada
//Una forma de hacerlo:
// $(document).ready(() =>{
// } )

//Forma simplificada:
$(() => {

    //Seleccionar (selector): id="el-1" asi=> "#el-1"
    //Selector (si fuera una clase en vez de un id) asi=> ".el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(()=>{
        // $("h1").hide() otra manera en siguiente linea
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        // $("h1").show() otra manera en siguiente linea
        $("h1").fadeIn()

    })
    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })

    $(".new-element").click(() => { 
        // $("ul").append("<li>New Element</li>") //append agrega al final
        $("ul").prepend("<li>New Element</li>") //preppend agrega al inicio
    })

    $("li").mouseenter((elem) => { //mouseenter para hacer hover color
        elem.target.style.color = "blue" //al usar elem.target estamos usando javascript nativo no jquery
    })
    $("li").mouseleave(elem => { //mouseleave para eliminar hover al quitar el cursor del elemento
        elem.target.style.color = "black"
    })

})