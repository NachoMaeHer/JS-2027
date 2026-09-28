function primos(n) {
  console.log(`Números primos entre 2 y ${n}:`);
  for (let i = 2; i <= n; i++) {
    let esPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) console.log(i);
  }
}
primos(10);
