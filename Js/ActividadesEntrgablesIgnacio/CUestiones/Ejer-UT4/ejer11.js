function ordenaDecreciente(array) {
  array.sort(function (a, b) {
    return b - a;
  });
}
let array = [5, 2, 1, -10, 8];
ordenaDecreciente(array);
console.log(array);
