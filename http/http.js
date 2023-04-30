const http=require("http");  // We brought http module
const {eventemitterObj,eventemitterObj2}=require("./events");
const url=require("url");


// You can publish the name of npm package 
function getQueryObjects(query){
    const splittedData=query.split("&");
    const obj={};

    splittedData.forEach(element => {
      let individualData=  element.split("=");
      obj[individualData[0]]=individualData[1]
    //  obj.push({key:individualData[0],value:individualData[1]});
        

});
return obj;

}


const requestHandler=(request,response)=>{

    eventemitterObj.emit("request",request.url);

   const parsedObject=url.parse(request.url);
   const pathname=parsedObject.pathname;



    if(pathname=="/"){
      response.write("Hello people");
      response.end();
    } else if(pathname=="/data"){
     ///   console.log(request.url);

     console.log(getQueryObjects(parsedObject.query));
        
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

// You have to create a route --->
// and when that route gets hit you have to emit an event
// and you have to log the request into a file