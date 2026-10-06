function bonoloto() {
  let combinacionGanadora = [];
  while (combinacionGanadora.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;
    if (!combinacionGanadora.includes(numero)) {
      combinacionGanadora.push(numero);
    }
  }
  let complementario = Math.floor(Math.random() * 49) + 1;
  while (combinacionGanadora.includes(complementario)) {
    complementario = Math.floor(Math.random() * 49) + 1;
  }
  let reintegro = Math.floor(Math.random() * 10);
  console.log("Combinación ganadora:", combinacionGanadora);
  console.log("Complementario:", complementario);
  console.log("Reintegro:", reintegro);
}
