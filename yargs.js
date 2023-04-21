const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
console.log(argv.name);


// You have to use this and you have to build a simple calulator 
// --add=true --first=7 --second=9
// 16
// --multiply=true --first=7 --second=9
// 63