const readlineSync = require("readline-sync");
let final = ""

do {
  numba = Number(readlineSync.question("Positive Integer: "));
} while (numba > Number.MAX_SAFE_INTEGER || Number.isNaN(numba) || numba < 1)

while (numba > 0) {
  let end = numba % 10;
  numba = Math.floor(numba / 10);

  if (numba > 0) {
    final = final + end + ", ";
  } else{
      final = final + end + ". ";

  }

}

console.log("\n" + final)
