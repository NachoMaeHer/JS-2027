function contarLetra(cad, letra) {
  let contador = 0;
  for (let i = 0; i < cad.length; i++) {
    if (cad[i] === letra) {
      contador++;
    }
  }
  return contador;
}
console.log(contarLetra("Hola, buenos días", "a"));

/**Corección:
 * "use strickt";
 * function contarLetra(cad, letra) {
 * let contador = 0;
 * for (let i = 0; i < cad.length; i++) {
 *   if (cad[i] === letra) {
 *     contador++;
 *   }
 *  }
 *  return contador;
 * }
 *   console.log(contarLetra("Hola, buenos días", "a"));
 */
