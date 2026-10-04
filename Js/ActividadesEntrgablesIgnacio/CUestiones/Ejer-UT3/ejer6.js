function contarLetra(cad, letra) {
    let contador = 0;
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] === letra) {
            contador++;
        }
    }
    return contador;
}