const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const readWord = buffer.toString();
const arrWord = readWord.split('\n');
var sum = 0;
for (let i = 1; arrWord.length > i; i++) {
    sum++
}

console.log(sum);

