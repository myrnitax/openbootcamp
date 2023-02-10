// Carga y sobrecarga de funciones
function saludar() {
  saludo();
}

function saludo() {
  console.log("Hola! Soy la función hola()");
}

saludar();

// Ejercicio mio
function despedir() {
  adiosito();
}
function adiosito() {
  console.log("Aqui es donde me despido!");
}
despedir();

/// 1. global()
/// 2. saludar() global()
/// 3. saludo() saludar() global()
/// 4. saludar() global()
/// 5. global()

// Sobrecarga funcion recursiva porque se hace referencia a si misma: No tiene fin...
// function recursivo() {
//     recursivo() ERROR: Maximun call stack size exceded
// }

// recursivo()
