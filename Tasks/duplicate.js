// Refactor following solution
// Return an array without duplicates
"use strict";

const duplicate = (value, times) => {
  if (times <= 0) return [];
  const resultArray = Array(times);
  return resultArray.fill(value, 0, times);
};

module.exports = duplicate;
