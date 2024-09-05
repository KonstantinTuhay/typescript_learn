// 1.

const identity = <T>(res: T): void => {
  console.log(res);
};
const result1 = identity<number>(5); // result1 имеет тип number
const result2 = identity<string>("Hello"); // result2 имеет тип string

// 2.

const toArray = <T>(arg: T): T[] => {
  return [arg];
};

const arr1 = toArray<number>(42); // arr1 имеет тип number[]
const arr2 = toArray<string>("Test"); // arr2 имеет тип string[]
console.log(arr1);
console.log(arr2);
