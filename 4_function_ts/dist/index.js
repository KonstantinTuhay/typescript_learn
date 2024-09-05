"use strict";
// 1.
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Pasha"));
// 2.
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
// 3.
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(2, 4));
// 4.
function catchError(er) {
  console.log(er);
}
function handleError(error, errorHandler) {
  errorHandler(error);
}
handleError("ERROR", catchError);
// 5.
function sendMessage(message, recipient, sender = "Anonymous") {
  console.log(`Message from ${sender} to ${recipient}: ${message}`);
}
sendMessage("Hello!");
sendMessage("Hi there!", "Alice");
sendMessage("Greetings!", "Bob", "Charlie");
