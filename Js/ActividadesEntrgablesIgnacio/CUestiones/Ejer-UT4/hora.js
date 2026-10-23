function calcularHora() {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  return hora + ":" + minutos + ":" + segundos;
}
setInterval(() => {
  campo.value = calcularHora();
}, 1000);

let campo = document.getElementById("hora");
campo.value = calcularHora();
