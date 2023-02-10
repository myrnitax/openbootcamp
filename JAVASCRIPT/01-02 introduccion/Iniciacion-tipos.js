// Tipos Primitivos

// 1 number
4;

// string
("Hola mundo");
("Hola mundo");
`Hola mundo`;

// 2 booleanos
true;
false;

// 3 nulo y undefined
null;
undefined;

// 4 null, undefined, false, 0 ==>
// EJEMPLO PT 1 es false porque null aun no esta definido en este punto
console.log(null === undefined);

// EJEMPLO PT 2todas estas (null, undefined, false, 0) resultan en Falsy por eso en (else) se coloca automatico no cumple
if (null) {
  console.log("cumple");
  // Si cumple
} else {
  console.log("no cumple");
  // si no cumple
}

//EJEMPLO PT 3  null, undefined, false, 0 ==> todas las anteriores en esta linea son Falsy por eso con (true) coloca automatico cumple
if (true) {
  console.log("cumple");
  // Si cumple
} else {
  console.log("no cumple");
  // si no cumple
}
