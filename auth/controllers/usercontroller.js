const {getAllUsers}=require("../db/db");

const getUserData=(req,res)=>{

    const users=getAllUsers();

    res.json({
        message:"Success",
        data:users
    })



}
// should be protected api

// Create a  get user profile api ----> so user will pass the id and you have to gets it data

// Create a A user profile edit api --->

module.exports={
    getUserData
}