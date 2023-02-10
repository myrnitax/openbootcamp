// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy (done)
// - La fecha de tu nacimiento (done)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento (done)
// - Una variable que contenga el día de tu nacimiento (done)
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)(done)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos) (done)

const fecha = new Date();
console.log(new Date());

const fecha2 = new Date(1987, 10, 23);
console.log(fecha2);

const masTarde = fecha > fecha2;
console.log(masTarde);

const dateOfBirth = fecha2.getDate();
console.log(dateOfBirth);

const monthOfBirth = fecha2.getMonth() + 1;
console.log(monthOfBirth);

const yearOfBirth = fecha2.getFullYear();
console.log(yearOfBirth);
