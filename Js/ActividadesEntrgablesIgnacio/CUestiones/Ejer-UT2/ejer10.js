let edad = prompt("Introduce tu edad");
if (edad == "") console.log("No se ha introducido nada.");
else if (isNaN(edad)) console.log("Introduce un número.");
else if (edad === null) console.log("Operción cancelada");
else if (edad <= 0) console.log("Introduce un número mayor a 0");
else {
  if (edad > 14 && edad <= 90) console.log("true");
}
/**
 * --Correción del ejercicio 10--
 * function edad1(edad){
 *  return edad >= 14 && edad <= 90;
 * }
 *
 * let edad = 20;
 * console.log(edad + ":" + edad1(edad));
 * let edad = 14;
 * console.log(edad + ":" + edad1(edad));
 * let edad = 90;
 * console.log(edad + ":" + edad1(edad));
 * let edad = 1;
 * console.log(edad + ":" + edad1(edad));
 * let edad = 100;
 * console.log(edad + ":" + edad1(edad));
 */
