const appLevel=(req,res,next)=>{

   console.log("I am app level middleware");
   next();
}

const appLevel2=(req,res,next)=>{

   console.log("I am app level 2 middleware");
   next();
}


module.exports={
   appLevel,
   appLevel2

}