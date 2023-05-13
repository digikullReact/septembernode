const {createUser}=require("../db/db");

const signup=(req,res,next)=>{

    const user=req.body;

   let result= createUser(user)
   if(result){
    res.json({
        status:"Success",
        messag:"User Created"

    })

   }else{
    // if you invoke next like this anywhere in your code 
    // it will just hit the error middlewar
   // throw new Error("Errorororo")
   next(new Error("User Already Exists"))

   }

   
}



const login=(req,res)=>{

res.json({
        status:"Success",
        messag:"User Logged In"

    })



}

module.exports={
    signup,
    login
}