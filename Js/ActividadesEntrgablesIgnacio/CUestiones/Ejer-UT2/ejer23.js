function binario(n) {
  let num = prompt("Introduce un número");
  if (!isNaN(num) && num > 0 && Number.isInteger(Number(num))) {
    num = Number(num);
    let binario = "";
    while (num > 0) {
      let resto = num % 2;
      binario = resto + binario;
      num = (num - resto) / 2;
    }
    console.log(binario);
  }
}
binario(10);
