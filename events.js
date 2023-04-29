const EventEmitter=require("events");
const fs=require("fs/promises");

const eventEmitterObject=new  EventEmitter()

eventEmitterObject.on("ankit",()=>{
    console.log("Ankit name exists");
})

fs.readFile("./names.txt","utf-8").then(data=>{

    if(data.includes("Ankit")){
        eventEmitterObject.emit("ankit");

    }

}).catch(err=>{
    console.log(err);
})


// 



