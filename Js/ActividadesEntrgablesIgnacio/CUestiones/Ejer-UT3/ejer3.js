function truncar(str, maxLong) {
  if (str.length > maxLong) {
    return str.slice(0, maxLong - 1) + "…";
  } else {
    return str;
  }
}

/** Correción:
 * function truncar(str, maxLong) {
 *   if (str.length > maxLong) {
 *    let cambiado = str.slice(0, maxLong -1) + "…";
 *   } else {
 *     cambiado = str;
 *   }
 *   return cambiado;
 * }
 *
 * console.log(truncar("Hola, buenos días", 2));
 * console.log(truncar("Hola, buenos días", 18));
 */
