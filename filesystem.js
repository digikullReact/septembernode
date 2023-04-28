const fs=require("fs");

// readfile

fs.readFile("./data.txt",'utf-8',function(err,result){
    console.log(err);
    console.log(result);

})


fs.readFile("./data.json",'utf-8',function(err,result){
    console.log(err);
    console.log(result);

})


// Write to file 

/*
fs.writeFile("./todo.txt","88888888",(err,data)=>{
    console.log(data);
    console.log(err);
})
*/

// if we want to keep the old contents of our file as well then we have to use appnedFile
/*
fs.appendFile("./todo.txt","I will be appended \n",(err,data)=>{
    console.log(err);
})
*/

fs.unlink("./todo.txt",(err,result)=>{
    console.log(err);
})

// your task is to write the application that takes user input and write it to the file --