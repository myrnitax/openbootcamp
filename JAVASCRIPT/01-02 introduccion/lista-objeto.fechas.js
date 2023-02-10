// lista, array o arreglo
const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index, 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "iphone",
  isWhite: false,
  contactos: ["myrna", "manolo", "mama", "mario"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: 32,
  },
  //los nombres de variables no pueden tener espacios
  //por esto se pueden declarar asi por ejemplo: "altura-tarjeta: 4"
};

console.log(movil);
console.log(movil.tarjeta);
console.log(movil.tarjeta.marca);

movil.anyo = 2019;
movil.marca = "Samsung";

console.log(movil.anyo);
console.log(movil.marca);

//fechas
// libreria de apoyo moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);
