let edades = prompt("Introduce tu edad");
if (edades == "") console.log("No se ha introducido nada.");
else if (isNaN(edades)) console.log("Introduce un número.");
else if (edades === null) console.log("Operción cancelada");
else if (edades <= 0) console.log("Introduce un número mayor a 0");
else {
  if (edades > 0 && edades <= 12) console.log("Niño");
  else if (edades > 12 && edades <= 26) console.log("Joven");
  else if (edades > 26 && edades <= 60) console.log("Adulto");
  else if (edades >= 60) console.log("Jubilado");
}
