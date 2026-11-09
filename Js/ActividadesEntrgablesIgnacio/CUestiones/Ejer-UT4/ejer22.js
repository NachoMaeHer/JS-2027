let usu = {
  titular: "Alex",
  saldo: 0,
  ingresar(cantidad) {
    this.saldo += cantidad;
  },
  extraer(cantidad) {
    if (cantidad > this.saldo) {
      alert("Saldo insuficiente");
    } else {
      this.saldo -= cantidad;
    }
  },
  informar(cantidad) {
    alert(`Titular: ${this.titular}, Saldo: ${this.saldo}€`);
  },
};
usu.ingresar(3000);
usu.extraer(50);
usu.informar();
