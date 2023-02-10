function* reduceId() {
  let id = 40;
  while (true) {
    id--;
    if (id === 30) return id;
    yield id; //Esperado hasta que se vuelva a llamar
  }
}

const gen = reduceId();

console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value); // true
console.log(gen.next()); // true
console.log(gen.next().value); // true
