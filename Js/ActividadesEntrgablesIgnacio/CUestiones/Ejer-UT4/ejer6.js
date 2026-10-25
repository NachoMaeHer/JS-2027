function almacenarEntrada() {
  let arr = [];
  let comprobacion = false;
  do {
    comprobacion = false;
    let respuesta = prompt("Dime un número");
    if (!isNaN(+respuesta) && respuesta != null && respuesta != "") {
      arr.push(respuesta);
      comprobacion = true;
    }
  } while (comprobacion);
  return arr;
}
console.log(almacenarEntrada());
