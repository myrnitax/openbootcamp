let listaCompra = ["Leche", "Garbanzos", "Mani", "Liceo", "Agua"];
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.pop("Aceite de Girasol");
console.log(listaCompra);

const peliFav = [
  {
    titulo: "Interestelar",
    director: "Christopher Nolan",
    fecha: new Date("2014 11 07"),
  },
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    fecha: new Date("2010 01 01"),
  },
  {
    titulo: "In time",
    director: "Christopher Nolan",
    fecha: new Date("2011 12 02"),
  },
  {
    titulo: "titanic",
    director: "James Cameron",
    fecha: new Date("1998 01 08"),
  },
  {
    titulo: "Parque jurasico",
    director: "Steven Spielberg",
    fecha: new Date("1993 09 30"),
  },
];
const fechaPeli = peliFav.filter(
  (peliFav) => peliFav.fecha > new Date("2010 01 01")
);
console.log(fechaPeli);

const direct = peliFav.map((pelidirector) => {
  return pelidirector.director;
});
console.log(direct);

const tituloOrig = peliFav.map((peliTit) => {
  return peliTit.titulo;
});
console.log(tituloOrig);

const dirTit1 = direct.concat(tituloOrig);
console.log(dirTit1);

const dirTit2 = [...direct, ...tituloOrig];
console.log(dirTit2);
