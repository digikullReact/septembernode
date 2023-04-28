const fs=require("fs");
// this is synchronous 
const fileData=fs.readFileSync("./data.json","utf-8");
console.log(fileData);

/*
fs.readFile("./data.json","utf-8",(err,data)=>{
    console.log(data);
})
*/
fs.writeFileSync("./fg.log","Ia m ssync");

fs.appendFileSync("./fg.log","Added again");

fs.unlinkSync("./data.log");

//console.log(fileData);

// this console.log wont be executed unless the filereading is done

console.log("I will be printed After the file reading is done");