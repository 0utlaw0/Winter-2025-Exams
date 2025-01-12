// Refactor following solution
// Copy only listed values from dict
'use strict';

const copyOnly = (dict, ...toCopy) => {
  const arrayOfKeys = Object.keys(dict);
  arrayOfKeys.forEach((value) => {
    if (toCopy.includes(value)) {
    } else {
      delete dict[value];
    }
  });
  return dict;
};

module.exports = copyOnly;
