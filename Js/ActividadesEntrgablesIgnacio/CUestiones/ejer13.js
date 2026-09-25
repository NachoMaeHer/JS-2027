/**Crea una función tablaMultiplicar(n) que recibe un parámetro, n. La función escribirá en la consola la tabla de multiplicar de n de 1 a 10. Si n no es un número, escribirá un texto indicando el error. */
function tablaMultiplicar(n) {
  if (typeof n !== "number") {
    console.log("El parámetro no es un número");
    return;
  }
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}
