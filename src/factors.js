const readlineSync = require("readline-sync");

let posNumba = 0;
let x = 1;
let y = 0;
let finalResult = "";

console.log();

do {
      posNumba = Number(readlineSync.question("Positive integer: "));
} while (posNumba <= 0 || posNumba > Number.MAX_SAFE_INTEGER || Number.isNaN(posNumba) || !Number.isInteger(posNumba));

while (x <= Math.floor(Math.sqrt(posNumba))) {

    if (x <= posNumba) {
      y = posNumba % x

      if (x === Math.floor(Math.sqrt(posNumba))) {
        finalResult = finalResult + x + ". "
        break;
      } else if (y === 0) {
        finalResult = finalResult + x + ", " + (posNumba / x) + ", "
      }
      x++
    }
}


  console.log("\n" + finalResult + "\n");
