function validarNIF_NIE(nif_nie) {
  let mensajeError = "";
  let DNI_invalido = true;
  mensajeError = "El NIF/NIE introducido no es válido";

  if (DNI_invalido) {
    if (isNaN(Number(nif_nie[0])) === true) {
      if (
        nif_nie[0].toUpperCase() !== "X" &&
        nif_nie[0].toUpperCase() !== "Y" &&
        nif_nie[0].toUpperCase() !== "Z"
      ) {
      }
    }
  }
}
