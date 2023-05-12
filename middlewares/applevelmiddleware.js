const appLevel=(req,res,next)=>{

   console.log("I am app level middleware");
   next();
}

const appLevel2=(req,res,next)=>{

   console.log("I am app level 2 middleware");
   next();
}


const sanitizeUpperCase=(req,res,next)=>{

   const obj=req.body;

   let newArray=Object.entries(obj).map(ele=>{
     let tem= ele[1].toLowerCase()
     return [ele[0],tem];
    //  return ele[1].toLowerCase();

   })

   console.log(newArray);
   let newObj=Object.fromEntries(newArray);

   req.body=newObj;
   next();


}

module.exports={
   appLevel,
   appLevel2,
   sanitizeUpperCase

}