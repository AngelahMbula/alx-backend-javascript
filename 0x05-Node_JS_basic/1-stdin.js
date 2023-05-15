const readline = require('readline');

const rL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rL.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rL.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
