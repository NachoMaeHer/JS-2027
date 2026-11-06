      // Devuelve las letras de la cadena ordenadas alfabéticamente
      function ordenarLetras(cadena) {
        let letras = Array.from(cadena); // "hola" -> ["h", "o", "l", "a"]
        letras.sort(); // ["a", "h", "l", "o"]  (modifica el array)
        return letras.join(""); // "ahlo"
      }

      // Versión mejorada: respeta tildes, ñ y mayúsculas/minúsculas
      function ordenarLetrasES(cadena) {
        let letras = Array.from(cadena);
        letras.sort(function (a, b) {
          return a.localeCompare(b, "es");
        });
        return letras.join("");
      }

      // Pruebas
      console.log(ordenarLetras("hola")); // "ahlo"
      console.log(ordenarLetras("banana")); // "aaabnn"
      console.log(ordenarLetras("")); // ""

      // Casos donde sort() a secas se equivoca
      console.log(ordenarLetras("Hola")); // "Halo"  (la H va antes que la a)
      console.log(ordenarLetras("árbol")); // "blorá" (la á va al final)

      console.log(ordenarLetrasES("Hola")); // "aHlo"
      console.log(ordenarLetrasES("árbol")); // "áblor"