// Refactor following solution
// Filter array by type name
"use strict";

const Filter = (value, type) => {
  const remove = [];
  for (const index in value) {
    if (typeof value[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const key of remove) value.splice(key, 1);
  return value;
};

module.exports = Filter;
