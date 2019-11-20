const readlineSync = require("readline-sync");
let average = 0
let sum = 0
divide = 0

console.log();
do{
  numba = Number(readlineSync.question("Non-negative integer: "));
  if (numba >= 0 && numba <Number.MAX_SAFE_INTEGER && !Number.isNaN(numba) && numba % 1 == 0) {
    sum = numba + sum
    divide +=1
  }
} while ((numba >= 0 && numba < Number.MAX_SAFE_INTEGER &&  numba % 1 == 0) || Number.isNaN(numba) || divide == 0)

average = sum/divide

average = average.toLocaleString('en', {minimumFractionDigits: 3, maximumFractionDigits: 3});
console.log("\n" + average +  ".");
