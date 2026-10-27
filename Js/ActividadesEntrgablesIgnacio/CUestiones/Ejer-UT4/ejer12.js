function copiaOrdenada(arr) {
  let copia = arr.slice();
  copia.sort();
  return copia;
}

let arr = ["HTML", "CSS", "JavaScript"];
let arrOrdenado = copiaOrdenada(arr);
console.log(arr); // HTML,CSS,JavaScript
console.log(arrOrdenado); // CSS,HTML,JavaScript
