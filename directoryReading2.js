const fs=require("fs/promises");
const fsSync=require("fs");
const path=require("path");

let arrofFiles=[];

async function ReadDirectory(directoryPath){

    let arraysOffiles=await fs.readdir(directoryPath);

    for(let i=0;i<arraysOffiles.length;i++){

        // check whether its a directory of not
        let directoryPathInternal=path.join(directoryPath,arraysOffiles[i]);
        if(fsSync.lstatSync(directoryPathInternal).isDirectory() ){
            // we have to repeat the process
            await ReadDirectory(directoryPathInternal);
        }else{
            // this is our base condition 
            arrofFiles.push(arraysOffiles[i]);
        }
    }
  
return arrofFiles;


}
/*
ReadDirectory("./sampledir").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/


module.exports=ReadDirectory