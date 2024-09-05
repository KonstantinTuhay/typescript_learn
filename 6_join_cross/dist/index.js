"use strict";
// 1.
let data;
data = "Hello";
function printDataType(data) {
  console.log(typeof data);
}
// Вызов функции
printDataType(data); // Вывод: "string"
const user = {
  name: "Kostya",
  age: 24,
  status: "unemployed",
};
// Вывод данных профиля
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Status: ${user.status}`);
// 3.
function printValue(value) {
  console.log(value);
}
// Вызов функции
printValue("Hello"); // Вывод: "Hello"
printValue(42); // Вывод: 42
function printInfo(info) {
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
const myCar = {
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
