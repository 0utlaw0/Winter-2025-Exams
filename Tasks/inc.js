// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (obj) => {
  for (const keys in obj) {
    if ((typeof obj[keys]).charAt(0).toUpperCase() === 'N') {
      obj[keys] = obj[keys] + 1;
    }
  }
  return obj;
};

module.exports = incNumbers;
