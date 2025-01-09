// Refactor following solution
// Sum all number values in dict
'use strict';

const count = (obj) => {
  const arrOfValues = Object.values(obj);
  const sortedArray = arrOfValues.filter((value) => typeof value === 'number');
  return sortedArray.reduce((accumulator, current) => accumulator + current);
};

module.exports = count;
