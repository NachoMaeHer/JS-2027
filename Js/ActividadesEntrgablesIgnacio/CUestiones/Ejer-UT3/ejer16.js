function diaSemanaLocal(fecha) {
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return dias[fecha.getDay() - 1] ? dias[fecha.getDay() - 1] : 7;
}
