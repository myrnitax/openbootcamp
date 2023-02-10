// Trabajando con Objetos
const myrna = {
  nombre: "Myrna",
  apellido: "Alvarado",
  edad: 35,
  altura: 1.59,
  eresDesarrollador: true,
};
console.log(myrna.edad);
console.log(myrna);

const lista = [
  {
    ...myrna,
  },
  {
    nombre: "Karla",
    apellido: "Pereira",
    edad: 33,
    altura: 1.62,
    eresDesarrollador: false,
  },
  {
    nombre: "Patricia",
    apellido: "Becerra",
    edad: 34,
    altura: 1.6,
    eresDesarrollador: false,
  },
];
console.log(lista);

const lista3 = lista.sort((a, b) => -a.edad + b.edad);
console.log(lista3);

const lista4 = lista.sort((a, b) => b.edad - a.edad);
console.log(lista4);
