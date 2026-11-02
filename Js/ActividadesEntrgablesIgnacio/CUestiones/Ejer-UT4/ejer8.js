function mayusculaPrimera(array, cadena) {
        let pos = array.indexOf(cadena);
        if (pos !== -1) {
          array[pos] = array[pos].toUpperCase();
        }
      }

      function mayusculaUltima(array, cadena) {
        let pos = array.lastIndexOf(cadena);
        if (pos !== -1) {
          array[pos] = array[pos].toUpperCase();
        }
      }

      function mayusculaTodas(array, cadena) {
        let pos = array.indexOf(cadena);
        while (pos !== -1) {
          array[pos] = array[pos].toUpperCase();
          pos = array.indexOf(cadena, pos + 1);
        }
      }

      let original = [1, "pera", 2, "manzana", "pera", 3, "uva", "pera"];

      let a1 = original.slice();
      mayusculaPrimera(a1, "pera");
      console.log("Primera:", a1);

      let a2 = original.slice();
      mayusculaUltima(a2, "pera");
      console.log("Última:", a2);

      let a3 = original.slice();
      mayusculaTodas(a3, "pera");
      console.log("Todas:", a3);

      let a4 = original.slice();
      mayusculaPrimera(a4, "kiwi");
      mayusculaUltima(a4, "kiwi");
      mayusculaTodas(a4, "kiwi");
      console.log("Sin cambios:", a4);