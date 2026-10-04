function detectaErrorCritico(cadena) {
    cadena = cadena.toLowerCase();
    return cadena.startsWith("error") || cadena.endsWith("critico");
}