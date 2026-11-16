class Vehiculos {
  constructor(matricula, precio, vmax) {
    this.matricula = matricula;
    this.precio = precio;
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
