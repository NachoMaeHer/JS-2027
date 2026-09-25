function horas30Minutos() {
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
