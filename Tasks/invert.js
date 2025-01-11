// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const reversedArray = Object.keys(array);
  const copiedArray = [ ...array ];
  reversedArray.forEach((i) => reversedArray[i] = copiedArray.pop());
  return reversedArray;
};

module.exports = invert;
