// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, times) => {
  if (times <= 0) return [];
  const resultArray = Array(times);
  resultArray.fill(value, 0, times);
  return resultArray;
};

module.exports = duplicate;
