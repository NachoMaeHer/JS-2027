function detectaErrorCritico(cadena) {
  cadena = cadena.toLowerCase();
  return cadena.startsWith("error") || cadena.endsWith("critico");
}

/** Correción:
 * function detectaErrorCritico(cadena) {
 * cadena = cadena.toLowerCase();
 * let critico = false;
 *  if(cadena.startsWith("error") || cadena.endsWith("critico")){
 *      critico = true;
 *  } else critico = false;
 *  return critico;
 * }
 *
 * console.log(detectaErrorCritico("Error: HOLA HOLA Adios HOLA"));
 */
