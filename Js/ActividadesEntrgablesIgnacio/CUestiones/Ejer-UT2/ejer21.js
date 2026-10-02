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

/**
 * function factorial(n) {
 *  if (n === 0 || n ===1) {
 *   return 1;
 *  } else {
 *   return n * factorial(n - 1);
 *  }
 * }
 *
 * console.log(factorial(5)); // Output: 120
 * console.log(factorial(0)); // Output: 1
 * console.log(factorial(1)); // Output: 1
 * console.log(factorial(6)); // Output: 720
 */
