//Global objects--- >window object


// this will print all the global variables available in node js 
// and you can use them without importing them
// node js runtime knows about them already
console.log(JSON.stringify(Object.getOwnPropertyNames (globalThis)));