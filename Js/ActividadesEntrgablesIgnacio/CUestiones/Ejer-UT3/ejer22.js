function faltaCumple(dia, mes) {
  const hoy = new Date();
  let proximoCumple = new Date(hoy.getFullYear(), mes - 1, dia);
  if (proximoCumple < hoy) {
    proximoCumple.setFullYear(proximoCumple.getFullYear() + 1);
  }
  const diffTime = proximoCumple - hoy;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  console.log(
    `Faltan ${diffDays} días y ${diffHours} horas para tu cumpleaños.`,
  );

  console.log("Años en que tu cumpleaños cae en domingo:");
  for (let year = proximoCumple.getFullYear(); year <= 2100; year++) {
    let cumple = new Date(year, mes - 1, dia);
    if (cumple.getDay() === 0) {
      console.log(year);
    }
  }
}

console.log(faltaCumple());
