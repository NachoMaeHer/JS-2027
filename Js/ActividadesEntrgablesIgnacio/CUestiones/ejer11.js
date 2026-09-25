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

/**
 * --Correción del ejercicio 11--
 *
 * let userName = prompt("Quién está ahí?", "");

if (userName == "Admin") {

    let pass = prompt("¿Contraseña?", "");

    if (pass === "TheMaster") {
  alert( "Bienvenido!" );
    } else if (pass === "" || pass === null) {
  alert( "Cancelado." );
    } else {
  alert( "Contraseña incorrecta" );
    }

} else if (userName === "" || userName === null) {
    alert( "Canceledo" );
} else {
    alert( "No te conozco" );
}
 */
