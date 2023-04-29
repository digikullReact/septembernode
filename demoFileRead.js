const readDir=require("./directoryReading2");

readDir("./sampledir").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})