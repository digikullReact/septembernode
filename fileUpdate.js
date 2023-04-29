const fs=require("fs/promises");


async function ReadFile(fileName,id){
 const data=   await fs.readFile(fileName,"utf-8")
 console.log(typeof  data)
 // convert it to object

 let obj=JSON.parse(data);

 let updatedData=obj.map(ele=>{
    if(ele._id==id){
        ele.name="Suraj";
    }

    return ele;

 })

 // Write it again in the file 

 await fs.writeFile(fileName,JSON.stringify(updatedData))
 

}


ReadFile("./data.json","644beaa1fce3d706dcfa7156").then(data=>{
   // console.log(data);
}).catch(err=>{
    console.log(err);
})

