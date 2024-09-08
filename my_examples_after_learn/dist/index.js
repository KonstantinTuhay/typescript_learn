"use strict";
function printMsg(msg) {
    if (typeof msg === "string") {
        console.log(msg.toUpperCase());
    }
    else {
        console.log(msg.toExponential());
    }
}
printMsg(4);
printMsg("xfs");
