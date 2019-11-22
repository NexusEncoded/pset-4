const readlineSync = require("readline-sync");

let posNumba = 0;

console.log();
do{
    posNumba = Number(readlineSync.question("Positive integer: "));
} while (posNumba < 1 || posNumba > 78 || Number.isNaN(posNumba) || !Number.isInteger(posNumba));

let previous = 1;
let secondPrevious = 0;
let sum = 0;
if(posNumba == 1){
    console.log("\n1.");
} else{
    while(posNumba > 1){
        sum = previous + secondPrevious;
        secondPrevious = previous;
        previous = sum;
        posNumba--;
    }
final = sum.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})
console.log("\n" + final + ".\n");
}
