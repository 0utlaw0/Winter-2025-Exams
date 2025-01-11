// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array) => {
  const reversedArray = Object.keys(array);
  const copiedArray = [ ...array ];
  for (const keys of reversedArray)
  reversedArray[keys] = copiedArray.pop()
  return reversedArray;
};

module.exports = invert;
