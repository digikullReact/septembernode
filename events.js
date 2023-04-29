const EventEmitter=require("events");
const fs=require("fs/promises");

const eventEmitterObject=new  EventEmitter()
/*
eventEmitterObject.on("ankit",(data)=>{
    console.log("Ankit name exists",data); 
    // write file should be done here
})*/
/*
fs.readFile("./names.txt","utf-8").then(data=>{

    if(data.includes("Ankit")){
        eventEmitterObject.emit("ankit","some data from here");

    }

}).catch(err=>{
    console.log(err);
})
*/

// 90909

// Read a json file with data and if the particular id exists then write that data into
// another file using events

eventEmitterObject.on("644d298158679917cf582b5e",(data)=>{

    fs.writeFile("644d298158679917cf582b5e.txt",data).then(res=>{
        console.log("written in file")
    })

})
fs.readFile("./generatedt.json","utf-8").then(data=>{


    let filtered=JSON.parse(data).find(ele=>ele._id=="644d298158679917cf582b5e");
    if(filtered){
        eventEmitterObject.emit("644d298158679917cf582b5e",JSON.stringify(filtered));
    }
  

}).catch(err=>{
    console.log(err);
})

