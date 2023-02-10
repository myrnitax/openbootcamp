
//LOCALSTORAGE:

// localStorage.setItem("nombre", "Myrna")
// localStorage.setItem("nombre", "Manuel")

// console.log(localStorage.getItem("nombre")) //Asi se pasa el nombre
// localStorage.setItem("persona", JSON.stringify({nombre: "Myrna", edad: "35"}))
// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

// localStorage.removeItem("nombre") //Asi eliminamos el nombre

//SESIONSTORAGE

sessionStorage.setItem("nombre-sesion", "MYRNA")

/* Cookies */

document.cookie = "nombreCookie=MyrnaCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)
