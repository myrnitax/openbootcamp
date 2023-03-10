// Formas de importar/exporar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function elevar(a, b) {
  return a ** b;
}

function factorial(a) {
  // Factorial de 5: 5 * 4 * 3 * 2 * 1
  let factorial = 1;
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

module.exports = {
  suma,
  resta,
  multiplicar,
  elevar,
  factorial,
};
