let Usuario = prompt("Inicia sesión", "");

if (Usuario == "Admin") {
  let contraseña = prompt("¿Contraseña?", "");

  if (contraseña === "TheMaster") {
    alert("¡Bienvenido!");
  } else if (contraseña === "" || contraseña === null) {
    alert("Cancelado.");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (Usuario === "" || Usuario === null) {
  alert("Cancelado");
} else {
  alert("No te conozco");
}
