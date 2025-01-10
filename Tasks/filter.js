// Refactor following solution
// Filter array by type name
"use strict";

const Filter = (array, type) => {
  const sortedArray = [];
  for (const value of array) {
    if (typeof value === type) {
      sortedArray.push(value);
    }
  }
  return sortedArray;
};

module.exports = Filter;
