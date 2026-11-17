class Vehiculos {
  constructor(color, marca, modelo, vmax) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.vmax = vmax;
  }
  comenzar() {
    console.log("Encender motor");
  }
  parar() {
    console.log("Apagar motor");
  }
  distanciaMax(tiempo) {
    return this.vmax * tiempo;
  }
}
/**Correción
 * class Vehiculos {
  constructor(vmax = 150) {
    this.vmax = vmax;
  }
  this.comenzar = function() {
    console.log("Encender motor");
  }
  this.parar = function() {
    console.log("Apagar motor");
  }
  distanciaMax(tiempo) {
    return this.vmax * tiempo;
  }
}
 */

/**=========== Esto es dek ejercicio 27 que extiende del 24 ============ */
class Coche extends Vehiculo {
  constructor(color, marca, modelo) {
    super(color, marca, modelo, 120);
  }
  comenzar() {
    console.log("Encender motor");
  }
  parar() {
    console.log("Aparcar");
  }
  distanciMax;
}

class Avion extends Vehiculo {
  constructor(color, marca, modelo) {
    super(color, marca, modelo, 40000);
  }
  comenzar() {
    console.log("Despegar");
  }
  parar() {
    console.log("Aterrizar");
  }
  distanciMax;
}
