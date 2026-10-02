function extraerValorEuros(str) {
  let valor = str.slice(0, -1);
  return parseFloat(valor);
}
