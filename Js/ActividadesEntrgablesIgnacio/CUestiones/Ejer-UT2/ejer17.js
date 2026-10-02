function pedirNumeroMayor100() {
  let numero;
    do {
        numero = prompt("Ingrese un número mayor que 100 (o cancele para salir):");
        if (numero === null || numero === "") {
            return null;
        }
        numero = parseInt(numero);
    } while (isNaN(numero) || numero <= 100);
    console.log("Número ingresado: " + numero);
    return numero;
}
pedirNumeroMayor100();