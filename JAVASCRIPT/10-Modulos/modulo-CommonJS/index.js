// Formas de importar/exporar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

// ------------------------------------------------------------------
// --------------TRABAJANDO CON MODULOS SE UTILIZA ASI:--------------
// ------------------------------------------------------------------

// const moduloMatematicas = require("./matematicas.js");
// ASI FUNCIONARIA ESTE MODELO: const sum = moduloMatematicas.suma(12, 90);
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma);

// OTRO MODELO PARA DECLARAR:
const { factorial, suma } = require("./matematicas.js");

// console.log(moduloMatematicas.factorial(5)); NO NECESARIO PARA ESTE CASO
const fact = factorial(5);
console.log(fact);

// console.log(moduloMatematicas.suma(12, 90)); NO NECESARIO
const sum = suma(12, 90);
console.log(sum);

// ------------------------------------------------------------------
// --------------TRABAJANDO SIN MODULOS SE UTILIZA ASI:--------------
// ------------------------------------------------------------------

// ELEVAR:
// console.log(factorial(5));
// ------------------------------------------------------------------
// lo anterior se puede declarar de dos formas
// forma 1: Como se declaro antes: console.log(elevar(5))
// Forma 2:
// const elev = elevar(10, 3)
// console.log(elev)

// FACTORIAL:
// console.log(factorial(5));
// ------------------------------------------------------------------
// lo anterior se puede declarar de dos formas
// forma 1: Como se declaro antes: console.log(factorial(5))
// Forma 2:
// const fact = factorial(5)
// console.log(fact)

// SUMA:
// console.log(suma(12, 90));
// ------------------------------------------------------------------
// const sum = suma(a, b);
// console.log(sum);

// console.log(module);
