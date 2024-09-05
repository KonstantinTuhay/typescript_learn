// 1.

function greet(name: string): string {
  return "Hello, " + name + "!";
}
console.log(greet("Pasha"));

// 2.

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

// 3.

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(2, 4));

// 4.

function catchError(er: string): void {
  console.log(er);
}

function handleError(
  error: string,
  errorHandler: (error: string) => void
): void {
  errorHandler(error);
}
handleError("ERROR", catchError);

// 5.

function sendMessage(
  message: string,
  recipient?: string,
  sender: string = "Anonymous"
): void {
  console.log(`Message from ${sender} to ${recipient}: ${message}`);
}

sendMessage("Hello!");
sendMessage("Hi there!", "Alice");
sendMessage("Greetings!", "Bob", "Charlie");
