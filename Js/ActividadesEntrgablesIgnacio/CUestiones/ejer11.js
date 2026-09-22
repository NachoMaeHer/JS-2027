let userName = prompt("Quién está ahí?", "");

if (userName == "Admin") {
  let pass = prompt("¿Contraseña?", "");

  if (pass === "TheMaster") {
    alert("Bienvenido!");
  } else if (pass === "" || pass === null) {
    alert("Cancelado.");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (userName === "" || userName === null) {
  alert("Canceledo");
} else {
  alert("No te conozco");
}
