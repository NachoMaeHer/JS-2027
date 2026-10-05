function extraerValorDolares(str) {
  let valor = str.slice(1);
  return parseFloat(valor);
}

/** Correción:
 * function extraerValorDolares(str) {
 * let dolars = str.split("$"); //let dolars = str.slice(1);
 * dolars = Number(dolars[1]);
 * console.log(dolars);
 * return dolars;
 * }
 * extraerValorDolares("$123");
 */
