var variable;
let variableLet_;

// const constante;
const constante = "Hola soy una constante";
console.log(constante);
// constante = "Adios" no aplica el nuevo nombre adios porque es una constante no una variable

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  var variable = "Soy la segunda variable";
}

console.log(variable);

let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
  let variableLet = "Soy la segunda variable LET";
}

console.log(variableLet);

/////////////////////////

var num = 4;

console.log(typeof num);

num = "Hola soy num";

console.log(typeof num);
