function multiplyNumeric(obj) {
  for (prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

multiplyNumeric(menu);
