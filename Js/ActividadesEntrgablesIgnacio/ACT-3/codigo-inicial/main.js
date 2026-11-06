// =====================================================================
// UT03 - Actividad evaluable: Mi ficha personal
// Alumno/a: Ignacio Maestro Heredia
// Para mostrar resultados en la página usa mostrar("<p>texto</p>").
// =====================================================================

// Objeto con los datos de la ficha (ver apartado 0 del enunciado).
// Se completa en los apartados 1, 2 y 3 y lo usan los apartados 4 y 5.
// Se declara con var (no con let ni const) para que la ventana hija
// pueda acceder a ella con window.opener.ficha.
var ficha = {};

// 1. STRING ------------------------------------------------------------

function analizarNombre() {
  mostrar("<h2>1. Nombre</h2>");
  // Tu código aquí
  //1.1
  let nombre = "";
  while (!nombre) {
    nombre = prompt("Introduce tu nombre completo:");
  }
  mostrar(`<p>Nombre: ${nombre}</p>`);
  //1.2
  nombre = nombre
    .trim()
    .split(" ")
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(),
    )
    .join(" ");
  ficha.nombre = nombre;
  //1.3
  const iniciales = nombre
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase())
    .join("");
  const numLetras = nombre.replace(" ", "").length;
  const nombreReves = nombre.split("").reverse().join("");
  mostrar(`<p>Iniciales: ${iniciales}</p>`);
  mostrar(`<p>Número de letras (sin espacios): ${numLetras}</p>`);
  mostrar(`<p>Nombre al revés: ${nombreReves}</p>`);
  //1.4
  let dni = "";
  while (!dni) {
    dni = prompt("Introduce tu DNI:");
  }
  let primerApellido = nombre.split(" ").slice(-2, -1)[0];
  let usuario =
    quitarTildes(primerApellido.slice(0, 4).toLowerCase()).padEnd(4, "x") +
    quitarTildes(nombre.charAt(0).toLowerCase()) +
    dni.slice(-3);
  ficha.usuario = usuario;
  mostrar(`<p>Usuario: ${usuario}</p>`);
}

// 2. NUMBER Y MATH -----------------------------------------------------
function analizarNumeros() {
  mostrar("<h2>2. Números</h2>");
  // Tu código aquí
}

// 3. DATE --------------------------------------------------------------
function analizarFechas() {
  mostrar("<h2>3. Fechas</h2>");
  // Tu código aquí
}

// 4. VENTANAS ----------------------------------------------------------
let ventanaHija = null;

function abrirVentana() {
  mostrar("<h2>4. Ventanas</h2>");
  // Tu código aquí
}

// La ventana hija llama a esta función con window.opener.recibirMensaje(texto)
function recibirMensaje(texto) {
  // Tu código aquí
}

// 5. ALMACENAMIENTO ----------------------------------------------------
function guardarFicha() {
  mostrar("<h2>5. Guardar ficha</h2>");
  // Tu código aquí
}
