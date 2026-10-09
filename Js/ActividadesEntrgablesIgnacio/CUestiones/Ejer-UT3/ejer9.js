function palindromo(cadena) {
  let cad1 = "";
  let cad1reves = "";
  for (let i = 0; i < cadena.length; i++) {
    cad1 += cadena[i];
  }
  for (let i = cadena.length - 1; i >= 0; i--) {
    cad1reves += cadena[i];
  }
  return cad1 === cad1reves;
}

/**
 * "use strick";
 *
 * function palindromo(cadena){
 * let cadenaInvertida = "";
 * cadena = cadena.toLowerCase();
 *
 * for (let i = 0; i < cadena.length; i++) {
 *  if(cadena[i] === " "){
 *    cadena = cadena.replace(cadena[i], "");
 *
 *    }
 *  }
 *  for (let i = cadena.length - 1; i >= 0; i--) {
 *    cadenaInvertida += cadena[i];
 *  }
 *  return cadena === cadenaInvertida;
 * }
 *
 * console.log(palindromo("Anita lava la tina"));
 * console.log(palindromo("Ana lava lana"));
 * console.log(palindromo("Yo hago yoga hoy"));
 * console.log(palindromo("reconocer"));
 */
