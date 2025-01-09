// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, times) => {
if (times <= 0) return [];
const resultArr = Array(times);
resultArr.fill(value, 0, times);
return resultArr;
};

module.exports = duplicate;
