function obtenerFechaHace(fecha, dias) {
  const fechaCopia = new Date(fecha);
  fechaCopia.setDate(fechaCopia.getDate() - dias);
  return fechaCopia.getDate();
}

let date = new Date(2015, 0, 2);
alert(obtenerFechaHace(date, 1));
alert(obtenerFechaHace(date, 2));
alert(obtenerFechaHace(date, 365));
