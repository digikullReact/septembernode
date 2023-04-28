const fs=require("fs/promises");

fs.readFile("./data.json","utf-8").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

fs.writeFile("./data.log","Something to log").then(data=>{
    console.log("File created")
}).catch(err=>{
    console.log(err);
})


fs.appendFile("./data.log","Something to log \n again").then(data=>{
    console.log("File written")
}).catch(err=>{
    console.log(err);
})

fs.unlink("./data.txt").then(data=>{
    console.log("File Deleted")
}).catch(err=>{
    console.log(err);
})