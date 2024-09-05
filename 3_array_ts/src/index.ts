// 1.

const arrStr: Array<string> = ["Sasha", "Masha", "Pasha"];
console.log(arrStr);

// 2.

const arrBool: Array<boolean> = [true, false, true, true];
console.log(arrBool);

// 3.

type NumberString = number | string;

const numberString: NumberString[] = [2, "fdf", 45, "4rtrt", 45, 123];
console.log(numberString);

// 4.

type ArrObj = {
  name: string;
  price: number;
};

const arrObj: ArrObj[] = [
  { name: "Tesla", price: 40000 },
  { name: "Laptop", price: 1000 },
];
console.log(arrObj);

// 5.

type Coordinate = {
  x: number;
  y?: number;
};

const coordinate: Coordinate[] = [{ x: 2, y: 4 }, { x: 2 }];
console.log(coordinate);

// 6.

const arrNum: Array<number> = [1, 2, 3, 4, 5];
console.log(arrNum);

// 7.

type Students = {
  name?: string;
  age?: number;
  isStudent?: boolean;
};

const students: Students[] = [
  { age: 3, isStudent: false },
  { name: "Kolya", age: 24 },
  { isStudent: true },
];
console.log(students);
