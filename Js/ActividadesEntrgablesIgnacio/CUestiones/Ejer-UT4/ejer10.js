function filterRanger(arr, a, b) {
  let nuevoArray = [];
  arr.forEach((valor) => {
    if (valor >= a && valor <= b) {
      nuevoArray.push(valor);
    }
  });
  let arr = [4, 8, 3, 7, 9, 2];
}

console.log(filterRanger(arr, 3, 5));
console.log(arr);
