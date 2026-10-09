function extraeDatos(dir) {
  let subcadenas = dir.split(/[@:]/);

  return (
    "Usuario: " +
    subcadenas[0] +
    "\nDominio: " +
    subcadenas[1] +
    "\nPuerto: " +
    subcadenas[2]
  );
}

console.log(extraeDatos("usuario@dominio:puerto"));

/**
 * function extraeDatos(dir) {
 *  const arroba = dir.indexOf("@");
 *  const dosPuntos = dir.indexOf(":");
 *  const usuario = dir.substring(0, arroba);
 * }
 */
