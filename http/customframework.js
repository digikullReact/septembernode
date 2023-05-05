const http=require("http");

class CustomFramework {
    constructor(){

    }

    listen(port,handler){
    
        let server= http.createServer();
        this.server=server;
        server.listen(port,handler);


    }




}


module.exports=new CustomFramework();