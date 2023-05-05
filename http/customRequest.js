const EventEmitter=require("events");

class Request extends EventEmitter{

}

const request=new Request();
request.on("data",(chunk)=>{

})

// process of http is running underneath somewhere

httpprocess.on("requestcoming",(data)=>{
    request.emit("data",data);
})