const readlineSync = require("readline-sync");

do {
  numba = Number(readlineSync.question("Positive Integer: "));
}while (numba > Number.MAX_SAFE_INTEGER || Number.isNaN(numba) || numba < 1)

i = numba
for i in
