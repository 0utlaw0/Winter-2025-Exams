// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (obj) => {
  const copiedObject = {};
  const arrayOfKeys = Object.keys(obj);
  for (const keys of arrayOfKeys) {
    copiedObject[keys] = typeof obj[keys] === 'number'? obj[keys] + 1 : obj[keys];
  }
  return copiedObject;
};
module.exports = incNumbers;
