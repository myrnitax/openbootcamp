// async function resolveAfter5() {
//     setTimeout(() => {console.log("Hola soy una promesa");
//     },5000);
// }
// if(typeof resolveAfter5 === 'function') {
//     resolveAfter5();
// }

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
