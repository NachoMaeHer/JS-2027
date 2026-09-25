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

/**
 * --Correción del ejercicio 12--
 * function edad2(edad){
 * if (edad < 0){
 *  return "Introduce un número mayor a 0";
 *  }
 * if (typeof edad !== "number"){
 *  return "La edad no es un número";
 *  }
 * if (edad <= 12){
 *  return "Niño";
 * }else if (edad <=25){
 *  return "Joven";
 * }else if (edad <= 60){
 *  return "Adulto";
 * }else {
 *  return "Jubilado";
 *  }
 * }
 *
 * console.log(edad2(10));
 * console.log(edad2(20));
 * console.log(edad2(30));
 * console.log(edad2(70));
 */
