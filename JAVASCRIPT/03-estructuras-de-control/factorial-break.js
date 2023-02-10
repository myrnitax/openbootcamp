let i = 1;
let fact = 10;

while (true) {
  if (i < 10) {
    fact *= i;
    i++;
  } else {
    break;
  }
}
console.log(fact);
