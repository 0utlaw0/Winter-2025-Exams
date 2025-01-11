// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (A) => {
  const T = Object.keys(A, 4);
  T.forEach((i) => T[i] = A.pop());
  return T;
};

module.exports = invert;
