const readlineSync = require("readline-sync");

let check = 0
console.log();
do{
  numba = Number(readlineSync.question("Non-negative integer: "));
} while (numba < 0 || numba > Number.MAX_SAFE_INTEGER || numba % 1 != 0 || Number.isNaN(numba))

for (i = 2; i <= numba/2; i= i + 1) {
  if (numba % i == 0) {
    check = 1
  }
}
if (check == 1) {
  console.log("\nNot prime.\n")
}
else {
  console.log("\nPrime.\n")
}
