const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
console.log(argv.operation);


// You have to use this and you have to build a simple calulator 
// --operation=multiply --first=7 --second=9
// 16
// --operation=add --first=7 --second=9
// 63