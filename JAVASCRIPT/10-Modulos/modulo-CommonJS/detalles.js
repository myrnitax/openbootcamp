function factorial(a) {
  // Factorial de 5: 5 * 4 * 3 * 2 * 1
  let factorial = 1;
  for (let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(10));
// ------------------------------------------------------------------
// lo anterior se puede declarar de dos formas
// forma 1: Como se declaro antes: console.log(factorial(5))
// Forma 2:
// const fact = factorial(5)
// console.log(fact)
// ------------------------------------------------------------------
