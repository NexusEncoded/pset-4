const readlineSync = require("readline-sync");

let sum = 0;
let x = 0;

console.log("")
do{
  lower1 = Number(readlineSync.question("Lower bound: "));
  upper1 = Number(readlineSync.question("Upper bound: "));
} while (lower1 < Number.MIN_SAFE_INTEGER || upper1 > Number.MAX_SAFE_INTEGER || lower1 >= upper1 || Number.isNaN(lower1) || Number.isNaN(upper1) || lower1 % 1 != 0 || upper1 % 1 != 0)

for (let x = lower1; x <= upper1; x++) {
if (lower1 % 2 === 0){
  for (x = lower1; x <= upper1; x+=2){
    sum = x + sum;
  }
}
}
if (lower1 % 2 !== 0){
  for (x = lower1 + 1; x <= upper1; x+=2){
    sum = x + sum;
  }
}
sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");
