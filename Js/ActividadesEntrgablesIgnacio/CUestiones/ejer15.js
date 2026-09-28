function horas30Minutos() {
  for (let hora = 9; hora <= 21; hora++) {
    for (let minutos = 0; minutos < 60; minutos += 30) {
      let minutosFormateados = minutos === 0 ? "00" : "30";
      console.log(hora + ":" + minutosFormateados);
    }
  }
}
horas30Minutos();

/**function horas30Minutos() {
  for (let hora = 9; hora <= 21; hora++) {
    let minutos = "30";

    console.log(hora + ":" + minutos);

    if (minutos == "30") {
      minutos == "00";
    } else if (minutos == "00") {
      minutos == "30";
    }

    if (minutos == "00") {
      hora++;
    }
  }
}
console.log(horas30Minutos());
*/
