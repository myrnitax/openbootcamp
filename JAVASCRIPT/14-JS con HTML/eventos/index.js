const hTexto = document.getElementById("h-texto")

console.log(hTexto)

//vinculando a un evento: 
hTexto.addEventListener("cambioTexto", evento => { // dentro del () 
    //1-"String": nombre del evento "cambioTexto", 
    //2-funcion callback toma parametros de los detalles del " evento"
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})
//Creacion del evento con funcion para lanzarlo:
function cambiarTexto(nuevoTexto, color) { 
    const evento = new CustomEvent("cambioTexto", {  //1 
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}
//1 crear evento nuevo dentro de const evento con operador new CustomEvent 
//customEvent toma dos parametros: 
//a. Parametro CambioTexto que vincula a hTexto a traves del nombre
//b. objeto con atributo detail y dentro de detail los atributos que queramos:
//texto: nuevoTexto y color