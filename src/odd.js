
const readlineSync = require("readline-sync");
let add = 0
let x = 0
console.log();
do{
  numba = Number(readlineSync.question("Positive integer: "));
} while (numba < 1 || numba > Number.MAX_SAFE_INTEGER || numba < Number.MIN_SAFE_INTEGER || Number.isNaN(numba) || numba % 1 != 0)

do {
  x = numba % 10;
  if (x % 2 != 0) {
    add = add + x;
  }
  numba = numba - x
  numba = numba/10;
} while (numba >= 10);

add = add + numba

console.log("\n" + add + ".");
