function tablaMultiplicar(n) {
  if (typeof n !== "number") {
    console.log("El parámetro no es un número");
    return;
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
