const MAX = 10;
let seguir = false;
for (let i = 0; seguir == false; i++) {
  document.body.innerHTML += "<p>" + i + "<p>";
  if (i == MAX) seguir = false;
}
