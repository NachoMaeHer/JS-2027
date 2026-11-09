let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}
