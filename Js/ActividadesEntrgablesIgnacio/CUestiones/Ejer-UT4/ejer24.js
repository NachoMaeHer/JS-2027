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
