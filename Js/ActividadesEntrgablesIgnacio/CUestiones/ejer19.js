function tablero(numColumnas, numFilas) {
  if (
    !Number.isInteger(numColumnas) ||
    !Number.isInteger(numFilas) ||
    numColumnas <= 0 ||
    numFilas <= 0
  ) {
    return;
  }

  for (let i = 0; i < numFilas; i++) {
    let contenidoFile = "|";
    for (let j = 0; j < numColumnas; j++) {
      if (i % 2 == 0) {
        contenidoFile += j % 2 == 0 ? "#" : " ";
      } else {
        contenidoFile += j % 2 == 0 ? " " : "#";
      }
    }
    console.log(contenidoFile);
  }
}
tablero(7, 5);
