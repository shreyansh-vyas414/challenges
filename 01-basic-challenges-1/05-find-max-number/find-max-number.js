function findMaxNumber(a) {
  // Using simple for loop
  let l = a.length;
  let c = [0];
  for (let i = 0; i < l; i++) a[i] > c ? (c = a[i]) : null;
  return c;
  // Using forEach Loop
  //   let c = [0];
  //   a.forEach((e) => (e > c ? (c = e) : null));
  //   console.log(c);
  //   let c = [0];
  //   let l = a.length;
  //   let i = 0;
  //   while (i < l) {
  //     a[i] > c ? (c = a[i]) : null;
  //     i++;
  //   }
  //   return c
  // Using reduce
  //   let max = a.reduce((e, val) => (val > e ? val : e), 0);
  console.log(max);
}

module.exports = findMaxNumber;
