const {createUser}=require("../db/db");

const signup=(req,res)=>{

    const user=req.body;

    createUser(user)

    res.json({
        status:"Success",
        messag:"User Created"

    })
}


const login=(req,res)=>{

    const user=req.body;

    createUser(user)

    res.json({
        status:"Success",
        messag:"User Created"

    })



}

module.exports={
    signup
}