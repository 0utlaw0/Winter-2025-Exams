// Refactor following solution
// Filter array by type name
"use strict";

const Filter = (array, type) => {
  const sortedArray = array.filter((value) => typeof value === type);
  return sortedArray;
};

module.exports = Filter;
