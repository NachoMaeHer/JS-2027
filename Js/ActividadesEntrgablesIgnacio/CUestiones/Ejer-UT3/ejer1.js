function inicialMay(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Correción:
 *
 * let cadena = "me llamo Ignacio";
 * function inicialMay(str) {
 *  return '${str.charAt(0).toUpperCase()}${str.slice(1)}';
 * }
 *
 * inicialMay(cadena);
 */
