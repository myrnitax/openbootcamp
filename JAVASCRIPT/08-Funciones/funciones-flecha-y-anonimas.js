// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92];

// Esta forma esta bien pero deberiamos utilizar las opciones tipo flecha
// (la funcion anonima es la que se define aqui dentro del map) --->
// const array2 = array.map(function(valor) {
//     return valor * 2
// })
// // console.log(array2) [2 ,10, 12, 4, 14, 24, 16, 184]

// Funcion de tipo flecha:
const array2 = array.map((valor) => valor * 2);
console.log(array2);

//
const dobleDelValor = (valor) => valor * 2;

console.log(doble(6));
console.log(dobleDelValor(6));

const array3 = array.map(dobleDelValor);

console.log(array3);

function doble(valor) {
  return valor * 2;
}
