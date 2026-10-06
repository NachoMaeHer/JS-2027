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
