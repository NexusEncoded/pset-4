const readlineSync = require("readline-sync");

do{
  numba = Number(readlineSync.question("Positive integer: "));
} while (numba < 1 || numba > Number.MAX_SAFE_INTEGER || numba < Number.MIN_SAFE_INTEGER || Number.isNaN(numba) || numba % 1 != 0)
