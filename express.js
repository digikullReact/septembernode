const express=require("express");
const app=express();

let port=process.argv[2];

app.listen(port,()=>{
    console.log(`server running on ${port}`);

})