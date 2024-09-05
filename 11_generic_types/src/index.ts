type RandomType<T> = {
  randomData: T;
};

const stringData: RandomType<string> = {
  randomData: "dsfsdfsd",
};

const numberData: RandomType<number> = {
  randomData: 23,
};
console.log(stringData);
console.log(numberData);

///////////////////////////////////////////

type Pair<T, U> = {
  first: T;
  second: U;
};

const numberPair: Pair<number, string> = {
  first: 2,
  second: "two",
};
const pair: Pair<boolean, string> = {
  first: true,
  second: "true",
};
console.log(numberPair);
console.log(pair);

///////////////////////////////////////////

type ArrayType<T> = T[];

const arrNum: ArrayType<number> = [1, 2, 3, 4, 21];
const arrStr: ArrayType<string> = ["", "2", ""];

///////////////////////////////////////////
type AdressType = {
  country: string;
  city: string;
};

type BasePersonType<T> = {
  name: string;
  address: AdressType;
  age: number;
  isMan: boolean;
  additionalInfo: T;
};

type SportType = {
  type: string;
};

type PersonAdditionalInfo = {
  sport: SportType[];
};

const person: BasePersonType<PersonAdditionalInfo> = {
  name: "roma",
  address: {
    country: "Belarus",
    city: "Vitebsk",
  },
  age: 23,
  isMan: true,
  additionalInfo: {
    sport: [{ type: "football" }, { type: "tennis" }],
  },
};

type StackType = {
  [key: string]: string[];
};

type DeveloperAdditionalInfo = {
  stack: StackType;
};

const developer: BasePersonType<DeveloperAdditionalInfo> = {
  name: "andrei",
  address: {
    country: "Poland",
    city: "Gdansk",
  },
  age: 33,
  isMan: true,
  additionalInfo: {
    stack: {
      programmingLanguages: ["JavaScript", "TypeScript"],
      libraries: ["React", "Redux", "RTK", "Axios"],
      ui: ["Ant Design", "CSS Modules"],
    },
  },
};

// 1.

type ArrayStr<T> = T[];

const stringArray: ArrayStr<string> = ["apple", "banana", "cherry"];
console.log(stringArray);

// 2.

type ArrNumber<T> = T[];
const numberArray: ArrNumber<number> = [1, 2, 3];
console.log(numberArray);

// 3.

type ArrInCommon<T, U, Y> = [T, U, Y];
const mixedArray: ArrInCommon<string, number, boolean> = ["hello", 42, false];
console.log(mixedArray);

// 4.

type InCommon<T> = T[];
type ObjCommon = {
  [key: string]: number | string;
};
type ArrCommon<Y> = Y[];

const numbers: InCommon<number> = [1, 2, 3, 4];
const string: InCommon<string> = ["Redev", "TypeScript", "React", "Redux"];
const objects: InCommon<ObjCommon> = [
  { id: 1, name: "Pasha" },
  { id: 2, name: "Masha" },
  { id: 3, name: "Sasha" },
];
const arrayNumbers: InCommon<ArrCommon<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];

// 5.

type House<T = {}> = {
  info: Info;
  features: T;
};

type Info = {
  address: string;
  city: string;
};

type Features = {
  bedrooms: number;
  bathrooms: number;
  areaSquareFeet: number;
  hasGarden: boolean;
  processor: string;
  memoryGB: number;
  storageGB: number;
  hasGraphicsCard: boolean;
};

type PartialFeatures = Partial<Features>;

const house: House<PartialFeatures> = {
  info: {
    address: "123 Main Street",
    city: "Exampleville",
  },
  features: {
    bedrooms: 3,
    bathrooms: 2,
    areaSquareFeet: 1800,
    hasGarden: true,
  },
};

const computer: House<PartialFeatures> = {
  info: {
    address: "N/A",
    city: "Techtopia",
  },
  features: {
    processor: "Intel Core i7",
    memoryGB: 16,
    storageGB: 512,
    hasGraphicsCard: true,
  },
};

const table: House<PartialFeatures> = {
  info: {
    address: "house",
    city: "house",
  },
  features: {},
};
