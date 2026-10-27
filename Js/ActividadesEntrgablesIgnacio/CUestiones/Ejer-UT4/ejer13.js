console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

function ordenarPorEdad(array) {
  array.sort((a, b) => a.edad - b.edad);
}
let array = [
  { name: "John", edad: 25 },
  { name: "Pete", edad: 30 },
  { name: "Mary", edad: 28 },
];
ordenarPorEdad(array);
console.log();
