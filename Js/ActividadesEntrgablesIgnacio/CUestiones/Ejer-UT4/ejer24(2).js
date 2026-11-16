class Vehiculos {
  constructor(vmax = 150) {
    this.vmax = vmax;
  }
  comenzar = function () {
    console.log("Encender motor");
  };
  parar = function () {
    console.log("Apagar motor");
  };
  distanciaMax(tiempo) {
    return this.vmax * tiempo;
  }
}
