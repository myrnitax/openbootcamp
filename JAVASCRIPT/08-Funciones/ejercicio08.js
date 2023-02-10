function verdadero() {
  return true;
}
console.log(verdadero());

async function resolveAfter5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Hola soy una promesa"));
    }, 5000);
  });
}
if (typeof resolveAfter5 === "function") {
  resolveAfter5();
}

function* resultadosPares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

const gen = resultadosPares();
