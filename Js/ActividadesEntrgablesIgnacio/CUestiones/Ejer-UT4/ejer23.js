function calculator() {
  this.a = 0;
  this.b = 0;

  this.read = function () {
    this.a = +prompt("Ingrese el primer valor:", 0);
    this.b = +prompt("Ingrese el segundo valor:", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//B
class calculator {
  read = function () {
    this.a = +prompt("Ingrese el primer valor:", 0);
    this.b = +prompt("Ingrese el segundo valor:", 0);
  };
  sum = function () {
    return this.a + this.b;
  };
  mul = function () {
    return this.a * this.b;
  };
}
