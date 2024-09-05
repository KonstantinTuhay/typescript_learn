"use strict";
// 1.
const identity = (res) => {
  console.log(res);
};
const result1 = identity(5); // result1 имеет тип number
const result2 = identity("Hello"); // result2 имеет тип string
// 2.
const toArray = (arg) => {
  return [arg];
};
const arr1 = toArray(42); // arr1 имеет тип number[]
const arr2 = toArray("Test"); // arr2 имеет тип string[]
console.log(arr1);
console.log(arr2);
