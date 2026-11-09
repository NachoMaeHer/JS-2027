let salaries = {
  Juan: 100,
  Pedro: 300,
  Marta: 250,
};

let sum = 0;
for (let valor in salaries) {
  sum += salaries[valor];
}
console.log(sum);
