function ultimoDiaMes(anno, mes) {
  const fecha = new Date(anno, mes + 1, 0);
  return fecha.getDate();
}
alert(ultimoDiaMes(2012, 2));
