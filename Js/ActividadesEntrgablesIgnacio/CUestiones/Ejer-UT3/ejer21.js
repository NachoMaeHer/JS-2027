function cuantoFalta(fecha) {
  const hoy = new Date();
  const diferencia = fecha - hoy;
  const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  return diasFaltantes;
}
