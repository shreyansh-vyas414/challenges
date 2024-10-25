function countOccurrences(s, c) {
  let v = 0;
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (e === c) v++;
  }
  return v;
}

module.exports = countOccurrences;
