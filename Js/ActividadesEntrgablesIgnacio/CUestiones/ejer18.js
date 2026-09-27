function triangulo(lineas) {
    if (Number.isInteger(lineas) && lineas > 0) {
        for (let i = 1; i <= lineas; i++) {
            console.log("#".repeat(i));
        }
    }
}