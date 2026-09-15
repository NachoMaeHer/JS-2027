for (let i = 1; i <= 100; i++) {
  let mensaje = "El ${i}";

  if (i % 2 == 0) {
    mensaje += " es multiplo de 2";
  }

  if (i % 3 == 0) {
    if (i % 2 == 0) {
      mensaje += "  y";
    }
    mensaje += " es multiplo de 3";
  }
  console.log(mensaje);
}
