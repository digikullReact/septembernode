const first=function (req, res, next) {
    setTimeout(()=>{
        console.log("Params printed from first middleware",req.params);

    },5000)

    // you can do lot of things with your request and response

    // res.send("hi from middleware")
    next(); // this next will pass the req and response object to the next middleware in the chain

}

const second= (req, res, next) =>{
    console.log("Body printed from second middleware",req.body);

    // you can do lot of things with your request and response

    // res.send("hi from middleware")
    next(); // this next will pass the req and response object to the next middleware in the chain

  //res.send("hello from second middleware")

}

module.exports={
    first,
    second
}