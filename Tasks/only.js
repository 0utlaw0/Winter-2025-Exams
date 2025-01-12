// Refactor following solution
// Copy only listed values from dict
'use strict';

const copyOnly = (dict, ...toCopy) => {
  const resultObj = {};
  const arrayOfKeys = Object.keys(dict);
  arrayOfKeys.forEach((value) => {
    if (toCopy.includes(value)) resultObj[value] = dict[value];
  });
  return resultObj;
};

module.exports = copyOnly;
