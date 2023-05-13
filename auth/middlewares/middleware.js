const bcrypt = require('bcrypt');
const {getUserByUsername}=require("../db/db");

// its a very special middleware ,it takes four arguments 
const errorMiddleware=(err,req,res,next)=>{
  //  console.log(err);
    // We will send error from here
    res.json({
        message:"Failed",
        error:err.toString()
    })

}

const encryptPassword=(req,res,next)=>{
    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        console.log(hash);
        req.body.password=hash
        next();
    });


}

const checkPassword=(req,res,next)=>{
    const user=getUserByUsername(req.body.username);
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(!result){
            next(new Error("Please enter correct username or password"))
        }else{
            next();
        }
    
    });


}

module.exports={
    errorMiddleware,
    encryptPassword,
    checkPassword
}