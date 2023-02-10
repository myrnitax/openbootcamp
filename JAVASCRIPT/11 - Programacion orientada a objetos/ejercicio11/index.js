// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// - Crea una nueva instancia de "Estudiante"
// - Haz la llamada al método obtenDatos

//---------------------------//---------------------------//---------------------------//

//Solucion del Ejercicio:// Crea un nuevo fichero JS que contenga las siguientes líneas:
class Estudiante {
  // - Una clase llamada "Estudiante"
  nombre = "myrna"; // - Una variable llamada nombre
  asignaturas = ["Javascript", "HTML", "CSS"]; // - Otra variable lista llamada asignaturas
  //con 3 asignaturas: Javascript, HTML, CSS

  obtenDatos() {
    // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}
const estudiante = new Estudiante(); // - Crea una nueva instancia de "Estudiante"
console.log(estudiante.obtenDatos()); // - Haz la llamada al método obtenDatos
