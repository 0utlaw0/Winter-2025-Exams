// Refactor following solution
// Filter array by type name
'use strict';

const filter = (array, type) => {
  const sortedArray = array.filter((value) => typeof value === type);
  return sortedArray;
};

module.exports = filter;
