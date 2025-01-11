// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (obj) => {
  const copiedObject = {};
  for (const keys in obj) {
    if (typeof obj[keys] === 'number') {
      copiedObject[keys] = obj[keys] + 1;
    } else {
      copiedObject[keys] = obj[keys];
    }
  }
  return copiedObject;
};
module.exports = incNumbers;
