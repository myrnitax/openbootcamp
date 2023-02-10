class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  } //Estos son los atributos de la clase
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
  } //Este es el metodo, que accede al comportamiento de la clase
} //Todo esto es la clase Persona

//This.palabra: Es una palabra reservada que sirve para llamar al atributo

const nueva_persana = new Persona("Myrna", 35, true); //aqui creamos un nuevo objeto de tipo persona con la
// palabra clave new y usa los atributos de la clase persona
console.log(nueva_persana);
nueva_persana.saludo();

let numero = 60; // inicializar tiene que ver con typeof
console.log(typeof numero);
let persona_2 = new Persona("Maria, 34, false"); // instanciar tiene que ver con instanceof que es para objetos
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona);

// instanceod -> Similar a typeof pero para clases
