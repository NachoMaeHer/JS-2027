function factorial(n) {
  if (n !== null) {
    n = Number(n);
    if (Number.isInteger(n) && n >= 0) {
      let factorial = 1;
      for (let i = 1; i <= n; i++) {
        factorial *= i;
      }
      console.log(`${n}! = ${factorial}`);
    }
  }
}
factorial(5);
