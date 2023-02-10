let str_nombre = "Myrna"
let str_apellido = "Alvarado"
let estudiante = str_nombre.concat(" ", str_apellido)
let estudiante1 = `${str_nombre} ${str_apellido}`
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

console.log(str_nombre)
console.log(str_apellido)
console.log(estudiante)
console.log(estudiante1)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudiante.trim().length)
console.log(str_nombre.charAt(0))
console.log(str_apellido.charAt(str_apellido.length - 1))
console.log(estudiante.replace(/\s+/g, ""))
console.log(estudiante.includes(str_nombre))
