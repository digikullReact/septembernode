const http=require("http");
const url = require("url");


const port=8090

function handler(req,res){

    const parsedObject = url.parse(req.url);
    const pathname = parsedObject.pathname;

    if(pathname=="/"){

        // then we will do some job

     // if we have to look for the method 

     if(req.method=="POST"){

        // you will have the data 

     }else if(req.method=="GET"){

        // you will have the data coming from request url

     }


    }



}

const server=http.createServer(handler)

server.listen(port,()=>{
    console.log("Server is ruuning ")
})