function multiplos() {
  console.log("LISTADO DE NÚMEROS DEL 1 AL 100");
  for (let i = 1; i <= 100; i++) {
    let mensaje = i;
    if (i % 2 === 0 && i % 3 === 0) {
      mensaje += " es múltiplo de 2 y es múltiplo de 3";
    } else if (i % 2 === 0) {
      mensaje += " es múltiplo de 2";
    } else if (i % 3 === 0) {
      mensaje += " es múltiplo de 3";
    }
    console.log(mensaje);
  }
}
