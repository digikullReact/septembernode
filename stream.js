const fs=require("fs");




// Read stream -->

const readstream=fs.createReadStream("./largedata.txt");

// Write stream


const writeStream=fs.createWriteStream("./dataTransfer.txt")

readstream.pipe(writeStream);

// duplex stream

// transform stream

/*

fs.readFile("./largedata.txt","utf-8").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/

