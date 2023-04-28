const fs=require("fs/promises");
const fsSync=require("fs");
const path=require("path");
//console.log(fsSync.lstatSync("./sampledir").isDirectory() )

// path.join() --->it joins two file path as per the operating system

const RootPath="./sampledir"

const FileNames=[];

fs.readdir(RootPath).then(data=>{
    console.log(data);  // Returns an array --->

// iterate over the array
   for(let i=0;i<data.length;i++){

    //     // We have to check here if the name here is file or the directory


    // We have to extract the exact path of the file  from name --->
    
    let newPath=path.join(RootPath,data[i])
    if(fsSync.lstatSync(newPath).isDirectory() ){

        // Then what we have to do 

      //  fs.readdir() // again 

    }else{  // this is the base condition --->

        FileNames.push(newPath);
    }

   console.log()

   }

}).catch(err=>{
    console.log(err);
})