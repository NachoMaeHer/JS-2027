function horas5Minutos() {
  for (let hora = 9; hora <= 21; hora++) {
    for (let minutos = 0; minutos < 60; minutos += 5) {
      let minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
      console.log(hora + ":" + minutosFormateados);
    }
  }
}
horas5Minutos();
/**function horas5Minutos()
 * let hora = 9;
 * let minutos = 0;
 * while (hora != 21 || minutos != 0
 *
 * ) {
 */
