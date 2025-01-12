// Refactor following solution
// Copy only listed values from dict

const only = (W, ...only) => {
  const X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  });
  return W;
};

module.exports = only;
