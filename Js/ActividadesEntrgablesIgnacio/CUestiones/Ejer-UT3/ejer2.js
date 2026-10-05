function comprobarSpam(str) {
  let strLower = str.toLowerCase();
  return strLower.includes("gratis") || strLower.includes("xxx");
}

/** Correción:
 * function comprobarSpam(str) {
 * let strLower = str.toLowerCase();
 *  return strLower.includes("gratis") || strLower.includes("xxx");
 * }
 * let palabra = "gratis";
 * console.log(comprobarSpam(palabra));
 * console.log(comprobarSpam("xxx"));
 * console.log(comprobarSpam("gratis"));
 */
