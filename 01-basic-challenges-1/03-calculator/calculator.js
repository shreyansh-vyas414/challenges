function calculator(a, b, o) {
  let val;
  if (o === "+") {
    val = a + b;
  } else if (o === "-") {
    val = a - b;
  } else if (o === "*") {
    val = a * b;
  } else if (o === "/") {
    val = a / b;
  }
  return val;
}

module.exports = calculator;
