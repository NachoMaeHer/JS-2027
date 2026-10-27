function camelize(str) {
  let palabras = str.split("-");
  for (let i = 0; i < palabras.length; i++) {
    // let letras = palabras[i].split("");
    // letras[0] = letras[0].toUpperCase();
    // palabras[i] = letras.join("");
    palbras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join("");
}
console.log(camelize("-background-color"));
