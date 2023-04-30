const EventEmitter=require("events");
const fs=require("fs/promises");

const eventemitterObj=new EventEmitter();

const eventemitterObj2=new EventEmitter();

eventemitterObj.on("request",(data)=>{
    // file operation 
  //  console.log(data);
  fs.appendFile("./logs.log",`The request for url ${data} came \n`).then(data=>{
   // console.log("Written in file")
  })
})


module.exports={
    eventemitterObj,
    eventemitterObj2
}