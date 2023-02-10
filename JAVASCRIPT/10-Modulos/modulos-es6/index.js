// EJEMPLO 1 -------------------------------------------------------------------------
// import { suma, elevar, nombre } from "./modulos/matematicas.js"; ESTA ES UNA MANERA

// const sum = suma(10, 8);
// console.log(sum);

// const potencia = elevar(2, 33);
// console.log(potencia);

// console.log(nombre);
// -------------------------------------------------------------------------------------

// EJEMPLO 2: -------------------------------------------------------------------------

import * as moduloMatematicas from "./modulos/matematicas.js";
// import getAutor from "./literatura.js"; dolo puede haber 1 import default en cada archivo
import getAutor, { libro } from "./literatura.js";

const sum = moduloMatematicas.suma(10, 8);
console.log(sum);

const potencia = moduloMatematicas.elevar(2, 33);
console.log(potencia);

console.log(moduloMatematicas.nombre);

console.log(getAutor());
console.log(libro);
