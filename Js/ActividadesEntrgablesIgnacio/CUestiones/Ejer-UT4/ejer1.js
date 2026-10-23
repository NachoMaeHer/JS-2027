function contarLetras(cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return contador;
}

const contarLetras2 = (cadena, letra) => {
  letra = letra || "b";

  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return contador;
};

let dobleNumero = (numero) => numero * 2;
console.log(dobleNumero(5));
