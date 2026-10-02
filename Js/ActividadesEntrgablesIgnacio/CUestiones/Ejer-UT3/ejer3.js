function truncar(str, maxLong) {
  if (str.length > maxLong) {
    return str.slice(0, maxLong - 1) + "…";
  } else {
    return str;
  }
}
