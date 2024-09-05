"use strict";
const person = {
    name: "Kostya",
    age: 24,
};
person.city = "SPB";
console.log(person);
console.log(person.country); // не подсветило что нет такого свойства, а значит это проблема динамических свойств
