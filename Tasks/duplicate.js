// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, times) => {
  if (times <= 0) return [];
  const resultArray = [];
    for (let i = 0; i < times; i++) {
      resultArray[i] = value;
    }
  return resultArray;
};

module.exports = duplicate;
