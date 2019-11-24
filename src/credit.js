const readlineSync = require("readline-sync");

let x = 1;
let credit = 0;
let addition = 0;
const MIN = 1000000000000;
const MAX = 9999999999999999;
let credit2;
let sum = 0;
let digitOne = 0;
let digitTwo = 0;
let singularDigit = 0;
let digit = 0;

console.log();
do {
  credit = Number(readlineSync.question("Number: "));
} while (credit < MIN || credit > MAX || Number.isNaN(credit) || !Number.isInteger(credit))

credit2 = credit;

while (credit2 >= 1) {
  credit2 = credit2 / 10;
  digit = digit + 1;
}
digitOne = Math.floor(credit / 10 ** (digit - 1));
digitTwo = (Math.floor(credit / 10 ** (digit - 2)) / 10) * 10;

for (let loop = 0; loop < digit; loop++) {
  singularDigit = (credit - Math.floor(credit / 10) * 10);
  credit = Math.floor(credit / 10);
  if (loop % 2 == 1) {
    if (singularDigit * 2 >= 10) {
      addition = addition + ((singularDigit * 2 - singularDigit * 2 % 10) / 10 + singularDigit * 2 % 10);
    } else if (singularDigit * 2 < 10) {
      addition = addition + singularDigit * 2;
    }
  } else {
    addition = addition + singularDigit;
  }
  ++x;
}

if (addition / 10 % 1 != 0) {
  console.log("\nInvalid.")
} else if (digit == 15 && (digitTwo == 34 || digitTwo == 37)) {
  console.log("\nAmex.")
} else if (digit == 16 && (digitTwo <= 55 && digitTwo >= 51)) {
  console.log("\nMastercard.")
} else if ((digit == 13 || digit == 16) && digitOne == 4) {
  console.log("\nVisa.")
}
