/**
 * myhead.js is a custom implementation of Linus head commans
 * firstf will find the pattern in the first n lines
 * firstf will workj as followsnode firstf.js PATTERN FILENAME NUMBER_OF_LINES
 */

const fs = require (`fs`);
const path = require (`path`)

if(process.argv.length !== 5) {
  console.log(`Usage: node ${path.basename(__filename)} FILENAME NUMBER_OF_LINES`);
  return;
}


let nlines = Number (process.argv[4]);
let filename = process.argv[3];
let pattern = process.argv[2];

//File exists
if (!fs.existsSync(filename)) {
  console.log(`${path.basename(__filename)}: ${filename}: No such file name or directory`);
  return;
}

//Empty pattern
if (pattern.length === 0) {
  console.log(`PATTERN is an empty string`);
  return;
}

//Wrong Number
if (isNaN(nlines) || nlines <= 0) {
  console.log(`Please enter a valid number for NUMBER_OF_LINES`)
  return;
}


let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split(`\n`)

//Check the number of lines
let limit = nlines < lines.length ? nlines : lines.length;

for (let i=0; i<limit; i++) {
  if(lines[i].includes(pattern)) {
    console.log(lines[i]);
  }
}
