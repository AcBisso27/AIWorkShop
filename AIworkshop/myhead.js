/**
 * myhead.js is a custom implementation of Linus head commans
 * myhead will work as follows
 * node myhead.js PATTERN FILENAME
 */

const fs = require (`fs`);
const path = require (`path`)

if(process.argv.length !== 3) {
  console.log(`Usage: node ${path.basename(__filename)} FILENAME`);
  return;
}

let filename = process.argv[3];
let pattern = process.argv[2];

//File exists
if (!fs.existsSync(filename)) {
  console.log(`${path.basename(__filename)}: ${filename}: No such file name or directory`);
  return;
}

let content = fs.readFileSync(filename, 'utf-8');
let (lines = content.split(`\n`));
for(let i=0; i<10; i++) {
  console.log(lines);
}

