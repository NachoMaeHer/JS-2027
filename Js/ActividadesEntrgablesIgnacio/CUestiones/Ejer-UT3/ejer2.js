function comprobarSpam(str) {
  let strLower = str.toLowerCase();
  return strLower.includes("gratis") || strLower.includes("xxx");
}
