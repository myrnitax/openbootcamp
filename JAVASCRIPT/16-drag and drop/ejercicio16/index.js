// obteniendo los parrafor arrastables (.para clase) (#para id)
const parrafos = document.querySelectorAll(".parrafo")

const secciones = document.querySelectorAll(".seccion") //con esto se obtienen todos los elementos de
//este documento con clase seccion (div en html)

// colocando los eventos: dragstart es el evento
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText) //Innertext para ver en inspeccionar el evento
        parrafo.classList.add("dragging") // se trabajo el opacitty de .parrafo.draggin en styles.css
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => { //Escuchador de evetos, escucha dragover
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto, ver en documentacion de ultima nota
        //dataTransfer: transferir informacion, datatransfer con id
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => { //cuando sueltas algo fuera del elemento con esto se establece un evento
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo) //pasar un parrafo a otro lugar al arrastrar, 
        //mueve el elemento a nuevo lugar
        seccion.appendChild(parrafo)
    })
})

//revisar la documentacion de datatransfer para ver propiedades aqui:
//https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer

const papelera = document.querySelector(".papelera") //Declarando la constante

papelera.addEventListener("dragover", event => { //creando el evento arrastrar
    event.preventDefault() //Previniendo el comportamiento por defecto
    event.dataTransfer.dropEffect = "copy" //Por defecto
})

papelera.addEventListener("drop", event => { //creando el evento soltar
    const id_parrafo = event.dataTransfer.getData("id") //creando la constante para la que creamos el evento
    document.getElementById(id_parrafo).remove() //creamos la accion remove
})