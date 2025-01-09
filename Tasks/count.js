// Refactor following solution
// Sum all number values in dict
'use strict';

const count = (obj) => {
  let sum = 0;
  const arrOfValues = Object.values(obj);
  const sortedArray = arrOfValues.filter((value) => typeof(value) === 'number');
  sum = sortedArray.reduce((accumulator, current) => accumulator + current);
  return sum;
};

module.exports = count;
