let arr = ["Jazz", "Blues"];
let style = arr;
style.push("Rock-n-Roll");// agregamos rock
style[1] = "Classic"; // Reemplazar el valor en el medio por “Classics”
style.splice(0, 1);
style.splice(0, 0, "Rap");
style.splice(1, 0, "Reggae");
console.log(style);
//////////
let style = ["Jazz", "Blues"];
console.log(style);

style.push("Rock-n-Roll");
console.log(style);

let mitad = Math.floor(style.length / 2);
style[mitad] = "Classics";
console.log(style);

console.log(style.shift());
