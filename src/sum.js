const readlineSync = require("readline-sync");

let lower1 = Number(readlineSync.question("Lower bound: "));
let upper1 = Number(readlineSync.question("Upper bound: "));
let lower2 = Number(readlineSync.question("Lower bound: "));
let upper2 = Number(readlineSync.question("Upper bound: "));


if (numba < Number.MIN_SAFE_INTEGER){
  console.log("\nInvalid.")
