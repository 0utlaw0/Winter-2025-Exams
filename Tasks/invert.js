// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';

const invert = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--)
    reversedArray[i] = array[array.length - (i + 1)];
  return reversedArray;
};

module.exports = invert;
