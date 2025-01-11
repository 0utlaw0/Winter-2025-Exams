// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const reversedArray = Object.keys(array);
  reversedArray.forEach((i) => reversedArray[i] = array.pop());
  return reversedArray;
};

module.exports = invert;
