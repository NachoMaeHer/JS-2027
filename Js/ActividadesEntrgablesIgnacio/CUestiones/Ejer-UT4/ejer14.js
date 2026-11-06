let john = { nombre: "John", apellido: "Smith", id: 1 };
let pete = { nombre: "Pete", apellido: "Hunt", id: 2 };
let mary = { nombre: "Mary", apellido: "Key", id: 3 };

let usuarios = [john, pete, mary];

let usuariosMapeados = usuarios.map((u) => ({
  nombreCompleto: `${u.nombre} ${u.apellido}`,
  id: u.id,
}));
console.log(usuariosMapeados);

alert(usuariosMapeados[0].id); // 1
alert(usuariosMapeados[0].nombreCompleto); // John Smith
