// Formas de importar/exporar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function elevar(a, b) {
  return a ** b;
}

export function factorial(a) {
  // Factorial de 5: 5 * 4 * 3 * 2 * 1
  let factorial = 1;
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}
export const nombre = "matematicas";
