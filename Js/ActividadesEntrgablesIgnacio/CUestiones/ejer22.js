function fibonacci(n) {
  let Fib = prompt("Introduce un número entero positivo");
  let sum1 = 0;
  let sum2 = 1;
  if (Fib >= 0 && Number.isInteger(Number(Fib)) == true) {
    console.log(sum1);
    console.log(sum2);
    for (let i = 2; i <= Fib; i++) {
      let siguiente = sum1 + sum2;
      console.log(siguiente);
      sum1 = sum2;
      sum2 = siguiente;
    }
  }
}
fibonacci(10);
