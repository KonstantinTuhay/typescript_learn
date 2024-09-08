const message: number | string = 5;
const messages: string[] | number[] = ["ab", "b"];

function printMsg(msg: string | number): void {
  if (typeof msg === "string") {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg.toExponential());
  }
}

printMsg(4);
printMsg("xfs");
