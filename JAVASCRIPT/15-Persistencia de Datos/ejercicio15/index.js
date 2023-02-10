var nombre = "Myrna"
var apellido = "Alvarado"

var objeto = {
    nombre,
    apellido
}

// sessionStorage.setItem("objeto", JSON.stringify(objeto))
// localStorage.setItem("objeto", JSON.stringify(objeto))

const caduca = new Date()
// document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(caduca.getTime() + 2 * 60000)}`