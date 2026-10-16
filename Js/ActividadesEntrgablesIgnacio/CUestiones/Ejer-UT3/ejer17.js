function obtenerFechaHace(fecha, dias) {
  const fechaCopia = new Date(fecha);
  fechaCopia.setDate(fechaCopia.getDate() - dias);
  return fechaCopia.getDate();
}

let date = new Date(2015, 0, 2);
console.log(obtenerFechaHace(date, 1));
console.log(obtenerFechaHace(date, 2));
console.log(obtenerFechaHace(date, 365));

console.log(date.toLocaleDateString());
