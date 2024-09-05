"use strict";
//////////////////////////////
// Pick
//////////////////////////////
const userProfile = {
    name: "Kostya",
    //   age: 24,
    email: "tugay-k@mail.ru",
};
console.log(userProfile);
const partialUser = {};
partialUser.name = "Kostya";
partialUser.age = 24;
console.log(partialUser);
const user = {
    name: "Kostya",
    age: 24,
};
console.log(user);
const user12 = {
    name: "Kostya",
    age: 24,
    street: "Mendeleeva",
};
// user12.age = 34;//because read-only property
console.log(user12);
const fruitData = {
    apple: { color: "red", taste: "normal" },
    banana: { color: "yellow", taste: "middle" },
    cherry: { color: "red", taste: "ok" },
};
console.log(fruitData);
//////////////////////////////
// ReturnType
//////////////////////////////
function getUser() {
    return { name: "Alice", age: 30 };
}
const user213 = { name: "Alice", age: 30 };
console.log(user213);
const primaryColor = "red";
// const secondaryColor: PrimaryColors = "green"; //Ошибка компиляции
console.log(primaryColor);
const nonPrimaryColor = "green"; // Допустимо
const someString = "Hello"; // Допустимо
const partialNameAndEmail = { name: "Charlie" }; // Допустимо, только name
