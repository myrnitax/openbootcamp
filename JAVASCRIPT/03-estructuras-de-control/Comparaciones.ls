// Comparaciones

//Igualdad == debil === fuerte

if (5 == 5) {
  console.log("5 es igual a 5");
}
if (5 === 5) {
  console.log("5 es muy igual a 5 ");
}

let a = 5;
console.log(typeof a);
let b = 5;
console.log(typeof b);
let u = "5";
console.log(typeof u);

// == solo compara el valor
/// === compara el valor y el tipo

if (a == b) {
  console.log("a es igual a b - Debil");
}
if (a === b) {
  console.log("a es igual a b - Fuerte");
}
if (a == u) {
  console.log("a es igual a u"); // en a == c si compara porque compara el valor 5 y el string 5, no influye el tipo
}
if (a === u) {
  console.log("a es igual a u"); // en a === c no compara porque es un valor 5 y un (tipo) string al ser diferente no corre
}
let c = 4;
let d = 10;

if (c != d) {
  console.log("c es diferente a d (en valor) - Debil");
}
if (c !== d) {
  console.log("c es diferente a d (en valor y tipo) - Fuerte");
}

//Diferentes != debil !== fuerte
let z = 5;
let y = "5";

if (z != y) {
  console.log(
    "z es diferente a y (no se cumple en valor porque ambos son 5) - Debil"
  );
}
if (z !== y) {
  console.log(
    "z es diferente a y (Se cumple en valor y tipo son diferentes) - Fuerte"
  );
}

//Comparaciones Mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min");
}
if (max >= 10) {
  console.log("max es mayor que min");
}
if (min < max) {
  console.log("min es menor que max");
}
if (min <= max) {
  console.log("min es menor o igual que max");
}
