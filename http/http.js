const http=require("http");  // We brought http module


const requestHandler=(request,response)=>{
   

    if(request.url=="/"){
      response.write("Hello people");
      response.end();
    } else if(request.url=="/data"){
        response.write("Hello Data");
        response.end();
      }

}

const port=80;

const server=http.createServer(requestHandler);  // We called http .CreateServer to create an http server

server.listen(port,(err)=>{
    if(err){
        console.log("There is a problem in starting the server")
    }else{
        console.log("Server started on port" ,port)

    }

})