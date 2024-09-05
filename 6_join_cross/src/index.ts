// 1.

let data: string | number;
data = "Hello";

function printDataType(data: string | number): void {
  console.log(typeof data);
}

// Вызов функции
printDataType(data); // Вывод: "string"

// 2.

type Info = {
  name: string;
  age: number;
};

type Status = {
  status: string;
};

type Profile = Status & Info;

const user: Profile = {
  name: "Kostya",
  age: 24,
  status: "unemployed",
};

// Вывод данных профиля
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Status: ${user.status}`);

// 3.

function printValue(value: string | number): void {
  console.log(value);
}

// Вызов функции
printValue("Hello"); // Вывод: "Hello"
printValue(42); // Вывод: 42
// printValue(true);

// 4.

type Name = {
  name?: string;
};

type Age = {
  age?: number;
};

type Stat = {
  status?: string;
};

type Inf = Name & Age & Stat;

function printInfo(info: Inf): void {
  console.log(`Name: ${info.name}`);
  console.log(`Age: ${info.age}`);
  console.log(`Status: ${info.status}`);
}

// Вызов функции с объектами разных типов
printInfo({ name: "Alice" });
// Вывод: Name: Alice

printInfo({ age: 30 });
// Вывод: Age: 30

printInfo({ name: "Bob", age: 25, status: "Active" });
// Вывод: Name: Bob, Age: 25, Status: Active

// 5.

type CarInfo = {
  model: string;
  year: number;
};

type CarFeatures = {
  hasAC: boolean;
  hasBluetooth: boolean;
};

type CarProfile = CarInfo & CarFeatures;

const myCar: CarProfile = {
  model: "Tesla",
  year: 2024,
  hasAC: true,
  hasBluetooth: true,
};
// Вывод данных о моей машине
console.log(`Model: ${myCar.model}`);
console.log(`Year: ${myCar.year}`);
console.log(`Air Conditioning: ${myCar.hasAC ? "Yes" : "No"}`);
console.log(`Bluetooth: ${myCar.hasBluetooth ? "Yes" : "No"}`);
