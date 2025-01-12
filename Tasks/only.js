// Refactor following solution
// Copy only listed values from dict
'use strict';

const copyOnly = (dict, ...toCopy) => {
  const resultObj = {};
  const arrayOfKeys = Object.keys(dict);
  for (const keys of arrayOfKeys)
    if (toCopy.includes(keys)) resultObj[keys] = dict[keys];
  return resultObj;
};
module.exports = copyOnly;
