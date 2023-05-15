const readline = require('readline');

const rL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rL.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  rL.close();
});

process.on('exit', () => {
  console.log('\nThis important software is now closing');
});
