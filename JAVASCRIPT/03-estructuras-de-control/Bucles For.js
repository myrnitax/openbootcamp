//Bucles For
// for (inicializacion; condicion; actualizacion){} ejemplo:

// i = i + 1
// i += 1
// i ++

for (let i = 0; i < 10; i++) {
  // Esto es el bucle
  console.log(i);
}

let lista = [1, 3, 5, 2, 7, 9, 15, 12, 800];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2);
}

// Estructua for...of
for (let valor of lista) {
  console.log(valor);
}

// Estructura forEach
lista.forEach((valor) => {
  console.log(valor);
});

let persona = {
  nombre: "Myrna",
  apellido: "Alvarado",
  edad: 35,
  isDeveloper: true,
};
console.log(persona.nombre);

let prop = "edad";
// se declaro que prop es el valor que aparece en edad
console.log(persona[prop]);

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
