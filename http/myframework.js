const fasthttp=require("./customframework");

const port=8090;

fasthttp.listen(port,()=>{
    console.log("Server Running on ",port);

})
