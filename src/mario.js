const readlineSync = require("readline-sync");

let height;
let doublehash;
let row;
let print = "\n";
let spaces = 1;
let hashtags = 1;

console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

row = height + 1;
doublehash = 2;

for (let x = 0; x < height; x++) {

  while (spaces <= row - doublehash) {
    print = print + " ";
    spaces++;
  }

  while (hashtags <= doublehash) {
    print = print + "#";
    hashtags++;
  }

  console.log(print);
  doublehash++;
  print = "";
  spaces = 1;
  hashtags = 1;
}

console.log();
