const persona = {
  nombre: "Myrna",
  edad: 35,
  isdDeveloper: true,
  saludo: function () {
    console.log("Hola");
  },
};
// console.log(persona);
persona.saludo();

const otra_persona = {
  nombre: "Manuel",
  edad: 38,
  isdDeveloper: false,
  saludo: function () {
    console.log("Hello");
  },
};

otra_persona.saludo();

const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre, // esto significaria nombre: nombre,
    edad,
    isDeveloper,
    saludo: function () {
      console.log("Hello");
    },
  };
};

const nueva_persona = creaPersona("juan", 23, true);
console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Maria", 44, false);
console.log(nueva_persona_2);
