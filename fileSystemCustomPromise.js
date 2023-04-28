const fs = require("fs");


// Custom promise for the readFile --->

// Marshaling (seriallization) --->
// {}
function fsReadFilePromise() {
  return new Promise((res, rej) => {

        fs.readFile("./data.json", 'utf-8', function (err, result) {


         //   rej(err);
           // res(result);
            //rej(err);
            
            if (err) {
                rej(err);
            } else {
                res(result);
            }
            


        })

    })
}


function WriteFile(fileName,data){

    return new Promise((res,rej)=>{

        fs.writeFile(fileName,data,(err,data)=>{
            if(err){  // null and undefined are treated as false in js so we can use them directly
                rej(err)
            }else{
                res(data);
            }
            
            
        })

    })
  
}

WriteFile("sample.txt","HEllo sample").then(data=>{
    console.log("File written successfully")
}).catch(err=>{
    console.log(err);
})

fsReadFilePromise().then(data=>{
    console.log("Resolvedd----")
    console.log(data);
}).catch(err=>{
    console.log("Rejected------")

    console.log(err);
})
